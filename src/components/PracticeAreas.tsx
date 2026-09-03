import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scale,
  ShieldCheck,
  Briefcase,
  FileCheck,
  Landmark,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
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
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#D4AF37]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'Landmark':
      default:
        return <Landmark className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const filterCategories = [
    { id: 'all', label: 'Todas las Áreas' },
    { id: 'Corporativo', label: 'Corporativo & M&A' },
    { id: 'Litigios', label: 'Litigios & Penal' },
    { id: 'Tributario', label: 'Tributario' },
    { id: 'Patrimonial', label: 'Patrimonial' },
    { id: 'Compliance', label: 'Compliance' },
    { id: 'Inmobiliario', label: 'Inmobiliario' }
  ];

  const filteredAreas =
    activeFilter === 'all'
      ? PRACTICE_AREAS
      : PRACTICE_AREAS.filter((a) => a.tag.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="especialidades" className="relative bg-[#071326] text-white py-20 lg:py-28 border-t border-slate-800/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            Especialización Jurídica Integral
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Áreas de Práctica & Defensa
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Abordamos las controversias y transacciones corporativas más exigentes con equipos
            multidisciplinarios liderados directamente por socios de trayectoria comprobada.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#0B1D3A]/80 text-slate-300 hover:text-white border border-slate-700/60 hover:border-[#D4AF37]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAreas.map((area, idx) => {
              const isHighlighted = selectedAreaId === area.id;

              return (
                <motion.div
                  layout
                  key={area.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-[#0B1D3A] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30'
                      : 'bg-[#0B1D3A]/80 hover:bg-[#0B1D3A] border border-slate-700/80 hover:border-[#D4AF37]/40 shadow-xl'
                  } backdrop-blur-xl group`}
                >
                  <div>
                    {/* Top Bar: Icon + Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        {getIcon(area.iconName)}
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                        {area.tag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium tracking-wide mb-4">
                      {area.subtitle}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* 3 Specific Services List */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800">
                      {area.services.map((srv, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-300 font-medium leading-tight">
                            {srv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-3 space-y-2 border-t border-slate-800">
                    <button
                      onClick={() => onOpenAreaDetail(area)}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-700/60"
                    >
                      <span>Ver Alcance & Casos</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </button>

                    <button
                      onClick={() => onSelectAreaForBooking(area.id, area.title)}
                      className="w-full py-2.5 px-4 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                    >
                      <span>Agendar Consulta</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-slate-950/15 flex items-center justify-center">
                        <ArrowUpRight className="w-2.5 h-2.5 text-slate-950" />
                      </div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
