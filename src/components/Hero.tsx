import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onSelectArea: (areaId: string) => void;
  onNavigateToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] pt-24 pb-10 sm:pt-32 sm:pb-12 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#051329] via-[#0A224A] to-[#071326] text-white"
    >
      {/* Sky Blue Twilight Architectural Lighting */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[500px] bg-[#0A66FF]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[550px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Skyscraper Panoramic Architectural Backdrop (100% Full Width - Zero Seams) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2560&q=85"
          alt="Torres Corporativas y Rascacielos - Valmont & Asociados"
          fetchPriority="high"
          decoding="async"
          width={2560}
          height={1440}
          className="w-full h-full object-cover object-center lg:object-[65%_30%] filter brightness-75 contrast-125 opacity-35 lg:opacity-45"
        />
        {/* Full-width seamless ambient gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051329] via-[#051329]/85 to-[#051329]/25 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#051329] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#071326] via-[#071326]/90 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Body (Reduced Vertical Footprint: ~70vh) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Top Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D3A]/90 border border-[#D4AF37]/40 text-xs font-semibold tracking-wide shadow-lg shadow-black/40 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
            <span className="text-white font-medium">Firma Jurídica Líder en Litigios & Corporativo</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">2026</span>
          </motion.div>

          {/* Deluxe Mixed-Typography Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12]"
          >
            <span className="font-extrabold text-white">Elevando la</span>{' '}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4C2] via-[#D4AF37] to-[#C59B27] drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
              Estrategia Jurídica
            </span> <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              y Blindaje Corporativo
            </span>
          </motion.h1>

          {/* Subtitle with Clean Justification */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl font-normal leading-relaxed text-justify-clean"
          >
            Protegemos el patrimonio, la continuidad empresarial y los intereses de líderes y
            corporaciones mediante litigación de alto impacto, blindaje fiduciario y asesoría preventiva
            con rigurosa reserva fiduciaria.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
          >
            <button
              onClick={() => {
                scrollTo('agendar');
                onNavigateToBooking();
              }}
              id="hero-cta-agendar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-xl shadow-[#D4AF37]/25 transition-all cursor-pointer active:scale-95"
            >
              <span>Solicitar Consulta Privada</span>
              <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-slate-950" />
              </div>
            </button>

            <button
              onClick={() => scrollTo('quienes-somos')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md"
            >
              <span>Conocer la Firma</span>
            </button>
          </motion.div>

          {/* Compact Single-Row Executive Stats Bar (Zero Box-in-Box, ~70% Vertical Fit) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 border-t border-slate-800/70 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 max-w-2xl"
          >
            <div>
              <div className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">18+</div>
              <div className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Años de Trayectoria</div>
            </div>
            <div>
              <div className="font-heading font-black text-xl sm:text-2xl text-[#D4AF37] tracking-tight">+$45M</div>
              <div className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Patrimonio Blindado</div>
            </div>
            <div>
              <div className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">97.8%</div>
              <div className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Eficacia en Laudos</div>
            </div>
            <div>
              <div className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">100%</div>
              <div className="text-[10.5px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Reserva Fiduciaria</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
