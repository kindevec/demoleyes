import React from 'react';
import { Scale, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateToBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#071326] text-slate-300 border-t border-slate-800/80 pt-12 pb-24 md:pt-16 md:pb-12 overflow-hidden text-xs">
      {/* Top Ambient Glow Accent Line */}
      <div className="absolute top-0 right-1/2 left-1/2 h-[1px] w-2/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid (SmartLegal Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand Info (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#996515] p-[1px] shadow-md shadow-[#D4AF37]/15 flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-[11px] bg-[#071326] flex items-center justify-center">
                  <Scale className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base tracking-tight text-white leading-tight">
                  VALENZUELA <span className="text-[#D4AF37]">&</span> ASOC.
                </span>
                <span className="text-[8.5px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
                  Firma Jurídica de Élite
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Asesoría jurídica de alta especialización en litigios de cuantía, estructuración M&A, defensa penal económica y resguardo patrimonial fiduciario en Ecuador.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B1D3A] hover:bg-[#D4AF37] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B1D3A] hover:bg-[#D4AF37] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B1D3A] hover:bg-[#25D366] hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-medium pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Secreto Profesional Estricto (Art. 11 Código de Ética)</span>
            </div>
          </div>

          {/* Col 2: Áreas de Práctica (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-2">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5 mb-2">
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Áreas de Práctica</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('especialidades')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Derecho Corporativo & M&A
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('especialidades')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Litigios & Penal Económico
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('especialidades')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Tributario & Fiscalidad
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('especialidades')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Protección Patrimonial & Trusts
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('especialidades')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Compliance Laboral Ejecutivo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegación Rápida (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-2">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-2">
              Navegación
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('inicio')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quienes-somos')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  La Firma
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('diagnostico')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Diagnóstico
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('honorarios')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Honorarios
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('abogados')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  Socios
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Institucional (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-2">
              Contacto Matriz
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Av. República del Salvador y NNUU, Edif. Titanium Plaza, Piso 14, Quito.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>+593 (02) 394-8200</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>consultas@valenzuela-abogados.com</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onNavigateToBooking}
                className="w-full py-2.5 px-4 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 font-bold text-xs transition-all cursor-pointer text-center flex items-center justify-center gap-2 active:scale-95 shadow-md"
              >
                <span>Solicitar Consulta</span>
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950/15 flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5 text-slate-950" />
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Kindev Standard */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© 2026 Valenzuela & Asociados. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-3">
            <span>
              Quito, Ecuador • Creado por{' '}
              <a
                href="https://kindevx.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline font-bold"
              >
                Kindev S.A.S.
              </a>
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer font-semibold ml-2"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
