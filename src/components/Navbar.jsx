import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/projects';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Focus', href: '#focus' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'focus', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#0C0C0C] rounded-[11px] flex items-center justify-center font-bold text-sm tracking-wider text-white">
                  EC
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wide text-white group-hover:text-purple-400 transition-colors">
                  CHARAN<span className="text-purple-500">.</span>
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                  Full-Stack Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-[#141416]/90 border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Socials & Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
              >
                <Github size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 transition-opacity shadow-md shadow-purple-900/30"
              >
                <span>Connect</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden bg-[#121214]/95 border border-white/[0.12] rounded-2xl p-5 backdrop-blur-xl shadow-2xl shadow-black/80"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={16} className="text-zinc-600" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-blue-600"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
