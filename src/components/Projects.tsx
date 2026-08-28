import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowRight,
  Filter,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS, type Project } from '../data/projects';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFullArchive, setShowFullArchive] = useState<boolean>(false);

  const categories = ['All', 'Systems', 'AI & Automation', 'Web & 3D', 'Education', 'Integration'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredProjects = useMemo(() => PROJECTS.filter((p) => p.featured), []);
  const heroProject = featuredProjects[0] || PROJECTS[0];
  const secondaryFeatured = featuredProjects.slice(1);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Section Header */}
      <div
        className="projects-header"
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
            System_Deployments_&_Codebases
          </span>
          <h2
            id="projects-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            Project <span className="text-gradient-flow">Archive</span>
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
            Selected architectural systems, intelligent automation pipelines, and open-source software built for performance.
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
              onClick={() => setSelectedCategory(cat)}
              className="font-display"
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--border-radius-sm)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all var(--transition-fast)',
                background:
                  selectedCategory === cat
                    ? 'var(--color-accent-primary)'
                    : 'transparent',
                color: selectedCategory === cat ? '#fff' : 'var(--color-text-tertiary)',
                boxShadow:
                  selectedCategory === cat
                    ? '0 4px 16px rgba(255, 107, 44, 0.3)'
                    : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Featured Primary Hero Card (Editorial Presentation) */}
      {heroProject && selectedCategory === 'All' && !searchQuery && (
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
            border: '1px solid rgba(255, 107, 44, 0.25)',
          }}
        >
          {/* Ambient Corner Flare */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '45%',
              height: '45%',
              background: 'radial-gradient(circle at 100% 0%, rgba(255, 107, 44, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Top Badge Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                    color: 'var(--color-accent-primary)',
                  }}
                >
                  // FEATURED_PRIMARY_{heroProject.code}
                </span>
                <span className="system-badge">{heroProject.status}</span>
                <span className="system-badge">{heroProject.category}</span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
                TIMEFRAME: {heroProject.year}
              </span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  lineHeight: 1.05,
                }}
              >
                {heroProject.title}
              </h3>
              <p
                className="font-display"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  color: 'var(--color-accent-secondary)',
                }}
              >
                {heroProject.tagline}
              </p>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.75,
                maxWidth: '52rem',
              }}
            >
              {heroProject.description}
            </p>

            {/* Problem / Solution Snapshot */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.25rem',
              }}
              className="hero-project-specs-grid"
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
                    marginBottom: '0.4rem',
                  }}
                >
                  // Challenge
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {heroProject.problem}
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
                    marginBottom: '0.4rem',
                  }}
                >
                  // Architecture
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {heroProject.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Pills + Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--glass-l1-border)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {heroProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono"
                    style={{
                      fontSize: '0.6rem',
                      padding: '0.3rem 0.7rem',
                      borderRadius: 'var(--border-radius-xs)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  onClick={() => onSelectProject(heroProject)}
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.75rem', fontSize: '0.7rem' }}
                >
                  <span>Inspect Blueprint</span>
                </button>
                {heroProject.githubUrl && (
                  <a
                    href={heroProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                    style={{ padding: '0.75rem 1.25rem' }}
                  >
                    <Github size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Secondary Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
        }}
        className="projects-subgrid"
      >
        {(selectedCategory === 'All' && !searchQuery ? secondaryFeatured : filteredProjects).map((project, i) => (
          <motion.article
            key={project.id}
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
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--color-accent-primary)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {project.code}
                </span>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <span className="system-badge">{project.status}</span>
                  <span className="system-badge">{project.category}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3
                className="font-display"
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  marginBottom: '0.4rem',
                  color: '#ffffff',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-accent-secondary)',
                  marginBottom: '1rem',
                  fontWeight: 400,
                }}
              >
                {project.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Footer: Tech stack + Inspect link */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                  marginBottom: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--glass-l1-border)',
                }}
              >
                {project.techStack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="font-mono"
                    style={{
                      fontSize: '0.55rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => onSelectProject(project)}
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
                  <span>Details & Specs</span>
                  <ArrowRight size={14} />
                </button>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      style={{
                        color: 'var(--color-text-tertiary)',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-tertiary)')}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      style={{
                        color: 'var(--color-text-tertiary)',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-tertiary)')}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        @media (min-width: 900px) {
          .projects-header {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end;
          }
          .projects-subgrid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-project-specs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
