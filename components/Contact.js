
// "use client";
// import { assets } from '@/assets/assets';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "674b292a-d240-402b-ae6b-9e30c6627b99");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully!");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="contact" 
//       className='w-full px-6 sm:px-10 md:px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white via-[#fcf4ff]/30 to-white'
//     >
//       <motion.h4 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className='text-center mb-3 text-sm md:text-base font-serif font-semibold text-indigo-600 tracking-wider uppercase'
//       >
//         Connect with me
//       </motion.h4>

//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight'
//       >
//         Get in touch
//       </motion.h2>
    
//       <motion.p 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className='text-center max-w-xl mx-auto mt-4 mb-12 font-serif text-gray-600 text-sm sm:text-base leading-relaxed'
//       >
//         Have a project in mind, a social media campaign collaboration, or want to connect? Feel free to drop a message below!
//       </motion.p>

//       <motion.form 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.5 }}
//         onSubmit={onSubmit} 
//         className='max-w-2xl mx-auto bg-white border border-gray-200/90 shadow-xl rounded-2xl p-6 sm:p-10 relative'
//       >
//         {/* Subtle decorative top border glow */}
//         <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-full'></div>

//         {/* Name and Email Grid */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 mb-6'>
//           <div>
//             <label className='block text-xs font-medium text-gray-700 mb-1.5 uppercase tracking-wider'>Your Name</label>
//             <motion.input 
//               whileFocus={{ scale: 1.01 }}
//               type="text" 
//               placeholder='Enter your name' 
//               required 
//               className='w-full p-3.5 outline-none border border-gray-300 rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all text-sm'
//               name='name'
//             />
//           </div>
//           <div>
//             <label className='block text-xs font-medium text-gray-700 mb-1.5 uppercase tracking-wider'>Your Email</label>
//             <motion.input 
//               whileFocus={{ scale: 1.01 }}
//               type="email" 
//               placeholder='Enter your email' 
//               required
//               className='w-full p-3.5 outline-none border border-gray-300 rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all text-sm'
//               name='email' 
//             />
//           </div>
//         </div>

//         {/* Textarea */}
//         <div className='mb-6'>
//           <label className='block text-xs font-medium text-gray-700 mb-1.5 uppercase tracking-wider'>Your Message</label>
//           <motion.textarea 
//             whileFocus={{ scale: 1.01 }}
//             rows='5' 
//             placeholder='Write your message here...' 
//             required 
//             className='w-full p-4 outline-none border border-gray-300 rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all text-sm resize-none'
//             name='message'
//           ></motion.textarea>
//         </div>

//         {/* Styled Submit Button */}
//         <div className='text-center'>
//           <motion.button 
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type='submit' 
//             className='py-2 px-6 inline-flex items-center justify-center gap-3 bg-gray-900 text-white rounded-xl font-medium shadow-md hover:bg-indigo-600 duration-300 cursor-pointer w-full sm:w-auto'
//           >
//             <span>Send Message</span>
//             <Image src={assets.right_arrow_white || assets.right_arrow} alt='' className='w-4 filter  invert' />
//           </motion.button>
//         </div>

//         {/* Submission Result Feedback */}
//         {result && (
//           <motion.p 
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`mt-6 text-center text-sm font-semibold p-3 rounded-lg ${
//               result.includes("Successfully") 
//                 ? 'bg-green-50 text-green-700 border border-green-200' 
//                 : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
//             }`}
//           >
//             {result}
//           </motion.p>
//         )}
//       </motion.form>
//     </motion.div>
//   );
// };

// export default Contact;

"use client";
import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "674b292a-d240-402b-ae6b-9e30c6627b99");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact" 
      className='w-full px-6 sm:px-10 md:px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white via-[#fcf4ff]/30 to-white dark:from-darkTheme dark:via-darkTheme dark:to-darkTheme transition-colors duration-300'
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center mb-3 text-sm md:text-base font-serif font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase'
      >
        Connect with me
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight'
      >
        Get in touch
      </motion.h2>
    
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-center max-w-xl mx-auto mt-4 mb-12 font-serif text-gray-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed'
      >
        Have a project in mind, a social media campaign collaboration, or want to connect? Feel free to drop a message below!
      </motion.p>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onSubmit={onSubmit} 
        className='max-w-2xl mx-auto bg-white dark:bg-[#1a0033] border border-gray-200/90 dark:border-white/10 shadow-xl rounded-2xl p-6 sm:p-10 relative'
      >
        {/* Subtle decorative top border glow */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-full'></div>

        {/* Name and Email Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 mb-6'>
          <div>
            <label className='block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider'>Your Name</label>
            <motion.input 
              whileFocus={{ scale: 1.01 }}
              type="text" 
              placeholder='Enter your name' 
              required 
              className='w-full p-3.5 outline-none border border-gray-300 dark:border-white/15 rounded-xl bg-gray-50/50 dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-[#2a004a] focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all text-sm'
              name='name'
            />
          </div>
          <div>
            <label className='block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider'>Your Email</label>
            <motion.input 
              whileFocus={{ scale: 1.01 }}
              type="email" 
              placeholder='Enter your email' 
              required
              className='w-full p-3.5 outline-none border border-gray-300 dark:border-white/15 rounded-xl bg-gray-50/50 dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-[#2a004a] focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all text-sm'
              name='email' 
            />
          </div>
        </div>

        {/* Textarea */}
        <div className='mb-6'>
          <label className='block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider'>Your Message</label>
          <motion.textarea 
            whileFocus={{ scale: 1.01 }}
            rows='5' 
            placeholder='Write your message here...' 
            required 
            className='w-full p-4 outline-none border border-gray-300 dark:border-white/15 rounded-xl bg-gray-50/50 dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-[#2a004a] focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all text-sm resize-none'
            name='message'
          ></motion.textarea>
        </div>

        {/* Styled Submit Button */}
        <div className='text-center'>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type='submit' 
            className='py-3 px-6 inline-flex items-center justify-center gap-3 bg-gray-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-medium shadow-md hover:bg-indigo-600 dark:hover:bg-indigo-400 duration-300 cursor-pointer w-full sm:w-auto text-sm'
          >
            <span>Send Message</span>
            <Image src={assets.right_arrow_white || assets.right_arrow} alt='' className='w-4 filter invert dark:invert-0' />
          </motion.button>
        </div>

        {/* Submission Result Feedback */}
        {result && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 text-center text-sm font-semibold p-3 rounded-lg ${
              result.includes("Successfully") 
                ? 'bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
                : 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
            }`}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;