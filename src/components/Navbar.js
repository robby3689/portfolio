import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-xl">
        {/* Logo */}
        <a href="/#" className="text-lg md:text-xl font-black tracking-tighter text-white hover:text-emerald-500 transition-colors">
          SACHIN<span className="text-emerald-500">.DEV</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#about" className="text-xs lg:text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest">About</a>
          <a href="#projects" className="text-xs lg:text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest">Projects</a>
          <a href="https://www.linkedin.com/in/sachin-singh-31615432a/" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest">LinkedIn</a>
          
          <a href="#contact" className="bg-emerald-500 text-slate-950 px-5 lg:px-6 py-2 md:py-2.5 rounded-xl font-black text-xs lg:text-sm uppercase hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20">
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-emerald-400 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 space-y-4 animate-in">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest px-4 py-2">
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest px-4 py-2">
            Projects
          </a>
          <a href="https://www.linkedin.com/in/sachin-singh-31615432a/" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest px-4 py-2">
            LinkedIn
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg font-black text-sm uppercase hover:bg-emerald-400 transition-all">
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
}