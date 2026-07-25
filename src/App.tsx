import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Protocols from './components/Protocols';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * NS CODEX – Main Application Layout
 *
 * Orchestrates the ambient background, scroll progress indicator,
 * navigation, and all content sections in semantic order.
 */
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Ambient Background Canvas */}
      <Background />

      {/* Scroll Progress Indicator */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background:
            'linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-mint), var(--color-accent-purple))',
          transformOrigin: '0%',
          scaleX,
          zIndex: 200,
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--section-gap)',
          paddingTop: '8rem',
          paddingBottom: '4rem',
        }}
      >
        <Hero />
        <About />
        <Protocols />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
