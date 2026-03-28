import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <h2 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-center opacity-80">
          Engineering Identity
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side: Bold Statement */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight italic tracking-tighter">
            Building the <span className="text-emerald-500">Future</span> of <br/>
            <span className="text-slate-500 underline decoration-emerald-500/20">Scalable Systems</span>.
          </h3>

          {/* Right Side: Detailed Info */}
          <div className="space-y-6 text-slate-400 text-sm md:text-base leading-relaxed">
            <p>
              I am a **Full Stack Web Developer** specializing in the MERN Stack. My engineering approach focuses on 
              creating robust, high-performance web applications that solve complex data challenges.
            </p>
            <p>
              Having transitioned into advanced software development through **Humber College**, I am dedicated 
              to writing clean, scalable code and implementing modern UI/UX principles, as demonstrated in my 
              comprehensive Capstone project, **Highbury Clinic**.
            </p>

            {/* Tech Tags - Sleek & Scaled */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["React.js", "Node.js", "MongoDB", "Express", "REST APIs"].map((skill) => (
                <span key={skill} className="glass px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}