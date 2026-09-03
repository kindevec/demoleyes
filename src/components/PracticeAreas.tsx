import React from 'react';
import { motion } from 'motion/react';
import {
  Scale,
  ShieldCheck,
  Briefcase,
  FileCheck,
  Landmark,
  Building2,
  ArrowRight,
  CheckCircle2,
  Award,
  Users
} from 'lucide-react';
import { PRACTICE_AREAS, FIRM_METRICS } from '../data/legalData';
import { SectionMedallion } from './CrestLogo';

interface PracticeAreasProps {
  selectedAreaId?: string;
  onSelectAreaForBooking: (areaId: string, areaTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  selectedAreaId,
  onSelectAreaForBooking
}) => {
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

  return (
    <section id="especialidades" className="relative bg-[#070B19] text-white pt-16 pb-28">
      {/* Centered Gold Medallion on section transition */}
      <SectionMedallion icon="scale" />

      {/* Dramatic Neoclassical Courthouse Columns Backdrop */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1600&q=80"
          alt="Columnas del Palacio de Justicia Neoclásico"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top mix-blend-overlay filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B19] via-[#070B19]/80 to-[#070B19]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Especialización Jurídica
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Nuestro Compromiso. <br />
            <span className="gold-gradient-text italic font-normal">Su Seguridad y Tranquilidad.</span>
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-6" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Abordamos las controversias y transacciones corporativas más desafiantes con equipos
            multidisciplinarios liderados directamente por socios de trayectoria internacional.
          </p>
        </div>

        {/* Live Metrics Row with Gold Icons (directly matching reference design) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-sm bg-slate-900/60 border border-white/10 backdrop-blur-md mb-20">
          <div className="text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
              <Briefcase className="w-5 h-5 text-amber-400" />
            </div>
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              {FIRM_METRICS.casesHandled}
            </div>
            <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">Casos Tramitados</span>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-amber-400" />
            </div>
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              {FIRM_METRICS.retainedCorporateClients}
            </div>
            <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">Empresas Asesoradas</span>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              {FIRM_METRICS.favorableRatio}
            </div>
            <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">Éxito en Sentencias</span>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
              <Scale className="w-5 h-5 text-amber-400" />
            </div>
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              {FIRM_METRICS.protectedAssets}
            </div>
            <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">Patrimonio Blindado</span>
          </div>
        </div>

        {/* 6 Interactive Practice Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, idx) => {
            const isHighlighted = selectedAreaId === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative rounded-sm p-7 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-slate-900/90 border-2 border-amber-400 ring-2 ring-amber-400/20 shadow-2xl shadow-amber-950/40'
                    : 'bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-amber-500/40 shadow-xl'
                } backdrop-blur-md`}
              >
                {/* Subtle top edge gold line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent group-hover:via-amber-400 transition-all" />

                <div>
                  {/* Top Bar: Icon + Tag */}
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
                  <p className="text-xs text-amber-400/80 font-medium tracking-wide mb-4">
                    {area.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* 3 Specific Services List */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10">
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

                {/* Direct Action Link */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectAreaForBooking(area.id, area.title)}
                    className="w-full py-2.5 px-4 rounded-sm bg-white/5 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-400 border border-amber-500/30 group-hover:border-transparent text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Consultar en esta área</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architectural Photo Plaque (just like in the reference image bottom right) */}
        <div className="mt-16 relative rounded-sm overflow-hidden border border-white/15 max-w-4xl mx-auto shadow-2xl">
          <div className="h-64 sm:h-80 relative">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
              alt="Tribunales y Sala de Audiencias"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B19] via-[#070B19]/60 to-transparent" />

            {/* Floating Dark Plaque */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-auto max-w-md bg-[#070B19]/90 backdrop-blur-md border border-amber-400/30 p-6 rounded-sm shadow-2xl">
              <h4 className="font-serif-luxury text-2xl font-bold text-white mb-1">
                Justicia Estratégica.
              </h4>
              <p className="font-serif-luxury text-xl text-amber-400 italic">
                Defendiendo Derechos. Protegiendo Legados.
              </p>
              <div className="w-12 h-0.5 bg-amber-500/60 mt-3 mb-2" />
              <p className="text-xs text-slate-300">
                Atención preferencial a directores de empresa, accionistas y patrimonios familiares.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
