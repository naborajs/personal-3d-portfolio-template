/**
 * NS CODEX – Centralized Configuration & Aggregated Data
 *
 * Re-exports structured data modules and provides global site navigation.
 */

export * from './data/identity';
export * from './data/projects';
export * from './data/protocols';
export * from './data/technologies';
export * from './data/documentation';
export * from './data/now';
export * from './data/timeline';
export * from './data/socials';

import { IDENTITY } from './data/identity';
import { SOCIAL_CHANNELS } from './data/socials';
import { PROTOCOLS } from './data/protocols';
import { TIMELINE_DATA } from './data/timeline';

// Navigation items for floating glass header and mobile drawer
export const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'NS Codex', href: '#nscodex', id: 'nscodex' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'Protocols', href: '#protocols', id: 'protocols' },
  { label: 'Archive', href: '#documentation', id: 'documentation' },
  { label: 'Now', href: '#now', id: 'now' },
  { label: 'Timeline', href: '#timeline', id: 'timeline' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;

// Backward-compatible SOCIALS export
export const SOCIALS = SOCIAL_CHANNELS.map((s) => ({
  name: s.name,
  iconName: s.iconName,
  url: s.url,
}));

// Backward-compatible TIMELINE export
export const TIMELINE = TIMELINE_DATA;

// Backward-compatible ABOUT_TAGS export
export const ABOUT_TAGS = [
  { label: 'ICSE BOARD', sublabel: 'Education' },
  { label: 'FREE_ED', sublabel: 'Target_Goal' },
  { label: 'CRYPTO', sublabel: 'Asset_Class' },
] as const;

export const CATEGORIES = ['All', 'Systems', 'Automation', 'Interface'] as const;
export type Category = (typeof CATEGORIES)[number];
