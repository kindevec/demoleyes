import React from 'react';
import { Scale, Landmark } from 'lucide-react';

interface CrestLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'light' | 'dark';
  showSubtitle?: boolean;
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  size = 'md',
  variant = 'gold',
  showSubtitle = true
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs'
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Classical Seal / Crest Embellishment */}
      <div className={`relative flex items-center justify-center rounded-sm border border-amber-400/40 bg-gradient-to-b from-[#17223b] to-[#0a1020] ${iconSizes[size]} p-1.5 shadow-md shadow-amber-950/20`}>
        <div className="absolute inset-0.5 border border-amber-500/20 rounded-[2px]" />
        <Scale className="w-full h-full text-amber-400 drop-shadow-[0_1px_4px_rgba(212,175,55,0.4)]" />
      </div>

      <div className="flex flex-col justify-center">
        <span className={`font-display-crest font-bold tracking-[0.18em] uppercase ${textSizes[size]} text-white leading-tight`}>
          Valenzuela <span className="text-amber-400 font-serif font-light">&</span> Asoc.
        </span>
        {showSubtitle && (
          <span className={`font-sans tracking-[0.3em] uppercase text-slate-400 font-medium ${subtitleSizes[size]} mt-0.5`}>
            Firma Jurídica de Élite
          </span>
        )}
      </div>
    </div>
  );
};

export const SectionMedallion: React.FC<{ icon?: 'scale' | 'landmark' }> = ({ icon = 'scale' }) => {
  return (
    <div className="relative flex items-center justify-center z-20 -my-6">
      <div className="w-14 h-14 rounded-full border-2 border-amber-500/50 bg-[#0B132B] flex items-center justify-center text-amber-400 shadow-[0_4px_20px_rgba(0,0,0,0.5)] ring-4 ring-[#070B19]">
        <div className="w-11 h-11 rounded-full border border-amber-500/30 flex items-center justify-center bg-gradient-to-b from-[#142143] to-[#080e1e]">
          {icon === 'scale' ? (
            <Scale className="w-5 h-5 text-amber-400" />
          ) : (
            <Landmark className="w-5 h-5 text-amber-400" />
          )}
        </div>
      </div>
    </div>
  );
};
