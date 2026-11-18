import { motion } from "framer-motion";
import { personalInfo, education } from "../../data/portfolioData";
import { GraduationCap, Languages, CheckCircle2, Terminal } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-transparent"
    >
      {/* Semi-transparent backdrop overlay to allow continuous 3D world visibility */}
      <div className="absolute inset-0 bg-slate-950/25 dark:bg-slate-950/25 light:bg-slate-100/35 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-indigo-600 font-mono font-semibold">
            Background & Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-950 mt-2 tracking-tight">
            About Daniel Melese
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image with floating glow & tech card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative rounded-3xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200 p-2.5 overflow-hidden shadow-2xl backdrop-blur-md">
                <img
                  src="./assets/images/profile-transparent.png"
                  alt="Daniel Melese"
                  className="w-full h-[420px] object-cover rounded-2xl object-top group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "./assets/images/old.jpg";
                  }}
                />

                {/* Floating summary badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 dark:bg-slate-950/85 light:bg-white/95 backdrop-blur-xl border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200 p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                        Senior Full Stack & Systems Builder
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                        Addis Ababa, Ethiopia • 3+ Years Production
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-slate-300 dark:text-slate-300 light:text-slate-700 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>{personalInfo.summary}</p>
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
                Whether architecting database schemas from scratch in
                MySQL/PostgreSQL, engineering enterprise Laravel REST APIs,
                crafting fluid React & Three.js user interfaces, or
                orchestrating automated CI/CD deployment pipelines on Linux
                servers, I take immense pride in delivering resilient,
                high-speed software.
              </p>
            </div>

            {/* Highlights cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Education */}
              <div className="p-5 rounded-2xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/80 border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200 shadow-sm backdrop-blur-md">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-cyan-400 dark:text-cyan-400 light:text-indigo-600 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {education.degree}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                      {education.institution}
                    </p>
                    <span className="inline-block text-[11px] text-cyan-400 font-mono font-semibold mt-1.5">
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="p-5 rounded-2xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/80 border border-cyan-500/20 dark:border-cyan-500/20 light:border-slate-200 shadow-sm backdrop-blur-md">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 shrink-0">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      Spoken Languages
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <strong>English:</strong> Working Proficiency
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <strong>Amharic:</strong> Native
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick terminal / principles bar */}
            <div className="p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-200/80 border border-slate-800 dark:border-slate-800 light:border-slate-300 font-mono text-xs text-slate-400 dark:text-slate-400 light:text-slate-700 flex items-center gap-3 backdrop-blur-md">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Core values: Strict type safety, clean abstractions, high test
                coverage, end-to-end delivery.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
