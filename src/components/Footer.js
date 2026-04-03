import React from 'react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  
  const socials = [
    { icon: 'LinkedIn', url: 'https://www.linkedin.com/in/sachin-singh-r-31615432a/', label: 'LinkedIn' },
    { icon: 'GitHub', url: 'https://github.com', label: 'GitHub' },
    { icon: 'Email', url: 'mailto:sachinsingh@example.com', label: 'Email' },
  ];
  
  return (
    <footer className="border-t border-white/10 bg-gradient-to-br from-slate-950 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <h2 className="text-xl md:text-2xl font-black tracking-tighter text-white">
                SACHIN<span className="text-emerald-500">.DEV</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Full Stack Developer crafting elegant digital solutions.
            </p>
            <p className="text-slate-500 text-xs">© {currentYear} All rights reserved.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Connect</h3>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Call to Action */}
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3">Let's Work Together</h3>
            <p className="text-slate-400 text-sm mb-4">Have a project in mind?</p>
            <a href="#contact" className="inline-block px-4 py-2 bg-emerald-500 text-slate-950 font-black rounded-lg text-xs uppercase hover:bg-emerald-400 transition-all w-full text-center">
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Text */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-500 text-xs">
              Designed & built by Sachin Singh
            </p>
            <p className="text-slate-500 text-xs">
              Made with ❤️ from Toronto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}