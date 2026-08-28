import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  ArrowRight,
  Code2,
  FolderGit2,
  BookOpen,
  Activity,
  User,
  Compass,
  MessageCircle,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Layers,
  Terminal,
  Clock,
} from 'lucide-react';
import { PROJECTS, type Project } from '../data/projects';
import { DOCUMENTATION_ARTICLES, type DocArticle } from '../data/documentation';
import { IDENTITY } from '../data/identity';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  onSelectDoc?: (doc: DocArticle) => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Projects' | 'Documentation' | 'Actions';
  icon: React.ReactNode;
  subtitle?: string;
  action: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
  onSelectDoc,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global key listener for Ctrl+K, Cmd+K, or Slash
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
          // Parent handles opening
        }
      } else if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        // Open
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const navigateTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Build command items
  const allItems: PaletteItem[] = useMemo(() => {
    const items: PaletteItem[] = [
      // Sections
      {
        id: 'nav-hero',
        title: 'Home / Hero Node',
        category: 'Navigation',
        icon: <Terminal size={16} />,
        subtitle: 'System header and identity statement',
        action: () => navigateTo('#hero'),
      },
      {
        id: 'nav-about',
        title: 'About / Identity Story',
        category: 'Navigation',
        icon: <User size={16} />,
        subtitle: 'Who is Naboraj Sarkar? Philosophy & Mission',
        action: () => navigateTo('#about'),
      },
      {
        id: 'nav-nscodex',
        title: 'NS CODEX System Architecture',
        category: 'Navigation',
        icon: <Command size={16} />,
        subtitle: 'Personal Digital Operating System overview',
        action: () => navigateTo('#nscodex'),
      },
      {
        id: 'nav-projects',
        title: 'Selected Systems & Project Archive',
        category: 'Navigation',
        icon: <FolderGit2 size={16} />,
        subtitle: 'Explore full catalog of engineering projects',
        action: () => navigateTo('#projects'),
      },
      {
        id: 'nav-capabilities',
        title: 'Capability Matrix',
        category: 'Navigation',
        icon: <Layers size={16} />,
        subtitle: 'Languages, AI, Backend, 3D & Tools breakdown',
        action: () => navigateTo('#capabilities'),
      },
      {
        id: 'nav-protocols',
        title: 'Protocols Registry',
        category: 'Navigation',
        icon: <Activity size={16} />,
        subtitle: '6 core engineering protocols',
        action: () => navigateTo('#protocols'),
      },
      {
        id: 'nav-documentation',
        title: 'Knowledge Archive / Documentation',
        category: 'Navigation',
        icon: <BookOpen size={16} />,
        subtitle: 'Architecture notes and technical tutorials',
        action: () => navigateTo('#documentation'),
      },
      {
        id: 'nav-now',
        title: 'Current Node / Real-time Status',
        category: 'Navigation',
        icon: <Clock size={16} />,
        subtitle: 'Currently Building, Exploring, Learning, Documenting',
        action: () => navigateTo('#now'),
      },
      {
        id: 'nav-timeline',
        title: 'Temporal Logs / Timeline',
        category: 'Navigation',
        icon: <Compass size={16} />,
        subtitle: 'Historical milestones from 2021 to Next Node',
        action: () => navigateTo('#timeline'),
      },
      {
        id: 'nav-network',
        title: 'Digital Network',
        category: 'Navigation',
        icon: <Code2 size={16} />,
        subtitle: 'GitHub, YouTube, LinkedIn, X, WhatsApp',
        action: () => navigateTo('#network'),
      },
      {
        id: 'nav-contact',
        title: 'Direct Inquiry / Contact',
        category: 'Navigation',
        icon: <Mail size={16} />,
        subtitle: 'Email sync and WhatsApp communication',
        action: () => navigateTo('#contact'),
      },
      // Actions
      {
        id: 'act-copy-email',
        title: `Copy Email (${IDENTITY.email})`,
        category: 'Actions',
        icon: copiedText === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />,
        subtitle: 'Copy official email address to clipboard',
        action: () => copyToClipboard(IDENTITY.email, 'email'),
      },
      {
        id: 'act-whatsapp',
        title: 'Open WhatsApp Business Direct Connect',
        category: 'Actions',
        icon: <MessageCircle size={16} />,
        subtitle: IDENTITY.phone,
        action: () => {
          window.open(IDENTITY.whatsapp, '_blank');
          onClose();
        },
      },
      {
        id: 'act-github',
        title: 'Open GitHub Profile (@naborajs)',
        category: 'Actions',
        icon: <ExternalLink size={16} />,
        subtitle: 'Explore open source repositories and activity',
        action: () => {
          window.open(IDENTITY.repo, '_blank');
          onClose();
        },
      },
    ];

    // Add Projects
    PROJECTS.forEach((p) => {
      items.push({
        id: `prj-${p.id}`,
        title: `${p.code}: ${p.title}`,
        category: 'Projects',
        icon: <FolderGit2 size={16} />,
        subtitle: `${p.status} • ${p.category} — ${p.tagline}`,
        action: () => {
          onClose();
          if (onSelectProject) onSelectProject(p);
          else navigateTo('#projects');
        },
      });
    });

    // Add Documentation Articles
    DOCUMENTATION_ARTICLES.forEach((d) => {
      items.push({
        id: `doc-${d.id}`,
        title: d.title,
        category: 'Documentation',
        icon: <BookOpen size={16} />,
        subtitle: `${d.category} • ${d.readTime} — ${d.summary}`,
        action: () => {
          onClose();
          if (onSelectDoc) onSelectDoc(d);
          else navigateTo('#documentation');
        },
      });
    });

    return items;
  }, [copiedText, onClose, onSelectDoc, onSelectProject]);

  // Filter items by query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems;
    const lower = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(lower)) ||
        item.category.toLowerCase().includes(lower),
    );
  }, [allItems, query]);

  // Keyboard navigation within list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="System Command Palette"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 400,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '4rem 1.5rem',
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
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="glass-elevated"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '38rem',
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              zIndex: 1,
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Search Input Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--glass-l1-border)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <Search size={18} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search systems, protocols, documentation, or jump to node..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: 'var(--color-text-tertiary)',
                  flexShrink: 0,
                }}
              >
                ESC to close
              </span>
            </div>

            {/* Items List */}
            <div
              style={{
                maxHeight: '22rem',
                overflowY: 'auto',
                padding: '0.5rem',
              }}
            >
              {filteredItems.length === 0 ? (
                <div
                  style={{
                    padding: '2.5rem 1rem',
                    textAlign: 'center',
                    color: 'var(--color-text-tertiary)',
                    fontSize: '0.875rem',
                  }}
                >
                  No matching nodes or actions found.
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--border-radius-sm)',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(255, 107, 44, 0.12)' : 'transparent',
                        border: isSelected
                          ? '1px solid rgba(255, 107, 44, 0.3)'
                          : '1px solid transparent',
                        transition: 'all 120ms ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                        <div
                          style={{
                            color: isSelected
                              ? 'var(--color-accent-primary)'
                              : 'var(--color-text-tertiary)',
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              color: isSelected ? '#ffffff' : 'var(--color-text-primary)',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {item.title}
                          </p>
                          {item.subtitle && (
                            <p
                              style={{
                                fontSize: '0.75rem',
                                color: 'var(--color-text-tertiary)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '0.55rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-muted)',
                          }}
                        >
                          {item.category}
                        </span>
                        {isSelected && (
                          <ArrowRight size={14} style={{ color: 'var(--color-accent-primary)' }} />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer status */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.65rem 1.25rem',
                borderTop: '1px solid var(--glass-l1-border)',
                background: 'rgba(0, 0, 0, 0.4)',
                fontSize: '0.65rem',
                color: 'var(--color-text-muted)',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <span className="font-mono" style={{ color: 'rgba(255, 107, 44, 0.6)' }}>
                NS_CODEX_TERMINAL
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
