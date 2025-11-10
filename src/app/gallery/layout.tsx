import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | CBRL Laboratory Photos & Research Images',
  description: 'Browse our photo gallery showcasing the Clinical Biomarkers Research Laboratory (CBRL) at IIT Kharagpur. View images of our advanced equipment, research activities, team events, and laboratory facilities dedicated to biomarker research and clinical diagnostics.',
  keywords: [
    'CBRL photo gallery',
    'laboratory photos',
    'research facility images',
    'biomarker research photos',
    'IIT Kharagpur lab gallery',
    'scientific equipment photos',
    'research team images',
    'laboratory facility tour',
    'mass spectrometry photos',
    'clinical diagnostics images',
    'research activities gallery',
    'CBRL visual tour'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/gallery',
  },
  openGraph: {
    title: 'Gallery | CBRL Laboratory Photos & Research Images',
    description: 'Explore our photo gallery featuring the Clinical Biomarkers Research Laboratory facilities, advanced equipment, and research activities at IIT Kharagpur.',
    url: 'https://cbrl.iitkgp.ac.in/gallery',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    images: [
      {
        url: '/images/gallery/lab-overview.jpg',
        width: 1200,
        height: 630,
        alt: 'CBRL Laboratory Overview - Research Facility Gallery',
        type: 'image/jpeg'
      },
      {
        url: '/images/facilities/waters-ms.jpg',
        width: 1200,
        height: 630,
        alt: 'Advanced Research Equipment at CBRL',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CBRLofficial',
    creator: '@CBRLofficial',
    title: 'Gallery | CBRL Laboratory Photos',
    description: 'Explore our photo gallery featuring advanced laboratory facilities and research activities.',
    images: {
      url: '/images/gallery/lab-overview.jpg',
      alt: 'CBRL Laboratory Gallery'
    }
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}