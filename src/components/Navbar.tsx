import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import {
  Code2,
  MessageCircle,
  Menu,
  X,
  Search,
  Command,
} from 'lucide-react';
import { IDENTITY, NAV_LINKS } from '../config';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-30% 0px -50% 0px', threshold: 0.1 },
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 150,
          padding: '0.85rem 1.25rem',
        }}
      >
        <nav
          className="glass-elevated"
          aria-label="Primary navigation"
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 'var(--border-radius-pill)',
            padding: '0.6rem 1.25rem',
            background: isScrolled ? 'rgba(8, 8, 12, 0.92)' : 'rgba(12, 12, 18, 0.75)',
            borderColor: isScrolled ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled
              ? '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 107, 44, 0.04)'
              : '0 8px 24px rgba(0, 0, 0, 0.35)',
            transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
          }}
        >
          {/* Brand Logo & Name */}
          <a
            href="#"
            aria-label="Naboraj Sarkar – NS CODEX Home"
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
              alt="NS Codex Emblem"
              whileHover={{ rotate: 15, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              style={{
                width: '2rem',
                height: '2rem',
                objectFit: 'contain',
                borderRadius: '50%',
                filter: 'drop-shadow(0 0 8px rgba(255, 107, 44, 0.3))',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="font-display"
                style={{
                  fontWeight: 900,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                NABORAJ <span style={{ color: 'var(--color-accent-primary)' }}>SARKAR</span>
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.5rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-text-tertiary)',
                  textTransform: 'uppercase',
                }}
              >
                NS CODEX Node
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Gliding Indicator */}
          <div
            className="nav-links-desktop"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(255, 255, 255, 0.025)',
              padding: '0.25rem 0.4rem',
              borderRadius: 'var(--border-radius-pill)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--border-radius-pill)',
                    transition: 'color var(--transition-fast)',
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255, 107, 44, 0.18)',
                        border: '1px solid rgba(255, 107, 44, 0.35)',
                        borderRadius: 'var(--border-radius-pill)',
                        zIndex: -1,
                      }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action Buttons & Quick Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette (Ctrl+K)"
              className="cmd-palette-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--border-radius-pill)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 107, 44, 0.4)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <Search size={13} style={{ color: 'var(--color-accent-primary)' }} />
              <span className="font-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.1em' }}>
                ⌘K
              </span>
            </button>

            {/* GitHub Repo Link */}
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
                width: '2.25rem',
                height: '2.25rem',
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
                e.currentTarget.style.background = 'var(--glass-l1-bg)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <Code2 size={15} />
            </a>

            {/* WhatsApp Quick Connect */}
            <a
              href={IDENTITY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn-desktop"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 1.15rem',
                background: 'var(--color-accent-primary)',
                color: '#fff',
                borderRadius: 'var(--border-radius-pill)',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all var(--transition-base)',
                boxShadow: '0 4px 16px rgba(255, 107, 44, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-accent-secondary)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 170, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-accent-primary)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 44, 0.3)';
              }}
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                border: '1px solid var(--glass-l1-border)',
                background: 'rgba(255, 255, 255, 0.04)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 140,
              background: 'rgba(6, 6, 8, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2.5rem',
            }}
          >
            {/* Mobile Header Info */}
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <span className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
                NS_CODEX_SYSTEM_NAV
              </span>
              <p
                className="font-display"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  marginTop: '0.5rem',
                  color: '#ffffff',
                }}
              >
                Naboraj Sarkar
              </p>
            </div>

            {/* Mobile Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: activeSection === link.id ? 'var(--color-accent-primary)' : '#ffffff',
                    textDecoration: 'none',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div
              style={{
                marginTop: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCommandPalette) onOpenCommandPalette();
                }}
                className="btn-glass"
                style={{ width: '100%', maxWidth: '18rem' }}
              >
                <Search size={14} />
                <span>Search (⌘K)</span>
              </button>

              <a
                href={IDENTITY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', maxWidth: '18rem' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={14} />
                <span>WhatsApp Business</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .nav-links-desktop { display: flex !important; }
          .whatsapp-btn-desktop { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
