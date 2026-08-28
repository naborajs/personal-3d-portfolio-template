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
  ArrowRight,
} from 'lucide-react';
import { PROTOCOLS, PROTOCOL_CATEGORIES, type Protocol, type ProtocolCategory } from '../data/protocols';
import { PROJECTS, type Project } from '../data/projects';

interface ProtocolsProps {
  onSelectProject?: (project: Project) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Database,
  Cpu,
  Eye,
  Zap,
  Globe,
  Smartphone,
};

function ProtocolCard({
  item,
  onSelectProject,
}: {
  item: Protocol;
  onSelectProject?: (project: Project) => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [4, -4]);
  const rotateY = useTransform(mouseX, [-150, 150], [-4, 4]);

  const IconComp = ICON_MAP[item.iconName];
  const relatedProject = item.relatedProjectId
    ? PROJECTS.find((p) => p.id === item.relatedProjectId)
    : null;

  return (
    <motion.article
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - (rect.left + rect.width / 2));
        mouseY.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="liquid-glass-card"
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        padding: '2rem',
        borderRadius: 'var(--border-radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'default',
      }}
    >
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
            background: `${item.iconColor}14`,
            color: item.iconColor,
            transition: 'background 0.4s ease',
          }}
        >
          {IconComp && <IconComp size={22} />}
        </div>
        <span
          className="font-mono"
          style={{
            fontSize: '0.6rem',
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
          fontSize: '1.25rem',
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

      {/* Footer: purpose + tags + linked project */}
      <div
        style={{
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--glass-l1-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={12} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
          <p
            className="font-display"
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              color: 'var(--color-text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {item.purpose}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: '0.55rem',
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--border-radius-xs)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                color: 'var(--color-text-tertiary)',
                letterSpacing: '0.05em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {relatedProject && onSelectProject && (
          <button
            onClick={() => onSelectProject(relatedProject)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--color-accent-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              paddingTop: '0.25rem',
              textAlign: 'left',
            }}
          >
            <span>Linked System: {relatedProject.title}</span>
            <ArrowRight size={12} />
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function Protocols({ onSelectProject }: ProtocolsProps) {
  const [activeFilter, setActiveFilter] = useState<ProtocolCategory>('All');

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
          marginBottom: '3.5rem',
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
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Protocols <span className="text-gradient-flow">Registry</span>
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '44rem',
              lineHeight: 1.5,
              marginTop: '0.75rem',
            }}
          >
            Engineered architectural modules governing systems, intelligent bots, spatial interfaces, and security hardening.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="liquid-glass-card"
          style={{
            display: 'inline-flex',
            gap: '0.25rem',
            padding: '0.3rem',
            borderRadius: 'var(--border-radius-md)',
            alignSelf: 'flex-start',
          }}
        >
          {PROTOCOL_CATEGORIES.map((cat) => (
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
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all var(--transition-fast)',
                background:
                  activeFilter === cat
                    ? 'var(--color-accent-primary)'
                    : 'transparent',
                color: activeFilter === cat ? '#fff' : 'var(--color-text-tertiary)',
                boxShadow:
                  activeFilter === cat
                    ? '0 4px 16px rgba(255, 107, 44, 0.3)'
                    : 'none',
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
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProtocolCard item={item} onSelectProject={onSelectProject} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

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
        @media (min-width: 1100px) {
          .protocols-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
