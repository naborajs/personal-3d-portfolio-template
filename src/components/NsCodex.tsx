import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, BookOpen, Sparkles, Cpu, Layers, GitBranch, ArrowUpRight } from 'lucide-react';
import { IDENTITY } from '../data/identity';

interface Subsystem {
  key: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  anchor: string;
}

const SUBSYSTEMS: Subsystem[] = [
  {
    key: '01',
    name: 'PROJECTS',
    tagline: 'Functional Systems & Deployments',
    description: 'Production applications, intelligent bots, and tools solving real-world challenges.',
    icon: <Terminal size={20} className="text-amber-400" />,
    anchor: '#projects',
  },
  {
    key: '02',
    name: 'SYSTEMS',
    tagline: 'Backend Logic & Infrastructure',
    description: 'Event-driven architectures, distributed databases, message queues, and edge security.',
    icon: <Database size={20} className="text-orange-400" />,
    anchor: '#protocols',
  },
  {
    key: '03',
    name: 'KNOWLEDGE',
    tagline: 'Open Documentation & Guides',
    description: 'Technical notes, architectural patterns, and free education roadmaps for learners.',
    icon: <BookOpen size={20} className="text-yellow-400" />,
    anchor: '#documentation',
  },
  {
    key: '04',
    name: 'EXPERIMENTS',
    tagline: 'AI Pipelines & 3D Shaders',
    description: 'WebGL spatial math, autonomous agent swarms, and exploratory software prototypes.',
    icon: <Sparkles size={20} className="text-red-400" />,
    anchor: '#capabilities',
  },
  {
    key: '05',
    name: 'IDEAS',
    tagline: 'Future Direction & Visions',
    description: 'Concepts for decentralized tools, privacy-preserving networks, and community empowerment.',
    icon: <GitBranch size={20} className="text-amber-500" />,
    anchor: '#timeline',
  },
];

export default function NsCodex() {
  return (
    <section
      id="nscodex"
      aria-labelledby="nscodex-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ marginBottom: '1rem', display: 'flex' }}>
            System_Architecture
          </span>
          <h2
            id="nscodex-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: '1rem',
            }}
          >
            NS <span className="text-gradient-flow">CODEX</span>
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '44rem',
              lineHeight: 1.5,
            }}
          >
            A personal digital operating system—unifying software execution, continuous learning, and open knowledge sharing.
          </p>
        </motion.div>
      </div>

      {/* Conceptual Breakdown Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        }}
        className="nscodex-container-grid"
      >
        {/* Left: Definition Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="liquid-glass-card"
          style={{
            borderRadius: 'var(--border-radius-xl)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <div className="status-dot orange" />
              <span
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-accent-primary)',
                  textTransform: 'uppercase',
                }}
              >
                // CONCEPT_DECONSTRUCTION
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '0.02em',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--color-accent-primary)' }}>NS</span> = PERSONAL IDENTITY
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Represents Naboraj Sarkar—the human builder behind every line of code, design iteration, and engineering decision.
                </p>
              </div>

              <div
                style={{
                  height: '1px',
                  background: 'var(--glass-l1-border)',
                }}
              />

              <div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'var(--color-text-primary)',
                    letterSpacing: '0.02em',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--color-accent-secondary)' }}>CODEX</span> = DIGITAL SYSTEM & ARCHIVE
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  An evolving repository of documented codebases, system architectures, educational guides, and technical experiments organized for long-term growth.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--glass-l1-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.6rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.15em',
              }}
            >
              VERSION: {IDENTITY.version}
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.6rem',
                color: 'var(--color-accent-primary)',
                letterSpacing: '0.15em',
              }}
            >
              AUTHORITY_NODE
            </span>
          </div>
        </motion.div>

        {/* Right: Subsystems Architecture Stack */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {SUBSYSTEMS.map((sub, i) => (
            <motion.a
              key={sub.name}
              href={sub.anchor}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="liquid-glass-card group"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--border-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all var(--transition-base)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: 0 }}>
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    flexShrink: 0,
                  }}
                >
                  {sub.icon}
                </div>

                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        color: 'var(--color-accent-primary)',
                      }}
                    >
                      {sub.key}
                    </span>
                    <h4
                      className="font-display"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        color: '#ffffff',
                      }}
                    >
                      {sub.name}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.4,
                      whiteSpace: 'normal',
                    }}
                  >
                    {sub.description}
                  </p>
                </div>
              </div>

              <div
                style={{
                  color: 'var(--color-text-tertiary)',
                  transition: 'transform var(--transition-fast), color var(--transition-fast)',
                  flexShrink: 0,
                }}
                className="group-hover:text-white group-hover:translate-x-1"
              >
                <ArrowUpRight size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .nscodex-container-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .nscodex-container-grid {
            grid-template-columns: 1fr 1.25fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
