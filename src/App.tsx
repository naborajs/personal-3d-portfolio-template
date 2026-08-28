import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Background from './components/Background';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';
import About from './components/About';
import NsCodex from './components/NsCodex';
import Projects from './components/Projects';
import TechMatrix from './components/TechMatrix';
import Protocols from './components/Protocols';
import Documentation from './components/Documentation';
import NowNode from './components/NowNode';
import Timeline from './components/Timeline';
import DigitalNetwork from './components/DigitalNetwork';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ProjectModal from './components/ProjectModal';
import DocModal from './components/DocModal';

import type { Project } from './data/projects';
import type { DocArticle } from './data/documentation';

/**
 * NS CODEX – Main Personal Digital System Orchestrator
 *
 * Coordinates the ambient neural constellation background, hardware-accelerated
 * scroll progress bar, floating smoked-glass navigation, interactive command palette,
 * modal inspectors, and the complete sequence of content sections.
 */
export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<DocArticle | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Ambient Neural Particle Canvas */}
      <Background />

      {/* Hardware-Accelerated Scroll Progress Indicator */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background:
            'linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary), var(--color-accent-tertiary))',
          transformOrigin: '0%',
          scaleX,
          zIndex: 200,
        }}
      />

      {/* Floating Smoked Glass Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Global Interactive Command Palette (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onSelectDoc={(doc) => setSelectedDoc(doc)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <DocModal
        article={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />

      {/* Main Semantic Content Flow */}
      <main
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--section-gap)',
          paddingTop: '6.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        <Hero />
        <About />
        <NsCodex />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <TechMatrix />
        <Protocols onSelectProject={(project) => setSelectedProject(project)} />
        <Documentation onSelectDoc={(doc) => setSelectedDoc(doc)} />
        <NowNode />
        <Timeline />
        <DigitalNetwork />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
