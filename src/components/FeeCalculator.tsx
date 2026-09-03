import React, { useState } from 'react';
import { Calculator, Check, ArrowUpRight, ShieldCheck, FileSignature } from 'lucide-react';
import { FEE_MODELS } from '../data/legalData';

interface FeeCalculatorProps {
  onSelectPlanForBooking: (planName: string) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onSelectPlanForBooking }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('retainer');

  return (
    <section id="honorarios" className="py-20 lg:py-28 bg-gradient-to-b from-[#071326] via-[#0D2447] to-[#071326] text-white relative overflow-hidden">
      {/* Diffused Intersection Gradient Hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent pointer-events-none" />
      {/* Top Champagne Spotlight & Ambient Aura */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#D4AF37]/20 via-[#B8860B]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            Transparencia Tarifaria Innegociable
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            <span className="font-extrabold text-white">Modelos de</span>{" "}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#D4AF37] to-[#AA771C] drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Contratación
            </span>{" "}
            <span className="font-extrabold text-slate-300">&</span>{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              Honorarios
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminamos la incertidumbre de la facturación por horas desmedida. Estructuramos acuerdos
            claros, predecibles y formalizados mediante contrato de servicios profesionales.
          </p>
        </div>

        {/* 3 Clean Model Cards (NO BOX IN BOX) */}
        <div className="flex lg:grid overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-4 lg:gap-8 pb-4 lg:pb-0 px-4 lg:px-0 -mx-4 lg:mx-0 no-scrollbar lg:grid-cols-3 mb-10 lg:mb-14">
          {FEE_MODELS.map((model) => {
            const isSelected = selectedModelId === model.id;

            return (
              <div
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`w-[86vw] lg:w-auto shrink-0 lg:shrink snap-center rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#0B1D3A] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10'
                    : 'bg-[#0B1D3A]/50 hover:bg-[#0B1D3A]/80 border border-slate-800 hover:border-[#D4AF37]/40 shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25">
                      {model.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {model.billingFrequency}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {model.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {model.description}
                  </p>

                  {/* Clean Typographic Callout (No nested box!) */}
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    <span className="text-[#D4AF37] font-semibold">Ideal para: </span>
                    {model.idealFor}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider block">Esquema Tarifario:</span>
                    <span className="text-sm font-bold text-[#D4AF37] font-mono">{model.estimatedRange}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlanForBooking(model.name);
                    }}
                    className={`w-full py-3 px-4 rounded-full font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md active:scale-95'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-slate-700/60'
                    }`}
                  >
                    <span>Solicitar Propuesta</span>
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-950/15 flex items-center justify-center">
                      <ArrowUpRight className="w-2.5 h-2.5 text-slate-950" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 mb-8 text-[11px] text-[#D4AF37] font-medium">
          <span>Desliza para comparar esquemas tarifarios →</span>
        </div>

        {/* Ethical Guarantee (Clean horizontal footer divider - NO BOX IN BOX) */}
        <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <FileSignature className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <span>
              <strong className="text-white">Contrato de Servicios Escrito: </strong>
              Ningún honorario es exigible sin convenio firmado que detalle plazos y alcances.
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-[#D4AF37] font-medium shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Regulado por el Colegio de Abogados</span>
          </div>
        </div>

      </div>
    </section>
  );
};




