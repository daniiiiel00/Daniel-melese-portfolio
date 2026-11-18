import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, Server, Database, GitBranch, Cpu, CheckCircle } from 'lucide-react';
import { TechIcon } from '../ui/TechIcon';

interface ArchitectureLayer {
  id: string;
  title: string;
  category: string;
  icon: typeof Layers;
  summary: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  details: string[];
}

const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'frontend',
    title: 'Edge & Reactive Client Tier',
    category: 'Presentation Layer',
    icon: Cpu,
    summary: 'SSR + CSR hybrid rendering with Three.js acceleration, route code-splitting, and sub-100ms FCP.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    metrics: [
      { label: 'Target FCP', value: '< 0.8s' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Asset Bundling', value: 'Vite & Tree-shaking' },
    ],
    details: [
      'Engineered multi-role responsive dashboards for students, parents, and instructors in Addis Chapter.',
      'Implemented WebGL & Three.js canvas memory cleanup to ensure steady 60fps across mobile and desktop devices.',
      'Strict TypeScript interfaces enforcing schema validation from REST endpoints to UI components.'
    ]
  },
  {
    id: 'api',
    title: 'High-Concurrency API Gateway & Auth',
    category: 'Application Layer',
    icon: Server,
    summary: 'Robust RESTful API architecture with stateless JWT security, role-based access control (RBAC), and queue workers.',
    technologies: ['Laravel', 'PHP', 'Node.js', 'REST API', 'JWT'],
    metrics: [
      { label: 'Auth Standard', value: 'JWT & OAuth2' },
      { label: 'Rate Limiting', value: 'Token Bucket' },
      { label: 'API Uptime', value: '99.9%' },
    ],
    details: [
      'Built multi-tenant classifieds API supporting vehicles, real-estate, and merchant accounts on SeeNBuy.',
      'Implemented transactional payment webhook handlers for commercial Ethiopian banking receipt validation.',
      'Filament admin panels with granular role permissions and audit logging.'
    ]
  },
  {
    id: 'database',
    title: 'Relational & Scalable Data Engine',
    category: 'Persistence Layer',
    icon: Database,
    summary: 'Normalized relational schemas with strict foreign constraints, composite indexing, and transactional isolation.',
    technologies: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase', 'Redis'],
    metrics: [
      { label: 'Schema Integrity', value: '3NF Normalized' },
      { label: 'Query Latency', value: '< 15ms' },
      { label: 'Backup Cadence', value: 'Automated Daily' },
    ],
    details: [
      'Designed e-commerce schema for Ahadu Gebeya covering product variants, stock reservations, order tracking, and cart sessions.',
      'Optimized slow queries via composite B-tree indexes and query execution plan analysis.',
      'Zero data loss migrations with automated rollback procedures.'
    ]
  },
  {
    id: 'devops',
    title: 'Automated CI/CD & Cloud Orchestration',
    category: 'Infrastructure Layer',
    icon: GitBranch,
    summary: 'GitOps pipeline with automated linting, test suites, Docker containers, and Nginx reverse proxies on Linux servers.',
    technologies: ['Docker', 'Linux', 'GitHub Actions', 'Nginx', 'Vercel'],
    metrics: [
      { label: 'Deploy Pipeline', value: 'GitHub Actions' },
      { label: 'Deployment Time', value: '< 2.5 mins' },
      { label: 'SSL Security', value: 'A+ TLS 1.3' },
    ],
    details: [
      'Engineered automated CI/CD pipelines deploying directly to Linux servers upon verified PR merge.',
      'Configured Nginx reverse proxy with gzip/brotli compression, HTTP/2, and aggressive cache headers.',
      'Hardened Linux server configuration with UFW firewalls, SSH key authorization, and fail2ban.'
    ]
  }
];

export const ArchitectureBlueprint = () => {
  const [activeLayer, setActiveLayer] = useState<string>('frontend');
  const current = architectureLayers.find((l) => l.id === activeLayer) || architectureLayers[0];

  return (
    <section id="architecture" className="py-24 relative bg-transparent overflow-hidden">
      {/* Semi-transparent backdrop overlay to allow continuous 3D world visibility */}
      <div className="absolute inset-0 bg-slate-950/25 dark:bg-slate-950/25 light:bg-slate-100/35 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>SENIOR ENGINEERING BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-950 tracking-tight">
            End-to-End System Architecture
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            How I architect, engineer, and deploy resilient enterprise web applications from database kernels to interactive 3D client interfaces.
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Layer Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Select Architecture Tier
            </p>
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              const isSelected = layer.id === activeLayer;

              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/90 border-cyan-400/60 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                      : 'bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/70 border-slate-800/80 dark:border-slate-800/80 light:border-slate-300/80 hover:border-slate-700'
                  }`}
                >
                  {/* Active Indicator Light */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-cyan-400" />
                  )}

                  <div
                    className={`p-3 rounded-xl shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-400 dark:text-cyan-400 light:text-indigo-600'
                        : 'bg-slate-900 dark:bg-slate-900 light:bg-slate-200 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-cyan-400 dark:text-cyan-400 light:text-indigo-600 font-semibold uppercase">
                        {layer.category}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 mt-1">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 line-clamp-2">
                      {layer.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep Knowledge Terminal Screen */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      sys/arch/{current.id}.spec.ts
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    VERIFIED IN PRODUCTION
                  </span>
                </div>

                {/* Title & Core Philosophy */}
                <h4 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                  {current.title}
                </h4>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-2 leading-relaxed">
                  {current.summary}
                </p>

                {/* Tech Badges with real tech icons */}
                <div className="mt-5">
                  <p className="text-xs font-mono uppercase text-slate-400 mb-2">Key Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {current.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300"
                      >
                        <TechIcon name={tech} className="w-4 h-4" />
                        <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics Cards */}
                <div className="grid grid-cols-3 gap-3 my-6">
                  {current.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-center"
                    >
                      <span className="text-base sm:text-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        {metric.value}
                      </span>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Deep Architectural Implementations */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-mono uppercase text-slate-400">
                    Production Implementation Highlights
                  </p>
                  <ul className="space-y-2.5">
                    {current.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
