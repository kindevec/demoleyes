import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, Gavel, ArrowRight, Landmark, CheckCircle2, Award } from 'lucide-react';
import { SectionMedallion } from './CrestLogo';

interface WhoWeAreProps {
  onLearnMore: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onLearnMore }) => {
  return (
    <section id="quienes-somos" className="relative z-20 bg-[#070B19] text-white pt-12 pb-24 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Gold Medallion on the transition boundary */}
      <SectionMedallion icon="landmark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 xl:col-span-7"
          >
            {/* Small Gold Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">
              <Landmark className="w-3.5 h-3.5 text-amber-400" />
              <span>Institucional • Nuestra Esencia</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-6">
              Abogacía de Élite. <br />
              <span className="gold-gradient-text font-normal italic">Resultados Comprobados.</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              <p>
                Somos una firma jurídica boutique comprometida con brindar orientación estratégica de
                máxima precisión técnica y representación judicial inquebrantable. Trabajamos en estrecha
                asociación con directorios de corporaciones, fondos de inversión y familias de alto patrimonio.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Nuestra práctica se fundamenta en tres pilares innegociables: probidad ética absoluta,
                rigor técnico y una disciplina orientada a garantizar que cada cliente obtenga la
                máxima seguridad procesal frente a escenarios de alta complejidad.
              </p>
            </div>

            {/* Quick Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 max-w-xl">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Patrocinio directo por Socios Titulares</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Protocolos de secreto cifrado ISO 27001</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Red de corresponsalía en EE.UU. y Europa</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Estructura tarifaria con total transparencia</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Conocer a los Socios</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Warm Champagne Gold Highlight Block */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <div className="rounded-sm bg-gradient-to-br from-[#18233C] via-[#0F182E] to-[#070B19] border border-amber-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Subtle sheen highlight */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              {/* 3 Value Pillars */}
              <div className="space-y-6 relative z-10">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif-luxury tracking-wide text-white mb-1">
                      Enfoque Estratégico en el Cliente
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Escuchamos minuciosamente sus objetivos para diseñar soluciones jurídicas
                      alineadas con su visión de negocio, reputación y continuidad operativa.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif-luxury tracking-wide text-white mb-1">
                      Representación Jurídica de Alto Calibre
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Defendemos con vehemencia procesal y solvencia académica sus derechos ante
                      tribunales ordinarios y cortes arbitrales nacionales e internacionales.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-1">
                    <Gavel className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif-luxury tracking-wide text-white mb-1">
                      Gestión Preventiva y Confidencialidad
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Manejamos cada expediente con dedicación exclusiva, rigor probatorio y estricto
                      secreto profesional blindado desde el primer contacto.
                    </p>
                  </div>
                </div>

                {/* Inset Navy Plaque */}
                <div className="pt-2">
                  <div className="rounded-sm bg-[#040711]/90 border border-amber-400/40 p-5 shadow-inner text-center">
                    <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Trayectoria Consolidada</span>
                    </div>
                    <p className="font-serif-luxury text-xl sm:text-2xl font-bold text-white tracking-wide">
                      Más de 18 Años de Excelencia
                    </p>
                    <p className="font-serif-luxury text-base text-amber-300 italic">
                      Jurídica Ininterrumpida
                    </p>
                    <div className="w-12 h-0.5 bg-amber-500/60 mx-auto mt-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
