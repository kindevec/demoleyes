import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Scale, ArrowUpRight, BookOpen, Trophy, X, CalendarCheck } from 'lucide-react';
import { ATTORNEYS } from '../data/legalData';
import { Attorney } from '../types';

interface AttorneysProps {
  onConsultPartner: (partnerName: string) => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ onConsultPartner }) => {
  const [selectedAttorneyForModal, setSelectedAttorneyForModal] = useState<Attorney | null>(null);

  return (
    <section id="abogados" className="py-20 lg:py-28 bg-gradient-to-b from-[#071326] via-[#0A1F3E] to-[#071326] text-white relative border-t border-slate-800/80 overflow-hidden">
      {/* Editorial Studio Lighting Behind Partners */}
      <div className="absolute inset-0 bg-grid-subtle opacity-45 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-blue-600/10 via-[#D4AF37]/12 to-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            Liderazgo Académico y Procesal
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Socios y Abogados Principales
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Nuestros litigios y transacciones son conducidos personalmente por profesionales con
            posgrados en las facultades de derecho más prestigiosas del mundo.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-8 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 no-scrollbar md:grid-cols-3">
          {ATTORNEYS.map((attorney, idx) => (
            <motion.div
              key={attorney.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#0B1D3A]/80 hover:bg-[#0B1D3A] border border-slate-700/80 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-xl group"
            >
              <div>
                {/* Attorney Portrait Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-transparent to-transparent opacity-95" />
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#071326]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                      {attorney.experience}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    {attorney.role}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mb-4 italic">
                    Especialidad: {attorney.specialty}
                  </p>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {attorney.bio}
                  </p>

                  {/* Academic Credentials */}
                  <div className="space-y-1.5 pt-4 border-t border-slate-800 mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Formación Académica</span>
                    </div>
                    {attorney.education.slice(0, 2).map((edu, eIdx) => (
                      <div key={eIdx} className="text-xs text-slate-300 leading-snug flex items-start gap-1.5">
                        <span className="text-[#D4AF37]">•</span>
                        <span>{edu}</span>
                      </div>
                    ))}
                  </div>

                  {/* Official Bar Number */}
                  <div className="text-[11px] text-slate-400 font-mono bg-[#071326] p-2 rounded-xl border border-slate-800 flex items-center gap-2">
                    <Scale className="w-3 h-3 text-[#D4AF37] shrink-0" />
                    <span>{attorney.barNumber}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => setSelectedAttorneyForModal(attorney)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-700/60"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Ver Trayectoria & Casos</span>
                </button>

                <button
                  onClick={() => onConsultPartner(attorney.name)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <span>Solicitar Consulta</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-950/15 flex items-center justify-center">
                    <ArrowUpRight className="w-2.5 h-2.5 text-slate-950" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Attorney Curriculum & Wins Modal */}
      <AnimatePresence>
        {selectedAttorneyForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAttorneyForModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0B1D3A] border border-slate-700/90 p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedAttorneyForModal(null)}
                aria-label="Cerrar modal"
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedAttorneyForModal.image}
                  alt={selectedAttorneyForModal.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#D4AF37]/40 shrink-0"
                />
                <div>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">
                    {selectedAttorneyForModal.role}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {selectedAttorneyForModal.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {selectedAttorneyForModal.barNumber}
                  </p>
                </div>
              </div>

              {/* Notable Wins */}
              {selectedAttorneyForModal.notableWins && (
                <div className="mb-5 p-4 rounded-2xl bg-[#071326] border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#D4AF37]" />
                    <span>Precedentes Notables & Victorias</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedAttorneyForModal.notableWins.map((win, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] font-bold">•</span>
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publications */}
              {selectedAttorneyForModal.publications && (
                <div className="mb-6 p-4 rounded-2xl bg-[#071326] border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    <span>Publicaciones Doctrinales</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-400 italic">
                    {selectedAttorneyForModal.publications.map((pub, i) => (
                      <li key={i}>"{pub}"</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Direct Booking CTA */}
              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedAttorneyForModal(null)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    const name = selectedAttorneyForModal.name;
                    setSelectedAttorneyForModal(null);
                    onConsultPartner(name);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-slate-950 font-bold text-xs tracking-wide hover:bg-[#C59B27] transition-colors flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Agendar con este Socio</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};



