import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../../data/portfolioData';
import { Trophy, Award, Medal, CheckCircle2, Eye, X, ExternalLink } from 'lucide-react';
import type { Certification } from '../../types';

const icons = [Trophy, Award, Medal, CheckCircle2];

export const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close modal on Escape key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

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
                className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 border flex flex-col justify-between ${
                  isNationalWinner
                    ? 'bg-gradient-to-br from-indigo-500/20 via-slate-900/60 to-slate-900/60 dark:from-indigo-500/20 dark:via-slate-900/60 dark:to-slate-900/60 light:from-indigo-50/80 light:via-white/80 light:to-white/80 border-cyan-400/50 shadow-2xl shadow-cyan-500/10'
                    : 'bg-slate-900/40 dark:bg-slate-900/40 light:bg-white/80 border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-200'
                }`}
              >
                <div>
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
                </div>

                {/* View Certificate Action Button */}
                {item.certificateImage && (
                  <div className="mt-5 pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-200/70 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(item)}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                        isNationalWinner
                          ? 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 dark:text-cyan-300 light:text-indigo-700 border border-cyan-400/30'
                          : 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 border border-indigo-500/20 dark:border-indigo-500/20 light:border-slate-300'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
                      Verified Award
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && selectedCert.certificateImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 dark:bg-slate-900/95 light:bg-white border border-cyan-500/30 dark:border-cyan-500/30 light:border-slate-300 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 dark:text-cyan-300 light:text-indigo-800 border border-cyan-400/40">
                      {selectedCert.highlight}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {selectedCert.date}
                    </span>
                  </div>
                  <h3
                    id="cert-modal-title"
                    className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 mt-1"
                  >
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {selectedCert.issuer}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-2xl bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 light:bg-slate-100 light:hover:bg-slate-200 text-slate-400 hover:text-white dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 transition-colors shrink-0"
                  aria-label="Close certificate modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="my-4 flex-1 flex items-center justify-center overflow-auto rounded-2xl bg-black/40 p-2 sm:p-4 border border-white/5">
                <img
                  src={selectedCert.certificateImage}
                  alt={selectedCert.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-2 flex items-center justify-between gap-3 text-xs text-slate-400">
                <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">ESC</kbd> or click outside to close</span>
                <a
                  href={selectedCert.certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Size</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
