/**
 * Capability Protocols Registry
 * Naboraj Sarkar | NS CODEX
 */

export const PROTOCOL_CATEGORIES = ['All', 'Systems', 'Automation', 'Interface'] as const;
export type ProtocolCategory = (typeof PROTOCOL_CATEGORIES)[number];

export interface Protocol {
  id: string;
  category: ProtocolCategory;
  title: string;
  description: string;
  iconName: string;
  iconColor: string;
  purpose: string;
  tags: string[];
  relatedProjectId?: string;
}

export const PROTOCOLS: Protocol[] = [
  {
    id: 'SYS-01',
    category: 'Systems',
    title: 'Enterprise Logic',
    description:
      'Architecting zero-latency backends for global distribution. Specializing in highly distributed database clusters, secure authentication protocols, and resilient infrastructure.',
    iconName: 'Database',
    iconColor: '#ff6b2c',
    purpose: 'Reliable foundation for modern enterprise-grade solutions.',
    tags: ['Node.js', 'K8s', 'Redis', 'Docker'],
    relatedProjectId: 'ns-codex-node',
  },
  {
    id: 'AUT-02',
    category: 'Automation',
    title: 'Intelligent Bots',
    description:
      'Engineering neuro-mimetic automation for Telegram and WhatsApp. Conversational agents capable of managing inventory, CRM synchronization, and multi-turn user support.',
    iconName: 'Cpu',
    iconColor: '#ffaa00',
    purpose: 'Scaling digital operations through algorithmic efficiency.',
    tags: ['Python', 'OpenAI', 'Webhooks', 'LLMs'],
    relatedProjectId: 'neuro-bot-suite',
  },
  {
    id: 'INT-03',
    category: 'Interface',
    title: 'Spatial Experiences',
    description:
      'Moving beyond flat design. Utilizing 3D math and advanced physics principles to create immersive web portals that respond fluidly to user presence and intent.',
    iconName: 'Eye',
    iconColor: '#ff4757',
    purpose: 'Elevating digital brand identity to cinematic heights.',
    tags: ['Three.js', 'React', 'Shaders', 'WebGL'],
    relatedProjectId: 'spatial-experience-engine',
  },
  {
    id: 'AUT-04',
    category: 'Automation',
    title: 'Global Pipeline',
    description:
      'Connecting the disconnected. Building unified data highways between marketing tools, payment gateways, and logistics trackers to eliminate human error.',
    iconName: 'Zap',
    iconColor: '#ffc312',
    purpose: 'Total digital orchestration for creator-led agencies.',
    tags: ['Node-RED', 'Stripe', 'CRMs', 'REST APIs'],
    relatedProjectId: 'global-pipeline-bridge',
  },
  {
    id: 'SYS-05',
    category: 'Systems',
    title: 'Security Forge',
    description:
      'Hardening digital assets against modern threats. Implementing end-to-end encryption, strict access policies, and robust firewall configurations at the network edge.',
    iconName: 'Globe',
    iconColor: '#ff6b2c',
    purpose: 'Protecting user data in an increasingly volatile web.',
    tags: ['CyberSec', 'Infra', 'TLS/SSL', 'Encryption'],
    relatedProjectId: 'security-forge-protocol',
  },
  {
    id: 'INT-06',
    category: 'Interface',
    title: 'Mobile Synapse',
    description:
      'Developing mobile applications that feel like native extensions of the user. Focused on 60fps animations, intuitive gesture control, and offline-first persistence.',
    iconName: 'Smartphone',
    iconColor: '#e84118',
    purpose: 'Portable utility for the high-speed modern user.',
    tags: ['Flutter', 'Swift', 'Kotlin', 'React Native'],
  },
];
