import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Check, ArrowRight, ShieldCheck, HelpCircle, FileSignature } from 'lucide-react';
import { FEE_MODELS } from '../data/legalData';

interface FeeCalculatorProps {
  onSelectPlanForBooking: (planName: string) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onSelectPlanForBooking }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>('retainer');

  const selectedModel = FEE_MODELS.find((m) => m.id === selectedModelId) || FEE_MODELS[0];

  return (
    <section id="honorarios" className="py-24 bg-[#0A1024] text-white relative border-t border-b border-white/10">
      {/* Subtle radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Transparencia Tarifaria Innegociable
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Modelos de Contratación & Honorarios
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminamos la incertidumbre de la facturación por horas desmedida. Estructuramos acuerdos
            claros, predecibles y formalizados mediante contrato de servicios profesionales.
          </p>
        </div>

        {/* 3 Interactive Model Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {FEE_MODELS.map((model) => {
            const isSelected = selectedModelId === model.id;

            return (
              <div
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`rounded-sm p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                  isSelected
                    ? 'bg-slate-900/95 border-2 border-amber-400 shadow-2xl shadow-amber-950/50 ring-2 ring-amber-400/20'
                    : 'bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-amber-500/30 shadow-xl'
                }`}
              >
                {/* Active Indicator Top Stripe */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {model.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {model.billingFrequency}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-bold text-white mb-3">
                    {model.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <div className="p-3.5 rounded bg-slate-950/60 border border-white/5 text-xs text-slate-400 mb-6">
                    <strong className="text-amber-300 block mb-1">Ideal para:</strong>
                    <span>{model.idealFor}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase text-slate-400 tracking-widest block">Esquema Tarifario:</span>
                    <span className="text-sm font-bold text-amber-300 font-mono">{model.estimatedRange}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlanForBooking(model.name);
                    }}
                    className={`w-full py-3 px-4 rounded-sm font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:scale-[1.01]'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/15'
                    }`}
                  >
                    <span>Solicitar Propuesta de {model.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Guarantee Ribbon */}
        <div className="p-6 rounded-sm bg-[#070B19] border border-amber-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <FileSignature className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block">Contrato de Servicios Escrito y Transparente</strong>
              <span>Ningún honorario es exigible sin convenio firmado que establezca alcances y plazos.</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Regulado por el Colegio de Abogados</span>
          </div>
        </div>

      </div>
    </section>
  );
};
