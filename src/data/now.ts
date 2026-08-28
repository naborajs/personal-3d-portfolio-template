/**
 * Real-time "NOW / CURRENT NODE" Status Data
 * Naboraj Sarkar | NS CODEX
 */

export interface NowStatus {
  status: 'ACTIVE NODE' | 'BUILDING' | 'RESEARCHING';
  location: string;
  timezone: string;
  lastUpdated: string;
  currentFocus: {
    building: {
      title: string;
      description: string;
      badge: string;
    };
    exploring: {
      title: string;
      description: string;
      badge: string;
    };
    learning: {
      title: string;
      description: string;
      badge: string;
    };
    documenting: {
      title: string;
      description: string;
      badge: string;
    };
  };
  metrics: {
    label: string;
    value: string;
    status: 'optimal' | 'active' | 'live';
  }[];
}

export const NOW_DATA: NowStatus = {
  status: 'ACTIVE NODE',
  location: 'West Bengal, India',
  timezone: 'Asia/Kolkata (IST, UTC+5:30)',
  lastUpdated: 'August 2026',
  currentFocus: {
    building: {
      title: 'NS CODEX Digital System & Bot Infrastructure',
      description:
        'Refining production-ready smoked-glass UI architecture and event-driven automation frameworks with zero latency.',
      badge: 'PRODUCTION',
    },
    exploring: {
      title: 'Autonomous AI Agent Workflows & Edge Computing',
      description:
        'Experimenting with multi-agent orchestration, function calling protocols, and low-latency serverless edge backends.',
      badge: 'RESEARCH',
    },
    learning: {
      title: 'Distributed Systems & Advanced WebGL Shader Math',
      description:
        'Deepening mastery of Kubernetes cluster scaling, custom GLSL lighting shaders, and low-level memory optimizations.',
      badge: 'SYSTEMS',
    },
    documenting: {
      title: 'Open Source Guides & Free Coding Tutorials',
      description:
        'Structuring step-by-step programming roadmaps to empower aspiring developers and school students across India.',
      badge: 'EDUCATION',
    },
  },
  metrics: [
    { label: 'NODE STATUS', value: 'OPERATIONAL', status: 'optimal' },
    { label: 'EDUCATION MISSION', value: 'ACTIVE_FREE', status: 'live' },
    { label: 'SYSTEM ENVIRONMENT', value: 'REACT 19 + VITE', status: 'active' },
    { label: 'COORDINATES', value: '22.98° N, 87.85° E', status: 'optimal' },
  ],
};
