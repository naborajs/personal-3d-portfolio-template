import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { IDENTITY, SOCIALS } from '../config';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
};

/**
 * Staggering text reveal animation for the hero name.
 * Each letter animates in with a slight delay for a premium feel.
 */
function AnimatedName({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={className} style={style} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3 + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block' }}
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.18], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.18], [0, -40]);

  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
      }}
    >
      <motion.div style={{ opacity, scale, y }}>
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--border-radius-pill)',
            marginBottom: '2rem',
          }}
          className="glass-panel"
        >
          <ShieldCheck size={14} style={{ color: 'var(--color-accent-cyan)' }} />
          <span
            className="font-mono"
            style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-cyan)',
            }}
          >
            {IDENTITY.version}_{IDENTITY.versionLabel}
          </span>
        </motion.div>

        {/* Name */}
        <h1
          id="hero-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 13rem)',
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem',
          }}
        >
          <AnimatedName text={IDENTITY.firstName} />
          <br />
          <AnimatedName
            text={IDENTITY.lastName}
            className="text-gradient-flow"
          />
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-display"
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 2.5rem)',
            fontWeight: 300,
            color: 'var(--color-text-secondary)',
            maxWidth: '52rem',
            lineHeight: 1.3,
            marginBottom: '3rem',
          }}
        >
          A{' '}
          <span
            style={{
              color: 'var(--color-text-primary)',
              fontWeight: 500,
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              textDecorationColor: 'var(--color-accent-cyan)',
              textUnderlineOffset: '0.4em',
              textDecorationThickness: '2px',
            }}
          >
            Systems Architect
          </span>{' '}
          empowering India with free education and advanced AI logic.
        </motion.p>

        {/* CTA + Social Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <a href={IDENTITY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Establish Connection</span>
          </a>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {SOCIALS.map((s) => {
              const IconComp = ICON_MAP[s.iconName];
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${s.name}`}
                  className="glass-panel"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: 'var(--border-radius-md)',
                    color: 'var(--color-text-tertiary)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-base)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-accent-cyan)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-tertiary)')
                  }
                >
                  {IconComp && <IconComp size={20} />}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
