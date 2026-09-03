import React, { useState } from 'react';
import { Calculator, ArrowUpRight, ShieldCheck, FileSignature, Check, Sparkles } from 'lucide-react';

interface FeeCalculatorProps {
  onSelectPlanForBooking: (planName: string) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onSelectPlanForBooking }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('etapas');

  const models = [
    {
      id: 'retainer',
      num: '01',
      badge: 'Para Empresas',
      name: 'Iguala Mensual (Retainer)',
      rate: 'Desde $1,200',
      period: '/ mes',
      summary: 'Acompañamiento corporativo permanente para blindaje continuo.',
      pills: [
        'Socio Senior Titular asignado',
        'Contratos y consultas ilimitadas',
        'Auditoría preventiva semestral',
        'Tarifa preferencial en litigios',
      ],
      isPopular: false,
    },
    {
      id: 'etapas',
      num: '02',
      badge: 'Más Solicitado • Predictible',
      name: 'Por Hitos Procesales',
      rate: 'Por Fases Clave',
      period: 'Prejudicial / Demanda / Sentencia',
      summary: 'Presupuesto cerrado fraccionado según el avance real del juicio.',
      pills: [
        'Cero cobros por horas no planificadas',
        'Pagos escalonados contra providencias',
        'Informes mensuales de estado procesal',
        'Desglose transparente de peritajes',
      ],
      isPopular: true,
    },
    {
      id: 'exito',
      num: '03',
      badge: 'Alineación Total',
      name: 'Cuota Litis (Éxito)',
      rate: '% de Recuperación',
      period: 'Contra resultado favorable',
      summary: 'Honorarios condicionados estrictamente a la victoria judicial.',
      pills: [
        'Riesgo compartido con la firma',
        'Cero honorarios si no hay cobro',
        'Liquidación sobre valor efectivo',
        'Evaluación previa de viabilidad',
      ],
      isPopular: false,
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Diagnóstico Confidencial',
      desc: 'Análisis probatorio previo y cálculo de viabilidad jurídica real.',
    },
    {
      step: '02',
      title: 'Propuesta Económica',
      desc: 'Presupuesto cerrado con hitos procesales y cláusulas de éxito.',
    },
    {
      step: '03',
      title: 'Formalización Notarial',
      desc: 'Firma de mandato fiduciario con acuerdo estricto ISO 27001.',
    },
    {
      step: '04',
      title: 'Patrocinio & Victorias',
      desc: 'Ejecución litigiosa con reportes mensuales directos al cliente.',
    },
  ];

  return (
    <section id="honorarios" className="py-16 lg:py-24 bg-[#071326] text-white relative overflow-hidden">
      {/* Soft Top Champagne Ambient Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/7 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Transparencia Tarifaria Innegociable</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            <span className="font-extrabold text-white">Modelos de</span>{' '}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#D4AF37] to-[#AA771C]">
              Contratación
            </span>{' '}
            <span className="font-extrabold text-slate-300">&</span>{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              Honorarios
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify-clean max-w-2xl mx-auto">
            Eliminamos la incertidumbre de la facturación por horas desmedida. Estructuras éticas, predecibles y formalizadas por contrato.
          </p>
        </div>

        {/* 3 VISUAL TARIFF CARDS (Punchy, Low-Text, High Visual Impact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {models.map((model) => {
            const isSelected = selectedModelId === model.id;

            return (
              <div
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                  isSelected || model.isPopular
                    ? 'bg-gradient-to-b from-[#0C244A] to-[#081832] border-2 border-[#D4AF37] shadow-2xl shadow-black/70 md:-translate-y-2'
                    : 'bg-[#091D3C]/60 hover:bg-[#091D3C] border border-slate-800 hover:border-[#D4AF37]/40 shadow-xl'
                }`}
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[10.5px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full ${
                      model.isPopular
                        ? 'bg-[#D4AF37] text-slate-950 shadow-md'
                        : 'bg-white/[0.06] text-[#D4AF37] border border-[#D4AF37]/30'
                    }`}>
                      {model.badge}
                    </span>
                    <span className="font-heading font-black text-2xl text-slate-600">
                      {model.num}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white mb-2 leading-tight">
                    {model.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {model.summary}
                  </p>

                  {/* Big Visual Pricing Tag */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-5">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                      Tarifa Estructurada:
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading font-black text-xl sm:text-2xl text-[#D4AF37] tracking-tight">
                        {model.rate}
                      </span>
                      <span className="text-xs text-slate-400 font-medium truncate">
                        {model.period}
                      </span>
                    </div>
                  </div>

                  {/* Punchy Feature Chips (No long text) */}
                  <div className="space-y-2.5 mb-6">
                    {model.pills.map((pill, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 text-[#D4AF37]">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="font-medium leading-snug">{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPlanForBooking(model.name);
                  }}
                  className={`w-full py-3.5 px-4 rounded-full font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSelected || model.isPopular
                      ? 'bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-lg shadow-[#D4AF37]/25 active:scale-95'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                  }`}
                >
                  <span>Solicitar Propuesta de este Esquema</span>
                  <div className="w-4 h-4 rounded-full bg-slate-950/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-current" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 4-STEP PROCESS TIMELINE ("ЭТАПЫ РАБОТЫ" - SKYSTRUCTURE / SLIDE 4 PATTERN) */}
        {/* ========================================================================= */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-heading mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>ETAPAS DE CONTRATACIÓN</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                ¿Cómo Iniciamos su Mandato?
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-xs text-slate-300 self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Contrato Notariado • Cero Riesgo</span>
            </div>
          </div>

          {/* 4 Step Nodes with Linear Connections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Desktop Connecting Hairline */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/80 to-[#D4AF37]/20 z-0 pointer-events-none" />

            {workflowSteps.map((ws, i) => (
              <div
                key={i}
                className="relative z-10 p-5 rounded-2xl bg-[#091D3C]/70 border border-slate-800/80 hover:border-[#D4AF37]/50 backdrop-blur-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#071326] border-2 border-[#D4AF37]/60 text-[#D4AF37] font-heading font-black text-base flex items-center justify-center mb-3.5 shadow-lg shadow-black/50 group-hover:scale-105 group-hover:border-[#D4AF37] transition-all">
                  {ws.step}
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                  {ws.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed text-justify-clean">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Guarantee Ribbon */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <FileSignature className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <span>
              <strong className="text-white">Contrato de Servicios Escrito: </strong>
              Ningún honorario es exigible sin convenio previo que fije límites de cuantía y plazos.
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Colegio de Abogados de Pichincha</span>
          </div>
        </div>

      </div>
    </section>
  );
};
