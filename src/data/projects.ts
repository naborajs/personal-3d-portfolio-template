/**
 * Project Archive & Selected Systems
 * Authentic project registry for Naboraj Sarkar / NS CODEX
 */

export interface Project {
  id: string;
  code: string; // e.g. "PRJ-01"
  title: string;
  category: 'Systems' | 'AI & Automation' | 'Web & 3D' | 'Education' | 'Integration';
  status: 'ACTIVE' | 'OPEN SOURCE' | 'EXPERIMENTAL' | 'ARCHIVED';
  year: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'ns-codex-node',
    code: 'PRJ-01',
    title: 'NS CODEX Authority Node',
    category: 'Web & 3D',
    status: 'ACTIVE',
    year: '2025–2026',
    tagline: 'High-performance personal digital system & knowledge terminal',
    description:
      'A cinematic, liquid-glass digital portfolio and authority node engineered with React 19, Framer Motion, and custom WebGL shaders. Serves as the central repository for projects, technical documentation, and verified identity.',
    problem:
      'Generic developer portfolios often rely on repetitive templates, poor motion performance, and disconnected static pages that fail to reflect a builder\'s evolving technical journey.',
    solution:
      'Engineered an architectural smoked-glass design system with 60fps physics-driven interactions, comprehensive JSON-LD entity schema, and centralized data decoupling for fast maintainability.',
    techStack: ['React 19', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Schema.org'],
    githubUrl: 'https://github.com/naborajs/personal-3d-portfolio-template',
    liveUrl: 'https://naborajsarkar-me.vercel.app/',
    featured: true,
    highlights: [
      'Sub-50ms interaction response times',
      'Dynamic canvas particle constellation background',
      'Full Schema.org JSON-LD Person & WebSite entity integration',
      'Universal Command Palette for rapid keyboard navigation',
    ],
  },
  {
    id: 'neuro-bot-suite',
    code: 'PRJ-02',
    title: 'Neuro-Mimetic Bot Suite',
    category: 'AI & Automation',
    status: 'OPEN SOURCE',
    year: '2024–2025',
    tagline: 'Intelligent multi-channel automation agents for Telegram & WhatsApp',
    description:
      'Custom automation infrastructure powering multi-channel intelligent bots. Integrates OpenAI API, dynamic webhook handlers, and CRM sync to handle automated workflows and conversational queries.',
    problem:
      'Traditional chat bots are rigid rule-based systems that break easily when users provide non-standard inputs or require multi-step contextual processing.',
    solution:
      'Synthesized structured prompt orchestration with Python webhooks and Node-RED middleware to deliver resilient conversational bots with reliable fallback routines.',
    techStack: ['Python', 'OpenAI API', 'Telegram Bot API', 'WhatsApp Business API', 'Node.js', 'Webhooks'],
    githubUrl: 'https://github.com/naborajs',
    featured: true,
    highlights: [
      'Contextual multi-turn dialogue management',
      'Zero-loss webhook event queueing',
      'Direct synchronization with CRM and database endpoints',
    ],
  },
  {
    id: 'spatial-experience-engine',
    code: 'PRJ-03',
    title: 'Spatial Experience Engine',
    category: 'Web & 3D',
    status: 'ACTIVE',
    year: '2024',
    tagline: 'Interactive 3D math & WebGL shader experiments for the modern web',
    description:
      'A collection of lightweight WebGL and Three.js visual experiments exploring real-time lighting, interactive particle systems, and glass refraction on the browser canvas.',
    problem:
      '3D web experiences frequently cause severe frame drops, large bundle sizes, and poor mobile accessibility when heavy 3D assets are loaded without optimization.',
    solution:
      'Created custom mathematical shaders and 2D-canvas fallbacks that deliver rich spatial feedback with minimal CPU/GPU overhead on all screen sizes.',
    techStack: ['Three.js', 'WebGL', 'GLSL Shaders', 'React', 'Canvas API'],
    githubUrl: 'https://github.com/naborajs',
    featured: true,
    highlights: [
      'Lightweight procedural generation without heavy 3D meshes',
      'Adaptive rendering based on device capability and reduced-motion settings',
      'Smooth 60fps physics response to cursor trajectory',
    ],
  },
  {
    id: 'open-education-codex',
    code: 'PRJ-04',
    title: 'Open Education Codex for India',
    category: 'Education',
    status: 'ACTIVE',
    year: '2023–2026',
    tagline: 'Democratizing programming fundamentals and CS education',
    description:
      'A non-profit curriculum initiative designed to guide students across India from fundamental ICSE computer science concepts to modern full-stack web and AI engineering through free, open-access guides.',
    problem:
      'High-quality technical education in India is often locked behind expensive bootcamps, fragmented YouTube tutorials, or outdated curricula.',
    solution:
      'Authored clear, beginner-friendly roadmaps, hands-on code examples, and structured guides covering Python, JavaScript, and systems thinking.',
    techStack: ['Markdown', 'Open Education', 'Python', 'JavaScript', 'Git'],
    githubUrl: 'https://github.com/naborajs',
    liveUrl: 'https://youtube.com/@Nishant_sarkar',
    featured: true,
    highlights: [
      'Structured step-by-step roadmaps from ICSE foundations to web dev',
      'Focus on practical building over passive rote learning',
      'Completely free and community-driven resource',
    ],
  },
  {
    id: 'global-pipeline-bridge',
    code: 'PRJ-05',
    title: 'Global Pipeline & Webhook Bridge',
    category: 'Integration',
    status: 'OPEN SOURCE',
    year: '2023–2024',
    tagline: 'Unified event highway for payment gateways, CRMs, and APIs',
    description:
      'Event routing middleware that connects disparate platforms—Stripe payment events, Node-RED flows, database webhooks, and analytics dashboards—into a cohesive pipeline.',
    problem:
      'Manual data entry between e-commerce tools, payment gateways, and client databases introduces human error and slows down business response times.',
    solution:
      'Constructed a reliable event-driven middleware pipeline using Express, Redis message queues, and error-resilient webhook retries.',
    techStack: ['Node.js', 'Express', 'Redis', 'Stripe API', 'Node-RED', 'REST APIs'],
    githubUrl: 'https://github.com/naborajs',
    featured: false,
    highlights: [
      'Guaranteed webhook delivery with exponential backoff retries',
      'Standardized event payload schema across multiple third-party APIs',
      'Zero downtime configuration updates',
    ],
  },
  {
    id: 'security-forge-protocol',
    code: 'PRJ-06',
    title: 'Security Forge Protocol',
    category: 'Systems',
    status: 'EXPERIMENTAL',
    year: '2024',
    tagline: 'Edge security hardening and secure authentication patterns',
    description:
      'Modular security configurations and authentication templates exploring TLS/SSL best practices, secure header management, rate limiting, and encrypted session handling for modern web apps.',
    problem:
      'Small projects and student developers frequently deploy web apps with unauthenticated endpoints, leaky headers, or vulnerable CORS policies.',
    solution:
      'Created reusable hardening templates and architectural checklists to protect web services against basic automated threats.',
    techStack: ['Cybersecurity', 'TLS/SSL', 'Node.js', 'Nginx', 'Docker'],
    githubUrl: 'https://github.com/naborajs',
    featured: false,
    highlights: [
      'Drop-in security headers configuration',
      'Strict rate-limiting and brute-force protection middleware',
      'Best-practice TLS and authentication blueprints',
    ],
  },
];
