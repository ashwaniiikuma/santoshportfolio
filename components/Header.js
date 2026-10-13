"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <section 
      id="home" 
      className="w-11/12 max-w-6xl mx-auto min-h-screen pt-24 md:pt-32 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16"
    >
      {/* LEFT SIDE: CONTENT & BUTTONS */}
      <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-5">
        
        {/* SUB-TITLE / BADGE */}
       

        {/* GREETING */}
        <motion.h3 
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-700"
        >
          Hi! I'm <span className="font-bold text-slate-900">Santosh Singh Farswan</span>
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
            className="inline-block origin-bottom-right"
          >
            <Image src={assets.hand_icon} alt="Waving hand" className="w-5 h-5 object-contain" />
          </motion.span>
        </motion.h3>

        {/* MAIN HEADING */}
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] text-slate-900"
        >
          Social Media Executive at{" "}
          <span className="text-indigo-600">
            Smith Origin PVT.LTD
          </span>{" "}
        </motion.h1>

        {/* LOCATION BADGE / TAG */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs font-semibold text-slate-500 sm:gap-0.5 uppercase tracking-wider"
        >
           Based in Roorkee, Uttarakhand
        </motion.p>

        {/* BIO / DESCRIPTION */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
        >
          I specialize in creating engaging social media campaigns, YouTube long-form content, Reels & Shorts, alongside writing scripts and crafting interactive e-learning lessons using Articulate 360, Rise 360, HeyGen, and Canva.
        </motion.p>  

        {/* CALL TO ACTION BUTTONS */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 mt-2 w-full sm:w-auto"
        >
          <Link 
            href="#contact" 
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Contact me</span>
            <Image src={assets.right_arrow_white || assets.arrow_icon} alt="" className="w-4 h-4 invert" />
          </Link>

          <a
            href="/resume-santosh.pdf"
            download="resume-santosh.pdf"
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5"
          >
            <span>My resume</span>
            <Image src={assets.download_icon || assets.arrow_icon} alt="" className="w-4 h-4 opacity-70" />
          </a>
        </motion.div> 
      </div>

      {/* RIGHT SIDE: PROFILE IMAGE */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
        className="flex-shrink-0 relative"
      >
        <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72">
          {/* Subtle background glow element */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-400 blur-2xl opacity-20 transform scale-105"></div>
          
          <Image 
            src={assets.portfolio_img} 
            alt="Santosh Singh Farswan" 
            className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl hover:scale-[1.02] transition-transform duration-300 ring-1 ring-slate-200"
          />
        </div>
      </motion.div>
      
    </section>
  );
};

export default Header;