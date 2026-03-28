import React from 'react';

const projects = [
  {
    name: "Highbury Clinic",
    tag: "Full Stack MERN",
    desc: "A comprehensive healthcare portal featuring role-based dashboards, JWT-secured authentication, and dynamic appointment scheduling.",
    url: "https://highburyclinic.xyz"
  },
  {
    name: "Graphicawork.xyz",
    tag: "React / Node.js",
    desc: "A high-traffic freelance marketplace optimized for performance, featuring custom API integrations and responsive UI/UX design.",
    url: "https://graphicawork.xyz"
  },
  {
    name: "Codeqube.io",
    tag: "Backend Systems",
    desc: "A sophisticated developer platform built to handle complex data relationships, course tracking, and secure digital asset delivery.",
    url: "https://codeqube.io" // Link updated!
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase underline decoration-emerald-500/50">Selected Work</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">01 — 03</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="glass group p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/40 transition-all duration-700">
              <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4">{p.tag}</p>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{p.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{p.desc}</p>
              
              <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                Launch Site <span className="bg-emerald-500 text-black p-1 rounded-md">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}