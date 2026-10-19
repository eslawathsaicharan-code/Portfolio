import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA, SOCIAL_LINKS } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Github, FolderGit2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0C0C0C]">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Selected Work & Applications
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gradient-silver"
            >
              FEATURED PROJECTS
            </motion.h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-zinc-400 text-sm max-w-sm text-left md:text-right">
              Crafted with clean architectures, relational data modeling, and practical problem-solving logic.
            </p>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Explore full GitHub repository list</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Sticky Stacking Projects List */}
        <div className="relative pb-12">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>

        {/* Bottom GitHub CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-white/[0.08] text-center flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
            <FolderGit2 size={24} />
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
            More Code & Experiments on GitHub
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mb-6 leading-relaxed">
            From algorithmic puzzles in C to API microservices in FastAPI, all my active codebases are tracked in public repositories.
          </p>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-xs uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all hover:scale-105"
          >
            <Github size={16} />
            <span>Visit @eslawathsaicharan-code</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
