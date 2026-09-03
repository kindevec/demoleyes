import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, ShieldCheck, FileCheck, Building2, Briefcase, Landmark, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  selectedAreaId?: string;
  onSelectAreaForBooking: (areaId: string, areaTitle: string) => void;
  onOpenAreaDetail: (area: PracticeArea) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  selectedAreaId,
  onSelectAreaForBooking,
  onOpenAreaDetail
}) => {
  const [filter, setFilter] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    Scale: <Scale className="w-4 h-4" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4" />,
    FileCheck: <FileCheck className="w-4 h-4" />,
    Building2: <Building2 className="w-4 h-4" />,
    Briefcase: <Briefcase className="w-4 h-4" />,
    Landmark: <Landmark className="w-4 h-4" />,
  };

  const categories = [
    { id: 'all', label: 'Todas las Especialidades' },
    { id: 'Corporativo', label: 'Corporativo & M&A' },
    { id: 'Litigios', label: 'Litigios & Penal' },
    { id: 'Tributario', label: 'Tributario' },
    { id: 'Patrimonial', label: 'Patrimonial & Trusts' },
    { id: 'Compliance', label: 'Compliance' },
    { id: 'Inmobiliario', label: 'Inmobiliario' },
  ];

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    if (filter === 'all') return true;
    return area.tag.toLowerCase() === filter.toLowerCase();
  });

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-gradient-to-b from-[#071326] via-[#0A2042] to-[#071326] text-white relative border-t border-slate-800/80 overflow-hidden">
      {/* Luxury Dot-Matrix Texture & Ambient Light Halos */}
      <div className="absolute inset-0 bg-dots-pattern opacity-35 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            Práctica Jurídica Transversal
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            <span className="font-extrabold text-white">Áreas de</span>{" "}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4C2] via-[#D4AF37] to-[#C59B27] drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Práctica
            </span>{" "}
            <span className="font-extrabold text-slate-300">&</span>{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#BAE6FD] via-slate-100 to-white">
              Especialidades
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Asistencia jurídica integral estructurada por departamentos altamente especializados,
            conduciendo cada mandato bajo los más estrictos estándares internacionales.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#0B1D3A]/60 text-slate-300 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 High-Impact Visual Practice Area Cards with Photography */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-8 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 no-scrollbar md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredAreas.map((area) => {
              const isSelected = selectedAreaId === area.id;

              return (
                <motion.div
                  key={area.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`w-[86vw] sm:w-auto shrink-0 md:shrink snap-center rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-xl ${
                    isSelected
                      ? 'bg-[#0B1D3A] border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/20'
                      : 'bg-[#0B1D3A]/60 hover:bg-[#0B1D3A] border border-slate-800 hover:border-[#D4AF37]/40'
                  }`}
                >
                  {/* High-Resolution Photo Header */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-[#0B1D3A]/40 to-transparent pointer-events-none" />

                    {/* Floating Pill Badge & Icon */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                        {area.tag}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 flex items-center justify-center text-[#D4AF37]">
                        {iconMap[area.iconName] || <Scale className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {area.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#D4AF37] mb-3">
                        {area.subtitle}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-5">
                        {area.description}
                      </p>

                      {/* Services Checklist */}
                      <div className="space-y-2 mb-6 pt-2 border-t border-slate-800">
                        {area.services.slice(0, 3).map((srv, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{srv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onOpenAreaDetail(area)}
                        className="text-xs font-semibold text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>Detalles & Precedentes</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onSelectAreaForBooking(area.id, area.title)}
                        className="px-4 py-2 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 transition-all cursor-pointer shadow-md active:scale-95"
                      >
                        <span>Consultar</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 text-[11px] text-[#D4AF37] font-medium">
          <span>Desliza horizontalmente para explorar especialidades →</span>
        </div>

      </div>
    </section>
  );
};



