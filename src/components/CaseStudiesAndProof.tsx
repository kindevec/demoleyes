import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Quote, ArrowUpRight } from 'lucide-react';
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
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Casos Emblemáticos Resueltos
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            En estricto cumplimiento del secreto fiduciario y acuerdos de confidencialidad,
            presentamos resoluciones que sentaron precedente y protegieron el valor del cliente.
          </p>
        </div>

        {/* 3 Landmark Case Studies (CLEAN SINGLE-SURFACE - NO BOX IN BOX) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {CASE_STUDIES.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#0B1D3A]/60 hover:bg-[#0B1D3A]/90 border border-slate-800 hover:border-[#D4AF37]/40 p-7 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                    {caseStudy.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-bold">
                    PRE-0{idx + 1} • {caseStudy.year}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {caseStudy.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {caseStudy.summary}
                </p>

                {/* Strategy Applied: Clean Typographic Callout (No nested box!) */}
                <div className="border-l-2 border-[#D4AF37] pl-3.5 py-1 mb-6 text-xs text-slate-400">
                  <span className="text-[#D4AF37] font-semibold block mb-0.5">Estrategia Aplicada:</span>
                  <p className="leading-relaxed">{caseStudy.strategyApplied}</p>
                </div>
              </div>

              {/* Bottom Metrics: Single hairline divider (No inner container!) */}
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
            </motion.div>
          ))}
        </div>

        {/* Institutional Accreditation Emblems (OPEN SEAMLESS STRIP - NO BOX IN BOX) */}
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
                {/* Chambers Pentagonal Star / Crest */}
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
                {/* Circular Badge */}
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
                {/* Globe & Balance */}
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

        {/* Verified Confidential Testimonials (CLEAN OPEN CARDS) */}
        <div>
          <div className="text-center mb-8">
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
                className="p-7 rounded-3xl bg-[#0B1D3A]/40 border border-slate-800 hover:border-[#D4AF37]/30 relative flex flex-col justify-between transition-colors"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{test.clientType}</div>
                    <div className="text-[11px] text-[#D4AF37] font-medium">{test.authorTitle}</div>
                    <div className="text-[9px] text-slate-400 font-mono mt-0.5">{test.industry}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 font-semibold uppercase bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
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
