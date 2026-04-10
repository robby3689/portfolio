import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.user_name.trim()) {
      setMessage({ type: 'error', text: 'Please enter your name.' });
      return false;
    }
    if (!formData.user_email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setMessage({ type: 'error', text: 'Message must be at least 10 characters long.' });
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!validateForm()) return;

    setIsSending(true);

    emailjs.init("-1bjX14fTqbwMZXLS");

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
      to_email: 'sachin.ca73@gmail.com'
    };

    console.log('Sending email with params:', templateParams);

    emailjs.send(
      'service_z07gbre',
      'template_jaljhjf',
      templateParams,
      '-1bjX14fTqbwMZXLS'
    )
    .then((result) => {
        console.log('SUCCESS!', result);
        setMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ user_name: '', user_email: '', message: '' });
        form.current.reset();
        setIsSending(false);
        setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    }, (error) => {
        console.error('FAILED...', error);
        console.log('Error details:', JSON.stringify(error, null, 2));
        setMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again later.' });
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-emerald-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">Let's Create Something Amazing</h2>
        <p className="text-slate-500 mb-4 text-sm md:text-base">Whether you have a project in mind or just want to chat, I'm always open to new opportunities and collaborations.</p>
        <p className="text-slate-500 mb-12 uppercase tracking-[0.3em] text-[10px] font-bold">Available for May 2026 roles</p>

        {/* Message Alert */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-xl border ${
            message.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          } text-sm font-semibold animate-pulse`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="grid gap-5 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            <input 
              type="text" 
              name="user_name" 
              placeholder="YOUR NAME" 
              value={formData.user_name}
              onChange={handleChange}
              required 
              className="glass p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500 outline-none transition-all text-xs md:text-sm font-bold"
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="YOUR EMAIL" 
              value={formData.user_email}
              onChange={handleChange}
              required 
              className="glass p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500 outline-none transition-all text-xs md:text-sm font-bold"
            />
          </div>
          <textarea 
            name="message" 
            rows="6" 
            placeholder="YOUR MESSAGE (min 10 characters)" 
            value={formData.message}
            onChange={handleChange}
            required 
            className="glass p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500 outline-none transition-all text-xs md:text-sm font-bold resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={isSending}
            className="bg-emerald-500 text-slate-950 font-black py-4 md:py-5 rounded-2xl uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-105 transform"
          >
            {isSending ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-8">
          <div className="glass p-6 rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm mb-3">Contact</p>
            <a href="mailto:sachin.ca73@gmail.com" className="text-white font-bold hover:text-emerald-400 transition-colors">Email</a>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm mb-3">Social</p>
            <a href="https://www.linkedin.com/in/sachin-singh-31615432a/" target="_blank" rel="noreferrer" className="text-white font-bold hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm mb-3">Availability</p>
            <p className="text-white font-bold">Available Now</p>
          </div>
        </div>
      </div>
    </section>
  );
}