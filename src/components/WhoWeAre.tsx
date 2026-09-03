import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, ShieldCheck, Gavel, ArrowUpRight, Landmark, CheckCircle2, Award } from 'lucide-react';

interface WhoWeAreProps {
  onLearnMore: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onLearnMore }) => {
  const [activeTab, setActiveTab] = useState<'esencia' | 'rigor' | 'gobernanza'>('esencia');

  return (
    <section id="quienes-somos" className="relative z-20 bg-[#071326] text-white py-20 lg:py-28 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Small Gold Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-5">
              <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Institucional • Tradición y Rigor</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">
              Abogacía de Élite. <br />
              <span className="text-[#D4AF37]">Resultados Comprobados.</span>
            </h2>

            {/* Interactive Tabs with Kindev Pill Indicator */}
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-2">
              <button
                onClick={() => setActiveTab('esencia')}
                className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'esencia'
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Nuestra Esencia
              </button>
              <button
                onClick={() => setActiveTab('rigor')}
                className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'rigor'
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Rigor Procesal
              </button>
              <button
                onClick={() => setActiveTab('gobernanza')}
                className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'gobernanza'
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Gobernanza Ética
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'esencia' && (
                <motion.div
                  key="tab-esencia"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed mb-8"
                >
                  <p>
                    Somos una firma jurídica boutique consagrada a brindar orientación estratégica de
                    máxima precisión técnica y representación judicial inquebrantable. Acompañamos a
                    directorios de corporaciones, fondos de inversión y familias de alto patrimonio.
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Rechazamos fórmulas genéricas. Cada mandato es asumido y conducido directamente
                    por un socio titular con visión integral del negocio y estricta confidencialidad fiduciaria.
                  </p>
                </motion.div>
              )}

              {activeTab === 'rigor' && (
                <motion.div
                  key="tab-rigor"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed mb-8"
                >
                  <p>
                    Aplicamos una metodología procesal exhaustiva que incluye simulacros de audiencia,
                    peritajes forenses contables y análisis probabilístico de la jurisprudencia más reciente.
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Este estándar asegura que ninguna variable quede al azar frente a tribunales ordinarios
                    o cortes arbitrales internacionales CIADI y CCI.
                  </p>
                </motion.div>
              )}

              {activeTab === 'gobernanza' && (
                <motion.div
                  key="tab-gobernanza"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed mb-8"
                >
                  <p>
                    La integridad es nuestro principal activo. Mantenemos estrictas políticas contra conflictos
                    de interés, auditorías fiduciarias y protocolos de custodia de expedientes bajo norma ISO 27001.
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Nuestros socios son miembros activos de los tribunales de honor de los colegios de abogados
                    y de la International Bar Association (IBA).
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Patrocinio directo por Socios Titulares</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Protocolos de secreto cifrado ISO 27001</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Corresponsalía en EE.UU., Madrid y Bogotá</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">Transparencia tarifaria formal por contrato</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <span>Conocer a los Socios Directores</span>
                <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-slate-950" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Kindev Luxury Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-[#0B1D3A]/90 border border-slate-700/80 p-8 sm:p-9 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="space-y-6 relative z-10">
                
                {/* Pillar 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white mb-1">
                      Enfoque Estratégico en el Cliente
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Escuchamos minuciosamente sus metas para diseñar soluciones jurídicas
                      alineadas con su visión de negocio, reputación y continuidad comercial.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-700/60" />

                {/* Pillar 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white mb-1">
                      Representación Jurídica de Alto Calibre
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Defendemos con vehemencia procesal y solvencia académica sus derechos ante
                      tribunales ordinarios y cortes arbitrales nacionales e internacionales.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-700/60" />

                {/* Pillar 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-1">
                    <Gavel className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white mb-1">
                      Gestión Preventiva y Confidencialidad
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Manejamos cada expediente con dedicación exclusiva, rigor probatorio y estricto
                      secreto fiduciario blindado de extremo a extremo.
                    </p>
                  </div>
                </div>

                {/* Inset Plaque */}
                <div className="pt-2">
                  <div className="rounded-2xl bg-[#071326] border border-[#D4AF37]/30 p-5 text-center shadow-inner">
                    <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mb-1">
                      <Award className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Trayectoria Consolidada</span>
                    </div>
                    <p className="font-heading font-bold text-xl text-white">
                      Más de 18 Años de Excelencia
                    </p>
                    <p className="text-xs text-[#D4AF37] font-semibold mt-0.5">
                      Jurídica Ininterrumpida
                    </p>
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
