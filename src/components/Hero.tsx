import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { FIRM_METRICS } from '../data/legalData';

interface HeroProps {
  onSelectArea: (areaId: string) => void;
  onNavigateToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectArea, onNavigateToBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#071326]"
    >
      {/* Background Ambience & Lighting with Multi-color Halos */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(11,29,58,0.85),transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cinematic Panoramic Legal Backdrop */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full opacity-35 lg:opacity-45 pointer-events-none mix-blend-luminosity overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="Dama de la Justicia - Valmont & Asociados"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center lg:object-[65%_25%] filter brightness-90 contrast-125"
        />
        {/* Soft edge gradients blending seamlessly into deep navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071326] via-[#071326]/70 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Institutional Badge with Emerald & Gold Accent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/15 via-[#0B1D3A] to-emerald-500/15 border border-[#D4AF37]/40 text-xs font-semibold tracking-wide shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
            <span className="text-white font-medium">Firma Líder en Litigios & Corporativo</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">2026</span>
          </motion.div>

          {/* Deluxe Mixed-Typography Headline (Geometric Sans + Fluid Italic Serif + Multi-Color Gradient) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12]"
          >
            <span className="font-extrabold text-white">Defensa</span>{' '}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4C2] via-[#D4AF37] to-[#C59B27] drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
              Estratégica
            </span>{' '}
            <span className="font-extrabold text-slate-200">&</span> <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              Soluciones Jurídicas
            </span> <br />
            <span className="font-serif-deluxe italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFE58F] via-[#D4AF37] to-[#B38728] drop-shadow-[0_3px_20px_rgba(212,175,55,0.3)]">
              al Más Alto Nivel
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Protegemos el patrimonio, la continuidad empresarial y los intereses de líderes y
            corporaciones mediante litigación de alto impacto, blindaje societario y asesoría preventiva
            con absoluta reserva fiduciaria.
          </motion.p>

          {/* Quick Category Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-1"
          >
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Especialidades con mayor demanda:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Derecho Corporativo & M&A', id: 'corporativo-m-a' },
                { label: 'Litigios & Penal Económico', id: 'litigios-penal' },
                { label: 'Inmobiliario & Fideicomisos', id: 'patrimonial-sucesiones' },
                { label: 'Tributario & Fiscal', id: 'tributario-fiscal' },
              ].map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => {
                    onSelectArea(chip.id);
                    scrollTo('especialidades');
                  }}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 border border-slate-700/80 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] text-slate-200 transition-all cursor-pointer backdrop-blur-sm"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Dual Action CTAs (Kindev Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <button
              onClick={() => {
                scrollTo('agendar');
                onNavigateToBooking();
              }}
              id="hero-cta-agendar"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer active:scale-95"
            >
              <span>Solicitar Consulta Privada</span>
              <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-slate-950" />
              </div>
            </button>

            <button
              onClick={() => scrollTo('casos')}
              id="hero-cta-casos"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer"
            >
              <span>Ver Casos de Éxito</span>
            </button>
          </motion.div>

          {/* Open & Airy Credibility Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-800/80"
          >
            <div>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#D4AF37] to-[#C59B27] tracking-tight">
                {FIRM_METRICS.yearsExperience}
              </div>
              <p className="text-[10.5px] sm:text-xs text-slate-400 font-medium tracking-wider uppercase mt-1">
                Años de Trayectoria
              </p>
            </div>

            <div className="border-l border-slate-800/80 pl-4 sm:pl-8">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 tracking-tight">
                {FIRM_METRICS.favorableRatio}
              </div>
              <p className="text-[10.5px] sm:text-xs text-slate-400 font-medium tracking-wider uppercase mt-1">
                Casos Favorables
              </p>
            </div>

            <div className="border-l border-slate-800/80 pl-4 sm:pl-8">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500 tracking-tight">
                {FIRM_METRICS.protectedAssets}
              </div>
              <p className="text-[10.5px] sm:text-xs text-slate-400 font-medium tracking-wider uppercase mt-1">
                Patrimonio Blindado
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Indicator */}
      <div className="relative z-10 flex justify-center mt-4">
        <button
          onClick={() => scrollTo('quienes-somos')}
          className="text-slate-400 hover:text-[#D4AF37] transition-colors p-2 animate-bounce cursor-pointer"
          aria-label="Desplazarse a Quiénes Somos"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
