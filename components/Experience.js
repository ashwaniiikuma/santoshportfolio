// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { experienceData, assets } from '@/assets/assets';

// const Experience = () => {
//   const [activeTab, setActiveTab] = useState('projects');

//   // Software Engineer Work Highlights
//  const companyHighlights = [
//     {
//       role: "Full-Time Software Engineer",
//       company: "Tech Startup",
//       period: "2026 - Present",
//       description: "Building scalable production applications using Next.js & MERN stack, optimizing API response times, and leading feature deployments.",
//       type: "Full-Time"
//     },
//     {
//       role: "Full-Stack Developer Intern",
//       company: "45-Day Intensive Summer Internship",
//       period: "Completed",
//       description: "Collaborated in a dev team to engineer, debug, and resolve critical bottlenecks across full-stack architecture, including API integrations, backend routing, and frontend UI fixes. Awarded Completion & Internship Letters.",
//       type: "Internship"
//     },
//     {
//       role: "Google Gemini AI Certified",
//       company: "Google",
//       period: "Verified",
//       description: "Demonstrated expertise in leveraging Google Gemini AI models, prompt engineering, and integrating AI APIs into modern web applications.",
//       type: "Certification"
//     }
//   ];

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id='experience' 
//       className='w-full px-[12%] py-10 scroll-mt-20 '
//     >
//       {/* SECTION TITLE */}
//       <motion.h4 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-serif text-gray-700 '
//       >
//         Professional Experience
//       </motion.h4>

//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='text-center text-2xl md:text-5xl font-serif text-gray-900 '
//       >
//         My Work & Credentials
//       </motion.h2>
      
//       <motion.p 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='max-w-2xl mx-auto text-center mt-7 mb-8 font-serif text-gray-600  text-sm sm:text-base'
//       >
//         Full-stack software engineer delivering production-grade web applications. Highlighted below are my industry projects, corporate experience, and official certifications.
//       </motion.p>

//     {/* FILTER TABS (Employee View) */}
// <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 sm:gap-4 mb-10 max-w-md mx-auto">
//   <button 
//     onClick={() => setActiveTab('projects')}
//     className={`w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold transition text-center whitespace-nowrap ${
//       activeTab === 'projects' 
//         ? 'bg-black text-white  shadow-sm' 
//         : 'border border-gray-300 text-gray-600  hover:border-black '
//     }`}
//   >
//     Production Projects
//   </button>
//   <button 
//     onClick={() => setActiveTab('experience')}
//     className={`w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold transition text-center whitespace-nowrap ${
//       activeTab === 'experience' 
//         ? 'bg-black text-white shadow-sm' 
//         : 'border border-gray-300 text-gray-600  hover:border-black '
//     }`}
//   >
//     Company Roles & Certs
//   </button>
// </div>

//       {/* TAB 1: PROJECTS GRID */}
//       {activeTab === 'projects' && (
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-6 gap-5'
//         >
//           {experienceData.map((project, index) => (        
//             <motion.div   
//               key={index} 
//               whileHover={{ scale: 1.02 }}
//               className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-md overflow-hidden'
//               style={{ backgroundImage: `url(${project.bgImage})` }}
//             >
//               {/* Card Overlay Details */}
//               <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border border-gray-100 shadow-md backdrop-blur-sm'>
//                 <div>
//                   <h3 className='font-semibold text-sm text-gray-800 '>{project.title}</h3>
//                   <p className='text-xs text-gray-500  mt-0.5'>{project.description}</p>
//                 </div>

//                 <div className='border border-black  rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]  group-hover:bg-lime-300  transition duration-300'>
//                   <Image src={assets.send_icon} alt='send icon' className="w-4 "/>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}

//      {/* TAB 2: CORPORATE EXPERIENCE & CERTS SUMMARY */}
//   {activeTab === 'experience' && (
//     <motion.div 
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'
//     >
//       {companyHighlights.map((item, idx) => (
//         <div key={idx} className="p-6 rounded-2xl border border-gray-200  bg-gray-50/50  space-y-3 relative overflow-hidden">
//           <div className="flex justify-between items-start gap-2">
//             <div>
//               <h3 className="font-bold text-base text-gray-900 ">{item.role}</h3>
//               <p className="text-xs font-medium text-pink-500 mt-0.5">{item.company}</p>
//             </div>
//             <span className="text-[10px] font-semibold px-2.5 py-1 bg-black/5  rounded-full text-gray-600  shrink-0">
//               {item.period}
//             </span>
//           </div>
//           <p className="text-xs text-gray-600  leading-relaxed">
//             {item.description}
//           </p>

