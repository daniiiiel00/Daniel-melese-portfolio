import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/portfolioData";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { TechIcon } from "../ui/TechIcon";

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section
      id="projects"
      className="py-24 relative bg-transparent overflow-hidden"
    >
      {/* Semi-transparent backdrop overlay to allow continuous 3D world visibility */}
      <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/20 bg-slate-100/30 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>PROJECT GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-950 tracking-tight">
            Selected Works & Platforms
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base mt-4">
            Production marketplaces, e-learning systems, and commerce platforms
            with full-stack architectural ownership.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-900/60 dark:bg-slate-900/60 bg-white/80 border border-white/10 dark:border-white/10 border-slate-300 mt-8 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                filter === "all"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 dark:text-slate-400 text-slate-700 hover:text-white"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                filter === "featured"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 dark:text-slate-400 text-slate-700 hover:text-white"
              }`}
            >
              Featured Highlights
            </button>
          </div>
        </div>

        {/* ================= ASYMMETRIC 3D BENTO GALLERY (SLIDABLE ON MOBILE) ================= */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 pt-2 scroll-smooth md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-6 md:auto-rows-[340px] md:overflow-visible md:pb-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Asymmetric spans for 3D bento feeling on desktop
              const isLarge = index === 0; // First item is large panoramic
              const isMedium = index === 1 || index === 2; // Medium cards
              const colSpanClass = isLarge
                ? "lg:col-span-8 lg:row-span-2"
                : isMedium
                  ? "lg:col-span-4 lg:row-span-1"
                  : "lg:col-span-4 lg:row-span-1";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group relative rounded-3xl overflow-hidden border border-indigo-500/20 dark:border-indigo-500/20 border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 flex flex-col justify-end w-[85vw] max-w-[360px] sm:max-w-[420px] shrink-0 snap-center h-[420px] md:w-auto md:max-w-none md:shrink md:h-auto ${colSpanClass}`}
                >
                  {/* Background Image with 3D Depth Zoom */}
                  <div className="absolute inset-0 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:rotate-0.5 transition-transform duration-700 opacity-75 group-hover:opacity-90"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "./assets/images/bg.jpg";
                      }}
                    />
                    {/* Multi-stage gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  </div>

                  {/* Top Right Floating Action Links & Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    {project.featured ? (
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-indigo-600/90 text-white backdrop-blur-md shadow-lg border border-indigo-400/30">
                        Featured Production
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-900/80 text-cyan-300 border border-slate-700/60">
                        System Build
                      </span>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 bg-white text-white dark:text-white text-slate-900 hover:bg-cyan-500 hover:text-slate-950 transition-all backdrop-blur-md border border-white/20 shadow-lg group-hover:scale-110"
                        title="Open live system"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges with real TechIcons */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-950/80 text-slate-200 border border-slate-700/60 shadow-xs backdrop-blur-md"
                          >
                            <TechIcon name={tag} className="w-3.5 h-3.5" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-xs font-mono text-cyan-400/80">
          <span>← Swipe to explore all projects ({filteredProjects.length}) →</span>
        </div>

        {/* Footer Note */}
        {/* <div className="text-center mt-12 text-xs text-slate-500 flex items-center justify-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>
            Asymmetric 3D bento gallery featuring active production client and
            startup platforms.
          </span>
        </div> */}
      </div>
    </section>
  );
};
