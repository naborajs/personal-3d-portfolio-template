import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  GraduationCap,
  Command,
  Bitcoin,
  Activity,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import { TIMELINE_DATA, type TimelineEntry } from '../data/timeline';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Terminal,
  GraduationCap,
  Command,
  Bitcoin,
  Activity,
  Rocket,
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="section-label"
            style={{
              justifyContent: 'center',
              display: 'flex',
              marginBottom: '1rem',
            }}
          >
            Temporal_Logs_&_Evolution
          </span>
          <h2
            id="timeline-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: '1rem',
            }}
          >
            Timeline <span className="text-gradient-flow">Evolution</span>
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '40rem',
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            A chronological progression tracking foundational beginnings, technical milestones, and future directions.
          </p>
        </motion.div>
      </div>

      {/* Timeline Grid */}
      <div
        className="timeline-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
          position: 'relative',
        }}
      >
        {/* Continuous Connecting Line (Desktop) */}
        <div
          className="timeline-connect-line"
          aria-hidden="true"
          style={{
            display: 'none',
            position: 'absolute',
            top: '40%',
            left: '2rem',
            right: '2rem',
            height: '1px',
            background:
              'linear-gradient(to right, transparent, var(--color-accent-primary), var(--color-accent-secondary), transparent)',
            opacity: 0.25,
            zIndex: 0,
          }}
        />

        {TIMELINE_DATA.map((entry, i) => {
          const IconComp = ICON_MAP[entry.iconName];
          const isCurrent = entry.status === 'CURRENT';
          const isFuture = entry.status === 'DIRECTION';

          return (
            <motion.article
              key={entry.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="liquid-glass-card timeline-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--border-radius-lg)',
                position: 'relative',
                zIndex: 1,
                cursor: 'default',
                border: isCurrent
                  ? '1px solid rgba(255, 107, 44, 0.35)'
                  : isFuture
                  ? '1px solid rgba(255, 170, 0, 0.25)'
                  : '1px solid var(--glass-l2-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Year + Badge + Icon Row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        fontStyle: 'italic',
                        color: isCurrent
                          ? 'var(--color-accent-primary)'
                          : isFuture
                          ? 'var(--color-accent-secondary)'
                          : '#ffffff',
                        display: 'block',
                        lineHeight: 1,
                      }}
                    >
                      {entry.year}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        color: 'var(--color-text-muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {entry.tag}
                    </span>
                  </div>

                  <div
                    className="timeline-icon"
                    style={{
                      padding: '0.65rem',
                      borderRadius: 'var(--border-radius-sm)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: isCurrent
                        ? 'var(--color-accent-primary)'
                        : isFuture
                        ? 'var(--color-accent-secondary)'
                        : 'var(--color-text-tertiary)',
                      transition: 'all 0.35s ease',
                    }}
                  >
                    {IconComp && <IconComp size={18} />}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    marginBottom: '0.6rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {entry.title}
                </h3>

                {/* Text Description */}
                <p
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {entry.text}
                </p>
              </div>

              {/* Milestones list */}
              {entry.milestones && (
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--glass-l1-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  {entry.milestones.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div
                        style={{
                          width: '0.3rem',
                          height: '0.3rem',
                          borderRadius: '50%',
                          background: isCurrent ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
                        }}
                      />
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.6rem',
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1100px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
