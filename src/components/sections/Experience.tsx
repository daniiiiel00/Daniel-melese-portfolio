import { motion } from "framer-motion";
import { experiences } from "../../data/portfolioData";
import {
  Calendar,
  MapPin,
  CheckCircle,
  Rocket,
  GitBranch,
  GitCommit,
} from "lucide-react";
import { TechIcon } from "../ui/TechIcon";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 relative bg-transparent overflow-hidden"
    >
      {/* Semi-transparent backdrop overlay to reveal 3D scene */}
      <div className="absolute inset-0 bg-slate-950/25 dark:bg-slate-950/25 light:bg-slate-100/35 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-mono font-semibold mb-3">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>BRANCHING CAREER TREE FLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-950 tracking-tight">
            Engineering Journey & Tree Flow
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            An organic, branching progression of shipped platforms, startup
            leadership, and enterprise engineering roles.
          </p>
        </div>

        {/* Tree Flow Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Tree Trunk (Glowing Spine) */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-cyan-400 to-purple-600 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            {/* Animated Energy Pulse flowing down tree */}
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="w-2 h-16 -ml-0.5 bg-gradient-to-b from-transparent via-cyan-300 to-transparent blur-xs rounded-full"
            />
          </div>

          <div className="space-y-16 relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node on the Trunk */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-white border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40 group cursor-pointer"
                    >
                      {exp.type === "Founder" ? (
                        <Rocket className="w-5 h-5 text-cyan-400 animate-pulse" />
                      ) : (
                        <GitCommit className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                      )}
                    </motion.div>
                  </div>

                  {/* Horizontal Branch Connector for Desktop */}
                  <div
                    className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-1/2 pointer-events-none z-10 ${
                      isEven ? "left-1/2" : "right-1/2"
                    }`}
                  >
                    <svg className="w-full h-8 overflow-visible" fill="none">
                      <path
                        d={
                          isEven
                            ? "M 0 16 H 40 Q 60 16 70 16"
                            : "M 100% 16 H calc(100% - 40px) Q calc(100% - 60px) 16 calc(100% - 70px) 16"
                        }
                        stroke="url(#tree-grad)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <defs>
                        <linearGradient
                          id="tree-grad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Content Card (Branch Leaf) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`w-full sm:w-[45%] pl-12 sm:pl-0 ${
                      isEven ? "sm:text-right sm:pr-8" : "sm:pl-8"
                    }`}
                  >
                    <div className="bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200 hover:border-cyan-400/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 group">
                      {/* Top Header */}
                      <div
                        className={`flex flex-col gap-2 mb-4 pb-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 ${
                          isEven ? "sm:items-end" : "sm:items-start"
                        }`}
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-950 group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h3>
                          {exp.type === "Founder" && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                              Startup Founder
                            </span>
                          )}
                        </div>

                        <h4 className="text-sm font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
                          {exp.company}
                        </h4>

                        <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {exp.period}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 text-left">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stack Pills with authentic TechIcons */}
                      <div
                        className={`flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {exp.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-medium bg-slate-950/70 dark:bg-slate-950/70 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-xs"
                          >
                            <TechIcon name={tech} className="w-3.5 h-3.5" />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
