import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications | Research Papers & Scientific Articles - CBRL',
  description: 'Browse our comprehensive collection of peer-reviewed research publications, scientific articles, and academic papers from the Clinical Biomarkers Research Laboratory at IIT Kharagpur. Discover our contributions to biomarker research and clinical diagnostics.',
  keywords: [
    'CBRL publications',
    'biomarker research papers',
    'scientific articles CBRL',
    'peer-reviewed publications',
    'clinical diagnostics papers',
    'IIT Kharagpur research publications',
    'biomedical research articles',
    'translational medicine papers',
    'mass spectrometry publications',
    'precision medicine research',
    'academic publications CBRL',
    'research bibliography'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/publications',
  },
  openGraph: {
    title: 'Publications | CBRL Research Papers & Scientific Articles',
    description: 'Explore our extensive collection of peer-reviewed research publications and scientific contributions to biomarker research and clinical diagnostics.',
    url: 'https://cbrl.iitkgp.ac.in/publications',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    images: [
      {
        url: '/images/publications/research-papers.jpg',
        width: 1200,
        height: 630,
        alt: 'CBRL Research Publications - Scientific Articles and Papers',
        type: 'image/jpeg'
      },
      {
        url: '/cbrl-logo.png',
        width: 400,
        height: 400,
        alt: 'Clinical Biomarkers Research Laboratory Logo',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CBRLofficial',
    creator: '@CBRLofficial',
    title: 'Publications | CBRL Research Papers',
    description: 'Explore our peer-reviewed research publications and scientific contributions to biomarker research.',
    images: {
      url: '/images/publications/research-papers.jpg',
      alt: 'CBRL Research Publications'
    }
  }
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}