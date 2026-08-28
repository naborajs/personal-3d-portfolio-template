import React from 'react';
import { MapPin, ShieldCheck, Heart } from 'lucide-react';
import { IDENTITY, NAV_LINKS, SOCIALS } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        paddingTop: '5rem',
        borderTop: '1px solid var(--glass-l1-border)',
      }}
    >
      {/* Main Footer Grid */}
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        {/* Brand Column */}
        <div style={{ maxWidth: '24rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            <img
              src={IDENTITY.logo}
              alt="NS Codex Authority Emblem"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                objectFit: 'contain',
                borderRadius: '50%',
                opacity: 0.85,
                filter: 'drop-shadow(0 0 10px rgba(255, 107, 44, 0.3))',
              }}
            />
            <div>
              <p
                className="font-display"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                }}
              >
                {IDENTITY.name.toUpperCase()}
              </p>
              <p
                className="font-mono"
                style={{
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'var(--color-accent-primary)',
                  marginTop: '0.15rem',
                }}
              >
                NS CODEX Authority Node {IDENTITY.version}
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.85rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              marginBottom: '1.25rem',
            }}
          >
            Student, builder, and developer from West Bengal, India. Engineering software systems, intelligent automation pipelines, and sharing free programming education worldwide.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <MapPin size={13} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              {IDENTITY.coordinates} (West Bengal, India)
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div
          className="footer-links-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
          }}
        >
          {/* Navigation Links */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              System Nodes
            </h3>
            <nav
              aria-label="Footer navigation"
              style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono"
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-tertiary)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-tertiary)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Network Links */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              Network
            </h3>
            <nav
              aria-label="Footer social links"
              style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-tertiary)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-tertiary)')}
                >
                  {s.name}
                </a>
              ))}
              <a
                href={IDENTITY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent-primary)')}
              >
                WhatsApp Sync
              </a>
            </nav>
          </div>

          {/* Status Column */}
          <div className="footer-status-col" style={{ gridColumn: 'span 2' }}>
            <h3
              className="font-display"
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              Node Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Operational', color: 'var(--color-status-active)' },
                { label: 'Free Education Live', color: 'var(--color-accent-primary)' },
                { label: 'ICSE Foundation Node', color: 'var(--color-accent-secondary)' },
              ].map((status) => (
                <div
                  key={status.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <div
                    style={{
                      width: '0.45rem',
                      height: '0.45rem',
                      borderRadius: '50%',
                      background: status.color,
                      boxShadow: `0 0 8px ${status.color}80`,
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {status.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '1.75rem',
          paddingBottom: '2rem',
          borderTop: '1px solid var(--glass-l1-border)',
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          © {currentYear} NABORAJ SARKAR
        </span>

        <span
          className="font-mono footer-mission-text"
          style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            display: 'none',
          }}
        >
          FREE_EDUCATION_MISSION_INDIA
        </span>

        <a
          href={IDENTITY.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255, 107, 44, 0.5)',
            textDecoration: 'none',
            transition: 'color var(--transition-fast)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 107, 44, 0.5)')}
        >
          Architectural_Source
        </a>
      </div>

      <style>{`
        @media (min-width: 800px) {
          .footer-grid {
            grid-template-columns: 1.25fr 2fr !important;
          }
          .footer-links-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .footer-status-col {
            grid-column: span 1 !important;
          }
          .footer-mission-text {
            display: inline !important;
          }
        }
      `}</style>
    </footer>
  );
}
