import React from 'react';
import { CrestLogo } from './CrestLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050812] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <CrestLogo size="sm" />
            <p className="text-slate-400 text-xs leading-relaxed pt-2">
              Firma jurídica de élite enfocada en litigios de alta complejidad, estructuraciones
              societarias, derecho penal económico y resguardo patrimonial intergeneracional.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-400/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Secreto Profesional Estricto (Art. 11 Código de Ética)</span>
            </div>
          </div>

          {/* Sede Corporativa & Contacto */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white uppercase tracking-wider">
              Sede Corporativa
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Av. República del Salvador y Naciones Unidas, Edificio Titanium Plaza, Piso 14, Distrito Financiero.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>PBX: +593 (02) 394-8200 / +593 99 999 9999</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>consultas@valenzuela-abogados.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lun - Vie: 08:30 - 18:30 | Guardia Penal 24/7</span>
              </div>
            </div>
          </div>

          {/* Prácticas Principales */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white uppercase tracking-wider">
              Especialidades
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Derecho Corporativo y M&A</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Litigios Complejos y Arbitraje</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Defensa Penal Económica</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Protección Patrimonial y Fideicomisos</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Asesoría Tributaria Estratégica</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Compliance Laboral y Empresas</a></li>
            </ul>
          </div>

          {/* Enlaces de Interés & Transparencia */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white uppercase tracking-wider">
              Gobernanza & Cumplimiento
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#diagnostico" className="hover:text-amber-400 transition-colors">Evaluador de Urgencias 24/7</a></li>
              <li><a href="#abogados" className="hover:text-amber-400 transition-colors">Colegiaturas y Certificaciones</a></li>
              <li><a href="#casos" className="hover:text-amber-400 transition-colors">Protocolo de Confidencialidad ISO 27001</a></li>
              <li><a href="#agendar" className="hover:text-amber-400 transition-colors">Agendamiento Privado de Caso</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Política de Honorarios Transparentes</a></li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="p-4 rounded bg-slate-950/60 border border-white/5 text-[11px] text-slate-400 leading-relaxed mb-8">
          <p className="font-semibold text-slate-300 mb-1">Aviso Legal y Descargo de Responsabilidad Profesional:</p>
          <p>
            El contenido de este sitio web tiene propósitos estrictamente informativos y descriptivos de la
            práctica profesional de la firma. No constituye dictamen, opinión jurídica vinculante ni
            establece por sí mismo una relación formal abogado-cliente hasta la suscripción del
            correspondiente contrato de prestación de servicios profesionales y aceptación del encargo.
          </p>
        </div>

        {/* Bottom Bar with Mandatory Kindev Branding */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Valenzuela & Asociados. Todos los derechos reservados.
          </div>
          <div className="text-amber-400/90 font-medium">
            Desarrollado por Kindev
          </div>
        </div>

      </div>
    </footer>
  );
};
