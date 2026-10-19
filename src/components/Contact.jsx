import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/projects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'copied'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const copyMessageSummary = () => {
    const summary = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(summary);
    setStatus('copied');
    setTimeout(() => setStatus('success'), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Get in Touch
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gradient-silver"
          >
            LET'S CONNECT
          </motion.h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mt-4 leading-relaxed">
            "Have an opportunity, a project idea, or want to connect? Feel free to reach out."
          </p>
        </div>

        {/* Content Grid: Social Channels & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white mb-1">
              Direct Channels
            </h3>
            <p className="text-sm text-zinc-400 mb-2 leading-relaxed">
              I am actively seeking software engineering internships, entry-level developer roles, and collaborative projects.
            </p>

            {/* LinkedIn Card */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/[0.08] flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    /in/eslawath-charan-66ab08383
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/[0.08] flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    @eslawathsaicharan-code
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* Availability Note */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] mt-2">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response Time</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Reachable directly on LinkedIn messages and GitHub notifications. Feel free to connect or drop a message anytime!
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/[0.1] relative shadow-2xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquare size={18} className="text-purple-400" />
                    <span>Send a Message</span>
                  </h3>
                  <span className="text-xs text-zinc-400">
                    Validated client-side message composer
                  </span>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                  Direct Outreach
                </span>
              </div>

              {status === 'success' || status === 'copied' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Prepared!</h4>
                  <p className="text-sm text-zinc-300 max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message inquiry has been structured and validated.
                  </p>

                  <div className="w-full bg-[#0A0A0E] p-4 rounded-xl border border-white/[0.08] text-left text-xs font-mono text-zinc-300 mb-6">
                    <div className="text-purple-400 mb-1 font-bold">Inquiry Summary:</div>
                    <div className="text-zinc-400">From: {formData.name} &lt;{formData.email}&gt;</div>
                    <div className="text-zinc-400">Subject: {formData.subject || 'General Discussion'}</div>
                    <div className="mt-2 text-zinc-200 border-t border-white/[0.06] pt-2 whitespace-pre-wrap">
                      {formData.message}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={copyMessageSummary}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all"
                    >
                      <Copy size={14} />
                      <span>{status === 'copied' ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
                    </button>

                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity"
                    >
                      <Linkedin size={14} />
                      <span>Message on LinkedIn</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-mono text-zinc-500 hover:text-zinc-300 mt-6 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0F12] border border-white/[0.08] focus:border-purple-500/60 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0F12] border border-white/[0.08] focus:border-purple-500/60 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F12] border border-white/[0.08] focus:border-purple-500/60 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note, inquiry, or question here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F12] border border-white/[0.08] focus:border-purple-500/60 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Gradient Contact Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:shadow-glow-md transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{status === 'sending' ? 'Validating...' : 'Submit Message'}</span>
                    <Send size={16} className="text-purple-200 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
