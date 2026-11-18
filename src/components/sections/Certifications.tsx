import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolioData';
import { Trophy, Award, Medal, CheckCircle2 } from 'lucide-react';

const icons = [Trophy, Award, Medal, CheckCircle2];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative bg-transparent overflow-hidden">
      {/* Semi-transparent backdrop overlay to allow continuous 3D world visibility */}
      <div className="absolute inset-0 bg-slate-950/25 dark:bg-slate-950/25 light:bg-slate-100/35 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-indigo-600 font-mono font-semibold">
            Recognitions & Honors
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-950 mt-2 tracking-tight">
            Certifications & National Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base mt-4">
            Official government accreditations, international nanodegrees, and first-place skill championships.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isNationalWinner = index === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 border ${
                  isNationalWinner
                    ? 'bg-gradient-to-br from-indigo-500/20 via-slate-900/60 to-slate-900/60 dark:from-indigo-500/20 dark:via-slate-900/60 dark:to-slate-900/60 light:from-indigo-50/80 light:via-white/80 light:to-white/80 border-cyan-400/50 shadow-2xl shadow-cyan-500/10'
                    : 'bg-slate-900/40 dark:bg-slate-900/40 light:bg-white/80 border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3.5 rounded-2xl shrink-0 ${
                      isNationalWinner
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                        : 'bg-indigo-500/10 text-indigo-400 dark:text-indigo-400 light:text-indigo-600'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span
                        className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                          isNationalWinner
                            ? 'bg-cyan-400/20 text-cyan-300 dark:text-cyan-300 light:text-indigo-800 border border-cyan-400/40'
                            : 'bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-indigo-400 dark:text-indigo-400 light:text-indigo-600'
                        }`}
                      >
                        {item.highlight}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 mt-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                      {item.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
