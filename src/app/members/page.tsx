"use client";

import Image from 'next/image';
import { useState } from 'react';
import { FaOrcid, FaResearchgate } from "react-icons/fa";
import type { Metadata } from 'next';

const members = {
  faculty: [
    {
      name: "Prof. Koel Chaudhury, Ph.D.",
      title: "Principal Investigator",
      image: "/images/MembersDP/Dr_Koel_Chaudhury.jpg",
      bio: "Prof. Koel Chaudhury is a distinguished researcher and professor at the Indian Institute of Technology Kharagpur, specializing in clinical proteomics, metabolomics, and biomarker discovery. Her work focuses on translational health research, particularly in the areas of women's health, respiratory health, and personalized medicine",
      research: "Women's health, Respiratory disorders, Non-invasive biomarkers, Multiomics, Predictive modeling",
      Teliphone: "+91 03222 282221",
      email: "koel@smst.iitkgp.ac.in, koeliitkgp@gmail.com",
      profiles: {
        googleScholar: "https://scholar.google.co.in/citations?user=qafn3S0AAAAJ&hl=en",
        orcid: "https://orcid.org/0000-0002-9390-1179",
        linkedin: "https://www.linkedin.com/in/koel-chaudhury-5bab4018/",
        researchgate:"https://www.researchgate.net/profile/Koel-Chaudhury"
      }
    }
  ],
  staff: [
    {
      name: "Ankush Das",
      title: "Project Staff",
      image: "/images/empty_dp.jpg",
      bio: "Oversees laboratory operations, equipment maintenance, procurement, and CBRL website management to ensure efficient lab functioning and digital presence.",
      responsibilities: "",
      email: "ankush4kgp@gmail.com",
      joinedDate: "2021-01"
    },
    {
      name: "Pragya Dey",
      title: "Project Technical Support",
      image: "/images/MembersDP/pd_dp.JPG",
      bio: "Responsible for collection, analysis, and interpretation of the data of the ongoing research project of silicosis.",
      responsibilities: "Responsible for handling and maintennance of HPLC and other lab equipments",
      email: "deypragya1@gmail.com",
      joinedDate: "2025-05"
      
    }
  ],
  postdocs: [
    {
      name: "Dr. Priyanka Choudhury",
      title: "Research Scientist",
      image: "/images/MembersDP/pc_dp_2.png",
      research: "Biomarker",
      bio: "Specialized in biomarker discovery with focus on early detection and diagnosis. Experienced in clinical proteomics research with expertise in mass spectrometry and data analysis techniques.",
      email: "priyanka91choudhury@gmail.com",
      joinedDate: "2024-03",
      qualifications: "Ph.D. in School of Medical Science and Technology: IIT Kharagpur\n\nM.Sc. in Biological Sciences: Presidency University\n\nB.Sc. in Zoology (Hons.), Chemistry, Botany: University of Calcutta",
      profiles: {
        googleScholar: "https://scholar.google.co.in/citations?user=mLiSF7EAAAAJ&hl=en",
        orcid: "https://orcid.org/0000-0001-7772-8495",
        linkedin: "https://www.linkedin.com/in/priyanka-choudhury-b346a0284/"
      }
    }
  ],
  students: [
    {
      name: "Anindita Bhattacharya",
      title: "Research Scholar",
      image: "/images/MembersDP/ab_dp.jpeg",
      research: "Lung cancer pathogenesis",
      bio: "Working on identifying novel biomarkers for early detection of lung cancer. Expertise in cell culture techniques and molecular biology methodologies.",
      email: "aninditab136@gmail.com",
      joinedDate: "2019-07",
      qualifications: "M.Sc. in Microbiology: St. Xaviers College (Autonomous) under University of Calcutta\n\nB.Sc. in Microbiology: University of Calcutta",
      profiles: {
        googleScholar: "https://scholar.google.co.in/citations?user=rJcSj7cAAAAJ&hl=en",
        orcid: "https://orcid.org/0000-0003-3716-1257",
        linkedin: "https://www.linkedin.com/in/anindita-bhattacharya-389802308/?originalSubdomain=in"
      }
    },
    {
      name: "Imon Mitra",
      title: "Research Scholar",
      image: "/images/MembersDP/im_dp.jpeg",
      research: "Women's reproductive health",
      bio: "Investigating novel non-invasive biomarkers for reproductive disorders. Experienced in clinical sample processing and biomarker validation techniques.",
      email: "mitra.imon95@gmail.com",
      joinedDate: "2020-09",
      qualifications: "M.Sc. : UCSTA, University of Calcutta\n\nB.Sc. : University of Calcutta",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
        orcid: "https://orcid.org/YOUR_ORCID_ID",
        linkedin: "https://www.linkedin.com/in/YOUR_PROFILE"
      }
    },
    {
      name: " Sumana Halder",
      title: "Research Scholar",
      image: "/images/MembersDP/sh_dp.jpg",
      research: "Multimodal Imaging for precision dosimetry",
      bio: "With a foundation in Physics and a Master's in Medical Physics from IIT Kharagpur, I am currently pursuing a Ph.D. in Medical Imaging, focusing on ultrasound theranostics",
      email: "sumanahalder006@gmail.com",
      joinedDate: "2021-09",
      qualifications: "M.Sc. in Medical Physics: IIT Kharagpur\n\nB.Sc. in Physics: University of Calcutta",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
        orcid: "https://orcid.org/YOUR_ORCID_ID",
        linkedin: "http://www.linkedin.com/in/sumanahalder"
      }
    },
    {
      name: "Bishnupriya Saha",
      title: "Research Scholar",
      image: "/images/MembersDP/bs_db.jpg",
      research: "Women's health",
      bio: "Researching biomarkers for reproductive health disorders. Expertise in molecular biology techniques and clinical sample analysis.",
      email: "bsaha3592@gmail.com",
      joinedDate: "2022-01",
      qualifications: "M.Tech. in Biotechnology: KIIT University\n\nB.Tech. in Biotechnology: KIIT University",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
        orcid: "https://orcid.org/0009-0000-0602-4757",
        linkedin: "http://www.linkedin.com/in/bishnupriyasaha"
      }
    },
    {
      name: "Sayak Roy Chowdhury",
      title: "Research Scholar",
      image: "/images/MembersDP/src_dp.jpg",
      research: "Nanomaterials application in Biotechnology",
      bio: "His research focuses on tissue engineering and nanobiotechnology, previously involving bone-based biomaterials for tissue engineering. Currently, he works on nanomaterials for skin wound healing.",
      email: "sayak972@gmail.com",
      joinedDate: "2022-12",
      qualifications: "M.Tech. in Biotechnology: NIT Durgapur\n\nB.Tech. in Biotechnology: UEM, Kolkata",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
        orcid: "https://orcid.org/YOUR_ORCID_ID",
        linkedin: "https://www.linkedin.com/in/sayak-roy-chowdhury-0921a5215/"
      }
    },
    {
      name: "Palash Paul",
      title: "Research Scholar",
      image: "/images/MembersDP/pp_dp1.jpg",
      research: " Interstitial lung diseases and omics",
      bio: "Investigating metabolic pathways in interstitial lung diseases using multi-omics approaches. Experienced in bioinformatics and biostatistical methods.",
      email: "palashpaul3543@gmail.com ",
      joinedDate: "2024-07",
      qualifications: "M.Sc. in Microbiology: University of Calcutta\n\nB.Sc. in Microbiology: University of Calcutta",
      profiles: {
        googleScholar: "https://scholar.google.com/citations?hl=en&user=gqezRrYAAAAJ",
        orcid: "https://orcid.org/0000-0002-5505-4992",
        linkedin: "https://www.linkedin.com/in/palash-paul-1b7907199/"
      }
    },
    {
      name: "Shreya Choudhury",
      title: "Research Scholar",
      image: "/images/MembersDP/shreya_choudhuryDP.png",
      research: " Empty",
      bio: "",
      email: "choudhury.shreya11@gmail.com",
      joinedDate: "2024-07",
      qualifications: "",
      profiles: {
        orcid: "https://orcid.org/0009-0008-4170-5812",
        linkedin: "http://linkedin.com/in/shreyachoudhury11"
      }
    },
    {
      name: "Dr. Soumendranath Ray, MBBS",
      title: "Research Scholar (Working Professional)",
      image: "/images/MembersDP/Dr_Soumendranath_Ray.jpeg",
      research: " Interstitial lung diseases and omics",
      bio: "Dr. Soumendranath Ray is the Senior Consultant and Head of Department of Nuclear Medicine at Tata Medical Center, Calcutta. He brings extensive expertise in nuclear medicine, overseeing advanced diagnostic and therapeutic services, and is recognized for his leadership and commitment to excellence in patient care and medical research in the field.",
      email: "drsoumenray@gmail.com",
      joinedDate: "2025-07",
      qualifications: "DNB in Nuclear Medicine: Radiation medicine centre tata memorial hospital\n\nMBBS: North Bengal Medical College",
      profiles: {
        researchgate: "https://www.researchgate.net/profile/Soumendranath-Ray",
        linkedin: "https://www.linkedin.com/in/dr-soumendranath-calcutta-96345339/?originalSubdomain=in"
      }
    }
  ],
  alumni: [
    {
      name: "Dr. Sunil Kumar",
      title: "Research Scholar (2007)",
      currentPosition: "Senior Data Scientist and Group Lead, Farming Solutions & Digital, Corteva Agriscience, Hyderabad, India",
      research: " ",
      email: "sunilkumar1@gmail.com",
      thesisTitle: "Micro-structural and Biochemical Changes in Human Spermatozoa Associated with RISUG®.",
      image: "/images/alumniDP/sk_dp.jpeg"
    },
    {
      name: "Dr. Soumen Das",
      title: "Research Scholar (2009)",
      currentPosition: "Device Qualification Lead, Takeda Development Center Americas.",
      research: " ",
      email: "dasdou@gmail.com",
      thesisTitle: "Role of Reactive Oxygen Species in Male Infertility and Its Association with Assisted Reproductive Techniques.",
      image: "/images/alumniDP/Soumen Das_DP.jpg"
    },
    {
      name: "Dr. Asha Latha G, MBBS",
      title: "Research Scholar (2010)",
      currentPosition: "  ",
      research: " ",
      email: "ashalathag@gmail.com",
      thesisTitle: "The Clinical Use of Aromatase Inhibitor Letrozole for Routine Ovulation Induction.",
      image: "/images/alumniDP/ag_dp.jpg"
    },
    {
      name: "Dr. Dharitri Goswami",
      title: "Research Scholar (2010)",
      currentPosition: "Medical Officer at BCRTH, IIT Kharagpur, India.",
      research: " ",
      email: "mahadgos@yahoo.com",
      thesisTitle: "Photoplethysmograph Signal Modeling Towards Preventive Cardiology",
      image: "/images/empty_dp.jpg"
    },
    {
      name: "Dr. Narendra Babu K",
      title: "Research Scholar (2011)",
      currentPosition: "Senior Embryologist, Valley Medical & Health Group, New Jersey, USA.",
      research: " ",
      email: "narendra.iitkgp2010@gmail.com",
      thesisTitle: "Role of Reactive Oxygen Species in Female Infertility and Its Association with Assisted Reproductive Techniques.",
      image: "/images/alumniDP/nbk_dp.jpg"
    },
    {
      name: "Dr. Anup Sharma",
      title: "Research Scholar (2011)",
      currentPosition: "  ",
      research: " ",
      email: "name@email.com",
      thesisTitle: "Effect of Diluted and Agitated Cardiotropic Drug Digitalis purpurea on Heart Conduction: a Study on Indian Bufo melanostictus.",
      image: "/images/empty_dp.jpg"
    },
    {
      name: "Dr. Rashmi Mukherjee",
      title: "Research Scholar (2012)",
      currentPosition: "  Assistant Professor, Raja Narendra Lal Khan Womens College,Paschim Medinipur, West Bengal, India.",
      research: " ",
      email: "rashmikgpiit@gmail.com",
      thesisTitle: "Oxidative Stress Induced Changes in Early and Late Onset Preeclampsia",
      image: "/images/alumniDP/rm_dp.jpeg"
    },
    {
      name: "Dr. Saikat Kumar Jana",
      title: "Research Scholar (2013)",
      currentPosition: " Assistant Professor, Dept. of Biotechnology, NIT Arunachal Pradesh, India.",
      research: "",
      email: "saikatmicro4@gmail.com",
      thesisTitle: "Effect of Oxidative Stress on the Pathogenesis and Endometrial Receptivity in Women with Endometriosis and Therapeutic Management Using Dual-Drug Loaded Nanoparticles.",
      image: "/images/alumniDP/skj_dp.jpg"
    },
    {
      name: "Dr. Priyanka Banerjee",
      title: "Research Scholar (2015)",
      currentPosition: "Senior Medical Writer, Dava Oncology",
      research: "",
      email: "priyankabanerjee15@gmail.com",
      thesisTitle: "Understanding Endometrial Receptivity in Idiopathic Recurrent Spontaneous Miscarriage.",
      image: "/images/alumniDP/pb_dp.png"
    },
    {
      name: "Dr. Akhtar Jahan Siddiqa",
      title: "Research Scholar (2016)",
      currentPosition: " Chemical Data Specialist, Albert Invent",
      research: "Metabolomics and biomarker discovery",
      email: "akhtar.mtech@gmail.com",
      thesisTitle: "Hydrophilic Polymer Modified Low Density Polyethylene for Controlled Drug Release System.",
      image: "/images/empty_dp.jpg"
    },
    {
      name: "Dr. Mainak Dutta",
      title: "Research Scholar (2016)",
      currentPosition: "Associate Professor & Head of Department, Department of Biotechnology , BITS Pilani, Dubai Campus.",
      research: "Clinical diagnostics and biomarker validation",
      email: "mainakdutta.86@gmail.com",
      thesisTitle: "Minimally Invasive Diagnosis of Early Endometriosis: An Integrated Proteomics and Metabolomics Approach.",
      image: "/images/AlumniDP/md_dp.jpg"
    },
    {
      name: "Dr. Elavarasan Subramani",
      title: "Research Scholar (2017)",
      currentPosition: "Instructor, The UT MD Anderson Cancer Center, Houston, Texas, USA.",
      research: "Mass spectrometry-based metabolomics",
      email: "ela2genetics@gmail.com",
      thesisTitle: "Molecular Understanding of Endometrial Receptivity in Women with Dormant Genital Tuberculosis.",
      image: "/images/AlumniDP/es_dp.jpg"
    },
    {
      name: "Dr. Sourav Roy Choudhury",
      title: "Research Scholar (2018)",
      currentPosition: "Visiting Fellow, National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), Phoenix, Arizona, United States",
      research: "Metabolomics and biomarker discovery",
      email: "src.bio@gmail.com",
      thesisTitle: "Serum Markers in Women with Polycystic Ovary Syndrome: A Hypothesis-Free Multi-Omics Approach.",
      image: "/images/AlumniDP/src_dp.jpg"
    },
    {
      name: "Dr. Brajesh Singh",
      title: "Research Scholar (2021)",
      currentPosition: " Scientist E, Defence R&D Organisation, Ministry of Defence, Delhi, India",
      research: "Clinical diagnostics and biomarker validation",
      email: " brajesh.singh21@gmail.com",
      thesisTitle: "Effect of Long-term Doxycycline as Adjuvant Therapy in Chronic Obstructive Pulmonary Diseasen.",
      image: "/images/AlumniDP/bs_dp.jpg"
    },
    {
      name: "Dr. Nilanjana Ghosh",
      title: "Research Scholar (2021)",
      currentPosition: "Post Doctoral Fellow, The University of Gothenburg, Sweden",
      research: "Asthma-Chronic Obstructive Pulmonary Disease Overlap (ACO): A Unique Disease Entity?",
      email: "n.nilanjana@gmail.com",
      thesisTitle: "Advanced Mass Spectrometry Techniques for Metabolite Profiling.",
      image: "/images/AlumniDP/ng_dp.jpg"
    },
    {
      name: "Dr. Siva Prakasam O K",
      title: "Research Scholar (2022)",
      currentPosition: "",
      research: "Metabolomics and biomarker discovery",
      email: "sivaprakasamok@gmail.com",
      thesisTitle: "Design and Development of Paper-Based Microchip for Healthcare Applications.",
      image: "/images/AlumniDP/spok_dp.jpg"
    },
    {
      name: "Dr. Apoorva Singh",
      title: "Research Scholar (2023)",
      currentPosition: "Senior Research Professional at Stanford University",
      research: "Clinical diagnostics and biomarker validation",
      email: " apporvasingh91@gmail.com",
      thesisTitle: "Exploring Metallo-Curcumin Nanoparticles as a Therapeutic Strategy for Endometriosis.",
      image: "/images/AlumniDP/as_dp.jpg"
    },
    {
      name: "Dr. Sanjukta Dasgupta",
      title: "Research Scholar (2023)",
      currentPosition: "Assistant Professor, Dept. of Biotechnology, Brainware University.",
      research: "Mass spectrometry-based metabolomics",
      email: "dasguptasanjukta5@gmail.com",
      thesisTitle: "Radiologic, Metabolomic, and Transcriptomic Signatures of Hypersensitivity Pneumonitis.",
      image: "/images/AlumniDP/sd_dp.jpg"
    },
    {
      name: "Dr. Pritha Biswas",
      title: "Research Scholar (2024)",
      currentPosition: "Postdoctoral fellow at Indian Institute of Science - IISc Bangalore.",
      research: "Metabolomics and biomarker discovery",
      email: "prithabhu10@gmail.com ",
      thesisTitle: "Enzyme Mediated Resistant Starch Production and Exploring its Therapeutic Efficacy in Experimental Polycystic Ovary Syndrome (PCOS) Rat Model.",
      image: "/images/AlumniDP/pb_dp.jpg"
    },
    {
      name: "Dr. Atul Kumar Ojha",
      title: "Research Scholar (2024)",
      currentPosition: "Postdoctoral fellow at University College Dublin, Ireland.",
      research: "Clinical diagnostics and biomarker validation",
      email: "ojha.kratul@gmail.com",
      thesisTitle: "Development of cervix analogue for women with cervical atresia using tissue engineering approach.",
      image: "/images/AlumniDP/ao_dp.jpeg"
    },
    {
      name: "Dr. Souvik Biswas",
      title: "Research Scholar (2024)",
      currentPosition: "Assistant Professor, Department of Biomedical Engineering, NIT Raipur, Chhattisgarh 492010, India.",
      research: "Mass spectrometry-based metabolomics",
      email: "sbiswas.bme@nitrr.ac.in",
      thesisTitle: "Conducting Polymer Based Papertronic Devices for pH and Urea Sensing: Theory to Application.",
      image: "/images/AlumniDP/sb_dp.jpg"
    },
    {
      name: "Dr. Priyanka Choudhury",
      title: "Research Scholar (2024)",
      currentPosition: "Research Scientist, School of Medical Science and Technology(SMST), IIT Kharagpur.",
      research: "Clinical diagnostics and biomarker validation",
      email: "priyanka91choudhury@gmail.com ",
      thesisTitle: "COPD Associated Pulmonary Hypertension: Understanding Disease Mechanism and Development of a Sensing Device.",
      image: "/images/AlumniDP/pc_dp.jpg"
    },
    {
      name: "Dr. Arijit Pal",
      title: "Research Scholar (2024)",
      currentPosition: "",
      research: "Mass spectrometry-based metabolomics",
      email: "pal.arijit88@gmail.com ",
      thesisTitle: "MoS₂, 2S and its Nanocomposite Based Smart Sensors for Targeted Biomolecule Detection.",
      image: "/images/AlumniDP/ap_dp.jpg"
    },
    {
      name: "Dr. Da Doma Sherpa",
      title: "Research Scholar (2024)",
      currentPosition: "",
      research: "Mass spectrometry-based metabolomics",
      email: "domasherpa27@gmail.com",
      thesisTitle: "Insight into the Mechanism of Recurrent Spontaneous Miscarriage of Unknown Etiology.",
      image: "/images/AlumniDP/dds_dp.jpg"
    }
  ]
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

