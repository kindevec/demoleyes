import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowUpRight, CheckCircle2, Award, Scale, BookOpen, Users } from 'lucide-react';

interface WhoWeAreProps {
  onLearnMore: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onLearnMore }) => {
  const [activeTab, setActiveTab] = useState<'esencia' | 'rigor' | 'gobernanza'>('esencia');

  return (
    <section id="quienes-somos" className="relative bg-gradient-to-b from-[#071326] via-[#0A1E3D] to-[#071326] text-white py-20 lg:py-28 overflow-hidden ">
      {/* Rich Multi-color Ambient Orbs & Atmospheric Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Interactive Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Small Gold Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-5">
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Institucional • Tradición y Rigor</span>
            </div>

            {/* Deluxe Multi-font & Multi-color Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-6">
              <span className="font-extrabold text-white">Abogacía de</span>{' '}
              <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4C2] via-[#D4AF37] to-[#C59B27] drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                Élite
              </span>. <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Resultados
              </span>{' '}
              <span className="font-serif-deluxe italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
                Comprobados
              </span>.
            </h2>

            {/* Seamless Underline Tabs */}
            <div className="flex items-center gap-6 mb-6 border-b border-slate-800 pb-3">
              <button
                onClick={() => setActiveTab('esencia')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1 ${
                  activeTab === 'esencia' ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Nuestra Esencia</span>
                {activeTab === 'esencia' && (
                  <motion.div layoutId="tab-underline" className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('rigor')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1 ${
                  activeTab === 'rigor' ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Rigor Procesal</span>
                {activeTab === 'rigor' && (
                  <motion.div layoutId="tab-underline" className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('gobernanza')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-1 ${
                  activeTab === 'gobernanza' ? 'text-[#D4AF37]' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Gobernanza Ética</span>
                {activeTab === 'gobernanza' && (
                  <motion.div layoutId="tab-underline" className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'esencia' && (
                <motion.div
                  key="tab-esencia"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
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
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
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
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
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

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 pt-2 ">
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

            <div>
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

          {/* Right Column: Editorial Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-start space-y-6"
          >
            {/* Photo Card with Floating Glass Ribbon */}
            <div className="relative -mx-4 sm:mx-0 rounded-none sm:rounded-3xl overflow-hidden border-y sm:border border-slate-800 shadow-2xl aspect-[16/10] sm:aspect-[16/11] w-auto sm:w-full group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Sede Central Valmont & Asociados"
                loading="lazy"
                decoding="async"
                width={1200}
                height={825}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/40 to-transparent pointer-events-none" />

              {/* Floating Glass Plaque */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-2xl bg-[#071326]/90 backdrop-blur-xl border border-slate-700/80 shadow-xl">
                <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-heading">
                    Trayectoria Consolidada
                  </span>
                </div>
                <p className="font-heading font-extrabold text-lg text-white">
                  Más de 18 Años de <span className="font-serif-deluxe italic font-light text-[#D4AF37]">Excelencia Jurídica</span>
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Quito • Guayaquil • Alianzas Internacionales
                </p>
              </div>
            </div>

            {/* 3 Pillars in an Open Typographic Grid */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    Enfoque Estratégico en el Negocio
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    Soluciones legales diseñadas para preservar la continuidad operativa y la reputación del cliente.
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-800/80" />

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    Rigor Probatorio & Defensa Activa
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    Patrocinio directo con simulación previa de audiencias ante cortes ordinarias y arbitrales.
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-800/80" />

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    Confidencialidad Fiduciaria
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                    Custodia de expedientes y acuerdos de secreto respaldados bajo estándar ISO 27001.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};



