'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { X, Filter, Calendar, Users, Award, Microscope, GraduationCap, Building, Heart } from 'lucide-react';

// Gallery data structure
interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  date: string;
  category: string;
  image: string;
  description: string;
  likes: number;
  isLiked: boolean;
}

// Sample gallery data - you can replace with actual images
const galleryData: GalleryItem[] = [
  // Lab Outings
  {
    id: 1,
    title: "Annual Lab Retreat 2024",
    caption: "Team building and research discussions",
    date: "March 2024",
    category: "Lab Outings",
    image: "/images/facilities/waters-ms.jpg",
    description: "Our annual lab retreat where team members shared research progress and enjoyed team building activities in the beautiful hills of Darjeeling.",
    likes: 24,
    isLiked: false
  },
  {
    id: 2,
    title: "Lab Picnic at Eco Park",
    caption: "Fun day out with the entire team",
    date: "January 2024",
    category: "Lab Outings",
    image: "/images/facilities/hplc.jpg",
    description: "A wonderful day spent at Eco Park with lab members, enjoying nature and strengthening our bonds as a research family.",
    likes: 18,
    isLiked: false
  },
  
  // Conferences
  {
    id: 3,
    title: "International Biomarker Conference",
    caption: "Presenting our latest research findings",
    date: "February 2024",
    category: "Conferences",
    image: "/images/facilities/ftir.jpg",
    description: "Dr. Koel Chaudhary presented groundbreaking research on novel biomarkers at the International Conference on Clinical Biomarkers.",
    likes: 32,
    isLiked: false
  },
  {
    id: 4,
    title: "IEEE EMBC 2023",
    caption: "Biomedical engineering excellence",
    date: "July 2023",
    category: "Conferences",
    image: "/images/facilities/nanodrop.jpg",
    description: "Our team presented innovative computational approaches for biomarker discovery at the IEEE Engineering in Medicine and Biology Conference.",
    likes: 15,
    isLiked: false
  },
  
  // Seminars
  {
    id: 5,
    title: "Student Research Seminar Series",
    caption: "PhD students presenting their work",
    date: "December 2023",
    category: "Seminars",
    image: "/images/facilities/ldir.jpg",
    description: "Monthly seminar series where our PhD students present their research progress and receive valuable feedback from peers and faculty.",
    likes: 12,
    isLiked: false
  },
  {
    id: 6,
    title: "Guest Lecture on Metabolomics",
    caption: "Expert insights from industry leaders",
    date: "November 2023",
    category: "Seminars",
    image: "/images/facilities/zetasizer.jpg",
    description: "Distinguished guest speaker shared cutting-edge developments in metabolomics and its applications in personalized medicine.",
    likes: 28,
    isLiked: false
  },
  
  // Awards
  {
    id: 7,
    title: "Best Research Paper Award",
    caption: "Recognition for outstanding contribution",
    date: "October 2023",
    category: "Awards",
    image: "/images/facilities/AFM.jpeg",
    description: "Our research on novel biomarkers for early disease detection received the Best Research Paper Award at the National Biomedical Conference.",
    likes: 45,
    isLiked: false
  },
  {
    id: 8,
    title: "Young Scientist Award",
    caption: "Excellence in biomedical research",
    date: "September 2023",
    category: "Awards",
    image: "/images/facilities/Milli-Q.jpg",
    description: "PhD student received the prestigious Young Scientist Award for innovative work in computational biology and biomarker discovery.",
    likes: 38,
    isLiked: false
  },
  
  // Lab Work
  {
    id: 9,
    title: "Advanced Mass Spectrometry",
    caption: "Cutting-edge analytical techniques",
    date: "Ongoing",
    category: "Lab Work",
    image: "/images/facilities/waters-ms.jpg",
    description: "State-of-the-art Waters mass spectrometry system enabling precise molecular analysis for biomarker research.",
    likes: 21,
    isLiked: false
  },
  {
    id: 10,
    title: "HPLC Analysis Session",
    caption: "Protein purification and analysis",
    date: "Daily Operations",
    category: "Lab Work",
    image: "/images/facilities/hplc.jpg",
    description: "High-performance liquid chromatography for protein separation and purification in our biomarker discovery pipeline.",
    likes: 16,
    isLiked: false
  },
  
  // Alumni
  {
    id: 11,
    title: "Alumni Reunion 2023",
    caption: "Celebrating our graduates' success",
    date: "August 2023",
    category: "Alumni",
    image: "/images/facilities/concentrator-plus.jpg",
    description: "Annual reunion bringing together our accomplished alumni to share their career journeys and maintain connections with the lab.",
    likes: 35,
    isLiked: false
  },
  {
    id: 12,
    title: "Alumni Success Stories",
    caption: "Inspiring the next generation",
    date: "Ongoing",
    category: "Alumni",
    image: "/images/facilities/EZ-Retriever.jpg",
    description: "Our alumni continue to make significant contributions in academia and industry, inspiring current students and researchers.",
    likes: 29,
    isLiked: true
  }
];

