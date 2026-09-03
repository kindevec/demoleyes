import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Lock, Award, Quote, FileCheck } from 'lucide-react';
import { CASE_STUDIES, TESTIMONIALS } from '../data/legalData';

export const CaseStudiesAndProof: React.FC = () => {
  return (
    <section id="casos" className="py-20 lg:py-28 bg-[#071326] text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
            Precedentes & Rigor Ético
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Casos Emblemáticos Resueltos
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            En estricto cumplimiento del secreto fiduciario y acuerdos de confidencialidad,
            presentamos resoluciones clave que protegieron el patrimonio del cliente.
          </p>
        </div>

        {/* 3 Landmark Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {CASE_STUDIES.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#0B1D3A]/80 hover:bg-[#0B1D3A] border border-slate-700/80 hover:border-[#D4AF37]/40 p-7 flex flex-col justify-between shadow-xl relative backdrop-blur-xl transition-colors"
            >
              <div className="absolute top-5 right-6 text-[#D4AF37]/20 font-heading text-3xl font-extrabold select-none">
                0{idx + 1}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                    {caseStudy.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{caseStudy.year}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                  {caseStudy.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {caseStudy.summary}
                </p>

                {/* Strategy Applied */}
                <div className="p-3.5 rounded-2xl bg-[#071326] border border-slate-800 text-xs text-slate-400 mb-6">
                  <span className="text-[#D4AF37] font-semibold block mb-1 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Estrategia Aplicada:</span>
                  </span>
                  <p className="leading-relaxed">{caseStudy.strategyApplied}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1.5 bg-[#071326]/50 -mx-7 -mb-7 p-5 rounded-b-3xl">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">Impacto Económico:</span>
                  <span className="font-bold text-[#D4AF37]">{caseStudy.impact}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">Resultado:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{caseStudy.result}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Accreditation Seals Banner */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#0B1D3A]/90 border border-slate-700/80 mb-16 backdrop-blur-xl">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6 font-heading">
            Acreditaciones Institucionales & Estándares Internacionales
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center text-center">
            <div className="p-3">
              <Award className="w-7 h-7 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-xs font-bold text-white">Chambers & Partners</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Band 1 Dispute Resolution</div>
            </div>
            <div className="p-3">
              <ShieldCheck className="w-7 h-7 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-xs font-bold text-white">The Legal 500</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Leading Law Firm 2026</div>
            </div>
            <div className="p-3">
              <Lock className="w-7 h-7 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-xs font-bold text-white">ISO 27001 Certified</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Cifrado de Expedientes</div>
            </div>
            <div className="p-3">
              <Award className="w-7 h-7 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-xs font-bold text-white">Colegio de Abogados</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Tribunal de Ética & Honor</div>
            </div>
          </div>
        </div>

        {/* Verified Confidential Testimonials */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              Confianza de Directores y Grupos Empresariales
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Testimonios de ejecutivos amparados bajo secreto fiduciario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-3xl bg-[#0B1D3A]/60 border border-slate-700/80 relative flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{test.clientType}</div>
                    <div className="text-[11px] text-[#D4AF37] font-medium">{test.authorTitle}</div>
                    <div className="text-[9px] text-slate-400 font-mono mt-0.5">{test.industry}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 font-semibold uppercase bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verificado</span>
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono mt-1">{test.confidentialId}</span>
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
