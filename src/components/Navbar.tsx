import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Code2,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';
import { IDENTITY, NAV_LINKS } from '../config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 150,
          padding: '1rem 1.5rem',
        }}
      >
        <nav
          className="glass-panel"
          aria-label="Primary navigation"
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 'var(--border-radius-pill)',
            padding: '0.75rem 1.5rem',
            background: isScrolled
              ? 'rgba(6, 6, 8, 0.88)'
              : 'var(--glass-bg)',
            borderColor: isScrolled
              ? 'rgba(255, 255, 255, 0.1)'
              : 'var(--glass-border)',
            transition: 'background 0.4s ease, border-color 0.4s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="Naboraj Sarkar – Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <motion.img
              src={IDENTITY.logo}
              alt="NS Codex Logo"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              style={{
                width: '2rem',
                height: '2rem',
                objectFit: 'contain',
                borderRadius: '50%',
              }}
            />
            <span
              className="font-display"
              style={{
                fontWeight: 800,
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              NABORAJ{' '}
              <span style={{ color: 'var(--color-accent-primary)' }}>SARKAR</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <div
              className="nav-links-desktop"
              style={{
                display: 'none',
                gap: '2rem',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-base)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-primary)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-secondary)')
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <a
                href={IDENTITY.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
                className="glass-panel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  color: 'var(--color-text-secondary)',
                  transition: 'all var(--transition-base)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-text-primary)';
                  e.currentTarget.style.color = 'var(--color-bg-deep)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--glass-bg)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                <Code2 size={16} />
              </a>

              <a
                href={IDENTITY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn-desktop"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  background: 'var(--color-accent-primary)',
                  color: '#fff',
                  borderRadius: 'var(--border-radius-pill)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all var(--transition-base)',
                  boxShadow: '0 4px 20px rgba(255, 107, 44, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-secondary)';
                  e.currentTarget.style.boxShadow = '0 4px 25px rgba(255, 170, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-primary)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 107, 44, 0.25)';
                }}
              >
                <MessageCircle size={12} />
                WhatsApp
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass-bg)',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                }}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 140,
            background: 'rgba(6, 6, 8, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href={IDENTITY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: NAV_LINKS.length * 0.08 }}
            style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              background: 'var(--color-accent-primary)',
              color: '#fff',
              borderRadius: 'var(--border-radius-pill)',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={14} />
            WhatsApp
          </motion.a>
        </motion.div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .whatsapp-btn-desktop { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
