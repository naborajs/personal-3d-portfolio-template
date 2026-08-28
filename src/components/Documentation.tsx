import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, CheckCircle2, Bookmark, FileCode2 } from 'lucide-react';
import { DOCUMENTATION_ARTICLES, type DocArticle } from '../data/documentation';

interface DocumentationProps {
  onSelectDoc: (article: DocArticle) => void;
}

export default function Documentation({ onSelectDoc }: DocumentationProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Automation', 'Systems', 'Frontend & 3D', 'Education'];

  const filteredArticles = useMemo(() => {
    return DOCUMENTATION_ARTICLES.filter(
      (a) => activeCategory === 'All' || a.category === activeCategory,
    );
  }, [activeCategory]);

  const featuredDoc = DOCUMENTATION_ARTICLES[0];
  const secondaryDocs = DOCUMENTATION_ARTICLES.slice(1);

  return (
    <section
      id="documentation"
      aria-labelledby="documentation-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Section Header */}
      <div
        className="doc-header"
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
            Knowledge_Base_&_Guides
          </span>
          <h2
            id="documentation-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Technical <span className="text-gradient-flow">Archive</span>
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
            Curated architectural blueprints, bot engineering guides, and open learning logs documenting real-world technical problems and solutions.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="liquid-glass-card"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.25rem',
            padding: '0.3rem',
            borderRadius: 'var(--border-radius-md)',
            alignSelf: 'flex-start',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-display"
              style={{
                padding: '0.5rem 1.15rem',
                borderRadius: 'var(--border-radius-sm)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all var(--transition-fast)',
                background:
                  activeCategory === cat
                    ? 'var(--color-accent-primary)'
                    : 'transparent',
                color: activeCategory === cat ? '#fff' : 'var(--color-text-tertiary)',
                boxShadow:
                  activeCategory === cat
                    ? '0 4px 16px rgba(255, 107, 44, 0.3)'
                    : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Featured Core Guide (Large Editorial Container) */}
      {featuredDoc && activeCategory === 'All' && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="liquid-glass-card"
          style={{
            borderRadius: 'var(--border-radius-xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '2.5rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Header meta */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                    color: 'var(--color-accent-primary)',
                  }}
                >
                  // FEATURED_ARCHIVE_LOG
                </span>
                <span className="system-badge">{featuredDoc.status}</span>
                <span className="system-badge">{featuredDoc.category}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Clock size={12} />
                <span>{featuredDoc.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#ffffff',
              }}
            >
              {featuredDoc.title}
            </h3>

            {/* Summary */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.75,
                maxWidth: '52rem',
              }}
            >
              {featuredDoc.summary}
            </p>

            {/* Key Takeaways */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--border-radius-md)',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-accent-secondary)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                // Core Engineering Principles
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {featuredDoc.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2
                      size={14}
                      style={{
                        color: 'var(--color-accent-primary)',
                        marginTop: '0.2rem',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {takeaway}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Read Button */}
            <div style={{ paddingTop: '0.75rem' }}>
              <button
                onClick={() => onSelectDoc(featuredDoc)}
                className="btn-primary"
                style={{ padding: '0.75rem 1.75rem', fontSize: '0.7rem' }}
              >
                <BookOpen size={14} />
                <span>Read Full Document</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid of Remaining Technical Documents */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
        }}
        className="doc-grid"
      >
        {(activeCategory === 'All' ? secondaryDocs : filteredArticles).map((doc, i) => (
          <motion.article
            key={doc.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass-card group"
            style={{
              padding: '2rem',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div>
              {/* Header: category + read time */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <span className="system-badge" style={{ color: 'var(--color-accent-primary)' }}>
                  {doc.category}
                </span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.65rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <Clock size={12} />
                  <span>{doc.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  letterSpacing: '0.01em',
                  marginBottom: '0.75rem',
                  color: '#ffffff',
                  lineHeight: 1.25,
                }}
              >
                {doc.title}
              </h3>

              {/* Summary */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                }}
              >
                {doc.summary}
              </p>
            </div>

            {/* Footer: Read link */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--glass-l1-border)',
              }}
            >
              <button
                onClick={() => onSelectDoc(doc)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-accent-primary)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: 0,
                }}
              >
                <span>Read Blueprint</span>
                <ArrowRight size={14} />
              </button>

              <span
                className="font-mono"
                style={{
                  fontSize: '0.55rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.1em',
                }}
              >
                DOC_{doc.id.toUpperCase()}
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        @media (min-width: 900px) {
          .doc-header {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end;
          }
          .doc-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
