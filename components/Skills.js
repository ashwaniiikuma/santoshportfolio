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
//         What I offer
//       </motion.h4>

//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3, delay: 0.3 }}
//         className='text-center text-4xl md:text-5xl font-serif text-gray-900'
//       >
//         My Skills
//       </motion.h2>

//       <motion.p 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.3, delay: 0.4 }}
//         className='mb-15 mx-auto mt-5 text-center max-w-2xl font-serif text-gray-600'
//       >
//         I specialize in creating end-to-end social media strategies, engaging YouTube & reel content, and interactive e-learning modules using Articulate Storyline, Rise 360, HeyGen, and Canva.
//       </motion.p>

//       {/* SERVICE CARDS GRID */}
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
//             className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between'
//           >
//             <div>
//               <Image src={icon} alt={title} className='w-10 mt-2' />
//               <h3 className='text-lg my-4 font-semibold text-gray-800'>{title}</h3>
//               <p className='text-sm text-gray-600 leading-5'>{description}</p>
//             </div>

//             <a 
//               href={link || "#"} 
//               className='flex items-center gap-2 text-sm mt-5 text-gray-800 font-medium hover:underline'
//             >
//               Read more 
//               <Image src={assets.right_arrow} alt='Arrow' className='w-4' />
//             </a>
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
import { assets, serviceData } from '@/assets/assets';

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='text-center mb-3 text-lg font-serif text-gray-700'
      >
        
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='text-center text-4xl md:text-5xl font-serif bottom-4 text-gray-900'
      >
        My Skills & Expertise
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className='mb-12 mx-auto mt-5 text-center max-w-2xl font-serif text-gray-600 text-sm sm:text-base'
      >
        Specialized in creating end-to-end social media strategies, producing engaging YouTube & reel content, and developing interactive e-learning modules using industry-standard design tools.
      </motion.p>

      {/* SKILLS CARDS GRID */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10'
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.03 }}
            className='border border-gray-300 rounded-xl px-8 py-10 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between bg-white'
          >
            <div>
              <div className='w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4'>
                <Image src={icon} alt={title} className='w-6 h-6 object-contain' />
              </div>
              <h3 className='text-lg mb-3 font-semibold text-gray-800'>{title}</h3>
              <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
            </div>

            
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;