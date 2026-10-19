import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/skills';
import {
  FileCode2,
  Palette,
  Code2,
  Atom,
  Terminal,
  Zap,
  Database,
  Cpu,
  Coffee,
  Boxes,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const iconComponents = {
  FileCode2,
  Palette,
  Code2,
  Atom,
  Terminal,
  Zap,
  Database,
  Cpu,
  Coffee,
  Boxes,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0C0C0C] bg-dots-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Competencies & Toolset
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gradient-silver"
            >
              MY TECH STACK
            </motion.h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md">
            Technologies and frameworks I have learned, practiced, and applied across full-stack and systems projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.08]">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-purple-600 text-white shadow-glow-sm'
                : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
            }`}
          >
            All Skills
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-glow-sm'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-4 border-b border-white/[0.06] gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-purple-500 rounded-full" />
                  <span>{category.title}</span>
                </h3>
                <span className="text-xs text-zinc-400 font-mono">
                  {category.description}
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => {
                  const Icon = iconComponents[skill.iconName] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group p-4 rounded-2xl bg-[#141416]/80 hover:bg-white/[0.05] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300 shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              border: `1px solid ${skill.color}30`,
                              color: skill.color,
                            }}
                          >
                            <Icon size={20} />
                          </div>

                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.03]">
                            Active
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        <span>Hands-on implementation</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
