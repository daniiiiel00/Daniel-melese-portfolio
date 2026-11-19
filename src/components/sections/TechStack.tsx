import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/portfolioData";
import { TechIcon } from "../ui/TechIcon";
import { Terminal, ChevronLeft, ChevronRight } from "lucide-react";

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  // Flatten all skills for the dual marquee
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToCategory = (categoryTitle: string, index: number) => {
    setActiveCategory(categoryTitle);
    if (sliderRef.current) {
      if (categoryTitle === "All") {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cards = sliderRef.current.children;
        if (cards[index]) {
          (cards[index] as HTMLElement).scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
          });
        }
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="tech-stack"
      className="py-24 relative bg-transparent overflow-hidden"
    >
      {/* Semi-transparent backdrop overlay to allow continuous 3D world visibility */}
      <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/20 bg-slate-100/30 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES & TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-950 tracking-tight">
            Technologies & Frameworks
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base mt-4">
            Curated tools, engines, and runtimes leveraged across 50+ delivered
            web systems.
          </p>
        </div>

        {/* ================= DUAL SLOW INFINITE SLIDING MARQUEE ================= */}
        <div className="mb-16 space-y-4 overflow-hidden relative py-4">
          {/* Gradient Edge Masks for soft fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-slate-950 dark:from-slate-950 from-slate-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-slate-950 dark:from-slate-950 from-slate-100 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Slides Left Smoothly & Slowly (duration 45s for gentle pacing) */}
          <div className="flex w-fit">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 100,
                repeat: Infinity,
              }}
              className="flex items-center gap-4 shrink-0"
            >
              {[...row1, ...row1, ...row1, ...row1].map((skill, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 bg-white/85 border border-indigo-500/20 dark:border-indigo-500/20 border-slate-300 backdrop-blur-md shadow-lg shadow-black/5 shrink-0 hover:scale-105 hover:border-cyan-400/50 transition-all duration-200 group"
                >
                  <TechIcon
                    name={skill.name}
                    className="w-6 h-6 group-hover:rotate-6 transition-transform"
                  />
                  <span className="text-sm font-bold text-white dark:text-white text-slate-900 whitespace-nowrap">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 dark:text-indigo-300 text-indigo-600 border border-indigo-500/30">
                    {skill.level}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Slides Right Smoothly & Slowly (duration 45s) */}
          <div className="flex w-fit">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 100,
                repeat: Infinity,
              }}
              className="flex items-center gap-4 shrink-0"
            >
              {[...row2, ...row2, ...row2, ...row2].map((skill, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 bg-white/85 border border-cyan-500/20 dark:border-cyan-500/20 border-slate-300 backdrop-blur-md shadow-lg shadow-black/5 shrink-0 hover:scale-105 hover:border-indigo-400/50 transition-all duration-200 group"
                >
                  <TechIcon
                    name={skill.name}
                    className="w-6 h-6 group-hover:-rotate-6 transition-transform"
                  />
                  <span className="text-sm font-bold text-white dark:text-white text-slate-900 whitespace-nowrap">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 dark:text-cyan-300 text-cyan-700 border border-cyan-500/30">
                    {skill.level}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ================= 4+ CATEGORY SELECTOR & SLIDER CONTROLS ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat, idx === 0 ? 0 : idx - 1)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105"
                    : "bg-slate-900/40 dark:bg-slate-900/40 bg-white/70 text-slate-400 dark:text-slate-400 text-slate-700 hover:text-white border border-slate-800 dark:border-slate-800 border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-slate-400 hidden md:inline-block mr-2">
              Slide Categories
            </span>
            <button
              onClick={() => scrollSlider("left")}
              className="p-2.5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all active:scale-95 shadow-md cursor-pointer"
              aria-label="Previous category card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="p-2.5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all active:scale-95 shadow-md cursor-pointer"
              aria-label="Next category card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slidable Big Category Cards Container */}
        <div className="relative">
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scroll-smooth select-none cursor-grab ${
              isDragging ? "cursor-grabbing active:cursor-grabbing" : ""
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="w-[88vw] sm:w-[560px] lg:w-[620px] shrink-0 snap-start bg-slate-900/40 dark:bg-slate-900/40 light:bg-white/75 border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-200 group/item shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 group-hover/item:scale-110 transition-transform">
                            <TechIcon name={skill.name} className="w-5 h-5" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover/item:text-white">
                            {skill.name}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                            skill.level === "Expert"
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : skill.level === "Senior"
                                ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                                : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>
                    Category {index + 1} of {skillCategories.length}
                  </span>
                  <span className="text-cyan-400/80"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {skillCategories.map((cat, idx) => (
            <button
              key={`dot-${cat.title}`}
              onClick={() => scrollToCategory(cat.title, idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === cat.title
                  ? "w-8 bg-gradient-to-r from-indigo-500 to-cyan-400"
                  : "w-2 bg-slate-700/60 hover:bg-slate-500"
              }`}
              aria-label={`Jump to ${cat.title}`}
            />
          ))}
        </div>

        {/* Footer note */}
        {/* <div className="flex items-center justify-center gap-2 mt-12 text-xs text-slate-500 font-mono">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>
            Smooth infinite dual-sliding marquee with 4+ categories and
            authentic brand icons.
          </span>
        </div> */}
      </div>
    </section>
  );
};
