import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Quote } from 'lucide-react';
import { CASE_STUDIES, TESTIMONIALS } from '../data/legalData';

export const CaseStudiesAndProof: React.FC = () => {
  return (
    <section id="casos" className="py-20 lg:py-28 bg-[#071326] text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            Jurisprudencia & Precedentes
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            <span className="font-extrabold text-white">Casos</span>{" "}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#D4AF37] to-[#C59B27] drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Emblemáticos
            </span>{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              Resueltos
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            En estricto cumplimiento del secreto fiduciario y acuerdos de confidencialidad,
            presentamos resoluciones que sentaron precedente y protegieron el valor del cliente.
          </p>
        </div>

        {/* 3 Landmark Case Studies with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {CASE_STUDIES.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#0B1D3A]/60 hover:bg-[#0B1D3A]/90 border border-slate-800 hover:border-[#D4AF37]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-xl"
            >
              {/* Photo Header */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/50 to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                    {caseStudy.tag}
                  </span>
                  <span className="text-xs text-white font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md">
                    PRE-0{idx + 1} • {caseStudy.year}
                  </span>
                </div>
              </div>

              {/* Case Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {caseStudy.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {caseStudy.summary}
                  </p>

                  {/* Strategy Applied */}
                  <div className="border-l-2 border-[#D4AF37] pl-3.5 py-1 mb-6 text-xs text-slate-400">
                    <span className="text-[#D4AF37] font-semibold block mb-0.5">Estrategia Aplicada:</span>
                    <p className="leading-relaxed">{caseStudy.strategyApplied}</p>
                  </div>
                </div>

                {/* Bottom Metrics */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px]">Impacto Económico:</span>
                    <span className="font-bold text-[#D4AF37] font-mono">{caseStudy.impact}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px]">Resultado:</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{caseStudy.result}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Accreditation Emblems */}
        <div className="py-10 border-y border-slate-800/80 mb-20">
          <div className="text-center mb-8">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-heading">
              Acreditaciones Internacionales & Estándares Éticos
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
            {/* 1. Chambers & Partners SVG */}
            <div className="flex flex-col items-center text-center opacity-85 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 160 55" className="h-10 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,4 35,16 30,34 10,34 5,16" fill="none" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="20" cy="20" r="5" fill="#D4AF37" />
                <text x="44" y="22" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="900" letterSpacing="1.5" fill="#FFFFFF">
                  CHAMBERS
                </text>
                <text x="44" y="34" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="700" letterSpacing="2" fill="#D4AF37">
                  GLOBAL • BAND 1
                </text>
                <text x="44" y="44" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="1" fill="#94A3B8">
                  DISPUTE RESOLUTION
                </text>
              </svg>
            </div>

            {/* 2. The Legal 500 SVG */}
            <div className="flex flex-col items-center text-center opacity-85 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 160 55" className="h-10 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                <text x="8" y="24" fontFamily="Georgia, serif" fontSize="15" fontWeight="bold" letterSpacing="1" fill="#FFFFFF">
                  The Legal 500
                </text>
                <line x1="8" y1="29" x2="140" y2="29" stroke="#D4AF37" strokeWidth="1.5" />
                <text x="8" y="41" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="800" letterSpacing="2.5" fill="#D4AF37">
                  LEADING FIRM 2026
                </text>
                <text x="8" y="50" fontFamily="system-ui, sans-serif" fontSize="6" fontWeight="500" letterSpacing="1" fill="#94A3B8">
                  LATIN AMERICA
                </text>
              </svg>
            </div>

            {/* 3. ISO 27001 Security SVG */}
            <div className="flex flex-col items-center text-center opacity-85 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 160 55" className="h-10 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="25" r="18" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 2" />
                <path d="M15 25 L20 30 L29 20" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="48" y="22" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="900" letterSpacing="1.5" fill="#FFFFFF">
                  ISO 27001
                </text>
                <text x="48" y="33" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="700" letterSpacing="2" fill="#D4AF37">
                  CERTIFIED SECURITY
                </text>
                <text x="48" y="43" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="1" fill="#94A3B8">
                  CUSTODIA DE EXPEDIENTES
                </text>
              </svg>
            </div>

            {/* 4. International Bar Association SVG */}
            <div className="flex flex-col items-center text-center opacity-85 hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 160 55" className="h-10 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="25" r="16" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
                <ellipse cx="20" cy="25" rx="8" ry="16" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
                <line x1="4" y1="25" x2="36" y2="25" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
                <text x="44" y="22" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="900" letterSpacing="2" fill="#FFFFFF">
                  IBA MEMBER
                </text>
                <text x="44" y="33" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="700" letterSpacing="1.5" fill="#D4AF37">
                  INTL BAR ASSOCIATION
                </text>
                <text x="44" y="43" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="1" fill="#94A3B8">
                  TRIBUNAL DE ÉTICA
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Verified Testimonials with Executive Avatar Portraits */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-heading font-bold text-2xl text-white mb-1.5">
              Confianza de Directores & Gobiernos Corporativos
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Testimonios de ejecutivos y representantes amparados bajo estricto secreto fiduciario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-7 rounded-3xl bg-[#0B1D3A]/40 border border-slate-800 hover:border-[#D4AF37]/30 relative flex flex-col justify-between transition-colors shadow-lg"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.authorTitle}
                      className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40 shadow-sm shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{test.clientType}</div>
                      <div className="text-[11px] text-[#D4AF37] font-medium">{test.authorTitle}</div>
                      <div className="text-[9px] text-slate-400 font-mono mt-0.5">{test.industry}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 font-semibold uppercase bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Verificado</span>
                    </span>
                    <span className="text-[9px] text-slate-500 font-mono mt-1">{test.confidentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

