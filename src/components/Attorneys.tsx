import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Scale, ArrowUpRight } from 'lucide-react';
import { ATTORNEYS } from '../data/legalData';

interface AttorneysProps {
  onConsultPartner: (partnerName: string) => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ onConsultPartner }) => {
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

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onConsultPartner(attorney.name)}
                  className="w-full py-2.5 px-4 rounded-sm bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/25 hover:border-transparent text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Consulta Directa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
