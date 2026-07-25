import React from 'react';
import { motion } from 'framer-motion';
import { IDENTITY, ABOUT_TAGS } from '../config';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem',
        alignItems: 'center',
        scrollMarginTop: '6rem',
      }}
      className="about-grid"
    >
      {/* Text Column */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '38rem' }}
      >
        <span className="section-label" style={{ marginBottom: '1.5rem', display: 'flex' }}>
          The_NS_CODEX_Mission
        </span>

        <h2
          id="about-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          Who is
          <br />
          Naboraj Sarkar?
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            fontSize: '1.05rem',
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          <p>
            Operating as a multi-disciplinary architect within{' '}
            <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
              NS CODEX
            </strong>
            , my core mission is to bridge the digital divide. I believe that{' '}
            <strong
              className="text-gradient-flow font-display"
              style={{ fontWeight: 700, textTransform: 'uppercase' }}
            >
              Coding is the Future
            </strong>
            , and my primary target is providing{' '}
            <em style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
              Free Education
            </em>{' '}
            to everyone to ensure they can navigate the automated landscape of
            tomorrow properly.
          </p>
          <p>
            Educated under the{' '}
            <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
              ICSE board
            </strong>
            , I have synthesized traditional academic rigour with modern
            technical mastery. From engineering intelligent bots and AI agents to
            navigating the volatility of{' '}
            <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
              Crypto Investment
            </strong>
            , my approach is defined by precision and global perspective.
          </p>
          <p>
            Based in{' '}
            <strong style={{ color: 'var(--color-accent-primary)', fontWeight: 600 }}>
              India
            </strong>
            , I am dedicated to building systems that aren't just powerful, but
            also educational. Through NS CODEX, I deploy tools that solve
            business problems while teaching the next generation of engineers
            the "proper way" to build.
          </p>
        </div>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--glass-border)',
          }}
        >
          {ABOUT_TAGS.map((tag, i) => (
            <React.Fragment key={tag.label}>
              {i > 0 && (
                <div
                  className="tag-divider"
                  style={{
                    width: '1px',
                    height: '2.5rem',
                    background: 'var(--glass-border)',
                  }}
                />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-primary)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tag.label}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    color: 'var(--color-text-tertiary)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tag.sublabel}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Logo Card Column – Liquid Glass Showcase */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{ position: 'relative' }}
      >
        {/* Main Logo Glass Card */}
        <div
          className="liquid-glass-card"
          style={{
            aspectRatio: '1',
            borderRadius: 'var(--border-radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            position: 'relative',
          }}
        >
          {/* Inner warm glow gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background:
                'radial-gradient(circle at 30% 30%, rgba(255, 107, 44, 0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
          {/* Bottom amber refraction */}
          <div
            style={{
              position: 'absolute',
              bottom: '-20%',
              right: '-10%',
              width: '60%',
              height: '60%',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255, 170, 0, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <motion.img
            src={IDENTITY.logo}
            alt={`${IDENTITY.name} – NS Codex Logo`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{
              width: '70%',
              height: '70%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 0 40px rgba(255, 107, 44, 0.15))',
            }}
          />
        </div>

        {/* Floating Status Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="liquid-glass-card"
          style={{
            position: 'absolute',
            bottom: '-1rem',
            right: '-0.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--border-radius-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              width: '0.5rem',
              height: '0.5rem',
              borderRadius: '50%',
              background: 'var(--color-accent-secondary)',
              boxShadow: '0 0 8px rgba(255, 170, 0, 0.5)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span
            className="font-mono"
            style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
            }}
          >
            NS_CODEX_Educator
          </span>
        </motion.div>
      </motion.div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
          }
        }
        .tag-divider {
          display: none;
        }
        @media (min-width: 640px) {
          .tag-divider {
            display: block;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
