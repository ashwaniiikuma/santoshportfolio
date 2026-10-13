"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar = () => {
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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 py-4">
      <nav 
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
          isScroll 
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-indigo-500/5 border border-indigo-100" 
            : "bg-white/70 backdrop-blur-sm border border-slate-200/60"
        }`}
      >
        {/* LOGO WITH GRADIENT & ICON */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition duration-300">
            <Sparkles className="w-3 h-3 fill-white" />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900">
            Santosh<span className="text-indigo-600">.</span>
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600 tracking-wide">
          <li>
            <Link href="#home" className="hover:text-indigo-600 transition-colors">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-indigo-600 transition-colors">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-indigo-600 transition-colors">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-indigo-600 transition-colors">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-indigo-600 transition-colors">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* RIGHT CTA BUTTON */}
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-indigo-500/20"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-full text-slate-800 hover:bg-slate-100 transition"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
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
          className={`absolute top-0 right-0 w-[80%] max-w-xs h-full bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* MENU HEADER */}
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <Sparkles className="w-3 h-3 fill-white" />
                </div>
                <span className="font-bold text-slate-900 text-sm">Navigation</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <ul className="flex flex-col gap-5 mt-6 text-sm font-semibold text-slate-700">
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#home" className="hover:text-indigo-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#about" className="hover:text-indigo-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#skills" className="hover:text-indigo-600 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#experience" className="hover:text-indigo-600 transition">
                  Experience
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMenuOpen(false)} href="#projects" className="hover:text-indigo-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* MOBILE FOOTER BUTTON */}
          <div className="pt-5 border-t border-slate-100">
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
  );
};

export default Navbar;