//           {/* DOCUMENT / CERTIFICATE ACTION BUTTONS */}
//           {item.type === "Internship" && (
//             <div className="pt-2 flex gap-3 text-xs font-medium">
//               <a href="/Ashwani Kumar_JSL_INT_2026_002.pdf" target="_blank" className="text-pink-500 hover:underline flex items-center gap-1">
//                 <span>View Letter ↗</span>
//               </a>
//               <a href="/Ashwani Kumar.pdf" target="_blank" className="text-pink-500 hover:underline flex items-center gap-1">
//                 <span>View Certificate ↗</span>
//               </a>
//             </div>
//           )}

//           {item.type === "Certification" && (
//             <div className="pt-2">
//               <a href="https://edu.google.accredible.com/46baba25-a536-419c-bfe8-c9e4140ace04#acc.ydvcVuAe" target="_blank" rel="noreferrer" className="text-xs text-pink-500 font-medium hover:underline flex items-center gap-1">
//                 <span>Verify Credential ↗</span>
//               </a>
//             </div>
//           )}
//         </div>
//       ))}
//     </motion.div>
//   )}
//       {/* SHOW MORE DETAILED EXPERIENCE BUTTON */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="text-center my-14"
//       >
      
//       </motion.div>

//     </motion.div>
//   );
// };

// export default Experience;


"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { experienceData, assets } from '@/assets/assets';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('projects');

  // Santosh Singh Farswan Work & Experience Highlights
  const companyHighlights = [
    {
      role: "Social Media Executive & Content Developer",
      company: "Smith Origin ",
      period: "Present",
      description: "Managing brand presence, designing creative social media campaigns, producing high-engagement short form and long form video managing facebook and instgram.",
      type: "Full-Time"
    },
    {
      role: "E-Learning & Storyline Developer",
      period: "Jf Knowledge Centre",
      description: "Specialized in converting complex training documentation into engaging, interactive e-learning courses using Articulate 360, Rise 360, HeyGen, Synthesia and Canva.",
      type: "Specialization"
    },
    {
      role: "Social Media Digital Marketing Intern",
      period: "Experience",
      company: "(experienced at JSL Works)",
      description: "Expert in end-to-end youtube video, video editing, social media management linkedin, instagram and analytics tracking to optimize audience engagement and growth.",
      type: "Certification"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      {/* SECTION TITLE */}
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-2xl font-serif text-blue-600 hover:text-blue-600'
      >
        Professional Journey
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-2xl md:text-4xl font-serif text-gray-800'
      >
        My Work & Expertise
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='max-w-2xl mx-auto text-center mt-7 mb-8 font-serif text-gray-600 text-sm sm:text-base'
      >
        Social Media Executive and Content Developer driving brand engagement through creative storytelling, video production, and interactive e-learning design.
      </motion.p>

      {/* FILTER TABS */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 sm:gap-4 mb-10 max-w-md mx-auto">
        {/* <button 
          onClick={() => setActiveTab('projects')}
          className={`w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold transition text-center whitespace-nowrap ${
            activeTab === 'projects' 
              ? 'bg-black text-white shadow-sm' 
              : 'border border-gray-300 text-gray-600 hover:border-black'
          }`}
        >
          Creative Projects
        </button> */}
        <button 
          onClick={() => setActiveTab('experience')}
          className={`w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold transitn text-center whitespace-nowrap ${
            activeTab === 'experience' 
              ? 'bg-black text-white shadow-sm' 
              : 'border-2 border-blue-400 text-gray-600 hover:border-blue-600  hover:shadow-blue-400 sha'
          }`}
        >
          Work & Experience
        </button>
      </div>

      {/* TAB 1: PROJECTS GRID
      {activeTab === 'projects' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-6 gap-5'
        >
          {experienceData.map((project, index) => (       
            <motion.div   
              key={index} 
              whileHover={{ scale: 1.02 }}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-md overflow-hidden'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              {/* Card Overlay Details */}
              {/* <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border border-gray-100 shadow-md backdrop-blur-sm'>
                <div>
                  <h3 className='font-semibold text-sm text-gray-800'>{project.title}</h3>
                  <p className='text-xs text-gray-500 mt-0.5'>{project.description}</p>
                </div>

                <div className='border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-300'>
                  <Image src={assets.send_icon} alt='send icon' className="w-4"/>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}  */}

      {/* TAB 2: CORPORATE EXPERIENCE & HIGHLIGHTS */}
      {activeTab === 'experience' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'
        >
          {companyHighlights.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-3 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-base text-gray-900">{item.role}</h3>
                    <p className="text-xs font-medium text-indigo-600 mt-0.5">{item.company}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 bg-black/5 rounded-full text-gray-600 shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

    </motion.div>
  );
};

export default Experience;