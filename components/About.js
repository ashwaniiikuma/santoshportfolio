

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { assets, infoList, toolsData } from '@/assets/assets';

// const About = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id='about' 
//       className='w-full px-6 sm:px-10 md:px-[12%] py-10 scroll-mt-20  overflow-hidden'
//     >
//       <motion.h4 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-serif text-gray-700 '
//       >
//         Introduction
//       </motion.h4>

//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='text-center text-4xl sm:text-5xl font-serif text-gray-900 '
//       >
//         About me
//       </motion.h2>

//       <div className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20'>
        
//         {/* PROFILE IMAGE */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className='w-52 sm:w-64 md:w-80 rounded-3xl shrink-0 mx-auto'
//         >
//           <Image 
//             src={assets.portfolio_img} 
//             alt='user' 
//             className='w-full rounded-3xl object-cover shadow-lg aspect-square'
//           />
//         </motion.div>

//         {/* DETAILS SECTION */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className='flex-1 w-full'
//         >
//           <p className='mb-10 max-w-2xl font-serif text-gray-600 leading-relaxed text-sm sm:text-base text-center lg:text-left mx-auto lg:mx-0'>
//             I am a dedicated MERN Stack Developer with hands-on experience in creating full-stack web applications. I specialize in building responsive front-end interfaces using React and Next.js, backed by secure Node.js APIs and efficient MongoDB databases.
//           </p>

//           {/* INFO CARDS */}
//           <motion.ul 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl'
//           >
//             {infoList.map(({ icon, title, description }, index) => (
//               <motion.li 
//                 whileHover={{ scale: 1.03 }}
//                 className='border-[0.5px] border-gray-400  rounded-xl p-5 sm:p-6 cursor-pointer hover:bg-[#fcf4ff]  hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]  transition-all'
//                 key={index}
//               >
//                 <Image src={icon} alt={title} className='w-7 mt-1 sm:mt-3'/>
//                 <h3 className='my-3 sm:my-4 font-semibold text-gray-700  text-base'>{title}</h3>
//                 <p className='text-gray-600  text-xs sm:text-sm break-words'>{description}</p>
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* TOOLS SECTION */}
//           <h4 className='my-6 text-gray-700  font-serif text-center lg:text-left'>Tools I use</h4>
//           <motion.ul 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             className='flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5'
//           >
//             {toolsData.map((tool, index) => (
//               <motion.li 
//                 whileHover={{ y: -5 }}
//                 className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300  rounded-lg cursor-pointer hover:bg-gray-50  transition-all duration-300'
//                 key={index}
//               >
//                 <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
//               </motion.li>
//             ))}
//           </motion.ul>

//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, infoList, toolsData } from '@/assets/assets';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about' 
      className='w-full px-6 sm:px-10 md:px-[12%] py-20 scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-[#fcf8ff]/40 to-white'
    >
      {/* SECTION HEADER */}
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center mb-2 text-sm md:text-base font-serif font-semibold text-indigo-600 tracking-wider uppercase'
      >
        Introduction
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight'
      >
        About me
      </motion.h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-12 lg:my-16'>
        
        {/* PROFILE IMAGE WITH GLOW EFFECT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='relative w-56 sm:w-64 md:w-80 shrink-0 mx-auto group'
        >
          {/* Subtle background glow */}
          <div className='absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-400 to-purple-300 opacity-25 blur-xl group-hover:opacity-20 transition duration-300'></div>
          
          <div className='relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-white'>
            <Image 
              src={assets.portfolio_img} 
              alt='user' 
              className='w-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500'
            />
          </div>
        </motion.div>

        {/* DETAILS SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex-1 w-full'
        >
          <p className='mb-10 max-w-2xl font-serif text-gray-600 leading-relaxed text-base sm:text-lg text-center lg:text-left mx-auto lg:mx-0'>
            I am a dedicated Social Media Executive and Content Developer with hands-on experience in creating engaging digital campaigns, long-form YouTube content, and interactive e-learning solutions using Articulate Storyline, Rise 360, and Canva.
          </p>

          {/* INFO CARDS */}
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl items-stretch'
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li 
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='group bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer hover:bg-gradient-to-b hover:from-[#fcf4ff] hover:to-white hover:border-indigo-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-start h-full'
                key={index}
              >
                <div className='w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300 shrink-0'>
                  <Image src={icon} alt={title} className='w-6 h-6 object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300'/>
                </div>
                <h3 className='mb-2 font-bold text-gray-800 text-base group-hover:text-indigo-600 transition-colors'>{title}</h3>
                <p className='text-gray-600 text-xs sm:text-sm leading-relaxed break-words mt-0'>
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* TOOLS SECTION */}
          <h4 className='my-6 text-gray-800 font-serif font-semibold text-center lg:text-left text-base'>Tools I use</h4>
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4'
          >
            {toolsData.map((tool, index) => (
              <motion.li 
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square bg-white border border-gray-200 rounded-xl shadow-xs cursor-pointer hover:border-indigo-400 hover:shadow-md hover:bg-indigo-50/50 transition-all duration-300'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-6 object-contain'/>
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;