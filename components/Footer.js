// "use client";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { assets } from '@/assets/assets';

// const Footer = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className='mt-20 '
//     >
//       {/* BRAND & EMAIL SECTION */}
//       <div className='text-center'>
//         <Link href="#top" className='mx-auto mb-2 text-2xl font-serif font-semibold inline-block text-gray-900 '>
//           Santosh
//         </Link>
        
//         <div className='w-max flex items-center gap-2 mx-auto text-gray-700 text-sm sm:text-base'>
//           <Image 
//             src={ assets.mail_icon_dark} 
//             alt='Email Icon' 
//             className='w-5 sm:w-6'
//           />
//        <a 
//           href="https://mail.google.com/mail/?view=cm&fs=1&to=farswansantoshsingh71@gmail.com " 
//           target="_blank" rel="noopener noreferrer" className="hover:underline">
//            farswansantoshsingh71@gmail.com 
//         </a>
//         </div>
//       </div>

//       {/* COPYRIGHT & SOCIAL LINKS */}
//       <div className='text-center sm:flex items-center justify-between border-t border-gray-400  mx-[10%] mt-12 py-6 text-sm text-gray-600 '>
//         <p>&copy; 2026 Santosh Sing Farswan. All rights reserved.</p>
        
//         <ul className='flex items-center gap-6 sm:gap-10 justify-center mt-4 sm:mt-0 font-medium'>
//           <li>
//             <a 
//               href="https://github.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className='hover:text-black  transition-colors'
//             >
//               GitHub
//             </a>
//           </li>
//           <li>
//             <a 
//               href="https://linkedin.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className='hover:text-black  transition-colors'
//             >
//               LinkedIn
//             </a>
//           </li>
        
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// export default Footer;


"use client";
import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='mt-24 w-full bg-gradient-to-t from-[#fcf4ff]/50 via-white to-white pt-16 border-t border-gray-100'
    >
      {/* BRAND & EMAIL SECTION */}
      <div className='text-center px-6'>
        <Link 
          href="#top" 
          className='mx-auto mb-3 text-2xl font-serif font-bold inline-block text-gray-800 tracking-tight hover:opacity-80 transition-opacity'
        >
          Santosh Singh Farswan
        </Link>
        
        <div className='w-max flex items-center gap-2.5 mx-auto text-gray-500 text-sm sm:text-base bg-white border border-gray-100 px-4 py-2 rounded-full shadow-xs hover:border-indigo-400 transition-all'>
         
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=farswansantoshsingh71@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium hover:text-indigo-500 text-indigo-400 underline transition-colors"
          >
            farswansantoshsingh71@gmail.com
          </a>
        </div>
      </div>

      {/* COPYRIGHT & SOCIAL LINKS */}
      <div className='max-w-7xl mx-auto px-6 sm:px-10 md:px-[12%] text-center sm:flex items-center justify-between border-t border-gray-200 mt-12 py-8 text-sm text-gray-600'>
        <p className='font-medium'>&copy; 2026 Santosh Singh Farswan. All rights reserved.</p>
        
        <ul className='flex items-center gap-8 justify-center mt-6 sm:mt-0 font-medium'>
          <li>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-gray-600 hover:text-indigo-600 hover:underline transition-colors'
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-gray-600 hover:text-indigo-600 hover:underline transition-colors'
            >
              LinkedIn
            </a>
          </li>
          
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;