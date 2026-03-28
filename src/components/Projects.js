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
    url: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-slate-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase underline decoration-emerald-500/50">Developer Portfolio</h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">01 — 03</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="glass group p-10 rounded-[3rem] border border-white/5 hover:border-emerald-500/40 transition-all duration-700">
              <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-6">{p.type || p.tag}</p>
              <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-emerald-400 transition-colors">{p.name}</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10">{p.desc}</p>
              
              {p.url !== "#" ? (
                <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest group-hover:gap-6 transition-all">
                  Launch Site <span className="bg-emerald-500 text-black p-1.5 rounded-lg">→</span>
                </a>
              ) : (
                <span className="text-slate-600 text-xs font-black uppercase italic tracking-widest">Dev in Progress</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}