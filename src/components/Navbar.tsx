import React, { useState, useEffect } from 'react';
import { CrestLogo } from './CrestLogo';
import { Phone, CalendarCheck, Home, Scale, FileSearch, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onNavigateToBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for nav indicators
      const sections = ['inicio', 'quienes-somos', 'especialidades', 'diagnostico', 'abogados', 'casos', 'agendar', 'faq'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'La Firma' },
    { id: 'especialidades', label: 'Áreas de Práctica' },
    { id: 'diagnostico', label: 'Diagnóstico' },
    { id: 'abogados', label: 'Socios' },
    { id: 'casos', label: 'Casos Resueltos' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* Desktop & Tablet Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070B19]/90 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-black/60 py-3.5'
            : 'bg-gradient-to-b from-[#070B19]/95 via-[#070B19]/75 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('inicio');
            }}
            className="group cursor-pointer focus:outline-none"
            id="nav-logo-btn"
          >
            <CrestLogo size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegación Principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative text-xs font-semibold tracking-wider uppercase transition-colors py-1 cursor-pointer hover:text-amber-300 ${
                    isActive ? 'text-amber-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct Phone & CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+59323948200"
              className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-amber-300 transition-colors border border-amber-500/20 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm shadow-sm"
              id="header-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+593 (02) 394-8200</span>
            </a>

            <button
              onClick={() => {
                scrollTo('agendar');
                onNavigateToBooking();
              }}
              id="header-cta-agendar"
              className="relative group overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-slate-950" />
                <span>Agendar Consulta</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (< 768px) - KINDEV Mobile-First Standard */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070B19]/95 backdrop-blur-xl border-t border-amber-500/20 px-2 py-2 pb-safe shadow-2xl shadow-black">
        <div className="grid grid-cols-4 items-center justify-items-center">
          <button
            onClick={() => scrollTo('inicio')}
            id="mobile-nav-inicio"
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'inicio' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Inicio</span>
          </button>

          <button
            onClick={() => scrollTo('especialidades')}
            id="mobile-nav-areas"
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'especialidades' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Scale className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Áreas</span>
          </button>

          <button
            onClick={() => scrollTo('diagnostico')}
            id="mobile-nav-diagnostico"
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors relative cursor-pointer ${
              activeSection === 'diagnostico' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="absolute -top-0.5 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400" />
            <FileSearch className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Diagnóstico</span>
          </button>

          <button
            onClick={() => {
              scrollTo('agendar');
              onNavigateToBooking();
            }}
            id="mobile-nav-agendar"
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'agendar' ? 'text-amber-400 font-bold' : 'text-amber-400/90 hover:text-amber-300'
            }`}
          >
            <CalendarCheck className="w-5 h-5 text-amber-400" />
            <span className="text-[10px] font-bold tracking-tight mt-1 text-amber-400">Agendar</span>
          </button>
        </div>
      </div>
    </>
  );
};
