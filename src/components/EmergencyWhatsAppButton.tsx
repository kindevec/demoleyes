import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const EmergencyWhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(
    'Hola Valmont & Asociados, requiero asistencia legal confidencial sobre un caso corporativo o litigio.'
  )}`;

  return (
    <aside 
      aria-label="Contacto flotante" 
      className="fixed bottom-20 sm:bottom-22 md:bottom-6 right-4 sm:right-6 z-40 md:z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative group flex items-center justify-center cursor-pointer select-none touch-manipulation"
        aria-label="Abrir WhatsApp para consulta directa con Valmont & Asociados"
        title="Contactar por WhatsApp a Valmont & Asociados"
      >
        {/* Soft Ambient Glowing Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping duration-1000 pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] opacity-40 blur-md group-hover:opacity-75 transition-opacity pointer-events-none" />

        {/* Official WhatsApp Floating Button (Meta Standards) */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.5)] border-2 border-white/30 transition-all duration-300 group-hover:scale-110 group-active:scale-95">
          <WhatsAppIcon className="w-6.5 h-6.5 sm:w-7 sm:h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
        </div>

        {/* Floating Tooltip Pill (Reveals on Desktop Hover Only) */}
        <div className="hidden md:flex absolute right-full mr-3 px-3.5 py-1.5 rounded-xl bg-slate-950/95 backdrop-blur-md text-white border border-slate-700/80 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-xl pointer-events-none items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_6px_#25D366]" />
          <span>Guardia Legal 24/7 • <strong>Escríbenos</strong></span>
        </div>
      </a>
    </aside>
  );
};

