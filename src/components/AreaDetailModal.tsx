import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Scale, ShieldCheck, Briefcase, FileCheck, Building2, Landmark, CheckCircle2, ArrowUpRight, UserCheck, Clock } from 'lucide-react';
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
        return <Scale className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#D4AF37]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'Landmark':
      default:
        return <Landmark className="w-6 h-6 text-[#D4AF37]" />;
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0B1D3A] border border-slate-700/90 p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
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
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-md">
              {getIcon(area.iconName)}
            </div>
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 mb-1.5">
                {area.tag}
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D4AF37] font-medium mt-0.5">
                {area.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {area.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Typical Cases */}
            <div className="p-4 rounded-2xl bg-[#071326] border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Casos Típicos</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {area.typicalCases.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Strategic Benefits */}
            <div className="p-4 rounded-2xl bg-[#071326] border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Ventajas Clave</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {area.keyBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4AF37]">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Partner & Turnaround */}
          <div className="p-3.5 rounded-2xl bg-[#071326] border border-slate-800 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-slate-300">
                Socio: <strong className="text-white">{area.leadPartner}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{area.turnaroundTime}</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(area.id, area.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 font-bold text-xs tracking-wide transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Solicitar Consulta en esta Especialidad</span>
              <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-slate-950" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
