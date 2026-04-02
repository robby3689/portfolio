import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.init("-1bjX14fTqbwMZXLS");

    emailjs.sendForm(
      'Service_gyrq6mn',   // Service ID
      'template_jaljhjf',  // Template ID
      form.current,
      '-1bjX14fTqbwMZXLS'    // Public Key
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        alert("Message sent! I'll get back to you soon.");
        setIsSending(false);
        form.current.reset();
    }, (error) => {
        console.log('FAILED...', error.text);
        alert("Oops! Something went wrong. Check the console for details.");
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter">Let's Talk</h2>
        <p className="text-slate-500 mb-12 uppercase tracking-[0.3em] text-[10px] font-bold">Available for May 2026 roles</p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-4 max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" name="user_name" placeholder="NAME" required 
              className="glass p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none transition-all text-xs font-bold"
            />
            <input 
              type="email" name="user_email" placeholder="EMAIL" required 
              className="glass p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none transition-all text-xs font-bold"
            />
          </div>
          <textarea 
            name="message" rows="5" placeholder="YOUR MESSAGE" required 
            className="glass p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 outline-none transition-all text-xs font-bold"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={isSending}
            className="bg-emerald-500 text-slate-950 font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] hover:bg-emerald-400 transition-all disabled:opacity-50 shadow-xl shadow-emerald-500/10"
          >
            {isSending ? "Processing..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}