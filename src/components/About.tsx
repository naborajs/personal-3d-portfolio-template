import React from 'react';
import { motion } from 'framer-motion';
import { IDENTITY } from '../config';
import { ShieldCheck, Sparkles, Terminal, BookOpen, Layers, Cpu } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
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
      {/* Editorial Story Column */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '42rem' }}
      >
        <span className="section-label" style={{ marginBottom: '1.25rem', display: 'flex' }}>
          Personal_Identity_&_Mission
        </span>

        <h2
          id="about-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
          }}
        >
          Who is
          <br />
          Naboraj Sarkar?
        </h2>

        {/* Narrative */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            fontSize: '1.025rem',
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          <p>
            Operating from West Bengal, India, I am a student, builder, and developer passionate about software systems, intelligent automation, and open-access education. Through{' '}
            <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
              NS CODEX
            </strong>
            , I document my evolving technical journey while engineering practical tools and frameworks.
          </p>

          <p>
            My technical foundation was forged under the{' '}
            <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
              ICSE board curriculum
            </strong>
            , developing disciplined object-oriented thinking and algorithmic logic in Java. Since 2021, I have expanded into event-driven web backends (Node.js, Redis), conversational bot architectures for Telegram and WhatsApp using OpenAI pipelines, and interactive 3D interfaces.
          </p>

          <p>
            A core conviction guides my work:{' '}
            <strong className="text-gradient-flow font-display" style={{ fontWeight: 700 }}>
              Knowledge should be accessible to every curious mind
            </strong>
            . I am committed to breaking down complex engineering concepts into free, open tutorials and code roadmaps for students across India and beyond.
          </p>
        </div>

        {/* Guiding Philosophy Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginTop: '2.25rem',
          }}
          className="philosophy-grid"
        >
          {IDENTITY.philosophy.map((item) => (
            <div
              key={item.title}
              className="glass-panel"
              style={{
                padding: '1.15rem',
                borderRadius: 'var(--border-radius-md)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    color: 'var(--color-accent-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  // {item.title}
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-text-tertiary)',
                  lineHeight: 1.5,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Identity Emblem Showcase Column */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{ position: 'relative' }}
      >
        {/* Main Logo Card */}
        <div
          className="liquid-glass-card"
          style={{
            aspectRatio: '1',
            borderRadius: 'var(--border-radius-xl)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            position: 'relative',
          }}
        >
          {/* Ambient inner glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background:
                'radial-gradient(circle at 35% 35%, rgba(255, 107, 44, 0.08) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />

          <motion.img
            src={IDENTITY.logo}
            alt={`${IDENTITY.name} – NS Codex Authority Emblem`}
            whileHover={{ scale: 1.06, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            style={{
              width: '65%',
              height: '65%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 0 45px rgba(255, 107, 44, 0.2))',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: '1.5rem',
              textAlign: 'center',
            }}
          >
            <p
              className="font-display"
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              NABORAJ SARKAR
            </p>
            <p
              className="font-mono"
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'var(--color-accent-secondary)',
                marginTop: '0.2rem',
                textTransform: 'uppercase',
              }}
            >
              AUTHORITY NODE {IDENTITY.version}
            </p>
          </div>
        </div>

        {/* Floating Status Pill */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="liquid-glass-card"
          style={{
            position: 'absolute',
            bottom: '-1rem',
            right: '-0.5rem',
            padding: '0.75rem 1.35rem',
            borderRadius: 'var(--border-radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div className="status-dot active" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              NS_CODEX_NODE
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.5rem',
                color: 'var(--color-accent-primary)',
                letterSpacing: '0.1em',
              }}
            >
              Free Education & Systems
            </span>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 5rem;
          }
        }
        @media (max-width: 600px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
