import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Copy, Check, MapPin, Send } from 'lucide-react';
import { IDENTITY } from '../data/identity';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(IDENTITY.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ scrollMarginTop: '6rem', padding: '2rem 0' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass-card"
        style={{
          borderRadius: 'var(--border-radius-xl)',
          padding: 'clamp(2.5rem, 6vw, 5.5rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 107, 44, 0.25)',
        }}
      >
        {/* Decorative ambient gradients */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 0%, rgba(255, 107, 44, 0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ justifyContent: 'center', display: 'flex', marginBottom: '1.25rem' }}>
              Direct_Transmission
            </span>

            <h2
              id="contact-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(2.75rem, 8vw, 6rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                marginBottom: '1.25rem',
              }}
            >
              Direct <span className="text-gradient-flow">Inquiry</span>
            </h2>

            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                maxWidth: '38rem',
                margin: '0 auto 2.5rem',
                lineHeight: 1.55,
              }}
            >
              Open for educational consulting, intelligent bot deployments, open-source initiatives, and technical collaboration.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="contact-buttons"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <a
              href={`mailto:${IDENTITY.email}`}
              className="btn-primary"
              style={{ width: '100%', maxWidth: '19rem' }}
            >
              <Mail size={16} />
              <span>Email Sync</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-glass"
              style={{ width: '100%', maxWidth: '19rem' }}
            >
              {copied ? (
                <>
                  <Check size={16} style={{ color: 'var(--color-status-active)' }} />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={IDENTITY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              style={{ width: '100%', maxWidth: '19rem' }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Business</span>
            </a>
          </motion.div>

          {/* Business Info Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--glass-l1-border)',
              fontSize: '0.625rem',
              color: 'var(--color-text-tertiary)',
            }}
          >
            <span className="font-mono">BUSINESS: {IDENTITY.phone}</span>
            <span className="font-mono" style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span className="font-mono">{IDENTITY.email}</span>
            <span className="font-mono" style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span className="font-mono">COORDINATES: {IDENTITY.coordinates}</span>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 640px) {
          .contact-buttons {
            flex-direction: row !important;
          }
          .contact-buttons a,
          .contact-buttons button {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
