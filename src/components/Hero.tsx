import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Award, ChevronDown, CheckCircle2 } from 'lucide-react';
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
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#070B19]"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(11,19,43,0.8),transparent_70%)] pointer-events-none" />
      
      {/* Dramatic Statue of Lady Justice Visual */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-35 md:opacity-55 pointer-events-none mix-blend-luminosity overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
          alt="Estatua de la Dama de la Justicia con Balanza de Bronce"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={1000}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center md:object-[70%_20%] filter brightness-90 contrast-125"
        />
        {/* Soft edge gradients blending into deep midnight */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B19] via-[#070B19]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B19] via-transparent to-[#070B19]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Firma Líder en Litigios y Asesoría Corporativa 2026</span>
          </motion.div>

          {/* Golden Kicker & Classical Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-400/90">
                Experiencia • Determinación • Resultados
              </span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Defensa Estratégica y <br className="hidden sm:inline" />
              <span className="italic font-light text-slate-100">Seguridad Jurídica</span> al{' '}
              <span className="gold-gradient-text font-bold">Más Alto Nivel</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            Protegemos el patrimonio, la continuidad empresarial y los intereses de líderes y
            corporaciones a través de litigación de alto impacto, blindaje fiduciario y asesoría
            preventiva con máxima discreción ética.
          </motion.p>

          {/* Quick Interactive Chips in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-8"
          >
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Especialidades con mayor demanda:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: 'Derecho Corporativo & M&A', id: 'corporativo-m-a' },
                { label: 'Litigios & Penal Económico', id: 'litigios-penal' },
                { label: 'Inmobiliario & Patrimonial', id: 'patrimonial-sucesiones' },
                { label: 'Tributario & Fiscal', id: 'tributario-fiscal' }
              ].map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => {
                    onSelectArea(chip.id);
                    scrollTo('especialidades');
                  }}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-700 hover:border-amber-400/60 hover:text-amber-300 text-slate-200 transition-all cursor-pointer backdrop-blur-sm shadow-sm hover:shadow-amber-500/10"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={() => {
                scrollTo('agendar');
                onNavigateToBooking();
              }}
              id="hero-cta-agendar"
              className="px-7 py-4 rounded-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Solicitar Consulta Confidencial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo('casos')}
              id="hero-cta-casos"
              className="px-6 py-4 rounded-sm border border-white/20 hover:border-amber-400/40 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver Casos de Éxito</span>
            </button>
          </motion.div>

          {/* Live Credibility Strip with Interactive Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
          >
            <div className="p-2 rounded hover:bg-white/5 transition-colors cursor-default">
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-400">
                {FIRM_METRICS.yearsExperience}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                Años de Trayectoria
              </p>
            </div>
            <div className="p-2 rounded hover:bg-white/5 transition-colors cursor-default">
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-400">
                {FIRM_METRICS.favorableRatio}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                Casos Favorables
              </p>
            </div>
            <div className="p-2 rounded hover:bg-white/5 transition-colors cursor-default">
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-400">
                {FIRM_METRICS.protectedAssets}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                Patrimonio Blindado
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <button
          onClick={() => scrollTo('quienes-somos')}
          className="text-slate-400 hover:text-amber-400 transition-colors p-2 animate-bounce cursor-pointer"
          aria-label="Desplazarse a Quiénes Somos"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
