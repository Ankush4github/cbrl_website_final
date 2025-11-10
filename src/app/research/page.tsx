import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research | Biomarker Discovery & Clinical Diagnostics at CBRL',
  description: 'Explore cutting-edge biomarker research at CBRL, IIT Kharagpur. Our interdisciplinary team conducts innovative studies in clinical diagnostics, translational medicine, mass spectrometry, and precision healthcare solutions.',
  keywords: [
    'School of Medical Science and Technology',
    'SMST, IIT Kharagpur',
    'Prof. Koel Chaudhury',
    'Koel Chaudhury',
    'Professor Koel Chaudhury',
    'Prof. Koel Chaudhury, SMST, IIT Kharagpur',
    'IIT Kharagpur',
    'Resewarch at IIT Kharagpur',
    'biomarker discovery research',
    'clinical diagnostics studies',
    'translational medicine research',
    'mass spectrometry biomarkers',
    'precision medicine research',
    'metabolomics studies',
    'proteomics research',
    'disease biomarkers',
    'clinical research IIT Kharagpur',
    'biomedical research projects',
    'healthcare innovation research',
    'molecular diagnostics'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/research',
  },
  openGraph: {
    title: 'Research Excellence | CBRL Biomarker Discovery & Clinical Diagnostics',
    description: 'Discover groundbreaking biomarker research at CBRL, IIT Kharagpur. Our team advances precision medicine through innovative clinical diagnostics and translational research.',
    url: 'https://cbrl.iitkgp.ac.in/research',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    images: [
      {
        url: '/images/research/biomarker-analysis.jpg',
        width: 1200,
        height: 630,
        alt: 'CBRL Biomarker Research - Advanced Clinical Diagnostics',
        type: 'image/jpeg'
      },
      {
        url: '/images/facilities/waters-ms.jpg',
        width: 1200,
        height: 630,
        alt: 'Mass Spectrometry Research at CBRL',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CBRLofficial',
    creator: '@CBRLofficial',
    title: 'Research Excellence | CBRL Biomarker Discovery',
    description: 'Groundbreaking biomarker research advancing precision medicine through innovative clinical diagnostics.',
    images: {
      url: '/images/facilities/waters-ms.jpg',
      alt: 'CBRL Biomarker Research'
    }
  }
};

export default function Research() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Research Areas</h1>
        
        <div className="space-y-12">
          {/* Genomic Analysis */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary/90 hover:text-primary/80 transition-colors duration-200 cursor-default">Genomic Analysis</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our lab specializes in developing and applying computational methods for analyzing complex genomic data.
              We focus on understanding genetic variations and their impact on biological systems.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-white">Current Projects:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Development of machine learning algorithms for variant calling</li>
                <li>Analysis of structural variations in cancer genomes</li>
                <li>Population-scale genomic studies</li>
              </ul>
            </div>
          </section>

          {/* Protein Structure Prediction */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary/90 hover:text-primary/80 transition-colors duration-200 cursor-default">Protein Structure Prediction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We work on developing advanced computational methods for predicting protein structures
              and understanding protein-protein interactions using machine learning approaches.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-white">Current Projects:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Deep learning models for protein structure prediction</li>
                <li>Protein-protein interaction network analysis</li>
                <li>Drug-target interaction prediction</li>
              </ul>
            </div>
          </section>

          {/* Systems Biology */}
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary/90 hover:text-primary/80 transition-colors duration-200 cursor-default">Systems Biology</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our systems biology research focuses on understanding complex biological systems
              through computational modeling and network analysis.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-white">Current Projects:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Metabolic network modeling</li>
                <li>Gene regulatory network inference</li>
                <li>Multi-omics data integration</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white hover:text-primary dark:hover:text-primary/90 transition-colors duration-300 cursor-default">Projects</h2>
            
            {/* Ongoing Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-primary dark:text-primary/90 border-b-2 border-primary/20 pb-2 hover:text-primary/80 hover:border-primary/30 transition-all duration-200 cursor-default">Ongoing Projects</h3>
              
              {/* P.I. Projects */}
              <div className="mb-12">
                <h4 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-200 cursor-default">Projects as PI</h4>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">⛏️</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary dark:text-primary/90 group-hover:text-primary/80 transition-colors duration-200">CC16-Neopterin Silicosis Screening</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Establishing CC16 and Neopterin Levels in Serum and Urine of Stone-Mine Workers to Facilitate Screening and Early Prediction of Silicosis.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Duration:</span> 20-03-2023 to 20-03-2026
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Funding:</span> Indian Council of Medical Research (ICMR)
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Status:</span> 
                        <span className="text-orange-500 hover:text-orange-400 transition-colors duration-200 cursor-default">Phase 3</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">🧬 </span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary dark:text-primary/90 group-hover:text-primary/80 transition-colors duration-200">Gut Microbiome and Metabolome Analysis in PCOS</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Analysis of Gut Microbiome and Metabolome in Women with Polycystic Ovary Syndrome.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Duration:</span> 06-10-2023 to 05-10-2026
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Funding:</span> Department of Biotechnology(DBT)
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Status:</span> 
                        <span className="text-green-500 hover:text-green-400 transition-colors duration-200 cursor-default">Phase 2</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">🫁</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary dark:text-primary/90 group-hover:text-primary/80 transition-colors duration-200">Metabolome-Transcriptome-Microbiome Integration for Lung Diseases</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Integration of metabolome, transcriptome and microbiome data to differentiate between chronic hypersensitivity pneumonitis and idiopathic pulmonary fibrosis.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Duration:</span> 31-01-2024 to 30-01-2027
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Funding:</span> Science and Engineering Research Board (SERB)
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Status:</span> 
                        <span className="text-green-500 hover:text-green-400 transition-colors duration-200 cursor-default">Phase 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Co-P.I. Projects */}
              <div className="mb-12">
                <h4 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-200 cursor-default">Projects as Co-PI</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">🫁</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary dark:text-primary/90 group-hover:text-primary/80 transition-colors duration-200">Transcriptomics-Metabolomics-Microbiome Prediction for COPD-Lung Cancer</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Integrated transcriptomics, metabolomics and microbiome signatures-based prediction of COPD patients at-risk of progressing to lung cancer.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Duration:</span> 06-10-2023 to 05-10-2026
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Funding:</span> American Heart Association
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Status:</span> 
                        <span className="text-green-500">Phase 2</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">🧬</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary dark:text-primary/90 group-hover:text-primary/80 transition-colors duration-200">Multi-Omics ML for Recurrent Implantation Failure Prediction</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Multi-omics integrated machine learning approach for prediction of women at-risk of undergoing recurrent implantation failure(RIF).
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Duration:</span> 05-02-2025 to 04-02-2028
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Funding:</span> Indian Council of Medical Research (ICMR)
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Status:</span> 
                        <span className="text-blue-500 hover:text-blue-400 transition-colors duration-200 cursor-default">Starting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Completed Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-primary dark:text-primary/90 border-b-2 border-primary/20 pb-2 hover:text-primary/80 hover:border-primary/30 transition-all duration-200 cursor-default">Completed Projects</h3>
              <div className="bg-gray-50 dark:bg-gray-700/30 p-8 rounded-lg text-center hover:bg-gray-100/50 dark:hover:bg-gray-600/30 transition-all duration-300 border border-transparent hover:border-primary/10">
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">View our completed research projects</p>
                <a 
                  href="/data/Completed Projects (Prof. Koel Chaudhury, SMST, IIT Kharagpur).pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 hover:scale-105 text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-800 group"
                  aria-label="View completed projects document (opens in new tab)"
                >
                  <svg 
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  View Completed Projects
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Sponsors Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white hover:text-primary dark:hover:text-primary/90 transition-colors duration-300 cursor-default">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center h-32 border border-transparent hover:border-primary/10 cursor-pointer group">
                <img 
                  src="/images/sponsors/icmr_logo.svg" 
                  alt="Indian Council of Medical Research"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 group-hover:scale-110 transition-all duration-300 dark:invert"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center h-32 border border-transparent hover:border-primary/10 cursor-pointer group">
                <img 
                  src="/images/sponsors/dbt_logo.jpg" 
                  alt="Department of Biotechnology"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 group-hover:scale-110 transition-all duration-300 dark:invert"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center h-32 border border-transparent hover:border-primary/10 cursor-pointer group">
                <img 
                  src="/images/sponsors/serb_logo.png" 
                  alt="Science and Engineering Research Board"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 group-hover:scale-110 transition-all duration-300 dark:invert"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center h-32 border border-transparent hover:border-primary/10 cursor-pointer group">
                <img 
                  src="/images/sponsors/dhr_logo.png" 
                  alt="Department of Health Research ICMR"
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 group-hover:scale-110 transition-all duration-300 dark:invert"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}