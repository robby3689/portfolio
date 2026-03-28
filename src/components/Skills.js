import React from 'react';

export default function Skills() {
  const tech = ["React", "Node.js", "MongoDB", "Express", "Tailwind", "JavaScript", "REST APIs", "JWT", "Git"];
  return (
    <div className="py-8 bg-white/5 overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tech, ...tech].map((item, i) => (
            <span key={i} className="mx-8 text-sm md:text-lg font-bold uppercase text-slate-600 hover:text-emerald-500 transition-colors"> 
               {item} <span className="text-emerald-500 ml-6">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}