import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, Gavel, ArrowRight, Award, Landmark } from 'lucide-react';
import { SectionMedallion } from './CrestLogo';

interface WhoWeAreProps {
  onLearnMore: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onLearnMore }) => {
  return (
    <section id="quienes-somos" className="relative z-20">
      {/* Centered Gold Medallion on the transition boundary */}
      <SectionMedallion icon="landmark" />

      {/* Main Light Ivory Architectural Container with dynamic diagonal transition */}
      <div className="bg-[#FAF9F5] text-slate-900 pt-20 pb-28 px-4 sm:px-6 lg:px-8 slant-cut-both shadow-2xl relative">
        {/* Subtle linen/marble background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#070B19_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Editorial Column */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 xl:col-span-7"
            >
              {/* Circular Classical Emblem */}
              <div className="w-12 h-12 rounded-full border border-amber-600/30 bg-amber-500/10 flex items-center justify-center text-amber-700 mb-6">
                <Landmark className="w-6 h-6 text-[#9E7D46]" />
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[2px] bg-[#9E7D46]" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#9E7D46]">
                  Quiénes Somos
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-[1.12] mb-6">
                Abogacía de Élite. <br />
                <span className="text-[#9E7D46] font-normal italic">Resultados Comprobados.</span>
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                <p>
                  Somos una firma jurídica boutique comprometida con brindar orientación estratégica de
                  máxima precisión técnica y representación judicial inquebrantable. Trabajamos en estrecha
                  asociación con directorios, fondos de inversión y familias patrimoniales.
                </p>
                <p className="text-slate-600 text-base">
                  Nuestra práctica se fundamenta en tres pilares innegociables: probidad absoluta,
                  innovación procesal y una disciplina orientada a garantizar que cada cliente obtenga el
                  mejor resultado posible frente a escenarios de alta complejidad.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#B8945A] hover:bg-[#A37F46] text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Conocer a los Socios</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Warm Champagne Gold Highlight Block (Faithful to Reference Image) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 xl:col-span-5"
            >
              <div className="rounded-sm bg-gradient-to-br from-[#C5A880] to-[#A8885B] p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden">
                {/* Subtle sheen highlight */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                {/* 3 Value Pillars */}
                <div className="space-y-8 relative z-10">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center shrink-0 mt-1">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-serif-luxury tracking-wide text-white mb-1">
                        Enfoque Centrado en el Cliente
                      </h3>
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                        Escuchamos cuidadosamente sus objetivos estratégicos para diseñar soluciones
                        jurídicas alineadas a su visión de negocio y protección personal.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/20" />

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center shrink-0 mt-1">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-serif-luxury tracking-wide text-white mb-1">
                        Representación Jurídica de Alto Calibre
                      </h3>
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                        Defendemos con vehemencia, rigor procesal y solvencia académica sus derechos ante
                        tribunales ordinarios y cortes arbitrales internacionales.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/20" />

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center shrink-0 mt-1">
                      <Gavel className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-serif-luxury tracking-wide text-white mb-1">
                        Gestión Estratégica y Confidencialidad
                      </h3>
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                        Manejamos cada expediente con dedicación exclusiva, precisión documental y
                        estricto secreto profesional blindado de extremo a extremo.
                      </p>
                    </div>
                  </div>

                  {/* Inset Dark Navy Plaque (matching the reference image) */}
                  <div className="pt-2">
                    <div className="rounded-sm bg-[#070B19] border border-amber-400/30 p-6 shadow-inner text-center">
                      <p className="font-serif-luxury text-xl sm:text-2xl font-bold text-white tracking-wide">
                        Más de 18 Años de Excelencia
                      </p>
                      <p className="font-serif-luxury text-lg text-amber-400 italic">
                        Jurídica Ininterrumpida
                      </p>
                      <div className="w-12 h-0.5 bg-amber-500/50 mx-auto mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
