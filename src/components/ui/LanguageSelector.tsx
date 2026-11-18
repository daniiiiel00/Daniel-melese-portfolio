import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', flag: '🇪🇹' },
  { code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo', flag: '🇪🇹' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

export const LanguageSelector: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Read initial language from googtrans cookie
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const cookie = getCookie('googtrans');
    if (cookie) {
      const match = cookie.match(/\/en\/([a-z]{2})/);
      if (match && match[1]) {
        setCurrentLang(match[1]);
        if (match[1] === 'ar') {
          document.documentElement.dir = 'rtl';
        }
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Set RTL for Arabic
    if (langCode === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    const hostname = window.location.hostname;
    
    if (langCode === 'en') {
      // Clear cookie to reset to default language
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${hostname};`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname};`;
    }

    // Trigger Google Translate hidden combo box if available
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
      // Prevent layout shift
      setTimeout(() => {
        if (document.body) {
          document.body.style.top = '0px';
          document.body.style.position = 'static';
        }
      }, 50);
    } else {
      window.location.reload();
    }
  };

  const active = supportedLanguages.find((l) => l.code === currentLang) || supportedLanguages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Selector Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 dark:bg-white/5 bg-slate-200/80 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-300 border border-white/10 dark:border-white/10 border-slate-300 text-slate-200 dark:text-slate-200 text-slate-800 text-xs font-medium transition-all duration-200 hover:scale-105 shadow-sm"
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 text-cyan-400" />
        <span className="font-mono uppercase text-[11px] font-semibold">{active.code}</span>
        <span className="text-xs">{active.flag}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-950/95 dark:bg-slate-950/95 bg-white/95 border border-white/10 dark:border-white/10 border-slate-200 shadow-2xl backdrop-blur-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-white/10 dark:border-white/10 border-slate-200">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-500">
              Select Language
            </span>
          </div>

          <div className="py-1">
            {supportedLanguages.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/15 text-cyan-400 dark:text-cyan-400 text-indigo-600 font-bold'
                      : 'text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{lang.flag}</span>
                    <div className="flex flex-col text-left">
                      <span>{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 text-slate-500 font-normal">
                        {lang.name}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
