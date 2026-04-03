import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-20 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center z-10 w-full">
        
        {/* Left Side: Name & Title */}
        <div className={`text-center lg:text-left order-2 lg:order-1 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block lg:inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            💻 Available Now
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-4 md:mb-6 italic text-white uppercase">
            <span className="block">SACHIN</span>
            <span className="text-emerald-500 text-5xl sm:text-7xl md:text-8xl lg:text-9xl block mt-2">SINGH</span>
          </h1>
          
          <p className="text-slate-400 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.3em] md:tracking-[0.6em] mb-8 md:mb-10 leading-relaxed">
            Full Stack Web Developer | MERN Specialist
          </p>
          
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Building robust, scalable web applications with modern technologies. Specialized in React, Node.js, and MongoDB.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 flex-wrap">
            <a href="#projects" className="px-8 md:px-10 py-3 md:py-4 bg-emerald-500 text-slate-950 font-black rounded-xl md:rounded-2xl text-xs md:text-[10px] uppercase tracking-widest hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg shadow-emerald-500/20">
              View My Work
            </a>
            <a href="#contact" className="px-8 md:px-10 py-3 md:py-4 border-2 border-emerald-500 text-emerald-400 font-black rounded-xl md:rounded-2xl text-xs md:text-[10px] uppercase tracking-widest hover:bg-emerald-500/10 transition-all">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className={`relative flex justify-center items-center order-1 lg:order-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Animated Glow backgrounds */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-emerald-500/30 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-emerald-500/20 rounded-full blur-[60px] animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative glass p-3 md:p-4 rounded-full border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-500">
            <img 
              src="/profile-ai.png" 
              alt="Sachin Singh" 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer border-4 border-[#020617] hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}