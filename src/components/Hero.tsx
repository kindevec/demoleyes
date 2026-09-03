import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Scale, 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight,
  Award,
  Briefcase
} from 'lucide-react';

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
      className="relative min-h-screen pt-28 pb-12 sm:pt-36 sm:pb-20 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#051329] via-[#0A224A] to-[#071326] text-white"
    >
      {/* Sky Blue Twilight Architectural Lighting */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[550px] bg-[#0A66FF]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Skyscraper Panoramic Architectural Backdrop (SkyStructure Style) */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full opacity-40 lg:opacity-55 pointer-events-none mix-blend-luminosity overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
          alt="Torres Corporativas y Rascacielos - Valmont & Asociados"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center lg:object-[70%_25%] filter brightness-95 contrast-125"
        />
        {/* Soft edge blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051329] via-[#051329]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071326] via-[#071326]/90 to-transparent pointer-events-none" />
      </div>

      {/* Top Content: Headline & Subtitle */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10 sm:mb-16">
        <div className="max-w-3xl space-y-5">
          
          {/* Top Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1D3A]/90 border border-[#D4AF37]/40 text-xs font-semibold tracking-wide shadow-lg shadow-black/40 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
            <span className="text-white font-medium">Firma Jurídica Líder en Litigios & Corporativo</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">2026</span>
          </motion.div>

          {/* Deluxe Mixed-Typography Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12]"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed text-justify-clean"
          >
            Protegemos el patrimonio, la continuidad empresarial y los intereses de líderes y
            corporaciones mediante litigación de alto impacto, blindaje fiduciario y asesoría preventiva
            con rigurosa reserva fiduciaria.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
          >
            <button
              onClick={() => {
                scrollTo('agendar');
                onNavigateToBooking();
              }}
              id="hero-cta-agendar"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-xl shadow-[#D4AF37]/25 transition-all cursor-pointer active:scale-95"
            >
              <span>Solicitar Consulta Privada</span>
              <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-slate-950" />
              </div>
            </button>

            <button
              onClick={() => scrollTo('quienes-somos')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md"
            >
              <span>Conocer la Firma</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3-CARD OVERLAPPING DECK (SKYSTRUCTURE ARCHITECTURAL DYNAMIC PATTERN) */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-5 lg:gap-6 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 no-scrollbar md:grid-cols-3 items-stretch">
          
          {/* CARD 1: Sobre la Firma (About Us with Building Photography) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-[86vw] sm:w-auto shrink-0 md:shrink snap-center rounded-3xl bg-[#091D3C]/85 border border-slate-700/70 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl hover:border-[#D4AF37]/50 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] font-heading">
                  Sobre la Firma
                </span>
                <Award className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2.5 leading-snug">
                Tradición & Rigor Procesal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify-clean mb-5">
                Más de 18 años dedicados exclusivamente a la defensa patrimonial y litigios de alta
                complejidad para corporaciones nacionales e internacionales.
              </p>
            </div>

            {/* Architecture Building Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-700/60 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Sede Central Valmont & Asociados"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs font-bold tracking-wide">Sede Titanium Plaza</p>
                <p className="text-[#D4AF37] text-[10.5px]">Quito • Guayaquil</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Especialidades Clave (ELEVATED / TALLER / PROMINENT - 2x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="w-[86vw] sm:w-auto shrink-0 md:shrink snap-center rounded-3xl bg-gradient-to-b from-[#0C244C] to-[#081832] border-2 border-[#D4AF37]/60 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-2xl shadow-2xl shadow-black/80 md:-translate-y-4 md:hover:-translate-y-6 transition-all relative z-10"
          >
            {/* Top Gold Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[10px] font-extrabold uppercase tracking-wider text-[#FDE047]">
                <Sparkles className="w-3 h-3 text-[#FDE047]" />
                <span>Nuestra Experiencia</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">6 Áreas</span>
            </div>

            {/* 2x2 Grid of Key Specialties with Icons (SkyStructure Pattern) */}
            <div className="grid grid-cols-2 gap-3.5 my-auto py-2">
              <button
                onClick={() => {
                  onSelectArea('corporativo-m-a');
                  scrollTo('especialidades');
                }}
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 transition-all text-left group/item cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-2 text-[#D4AF37]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover/item:text-[#D4AF37] transition-colors leading-tight mb-1">
                  Corporativo & M&A
                </h4>
                <p className="text-[10.5px] text-slate-400 leading-tight">Fusiones y contratos de escala.</p>
              </button>

              <button
                onClick={() => {
                  onSelectArea('litigios-penal');
                  scrollTo('especialidades');
                }}
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 transition-all text-left group/item cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-2 text-[#D4AF37]">
                  <Scale className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover/item:text-[#D4AF37] transition-colors leading-tight mb-1">
                  Litigios & Penal
                </h4>
                <p className="text-[10.5px] text-slate-400 leading-tight">Defensa en foros judiciales.</p>
              </button>

              <button
                onClick={() => {
                  onSelectArea('patrimonial-sucesiones');
                  scrollTo('especialidades');
                }}
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 transition-all text-left group/item cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-2 text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover/item:text-[#D4AF37] transition-colors leading-tight mb-1">
                  Blindaje Patrimonial
                </h4>
                <p className="text-[10.5px] text-slate-400 leading-tight">Fideicomisos y estructuras.</p>
              </button>

              <button
                onClick={() => {
                  onSelectArea('tributario-fiscal');
                  scrollTo('especialidades');
                }}
                className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 transition-all text-left group/item cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-2 text-[#D4AF37]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white group-hover/item:text-[#D4AF37] transition-colors leading-tight mb-1">
                  Tributario & Fiscal
                </h4>
                <p className="text-[10.5px] text-slate-400 leading-tight">Estrategias ante el SRI.</p>
              </button>
            </div>

            {/* Bottom Link */}
            <button
              onClick={() => scrollTo('especialidades')}
              className="w-full mt-3 py-2.5 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#FDE047] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#D4AF37]/30"
            >
              <span>Explorar las 6 Especialidades</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* CARD 3: Casos Recientes (Recent Projects Preview Cards) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="w-[86vw] sm:w-auto shrink-0 md:shrink snap-center rounded-3xl bg-[#091D3C]/85 border border-slate-700/70 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl hover:border-[#D4AF37]/50 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] font-heading">
                  Resultados Clave
                </span>
                <Briefcase className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-4 leading-snug">
                Casos Emblemáticos
              </h3>
            </div>

            {/* 2 Case Study Thumbnail Cards (SkyStructure Pattern) */}
            <div className="space-y-3 my-auto">
              <button
                onClick={() => scrollTo('casos')}
                className="w-full flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all text-left cursor-pointer group/thumb"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=300&q=80"
                    alt="Arbitraje Energía"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Laudo Favorable</span>
                  <p className="text-xs font-bold text-white truncate group-hover/thumb:text-[#D4AF37] transition-colors">
                    Consorcio Energético SLB
                  </p>
                  <p className="text-[10.5px] text-slate-400 truncate">Arbitraje $18.4M USD</p>
                </div>
              </button>

              <button
                onClick={() => scrollTo('casos')}
                className="w-full flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all text-left cursor-pointer group/thumb"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80"
                    alt="M&A Retail"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">Cierre Transaccional</span>
                  <p className="text-xs font-bold text-white truncate group-hover/thumb:text-[#D4AF37] transition-colors">
                    Fusión Corporativa Retail
                  </p>
                  <p className="text-[10.5px] text-slate-400 truncate">Operación $45M USD</p>
                </div>
              </button>
            </div>

            <button
              onClick={() => scrollTo('casos')}
              className="w-full mt-3 py-2 text-xs font-bold text-slate-300 hover:text-white flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <span>Ver todos los precedentes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
