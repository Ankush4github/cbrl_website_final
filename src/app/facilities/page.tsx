import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Facilities | Advanced Laboratory Equipment at CBRL',
  description: 'Explore state-of-the-art laboratory equipment and research facilities at CBRL, IIT Kharagpur. Our advanced instrumentation includes mass spectrometry, HPLC, FTIR, atomic force microscopy, and specialized biomarker analysis tools for cutting-edge research.',
  keywords: [
    'CBRL laboratory facilities',
    'mass spectrometry equipment',
    'HPLC chromatography systems',
    'FTIR spectroscopy',
    'atomic force microscope',
    'biomarker analysis tools',
    'research instrumentation',
    'laboratory equipment IIT Kharagpur',
    'scientific instruments CBRL',
    'analytical chemistry equipment',
    'molecular spectroscopy tools',
    'clinical diagnostics equipment'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/facilities',
  },
  openGraph: {
    title: 'Research Facilities | Advanced Laboratory Equipment at CBRL',
    description: 'Discover our cutting-edge laboratory equipment and advanced technologies that power biomarker research and clinical diagnostics at CBRL, IIT Kharagpur.',
    url: 'https://cbrl.iitkgp.ac.in/facilities',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    images: [
      {
        url: '/images/facilities/waters-ms.jpg',
        width: 1200,
        height: 630,
        alt: 'Waters Mass Spectrometry Equipment at CBRL Laboratory',
        type: 'image/jpeg'
      },
      {
        url: '/images/facilities/hplc-system.jpg',
        width: 1200,
        height: 630,
        alt: 'HPLC Chromatography System at CBRL',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CBRLofficial',
    creator: '@CBRLofficial',
    title: 'Research Facilities | CBRL Laboratory Equipment',
    description: 'Explore our advanced laboratory equipment and cutting-edge technologies for biomarker research.',
    images: {
      url: '/images/facilities/waters-ms.jpg',
      alt: 'CBRL Laboratory Facilities'
    }
  }
};

// Define facility types
type InstrumentInCharge = {
  name: string;
  title: string;
  email: string;
  link: string;
};

type FacilityName = 
  | 'Mass Spectrometry with DESI MSI'
  | 'HPLC'
  | 'Zeta Potential Analyzer'
  | 'Molecular Spectroscopy(FTIR)'
  | 'Molecular Spectroscopy(LDIR)'
  | 'Spectrophotometer'
  | 'EZ-Retriever'
  | 'Concentrator'
  | 'Water Purification System'
  | 'Atomic Force Microscope';

type FacilityCategory = 'Department CRF (Central Research Facility)' | 'Lab Facilities';

type FacilityInChargeMap = {
  [K in FacilityName]: InstrumentInCharge;
};

// Facility to member mapping
const instrumentInCharge: FacilityInChargeMap = {
  'Mass Spectrometry with DESI MSI': {
    name: 'Palash Paul',
    title: 'Research Scholar',
    email: 'palashpaul3543@gmail.com',
    link: '/members#palash-paul'
  },
  'HPLC': {
    name: 'Sumana Halder',
    title: 'Research Scholar',
    email: 'sumanahalder006@gmail.com',
    link: '/members#sumana-halder'
  },
  'Zeta Potential Analyzer': {
    name: 'Bishnupriya Saha',
    title: 'Research Scholar',
    email: 'bsaha3592@gmail.com',
    link: '/members#bishnupriya-saha'
  },
  'Molecular Spectroscopy(FTIR)': {
    name: 'Sumana Halder',
    title: 'Research Scholar',
    email: 'sumanahalder006@gmail.com',
    link: '/members#sumana-halder'
  },
  'Molecular Spectroscopy(LDIR)': {
    name: 'Sumana Halder',
    title: 'Research Scholar',
    email: 'sumanahalder006@gmail.com',
    link: '/members#sumana-halder'
  },
  'Spectrophotometer': {
    name: 'Bishnupriya Saha',
    title: 'Research Scholar',
    email: 'bsaha3592@gmail.com',
    link: '/members#bishnupriya-saha'
  },
  'EZ-Retriever': {
    name: 'Bishnupriya Saha',
    title: 'Research Scholar',
    email: 'bsaha3592@gmail.com',
    link: '/members#bishnupriya-saha'
  },
  'Concentrator': {
    name: 'Palash Paul',
    title: 'Research Scholar',
    email: 'palashpaul3543@gmail.com',
    link: '/members#palash-paul'
  },
  'Water Purification System': {
    name: 'Bishnupriya Saha',
    title: 'Research Scholar',
    email: 'bsaha3592@gmail.com',
    link: '/members#bishnupriya-saha'
  },
  'Atomic Force Microscope': {
    name: 'Sumana Halder',
    title: 'Research Scholar',
    email: 'sumanahalder006@gmail.com',
    link: '/members#sumana-halder'
  }
};

type FacilityCardProps = {
  title: FacilityName;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  instrumentInfo: InstrumentInCharge;
};

// Facility Card Component for better reusability and performance
function FacilityCard({ 
  title, 
  subtitle = '', 
  imageSrc, 
  imageAlt, 
  features, 
  instrumentInfo 
}: FacilityCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-110 filter dark:brightness-90"
              priority={title === 'Mass Spectrometry with DESI MSI'}
              loading={title === 'Mass Spectrometry with DESI MSI' ? 'eager' : 'lazy'}
            />
            {subtitle && (
              <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white text-center py-2 z-20">
                <p className="text-sm font-medium">{subtitle}</p>
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-2/3 p-5 sm:p-6 lg:p-8">
          <div className="border-l-4 border-primary pl-4 mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary dark:text-primary/90">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
            {title.includes('Mass Spectrometry with DESI MSI') ? 'State-of-the-art quadrupole time-of-flight mass spectrometer offering:' :
            title.includes('Concentrator') ? 'Eppendorf Concentrator Plus providing:' :
            title.includes('Water Purification System') ? 'Millipore Milli-Q Integral 3 Water Purification System providing:' :
            title.includes('Spectrophotometer') ? 'Thermo Fisher Scientific NanoDrop Lite Plus UV providing' :
            title.includes('EZ-Retriever') ? 'BioGenex EZ-Retriever providing:' :
            title.includes('HPLC') ? 'High-Performance Liquid Chromatography system featuring:' :
            title.includes('Zeta') ? 'Advanced particle characterization system providing:' :
            title.includes('FTIR') ? 'Fourier Transform Infrared Imaging system offering:' :
            title.includes('LDIR') ? 'Laser Direct Infrared Imaging system providing:' :
            title.includes('Atomic Force Microscope') ? 'High-resolution scanning probe microscope offering:' :
            'Advanced analytical system providing:'}
          </p>
          <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3 text-sm sm:text-base flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Instrument InCharge:
            </h4>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold text-lg">{instrumentInfo.name.charAt(0)}</span>
                </div>
                <div>
                  <Link 
                    href={instrumentInfo.link}
                    className="text-primary dark:text-primary/90 font-medium text-sm sm:text-base hover:underline transition-colors duration-200"
                  >
                    {instrumentInfo.name}
                  </Link>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{instrumentInfo.title}</p>
                </div>
              </div>
              <a 
                href={`mailto:${instrumentInfo.email}`}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm sm:text-base hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full"
                aria-label={`Contact ${instrumentInfo.name}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Facility = {
  title: FacilityName;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  category: FacilityCategory;
};

// Facility categories with descriptions
const categoryDescriptions = {
  'Department CRF (Central Research Facility)': 'Department CRF provide advanced analytical capabilities and specialized equipment for cutting-edge research.',
  'Lab Facilities': 'Laboratory facilities support day-to-day research activities and routine analytical procedures.'
};

export default function Facilities() {
  const facilities: Facility[] = [
    {
      title: 'Mass Spectrometry with DESI MSI',
      subtitle: 'Waters Xevo G3 QTof',
      imageSrc: '/images/facilities/waters-ms.jpg',
      imageAlt: 'Waters Xevo G3 QTof Mass Spectrometer',
      category: 'Department CRF (Central Research Facility)',
      features: [
        'High-resolution accurate mass measurements',
        'Superior sensitivity for complex sample analysis',
        'Advanced protein and metabolite identification capabilities',
        'Comprehensive biomarker discovery and validation',
        'QuanTof technology for precise quantification',
        ''
      ]
    },
    {
      title: 'HPLC',
      subtitle: 'Agilent 1260 Infinity HPLC System',
      imageSrc: '/images/facilities/hplc.jpg',
      imageAlt: 'Agilent HPLC System',
      category: 'Lab Facilities',
      features: [
        'Advanced separation capabilities for complex biological samples',
        'High-precision solvent delivery system',
        'Multiple detection options (UV-Vis, fluorescence, DAD)',
        'Automated sample handling and injection',
        'Method development and optimization capabilities'
      ]
    },
    {
      title: 'Zeta Potential Analyzer',
      subtitle: 'Malvern Zetasizer Nano ZS',
      imageSrc: '/images/facilities/zetasizer.jpg',
      imageAlt: 'Malvern Zetasizer Nano Series',
      category: 'Lab Facilities',
      features: [
        'Dynamic light scattering for size measurements',
        'Zeta potential analysis',
        'Molecular weight measurements',
        'Protein aggregation studies',
        'Nanoparticle characterization'
      ]
    },
    {
      title: 'Molecular Spectroscopy(FTIR)',
      subtitle: 'Agilent Cary 630 FTIR Spectrometer',
      imageSrc: '/images/facilities/ftir.jpg',
      imageAlt: 'Agilent FTIR Imaging System',
      category: 'Department CRF (Central Research Facility)',
      features: [
        'High-resolution chemical imaging',
        'Rapid sample analysis and visualization',
        'Non-destructive analysis capabilities',
        'Advanced spectral data processing',
        'Tissue section analysis and characterization'
      ]
    },
    {
      title: 'Molecular Spectroscopy(LDIR)',
      subtitle: 'Agilent 8700 LDIR Chemical Imaging System',
      imageSrc: '/images/facilities/ldir.jpg',
      imageAlt: '8700 LDIR Chemical Imaging System',
      category: 'Department CRF (Central Research Facility)',
      features: [
        'Rapid, high-definition chemical imaging',
        'Automated particle analysis',
        'High spatial resolution capabilities',
        'Advanced material characterization',
        'Microplastic analysis capabilities'
      ]
    },
    {
      title: 'Spectrophotometer',
      subtitle: 'Thermo Scientific NanoDrop Lite Plus UV',
      imageSrc: '/images/facilities/nanodrop.jpg',
      imageAlt: 'NanoDrop One Spectrophotometer',
      category: 'Lab Facilities',
      features: [
        'UV-Vis spectrophotometry for nucleic acid quantification',
        'High-sensitivity protein analysis',
        'Micro-volume sample analysis (1-2 µL)',
        'Automated pathlength correction',
        'Comprehensive data analysis software'
      ]
    },
    {
      title: 'EZ-Retriever',
      subtitle: 'BioGenex EZ-Retriever System V.4',
      imageSrc: '/images/facilities/EZ-Retriever.jpg',
      imageAlt: 'BioGenex EZ-Retriever System V.4',
      category: 'Lab Facilities',
      features: [
        'Automated antigen retrieval for immunohistochemistry',
        'Precise temperature control',
        'Compatibility with multiple buffer solutions',
        'Programmable protocols',
        'Consistent and reproducible results'
      ]
    },
    {
      title: 'Concentrator',
      subtitle: 'Eppendorf Concentrator plus',
      imageSrc: '/images/facilities/concentrator-plus.jpg',
      imageAlt: 'CentriVap Concentrator',
      category: 'Lab Facilities',
      features: [
        'High-speed vacuum concentration',
        'Temperature-controlled sample processing',
        'Multiple sample capacity options',
        'Chemical-resistant construction',
        'Versatile operation modes'
      ]
    },
    {
      title: 'Water Purification System',
      subtitle: 'Millipore Milli-Q Integral 3',
      imageSrc: '/images/facilities/milli-q.jpg',
      imageAlt: 'Milli-Q IQ 7000 Water Purification System',
      category: 'Lab Facilities',
      features: [
        'Dual production of Type 1 ultrapure and Type 2 pure water',
        'High-efficiency purification from tap water',
        'Flexible delivery through up to three POD dispensers',
        'Integrated water quality monitoring',
        'Real-time water quality monitoring'
      ]
    },
    {
      title: 'Atomic Force Microscope',
      subtitle: 'Bruker Multimode 8-HR',
      imageSrc: '/images/facilities/AFM.jpeg',
      imageAlt: 'Bruker Multimode 8-HR Atomic Force Microscope',
      category: 'Department CRF (Central Research Facility)',
      features: [
        'High-resolution 3D surface imaging at nanoscale',
        'Multiple imaging modes (contact, tapping, non-contact)',
        'Force spectroscopy for molecular interaction analysis',
        'Biological sample characterization in near-native conditions',
        'Nanomechanical property measurements (elasticity, adhesion)'
      ]
    }
  ];

  // Group facilities by category
  const facilitiesByCategory = facilities.reduce((acc, facility) => {
    if (!acc[facility.category]) {
      acc[facility.category] = [];
    }
    acc[facility.category].push(facility);
    return acc;
  }, {} as Record<FacilityCategory, Facility[]>);

  return (
    <main className="min-h-screen py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white relative">
              Laboratory Facilities
              <span className="block h-1 w-1/2 bg-primary mt-2 mx-auto"></span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Our state-of-the-art facilities provide cutting-edge analytical capabilities for advanced research in clinical proteomics, metabolomics, and biomarker discovery.
          </p>
        </div>
        
        <div className="space-y-24">
          {(Object.keys(categoryDescriptions) as FacilityCategory[]).map((category) => (
            <div key={category} className="space-y-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white inline-block relative">
                  {category}
                  <span className="block h-1 w-1/3 bg-primary mt-2 mx-auto"></span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {categoryDescriptions[category]}
                </p>
              </div>
              
              <div className="grid gap-10">
                {facilitiesByCategory[category]?.map((facility) => (
                  <FacilityCard
                    key={facility.title}
                    {...facility}
                    instrumentInfo={instrumentInCharge[facility.title]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}