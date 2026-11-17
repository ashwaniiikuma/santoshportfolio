

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { assets, serviceData } from '@/assets/assets';

// const Skills = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id='services' 
//       className='w-full px-[12%] py-10 scroll-mt-20'
//     >
//       <motion.h4 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3, delay: 0.2 }}
//         className='text-center mb-3 text-lg font-serif text-gray-700'
//       >
        
//       </motion.h4>

//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3, delay: 0.3 }}
//         className='text-center text-4xl md:text-5xl font-serif bottom-4 text-gray-900'
//       >
//         My Skills & Expertise
//       </motion.h2>

//       <motion.p 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.3, delay: 0.4 }}
//         className='mb-12 mx-auto mt-5 text-center max-w-2xl font-serif text-gray-600 text-sm sm:text-base'
//       >
//         Specialized in creating end-to-end social media strategies, producing engaging YouTube & reel content, and developing interactive e-learning modules using industry-standard design tools.
//       </motion.p>

//       {/* SKILLS CARDS GRID */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.3, delay: 0.5 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10'
//       >
//         {serviceData.map(({ icon, title, description, link }, index) => (
//           <motion.div 
//             key={index}
//             whileHover={{ scale: 1.03 }}
//             className='border border-gray-300 rounded-xl px-8 py-10 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between bg-white'
//           >
//             <div>
//               <div className='w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4'>
//                 <Image src={icon} alt={title} className='w-6 h-6 object-contain' />
//               </div>
//               <h3 className='text-lg mb-3 font-semibold text-gray-800'>{title}</h3>
//               <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
//             </div>

            
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Skills;

"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { serviceData } from '@/assets/assets';

const Skills = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='skills' 
      className='w-full px-6 sm:px-10 md:px-[12%] py-20 scroll-mt-20 overflow-hidden bg-transparent transition-colors duration-300'
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='text-center mb-2 text-sm md:text-base font-serif font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase'
      >
        What I Bring
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='text-center text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight'
      >
        My Skills & Expertise
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className='mb-12 mx-auto mt-4 text-center max-w-2xl font-serif text-gray-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed'
      >
        Specialized in creating end-to-end social media strategies, producing engaging YouTube & reel content, and developing interactive e-learning modules using industry-standard design tools.
      </motion.p>

      {/* SKILLS CARDS GRID */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10 items-stretch'
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className='border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 bg-white dark:bg-[#1a0033] shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:bg-gradient-to-b hover:from-[#fcf4ff] hover:to-white dark:hover:from-[#2a004a] dark:hover:to-[#1a0033] cursor-pointer transition-all duration-300 flex flex-col justify-between'
          >
            <div>
              <div className='w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300'>
                <Image src={icon} alt={title} className='w-6 h-6 object-contain' />
              </div>
              <h3 className='text-base font-bold mb-2 text-gray-800 dark:text-white'>{title}</h3>
              <p className='text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed'>{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;