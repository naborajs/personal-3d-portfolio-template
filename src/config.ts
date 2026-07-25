/**
 * NS CODEX – Centralized Configuration
 *
 * All personal data, social links, timeline entries, protocols,
 * and SEO-related content live here for easy customization.
 */

// ─── Identity ───────────────────────────────────────────────
export const IDENTITY = {
  name: 'Naboraj Sarkar',
  firstName: 'NABORAJ',
  lastName: 'SARKAR',
  tagline: 'Systems Architect & Tech Innovator',
  heroDescription:
    'A Systems Architect empowering India with free education and advanced AI logic.',
  location: 'West Bengal, India',
  logo: '/logo.png',
  version: 'v12.6',
  versionLabel: 'NS_CODEX_AUTH',
  repo: 'https://github.com/naborajs/personal-3d-portfolio-template',
  whatsapp: 'https://wa.me/918900653250',
  email: 'nishant.ns.business@gmail.com',
  phone: '+91 89006 53250',
  coordinates: '22.98° N, 87.85° E',
  url: 'https://naborajsarkar-me.vercel.app/',
} as const;

// ─── Social Links ───────────────────────────────────────────
export interface SocialLink {
  name: string;
  url: string;
  iconName: string; // lucide-react icon name
}

export const SOCIALS: SocialLink[] = [
  { name: 'Github', iconName: 'Github', url: 'https://github.com/naborajs' },
  {
    name: 'LinkedIn',
    iconName: 'Linkedin',
    url: 'https://linkedin.com/in/naboraj-sarkar',
  },
  {
    name: 'Instagram',
    iconName: 'Instagram',
    url: 'https://instagram.com/naborajs',
  },
  { name: 'X', iconName: 'Twitter', url: 'https://x.com/NSGAMMING699' },
  {
    name: 'YouTube',
    iconName: 'Youtube',
    url: 'https://youtube.com/@Nishant_sarkar',
  },
];

// ─── Navigation ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Protocols', href: '#protocols' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
] as const;

// ─── Capability Categories ──────────────────────────────────
export const CATEGORIES = ['All', 'Automation', 'Systems', 'Interface'] as const;
export type Category = (typeof CATEGORIES)[number];

// ─── Protocol Registry ──────────────────────────────────────
export interface Protocol {
  id: string;
  category: Category;
  title: string;
  description: string;
  iconName: string;
  iconColor: string;
  purpose: string;
  tags: string[];
}

export const PROTOCOLS: Protocol[] = [
  {
    id: 'SYS-01',
    category: 'Systems',
    title: 'Enterprise Logic',
    description:
      'Architecting zero-latency backends for global distribution. Specializing in highly distributed database clusters and secure authentication protocols that govern massive user traffic.',
    iconName: 'Database',
    iconColor: '#ff6b2c',
    purpose: 'Reliable foundation for modern enterprise-grade solutions.',
    tags: ['Node.js', 'K8s', 'Redis'],
  },
  {
    id: 'AUT-02',
    category: 'Automation',
    title: 'Intelligent Bots',
    description:
      "Engineering neuro-mimetic automation for Telegram and WhatsApp. These aren't simple scripts; they are intelligent agents capable of managing inventory, CRM sync, and dynamic customer support.",
    iconName: 'Cpu',
    iconColor: '#ffaa00',
    purpose: 'Scaling business operations through algorithmic efficiency.',
    tags: ['Python', 'OpenAI', 'Webhooks'],
  },
  {
    id: 'INT-03',
    category: 'Interface',
    title: 'Spatial Experiences',
    description:
      'Moving beyond flat design. Utilizing 3D math and advanced physics engines to create immersive web portals that respond to user presence and intent.',
    iconName: 'Eye',
    iconColor: '#ff4757',
    purpose: 'Elevating digital brand identity to cinematic heights.',
    tags: ['Three.js', 'React', 'Shaders'],
  },
  {
    id: 'AUT-04',
    category: 'Automation',
    title: 'Global Pipeline',
    description:
      'Connecting the disconnected. Building unified data highways between marketing tools, payment gateways, and logistics trackers to eliminate human error.',
    iconName: 'Zap',
    iconColor: '#ffc312',
    purpose: 'Total digital transformation for creator-led agencies.',
    tags: ['Node-RED', 'Stripe', 'CRMs'],
  },
  {
    id: 'SYS-05',
    category: 'Systems',
    title: 'Security Forge',
    description:
      'Hardening digital assets against modern threats. Implementing end-to-end encryption and robust firewall configurations at the network edge.',
    iconName: 'Globe',
    iconColor: '#ff6b2c',
    purpose: 'Protecting user data in an increasingly volatile web.',
    tags: ['CyberSec', 'Infra', 'TLS'],
  },
  {
    id: 'INT-06',
    category: 'Interface',
    title: 'Mobile Synapse',
    description:
      'Developing mobile apps that feel like native extensions of the user. Focus on 60fps animations, intuitive gesture control, and offline-first persistence.',
    iconName: 'Smartphone',
    iconColor: '#e84118',
    purpose: 'Portable utility for the high-speed modern user.',
    tags: ['Swift', 'Flutter', 'Kotlin'],
  },
];

// ─── Timeline ───────────────────────────────────────────────
export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
  iconName: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2021',
    title: 'The Awakening',
    text: 'Decoded the architecture of digital systems. My first terminal session was more than code—it was the birth of a philosophy centered on precision and speed.',
    iconName: 'Terminal',
  },
  {
    year: '2022',
    title: 'ICSE & Foundations',
    text: 'Successfully completed ICSE board education with a deep focus on computer science. Mastered the core logic of programming while building my first automation scripts.',
    iconName: 'GraduationCap',
  },
  {
    year: '2023',
    title: 'NS CODEX Genesis',
    text: "Forged the 'Dark Modern' aesthetic and officially launched NS CODEX. Shifted focus toward building proper intelligent bots and AI agents for the global market.",
    iconName: 'Command',
  },
  {
    year: '2024',
    title: 'Crypto & Education',
    text: 'Expanded into the crypto investment landscape while launching a mission to provide free, high-quality coding education to everyone across India.',
    iconName: 'Bitcoin',
  },
];

// ─── About Section Tags ────────────────────────────────────
export const ABOUT_TAGS = [
  { label: 'ICSE BOARD', sublabel: 'Education' },
  { label: 'FREE_ED', sublabel: 'Target_Goal' },
  { label: 'CRYPTO', sublabel: 'Asset_Class' },
] as const;
