

// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { experienceData, assets } from '@/assets/assets';

// const Experience = () => {
//   const [activeTab, setActiveTab] = useState('projects');

//   // Santosh Singh Farswan Work & Experience Highlights
//   const companyHighlights = [
//     {
//       role: "Social Media Executive & Content Developer",
//       company: "Smith Origin Pvt.Ltd",
//       period: "Present",
//       description: "Managing brand presence, designing creative social media campaigns, producing high-engagement short form and long form video managing facebook and instgram.",
//       type: "Full-Time"
//     },
//     {
//       role: "E-Learning & Storyline Developer",
//       period:"Experienced",
//       company: "(Jf Knowledge Centre)",
//       description: "Specialized in converting complex training documentation into engaging, interactive e-learning courses using Articulate 360, Rise 360, HeyGen, Synthesia and Canva.",
//       type: "Specialization"
//     },
//     {
//       role: "Social Media Digital Marketing Intern",
//       period: "Experienced",
//       company: "(experienced at JSL Works)",
//       description: "Expert in end-to-end youtube video, video editing, social media management linkedin, instagram and analytics tracking to optimize audience engagement and growth.",
//       type: "Certification"
//     }
//   ];

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id='experience' 
//       className='w-full px-[12%] py-10 scroll-mt-20'
//     >
//       {/* SECTION TITLE */}
//       <motion.h4 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-2xl font-serif text-blue-600 hover:text-blue-600'
//       >
//         Professional Journey
//       </motion.h4>

//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='text-center text-2xl md:text-4xl font-serif text-gray-800'
//       >
//         My Work & Expertise
//       </motion.h2>
      
//       <motion.p 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='max-w-2xl mx-auto text-center mt-7 mb-8 font-serif text-gray-600 text-sm sm:text-base'
//       >
//         Social Media Executive and Content Developer driving brand engagement through creative storytelling, video production, and interactive e-learning design.
//       </motion.p>

//       {/* FILTER TABS */}
//       <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 sm:gap-4 mb-10 max-w-md mx-auto">
        
//         <button 
//           onClick={() => setActiveTab('experience')}
//           className={`w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold transitn text-center whitespace-nowrap ${
//             activeTab === 'experience' 
//               ? 'bg-black text-white shadow-sm' 
//               : 'border-2 border-blue-400 text-gray-600 hover:border-blue-600  hover:shadow-blue-400 sha'
//           }`}
//         >
//           Work & Experience
//         </button>
//       </div>

//       {/* TAB 2: CORPORATE EXPERIENCE & HIGHLIGHTS */}
//       {activeTab === 'experience' && (
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6'
//         >
//           {companyHighlights.map((item, idx) => (
//             <div key={idx} className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-3 relative overflow-hidden flex flex-col justify-between">
//               <div>
//                 <div className="flex justify-between items-start gap-2 mb-2">
//                   <div>
//                     <h3 className="font-bold text-base text-gray-900">{item.role}</h3>
//                     <p className="text-xs font-medium text-indigo-600 mt-0.5">{item.company}</p>
//                   </div>
//                   <span className="text-[10px] font-semibold px-2.5 py-1 bg-black/5 rounded-full text-gray-600 shrink-0">
//                     {item.period}
//                   </span>
//                 </div>
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       )}

//     </motion.div>
//   );
// };

// export default Experience;

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Experience = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('experience');

  // Santosh Singh Farswan Work & Experience Highlights
  const companyHighlights = [
    {
      role: "Social Media Executive & Content Developer",
      company: "Smith Origins Pvt. Ltd",
      period: "Present",
      description: "Managing brand presence, designing creative social media campaigns, producing high-engagement short-form and long-form video, managing Facebook and Instagram.",
      type: "Full-Time"
    },
    {
      role: "E-Learning & Storyline Developer",
      period: "Experienced",
      company: "(Jf Knowledge Centre)",
      description: "Specialized in converting complex training documentation into engaging, interactive e-learning courses using Articulate 360, Rise 360, HeyGen, Synthesia, and Canva.",
      type: "Specialization"
    },
    {
      role: "Social Media Digital Marketing Intern",
      period: "Experienced",
      company: "(JSL Works)",
      description: "Expert in end-to-end YouTube video production, video editing, social media management for LinkedIn and Instagram, and analytics tracking to optimize audience engagement and growth.",
      type: "Certification"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience' 
      className='w-full px-6 sm:px-10 md:px-[12%] py-20 scroll-mt-20 overflow-hidden bg-transparent transition-colors duration-300'
    >
      {/* SECTION TITLE */}
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center mb-2 text-sm md:text-base font-serif font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase'
      >
        Professional Journey
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight'
      >
        My Work & Expertise
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='max-w-2xl mx-auto text-center mt-4 mb-12 font-serif text-gray-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed'
      >
        Social Media Executive and Content Developer driving brand engagement through creative storytelling, video production, and interactive e-learning design.
      </motion.p>

      {/* FILTER TABS */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 sm:gap-4 mb-12 max-w-md mx-auto">
        <button 
          onClick={() => setActiveTab('experience')}
          className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold transition-all duration-300 text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'experience' 
              ? 'bg-slate-900 dark:bg-white dark:text-slate-900 text-white shadow-md' 
              : 'border-2 border-indigo-300 dark:border-white/20 text-gray-600 dark:text-slate-300 hover:border-indigo-600 dark:hover:border-indigo-400'
          }`}
        >
          Work & Experience
        </button>
      </div>

      {/* TAB CONTENT: CORPORATE EXPERIENCE & HIGHLIGHTS */}
      {activeTab === 'experience' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6 items-stretch'
        >
          {companyHighlights.map((item, idx) => (
            <motion.div 
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              key={idx} 
              className="p-6 rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#1a0033] shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/30 space-y-4 relative overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white leading-snug">{item.role}</h3>
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1">{item.company}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-gray-600 dark:text-slate-300 shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

    </motion.div>
  );
};

export default Experience;