import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Database,
  Compass,
  ArrowUpRight,
  Github,
  Linkedin,
  Cpu,
  BrainCircuit,
  GraduationCap
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/projects';

export default function About() {
  const highlightCards = [
    {
      icon: Terminal,
      title: 'Backend & APIs',
      desc: 'Developing asynchronous routes and clean data models using Python and FastAPI.',
      color: '#38BDF8',
    },
    {
      icon: Code2,
      title: 'Frontend Interfaces',
      desc: 'Creating responsive, modern UI components with React, JavaScript, and Tailwind.',
      color: '#A855F7',
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      desc: 'Organizing relational data and writing structured SQL queries in PostgreSQL.',
      color: '#818CF8',
    },
    {
      icon: BrainCircuit,
      title: 'AI Exploration',
      desc: 'Investigating retrieval-augmented generation (RAG) and intelligent assistant workflows.',
      color: '#34D399',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Identity & Passion
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gradient-silver"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Statement & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Primary Quote Card */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden border border-white/[0.1] shadow-2xl">
              <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-2 mb-6 text-purple-400 font-mono text-xs uppercase tracking-wider">
                <GraduationCap size={16} />
                <span>Student Developer Profile</span>
              </div>

              {/* Exact required introduction */}
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed tracking-normal">
                "I'm <span className="text-purple-400 font-bold">E. Charan</span>, a developer interested in building practical software solutions. I work with frontend technologies, backend APIs, databases, and Python-based applications. I enjoy learning new technologies, solving problems, and turning ideas into working projects."
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Currently focused on Full-Stack & Python</span>
                </div>

                {/* Social Connect links */}
                <div className="flex items-center gap-2">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white transition-all"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight size={12} className="text-zinc-500" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-blue-600/20 border border-white/[0.1] hover:border-blue-500/40 text-xs font-mono text-zinc-300 hover:text-blue-300 transition-all"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={12} className="text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Student Principles Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl border border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                  Philosophy
                </span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">Build to Understand</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Deepening software engineering principles by writing working code, architecting clean schemas, and testing real endpoints.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-400">
                  Continuous Learning
                </span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">Expanding Horizons</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Regularly exploring new libraries, systems concepts in C/Java, and emerging architectures in AI-assisted workflows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars / Focus highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">
              What Drives My Work
            </span>

            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-white/[0.08] flex items-start gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${card.color}15`,
                      border: `1px solid ${card.color}30`,
                      color: card.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
