import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, CheckCircle2 } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
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
              maxWidth: '44rem',
              maxHeight: '88vh',
              overflowY: 'auto',
              borderRadius: 'var(--border-radius-lg)',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              zIndex: 1,
            }}
          >
            {/* Header: Code + Status + Close Button */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--color-accent-primary)',
                  }}
                >
                  {project.code}
                </span>
                <span className="system-badge">{project.status}</span>
                <span className="system-badge">{project.category}</span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project details"
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

            {/* Title & Tagline */}
            <h3
              id="modal-project-title"
              className="font-display"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
                lineHeight: 1.1,
              }}
            >
              {project.title}
            </h3>

            <p
              className="font-display"
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--color-accent-secondary)',
                marginBottom: '1.75rem',
              }}
            >
              {project.tagline}
            </p>

            {/* Full Description */}
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              {project.description}
            </p>

            {/* Problem & Solution Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              <div
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--border-radius-md)',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--color-accent-tertiary)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  // Core Challenge
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {project.problem}
                </p>
              </div>

              <div
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--border-radius-md)',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--color-accent-primary)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  // Architectural Solution
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  Key Architectural Highlights
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2
                        size={14}
                        style={{
                          color: 'var(--color-accent-primary)',
                          marginTop: '0.25rem',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div style={{ marginBottom: '2rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Technology Stack
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono"
                    style={{
                      fontSize: '0.6rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--border-radius-xs)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--glass-l1-border)',
              }}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={15} />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass"
                >
                  <ExternalLink size={15} />
                  <span>Open Live Node</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
