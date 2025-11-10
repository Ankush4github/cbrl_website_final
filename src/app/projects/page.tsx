'use client';

import { useState } from 'react';

// Project data with detailed information
const projectsData = [
  {
    id: 1,
    title: "CC16-Neopterin Silicosis Screening",
    icon: "⛏️",
    shortDescription: "Establishing CC16 and Neopterin Levels in Serum and Urine of Stone-Mine Workers to Facilitate Screening and Early Prediction of Silicosis.",
    duration: "20-03-2023 to 20-03-2026",
    funding: "DHR-Indian Council of Medical Research (ICMR)",
    role: "Principal Investigator",
    roleColor: "text-blue-600 dark:text-blue-400",
    detailedDescription: "Establishing definitive serum and urine biomarker levels for early silicosis screening in Indian stone-mine workers.",
    objectives: [
      "Establish CC16 and neopterin levels in acute, accelerated, and chronic silicosis.",
      "Compare biomarker levels to healthy controls and silico-tuberculosis cases.",
      "Correlate levels with years of silica exposure and radiological findings.",
      "Generate robust data to enable future point-of-care diagnostic device development."
    ],
    methodology: "Measuring biomarkers (HPLC/ELISA) in paired serum/urine samples from patients and controls.",
    expectedOutcomes: "Definitive biomarker reference ranges for silicosis subtypes"
  },
  {
    id: 2,
    title: "Gut Microbiome and Metabolome Analysis in PCOS",
    icon: "🧬",
    shortDescription: "Analysis of Gut Microbiome and Metabolome in Women with Polycystic Ovary Syndrome.",
    duration: "06-10-2023 to 05-10-2026",
    funding: "Department of Biotechnology(DBT)",
    role: "Principal Investigator",
    roleColor: "text-blue-600 dark:text-blue-400",
    detailedDescription: "Investigating the role of gut microbiome and metabolome in the pathophysiology of Polycystic Ovary Syndrome (PCOS) in Indian women.",
    objectives: [
      "Analyze and compare the gut microbiome composition in women with PCOS versus healthy controls.",
      "Compare gut metabolite profiles in women with PCOS with those of controls.",
      "Explore associations between microbial abundance, fecal/serum metabolomes, and PCOS clinical traits.",
      "Identify potential microbial and metabolic biomarkers for PCOS diagnosis and therapeutic targets."
    ],
    methodology: "Whole metagenomic shotgun sequencing of fecal DNA and NMR/GC-MS metabolomic profiling of fecal and serum samples.",
    expectedOutcomes: "Identification of microbiome-metabolome signatures and biomarkers specific to Indian PCOS women."
  },
  {
    id: 3,
    title: "Metabolome-Transcriptome-Microbiome Integration for Lung Diseases",
    icon: "🫁",
    shortDescription: "Integration of metabolome, transcriptome and microbiome data to differentiate between chronic hypersensitivity pneumonitis and idiopathic pulmonary fibrosis.",
    duration: "31-01-2024 to 30-01-2027",
    funding: "Science and Engineering Research Board (SERB)",
    role: "Principal Investigator",
    roleColor: "text-blue-600 dark:text-blue-400",
    detailedDescription: "Multi-omics integration of metabolomics, transcriptomics, and microbiome profiling of BALF to distinguish chronic hypersensitivity pneumonitis (cHP) from idiopathic pulmonary fibrosis (IPF).",
    objectives: [
      "Identify BALF metabolites distinguishing cHP and IPF (NMR metabolomics).",
      "Discover and validate differentially expressed genes between cHP and IPF (NGS, qPCR).",
      "Characterize and compare lung microbiota signatures in cHP and IPF.",
      "Integrate metabolome, transcriptome, and microbiome data using advanced bioinformatics."
    ],
    methodology: "Multi-omics integration using advanced bioinformatics pipelines, machine learning algorithms, and systems biology approaches on patient cohorts.",
    expectedOutcomes: "Improved diagnostic accuracy, reduced time to diagnosis, and better patient outcomes through personalized treatment selection."
  },
  {
    id: 4,
    title: "Transcriptomics-Metabolomics-Microbiome Prediction for COPD-Lung Cancer",
    icon: "🫁",
    shortDescription: "Integrated transcriptomics, metabolomics and microbiome signatures-based prediction of COPD patients at-risk of progressing to lung cancer.",
    duration: "06-10-2023 to 05-10-2026",
    funding: "Indian Council of Medical Research (ICMR)",
    role: "Principal Investigator",
    roleColor: "text-blue-600 dark:text-blue-400",
    detailedDescription: "Multi-omics profiling and machine learning–based prediction model to identify COPD patients at risk of progressing to lung cancer.",
    objectives: [
      "Identify altered metabolome, transcriptome, and microbiome signatures in lung cancer patients with and without COPD.",
      "Investigate expression of candidate signatures in COPD patients.",
      "Validate multi-omics markers across patient cohorts using NMR, NGS, and qPCR.",
      "Integrate omics data with machine learning to predict COPD patients at risk of lung cancer."
    ],
    methodology: "BALF-based metabolomics, transcriptomics, and microbiome profiling integrated with machine learning for predictive risk modeling in COPD-to-lung cancer progression.",
    expectedOutcomes: "Novel predictive biomarkers and machine learning model enabling early identification of COPD patients at risk of developing lung cancer."
  },
  {
    id: 5,
    title: "Multi-Omics ML for Recurrent Implantation Failure Prediction",
    icon: "🧬",
    shortDescription: "Multi-omics integrated machine learning approach for prediction of women at-risk of undergoing recurrent implantation failure(RIF).",
    duration: "05-02-2025 to 04-02-2028",
    funding: "Indian Council of Medical Research (ICMR)",
    role: "Principal Investigator",
    roleColor: "text-blue-600 dark:text-blue-400",
    detailedDescription: "Multi-omics metabolomic and lipidomic profiling of endometrial tissue with machine learning integration to identify predictive biomarkers for recurrent implantation failure (RIF)",
    objectives: [
      "Identify metabolomic signatures in endometrial tissue of RIF versus control women.",
      "Explore lipidomic alterations in the same patient cohort.",
      "Integrate metabolomics, lipidomics, and clinical parameters using machine learning.",
      "Develop a predictive model for early identification of women at risk of RIF during IVF"
    ],
    methodology: "Endometrial tissue metabolomics and lipidomics (UHPLC–MS/MS) integrated with clinical data, analyzed using machine learning predictive models.",
    expectedOutcomes: "Candidate biomarkers and predictive model enabling early identification of women susceptible to RIF, improving IVF success rates."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add custom animations
  const modalStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }
    .animate-slideUp {
      animation: slideUp 0.3s ease-out;
    }
  `;

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen py-12">
      <style dangerouslySetInnerHTML={{ __html: modalStyles }} />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Projects</h1>
        
        <div className="space-y-12">
          

          {/* Projects */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white hover:text-primary dark:hover:text-primary/90 transition-colors duration-300 cursor-default">Research Projects</h2>
            
            {/* Ongoing Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-primary dark:text-primary/90 border-b-2 border-primary/20 pb-2 hover:text-primary/80 hover:border-primary/30 transition-all duration-200 cursor-default">Ongoing Projects</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                  <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-primary/20 group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary dark:text-primary/90 group-hover:text-primary/80 transition-colors duration-200">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Duration:</span> {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Funding:</span> {project.funding}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold mr-2">Role:</span> 
                        <span className={`${project.roleColor} font-medium`}>{project.role}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => openModal(project)}
                      className="w-full mt-4 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center justify-center group/btn"
                      aria-label={`Read more about ${project.title}`}
                    >
                      <span className="mr-2">Read More</span>
                      <svg 
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
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
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </button>
                  </div>
                ))}


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
                  View Completed Projects list
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
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

        {/* Project Details Modal */}
         {isModalOpen && selectedProject && (
           <div 
             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn" 
             onClick={closeModal}
             role="dialog"
             aria-modal="true"
             aria-labelledby="modal-title"
             aria-describedby="modal-description"
           >
             <div 
               className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-slideUp" 
               onClick={(e) => e.stopPropagation()}
             >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary text-3xl">{selectedProject.icon}</span>
                    </div>
                    <div>
                       <h2 id="modal-title" className="text-2xl font-bold text-primary dark:text-primary/90">{selectedProject.title}</h2>
                       <p id="modal-description" className="text-gray-600 dark:text-gray-400 mt-1">{selectedProject.shortDescription}</p>
                     </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-2 text-gray-700 dark:text-gray-300">Duration:</span>
                      <span className="text-gray-600 dark:text-gray-400">{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-2 text-gray-700 dark:text-gray-300">Funding:</span>
                      <span className="text-gray-600 dark:text-gray-400">{selectedProject.funding}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-2 text-gray-700 dark:text-gray-300">Role:</span>
                      <span className={`${selectedProject.roleColor} font-medium`}>{selectedProject.role}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Project Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.detailedDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Objectives</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {selectedProject.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Methodology</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.methodology}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Expected Outcomes</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.expectedOutcomes}</p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

 