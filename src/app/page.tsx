import Image from 'next/image';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
<meta name="google-site-verification" content="ZAQCHvft0fIPa5fC7tFYCTW1joLvtTFnfjDlqSBNdkQ" />

// Dynamically import the JsonLd component to avoid server-side rendering issues
const JsonLd = dynamic(() => import('../components/JsonLd'), { ssr: false });

export const metadata: Metadata = {
  title: 'Leading Biomarker Research Laboratory | Clinical Diagnostics & Translational Medicine',
  description:
    "Discover cutting-edge biomarker research at CBRL, IIT Kharagpur. Leading clinical diagnostics laboratory specializing in women's health, respiratory disorders, metabolomics, and proteomics. Advanced mass spectrometry and HPLC facilities for precision medicine and personalized healthcare solutions.",
  keywords: [
    'biomarker research laboratory',
    'clinical diagnostics IIT Kharagpur',
    'translational medicine India',
    'metabolomics research',
    'proteomics laboratory',
    'mass spectrometry facility',
    'women health biomarkers',
    'respiratory disorder research',
    'precision medicine',
    'personalized healthcare',
    'Prof Koel Chaudhury research',
    'CBRL laboratory',
    'biomedical research India',
    'analytical chemistry lab',
    'molecular diagnostics'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/',
  },
  openGraph: {
    title: 'Clinical Biomarkers Research Laboratory | Leading Biomarker Research at IIT Kharagpur',
    description:
      "Pioneering biomarker discovery and clinical diagnostics at IIT Kharagpur. Advanced research in women's health, respiratory disorders, metabolomics, and proteomics using state-of-the-art mass spectrometry and analytical techniques.",
    url: 'https://cbrl.iitkgp.ac.in/',
    images: [
      {
        url: '/images/facilities/waters-ms.jpg',
        width: 1200,
        height: 630,
        alt: 'Advanced mass spectrometry equipment at CBRL - Clinical Biomarkers Research Laboratory',
        type: 'image/jpeg'
      },
      {
        url: '/images/research/biomarker-discovery.jpg',
        width: 1200,
        height: 630,
        alt: 'Biomarker discovery research at CBRL laboratory',
        type: 'image/jpeg'
      },
      {
        url: '/cbrl-logo.png',
        width: 400,
        height: 400,
        alt: 'CBRL - Clinical Biomarkers Research Laboratory Logo',
        type: 'image/png'
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CBRLofficial',
    creator: '@CBRLofficial',
    title: 'Clinical Biomarkers Research Laboratory | IIT Kharagpur',
    description: 'Leading biomarker research & clinical diagnostics. Advancing precision medicine through innovative research.',
    images: {
      url: '/images/facilities/waters-ms.jpg',
      alt: 'CBRL Advanced Research Laboratory'
    }
  },
  other: {
    'article:author': 'Prof. Koel Chaudhury',
    'article:publisher': 'Clinical Biomarkers Research Laboratory',
    'og:email': 'koel@smst.iitkgp.ac.in',
    'og:phone_number': '+91 03222 282221',
    'og:latitude': '22.3149',
    'og:longitude': '87.3105',
    'og:street-address': 'School of Medical Science and Technology, IIT Kharagpur',
    'og:locality': 'Kharagpur',
    'og:region': 'West Bengal',
    'og:postal-code': '721302',
    'og:country-name': 'India'
  }
};

export default function Home() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": "Clinical Biomarkers Research Laboratory",
    "url": "https://cbrl.iitkgp.ac.in",
    "logo": "https://cbrl.iitkgp.ac.in/cbrl-logo.png",
    "description": "Harnessing Metabolomics to Discover Biomarkers for Women's Health, Respiratory Disorders, and Innovative Diagnostics",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "School of Medical Science and Technology, Life Science Building",
      "addressLocality": "Kharagpur",
      "addressRegion": "West Bengal",
      "postalCode": "721302",
      "addressCountry": "India"
    },
    "telephone": "+91 03222 282221",
    "email": "koel@smst.iitkgp.ac.in",
    "sameAs": [
      "https://twitter.com/CBRLofficial",
      "https://www.linkedin.com/company/clinical-biomarkers-research-laboratory",
      "https://www.facebook.com/CBRLofficial"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Biomarker Research",
      "Clinical Diagnostics",
      "Translational Medicine",
      "Healthcare Innovation",
      "Metabolomics",
      "Women's Health",
      "Respiratory Disorders",
      "Innovative Diagnostics",
      "Prof. Koel Chaudhury",
      "Koel Chaudhury",
      "Clinical Biomarkers Research Laboratory",
      "CBRL",
    ]
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={organizationData} />
      {/* Hero Section with Static Background Image */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image
              src="/images/facilities/waters-ms.jpg"
              alt="State-of-the-art biomarker research equipment at CBRL"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              className="object-cover dark:brightness-75 dark:contrast-125"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4WFiMeGCMhISMhHx0fHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/05 dark:from-black/95 dark:via-black/70 dark:to-black/20 z-10"></div>
        </div>
        
        {/* Content overlaid on image */}
        <div className="container mx-auto px-6 relative z-20 py-16 md:py-24">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white text-center md:text-left">
              <span className="text-primary block mb-2">Clinical Biomarkers</span> Research Laboratory
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-white/90 leading-relaxed text-center md:text-left">
            Omics-driven Biomarker Discovery and Insights into Disease Pathogenesis of Complex Etiology
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="/projects"
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Our Research
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary dark:text-primary/90">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
            The Clinical Biomarkers Research Laboratory (CBRL) at IIT Kharagpur, led by Prof. Koel Chaudhury, is dedicated to advancing biomarker discovery and mechanistic elucidation of complex diseases through cutting-edge multi-omics research. With a strong emphasis on women's health and respiratory disorders, our laboratory contributes to diagnostic advancements and towards bridging translational gaps.  We have several collaborations with Institutes of national eminence, further strengthening our interdisciplinary and impactful scientific contributions. Our work is supported by a robust publication record and a commitment to improving healthcare outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/projects"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Our Projects
              </a>
              <a
                href="/publications"
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Publications
              </a>
            </div>
          </div>
        </div>
      </section>
{/* Featured Research */}
<section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
      Featured Research Areas
    </h2>
    <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
      Discover our cutting-edge research initiatives that are transforming healthcare
    </p>

    {/* Top: one full-width card */}
    <div className="grid grid-cols-1 gap-8">
      <a
        href="/projects#biomarkers"
        className="block bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
      >
        {/* Header strip */}
        <div className="h-16 bg-blue-100 dark:bg-blue-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-700/50"></div>
          <div className="absolute inset-0 flex items-center px-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/90"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
              Multi-Omics-Based Biomarker Discovery
            </h3>
          </div>
        </div>
        {/* Body */}
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 text-justify">
            Discovery and validation of non-invasive biomarkers via multi-omics for early disease detection and monitoring.
          </p>
          <span className="mt-4 inline-flex items-center text-primary font-medium">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>
    </div>

    {/* Bottom: two cards side-by-side */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left card */}
      <a
        href="/projects#diagnostics"
        className="block bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
      >
        <div className="h-16 bg-green-100 dark:bg-green-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-green-700/50"></div>
          <div className="absolute inset-0 flex items-center px-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/90"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
              Respiratory Health and Disease Subtyping
            </h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 text-justify">
            Metabolic and molecular profiling for precision diagnostics in respiratory diseases.
          </p>
          <span className="mt-4 inline-flex items-center text-primary font-medium">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>

      {/* Right card */}
      <a
        href="/projects#translational"
        className="block bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
      >
        <div className="h-16 bg-purple-100 dark:bg-purple-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-purple-700/50"></div>
          <div className="absolute inset-0 flex items-center px-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/90"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
              Women’s Health and Reproductive Disorders
            </h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 text-justify">
           Early prediction and understanding of disease pathogenesis in gynecology and obstetrics
          </p>
          <span className="mt-4 inline-flex items-center text-primary font-medium">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  </div>
</section>


      {/* Key Achievements */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Key Achievements</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Our dedication to excellence has led to remarkable outcomes in biomarker research
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-3">150+</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Publications</div>
              <p className="text-gray-600 dark:text-gray-300">High-impact research papers in leading journals</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-3">4</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Patents</div>
              <p className="text-gray-600 dark:text-gray-300">Related to cost-effective healthcare</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-3">1</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Clinical Trials</div>
              <p className="text-gray-600 dark:text-gray-300">Successful validation studies</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary dark:text-primary/90 mb-3">10Cr+</div>
              <div className="text-lg font-semibold dark:text-white mb-2">Research Funding</div>
              <p className="text-gray-600 dark:text-gray-300">In competitive grants</p>
            </div>
          </div>
        </div>
      </section>


      {/* Collaborations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Our Collaborators</h2>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-primary dark:text-primary/90 text-center">Academic Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/AIIMS_delhi_logo.svg" alt="AIIMS Delhi Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">AIIMS, Delhi</span>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/AIIMS_kalyan_logo.svg" alt="AIIMS Kalyani Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">AIIMS, Kalyani</span>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/Fortis_logo.png" alt="Fortis Hospital Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Fortis Hospital, Kolkata</span>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/nrs_logo.svg" alt="NRS Medical College Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Nil Ratan Sircar Medical College & Hospital, Kolkata</span>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/sskm_logo.svg" alt="SSKM Hospital Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">SSKM Hospital, Kolkata</span>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/irm_logo.png" alt="IRM Hospital Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">IRM Hospital, Kolkata</span>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/nioh.png" alt="ICMR-National Institute Of Occupational Healtha Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">ICMR-NIOH, Ahmedabad</span>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-32 w-full flex items-center justify-center mb-4">
                  <img src="/images/collab/NIRRCH-logo.png" alt="ICMR-National Institute for Research in Reproductive and Child Health" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">ICMR-NIRRCH, Mumbai</span>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-28 w-full flex items-center justify-center mb-3">
                  <img src="/images/collab/shh_logo.png" alt="Srijoni Healing Home Logo" className="h-12 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Srijoni Healing Home, Kolkata</span>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-28 w-full flex items-center justify-center mb-3">
                  <img src="/images/collab/IQ-City_logo.webp" alt="IQ City Medical College Hospital, Durgapur Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">IQ City Medical College Hospital, Durgapur</span>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                <div className="h-28 w-full flex items-center justify-center mb-3">
                  <img src="/images/collab/IPCR_logo.png" alt="Institute of Pulmocare & Research, Kolkata Logo" className="h-20 object-contain dark:filter dark:brightness-90" />
                </div>
                <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Institute of Pulmocare & Research, Kolkata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us / Contact */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Join Our Research Team</h2>
            <p className="text-xl mb-8 text-white/90">
              We're always looking for talented researchers and students who are passionate 
              about advancing healthcare through biomarker research.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </a>
              <a
                href="/members"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
