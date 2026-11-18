import { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { LanguageSelector } from './LanguageSelector';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#certifications' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/80 bg-white/80 backdrop-blur-xl border-b border-white/10 dark:border-white/10 border-slate-200 shadow-xl py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center group">
          <span className="font-extrabold text-2xl tracking-tight text-white dark:text-white text-slate-950">
            daniel<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Center Pill Nav Bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 bg-white/70 border border-white/10 dark:border-white/10 border-slate-300 rounded-full px-5 py-2 backdrop-blur-md shadow-lg shadow-black/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 hover:text-indigo-600 px-3.5 py-1 rounded-full transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Group */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Selector */}
          <LanguageSelector />

          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full bg-white/5 dark:bg-white/5 bg-slate-200 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-300 border border-white/10 dark:border-white/10 border-slate-300 text-slate-300 dark:text-slate-300 text-slate-700 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-cyan-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Download Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 text-slate-800 hover:text-white bg-indigo-600/20 hover:bg-indigo-600/35 border border-indigo-500/40 rounded-full transition-all duration-200 shadow-sm hover:scale-105"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger, Language Selector & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-1.5">
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 dark:bg-white/5 bg-slate-200 border border-white/10 dark:border-white/10 border-slate-300 text-slate-300 dark:text-slate-300 text-slate-700"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 dark:bg-slate-950/95 bg-white/95 border-b border-white/10 dark:border-white/10 border-slate-200 backdrop-blur-2xl px-6 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-800 hover:text-cyan-400 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full shadow-md"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