const categories = ['All', 'Lab Work', 'Conferences', 'Seminars', 'Awards', 'Alumni', 'Lab Outings',];

const categoryIcons = {
  'All': Filter,
  'Lab Outings': Users,
  'Conferences': Building,
  'Seminars': GraduationCap,
  'Awards': Award,
  'Lab Work': Microscope,
  'Alumni': Calendar
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(galleryData);

  const filteredImages = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const toggleLike = (itemId: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setGalleryItems(prevItems => 
      prevItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            likes: item.isLiked ? item.likes - 1 : item.likes + 1,
            isLiked: !item.isLiked
          };
        }
        return item;
      })
    );
    
    // Update selected image if it's the same item
    if (selectedImage && selectedImage.id === itemId) {
      setSelectedImage(prev => prev ? {
        ...prev,
        likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
        isLiked: !prev.isLiked
      } : null);
    }
  };

  // Keyboard support for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Lab Gallery
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-light">
              Moments in Science & Beyond
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Capturing the journey of discovery, collaboration, and excellence in biomedical research
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover-button ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-gray-600 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/30 transform hover:-translate-y-2"
                onClick={() => openModal(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Like Button */}
                  <button
                    onClick={(e) => toggleLike(item.id, e)}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                      item.isLiked 
                        ? 'bg-red-500/90 text-white shadow-lg' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all duration-300 ${
                        item.isLiked ? 'fill-current' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Likes Count */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Heart className="w-4 h-4 inline mr-1.5" />
                    {item.likes}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-bold text-xl mb-2 line-clamp-2 drop-shadow-lg">{item.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2 drop-shadow-md">{item.caption}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 ${
                          item.isLiked 
                            ? 'text-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                        }`}
                      >
                        <Heart 
                          className={`w-4 h-4 transition-all duration-300 ${
                            item.isLiked ? 'fill-current' : ''
                          }`} 
                        />
                        <span className="text-sm font-medium">{item.likes}</span>
                      </button>
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                      Click to view
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No images found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No images available for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Like Button in Modal */}
              <button
                onClick={() => toggleLike(selectedImage.id)}
                className={`absolute top-6 left-6 z-20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                  selectedImage.isLiked 
                    ? 'bg-red-500/90 text-white shadow-lg' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart 
                  className={`w-6 h-6 transition-all duration-300 ${
                    selectedImage.isLiked ? 'fill-current' : ''
                  }`} 
                />
              </button>
              
              {/* Likes Count in Modal */}
              <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white font-medium">
                <Heart className="w-4 h-4 inline mr-2" />
                {selectedImage.likes} likes
              </div>
              
              <div className="relative h-96 md:h-[60vh]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              <div className="p-8 max-h-[35vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                    {selectedImage.category}
                  </span>
                  <div className="flex items-center text-primary dark:text-primary text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedImage.date}
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {selectedImage.title}
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedImage.caption}
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                    {selectedImage.description}
                  </p>
                </div>
                
                {/* Action Bar */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleLike(selectedImage.id)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-medium ${
                      selectedImage.isLiked 
                        ? 'text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' 
                        : 'text-gray-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 border border-gray-200 dark:border-gray-600 hover:border-red-200'
                    }`}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all duration-300 ${
                        selectedImage.isLiked ? 'fill-current' : ''
                      }`} 
                    />
                    <span>{selectedImage.isLiked ? 'Liked' : 'Like'} ({selectedImage.likes})</span>
                  </button>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Press ESC to close
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}