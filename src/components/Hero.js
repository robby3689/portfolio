import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background Glows for atmosphere */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
        
        {/* Left Side: Name & Title */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-6 italic text-white uppercase">
            SACHIN<br />
            <span className="text-emerald-500 underline decoration-white/10 text-6xl md:text-9xl">SINGH</span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-[0.6em] mb-10">
            Full Stack Web Developer
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#projects" className="px-10 py-4 bg-emerald-500 text-slate-950 font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side: The AI Avatar */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Animated Glow behind the image */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse"></div>
          
          <div className="relative glass p-3 rounded-full border border-white/10 shadow-2xl">
            <img 
              src="/profile-ai.png" 
              alt="Sachin AI Avatar" 
              className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer border-4 border-[#020617]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}