function getAnchorId(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}

// Add this component for social/academic profile links
function ProfileLinks({ profiles }: { profiles: { googleScholar?: string; orcid?: string; linkedin?: string; researchgate?: string } }) {
  return (
    <div className="flex gap-2 mt-2">
      {profiles.googleScholar && (
        <a
          href={profiles.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"
          title="Google Scholar"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
          </svg>
        </a>
      )}
      {profiles.orcid && (
        <a
          href={profiles.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-[#A6CE39] dark:hover:text-[#A6CE39] transition-colors p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"
          title="ORCID"
        >
          <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
            <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z" fill="currentColor"/>
            <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z" fill="white"/>
          </svg>
        </a>
      )}
      {profiles.linkedin && (
        <a
          href={profiles.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-[#0077B5] dark:hover:text-[#0077B5] transition-colors p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"
          title="LinkedIn"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      )}
      {profiles.researchgate && (
        <a
          href={profiles.researchgate}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-[#00D0B7] dark:hover:text-[#00D0B7] transition-colors p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"
          title="ResearchGate"
        >
          <FaResearchgate className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

// Email link component with icon
function EmailLink({ email }: { email: string }) {
  return (
    <a 
      href={`mailto:${email}`} 
      className="text-blue-600 dark:text-blue-600 flex items-center gap-1.5 text-sm group"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md transition-all duration-200 ease-in-out hover:bg-blue-100 dark:hover:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:scale-105 transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="transition-colors group-hover:text-blue-700 dark:group-hover:text-blue-400">{email}</span>
      </span>
    </a>
  );
}

// Function to handle multiple email addresses
function EmailLinks({ emails }: { emails: string }) {
  const emailArray = emails.split(', ');
  
  return (
    <div className="flex flex-col gap-1.5 mb-3">
      {emailArray.map((email, index) => (
        <EmailLink key={index} email={email.trim()} />
      ))}
    </div>
  );
}

// Add this component for the flippable card
function FlippableCard({ 
  member, 
  index, 
  type 
}: { 
  member: any, 
  index: number, 
  type: 'postdoc' | 'student' 
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Function to format qualifications with line breaks
  const formatQualifications = (text: string) => {
    if (!text) return "Ph.D. in relevant field with specialization in biomedical research.";
    return text.split('\n\n').map((item, i) => {
      // Split each qualification into degree and institution
      const parts = item.split(': ');
      
      return (
        <div key={i} className={`${i < text.split('\n\n').length - 1 ? "mb-4" : ""} pb-2 ${i < text.split('\n\n').length - 1 ? "border-b border-gray-200 dark:border-gray-600" : ""}`}>
          {parts.length > 1 ? (
            <>
              <span className="font-medium text-gray-800 dark:text-gray-800 block mb-1">{parts[0]}</span>
              <span className="text-gray-600 dark:text-gray-600 block text-sm">{parts[1]}</span>
            </>
          ) : (
            <span>{item}</span>
          )}
        </div>
      );
    });
  };

  return (
    <div 
      id={getAnchorId(member.name)}
      className="h-auto min-h-[640px] relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div 
        className="flip-card w-full h-full"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`flip-card-inner w-full h-full ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Front of card */}
          <div className="flip-card-front bg-white dark:bg-gray-300 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            <div className="w-full relative rounded-lg overflow-hidden mb-4 bg-[#f5f5f5] group transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.01]" style={{ height: '400px' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-lg"></div>
              {member.image && (
                <Image
                  src={member.image}
                  alt={`${member.name}'s photo`}
                  fill
                  className="object-cover object-center rounded-lg transition-transform duration-700 group-hover:scale-105 z-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={95}
                  onError={() => setImageError(true)}
                  style={{ display: imageError ? 'none' : 'block' }}
                />
              )}
              {(!member.image || imageError) && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-300 z-20"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 dark:text-black">{member.name}</h3>
            <p className="text-sm sm:text-base text-primary dark:text-primary/90 font-medium mb-1">{member.title}</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-600 mb-2">
              Joined {formatDate(member.joinedDate)}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-600 mb-2">
              <strong className="dark:text-black">Research:</strong> {member.research}
            </p>
            
            {/* Email on front with icon */}
            <EmailLinks emails={member.email} />
            
            {/* Social profiles on front */}
            {member.profiles && (
              <div onClick={(e) => e.stopPropagation()} className="mb-3">
                <ProfileLinks profiles={member.profiles} />
              </div>
            )}
            
            <div className="text-blue-600 text-xs sm:text-sm font-medium mt-2 flex items-center justify-center">
              Click to see more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Back of card */}
          <div className="flip-card-back bg-white dark:bg-gray-300 p-4 sm:p-6 rounded-lg shadow-sm flex flex-col transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 dark:text-black">{member.name}</h3>
            <p className="text-sm sm:text-base text-primary dark:text-primary/90 font-medium mb-3">{member.title}</p>
            
            {/* Add Bio Section */}
            {member.bio && (
              <div className="mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-black mb-2 pb-1 border-b border-gray-200 dark:border-gray-500">Bio</h4>
                <p className="text-sm text-gray-600 dark:text-gray-600">
                  {member.bio}
                </p>
              </div>
            )}
            
            <div className="mb-5">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-black mb-3 pb-1 border-b border-gray-200 dark:border-gray-500">Qualifications</h4>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-600 space-y-2">
                {formatQualifications(member.qualifications)}
              </div>
            </div>
            
            <div className="mb-3 flex-grow">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-black mb-2 pb-1 border-b border-gray-200 dark:border-gray-500">Research Focus</h4>
              <p className="text-sm text-gray-600 dark:text-gray-600">
                {member.research}
              </p>
            </div>
            
            <div className="text-blue-600 text-xs sm:text-sm font-medium mt-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 dark:text-white">Lab Members</h1>

        {/* Faculty */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary dark:text-primary/90">Faculty</h2>
          <div className="grid md:grid-cols-1 gap-6 sm:gap-8">
            {members.faculty.map((member, index) => (
              <div 
                key={index} 
                id={getAnchorId(member.name)}
                className="hover-card bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row gap-6 sm:gap-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] hover:border-primary/20 dark:hover:border-primary/30"
              >
                <div className="w-full lg:w-2/5 xl:w-1/3">
                  <div className="aspect-[4/5] relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-[1.03]">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name}'s photo`}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110 z-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
                        priority
                        quality={95}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-xl transition-all duration-500 z-20"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                      <div className="text-white text-sm font-medium">Principal Investigator</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 dark:text-white hover-link inline-block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-primary transition-all duration-300">{member.name}</h3>
                    <p className="text-lg sm:text-xl text-primary dark:text-primary/90 font-semibold mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                      </svg>
                      {member.title}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{member.bio}</p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        <strong className="dark:text-white text-primary flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Research Areas:
                        </strong>
                        <span className="text-gray-700 dark:text-gray-300">{member.research}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        <strong className="dark:text-white text-primary flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Email:
                        </strong>
                      </p>
                      <div className="ml-6">
                        <EmailLinks emails={member.email} />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        <strong className="dark:text-white text-primary flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Phone:
                        </strong>
                        <a href={`tel:${member.Teliphone}`} className="ml-6 hover-link text-blue-600 dark:text-blue-400 font-medium">
                          {member.Teliphone}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {member.profiles && (
                    <div>
                      <p className="text-sm font-semibold text-primary dark:text-primary/90 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Academic Profiles:
                      </p>
                      <ProfileLinks profiles={member.profiles} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Team */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary dark:text-primary/90">Research Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Postdoctoral Fellows */}
            {members.postdocs.map((member, index) => (
              <FlippableCard key={`postdoc-${index}`} member={member} index={index} type="postdoc" />
            ))}

            {/* Research Scholars */}
            {members.students.map((member, index) => (
              <FlippableCard key={`student-${index}`} member={member} index={index} type="student" />
            ))}
          </div>
        </section>

        {/* Lab Staff */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary dark:text-primary/90">Lab Staff</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {members.staff.map((member, index) => (
              <div 
                key={`staff-${index}`} 
                id={getAnchorId(member.name)}
                className="hover-card bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full sm:w-1/3">
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-200 group transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-blue-500/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name}'s photo`}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 z-0"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          quality={90}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-300 z-20"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white hover-link inline-block">{member.name}</h3>
                    <p className="text-sm sm:text-base text-primary dark:text-primary/90 font-medium mb-1">{member.title}</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                      Joined {formatDate(member.joinedDate)}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">{member.bio}</p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
                      <strong className="dark:text-white">Responsibilities:</strong> {member.responsibilities}
                    </p>
                    <EmailLinks emails={member.email} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary dark:text-primary/90 flex items-center">
            <span className="relative">
              Alumni
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {members.alumni.map((member, index) => (
              <div 
                key={`alumni-${index}`} 
                id={getAnchorId(member.name)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-all duration-300 
                hover:shadow-md hover:translate-y-[-2px] group border border-gray-100 dark:border-gray-700"
              >
                <div className="p-4 sm:p-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 relative rounded-full overflow-hidden bg-gray-200 flex-shrink-0 
                      border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-300 shadow-md group-hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-blue-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name}'s photo`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                          sizes="80px"
                          quality={90}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-white/30 transition-all duration-300 z-20"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 dark:text-white inline-block 
                        transition-colors duration-300 group-hover:text-primary">{member.name}</h3>
                      <p className="text-xs sm:text-sm text-primary dark:text-primary/90 font-medium mb-1">{member.title}</p>
                      {member.currentPosition && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 font-medium">
                          <span className="font-semibold text-gray-700 dark:text-gray-400">Current:</span> {member.currentPosition}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {member.thesisTitle && (
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <strong className="text-gray-800 dark:text-gray-200 font-medium">Thesis Title:</strong> 
                        <span className="italic"> {member.thesisTitle}</span>
                      </p>
                      
                      <div className="scale-90 origin-left">
                        <EmailLink email={member.email} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}