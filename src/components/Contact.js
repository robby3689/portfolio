import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Replace these strings with your actual EmailJS IDs
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          alert("Message sent successfully! I'll get back to you soon.");
      }, (error) => {
          alert("Failed to send. Please email me directly at sachin.ca73@gmail.com");
      });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] border border-white/10">
        <h2 className="text-5xl font-black italic tracking-tighter text-white mb-10 text-center uppercase">
          Contact <span className="text-emerald-500">Me</span>
        </h2>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="user_name" placeholder="YOUR NAME" required 
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-emerald-500 outline-none transition-all font-bold uppercase text-xs tracking-widest" />
            <input type="email" name="user_email" placeholder="YOUR EMAIL" required 
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-emerald-500 outline-none transition-all font-bold uppercase text-xs tracking-widest" />
          </div>
          <textarea name="message" placeholder="YOUR MESSAGE" rows="5" required 
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-emerald-500 outline-none transition-all font-bold uppercase text-xs tracking-widest" />
          
          <button type="submit" className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl transition-all shadow-lg shadow-emerald-500/20 uppercase tracking-widest text-sm">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}