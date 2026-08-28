/**
 * Temporal Logs & Timeline Data
 * Naboraj Sarkar | NS CODEX
 */

export interface TimelineEntry {
  year: string;
  tag: string;
  title: string;
  text: string;
  iconName: string;
  status: 'HISTORICAL' | 'CURRENT' | 'DIRECTION';
  milestones?: string[];
}

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    year: '2021',
    tag: 'GENESIS',
    title: 'The Awakening',
    text: 'Decoded the architecture of digital systems. The first terminal sessions ignited a lasting passion for precision, systems logic, and rapid iterative software development.',
    iconName: 'Terminal',
    status: 'HISTORICAL',
    milestones: ['First terminal sessions', 'Foundational algorithm study', 'Syntax mastery'],
  },
  {
    year: '2022',
    tag: 'FOUNDATIONS',
    title: 'ICSE & Foundations',
    text: 'Completed ICSE board education with deep specialization in computer science. Built rigorous algorithmic logic in Java while creating the first custom automation scripts.',
    iconName: 'GraduationCap',
    status: 'HISTORICAL',
    milestones: ['ICSE CS curriculum completion', 'OOP fundamentals in Java', 'First automation scripts'],
  },
  {
    year: '2023',
    tag: 'IDENTITY',
    title: 'NS CODEX Genesis',
    text: 'Forged the signature dark-modern aesthetic and officially established NS CODEX. Shifted core focus toward intelligent bots, AI agents, and production web engineering.',
    iconName: 'Command',
    status: 'HISTORICAL',
    milestones: ['NS CODEX branding launched', 'Telegram bot development', 'Liquid glass design experiments'],
  },
  {
    year: '2024',
    tag: 'EXPANSION',
    title: 'Crypto & Free Education',
    text: 'Expanded into cryptocurrency market analysis and investment frameworks while formalizing the core mission to deliver free, high-quality coding education across India.',
    iconName: 'Bitcoin',
    status: 'HISTORICAL',
    milestones: ['Free education initiative founded', 'Crypto market research', 'Integration pipelines built'],
  },
  {
    year: '2025–2026',
    tag: 'CURRENT NODE',
    title: 'Authority Node & AI Systems',
    text: 'Engineered the v12.6 NS CODEX Authority Node. Scaling AI bot automation suites, 3D spatial web architectures, and comprehensive technical documentation.',
    iconName: 'Activity',
    status: 'CURRENT',
    milestones: ['React 19 & WebGL engine integration', 'Production bot deployments', 'Structured knowledge archive'],
  },
  {
    year: 'NEXT NODE',
    tag: 'EXPLORATION',
    title: 'Distributed Systems & Autonomous Agents',
    text: 'Exploring decentralized architectures, autonomous multi-agent swarms, and creating open-source educational systems that empower millions of young developers in India.',
    iconName: 'Rocket',
    status: 'DIRECTION',
    milestones: ['Autonomous agent swarms', 'Distributed edge computing', 'Nationwide open coding resources'],
  },
];
