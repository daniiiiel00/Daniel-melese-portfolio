import { motion } from "framer-motion";
import { Mail, Download, ArrowRight, Quote } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { TechIcon } from "../ui/TechIcon";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent transition-colors duration-500">
      {/* Brand Cyan & Indigo Radial Atmospheric Lighting */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating 3D Geometric Crystal Accents */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 8, -6, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-8 sm:right-16 pointer-events-none z-10 hidden sm:block opacity-75"
      >
        <div className="relative w-20 h-28 bg-gradient-to-br from-indigo-500/30 via-cyan-500/20 to-transparent backdrop-blur-md rounded-2xl border border-indigo-400/30 shadow-2xl shadow-indigo-500/20 transform rotate-12 flex items-center justify-center">
          <div className="w-8 h-14 bg-gradient-to-t from-cyan-400/40 to-indigo-300/30 rounded-lg transform -skew-x-12" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [12, -12, 12],
          rotate: [0, -10, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-16 left-6 sm:left-12 pointer-events-none z-10 hidden md:block opacity-60"
      >
        <div className="relative w-24 h-24 bg-gradient-to-tr from-cyan-600/25 via-indigo-400/15 to-transparent backdrop-blur-md rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 transform -rotate-12" />
      </motion.div>

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[78vh]">
        {/* Left Column: Clean Typography, Action Buttons & Testimonial Card */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300">
              Hey I am
            </span>
            <span className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
              Daniel
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 ml-2 font-semibold">
              Full Stack
            </span>
          </motion.div>

          {/* Large Clean Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.08] mb-5"
          >
            Full Stack <br />
            <span className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Web Developer
            </span>
          </motion.h1>

          {/* Clean, short tagline (no heavy wall of text) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg mb-8 leading-relaxed font-normal"
          >
            I architect high-performance web systems and develop modern,
            reactive 3D interfaces to bring digital platforms to life.
          </motion.p>

          {/* Clean Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3.5 mb-10"
          >
            {/* Hire Me Pill Button */}
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-600/30 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Direct Email Envelope Button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-white/80 dark:bg-slate-900/40 hover:bg-slate-200 dark:hover:bg-slate-800/60 border border-slate-300 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            </a>

            {/* Download CV */}
            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 dark:bg-slate-900/40 hover:bg-slate-200 dark:hover:bg-slate-800/60 border border-slate-300 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all duration-200 hover:scale-105 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Testimonial / Social Proof Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-sm rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-indigo-500/20 p-5 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 mb-2">
              <Quote className="w-4 h-4 fill-cyan-500 dark:fill-cyan-400" />
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">
              "Working with Daniel was exceptional, he delivered our platform
              end-to-end with high quality and speed."
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px] shadow-sm">
                <img
                  src="./assets/images/old.jpg"
                  alt="Partner"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "./assets/images/profile.jpg";
                  }}
                />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  Engineering Partner
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  CDIWork / US Software Client
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Transparent Portrait with Orbital Radar Rings & Floating Tech Stacks */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px]">
          {/* Concentric Orbital Radar Rings behind portrait */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ring 1 - Outer */}
            <div className="w-[360px] sm:w-[480px] lg:w-[560px] h-[360px] sm:h-[480px] lg:h-[560px] rounded-full border border-indigo-400/25 dark:border-indigo-500/20 absolute animate-spin-slow" />

            {/* Ring 2 - Middle */}
            <div className="w-[280px] sm:w-[380px] lg:w-[440px] h-[280px] sm:h-[380px] lg:h-[440px] rounded-full border border-cyan-400/30 dark:border-cyan-500/25 absolute" />

            {/* Ring 3 - Inner glowing */}
            <div className="w-[200px] sm:w-[280px] lg:w-[320px] h-[200px] sm:h-[280px] lg:h-[320px] rounded-full border border-indigo-500/40 dark:border-indigo-400/35 absolute bg-indigo-500/10 blur-[1px]" />
          </div>

          {/* Central Portrait of Daniel with transparent mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-[280px] sm:w-[360px] lg:w-[420px] flex items-center justify-center"
          >
            <div className="relative group">
              {/* Cyan/Indigo aura glow behind the portrait */}
              <div className="absolute -inset-4 bg-gradient-to-t from-indigo-600/30 via-cyan-500/20 to-transparent rounded-full blur-2xl opacity-75" />

              <img
                src="./assets/images/profile-transparent.png"
                alt="Daniel Melese"
                className="relative z-10 w-full h-auto object-contain max-h-[480px] drop-shadow-[0_20px_35px_rgba(79,70,229,0.35)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "./assets/images/profile.jpg";
                }}
              />
            </div>
          </motion.div>

          {/* Floating Tech Stack Badges (Orbital Levitation) */}

          {/* 1. React (Top-Right) */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              x: [4, -4, 4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-4 sm:right-12 z-20"
          >
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-cyan-500/30 shadow-xl shadow-cyan-950/20 backdrop-blur-md hover:scale-110 transition-transform">
              <TechIcon name="react" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-900 dark:text-white hidden sm:inline">
                React.js
              </span>
            </div>
          </motion.div>

          {/* 2. TypeScript (Middle-Right) */}
          <motion.div
            animate={{
              y: [8, -8, 8],
              x: [-3, 3, -3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/2 -right-2 sm:right-4 z-20 -translate-y-1/2"
          >
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-blue-500/30 shadow-xl shadow-blue-950/20 backdrop-blur-md hover:scale-110 transition-transform">
              <TechIcon name="typescript" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-900 dark:text-white hidden sm:inline">
                TypeScript
              </span>
            </div>
          </motion.div>

          {/* 3. Laravel / PHP (Top-Left) */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-4, 4, -4],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-12 left-2 sm:left-8 z-20"
          >
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-indigo-500/30 shadow-xl shadow-indigo-950/20 backdrop-blur-md hover:scale-110 transition-transform">
              <TechIcon name="laravel" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-900 dark:text-white hidden sm:inline">
                Laravel
              </span>
            </div>
          </motion.div>

          {/* 4. Node.js (Bottom-Left) */}
          <motion.div
            animate={{
              y: [6, -10, 6],
              x: [3, -3, 3],
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-16 left-4 sm:left-12 z-20"
          >
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-emerald-500/30 shadow-xl shadow-emerald-950/20 backdrop-blur-md hover:scale-110 transition-transform">
              <TechIcon name="node" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-900 dark:text-white hidden sm:inline">
                Node.js
              </span>
            </div>
          </motion.div>

          {/* 5. Tailwind CSS (Bottom-Right) */}
          <motion.div
            animate={{
              y: [-7, 9, -7],
              x: [-4, 4, -4],
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute bottom-12 right-2 sm:right-10 z-20"
          >
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-cyan-500/30 shadow-xl shadow-cyan-950/20 backdrop-blur-md hover:scale-110 transition-transform">
              <TechIcon name="tailwind" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-900 dark:text-white hidden sm:inline">
                Tailwind CSS
              </span>
            </div>
          </motion.div>

          {/* 6. Three.js / 3D (Floating Top-Center) */}
          <motion.div
            animate={{
              y: [-6, 8, -6],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-indigo-600/30 border border-cyan-400/40 backdrop-blur-md shadow-lg">
              <TechIcon
                name="three"
                className="w-4 h-4 text-cyan-500 dark:text-cyan-300"
              />
              <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-300">
                Three.js 3D
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
