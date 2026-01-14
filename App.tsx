
import React, { useState, useCallback, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Cpu, 
  Layers, 
  Zap, 
  Terminal,
  Rocket,
  ShieldCheck,
  FileCode,
  Activity,
  Database,
  Smartphone,
  Eye,
  Command,
  Globe,
  Share2,
  Mail,
  ExternalLink,
  Code2
} from 'lucide-react';

/**
 * NS DEVSPACE PROTOCOL v10.0 - THE ULTIMATE AUTHORITY NODE
 * ARCHITECT: NABORAJ SARKAR
 */
const CONFIG = {
  identity: {
    name: "Naboraj Sarkar",
    tagline: "Systems Architect & Tech Innovator",
    location: "West Bengal, India",
    logo: "https://storage.googleapis.com/static.aistudio.google.com/content/file-01jmd645zrebt008p51t6p8j2p",
    repo: "https://github.com/naborajs/personal-3d-portfolio-template/tree/main"
  },
  socials: [
    { name: 'Github', icon: <Github size={20} />, url: "https://github.com/naborajs" },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: "https://linkedin.com/in/naboraj-sarkar" },
    { name: 'Instagram', icon: <Instagram size={20} />, url: "https://instagram.com/naborajs" },
    { name: 'X', icon: <Twitter size={20} />, url: "https://x.com/NSGAMMING699" }
  ]
};

const CATEGORIES = ["All", "Automation", "Systems", "Interface"];

const PROTOCOL_REGISTRY = [
  {
    id: "SYS-01",
    category: "Systems",
    title: "Core Architecture",
    description: "Developing high-availability systems with 99.9% uptime logic. Focused on scalable microservices and robust data flow.",
    icon: <Database className="text-cyan-400" size={24} />,
    purpose: "Backbone infrastructure for global digital nodes.",
    tags: ["Node.js", "Docker", "PostgreSQL"]
  },
  {
    id: "AUT-02",
    category: "Automation",
    title: "Neuro-Botics",
    description: "Custom intelligent bots for Telegram and WhatsApp that handle complex business workflows and customer interactions.",
    icon: <Cpu className="text-[#00BFA6]" size={24} />,
    purpose: "Reducing human overhead by 85% through smart logic.",
    tags: ["Python", "AI", "Webhooks"]
  },
  {
    id: "INT-03",
    category: "Interface",
    title: "Cinematic UI",
    description: "Crafting visually arresting experiences using Three.js and Framer Motion for high-conversion landing pages.",
    icon: <Eye className="text-violet-500" size={24} />,
    purpose: "Premium digital storytelling for modern brands.",
    tags: ["React", "Three.js", "GSAP"]
  },
  {
    id: "AUT-04",
    category: "Automation",
    title: "Workflow Synapse",
    description: "Seamlessly connecting disparate platforms (CRM, Slack, Email) into a single unified automation pipeline.",
    icon: <Zap className="text-amber-400" size={24} />,
    purpose: "Eliminating digital friction across organizations.",
    tags: ["Zapier", "Make", "Custom API"]
  },
  {
    id: "SYS-05",
    category: "Systems",
    title: "Cloud Forge",
    description: "Optimized serverless deployments on Vercel and AWS, ensuring global reach with edge computing.",
    icon: <Globe className="text-[#00BFA6]" size={24} />,
    purpose: "Ensuring zero-latency performance for users everywhere.",
    tags: ["Edge", "Serverless", "AWS"]
  },
  {
    id: "INT-06",
    category: "Interface",
    title: "App Genesis",
    description: "Cross-platform mobile applications that prioritize smooth performance and intuitive user journeys.",
    icon: <Smartphone className="text-pink-500" size={24} />,
    purpose: "Direct-to-user engagement tools for emerging startups.",
    tags: ["React Native", "Expo", "Firebase"]
  }
];

const TEMPORAL_LOGS = [
  { year: "2021", title: "Genesis Session", text: "Initiated first terminal environment. Decoded the fundamentals of logical flow.", icon: <Terminal /> },
  { year: "2022", title: "Structural Shift", text: "Mastered full-stack patterns. Built systems capable of handling production load.", icon: <Layers /> },
  { year: "2023", title: "Metallic Brand", text: "The NS identity was forged in chrome and teal. Defined the aesthetic of high-end tech.", icon: <Command /> },
  { year: "2024", title: "Global Node", text: "NS DevSpace scaled to serve international clients with automated digital solutions.", icon: <Rocket /> }
];

