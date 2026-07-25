import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { IDENTITY } from '../config';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ scrollMarginTop: '6rem', padding: '4rem 0' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel-strong"
        style={{
          borderRadius: 'var(--border-radius-xl)',
          padding: 'clamp(2.5rem, 5vw, 6rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative gradient overlays */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(0, 229, 255, 0.04) 0%, transparent 40%, rgba(124, 58, 237, 0.04) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <h2
              id="contact-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                marginBottom: '1.5rem',
              }}
            >
              Direct
              <br />
              <span style={{ color: 'var(--color-accent-cyan)' }}>Inquiry</span>
            </h2>

            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                maxWidth: '36rem',
                margin: '0 auto 2.5rem',
                lineHeight: 1.6,
              }}
            >
              Available for educational consulting, AI agent deployment, and
              investment synergy.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="contact-buttons"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <a
              href={`mailto:${IDENTITY.email}`}
              className="btn-primary"
              style={{ width: '100%', maxWidth: '20rem' }}
            >
              <Mail size={16} style={{ position: 'relative', zIndex: 1 }} />
              <span>Email Sync</span>
            </a>
            <a
              href={IDENTITY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              style={{ width: '100%', maxWidth: '20rem' }}
            >
              <MessageCircle size={16} />
              WhatsApp Business
            </a>
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="font-mono"
            style={{
              fontSize: '0.6rem',
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.15em',
            }}
          >
            BUSINESS: {IDENTITY.phone} | {IDENTITY.email}
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 640px) {
          .contact-buttons {
            flex-direction: row !important;
            justify-content: center;
          }
          .contact-buttons a {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
