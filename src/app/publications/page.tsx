'use client';

import { useEffect, useState } from 'react';
import { parseBibTeX, formatAuthors, formatEditors } from '@/utils/bibtexParser';

interface Publication {
  type: string;
  citationKey: string;
  title: string;
  author: string;
  journal?: string;
  year: number;
  doi?: string;
  volume?: string;
  number?: string;
  pages?: string;
  booktitle?: string;
  publisher?: string;
  editor?: string;
  chapter?: string;
  isbn?: string;
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'articles' | 'chapters'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/data/publications.bib');
        if (!response.ok) {
          throw new Error('Failed to fetch publications');
        }
        const data = await response.text();
        const parsedPublications = parseBibTeX(data);
        if (!parsedPublications || parsedPublications.length === 0) {
          throw new Error('No publications found or parsing failed');
        }
        setPublications(parsedPublications);
        setError(null);
      } catch (error) {
        console.error('Error loading publications:', error);
        setError('Failed to load publications. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  // Improved filtering logic
  const filteredPublications = publications.filter(pub => {
    // Search matching
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const matchesSearch = searchQuery === '' || searchTerms.every(term =>
      pub.title?.toLowerCase().includes(term) ||
      pub.author?.toLowerCase().includes(term) ||
      pub.journal?.toLowerCase().includes(term) ||
      pub.booktitle?.toLowerCase().includes(term) ||
      pub.publisher?.toLowerCase().includes(term)
    );

    // Type matching with improved handling
    const matchesType = selectedType === 'all' ||
      (selectedType === 'articles' && pub.type.toLowerCase() === 'article') ||
      (selectedType === 'chapters' && (
        ['inbook', 'incollection', 'inproceedings', 'book', 'proceedings'].includes(pub.type.toLowerCase())
      ));

    // Year matching with proper type conversion
    const pubYear = typeof pub.year === 'string' ? parseInt(pub.year, 10) : pub.year;
    const matchesYear = selectedYear === 'all' || pubYear === selectedYear;

    return matchesSearch && matchesType && matchesYear;
  });

  // Group publications by year with proper sorting
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    const year = typeof pub.year === 'string' ? parseInt(pub.year, 10) : pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  // Get unique years and ensure they're numbers
  const allYears = Array.from(new Set(
    publications.map(pub => typeof pub.year === 'string' ? parseInt(pub.year, 10) : pub.year)
  )).sort((a, b) => b - a);

  const formatJournalInfo = (pub: Publication) => {
    const parts = [];
    if (pub.journal) parts.push(pub.journal);
    if (pub.volume) parts.push(`Vol. ${pub.volume}`);
    if (pub.number) parts.push(`No. ${pub.number}`);
    if (pub.pages) parts.push(`pp. ${pub.pages}`);
    if (pub.year) parts.push(`(${pub.year})`);
    return parts.join(', ');
  };

  const formatBookInfo = (pub: Publication) => {
    const parts = [];
    if (pub.booktitle) parts.push(`In: ${pub.booktitle}`);
    if (pub.editor) parts.push(`Eds: ${formatEditors(pub.editor)}`);
    if (pub.publisher) parts.push(pub.publisher);
    if (pub.pages) parts.push(`pp. ${pub.pages}`);
    if (pub.year) parts.push(`(${pub.year})`);
    if (pub.isbn) parts.push(`ISBN: ${pub.isbn}`);
    return parts.join(', ');
  };

  const formatDOILink = (doi: string) => {
    return `https://doi.org/${doi}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 hover-section">Publications</h1>
          <div className="text-center py-12">
            <div className="animate-pulse text-gray-500">Loading publications...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 hover-section">Publications</h1>
          <div className="text-center py-12">
            <div className="text-red-500">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 hover-section">Publications</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search publications by title, author, journal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.trim())}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                focus:ring-2 focus:ring-primary focus:border-transparent
                placeholder-gray-500 dark:placeholder-gray-400
                transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Type Filter with improved labels */}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedType === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All Publications ({publications.length})
          </button>
          <button
            onClick={() => setSelectedType('articles')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedType === 'articles'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Journal Articles ({publications.filter(p => p.type.toLowerCase() === 'article').length})
          </button>
          <button
            onClick={() => setSelectedType('chapters')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedType === 'chapters'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Book Chapters & Proceedings ({publications.filter(p => ['inbook', 'incollection', 'inproceedings', 'book', 'proceedings'].includes(p.type.toLowerCase())).length})
          </button>
        </div>

        {/* Year Filter with counts */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedYear('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedYear === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All Years
          </button>
          {allYears.map(year => {
            const yearCount = publications.filter(p => {
              const pubYear = typeof p.year === 'string' ? parseInt(p.year, 10) : p.year;
              return pubYear === year;
            }).length;
            return (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedYear === year
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {year} ({yearCount})
              </button>
            );
          })}
        </div>

        {/* Search Results Count with improved messaging */}
        <div className="mb-8 text-center text-gray-600 dark:text-gray-400">
          {searchQuery && (
            <p>
              Found {filteredPublications.length} {filteredPublications.length === 1 ? 'publication' : 'publications'}
              {selectedType !== 'all' && ` in ${selectedType === 'articles' ? 'Journal Articles' : 'Book Chapters & Proceedings'}`}
              {selectedYear !== 'all' && ` from ${selectedYear}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          )}
        </div>

        {filteredPublications.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No publications found matching your criteria.
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(publicationsByYear).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, pubs]) => (
              <section key={year} className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary dark:text-primary/90 hover-section">
                  {year}
                </h2>
                <div className="space-y-6">
                  {pubs.map((pub) => (
                    <div key={pub.citationKey} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover-publication">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white hover-link inline-block">
                        {pub.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        {formatAuthors(pub.author)}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 italic">
                        {pub.type === 'article' ? formatJournalInfo(pub) : formatBookInfo(pub)}
                      </p>
                      {pub.doi && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">DOI:</span>
                          <a
                            href={formatDOILink(pub.doi)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-link text-blue-600 dark:text-blue-400 text-sm inline-flex items-center gap-1"
                          >
                            {pub.doi}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Citation Metrics */}
        <section className="mt-12 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover-section">
          <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary/90">Research Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover-metric">
              <p className="text-4xl font-bold text-primary dark:text-primary/90 mb-2">{publications.length}</p>
              <p className="text-gray-600 dark:text-gray-300">Publications</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover-metric">
              <p className="text-4xl font-bold text-primary dark:text-primary/90 mb-2">1000+</p>
              <p className="text-gray-600 dark:text-gray-300">Total Citations</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover-metric">
              <p className="text-4xl font-bold text-primary dark:text-primary/90 mb-2">25</p>
              <p className="text-gray-600 dark:text-gray-300">h-index</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 