import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowUpRight, CheckCircle2, Award, Scale, BookOpen, Users, Building2 } from 'lucide-react';
import { FIRM_METRICS } from '../data/legalData';

interface WhoWeAreProps {
  onLearnMore: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onLearnMore }) => {
  const [activeTab, setActiveTab] = useState<'esencia' | 'rigor' | 'gobernanza'>('esencia');

  return (
    <section id="quienes-somos" className="relative bg-[#F8FAFC] text-slate-900 py-20 lg:py-28 overflow-hidden">
      
      {/* Subtle Warm Platinum Backdrop Highlight */}
      <div className="absolute top-0 right-10 w-[600px] h-[400px] bg-slate-200/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Company Overview (SkyStructure Reference Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          
          {/* Left: Headline, Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300/80 text-slate-800 text-xs font-semibold tracking-wide">
              <Scale className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="font-heading uppercase tracking-wider text-[11px] text-slate-700">
                Visión Institucional & Prestigio
              </span>
            </div>

            {/* Deluxe Editorial Headline in Rich Dark Charcoal */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#071326] tracking-tight leading-[1.15]">
              <span className="font-extrabold">Abogacía de</span>{' '}
              <span className="font-serif-deluxe italic font-light text-[#B8860B]">
                Élite
              </span>. <br />
              <span className="font-extrabold text-[#071326]">Resultados</span>{' '}
              <span className="font-serif-deluxe italic font-normal text-slate-700">
                Comprobados
              </span>.
            </h2>

            {/* Narrative with Clean Justification */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-justify-clean">
              Consagrados a brindar orientación jurídica estratégica de máxima precisión técnica y
              representación judicial inquebrantable. Acompañamos a directorios de corporaciones,
              fondos de inversión y familias de alto patrimonio en litigios complejos y blindaje patrimonial.
            </p>

            {/* 3 Prominent Metric Counters (SkyStructure Style: +15, +350, +80) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 pb-2 border-y border-slate-200">
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#071326] tracking-tight">
                  {FIRM_METRICS.yearsExperience}
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-semibold tracking-wider uppercase mt-1">
                  Años de Trayectoria
                </p>
              </div>

              <div className="border-l border-slate-200 pl-3 sm:pl-6">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-700 tracking-tight">
                  {FIRM_METRICS.favorableRatio}
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-semibold tracking-wider uppercase mt-1">
                  Casos Favorables
                </p>
              </div>

              <div className="border-l border-slate-200 pl-3 sm:pl-6">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#B8860B] tracking-tight">
                  {FIRM_METRICS.protectedAssets}
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-semibold tracking-wider uppercase mt-1">
                  Patrimonio Blindado
                </p>
              </div>
            </div>

            {/* Secondary Justified Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify-clean font-normal">
              Rechazamos fórmulas genéricas. Cada mandato es asumido y conducido directamente por un
              socio titular con visión integral del negocio, peritajes forenses contables y estricta
              confidencialidad fiduciaria bajo estándar internacional.
            </p>

          </div>

          {/* Right: Crisp Sunlit Executive Boardroom Photography (SkyStructure Pattern) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-[16/11] w-full group">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                alt="Sala de Directorio y Juntas - Valmont & Asociados"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom White Glass Plaque */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[#B8860B] mb-0.5">
                    <Award className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest font-heading">
                      Sede Corporativa Central
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                    Titanium Plaza • Consultas Privadas de Directorio
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Quito • Guayaquil • Alianzas Internacionales en Madrid & Miami
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                  <Building2 className="w-5 h-5 text-[#071326]" />
                </div>
              </div>
            </div>

            {/* Checkmark Guarantees in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-slate-200/80 mt-6">
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Patrocinio directo por Socios Titulares</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Protocolos de secreto cifrado ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Corresponsalía en EE.UU., Madrid y Bogotá</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Transparencia tarifaria formal por contrato</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars in Modern Crisp Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 mb-2">
              <Users className="w-5 h-5 text-[#B8860B]" />
              <h4 className="font-heading font-extrabold text-base text-[#071326]">
                Enfoque Estratégico en el Negocio
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed text-justify-clean">
              Diseñamos soluciones jurídicas para preservar la rentabilidad, la continuidad operativa
              y la reputación del cliente frente a cualquier contingencia judicial o regulatoria.
            </p>
          </div>

          <div className="space-y-2 md:border-l border-slate-200 md:pl-8">
            <div className="flex items-center gap-2.5 mb-2">
              <ShieldCheck className="w-5 h-5 text-[#B8860B]" />
              <h4 className="font-heading font-extrabold text-base text-[#071326]">
                Rigor Probatorio & Defensa Activa
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed text-justify-clean">
              Patrocinio directo con simulación de audiencias, peritajes forenses contables y análisis
              exhaustivo de precedentes ante cortes ordinarias y tribunales arbitrales.
            </p>
          </div>

          <div className="space-y-2 md:border-l border-slate-200 md:pl-8">
            <div className="flex items-center gap-2.5 mb-2">
              <BookOpen className="w-5 h-5 text-[#B8860B]" />
              <h4 className="font-heading font-extrabold text-base text-[#071326]">
                Confidencialidad Fiduciaria
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed text-justify-clean">
              Custodia de expedientes y acuerdos de secreto respaldados bajo estándar ISO 27001, con
              miembros activos en la International Bar Association (IBA).
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-10">
          <button
            onClick={onLearnMore}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold bg-[#071326] hover:bg-[#0F274E] text-white shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <span>Conocer el Equipo de Socios Directores</span>
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

