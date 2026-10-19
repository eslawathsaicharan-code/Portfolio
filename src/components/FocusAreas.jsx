import React from 'react';
import { motion } from 'framer-motion';
import { FOCUS_AREAS } from '../data/projects';
import { Layout, Server, Sparkles, Check, ArrowRight } from 'lucide-react';

const icons = [Layout, Server, Sparkles];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-24 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Technical Directions
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gradient-silver"
          >
            WHAT I FOCUS ON
          </motion.h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl">
            Key domains of computer science and full-stack software development where I channel my learning, problem-solving, and project building.
          </p>
        </div>

        {/* 3 Large Numbered Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FOCUS_AREAS.map((area, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={area.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-white/[0.08] flex flex-col justify-between group relative overflow-hidden shadow-xl"
              >
                {/* Decorative subtle gradient splash on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Big Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl sm:text-6xl font-black tracking-tighter text-zinc-700/60 group-hover:text-purple-400/40 transition-colors font-mono">
                      {area.num}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title & Exact Specification Summary */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-base text-zinc-300 font-medium leading-relaxed mb-4">
                    "{area.summary}"
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {area.details}
                  </p>
                </div>

                {/* Technologies List */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-2.5">
                    Core Focus Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
