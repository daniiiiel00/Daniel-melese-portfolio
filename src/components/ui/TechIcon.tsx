import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const normalized = name.toLowerCase().replace(/[.\s+()/-]/g, '');

  switch (true) {
    case normalized.includes('react'):
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case normalized.includes('next'):
      return (
        <svg className={className} viewBox="0 0 180 180" fill="none">
          <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="#000" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" r="90" fill="currentColor" />
            <path
              d="M149.508 157.438L69.1478 54H54V125.979H66.9837V69.3247L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
              fill="url(#next-grad)"
            />
            <rect x="115" y="54" width="12" height="72" fill="url(#next-grad2)" />
          </g>
          <defs>
            <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next-grad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case normalized.includes('typescript'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M14.5 16.5C14.8 17.4 15.6 18 16.8 18C18 18 18.8 17.3 18.8 16.3C18.8 15.3 18.2 14.8 16.9 14.2L16.1 13.9C14.3 13.1 13.5 12.2 13.5 10.6C13.5 8.8 14.9 7.5 16.9 7.5C18.4 7.5 19.6 8.3 20.1 9.8L18.4 10.5C18.1 9.8 17.6 9.3 16.9 9.3C16 9.3 15.4 9.8 15.4 10.5C15.4 11.2 15.9 11.6 17 12.1L17.8 12.4C19.8 13.3 20.8 14.2 20.8 16C20.8 18 19.2 19.5 16.7 19.5C14.7 19.5 13.3 18.4 12.8 16.8L14.5 16.5ZM4 9.3H7.4V19.5H9.4V9.3H12.8V7.5H4V9.3Z"
            fill="white"
          />
        </svg>
      );

    case normalized.includes('javascript'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 18C7.8 18.5 8.3 18.9 9.1 18.9C9.9 18.9 10.4 18.4 10.4 17.3V10.5H12V17.4C12 19.3 10.8 20.4 8.9 20.4C7.4 20.4 6.5 19.5 6.1 18.4L7.5 18ZM14.8 17.8C15.2 18.5 15.9 19 16.9 19C17.9 19 18.6 18.4 18.6 17.6C18.6 16.8 18.1 16.4 17 15.9L16.4 15.6C14.9 15 14.2 14.2 14.2 12.8C14.2 11.3 15.4 10.2 17 10.2C18.3 10.2 19.2 10.8 19.7 12.1L18.3 12.7C18.1 12.1 17.6 11.7 17 11.7C16.3 11.7 15.8 12.1 15.8 12.7C15.8 13.3 16.2 13.6 17.2 14L17.8 14.3C19.5 15 20.3 15.8 20.3 17.4C20.3 19.2 18.9 20.4 16.8 20.4C15.1 20.4 13.9 19.4 13.4 18.1L14.8 17.8Z"
            fill="#000000"
          />
        </svg>
      );

    case normalized.includes('laravel'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M9.7 4.2L3.2 8v8.6l6.5 3.8 6.5-3.8V8L9.7 4.2zm5.3 11.8l-5.3 3.1-5.3-3.1V8.6l5.3-3.1 5.3 3.1v7.4z"
            fill="#FF2D20"
          />
          <path
            d="M20.8 7.3l-5.3-3.1-2.1 1.2 5.3 3.1 2.1-1.2zm-2.1 9.4l2.1-1.2V9.3l-2.1 1.2v6.2z"
            fill="#FF2D20"
          />
        </svg>
      );

    case normalized.includes('php'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <path
            d="M6 10h2.5c.8 0 1.5.5 1.5 1.2 0 .8-.7 1.3-1.5 1.3H7.2L6.5 15H5.2L6 10zm1.7 1.7h.6c.4 0 .7-.2.7-.5 0-.3-.3-.5-.7-.5h-.6v1zm4.8-1.7H14l-.4 2.1h1.7l.4-2.1h1.3L16.2 15h-1.3l.4-2.1h-1.7L13.2 15h-1.3l.6-5zm5.5 0H20c.8 0 1.5.5 1.5 1.2 0 .8-.7 1.3-1.5 1.3h-1.3l-.7 2.5h-1.3l.8-5zm1.7 1.7h.6c.4 0 .7-.2.7-.5 0-.3-.3-.5-.7-.5H19v1z"
            fill="white"
          />
        </svg>
      );

    case normalized.includes('three'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-400"
          />
        </svg>
      );

    case normalized.includes('tailwind'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.8 3.3-1.5 1 .3 1.8 1 2.6 1.8 1.4 1.4 3 3 6.3 3 2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.8-3.3 1.5-1-.3-1.8-1-2.6-1.8-1.4-1.4-3-3-6.3-3zm-6 6c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.8 3.3-1.5 1 .3 1.8 1 2.6 1.8 1.4 1.4 3 3 6.3 3 2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.8-3.3 1.5-1-.3-1.8-1-2.6-1.8-1.4-1.4-3-3-6.3-3z"
            fill="#38BDF8"
          />
        </svg>
      );

    case normalized.includes('node'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 14.1l-6.5 3.8-6.5-3.8V8l6.5-3.8 6.5 3.8v8.1z"
            fill="#339933"
          />
        </svg>
      );

    case normalized.includes('postgres'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4 21l3.5-.97C9.02 20.64 10.46 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 14h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-4h2v4zm0-6h-2V7h2v4z"
            fill="#4169E1"
          />
        </svg>
      );

    case normalized.includes('sql') || normalized.includes('mysql') || normalized.includes('maria'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="9" ry="3" fill="#00758F" />
          <path
            d="M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"
            stroke="#00758F"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );

    case normalized.includes('docker'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm6 3h2v2h-2V8zm6.5 4.5c-.3-.2-1.1-.4-2-.2-.2-.5-.5-.9-.9-1.2l-.5-.4-.4.5c-.3.4-.4 1-.4 1.7 0 .2 0 .4.1.6-1.1.6-2.6.9-4.4.9H2.5c-.3 0-.5.2-.5.5 0 2.2 1.8 4.2 4.2 4.7 1.4.3 3 .3 4.8 0 2.8-.5 5.2-2.1 6.3-4.2.7.1 1.7.1 2.2-.4.6-.6.6-1.8.5-2.2z"
            fill="#2496ED"
          />
        </svg>
      );

    case normalized.includes('git'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.6 10.9L13.1 2.4a2.4 2.4 0 00-3.4 0L7.3 4.8l4.3 4.3a2.8 2.8 0 013.2 3.2l4.1 4.1a2.8 2.8 0 012.7-5.5zm-8.8 8.8a2.8 2.8 0 01-3.6-.8l-3-3a2.8 2.8 0 01.8-4.6L2.4 15.1a2.4 2.4 0 000 3.4l8.5 8.5a2.4 2.4 0 003.4 0l1.4-1.4-2.9-2.9z"
            fill="#F05032"
          />
        </svg>
      );

    case normalized.includes('linux'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C9.5 2 8 4 8 7v4c-1.5.5-3 2.5-3 5 0 2.5 1.5 4 4 4h6c2.5 0 4-1.5 4-4 0-2.5-1.5-4.5-3-5V7c0-3-1.5-5-4-5zm-1.5 5a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm-1.5 4c.8 0 1.5.5 1.5 1s-.7 1-1.5 1-1.5-.5-1.5-1 .7-1 1.5-1z"
            fill="#FCC624"
          />
        </svg>
      );

    case normalized.includes('supabase'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.36 12.33L12.56 1.09c-.48-.62-1.48-.31-1.53.48L10.3 11H3.14c-.8 0-1.25.9-.76 1.53l8.8 11.24c.48.62 1.48.31 1.53-.48L13.4 13h7.2c.8 0 1.25-.9.76-1.67z"
            fill="#3ECF8E"
          />
        </svg>
      );

    case normalized.includes('vite'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.7 4.2L12.7 20.3a.8.8 0 01-1.4 0L2.3 4.2a.8.8 0 011-1.1l8.7 4.4 8.7-4.4a.8.8 0 011 1.1z"
            fill="#646CFF"
          />
          <path
            d="M13.8 3.5l-3.3 6.7 4.5-.4-5.8 8.7 1.8-6.3-4.1.3 6.9-9z"
            fill="#FFD62E"
          />
        </svg>
      );

    case normalized.includes('framer'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
        </svg>
      );

    case normalized.includes('redux'):
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M16.5 13c-1.2 2-3.1 3-5.5 3-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.3 1 5.5 3l-1.8 1c-.8-1.3-2.1-2-3.7-2-2.2 0-4 1.8-4 4s1.8 4 4 4c1.6 0 2.9-.7 3.7-2l1.8 1zm3-7c2.2 1.7 3.5 4.2 3.5 7s-1.3 5.3-3.5 7l-1.5-1.5c1.8-1.4 2.8-3.4 2.8-5.5s-1-4.1-2.8-5.5L19.5 6z"
            fill="#764ABC"
          />
        </svg>
      );

    default:
      return (
        <div className={`rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[10px] ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
