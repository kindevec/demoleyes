import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-sm sm:text-base',
    lg: 'text-lg sm:text-xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Heraldic Shield & Scales Crest */}
      <svg
        viewBox="0 0 40 40"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield Outer Line */}
        <path
          d="M20 2 L36 7 C36 24 20 37 20 37 C20 37 4 24 4 7 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Inner Shield Tint */}
        <path
          d="M20 5.5 L33 9.8 C33 23 20 33.5 20 33.5 C20 33.5 7 23 7 9.8 Z"
          fill="#D4AF37"
          fillOpacity="0.1"
          stroke="#D4AF37"
          strokeWidth="0.8"
          strokeDasharray="1.5 1.5"
        />
        {/* Central Pedestal / Sword of Justice */}
        <line x1="20" y1="10" x2="20" y2="28" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="14" y1="28" x2="26" y2="28" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
        {/* Beam */}
        <path d="M11 14.5 L20 12.5 L29 14.5" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" />
        {/* Left Pan */}
        <line x1="11" y1="14.5" x2="11" y2="18" stroke="#D4AF37" strokeWidth="1" />
        <path d="M7 18 C7 22, 15 22, 15 18 Z" fill="#D4AF37" />
        {/* Right Pan */}
        <line x1="29" y1="14.5" x2="29" y2="18" stroke="#D4AF37" strokeWidth="1" />
        <path d="M25 18 C25 22, 33 22, 33 18 Z" fill="#D4AF37" />
      </svg>

      <div className="flex flex-col text-left">
        <span className={`font-heading font-extrabold ${titleSizes[size]} tracking-tight text-white leading-tight`}>
          VALMONT <span className="text-[#D4AF37]">&</span> ASOC.
        </span>
        <span className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
          FIRMA JURÍDICA DE ÉLITE
        </span>
      </div>
    </div>
  );
};

