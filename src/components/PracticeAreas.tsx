import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scale,
  ShieldCheck,
  Briefcase,
  FileCheck,
  Landmark,
  Building2,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Award,
  Users
} from 'lucide-react';
import { PRACTICE_AREAS, FIRM_METRICS } from '../data/legalData';
import { SectionMedallion } from './CrestLogo';
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
        return <Scale className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Landmark':
      default:
        return <Landmark className="w-6 h-6 text-amber-400" />;
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
    <section id="especialidades" className="relative bg-[#070B19] text-white pt-16 pb-28">
      {/* Centered Gold Medallion on section transition */}
      <SectionMedallion icon="scale" />

      {/* Dramatic Neoclassical Courthouse Columns Backdrop */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1600&q=80"
          alt="Columnas del Palacio de Justicia Neoclásico"
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top mix-blend-overlay filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B19] via-[#070B19]/80 to-[#070B19]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Especialización Jurídica Integral
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Nuestro Compromiso. <br />
            <span className="gold-gradient-text italic font-normal">Su Seguridad y Tranquilidad.</span>
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Abordamos las controversias y transacciones corporativas más exigentes con equipos
            multidisciplinarios liderados directamente por socios de trayectoria internacional comprobada.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-bold'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/10 hover:border-amber-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`group relative rounded-sm p-7 flex flex-col justify-between transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-slate-900/95 border-2 border-amber-400 ring-2 ring-amber-400/20 shadow-2xl shadow-amber-950/50'
                      : 'bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-amber-500/40 shadow-xl'
                  } backdrop-blur-md`}
                >
                  {/* Subtle top edge gold hairline */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent group-hover:via-amber-400 transition-all" />

                  <div>
                    {/* Top Bar: Icon + Tag + Inspector Button */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#17223b] to-[#0d1424] border border-amber-500/30 flex items-center justify-center shadow-md group-hover:border-amber-400 transition-colors">
                        {getIcon(area.iconName)}
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {area.tag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium tracking-wide mb-4">
                      {area.subtitle}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* 3 Specific Services List */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                      {area.services.map((srv, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-300 font-medium leading-tight">
                            {srv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 space-y-2.5 border-t border-white/5">
                    <button
                      onClick={() => onOpenAreaDetail(area)}
                      className="w-full py-2 px-3 rounded-sm bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Ver Alcance & Casos Típicos</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </button>

                    <button
                      onClick={() => onSelectAreaForBooking(area.id, area.title)}
                      className="w-full py-2.5 px-4 rounded-sm bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Agendar Consulta</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
