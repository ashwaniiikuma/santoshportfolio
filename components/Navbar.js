"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { X, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* LIGHT MODE TOP GRADIENT GLOW (Dark mode mein automatically chhup jayega) */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 py-4">
        <nav 
          className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
            isScroll 
              ? "bg-white/80 backdrop-blur-md shadow-sm border border-gray-200/60 dark:bg-darkTheme/80 dark:border-white/15 dark:shadow-white/5" 
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* LOGO */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition duration-300">
              <Sparkles className="w-3 h-3 fill-white" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
              Santosh<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV LINKS (Pill Container jaisa screenshot mein hai) */}
          <ul className={`hidden md:flex items-center gap-7 px-8 py-2.5 rounded-full transition-all duration-300 ${
            isScroll 
              ? "bg-transparent" 
              : "bg-white/60 dark:bg-white/5 border border-gray-200/70 dark:border-white/20 backdrop-blur-md shadow-xs"
          }`}>
            <li>
              <Link href="#home" className="text-gray-700 dark:text-white/90 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-700 dark:text-white/90 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-gray-700 dark:text-white/90 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors">
                SKILLS
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-gray-700 dark:text-white/90 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors">
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-700 dark:text-white/90 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors">
                CONTACT
              </Link>
            </li>
          </ul>

          {/* RIGHT CONTROLS: SUN/MOON & CTA */}
          <div className="flex items-center gap-3">
            {/* THEME TOGGLE BUTTON */}
            <button 
              onClick={() => setIsDarkMode(prev => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-darkHover transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              <Image 
                src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                alt="Theme toggle" 
                className="w-6 h-6 object-contain"
              />
            </button>

            <a 
              href="#contact" 
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-gray-200 text-white text-xs font-semibold transition-all duration-300 shadow-md"
            >
              <span>Let&apos;s Talk</span>
              <Image src={assets.arrow_icon} alt="" className={`w-3 ${isDarkMode ? '' : 'invert'}`} />
            </a>

            {/* MOBILE MENU TOGGLE */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-darkHover transition-colors cursor-pointer"
              aria-label="Open Menu"
            >
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU SLIDE-IN DRAWER */}
        <div 
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 right-0 w-[80%] max-w-xs h-full bg-white dark:bg-darkTheme dark:text-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 border-l border-gray-100 dark:border-white/10 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* MENU HEADER */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    <Sparkles className="w-3 h-3 fill-white" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Navigation</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-darkHover transition-colors cursor-pointer"
                >
                  <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5 h-5" />
                </button>
              </div>

              {/* MOBILE LINKS */}
              <ul className="flex flex-col gap-5 mt-6 text-sm font-semibold">
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="#home" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="#about" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    About
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="#skills" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="#experience" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsMenuOpen(false)} href="#contact" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* MOBILE FOOTER BUTTON */}
            <div className="pt-5 border-t border-slate-100 dark:border-white/10">
              <a 
                onClick={() => setIsMenuOpen(false)} 
                href="#contact" 
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-500/20"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;