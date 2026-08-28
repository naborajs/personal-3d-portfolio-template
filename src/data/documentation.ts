/**
 * Knowledge Base & Technical Documentation Archive
 * Naboraj Sarkar | NS CODEX
 */

export interface DocArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Automation' | 'Systems' | 'Frontend & 3D' | 'Education';
  date: string;
  lastUpdated: string;
  readTime: string;
  status: 'PUBLISHED' | 'ACTIVE LOG' | 'CORE GUIDE';
  summary: string;
  keyTakeaways: string[];
  content: {
    sectionTitle: string;
    body: string;
    codeSnippet?: string;
  }[];
}

export const DOCUMENTATION_ARTICLES: DocArticle[] = [
  {
    id: 'doc-01',
    slug: 'event-driven-bot-architecture',
    title: 'Architecting Resilient Bot Workflows with Telegram & Webhooks',
    category: 'Automation',
    date: '2025-01-15',
    lastUpdated: '2026-02-10',
    readTime: '6 min read',
    status: 'CORE GUIDE',
    summary:
      'A practical architectural blueprint for engineering reliable Telegram and WhatsApp bots that do not drop messages during high load or network fluctuations.',
    keyTakeaways: [
      'Prefer webhook ingestion with message queueing over long-polling for production environments.',
      'Implement deterministic schema validation before passing user messages to LLM pipelines.',
      'Structure state storage with Redis session caches to support seamless multi-step conversations.',
    ],
    content: [
      {
        sectionTitle: 'The Problem with Basic Polling',
        body:
          'Most beginner bot tutorials use continuous polling loops (`getUpdates`). While easy to prototype, polling creates latency spikes, wastes CPU cycles, and fails under concurrent load. A webhook-based ingestion server running behind a reverse proxy provides immediate push delivery and allows graceful auto-scaling.',
      },
      {
        sectionTitle: 'Ingestion & Queue Architecture',
        body:
          'When Telegram sends an update payload, the ingestion endpoint should immediately acknowledge with HTTP 200 OK and push the event into a Redis queue. Processing heavy logic (such as calling the OpenAI API or writing to a database) happens asynchronously in worker threads, preventing Telegram webhook timeouts.',
        codeSnippet: `// Express webhook handler with instant acknowledgement
app.post('/webhook/telegram', async (req, res) => {
  const update = req.body;
  res.status(200).send('OK'); // Acknowledge instantly
  
  await eventQueue.push('telegram_updates', {
    chatId: update.message?.chat?.id,
    text: update.message?.text,
    timestamp: Date.now()
  });
});`,
      },
      {
        sectionTitle: 'Resilience and Fallback Strategies',
        body:
          'When external AI APIs experience latency or rate limits, the bot must inform the user politely rather than hanging indefinitely. Implementing exponential backoff retries and structured error boundaries guarantees a smooth user experience.',
      },
    ],
  },
  {
    id: 'doc-02',
    slug: 'fluid-glass-ui-motion-react',
    title: 'Crafting High-Performance Smoked Glass & 3D Motion in React',
    category: 'Frontend & 3D',
    date: '2024-11-20',
    lastUpdated: '2026-01-18',
    readTime: '8 min read',
    status: 'CORE GUIDE',
    summary:
      'How to build cinematic dark glassmorphism and subtle 3D hover physics without degrading browser frame rates or creating mobile lag.',
    keyTakeaways: [
      'Limit backdrop-filter blur usage to a structured 3-tier hierarchy instead of blurring every DOM element.',
      'Use CSS hardware transforms (`translate3d`, `rotateX`, `scale`) driven by Framer Motion springs.',
      'Always implement `@media (prefers-reduced-motion: reduce)` and optimize canvas particle density for mobile.',
    ],
    content: [
      {
        sectionTitle: 'The Cost of Unconstrained Glassmorphism',
        body:
          'Applying `backdrop-filter: blur(20px)` to dozens of overlapping cards causes severe GPU fill-rate bottlenecks, especially on mobile devices. A disciplined design system uses a 3-tier hierarchy: Level 1 (transparent ambient), Level 2 (cards with subtle blur and internal linear highlights), and Level 3 (elevated navigation/overlays).',
      },
      {
        sectionTitle: 'Physics-Driven Hover without React Re-renders',
        body:
          'By leveraging Framer Motion\'s `useMotionValue` and `useTransform`, cursor coordinates are mapped directly to hardware-accelerated CSS transforms on the render layer without triggering continuous React component re-renders.',
        codeSnippet: `const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);
const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

// Render layer applies transforms via GPU compositor
<motion.div style={{ rotateX, rotateY, perspective: 1000 }} />`,
      },
      {
        sectionTitle: 'Responsive & Accessibility Guardrails',
        body:
          'On touch devices, hover-based 3D tilt effects must be disabled in favor of tactile tap scale responses. For users requesting reduced motion, transitions collapse to instant or subtle opacity fades.',
      },
    ],
  },
  {
    id: 'doc-03',
    slug: 'icse-to-modern-fullstack-roadmap',
    title: 'From ICSE Computer Science to Modern Full-Stack & AI Systems',
    category: 'Education',
    date: '2024-08-12',
    lastUpdated: '2025-12-05',
    readTime: '5 min read',
    status: 'PUBLISHED',
    summary:
      'Reflections on bridging traditional Indian school computer science (Java, OOP, algorithms) into modern distributed web development and AI experimentation.',
    keyTakeaways: [
      'Strong OOP fundamentals and algorithmic thinking taught in ICSE computer science translate directly into clean TypeScript architecture.',
      'Self-directed project building is essential to bridge the gap between theoretical exams and real-world software deployment.',
      'Sharing learning logs publicly empowers peers and reinforces deep technical comprehension.',
    ],
    content: [
      {
        sectionTitle: 'The Rigour of the ICSE Foundation',
        body:
          'The ICSE board computer science curriculum emphasizes disciplined syntax, memory trace tables, object-oriented concepts, and control flow in Java. This academic grounding builds intuition for data structures, edge-case analysis, and algorithmic efficiency.',
      },
      {
        sectionTitle: 'Transitioning to Modern Web & Systems',
        body:
          'Moving from standalone Java console applications to event-driven architectures (Node.js, React, APIs) requires understanding asynchronous programming, microservices, and network protocols. The core principles of abstraction and modularity remain unchanged.',
      },
      {
        sectionTitle: 'The Mission: Free Education for Indian Builders',
        body:
          'Through NS CODEX, the goal is to make these advanced engineering topics accessible to every curious student across India without monetary barriers, encouraging practical building over passive memorization.',
      },
    ],
  },
  {
    id: 'doc-04',
    slug: 'zero-latency-api-orchestration-redis',
    title: 'Zero-Latency API Orchestration with Redis & Node.js',
    category: 'Systems',
    date: '2024-05-18',
    lastUpdated: '2025-10-14',
    readTime: '7 min read',
    status: 'ACTIVE LOG',
    summary:
      'Strategies for decoupling database bottlenecks and caching critical session data using in-memory data structures.',
    keyTakeaways: [
      'Employ cache-aside and write-through patterns based on data volatility.',
      'Use Redis hashes and sorted sets for low-latency session and leaderboard indexing.',
      'Design clean cache invalidation strategies to avoid stale state propagation.',
    ],
    content: [
      {
        sectionTitle: 'Why Database Queries Cripple Response Times',
        body:
          'Directly querying relational or document databases for every inbound request quickly exhausts connection pools and increases latency. In-memory caching with Redis delivers sub-millisecond lookups for repeated reads.',
      },
      {
        sectionTitle: 'Implementation Pattern',
        body:
          'Cache-aside logic checks Redis first; if a cache miss occurs, the data is retrieved from the primary database and populated into Redis with an appropriate TTL (Time To Live).',
        codeSnippet: `async function getCachedProfile(userId: string) {
  const cached = await redis.get(\`user:\${userId}\`);
  if (cached) return JSON.parse(cached);

  const profile = await db.users.findById(userId);
  await redis.setex(\`user:\${userId}\`, 3600, JSON.stringify(profile));
  return profile;
}`,
      },
    ],
  },
];
