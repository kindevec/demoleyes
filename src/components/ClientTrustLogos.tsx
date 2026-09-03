import React from 'react';

interface ClientTrustLogosProps {
  className?: string;
}

export const ClientTrustLogos: React.FC<ClientTrustLogosProps> = ({ className = '' }) => {
  const clientLogos = [
    {
      id: 'pichincha',
      name: 'Banco Pichincha',
      svg: (
        <svg viewBox="0 0 180 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Bank Pichincha Style Geometric Chevron */}
          <path d="M6 4 L22 19 L6 34 L12 34 L28 19 L12 4 Z" fill="#D4AF37" />
          <path d="M14 4 L30 19 L14 34 L19 34 L35 19 L19 4 Z" fill="#D4AF37" opacity="0.6" />
          <text x="42" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="2" fill="currentColor">
            PICHINCHA
          </text>
          <text x="43" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="2.5" fill="#94A3B8">
            BANCA EMPRESARIAL
          </text>
        </svg>
      ),
    },
    {
      id: 'favorita',
      name: 'Corporación Favorita',
      svg: (
        <svg viewBox="0 0 190 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized Sunburst Emblem */}
          <circle cx="18" cy="19" r="6" fill="#D4AF37" />
          <path d="M18 6 L18 10 M18 28 L18 32 M5 19 L9 19 M27 19 L31 19 M9 10 L12 13 M24 25 L27 28 M9 28 L12 25 M24 13 L27 10" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
          <text x="40" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="800" letterSpacing="1.5" fill="currentColor">
            FAVORITA
          </text>
          <text x="41" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6" fontWeight="600" letterSpacing="2" fill="#94A3B8">
            CORPORACIÓN RETAIL
          </text>
        </svg>
      ),
    },
    {
      id: 'produbanco',
      name: 'Produbanco Grupo Promerica',
      svg: (
        <svg viewBox="0 0 200 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Double Square Geometric Emblem */}
          <rect x="6" y="8" width="14" height="14" rx="2" fill="#D4AF37" />
          <rect x="14" y="16" width="14" height="14" rx="2" fill="#D4AF37" opacity="0.4" />
          <text x="36" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="800" letterSpacing="1.2" fill="currentColor">
            PRODUBANCO
          </text>
          <text x="37" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="1.5" fill="#94A3B8">
            GRUPO PROMERICA
          </text>
        </svg>
      ),
    },
    {
      id: 'slb',
      name: 'SLB Energy Consorcio',
      svg: (
        <svg viewBox="0 0 150 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* SLB Modern Typography */}
          <text x="6" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="24" fontWeight="900" letterSpacing="4" fill="currentColor">
            SLB
          </text>
          <circle cx="82" cy="19" r="3" fill="#D4AF37" />
          <text x="94" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.5" fill="#94A3B8">
            ENERGY
          </text>
        </svg>
      ),
    },
    {
      id: 'holcim',
      name: 'Holcim Ecuador',
      svg: (
        <svg viewBox="0 0 170 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Circular Continuous Loop */}
          <circle cx="16" cy="19" r="10" fill="none" stroke="#D4AF37" strokeWidth="3" strokeDasharray="14 4" />
          <circle cx="16" cy="19" r="4" fill="#D4AF37" />
          <text x="36" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="2.5" fill="currentColor">
            HOLCIM
          </text>
          <text x="37" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="1.5" fill="#94A3B8">
            INFRAESTRUCTURA
          </text>
        </svg>
      ),
    },
    {
      id: 'chubb',
      name: 'Chubb Seguros Corporativos',
      svg: (
        <svg viewBox="0 0 160 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          <text x="6" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="900" letterSpacing="3" fill="currentColor">
            CHUBB
          </text>
          <line x1="88" y1="12" x2="88" y2="28" stroke="#D4AF37" strokeWidth="2" />
          <text x="96" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1" fill="#94A3B8">
            SEGUROS
          </text>
        </svg>
      ),
    },
    {
      id: 'pronaca',
      name: 'PRONACA Agroindustria',
      svg: (
        <svg viewBox="0 0 180 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized Leaf / Grain */}
          <path d="M8 26 C12 12, 24 8, 26 8 C26 18, 18 26, 8 26 Z" fill="#D4AF37" />
          <path d="M8 26 L22 12" stroke="#071326" strokeWidth="1.5" />
          <text x="34" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="800" letterSpacing="2" fill="currentColor">
            PRONACA
          </text>
          <text x="35" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="1.5" fill="#94A3B8">
            AGROEXPORTACIÓN
          </text>
        </svg>
      ),
    },
    {
      id: 'telefonica',
      name: 'Telefónica Empresas',
      svg: (
        <svg viewBox="0 0 190 38" className="h-7 sm:h-8 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Minimal 5-dot T / Connected Network */}
          <circle cx="8" cy="14" r="3" fill="#D4AF37" />
          <circle cx="16" cy="14" r="3" fill="#D4AF37" />
          <circle cx="24" cy="14" r="3" fill="#D4AF37" />
          <circle cx="16" cy="22" r="3" fill="#D4AF37" />
          <circle cx="16" cy="30" r="3" fill="#D4AF37" />
          <text x="36" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13.5" fontWeight="700" letterSpacing="1" fill="currentColor">
            TELEFÓNICA
          </text>
          <text x="37" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="2" fill="#94A3B8">
            EMPRESAS
          </text>
        </svg>
      ),
    },
  ];

  // Quadruple for smooth continuous animation
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className={`w-full py-8 sm:py-10 bg-gradient-to-r from-[#071326] via-[#0B1E3C] to-[#071326] border-y border-slate-800/80 relative shadow-inner text-white relative overflow-hidden ${className}`}>
      <style>{`
        @keyframes clientMarqueeMotion {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .client-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: clientMarqueeMotion 50s linear infinite;
          will-change: transform;
        }
        .client-marquee-container:hover .client-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Line (No heavy box!) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/80" />
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 font-heading text-center">
            EMPRESAS & GRUPOS CORPORATIVOS ASESORADOS
          </span>
          <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/80" />
        </div>
      </div>

      {/* Floating Logomarks with NO Bounding Boxes */}
      <div
        className="client-marquee-container relative w-full overflow-hidden flex items-center select-none z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="client-marquee-track gap-12 sm:gap-16 md:gap-20 py-1">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="cursor-default flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              title={client.name}
            >
              {client.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

