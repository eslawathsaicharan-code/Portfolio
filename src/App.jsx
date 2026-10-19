import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import FocusAreas from './components/FocusAreas';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit relative selection:bg-purple-600/30 selection:text-white">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 origin-left z-50 shadow-glow-sm"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with 3D Character */}
        <Hero />

        {/* Dual Moving Technology Marquee */}
        <TechMarquee />

        {/* About Me Section */}
        <About />

        {/* Skills & Tech Stack Section */}
        <Skills />

        {/* What I Focus On Section */}
        <FocusAreas />

        {/* Featured Projects with Sticky Stacking Cards */}
        <Projects />

        {/* Contact & Connect Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
