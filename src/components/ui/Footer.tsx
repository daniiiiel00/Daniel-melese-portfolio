import { personalInfo } from '../../data/portfolioData';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent border-t border-indigo-500/10 py-12 text-slate-400 text-xs relative z-10 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-white dark:text-white light:text-slate-900 text-sm">{personalInfo.name}</p>
            <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">Full Stack Web Developer & Startup Founder</p>
          </div>
        </div>

        <p className="flex items-center gap-1.5 text-center text-slate-400 dark:text-slate-400 light:text-slate-600">
          Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React,
          TypeScript, Three.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">© {new Date().getFullYear()} Daniel Melese.</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
