import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Youtube,
  Linkedin,
  Instagram,
  Twitter,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { SOCIAL_CHANNELS, type SocialChannel } from '../data/socials';

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <Github size={22} className="text-amber-400" />,
  Youtube: <Youtube size={22} className="text-red-400" />,
  Linkedin: <Linkedin size={22} className="text-amber-500" />,
  Instagram: <Instagram size={22} className="text-orange-400" />,
  Twitter: <Twitter size={22} className="text-yellow-400" />,
  MessageCircle: <MessageCircle size={22} className="text-emerald-400" />,
};

export default function DigitalNetwork() {
  return (
    <section
      id="network"
      aria-labelledby="network-heading"
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
            Connectivity_Registry
          </span>
          <h2
            id="network-heading"
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
            Digital <span className="text-gradient-flow">Network</span>
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
            Verified public endpoints and communication channels across open source, educational platforms, and direct inquiries.
          </p>
        </motion.div>
      </div>

      {/* Channels Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.25rem',
        }}
        className="digital-network-grid"
      >
        {SOCIAL_CHANNELS.map((channel, i) => (
          <motion.a
            key={channel.name}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="liquid-glass-card group"
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all var(--transition-base)',
            }}
          >
            <div>
              {/* Header: Icon + Badge + Arrow */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    padding: '0.65rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                  }}
                >
                  {ICON_MAP[channel.iconName] || <ShieldCheck size={20} />}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="system-badge">{channel.badge}</span>
                  <div
                    style={{
                      color: 'var(--color-text-tertiary)',
                      transition: 'transform var(--transition-fast), color var(--transition-fast)',
                    }}
                    className="group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Channel Name & Handle */}
              <h3
                className="font-display"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.2rem',
                }}
              >
                {channel.name}
              </h3>
              <p
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  color: 'var(--color-accent-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {channel.handle}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.825rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.55,
                }}
              >
                {channel.description}
              </p>
            </div>

            {/* Purpose Footer */}
            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--glass-l1-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                PURPOSE: {channel.purpose}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .digital-network-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1100px) {
          .digital-network-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
