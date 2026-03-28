import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; // This is your "Tech"
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 selection:bg-emerald-500/30">
      <Navbar />
      <Hero />     {/* Name & Headline */}
      <About />    {/* Info */}
      <Skills />   {/* Tech Marquee */}
      <Projects /> {/* Projects */}
      <Contact />  {/* Functional Form */}
      <Footer />
    </div>
  );
}
export default App;