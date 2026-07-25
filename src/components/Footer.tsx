import React from 'react';
import { MapPin } from 'lucide-react';
import { IDENTITY, NAV_LINKS, SOCIALS } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        paddingTop: '4rem',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      {/* Main Footer Content */}
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          paddingBottom: '3rem',
        }}
      >
        {/* Brand Column */}
        <div style={{ maxWidth: '20rem' }}>
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
              alt="NS Codex Logo"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                objectFit: 'contain',
                opacity: 0.4,
                transition: 'opacity var(--transition-base)',
                borderRadius: '50%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.4')}
            />
            <div>
              <p
                className="font-display"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
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
                  color: 'rgba(255, 107, 44, 0.4)',
                  marginTop: '0.15rem',
                }}
              >
                NS CODEX Node {IDENTITY.version}
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--color-text-tertiary)',
              marginBottom: '1rem',
            }}
          >
            Global systems architect and ICSE-trained engineer from India.
            Specialized in AI automation, crypto investment, and providing free
            digital education worldwide.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <MapPin
              size={12}
              style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }}
            />
            <span
              className="font-mono"
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
              }}
            >
              {IDENTITY.coordinates}
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div
          className="footer-links-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
        >
          {/* Navigation */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: '0.6rem',
                fontWeight: 800,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              Navigation
            </h3>
            <nav aria-label="Footer navigation" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-base)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-primary)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-muted)')
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: '0.6rem',
                fontWeight: 800,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              Connect
            </h3>
            <nav aria-label="Social links" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-base)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-primary)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-muted)')
                  }
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
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-base)',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-text-primary)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-accent-primary)')
                }
              >
                WhatsApp
              </a>
            </nav>
          </div>

          {/* Status */}
          <div className="footer-status-col" style={{ gridColumn: 'span 2' }}>
            <h3
              className="font-display"
              style={{
                fontSize: '0.6rem',
                fontWeight: 800,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Operational', color: 'var(--color-accent-secondary)' },
                { label: 'Education_Live', color: 'var(--color-accent-primary)' },
                { label: 'ICSE_Node', color: 'var(--color-accent-tertiary)' },
              ].map((status) => (
                <div
                  key={status.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <div
                    style={{
                      width: '0.4rem',
                      height: '0.4rem',
                      borderRadius: '50%',
                      background: status.color,
                      boxShadow: `0 0 6px ${status.color}80`,
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
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
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          borderTop: '1px solid var(--glass-border)',
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          © {currentYear} NABORAJ SARKAR
        </span>
        <span
          className="font-mono footer-mission-text"
          style={{
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            display: 'none',
          }}
        >
          FREE_EDUCATION_MISSION_INDIA
        </span>
        <a
          href="https://github.com/naborajs"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255, 107, 44, 0.3)',
            textDecoration: 'none',
            transition: 'color var(--transition-base)',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = 'var(--color-accent-primary)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'rgba(255, 107, 44, 0.3)')
          }
        >
          Architectural_Source
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 2fr !important;
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
