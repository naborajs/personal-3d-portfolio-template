/**
 * Digital Network & Social Channels
 * Naboraj Sarkar | NS CODEX
 */

export interface SocialChannel {
  name: string;
  handle: string;
  purpose: string;
  description: string;
  url: string;
  iconName: string;
  badge: string;
  isPrimary?: boolean;
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    name: 'GitHub',
    handle: '@naborajs',
    purpose: 'Code & Open Source',
    description: 'Public repositories, portfolio source code, bot automation scripts, and open-source contributions.',
    url: 'https://github.com/naborajs',
    iconName: 'Github',
    badge: 'CODE_BASE',
    isPrimary: true,
  },
  {
    name: 'YouTube',
    handle: '@Nishant_sarkar',
    purpose: 'Education & Content',
    description: 'Technical breakdowns, programming tutorials, and free computer science education for Indian students.',
    url: 'https://youtube.com/@Nishant_sarkar',
    iconName: 'Youtube',
    badge: 'LEARNING_HUB',
    isPrimary: true,
  },
  {
    name: 'LinkedIn',
    handle: 'in/naboraj-sarkar',
    purpose: 'Professional Network',
    description: 'Professional updates, systems engineering insights, and tech community engagement.',
    url: 'https://linkedin.com/in/naboraj-sarkar',
    iconName: 'Linkedin',
    badge: 'CONNECT',
  },
  {
    name: 'Instagram',
    handle: '@naborajs',
    purpose: 'Personal & Creative',
    description: 'Behind-the-scenes builder journey, workspace setups, and creative updates.',
    url: 'https://instagram.com/naborajs',
    iconName: 'Instagram',
    badge: 'LOG',
  },
  {
    name: 'X (Twitter)',
    handle: '@NSGAMMING699',
    purpose: 'Updates & Ideas',
    description: 'Short-form technical thoughts, AI news, project announcements, and developer discourse.',
    url: 'https://x.com/NSGAMMING699',
    iconName: 'Twitter',
    badge: 'FEED',
  },
  {
    name: 'WhatsApp Business',
    handle: '+91 89006 53250',
    purpose: 'Direct Inquiry',
    description: 'Direct messaging channel for educational consulting, automation projects, and serious collaboration.',
    url: 'https://wa.me/918900653250',
    iconName: 'MessageCircle',
    badge: 'DIRECT_SYNC',
    isPrimary: true,
  },
];
