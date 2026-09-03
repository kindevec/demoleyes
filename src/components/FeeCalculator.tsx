import React, { useState } from 'react';
import { Calculator, Check, ArrowUpRight, ShieldCheck, FileSignature } from 'lucide-react';
import { FEE_MODELS } from '../data/legalData';

interface FeeCalculatorProps {
  onSelectPlanForBooking: (planName: string) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onSelectPlanForBooking }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('retainer');

  return (
    <section id="honorarios" className="py-20 lg:py-28 bg-[#071326] text-white relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            Transparencia Tarifaria Innegociable
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Modelos de Contratación & Honorarios
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminamos la incertidumbre de la facturación por horas desmedida. Estructuramos acuerdos
            claros, predecibles y formalizados mediante contrato de servicios profesionales.
          </p>
        </div>

        {/* 3 Interactive Model Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {FEE_MODELS.map((model) => {
            const isSelected = selectedModelId === model.id;

            return (
              <div
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-xl ${
                  isSelected
                    ? 'bg-[#0B1D3A] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30'
                    : 'bg-[#0B1D3A]/70 hover:bg-[#0B1D3A] border border-slate-700/80 hover:border-[#D4AF37]/40 shadow-xl'
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

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {model.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#071326] border border-slate-800 text-xs text-slate-400 mb-6">
                    <strong className="text-[#D4AF37] block mb-1">Ideal para:</strong>
                    <span>{model.idealFor}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800">
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

        {/* Ethical Guarantee Ribbon */}
        <div className="p-5 rounded-2xl bg-[#0B1D3A]/60 border border-slate-700/60 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <FileSignature className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block">Contrato de Servicios Escrito</strong>
              <span>Ningún honorario es exigible sin convenio firmado que detalle plazos y alcances.</span>
            </div>
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
