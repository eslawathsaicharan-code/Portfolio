import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderGit2, Send, Terminal, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import Hero3DCharacter from './Hero3DCharacter';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-indigo-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Student Developer &bull; Ready for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Oversized Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[1.05] mb-4 text-gradient-silver"
            >
              HI, I'M <br />
              <span className="text-gradient-accent">CHARAN.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#BBCCD7] tracking-normal mb-5 flex items-center gap-3"
            >
              <span>Full-Stack Developer & Problem Solver</span>
            </motion.h2>

            {/* Short Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8"
            >
              I build web applications and explore backend systems, databases, and AI-powered solutions.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA: View My Projects */}
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:shadow-glow-md transition-all duration-300 active:scale-95"
              >
                <FolderGit2 size={18} className="text-purple-200 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
              </button>

              {/* Secondary CTA: Contact Me */}
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm uppercase tracking-wider text-zinc-200 bg-[#141416]/90 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.06] hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
              >
                <Send size={16} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Tech Highlights Pills */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 pt-8 border-t border-white/[0.08] max-w-xl"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Frontend</span>
                <span className="text-sm font-semibold text-zinc-200 mt-1">React & JS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Backend</span>
                <span className="text-sm font-semibold text-zinc-200 mt-1">FastAPI & Python</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Data & AI</span>
                <span className="text-sm font-semibold text-zinc-200 mt-1">PostgreSQL & RAG</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated 3D Developer Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative framing element */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-purple-500/20 via-transparent to-blue-500/20 blur-xl opacity-70" />
              
              {/* 3D Character Canvas */}
              <div className="relative glass-card rounded-3xl p-2 border border-white/[0.12] overflow-hidden shadow-2xl">
                <Hero3DCharacter />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden sm:flex flex-col items-center justify-center mt-12 cursor-pointer"
          onClick={() => scrollTo('marquee')}
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Explore Tech Stack
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-7 h-11 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
