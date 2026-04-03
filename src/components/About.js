import React from 'react';

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Microservices"] },
    { category: "Database", items: ["MongoDB", "SQL", "Data Modeling", "Query Optimization"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "JWT Auth", "AWS Basics"] }
  ];

  const highlights = [
    { number: "3+", label: "Live Projects" },
    { number: "100%", label: "Clean Code" }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-emerald-500 text-xs font-black uppercase tracking-[0.4em] mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-tight">
            Full Stack Developer with a <span className="text-emerald-500">Passion</span> for Building <br className="hidden md:block" />Great Digital Experiences
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              I'm a Full Stack Web Developer from Toronto, specializing in the MERN Stack. I focus on building robust, 
              high-performance web applications that solve real-world problems.
            </p>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Currently pursuing my Advanced Computer Programming degree at Humber College, I've had the opportunity to work on 
              cutting-edge projects like Highbury Clinic, a comprehensive healthcare portal that serves thousands of users daily.
            </p>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              I'm passionate about writing clean, maintainable code and staying updated with the latest web technologies. 
              Always eager to learn and contribute to impactful projects.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/10">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-emerald-500 mb-2">{item.number}</div>
                  <div className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="glass p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                <h4 className="text-emerald-500 text-xs md:text-sm font-black uppercase tracking-widest mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-2 bg-white/5 rounded-lg text-white text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}