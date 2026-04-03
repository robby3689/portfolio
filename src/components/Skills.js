import React from 'react';

export default function Skills() {
  const tech = ["React", "Node.js", "MongoDB", "Express", "Tailwind", "JavaScript", "REST APIs", "JWT", "Git", "Docker"];
  return (
    <div className="py-12 md:py-16 bg-white/5 overflow-hidden border-y border-white/5">
      {/* Section Header */}
      <div className="px-4 sm:px-6 mb-12 text-center max-w-6xl mx-auto">
        <p className="text-emerald-500 text-xs font-black uppercase tracking-[0.4em] mb-3">Tech Stack</p>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Technologies I Work With</h3>
        <p className="text-slate-400 text-sm md:text-base">Modern tools and frameworks for building scalable solutions</p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-8 md:gap-12">
          {[...tech, ...tech, ...tech].map((item, i) => (
            <span key={i} className="text-sm md:text-base lg:text-lg font-bold uppercase text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-4 px-2">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-all">
                {item}
              </span>
              <span className="text-emerald-500">•</span>
            </span>
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#020617] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#020617] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}