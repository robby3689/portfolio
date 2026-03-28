import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-4 rounded-2xl shadow-2xl">
        {/* Home Button Logo */}
        <a href="#" className="text-2xl font-black tracking-tighter text-white hover:opacity-80 transition-opacity">
          SACHIN<span className="text-emerald-500">.DEV</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest">About</a>
          <a href="#projects" className="text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest">Projects</a>
          <a href="https://www.linkedin.com/in/sachin-singh-r-31615432a/" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all uppercase tracking-widest">LinkedIn</a>
          
          <a 
            href="/Sachin_Singh_Resume.pdf" 
            download 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-2.5 rounded-xl font-black text-xs uppercase transition-all transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}