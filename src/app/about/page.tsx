import type { Metadata } from 'next';
import { Users, Award, BookOpen, Target, Eye, Heart, Lightbulb, Globe, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

// Card components
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 pb-4">{children}</div>
);

const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`font-semibold dark:text-white ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-gray-600 dark:text-gray-400 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export const metadata: Metadata = {
  title: 'About CBRL | Mission, Vision & Research Excellence',
  description: 'Discover the Clinical Biomarkers Research Laboratory (CBRL) at IIT Kharagpur. Learn about our mission to advance biomedical research, our vision for precision medicine, and our commitment to innovative healthcare solutions through cutting-edge biomarker discovery.',
  keywords: [
    'about CBRL',
    'biomarker research laboratory mission',
    'IIT Kharagpur medical research',
    'clinical diagnostics vision',
    'biomedical research excellence',
    'translational medicine goals',
    'healthcare innovation mission',
    'precision medicine vision',
    'Prof Koel Chaudhury laboratory',
    'research laboratory values'
  ],
  alternates: {
    canonical: 'https://cbrl.iitkgp.ac.in/about',
  },
  openGraph: {
    title: 'About CBRL | Leading Biomarker Research Laboratory at IIT Kharagpur',
    description: 'Explore the mission, vision, and research excellence of the Clinical Biomarkers Research Laboratory (CBRL) at IIT Kharagpur. Committed to advancing precision medicine through innovative biomarker discovery and clinical diagnostics.',
    url: 'https://cbrl.iitkgp.ac.in/about',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clinical Biomarkers Research Laboratory - CBRL',
    images: [
      {
        url: '/images/facilities/waters-ms.jpg',
        width: 1200,
        height: 630,
        alt: 'CBRL Laboratory - Advanced Biomarker Research Facility at IIT Kharagpur',
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
    title: 'About CBRL | Biomarker Research Excellence at IIT Kharagpur',
    description: 'Discover our mission to advance precision medicine through innovative biomarker research and clinical diagnostics.',
    images: {
      url: '/images/facilities/waters-ms.jpg',
      alt: 'CBRL Research Laboratory'
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen">
     
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-20">
          {/* About Principal Investigator */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                Principal Investigator
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Leading innovation in biomedical research</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="bg-gradient-to-r from-primary/10 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <Users className="h-16 w-16 md:h-20 md:w-20 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Dr. Koel Chaudhary, Ph.D.</h3>
                    <p className="text-xl text-primary dark:text-primary/90 font-semibold mb-2">Professor</p>
                    <p className="text-gray-600 dark:text-gray-400">School of Medical Science and Technology, IIT Kharagpur</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 space-y-8">
                <div className="space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
                  Prof. Koel Chaudhury is a biomedical scientist and Professor at the School of Medical Science and Technology, IIT Kharagpur. She is Known for applying advanced omics techniques to address critical challenges in reproductive and respiratory health, with a focus on discovering putative diagnostic and predictive biomarkers and elucidating underlying disease mechanisms to enable impactful healthcare solutions.
                   </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify ">
                   Prof. Koel Chaudhury initiated her academic career at IIT Delhi where she worked on the development of a non-hormonal male contraceptive RISUG® which has successfully completed Phase III clinical trials. In women’s health, she has used proteomics, metabolomics, and advanced spectroscopic techniques to map molecular “fingerprints” of complex reproductive disorders. These studies have paved the way for early and accurate detection of recurrent miscarriage, endometriosis, and preeclampsia, while also revealing mechanisms behind implantation failures in women with dormant genital tuberculosis. By combining spectroscopy with machine learning, her team is developing predictive tools for improved diagnosis of gynecological conditions.
                   </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
                   In respiratory health, Prof. Chaudhury has established a unique ‘breath signatures’ resource bank for lung disorders in eastern India. Using NMR and mass spectrometry based metabolomics, her team has identified distinct biochemical patterns in blood, breath, and bronchoalveolar lavage fluid samples. This work has yielded robust metabolic signatures that distinguish asthma–COPD overlap from asthma and COPD alone. Moreoever, her team has established unique biomarkers for hypersensitivity pneumonitis and COPD-associated pulmonary hypertension, and profiled metabolic differences between doxycycline-treated and untreated COPD patients, offering insights into treatment responses. Her ongoing research uses metabolomic and lipidomic profiling to differentiate lung cancer subtypes, contributing to precision diagnostics and personalized therapy.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl border border-yellow-200 dark:border-gray-600">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Awards & Recognition</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        Labhsetwar Award
                      </li>
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        Technology Innovation Award
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl border border-blue-200 dark:border-gray-600">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">Research Impact</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        212+ Publications on ResearchGate
                      </li>
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        1 Major Patent in Nanomedicine
                      </li>
                      <li className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Leading 11 PhD Research Scholars
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl border border-gray-200 dark:border-gray-600">
                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    Contact Information
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm">koel@smst.iitkgp.ac.in</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm">+91-3222-283572</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-sm">Room No. 328, 3rd Floor, Life Science Building, SMST, IIT Kharagpur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
       
        </div>
      </div>
    </div>
  );
}