import React from 'react';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Focus', href: '#focus' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#08080A] border-t border-white/[0.08] pt-14 pb-12 overflow-hidden text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b border-white/[0.06] gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-wide">
              E. Charan
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-0.5">
              Full-Stack Developer &amp; Problem Solver
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
            >
              <Github size={15} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] hover:border-blue-500/40 transition-all"
            >
              <Linkedin size={15} />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group ml-2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-white transition-all"
            >
              <span>Top</span>
              <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-3">
          <p>
            &copy; {currentYear} E. Charan. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Designed with React, Vite &amp; Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}
