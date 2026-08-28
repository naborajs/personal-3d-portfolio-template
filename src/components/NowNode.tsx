import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Compass, Terminal, Cpu, BookOpen, Layers, MapPin } from 'lucide-react';
import { NOW_DATA } from '../data/now';
import { IDENTITY } from '../data/identity';

export default function NowNode() {
  const [istTime, setIstTime] = useState<string>('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const focusCards = [
    {
      label: 'BUILDING',
      badge: NOW_DATA.currentFocus.building.badge,
      title: NOW_DATA.currentFocus.building.title,
      description: NOW_DATA.currentFocus.building.description,
      icon: <Terminal size={18} className="text-amber-400" />,
      color: 'var(--color-accent-primary)',
    },
    {
      label: 'EXPLORING',
      badge: NOW_DATA.currentFocus.exploring.badge,
      title: NOW_DATA.currentFocus.exploring.title,
      description: NOW_DATA.currentFocus.exploring.description,
      icon: <Cpu size={18} className="text-orange-400" />,
      color: 'var(--color-accent-secondary)',
    },
    {
      label: 'LEARNING',
      badge: NOW_DATA.currentFocus.learning.badge,
      title: NOW_DATA.currentFocus.learning.title,
      description: NOW_DATA.currentFocus.learning.description,
      icon: <Layers size={18} className="text-yellow-400" />,
      color: 'var(--color-accent-warm-yellow)',
    },
    {
      label: 'DOCUMENTING',
      badge: NOW_DATA.currentFocus.documenting.badge,
      title: NOW_DATA.currentFocus.documenting.title,
      description: NOW_DATA.currentFocus.documenting.description,
      icon: <BookOpen size={18} className="text-red-400" />,
      color: 'var(--color-accent-tertiary)',
    },
  ];

  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Section Header */}
      <div
        className="now-header"
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
            Live_State_&_Diagnostics
          </span>
          <h2
            id="now-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Current <span className="text-gradient-flow">Node</span>
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
            Real-time status broadcast reflecting active engineering priorities, research frontiers, and system metrics.
          </p>
        </motion.div>

        {/* Live IST Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="liquid-glass-card"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.65rem 1.35rem',
            borderRadius: 'var(--border-radius-md)',
            alignSelf: 'flex-start',
          }}
        >
          <div className="status-dot active" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {NOW_DATA.status} • {istTime || 'IST LIVE'}
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.525rem',
                color: 'var(--color-text-tertiary)',
                letterSpacing: '0.1em',
              }}
            >
              {NOW_DATA.location} (UTC+5:30)
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4 Pillars Grid (Building, Exploring, Learning, Documenting) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.25rem',
          marginBottom: '2rem',
        }}
        className="now-pillars-grid"
      >
        {focusCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass-card"
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Pillar Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      padding: '0.45rem',
                      borderRadius: 'var(--border-radius-xs)',
                      background: 'rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      letterSpacing: '0.15em',
                      color: card.color,
                      textTransform: 'uppercase',
                    }}
                  >
                    // {card.label}
                  </span>
                </div>
                <span className="system-badge">{card.badge}</span>
              </div>

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  lineHeight: 1.25,
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Diagnostics / Metric Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel now-metrics-bar"
        style={{
          borderRadius: 'var(--border-radius-lg)',
          padding: '1.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}
      >
        {NOW_DATA.metrics.map((m, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
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
              {m.label}
            </span>
            <span
              className="font-display"
              style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: '0.05em',
              }}
            >
              {m.value}
            </span>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (min-width: 768px) {
          .now-header {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end;
          }
          .now-pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .now-metrics-bar {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
