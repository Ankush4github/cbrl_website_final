import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cbrl.iitkgp.ac.in'),
  title: {
    template: '%s | CBRL - Clinical Biomarkers Research Laboratory',
    default: 'Clinical Biomarkers Research Laboratory | IIT Kharagpur - Advanced Biomarker Research & Diagnostics',
  },
  description:
    "Leading Clinical Biomarkers Research Laboratory (CBRL) at IIT Kharagpur. Pioneering biomarker discovery, clinical diagnostics, and translational medicine for women's health, respiratory disorders, and innovative healthcare solutions. Expert research in metabolomics, proteomics, and mass spectrometry.",
  keywords: [
    'biomarker research',
    'IIT Kharagpur',
    'biomarker research laboratories IIT Kharagpur',
    'metabolomics',
    'SMST',
    'SMST, IIT Kharagpur',
    'proteomics',
    "women's health",
    'respiratory disorders',
    'mass spectrometry',
    'Mass Spectrometry Systems',
    'mass spectrometry laboratories',
    'Xevo G3 QTof',
    'HPLC',
    'biomarker discovery',
    'clinical laboratory',
    'healthcare innovation',
    'medical research',
    'diagnostic biomarkers',
    'Prof Koel Chaudhury',
    'Koel Chaudhury',
    'CBRL',
    'research laboratory India',
    'biomedical research',
    'analytical chemistry',
    'proteomics analysis',
    'metabolomics analysis',
    'bioanalytical chemistry'
  ],
  authors: [
    { name: 'CBRL Team', url: 'https://cbrl.iitkgp.ac.in' },
    { name: 'Prof. Koel Chaudhury', url: 'https://cbrl.iitkgp.ac.in/members' }
  ],
  creator: 'Clinical Biomarkers Research Laboratory, IIT Kharagpur',
  publisher: 'CBRL Team',
  category: 'Medical Research',
  classification: 'Research Laboratory',
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/',
    languages: {
      'en-US': 'https://cbrl.iitkgp.ac.in/',
      'en-IN': 'https://cbrl.iitkgp.ac.in/'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cbrl.iitkgp.ac.in/',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    title: 'Clinical Biomarkers Research Laboratory | IIT Kharagpur - Advanced Biomarker Research',
    description:
      "Leading biomarker research laboratory at IIT Kharagpur. Specializing in clinical diagnostics, translational medicine, women's health, and respiratory disorders through cutting-edge metabolomics and proteomics research.",
    images: [
      {
        url: '/images/facilities/waters-ms.jpg',
        width: 1200,
        height: 630,
        alt: 'State-of-the-art biomarker research equipment at CBRL - Mass Spectrometry Laboratory',
        type: 'image/jpeg'
      },
      {
        url: '/cbrl-logo.png',
        width: 400,
        height: 400,
        alt: 'Clinical Biomarkers Research Laboratory Logo',
        type: 'image/png'
      }
    ],
    ttl: 604800
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CBRLofficial',
    creator: '@CBRLofficial',
    title: 'Clinical Biomarkers Research Laboratory | IIT Kharagpur',
    description: 'Leading biomarker research & clinical diagnostics laboratory. Advancing healthcare through innovative translational medicine research.',
    images: {
      url: '/images/facilities/waters-ms.jpg',
      alt: 'CBRL Advanced Research Equipment'
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'paste-your-google-site-verification-code-here',
    // yandex: 'paste-your-yandex-verification-code-here',
    // bing: 'paste-your-bing-verification-code-here'
  },
  other: {
    'theme-color': '#2563eb',
    'color-scheme': 'light dark',
    'format-detection': 'telephone=yes, email=yes, address=yes',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
    'application-name': 'CBRL',
    'apple-mobile-web-app-title': 'CBRL',
    'referrer': 'origin-when-cross-origin',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'English',
    'geo.region': 'IN-WB',
    'geo.placename': 'Kharagpur',
    'geo.position': '22.3149;87.3105',
    'ICBM': '22.3149, 87.3105'
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD objects
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Clinical Biomarkers Research Laboratory',
    url: 'https://cbrl.iitkgp.ac.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cbrl.iitkgp.ac.in/cbrl-logo.png',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'School of Medical Science and Technology, Life Science Building, Room 329-330, 3rd Floor',
      addressLocality: 'Kharagpur',
      addressRegion: 'West Bengal',
      postalCode: '721302',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+91-3222-282221',
        areaServed: 'IN',
        availableLanguage: ['en'],
      },
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Clinical Biomarkers Research Laboratory',
    url: 'https://cbrl.iitkgp.ac.in',
    inLanguage: 'en',
  }

  // You can generate breadcrumbs dynamically per route; here’s a safe default:
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://cbrl.iitkgp.ac.in/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Research',
        item: 'https://cbrl.iitkgp.ac.in/projects',
      },
    ],
  }

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* Theme initialization script - must run before content renders */}
        <script src="/theme-init.js" />
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* JSON-LD: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {children}
          </main>

          <footer className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 py-12 shadow-inner transition-colors duration-300">
            <div className="container mx-auto px-4">
              {/* Logo and Main Title Section */}
               <div className="mb-12">
                 <div className="flex items-center mb-6">
                   <img
                     src="/cbrl-logo.png"
                     alt="CBRL Logo"
                     className="h-20 w-auto mr-4"
                   />
                   <div>
                     <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                       Clinical Biomarkers Research Laboratory
                     </h2>
                     <p className="text-lg text-gray-600 dark:text-gray-300">
                       IIT Kharagpur
                     </p>
                   </div>
                 </div>
                 <div className="w-80 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
               </div>

              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Address */}
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Address
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p className="font-medium">Clinical Biomarkers Research Laboratory</p>
                    <p>Room No. 329, 330, 3rd floor</p>
                    <p>School of Medical Science and Technology</p>
                    <p>Life Science Building</p>
                    <p>IIT Kharagpur</p>
                    <p className="font-medium">Kharagpur-721302, West Bengal, India</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { href: '/about', label: 'About Us' },
                      { href: '/publications', label: 'Publications' },
                      { href: '/projects', label: 'Projects' },
                      { href: '/facilities', label: 'Facilities' },
                      { href: '/members', label: 'Members' },
                      { href: '/contact', label: 'Contact' },
                    ].map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* External Links */}
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    External Links
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { href: 'https://www.iitkgp.ac.in/', label: 'IIT Kharagpur' },
                      { href: 'https://www.iitkgp.ac.in/department/MS', label: 'SMST' },
                      { href: 'http://apna.iitkgp.ac.in/web/', label: 'Apna IIT KGP' },
                      { href: 'https://erp.iitkgp.ac.in/', label: 'ERP' },
                      { href: 'https://library.iitkgp.ac.in/', label: 'Central Library' },
                      { href: 'https://www.iitkgp.ac.in/holidays', label: 'Holidays' },
                    ].map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 hover:underline inline-flex items-center"
                        >
                          {link.label}
                          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connect */}
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Connect
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:koel@smst.iitkgp.ac.in" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        koel@smst.iitkgp.ac.in
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a href="tel:+9103222282221" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        +91 03222 282221
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-gray-300 dark:border-gray-600 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="text-center md:text-left">
                    <p className="text-gray-600 dark:text-gray-300">
                      © {new Date().getFullYear()} Clinical Biomarkers Research Laboratory. All rights reserved.
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Website designed and developed by{' '}
                      <a
                        href="/members#ankush-das"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                      >
                        Ankush Das
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
