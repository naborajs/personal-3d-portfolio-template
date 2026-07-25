import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  GraduationCap,
  Command,
  Bitcoin,
} from 'lucide-react';
import { TIMELINE } from '../config';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Terminal,
  GraduationCap,
  Command,
  Bitcoin,
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Heading */}
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
            Temporal_Logs
          </span>
          <h2
            id="timeline-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
            }}
          >
            Timeline
          </h2>
        </motion.div>
      </div>

      {/* Timeline Grid */}
      <div
        className="timeline-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.25rem',
          position: 'relative',
        }}
      >
        {/* Connecting line (desktop only) */}
        <div
          className="timeline-connect-line"
          aria-hidden="true"
          style={{
            display: 'none',
            position: 'absolute',
            top: '50%',
            left: '1rem',
            right: '1rem',
            height: '1px',
            background:
              'linear-gradient(to right, transparent, var(--color-accent-cyan), var(--color-accent-purple), transparent)',
            opacity: 0.15,
            zIndex: 0,
          }}
        />

        {TIMELINE.map((entry, i) => {
          const IconComp = ICON_MAP[entry.iconName];
          return (
            <motion.article
              key={entry.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel timeline-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--border-radius-lg)',
                position: 'relative',
                zIndex: 1,
                cursor: 'default',
              }}
            >
              {/* Year + Icon Row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: 'var(--color-accent-cyan)',
                    transition: 'transform var(--transition-base)',
                  }}
                >
                  {entry.year}
                </span>
                <div
                  className="timeline-icon"
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: 'var(--color-text-tertiary)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {IconComp && <IconComp size={20} />}
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
                  marginBottom: '0.75rem',
                  color: 'var(--color-text-primary)',
                  transition: 'letter-spacing 0.4s ease',
                }}
              >
                {entry.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'var(--color-text-tertiary)',
                  transition: 'color 0.4s ease',
                }}
              >
                {entry.text}
              </p>

              {/* Bottom-left accent corner */}
              <div
                className="timeline-corner"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-0.4rem',
                  left: '-0.4rem',
                  width: '1.2rem',
                  height: '1.2rem',
                  borderLeft: '2px solid var(--color-accent-cyan)',
                  borderBottom: '2px solid var(--color-accent-cyan)',
                  borderBottomLeftRadius: 'var(--border-radius-sm)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                }}
              />
            </motion.article>
          );
        })}
      </div>

      {/* Responsive & hover styles */}
      <style>{`
        @media (min-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .timeline-connect-line {
            display: block !important;
          }
        }
        .timeline-card:hover {
          background: rgba(0, 229, 255, 0.03) !important;
          border-color: var(--glass-border-hover) !important;
        }
        .timeline-card:hover .timeline-icon {
          color: var(--color-accent-cyan) !important;
          transform: scale(1.08);
        }
        .timeline-card:hover .timeline-corner {
          opacity: 0.4 !important;
        }
      `}</style>
    </section>
  );
}
