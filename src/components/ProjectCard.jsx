import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Code, Layers, Info } from 'lucide-react';
import { ProjectMockupViewer } from './ProjectMockups';

export default function ProjectCard({ project, index, totalCards }) {
  const isDemoAvailable = Boolean(project.links.liveDemo);

  return (
    <div
      className="sticky top-24 sm:top-28 w-full mb-12 sm:mb-16"
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.1] shadow-2xl relative overflow-hidden backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/30 group"
      >
        {/* Subtle Ambient Background Flare */}
        <div
          className={`absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Project Details & Meta */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Card Index & Category Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white/90">
                    {project.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    {project.category}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-zinc-500">
                  {index + 1} of {totalCards}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed mb-4">
                "{project.description}"
              </p>

              {/* Detailed Summary */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {project.detailedSummary}
              </p>

              {/* Technology Tags */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                  Stack & Tooling
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.05] border border-white/[0.08] text-zinc-200 group-hover:border-purple-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions / Buttons */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
              {/* View Code Button */}
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all duration-200 shadow-sm"
                >
                  <Github size={15} />
                  <span>View Code</span>
                  <ArrowUpRight size={13} className="text-zinc-400" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-zinc-500 bg-white/[0.02] border border-white/[0.04]">
                  Repository Config Pending
                </span>
              )}

              {/* Live Demo Button (only if active) */}
              {isDemoAvailable ? (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity shadow-md shadow-purple-900/30"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  <span>Local / Repo Build</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Custom High-Fidelity Domain Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-black/40 p-1.5 transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectMockupViewer type={project.type} />
            </div>

            {/* Metrics Footer Bar */}
            <div className="grid grid-cols-3 gap-2 mt-3 text-center">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <span className="text-[10px] font-mono text-zinc-400 block truncate">
                    {metric.label}
                  </span>
                  <span className="text-xs font-semibold text-zinc-200 block truncate">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
