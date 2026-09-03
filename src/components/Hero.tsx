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
      className="relative min-h-screen pt-28 pb-14 sm:pt-36 sm:pb-20 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#051329] via-[#0A224A] to-[#071326] text-white"
    >
      {/* Sky Blue Twilight Architectural Lighting */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[550px] bg-[#0A66FF]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Skyscraper Panoramic Architectural Backdrop (100% Full Width - No Vertical Cutoff) */}
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
        {/* Full-width seamless ambient gradient overlays: ensures pristine text contrast on the left and zero vertical seams */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051329] via-[#051329]/85 to-[#051329]/25 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#051329] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071326] via-[#071326]/90 to-transparent pointer-events-none" />
      </div>

      {/* Top Content: Headline & Subtitle */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10 sm:mb-14">
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
      {/* OPEN EDITORIAL ARCHITECTURAL SHOWCASE (ZERO BOX-IN-BOX) */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 border-t border-slate-800/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* COLUMN 1: Sobre la Firma (Open Editorial) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
                <Award className="w-4 h-4" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-heading">
                  Tradición & Rigor
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-xl lg:text-2xl text-white mb-2 leading-tight">
                Abogacía de Máximo Prestigio
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify-clean mb-4">
                Más de 18 años dedicados con absoluta reserva fiduciaria a la litigación de alto impacto y la defensa patrimonial de corporaciones y familias empresariales.
              </p>
            </div>

            {/* Architecture Building Image (Natural bleed without nested card) */}
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Sede Central Valmont & Asociados"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="text-white text-xs font-bold">Titanium Plaza • Quito</p>
                  <span className="text-[#D4AF37] text-[10.5px] font-semibold">Alianzas Internacionales</span>
                </div>
              </div>

              <button
                onClick={() => scrollTo('quienes-somos')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-[#FDE047] transition-colors mt-3.5 cursor-pointer"
              >
                <span>Conocer la historia institucional</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* COLUMN 2: Especialidades Clave (Open Typographic List - ZERO BOXES) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:border-l border-slate-800/70 md:pl-8 lg:pl-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[11px] font-extrabold uppercase tracking-widest font-heading">
                    Especialidades Clave
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">6 Prácticas</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl lg:text-2xl text-white mb-4 leading-tight">
                Áreas Estratégicas
              </h3>

              {/* Open Editorial List Items (Zero Boxes) */}
              <div className="space-y-4">
                <div
                  onClick={() => {
                    onSelectArea('corporativo-m-a');
                    scrollTo('especialidades');
                  }}
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <Building2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight mb-0.5">
                      Derecho Corporativo & M&A
                    </h4>
                    <p className="text-[11.5px] text-slate-400 leading-snug">
                      Fusiones, adquisiciones, joint ventures y gobierno societario.
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => {
                    onSelectArea('litigios-penal');
                    scrollTo('especialidades');
                  }}
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <Scale className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight mb-0.5">
                      Litigios & Penal Económico
                    </h4>
                    <p className="text-[11.5px] text-slate-400 leading-snug">
                      Defensa judicial de alta complejidad y arbitrajes comerciales.
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => {
                    onSelectArea('patrimonial-sucesiones');
                    scrollTo('especialidades');
                  }}
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight mb-0.5">
                      Blindaje Patrimonial & Sucesorio
                    </h4>
                    <p className="text-[11.5px] text-slate-400 leading-snug">
                      Fideicomisos mercantiles y estructuras de protección familiar.
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => {
                    onSelectArea('tributario-fiscal');
                    scrollTo('especialidades');
                  }}
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <TrendingUp className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight mb-0.5">
                      Derecho Tributario & Fiscal
                    </h4>
                    <p className="text-[11.5px] text-slate-400 leading-snug">
                      Planificación fiscal corporativa y litigios de impugnación SRI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('especialidades')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-[#FDE047] transition-colors mt-4 cursor-pointer"
            >
              <span>Ver el catálogo de las 6 especialidades</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* COLUMN 3: Casos Recientes (Open Media Rows - ZERO BOXES) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:border-l border-slate-800/70 md:pl-8 lg:pl-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
                <Briefcase className="w-4 h-4" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest font-heading">
                  Precedentes & Casos
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-4 leading-tight">
                Resultados Comprobados
              </h3>

              {/* Open Editorial Case Rows (Zero Card Boxes) */}
              <div className="space-y-4">
                <div
                  onClick={() => scrollTo('casos')}
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80"
                    alt="Arbitraje Energía"
                    className="w-16 h-16 rounded-xl object-cover shrink-0 filter brightness-95 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                      Laudo Favorable • CIADI
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      Consorcio Energético SLB
                    </h4>
                    <p className="text-xs text-[#D4AF37] font-semibold mt-0.5">$18.4M USD Recuperados</p>
                  </div>
                </div>

                <div
                  onClick={() => scrollTo('casos')}
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80"
                    alt="M&A Retail"
                    className="w-16 h-16 rounded-xl object-cover shrink-0 filter brightness-95 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-0.5">
                      Cierre Transaccional
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      Fusión Corporativa Retail
                    </h4>
                    <p className="text-xs text-slate-300 font-semibold mt-0.5">$45M USD Operación M&A</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('casos')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-[#FDE047] transition-colors mt-4 cursor-pointer"
            >
              <span>Examinar precedentes y testimonios</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