const ProtocolCard = ({ item }: { item: typeof PROTOCOL_REGISTRY[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-[#00BFA6]/40 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
        <Share2 size={48} className="rotate-12" />
      </div>
      
      <div className="flex justify-between items-start mb-8">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#00BFA6]/10 group-hover:scale-110 transition-all duration-500 text-[#00BFA6]">
          {item.icon}
        </div>
        <span className="mono text-[10px] text-gray-600 font-black tracking-[0.2em]">{item.id}</span>
      </div>

      <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#00BFA6] transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">
        {item.description}
      </p>
      
      <div className="space-y-4 pt-6 border-t border-white/5">
        <div className="flex items-start gap-3">
          <Activity size={14} className="text-[#00BFA6] mt-1 shrink-0" />
          <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 leading-tight">{item.purpose}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[8px] mono px-2 py-1 rounded-md bg-white/5 text-gray-500 border border-white/5">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredRegistry = useMemo(() => 
    activeFilter === "All" ? PROTOCOL_REGISTRY : PROTOCOL_REGISTRY.filter(i => i.category === activeFilter),
  [activeFilter]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00BFA6]/30 overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 40, repeat: Infinity }}
          className="absolute w-[120vw] h-[120vw] top-[-60%] left-[-40%] bg-gradient-to-br from-[#00BFA6]/10 to-transparent blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }} 
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute w-[100vw] h-[100vw] bottom-[-50%] right-[-30%] bg-gradient-to-tl from-[#7C3AED]/5 to-transparent blur-[150px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] via-cyan-400 to-violet-600 origin-left z-[200]" style={{ scaleX }} />

      <header className="fixed top-0 left-0 right-0 z-[150] py-6 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center glass rounded-full px-4 md:px-8 py-3 border-white/10">
          <a href="#" className="flex items-center gap-4 group">
            <img src={CONFIG.identity.logo} className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-500" alt="NS Logo" />
            <span className="font-black uppercase tracking-tighter text-xs hidden sm:inline-block">
              {CONFIG.identity.name.split(' ')[0]} <span className="text-[#00BFA6]">{CONFIG.identity.name.split(' ')[1]}</span>
            </span>
          </a>
          
          <div className="flex items-center gap-4 md:gap-10">
            <nav className="flex gap-4 md:gap-10 text-[9px] font-black tracking-[0.4em] uppercase text-gray-400">
              <a href="#registry" className="hover:text-[#00BFA6] transition-colors">Registry</a>
              <a href="#history" className="hover:text-[#00BFA6] transition-colors">Logs</a>
            </nav>
            
            <a 
              href={CONFIG.identity.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition-all group/source"
            >
              <Code2 size={14} className="text-[#00BFA6] group-hover/source:text-black" />
              <span className="text-[9px] font-black uppercase tracking-widest">Source Code</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 space-y-96 pt-64 pb-32">
        <section className="relative min-h-[60vh] flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-[#00BFA6]/30">
              <ShieldCheck size={14} className="text-[#00BFA6]" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase mono text-[#00BFA6]">V10.0_System_Authority</span>
            </div>
            
            <h1 className="text-8xl md:text-[14rem] font-black tracking-tighter leading-[0.75] select-none">
              NABORAJ<br/>
              <span className="text-gradient uppercase">SARKAR</span>
            </h1>
            
            <p className="text-2xl md:text-4xl text-gray-500 font-light max-w-4xl leading-tight">
              An <span className="text-white font-medium italic underline underline-offset-8 decoration-[#00BFA6]">architectural node</span> synthesizing high-end logic with cinematic automation systems.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="px-14 py-7 bg-white text-black rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-[#00BFA6] hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-white/5">Establish Sync</button>
              <div className="flex gap-3">
                {CONFIG.socials.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all border-white/10">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden xl:block pointer-events-none opacity-[0.02]">
            <img src={CONFIG.identity.logo} className="w-[45rem] object-contain grayscale" alt="Watermark" />
          </div>
        </section>

        <section id="registry" className="space-y-24 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-6">
              <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#00BFA6]" /> Audit_Registry
              </span>
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">Protocols</h2>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-2 rounded-2xl border border-white/5 backdrop-blur-md">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-8 py-3 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all ${activeFilter === cat ? 'bg-white text-black shadow-lg shadow-white/10' : 'text-gray-500 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredRegistry.map(item => (
                <motion.div layout key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}>
                  <ProtocolCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section id="history" className="space-y-32 scroll-mt-32">
          <div className="text-center space-y-6">
            <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase">/// Historical_Sync</span>
            <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none">Timeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 hidden lg:block z-0" />
            {TEMPORAL_LOGS.map((log, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-12 rounded-[3.5rem] border-white/5 hover:border-[#00BFA6]/30 transition-all z-10 group">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[#00BFA6] font-black text-3xl mono italic">{log.year}</span>
                  <div className="p-4 rounded-2xl bg-white/5 text-gray-600 group-hover:text-white transition-colors duration-500">
                    {log.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:translate-x-2 transition-transform">{log.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{log.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="interface" className="space-y-48">
          <div className="glass p-16 md:p-32 rounded-[5rem] border-white/10 relative overflow-hidden group text-center space-y-16">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#00BFA6]/10 to-transparent blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <div className="space-y-6 relative z-10">
               <h2 className="text-7xl md:text-[11rem] font-black uppercase tracking-tighter leading-none">Sync_Up</h2>
               <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">Available for architectural consultations, automation deployments, and high-fidelity interface engineering.</p>
             </div>
             <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
               <a href="mailto:contact@nsgamming.xyz" className="px-16 py-8 bg-[#00BFA6] text-black rounded-full font-black uppercase text-xs tracking-[0.4em] hover:bg-white transition-all shadow-2xl shadow-[#00BFA6]/20 flex items-center justify-center gap-4">
                 <Mail size={18} /> Establish Contact
               </a>
               <a href={CONFIG.identity.repo} target="_blank" className="px-16 py-8 glass rounded-full font-black uppercase text-xs tracking-[0.4em] hover:bg-white hover:text-black transition-all border-white/10 flex items-center justify-center gap-4">
                 <FileCode size={18} /> Protocol Source
               </a>
             </div>
          </div>

          <footer className="pt-32 pb-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32 text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 mono">
             <div className="flex items-center gap-8">
               <div className="relative">
                 <img src={CONFIG.identity.logo} className="w-12 h-12 object-contain grayscale opacity-40 hover:opacity-100 transition-opacity" alt="NS Logo" />
                 <div className="absolute inset-0 bg-[#00BFA6]/10 blur-xl rounded-full" />
               </div>
               <div className="space-y-2">
                 <p className="text-white">© {new Date().getFullYear()} {CONFIG.identity.name}</p>
                 <p className="text-[#00BFA6]/40 flex items-center gap-2">
                   <Activity size={10} className="animate-pulse" /> Status: System_Optimal
                 </p>
               </div>
             </div>
             <div className="grid grid-cols-2 md:flex gap-16 md:gap-24 w-full md:w-auto">
                <div className="space-y-4">
                  <h5 className="text-[#00BFA6]/60">Connectivity</h5>
                  <nav className="flex flex-col gap-3">
                    {CONFIG.socials.map(s => (
                      <a key={s.name} href={s.url} className="text-gray-400 hover:text-white transition-colors">{s.name}</a>
                    ))}
                  </nav>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[#00BFA6]/60">Localization</h5>
                  <p className="text-gray-400">{CONFIG.identity.location}</p>
                  <p className="text-[8px] opacity-30">Lat: 22.9868 / Lon: 87.8550</p>
                </div>
             </div>
             <div className="flex flex-col items-end gap-4 w-full md:w-auto mt-8 md:mt-0">
               <a href="https://github.com/naborajs" target="_blank" className="text-white flex items-center gap-4 hover:text-[#00BFA6] transition-all group">
                 <span>Architect: Naboraj Sarkar</span>
                 <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </a>
               <div className="flex items-center gap-3 opacity-20">
                 <div className="w-10 h-[1px] bg-white" />
                 <span>Stable_Node_01</span>
               </div>
             </div>
          </footer>
        </section>
      </main>
      <div className="fixed inset-0 pointer-events-none z-[300] opacity-[0.03] noise-mask" />
    </div>
  );
}
