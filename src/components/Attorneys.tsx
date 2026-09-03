import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Scale, ArrowUpRight, BookOpen, Trophy, X, CalendarCheck } from 'lucide-react';
import { ATTORNEYS } from '../data/legalData';
import { Attorney } from '../types';

interface AttorneysProps {
  onConsultPartner: (partnerName: string) => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ onConsultPartner }) => {
  const [selectedAttorneyForModal, setSelectedAttorneyForModal] = useState<Attorney | null>(null);

  return (
    <section id="abogados" className="py-24 bg-[#070B19] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Liderazgo Académico y Procesal
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Socios y Abogados Principales
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg">
            Nuestros litigios y transacciones son dirigidos personalmente por profesionales con
            posgrados en las facultades de derecho más prestigiosas del mundo y trayectoria probada
            en la alta judicatura.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ATTORNEYS.map((attorney, idx) => (
            <motion.div
              key={attorney.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-sm bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-sm"
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
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-90" />
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#070B19]/80 backdrop-blur-md text-amber-300 border border-amber-400/30">
                      {attorney.experience}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7">
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-amber-400">
                    {attorney.role}
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mb-4 italic">
                    Especialidad: {attorney.specialty}
                  </p>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {attorney.bio}
                  </p>

                  {/* Academic Credentials */}
                  <div className="space-y-2 pt-4 border-t border-white/10 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Credenciales Académicas</span>
                    </div>
                    {attorney.education.map((edu, eIdx) => (
                      <div key={eIdx} className="text-xs text-slate-300 leading-snug flex items-start gap-1.5">
                        <span className="text-amber-400 text-xs">•</span>
                        <span>{edu}</span>
                      </div>
                    ))}
                  </div>

                  {/* Official Bar Number */}
                  <div className="text-[11px] text-slate-400 font-mono bg-slate-950/60 p-2 rounded border border-white/5 flex items-center gap-2">
                    <Scale className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{attorney.barNumber}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => setSelectedAttorneyForModal(attorney)}
                  className="w-full py-2 px-3 rounded-sm bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Trayectoria & Casos Ganados</span>
                </button>

                <button
                  onClick={() => onConsultPartner(attorney.name)}
                  className="w-full py-2.5 px-4 rounded-sm bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/30 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Consulta Directa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-sm bg-[#0A1024] border border-amber-500/40 p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
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
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400/40 shrink-0"
                />
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                    {selectedAttorneyForModal.role}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    {selectedAttorneyForModal.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {selectedAttorneyForModal.barNumber}
                  </p>
                </div>
              </div>

              {/* Notable Wins */}
              {selectedAttorneyForModal.notableWins && (
                <div className="mb-6 p-4 rounded bg-slate-950/70 border border-amber-500/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>Precedentes Notables & Victorias Clave</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedAttorneyForModal.notableWins.map((win, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publications */}
              {selectedAttorneyForModal.publications && (
                <div className="mb-6 p-4 rounded bg-slate-950/70 border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Tratados y Publicaciones Doctrinales</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400 italic">
                    {selectedAttorneyForModal.publications.map((pub, i) => (
                      <li key={i}>"{pub}"</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Direct Booking CTA */}
              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
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
                  className="px-5 py-2.5 rounded-sm bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Agendar Consulta con este Socio</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
