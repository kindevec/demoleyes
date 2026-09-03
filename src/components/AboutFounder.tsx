import React from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldCheck, Award, ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutFounderProps {
  onNavigateToBooking: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onNavigateToBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-[#071326] text-white relative overflow-hidden">
      {/* Soft Ambient Glow Behind Portrait */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0A66FF]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Executive Studio Portrait (SmartLegal Architectural Disc Pattern) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] flex items-end justify-center">
              
              {/* Outer Decorative Orbit Rings */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full border border-[#D4AF37]/35 pointer-events-none" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-72 sm:w-88 lg:w-[410px] h-72 sm:h-88 lg:h-[410px] rounded-full border border-blue-500/20 border-dashed pointer-events-none" />

              {/* Studio Backdrop Disc */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 rounded-full bg-gradient-to-tr from-[#051122] via-[#0B1E3F] to-[#122F58] border-2 border-[#D4AF37]/50 shadow-2xl pointer-events-none overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rotate-45 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#051122] to-transparent pointer-events-none" />
              </div>

              {/* Authoritative Executive Portrait */}
              <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Fernando Valmont Ramos - Socio Director"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={900}
                  className="w-full h-auto max-h-[420px] sm:max-h-[480px] object-cover object-top filter brightness-95 contrast-110 drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Seal */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#071326]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold block uppercase tracking-wider">
                      Matrícula CAP 17-2008-412
                    </span>
                    <span className="text-xs text-white font-bold">Quito • Guayaquil</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                    <Scale className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: Editorial Narrative & Career Story (SmartLegal Style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-heading uppercase tracking-wider text-[11px]">
                Sobre Mí • Liderazgo & Trayectoria
              </span>
            </div>

            {/* Deluxe Headline */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-white">
                <span className="font-extrabold">Dr. Fernando</span>{' '}
                <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4C2] via-[#D4AF37] to-[#C59B27] drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                  Valmont Ramos
                </span>
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#D4AF37] font-heading mt-1.5 tracking-wide">
                Socio Director & Fundador • Valmont & Asociados
              </p>
            </div>

            {/* Narrative Story in Clean Justification */}
            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed text-justify-clean font-normal">
              <p>
                Abogado litigante con más de 18 años de trayectoria consagrado a la defensa judicial de
                alta complejidad, arbitrajes internacionales y protección patrimonial fiduciaria. Ha liderado
                la representación judicial de directorios corporativos, grupos industriales y familias de
                alto patrimonio ante tribunales de la Corte Nacional y paneles arbitrales CIADI y CCI.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                «Mi convicción procesal es innegociable: los grandes litigios no se resuelven en la
                improvisación del estrado, sino en el rigor técnico probatorio, la simulación previa y la
                lealtad fiduciaria absoluta hacia los intereses de cada cliente que nos encomienda su futuro.»
              </p>
            </div>

            {/* 3 Credential Badges (SmartLegal Clean Divider Pattern) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 border-y border-slate-800 py-4 my-2 gap-3 sm:gap-0">
              <div className="sm:pr-4 flex flex-col justify-start">
                <Scale className="w-4 h-4 text-[#D4AF37] mb-1 shrink-0" />
                <div className="text-xs font-bold text-white leading-tight">Litigación & Arbitraje</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Árbitro Cámara de Comercio</div>
              </div>

              <div className="sm:px-4 flex flex-col justify-start">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] mb-1 shrink-0" />
                <div className="text-xs font-bold text-white leading-tight">Blindaje Fiduciario</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Estructuración Corporativa</div>
              </div>

              <div className="sm:pl-4 flex flex-col justify-start">
                <Award className="w-4 h-4 text-[#D4AF37] mb-1 shrink-0" />
                <div className="text-xs font-bold text-white leading-tight">Membresía Internacional</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">International Bar Association</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  scrollTo('agendar');
                  onNavigateToBooking();
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-lg shadow-[#D4AF37]/25 transition-all cursor-pointer active:scale-95 text-center"
              >
                <span>Solicitar Consulta Privada Directa</span>
                <div className="w-4 h-4 rounded-full bg-slate-950/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-slate-950" />
                </div>
              </button>

              <button
                onClick={() => scrollTo('casos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all cursor-pointer text-center"
              >
                <span>Ver Precedentes Logrados</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
