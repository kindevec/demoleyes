import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Lock, Award, Quote } from 'lucide-react';
import { CASE_STUDIES, TESTIMONIALS } from '../data/legalData';

export const CaseStudiesAndProof: React.FC = () => {
  return (
    <section id="casos" className="py-24 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            Casos Emblemáticos y Rigor Ético
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Precedentes de Éxito y Resguardo Confidencial
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg">
            En estricto cumplimiento del secreto profesional y los acuerdos de confidencialidad,
            presentamos de forma anónima tres resoluciones que sentaron jurisprudencia favorable.
          </p>
        </div>

        {/* 3 Landmark Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {CASE_STUDIES.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-sm bg-slate-900/80 border border-amber-500/20 p-7 flex flex-col justify-between shadow-xl relative backdrop-blur-md"
            >
              <div className="absolute top-4 right-4 text-amber-400/20 font-serif-luxury text-4xl font-bold">
                0{idx + 1}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {caseStudy.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{caseStudy.year}</span>
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-white mb-3 leading-snug">
                  {caseStudy.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {caseStudy.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 bg-slate-950/40 -mx-7 -mb-7 p-5 rounded-b-sm">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">Impacto Económico:</span>
                  <span className="font-bold text-amber-300">{caseStudy.impact}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">Resultado Judicial:</span>
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
        <div className="p-6 rounded-sm bg-slate-950/80 border border-white/10 mb-20 backdrop-blur-md">
          <div className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Acreditaciones Institucionales y Estándares Éticos Internacionales
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center text-center">
            <div className="p-3">
              <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">Chambers & Partners</div>
              <div className="text-[10px] text-slate-400">Band 1 Dispute Resolution</div>
            </div>
            <div className="p-3">
              <ShieldCheck className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">The Legal 500</div>
              <div className="text-[10px] text-slate-400">Leading Law Firm 2025/2026</div>
            </div>
            <div className="p-3">
              <Lock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">ISO 27001 Certified</div>
              <div className="text-[10px] text-slate-400">Cifrado de Expedientes Digitales</div>
            </div>
            <div className="p-3">
              <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">Colegio de Abogados</div>
              <div className="text-[10px] text-slate-400">Miembros del Tribunal de Honor</div>
            </div>
          </div>
        </div>

        {/* Verified Confidential Testimonials */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
              Confianza de Directores y Grupos Empresariales
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Testimonios de ejecutivos y representantes protegidos bajo protocolo de confidencialidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, idx) => (
              <div
                key={test.id}
                className="p-6 rounded-sm bg-slate-900/50 border border-white/10 relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-400/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{test.clientType}</div>
                    <div className="text-[11px] text-amber-400/80">{test.authorTitle}</div>
                    <div className="text-[9px] text-slate-400 font-mono mt-0.5">{test.industry}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 font-semibold uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
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
