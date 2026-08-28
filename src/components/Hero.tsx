import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import {
  ShieldCheck,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ArrowDown,
  Sparkles,
  MapPin,
  Terminal,
} from 'lucide-react';
import { IDENTITY, SOCIALS } from '../config';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
};

function StaggeredLetter({ char, index }: { char: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50, rotateX: -35 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.65,
        delay: 0.2 + index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ display: 'inline-block', willChange: 'transform' }}
      aria-hidden="true"
    >
      {char}
    </motion.span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll parallax transforms
  const opacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.16], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.16], [0, -30]);

  // Mouse tilt for subtle depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 20 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 35;
    const y = (clientY - (top + height / 2)) / 35;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <motion.div style={{ opacity, scale, y, x: dx }}>
        {/* Top Metadata Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.75rem',
          }}
        >
          <div
            className="liquid-glass-card"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.15rem',
              borderRadius: 'var(--border-radius-pill)',
            }}
          >
            <ShieldCheck size={13} style={{ color: 'var(--color-accent-primary)' }} />
            <span
              className="font-mono"
              style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-primary)',
              }}
            >
              {IDENTITY.version}_{IDENTITY.versionLabel}
            </span>
          </div>

          <div
            className="glass-panel"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--border-radius-pill)',
            }}
          >
            <div className="status-dot active" />
            <span
              className="font-mono"
              style={{
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
              }}
            >
              NODE: WEST BENGAL, INDIA
            </span>
          </div>
        </motion.div>

        {/* Massive Editorial Name */}
        <h1
          id="hero-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(3.75rem, 13vw, 13rem)',
            fontWeight: 900,
            lineHeight: 0.82,
            letterSpacing: '-0.045em',
            marginBottom: '1.75rem',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ display: 'block' }} aria-label={IDENTITY.firstName}>
            {IDENTITY.firstName.split('').map((char, i) => (
              <StaggeredLetter key={i} char={char} index={i} />
            ))}
          </span>
          <span
            className="text-gradient-flow"
            style={{ display: 'block' }}
            aria-label={IDENTITY.lastName}
          >
            {IDENTITY.lastName.split('').map((char, i) => (
              <StaggeredLetter
                key={i}
                char={char}
                index={IDENTITY.firstName.length + i}
              />
            ))}
          </span>
        </h1>

        {/* Narrative Tagline & Mission Phrasing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="font-display"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 2.25rem)',
            fontWeight: 300,
            color: 'var(--color-text-secondary)',
            maxWidth: '56rem',
            lineHeight: 1.35,
            marginBottom: '2.5rem',
          }}
        >
          A{' '}
          <span
            style={{
              color: 'var(--color-text-primary)',
              fontWeight: 600,
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              textDecorationColor: 'var(--color-accent-primary)',
              textUnderlineOffset: '0.35em',
              textDecorationThickness: '2px',
            }}
          >
            Student, Builder & Systems Enthusiast
          </span>{' '}
          from India, exploring software systems, intelligent bot automation, and free coding education for all.
        </motion.p>

        {/* CTAs + Verified Social Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          {/* Primary Action */}
          <a href="#projects" className="btn-primary">
            <span>Explore Selected Work</span>
          </a>

          {/* Secondary Action */}
          <a
            href={IDENTITY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            <span>Establish Connection</span>
          </a>

          {/* Quick Social Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginLeft: '0.5rem',
            }}
          >
            {SOCIALS.map((s) => {
              const IconComp = ICON_MAP[s.iconName];
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit official profile on ${s.name}`}
                  className="liquid-glass-card"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--border-radius-md)',
                    color: 'var(--color-text-tertiary)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-accent-primary)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-tertiary)')
                  }
                >
                  {IconComp && <IconComp size={18} />}
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Hero Micro Metadata Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '3.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {IDENTITY.stats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </span>
              <span
                className="font-display"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '0.04em',
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
