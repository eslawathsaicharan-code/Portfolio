import React from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/skills';
import {
  Code,
  FileCode2,
  Terminal,
  Database,
  Cpu,
  Layers,
  Zap,
  Boxes,
  Atom,
  Coffee,
  Palette
} from 'lucide-react';

const iconMap = {
  HTML: FileCode2,
  CSS: Palette,
  JavaScript: Code,
  React: Atom,
  FastAPI: Zap,
  Python: Terminal,
  PostgreSQL: Database,
  Docker: Boxes,
  C: Cpu,
  Java: Coffee,
};

function TechCard({ item }) {
  const IconComponent = iconMap[item.name] || Code;

  return (
    <div className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#141416]/90 border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 shadow-lg group cursor-default select-none">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${item.color}15`,
          border: `1px solid ${item.color}35`,
          color: item.color,
        }}
      >
        <IconComponent size={20} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base text-zinc-200 tracking-wide group-hover:text-white transition-colors">
          {item.name}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  // Duplicate arrays to ensure seamless infinite looping without gaps
  const row1Repeated = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2Repeated = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  return (
    <section id="marquee" className="py-12 relative overflow-hidden bg-[#0C0C0C]">
      {/* Left and right fade gradient masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#0C0C0C] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#0C0C0C] to-transparent" />

      {/* Decorative center subtle label */}
      <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Core Technologies & Workflow
          </span>
        </div>
        <span className="text-[11px] font-mono text-zinc-500 hidden sm:block">
          Hover to pause marquee
        </span>
      </div>

      <div className="marquee-container flex flex-col gap-4">
        {/* Row 1: Left to right movement */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex gap-4">
            {row1Repeated.map((item, index) => (
              <TechCard key={`row1-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to left movement */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex gap-4">
            {row2Repeated.map((item, index) => (
              <TechCard key={`row2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
