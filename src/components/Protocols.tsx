import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {
  Activity,
  Cpu,
  Database,
  Eye,
  Globe,
  Smartphone,
  Zap,
} from 'lucide-react';
import { PROTOCOLS, CATEGORIES, type Protocol, type Category } from '../config';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Database,
  Cpu,
  Eye,
  Zap,
  Globe,
  Smartphone,
};

// ─── Protocol Card ──────────────────────────────────────────
function ProtocolCard({ item }: { item: Protocol }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [4, -4]);
  const rotateY = useTransform(mouseX, [-150, 150], [-4, 4]);

  const IconComp = ICON_MAP[item.iconName];

  return (
    <motion.article
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - (rect.left + rect.width / 2));
        mouseY.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="glass-panel protocol-card"
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        padding: '2rem',
        borderRadius: 'var(--border-radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="protocol-card-glow"
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 30% 20%, ${item.iconColor}11 0%, transparent 60%)`,
          opacity: 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Header: icon + id */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            padding: '0.75rem',
            borderRadius: 'var(--border-radius-sm)',
            background: `color-mix(in srgb, ${item.iconColor} 8%, transparent)`,
            color: item.iconColor,
            transition: 'background 0.4s ease',
          }}
          className="protocol-icon-wrap"
        >
          {IconComp && <IconComp size={22} />}
        </div>
        <span
          className="font-mono"
          style={{
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          {item.id}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-display"
        style={{
          fontSize: '1.2rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          marginBottom: '0.75rem',
          color: 'var(--color-text-primary)',
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.875rem',
          fontWeight: 300,
          lineHeight: 1.7,
          color: 'var(--color-text-secondary)',
          flex: 1,
          marginBottom: '1.5rem',
        }}
      >
        {item.description}
      </p>

      {/* Footer: purpose + tags */}
      <div
        style={{
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={11} style={{ color: 'var(--color-accent-cyan)', flexShrink: 0 }} />
          <p
            className="font-display"
            style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              color: 'var(--color-text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {item.purpose}
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: '0.55rem',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--border-radius-sm)',
                background: 'rgba(255, 255, 255, 0.04)',
                color: 'var(--color-text-tertiary)',
                letterSpacing: '0.05em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card hover styles */}
      <style>{`
        .protocol-card:hover {
          border-color: var(--glass-border-hover) !important;
          box-shadow: 0 8px 40px rgba(0, 229, 255, 0.06), inset 0 1px 0 rgba(255,255,255,0.04);
        }
        .protocol-card:hover .protocol-card-glow {
          opacity: 1 !important;
        }
        .protocol-card:hover .protocol-icon-wrap {
          background: color-mix(in srgb, var(--color-accent-cyan) 15%, transparent) !important;
        }
      `}</style>
    </motion.article>
  );
}

// ─── Protocols Section ──────────────────────────────────────
export default function Protocols() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? PROTOCOLS
        : PROTOCOLS.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section
      id="protocols"
      aria-labelledby="protocols-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Header Row */}
      <div
        className="protocols-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ marginBottom: '1rem', display: 'flex' }}>
            Capability_Registry
          </span>
          <h2
            id="protocols-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Protocols
          </h2>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-panel"
          style={{
            display: 'inline-flex',
            gap: '0.25rem',
            padding: '0.3rem',
            borderRadius: 'var(--border-radius-md)',
            alignSelf: 'flex-start',
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className="font-display"
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--border-radius-sm)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                transition: 'all var(--transition-base)',
                background:
                  activeFilter === cat
                    ? 'var(--color-text-primary)'
                    : 'transparent',
                color:
                  activeFilter === cat
                    ? 'var(--color-bg-deep)'
                    : 'var(--color-text-tertiary)',
                boxShadow:
                  activeFilter === cat
                    ? '0 4px 20px rgba(255, 255, 255, 0.08)'
                    : 'none',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== cat) {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== cat) {
                  e.currentTarget.style.color = 'var(--color-text-tertiary)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div
        className="protocols-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.25rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProtocolCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .protocols-header {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end;
          }
          .protocols-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .protocols-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
