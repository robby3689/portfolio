import React from 'react';

const projects = [
  {
    name: "Highbury Clinic",
    tag: "Full Stack MERN",
    desc: "A comprehensive healthcare portal featuring role-based dashboards, JWT-secured authentication, appointment scheduling, and patient management system. Serves 500K+ monthly users with real-time updates.",
    features: ["Role-Based Access", "JWT Authentication", "Real-time Updates", "Responsive UI"],
    url: "https://highburyclinic.xyz"
  },
  {
    name: "Graphicawork.xyz",
    tag: "React / Node.js",
    desc: "A high-traffic freelance marketplace optimized for performance, featuring custom API integrations, advanced search filters, and responsive UI/UX design for seamless user experience.",
    features: ["Freelance Marketplace", "Advanced Search", "Payment Integration", "Real-time Notifications"],
    url: "https://graphicawork.xyz"
  },
  {
    name: "Codeqube.io",
    tag: "Full Stack",
    desc: "A developer-centric platform for scalable solutions and asset management. Built with modern web technologies, offering efficient collaboration tools and resource management.",
    features: ["Asset Management", "Developer Tools", "Scalable Architecture", "Cloud Integration"],
    url: "https://codeqube.io" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-4 mb-16 md:mb-20">
          <div>
            <p className="text-emerald-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Featured Work</p>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase">
              Selected Projects
            </h2>
          </div>
          <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-[0.5em]">01 — 03</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="glass group relative overflow-hidden p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Tag */}
                <div className="inline-block mb-4">
                  <p className="text-emerald-500 text-[10px] md:text-xs font-black uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                    {p.tag}
                  </p>
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {p.name}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  {p.desc}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8 pb-6 md:pb-8 border-b border-white/10">
                  {p.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-[10px] md:text-xs font-bold text-emerald-400/70 bg-emerald-500/5 px-2 md:px-3 py-1 rounded-md border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <a 
                  href={p.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 text-white font-black text-[10px] md:text-xs uppercase tracking-widest group-hover:gap-5 transition-all hover:text-emerald-400"
                >
                  <span>Visit Project</span> 
                  <span className="bg-emerald-500 text-black p-1 md:p-1.5 rounded-md group-hover:bg-emerald-400 transition-colors">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-slate-400 mb-6">Want to see more of my work or discuss a project?</p>
          <a 
            href="#contact" 
            className="inline-block px-8 md:px-10 py-4 bg-emerald-500 text-slate-950 font-black rounded-xl md:rounded-2xl text-xs md:text-sm uppercase tracking-widest hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}