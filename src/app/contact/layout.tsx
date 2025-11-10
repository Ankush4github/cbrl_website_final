import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with CBRL Team',
  description: 'Contact the Clinical Biomarkers Research Laboratory (CBRL) at IIT Kharagpur. Reach out for research collaborations, inquiries about our biomarker studies, facility access, or academic partnerships. Find our location, phone, and email details.',
  keywords: [
    'contact CBRL',
    'biomarker research collaboration',
    'CBRL contact information',
    'IIT Kharagpur laboratory contact',
    'research partnership inquiry',
    'clinical diagnostics collaboration',
    'laboratory facility access',
    'academic partnership CBRL',
    'biomedical research contact',
    'Prof Koel Chaudhury contact',
    'research inquiry form',
    'laboratory visit request'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/contact',
  },
  openGraph: {
    title: 'Contact CBRL | Research Collaborations & Inquiries',
    description: 'Get in touch with the Clinical Biomarkers Research Laboratory at IIT Kharagpur for research collaborations, facility access, and academic partnerships.',
    url: 'https://cbrl.iitkgp.ac.in/contact',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    images: [
      {
        url: '/images/contact/cbrl-building.jpg',
        width: 1200,
        height: 630,
        alt: 'CBRL Laboratory Building at IIT Kharagpur',
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
    title: 'Contact CBRL | Research Collaborations',
    description: 'Get in touch for research collaborations, facility access, and academic partnerships at CBRL.',
    images: {
      url: '/images/contact/cbrl-building.jpg',
      alt: 'CBRL Laboratory Contact'
    }
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}