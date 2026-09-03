import React from 'react';
import { ShieldCheck, Building2, Landmark, Briefcase, Award } from 'lucide-react';

interface ClientTrustLogosProps {
  className?: string;
}

export const ClientTrustLogos: React.FC<ClientTrustLogosProps> = ({ className = '' }) => {
  const clientLogos = [
    {
      id: 'banco-corporativo',
      name: 'Banco Corporativo Andino',
      render: () => (
        <div className="flex items-center gap-2">
          <Landmark className="w-5 h-5 text-[#D4AF37]" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-slate-200 group-hover:text-white transition-colors">
              BANCO CORPORATIVO
            </span>
            <span className="text-[8px] uppercase tracking-widest text-[#D4AF37]">
              Fideicomisos & Crédito
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'consorcio-agro',
      name: 'Consorcio Agroexportador del Pacífico',
      render: () => (
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-amber-400" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-slate-200 group-hover:text-white transition-colors">
              PACIFIC AGROGROUP
            </span>
            <span className="text-[8px] uppercase tracking-widest text-slate-400">
              Comercio Transfronterizo
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'fintech-latam',
      name: 'Fintech Latam Soluciones',
      render: () => (
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0A66FF]" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-black text-xs sm:text-sm tracking-widest text-slate-200 group-hover:text-white transition-colors">
              FINTECH LATAM
            </span>
            <span className="text-[8px] uppercase tracking-widest text-blue-400">
              Cumplimiento & Pagos
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'inmobiliaria-quito',
      name: 'Fondo Inmobiliario Metropolitano',
      render: () => (
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-emerald-400" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-slate-200 group-hover:text-white transition-colors">
              FIM REAL ESTATE
            </span>
            <span className="text-[8px] uppercase tracking-widest text-emerald-400">
              Desarrollos Urbanos
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'grupo-farmaceutico',
      name: 'Holding Farmacéutico Internacional',
      render: () => (
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#D4AF37]" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-slate-200 group-hover:text-white transition-colors">
              PHARMA HOLDINGS
            </span>
            <span className="text-[8px] uppercase tracking-widest text-amber-300">
              Operaciones M&A
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'consorcio-energia',
      name: 'Consorcio de Infraestructura & Energía',
      render: () => (
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-sky-400" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-slate-200 group-hover:text-white transition-colors">
              ENERGIA ANDINA
            </span>
            <span className="text-[8px] uppercase tracking-widest text-sky-400">
              Contratos Públicos & Arbitraje
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Quadruple for seamless loop
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className={`w-full py-7 sm:py-8 bg-[#071326] border-y border-slate-800/80 text-white relative overflow-hidden ${className}`}>
      {/* CSS Keyframes for smooth infinite marquee */}
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
          animation: clientMarqueeMotion 60s linear infinite;
          will-change: transform;
        }
        .client-marquee-container:hover .client-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-20 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      {/* Header Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-4 sm:mb-6">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-8 sm:w-14 h-[1.5px] bg-[#D4AF37]" />
          <h2 className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] font-heading text-center">
            EMPRESAS Y FONDOS QUE CONFÍAN EN NUESTRA FIRMA
          </h2>
          <div className="w-8 sm:w-14 h-[1.5px] bg-[#D4AF37]" />
        </div>
      </div>

      {/* Infinite Rotating Marquee Track */}
      <div
        className="client-marquee-container relative w-full overflow-hidden flex items-center select-none z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="client-marquee-track gap-10 sm:gap-14 md:gap-16 py-1">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="group cursor-default py-2 px-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-[#D4AF37]/40 transition-all duration-300 flex items-center justify-center shrink-0 opacity-85 hover:opacity-100"
              title={client.name}
            >
              {client.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
