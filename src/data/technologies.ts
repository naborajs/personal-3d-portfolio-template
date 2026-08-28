/**
 * Technology & Capability Matrix
 * Authentic tech stack groups without fake percentages.
 */

export interface TechItem {
  name: string;
  category: string;
  status: 'PRIMARY FOCUS' | 'ACTIVE' | 'EXPLORING';
  note?: string;
}

export interface TechGroup {
  title: string;
  iconName: string;
  description: string;
  items: TechItem[];
}

export const TECH_GROUPS: TechGroup[] = [
  {
    title: 'Languages & Core Logic',
    iconName: 'Code2',
    description: 'Foundational programming languages used for systems, automation, and full-stack logic.',
    items: [
      { name: 'TypeScript', category: 'Languages', status: 'PRIMARY FOCUS', note: 'Strict typing for production apps' },
      { name: 'JavaScript (ESNext)', category: 'Languages', status: 'PRIMARY FOCUS', note: 'Modern asynchronous web logic' },
      { name: 'Python', category: 'Languages', status: 'ACTIVE', note: 'Automation scripts & AI pipelines' },
      { name: 'Java / ICSE CS', category: 'Languages', status: 'ACTIVE', note: 'Core OOP & data structures foundation' },
      { name: 'HTML5 / CSS3', category: 'Languages', status: 'PRIMARY FOCUS', note: 'Semantic structure & design tokens' },
      { name: 'SQL', category: 'Languages', status: 'ACTIVE', note: 'Relational data querying' },
    ],
  },
  {
    title: 'AI & Automation Engineering',
    iconName: 'Cpu',
    description: 'Intelligent agent workflows, LLM orchestration, and messaging automation pipelines.',
    items: [
      { name: 'OpenAI API', category: 'AI', status: 'PRIMARY FOCUS', note: 'Structured completions & agent tooling' },
      { name: 'Telegram Bot API', category: 'Automation', status: 'PRIMARY FOCUS', note: 'Real-time conversational bots' },
      { name: 'WhatsApp Business API', category: 'Automation', status: 'ACTIVE', note: 'Customer workflow routing' },
      { name: 'Prompt Orchestration', category: 'AI', status: 'ACTIVE', note: 'Few-shot and deterministic prompting' },
      { name: 'Node-RED', category: 'Automation', status: 'ACTIVE', note: 'Visual event flow bridging' },
      { name: 'Autonomous Agents', category: 'AI', status: 'EXPLORING', note: 'Multi-step reasoning workflows' },
    ],
  },
  {
    title: 'Systems, Backend & Infrastructure',
    iconName: 'Database',
    description: 'Server architecture, API design, database clustering, and edge security.',
    items: [
      { name: 'Node.js', category: 'Backend', status: 'PRIMARY FOCUS', note: 'High-throughput event loops' },
      { name: 'Express.js', category: 'Backend', status: 'PRIMARY FOCUS', note: 'RESTful API routing & middleware' },
      { name: 'Redis', category: 'Backend', status: 'ACTIVE', note: 'Caching & message queues' },
      { name: 'Docker', category: 'Infra', status: 'ACTIVE', note: 'Containerized microservice environments' },
      { name: 'Kubernetes (K8s)', category: 'Infra', status: 'EXPLORING', note: 'Distributed cluster management' },
      { name: 'REST & GraphQL', category: 'API', status: 'ACTIVE', note: 'API contract architecture' },
    ],
  },
  {
    title: 'Web, 3D & Interfaces',
    iconName: 'Eye',
    description: 'Cinematic user interfaces, physics-based motion, and WebGL canvas experiments.',
    items: [
      { name: 'React 19', category: 'Web', status: 'PRIMARY FOCUS', note: 'Component-driven application state' },
      { name: 'Next.js', category: 'Web', status: 'ACTIVE', note: 'Server-rendered architectures' },
      { name: 'Three.js / WebGL', category: '3D', status: 'ACTIVE', note: '3D math & spatial canvas rendering' },
      { name: 'Framer Motion', category: 'Motion', status: 'PRIMARY FOCUS', note: 'Fluid spring physics & gestures' },
      { name: 'Tailwind CSS', category: 'Styling', status: 'PRIMARY FOCUS', note: 'Utility architecture & tokens' },
      { name: 'Liquid Glass UI', category: 'Design', status: 'PRIMARY FOCUS', note: 'Smoked glass & refraction styling' },
    ],
  },
  {
    title: 'Open Source, DevOps & Workflow',
    iconName: 'Layers',
    description: 'Version control, edge deployment pipelines, and development toolchain.',
    items: [
      { name: 'Git & GitHub', category: 'Tools', status: 'PRIMARY FOCUS', note: 'Branching, releases, & open collaboration' },
      { name: 'Vite', category: 'Build', status: 'PRIMARY FOCUS', note: 'Fast ESM bundler & dev server' },
      { name: 'Vercel Edge Network', category: 'Deploy', status: 'PRIMARY FOCUS', note: 'Global CDN & serverless hosting' },
      { name: 'Linux / Bash', category: 'OS', status: 'ACTIVE', note: 'Shell scripting & server admin' },
      { name: 'JSON-LD / Schema.org', category: 'SEO', status: 'PRIMARY FOCUS', note: 'Machine-readable entity architecture' },
    ],
  },
];
