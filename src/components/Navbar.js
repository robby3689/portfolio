import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl shadow-xl">
        {/* Home Button Logo */}
        <a href="/" className="text-xl font-black tracking-tighter text-white hover:text-emerald-500 transition-colors">
          SACHIN<span className="text-emerald-500">.DEV</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-[10px] font-bold text-slate-400 hover:text-emerald-400 transition-all uppercase tracking-widest">About</a>
          <a href="#projects" className="text-[10px] font-bold text-slate-400 hover:text-emerald-400 transition-all uppercase tracking-widest">Projects</a>
          <a href="https://www.linkedin.com/in/sachin-singh-r-31615432a/" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-emerald-400 transition-all uppercase tracking-widest">LinkedIn</a>
          
          <a href="/Sachin_Singh_Resume.pdf" download className="bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg font-black text-[10px] uppercase hover:bg-emerald-400 transition-all">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}