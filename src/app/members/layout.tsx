import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team Members | CBRL Research Scientists & Scholars',
  description: 'Meet the dedicated team of researchers, scientists, and scholars at the Clinical Biomarkers Research Laboratory (CBRL), IIT Kharagpur. Learn about our faculty, research scholars, and their expertise in biomarker research and clinical diagnostics.',
  keywords: [
    'CBRL team members',
    'biomarker research scientists',
    'IIT Kharagpur researchers',
    'clinical diagnostics team',
    'Prof Koel Chaudhury team',
    'research scholars CBRL',
    'biomedical research faculty',
    'laboratory research staff',
    'PhD students biomarker research',
    'translational medicine researchers',
    'mass spectrometry experts',
    'precision medicine team'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/members',
  },
  openGraph: {
    title: 'Team Members | CBRL Research Scientists & Faculty',
    description: 'Discover the talented team of researchers and scientists driving innovation in biomarker research and clinical diagnostics at CBRL, IIT Kharagpur.',
    url: 'https://cbrl.iitkgp.ac.in/members',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    images: [
      {
        url: '/images/team/cbrl-team.jpg',
        width: 1200,
        height: 630,
        alt: 'CBRL Research Team - Scientists and Scholars',
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
    title: 'Team Members | CBRL Research Scientists',
    description: 'Meet our talented team of researchers driving innovation in biomarker research and clinical diagnostics.',
    images: {
      url: '/images/team/cbrl-team.jpg',
      alt: 'CBRL Research Team'
    }
  }
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}