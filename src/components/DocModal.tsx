import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Bookmark, CheckCircle2 } from 'lucide-react';
import type { DocArticle } from '../data/documentation';

interface DocModalProps {
  article: DocArticle | null;
  onClose: () => void;
}

export default function DocModal({ article, onClose }: DocModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-doc-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(4, 4, 6, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="glass-elevated"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '48rem',
              maxHeight: '88vh',
              overflowY: 'auto',
              borderRadius: 'var(--border-radius-lg)',
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              zIndex: 1,
            }}
          >
            {/* Header: Category + Read Time + Close */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--glass-l1-border)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                <span className="system-badge" style={{ color: 'var(--color-accent-primary)' }}>
                  {article.category}
                </span>
                <span className="system-badge">{article.status}</span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.65rem',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  <Clock size={12} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close article"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  border: '1px solid var(--glass-l1-border)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Title */}
            <h2
              id="modal-doc-title"
              className="font-display"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              {article.title}
            </h2>

            {/* Summary Box */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--border-radius-md)',
                marginBottom: '2rem',
                borderLeft: '3px solid var(--color-accent-primary)',
              }}
            >
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                {article.summary}
              </p>
            </div>

            {/* Key Takeaways */}
            <div style={{ marginBottom: '2.5rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-accent-secondary)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.85rem',
                }}
              >
                // Core Architectural Takeaways
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {article.keyTakeaways.map((takeaway, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle2
                      size={15}
                      style={{
                        color: 'var(--color-accent-primary)',
                        marginTop: '0.2rem',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
                      {takeaway}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {article.content.map((sec, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--color-text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {sec.sectionTitle}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                    {sec.body}
                  </p>
                  {sec.codeSnippet && (
                    <div
                      className="glass-panel"
                      style={{
                        marginTop: '0.5rem',
                        padding: '1.25rem',
                        borderRadius: 'var(--border-radius-sm)',
                        background: '#040406',
                        overflowX: 'auto',
                      }}
                    >
                      <pre
                        className="font-mono"
                        style={{
                          fontSize: '0.75rem',
                          color: '#f5f4f0',
                          lineHeight: 1.6,
                        }}
                      >
                        <code>{sec.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer metadata */}
            <div
              style={{
                marginTop: '3rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--glass-l1-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.1em',
                }}
              >
                DOCUMENT_ID: {article.id.toUpperCase()} | LAST_UPDATED: {article.lastUpdated}
              </span>
              <button
                onClick={onClose}
                className="btn-glass"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.65rem' }}
              >
                Close Document
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
