import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Scale, ShieldCheck, Briefcase, FileCheck, Building2, Landmark, CheckCircle2, ArrowRight, UserCheck, Clock } from 'lucide-react';
import { PracticeArea } from '../types';

interface AreaDetailModalProps {
  area: PracticeArea | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForBooking: (areaId: string, areaTitle: string) => void;
}

export const AreaDetailModal: React.FC<AreaDetailModalProps> = ({
  area,
  isOpen,
  onClose,
  onSelectForBooking
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !area) return null;

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-sm bg-[#0A1024] border border-amber-500/40 p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Header */}
          <div className="flex items-start gap-4 mb-6 pr-8">
            <div className="w-12 h-12 rounded-sm bg-slate-900 border border-amber-500/40 flex items-center justify-center shrink-0 mt-1 shadow-md">
              {getIcon(area.iconName)}
            </div>
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-2">
                {area.tag}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-400/90 font-medium mt-1">
                {area.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {area.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Typical Cases */}
            <div className="p-5 rounded-sm bg-slate-950/70 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Casos Típicos Atendidos</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {area.typicalCases.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Strategic Benefits */}
            <div className="p-5 rounded-sm bg-slate-950/70 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Ventajas Estratégicas</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {area.keyBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Partner & Turnaround */}
          <div className="p-4 rounded-sm bg-[#070B19] border border-amber-500/20 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Socio Responsable del Área:</span>
                <span className="text-xs font-bold text-white font-serif-luxury">{area.leadPartner}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{area.turnaroundTime}</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-sm text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cerrar Detalle
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(area.id, area.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Consulta en esta Especialidad</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
