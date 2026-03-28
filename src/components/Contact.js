import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'Service_gyrq6mn',   // Paste Service ID here
      'template_jaljhjf',  // Paste Template ID here
      form.current,
      '-1bjX14fTqbwMZXLS'    // Paste Public Key here
    )
    .then((result) => {
        alert("Message sent! I'll get back to you soon.");
        setIsSending(false);
        form.current.reset();
    }, (error) => {
        alert("Oops! Something went wrong. Please try again.");
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-4 uppercase italic">Let's Talk</h2>
        <p className="text-slate-400 mb-12 uppercase tracking-widest text-xs">Available for May 2026 roles</p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input 
            type="text" name="user_name" placeholder="Full Name" required 
            className="glass p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none transition-all"
          />
          <input 
            type="email" name="user_email" placeholder="Email Address" required 
            className="glass p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none transition-all"
          />
          <textarea 
            name="message" rows="5" placeholder="Your Message" required 
            className="glass p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none transition-all"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={isSending}
            className="bg-emerald-500 text-slate-950 font-black py-4 rounded-xl uppercase tracking-widest hover:bg-emerald-400 transition-all disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}