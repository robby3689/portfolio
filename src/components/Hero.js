import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 text-center pt-20">
      {/* Background Glow - Made subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-emerald-500/5 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 italic text-white uppercase">
          SACHIN<br />
          <span className="text-emerald-500">SINGH</span>
        </h1>
        <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-[0.6em] opacity-70">
          Full Stack Web Developer
        </p>
      </div>
    </section>
  );
}