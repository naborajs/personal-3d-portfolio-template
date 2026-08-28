import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Eye, Layers, Sparkles } from 'lucide-react';
import { TECH_GROUPS } from '../data/technologies';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} className="text-amber-400" />,
  Cpu: <Cpu size={20} className="text-orange-400" />,
  Database: <Database size={20} className="text-amber-500" />,
  Eye: <Eye size={20} className="text-red-400" />,
  Layers: <Layers size={20} className="text-yellow-400" />,
};

export default function TechMatrix() {
  return (
    <section
      id="capabilities"
      aria-labelledby="techmatrix-heading"
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
            Technical_Matrix
          </span>
          <h2
            id="techmatrix-heading"
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
            Capability <span className="text-gradient-flow">Matrix</span>
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
            Verified engineering technologies, frameworks, and architecture tools grouped by domain and active development status.
          </p>
        </motion.div>
      </div>

      {/* Grid of Tech Groups */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
        }}
        className="tech-matrix-grid"
      >
        {TECH_GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass-card"
            style={{
              padding: '2rem',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Group Title Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    padding: '0.65rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    flexShrink: 0,
                  }}
                >
                  {ICON_MAP[group.iconName] || <Sparkles size={20} />}
                </div>
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {group.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '0.75rem',
                  marginTop: '1.5rem',
                }}
              >
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass-panel"
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--border-radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <span
                        className="font-display"
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: 'var(--color-text-primary)',
                          display: 'block',
                        }}
                      >
                        {item.name}
                      </span>
                      {item.note && (
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-text-tertiary)',
                            display: 'block',
                          }}
                        >
                          {item.note}
                        </span>
                      )}
                    </div>

                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        flexShrink: 0,
                        background:
                          item.status === 'PRIMARY FOCUS'
                            ? 'rgba(255, 107, 44, 0.15)'
                            : item.status === 'ACTIVE'
                            ? 'rgba(255, 170, 0, 0.12)'
                            : 'rgba(255, 255, 255, 0.05)',
                        color:
                          item.status === 'PRIMARY FOCUS'
                            ? 'var(--color-accent-primary)'
                            : item.status === 'ACTIVE'
                            ? 'var(--color-accent-secondary)'
                            : 'var(--color-text-tertiary)',
                        border:
                          item.status === 'PRIMARY FOCUS'
                            ? '1px solid rgba(255, 107, 44, 0.3)'
                            : '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .tech-matrix-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .tech-matrix-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1200px) {
          .tech-matrix-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
