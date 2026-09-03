import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onNavigateToBooking: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToBooking, activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const progress = Math.min(Math.max(y / 200, 0), 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
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
    { id: 'especialidades', label: 'Áreas' },
    { id: 'quienes-somos', label: 'La Firma' },
    { id: 'honorarios', label: 'Honorarios' },
    { id: 'casos', label: 'Casos' },
  ];

  const isScrolled = scrollProgress > 0.4;
  const bgAlpha = Math.min(0.96, 0.2 + scrollProgress * 0.76);
  const blurPx = scrollProgress * 16;
  const borderAlpha = scrollProgress > 0.3 ? ((scrollProgress - 0.3) / 0.7) * 0.8 : 0;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300 ease-out ${
        isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-5'
      }`}
    >
      {/* Background layer with progressive materialization */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none transition-all duration-200"
        style={{
          opacity: scrollProgress > 0.01 ? 1 : 0,
          backgroundColor: `rgba(7, 19, 38, ${bgAlpha})`,
          backdropFilter: blurPx > 0.5 ? `blur(${blurPx}px)` : 'none',
          WebkitBackdropFilter: blurPx > 0.5 ? `blur(${blurPx}px)` : 'none',
          borderBottom: borderAlpha > 0.01 ? `1px solid rgba(212, 175, 55, ${borderAlpha * 0.25})` : '1px solid transparent',
          boxShadow: scrollProgress > 0.4 ? '0 10px 30px -10px rgba(0, 0, 0, 0.6)' : 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Bespoke Heraldic Brand Logo (NO BOX IN BOX) */}
        <button
          onClick={() => scrollTo('inicio')}
          className="focus:outline-none cursor-pointer text-left group"
        >
          <BrandLogo size="md" />
        </button>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación Principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-xs font-semibold tracking-wide transition-all cursor-pointer relative py-1.5 ${
                  isActive
                    ? 'text-[#D4AF37] font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Phone & Golden Pill CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+59323948200"
            className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-[#D4AF37] transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>+593 (02) 394-8200</span>
          </a>

          {/* Golden Pill CTA Button (Kindev Standard) */}
          <button
            onClick={onNavigateToBooking}
            id="nav-cta-agendar"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Consulta Privada</span>
            <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 text-slate-950" />
            </div>
          </button>

          {/* Direct WhatsApp on Mobile */}
          <a
            href="https://wa.me/593999999999?text=Hola%2C%20deseo%20agendar%20una%20consulta%20jur%C3%ADdica%20privada%20con%20Valenzuela%20%26%20Asociados."
            target="_blank"
            rel="noopener noreferrer"
            className="flex sm:hidden items-center justify-center p-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
            aria-label="WhatsApp Directo"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

      </div>
    </header>
  );
};
