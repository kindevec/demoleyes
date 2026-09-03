import React from 'react';
import { MessageCircle, ShieldAlert } from 'lucide-react';

export const EmergencyWhatsAppButton: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/593999999999?text=Hola%2C%20requiero%20asistencia%20legal%20urgente%20con%20el%20equipo%20de%20Valenzuela%20%26%20Asociados.';

  return (
    <aside aria-label="Canal de Asistencia Inmediata" className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-whatsapp-urgencias"
        className="group relative flex items-center gap-3 pl-3.5 pr-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-900 border border-emerald-500/40 shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105 backdrop-blur-md"
      >
        {/* Pulsing Green Indicator Ring */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/40">
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-slate-950" />
          </span>
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              Línea Urgencias 24/7
            </span>
          </div>
          <span className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
            Guardia Legal Inmediata
          </span>
        </div>
      </a>
    </aside>
  );
};
