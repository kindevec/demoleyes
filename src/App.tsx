import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientTrustLogos } from './components/ClientTrustLogos';
import { WhoWeAre } from './components/WhoWeAre';
import { PracticeAreas } from './components/PracticeAreas';
import { AreaDetailModal } from './components/AreaDetailModal';
import { CaseDiagnosticWizard } from './components/CaseDiagnosticWizard';
import { FeeCalculator } from './components/FeeCalculator';
import { Attorneys } from './components/Attorneys';
import { CaseStudiesAndProof } from './components/CaseStudiesAndProof';
import { BookingForm } from './components/BookingForm';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { EmergencyWhatsAppButton } from './components/EmergencyWhatsAppButton';
import { PracticeArea } from './types';

export default function App() {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>('corporativo-m-a');
  const [preselectedNotes, setPreselectedNotes] = useState<string>('');
  const [modalArea, setModalArea] = useState<PracticeArea | null>(null);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inicio',
        'quienes-somos',
        'especialidades',
        'diagnostico',
        'honorarios',
        'abogados',
        'casos',
        'agendar',
        'faq'
      ];

      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectAreaFromHero = (areaId: string) => {
    setSelectedPracticeArea(areaId);
  };

  const handleSelectAreaForBooking = (areaId: string, areaTitle: string) => {
    setSelectedPracticeArea(areaId);
    setPreselectedNotes(`[Consulta sobre especialidad: ${areaTitle}]`);
    scrollTo('agendar');
  };

  const handleApplyDiagnosis = (nature: string, urgency: string, notes: string) => {
    setPreselectedNotes(`${notes}\nNaturaleza: ${nature}\nUrgencia: ${urgency}`);
    scrollTo('agendar');
  };

  const handleConsultPartner = (partnerName: string) => {
    setPreselectedNotes(`[Consulta dirigida al socio: ${partnerName}]`);
    scrollTo('agendar');
  };

  const handleSelectPlanForBooking = (planName: string) => {
    setPreselectedNotes(`[Interés en esquema de honorarios: ${planName}]`);
    scrollTo('agendar');
  };

  return (
    <div className="min-h-screen bg-[#071326] text-slate-100 selection:bg-[#D4AF37] selection:text-slate-950 font-sans">
      {/* Desktop Sticky Header */}
      <Navbar
        onNavigateToBooking={() => scrollTo('agendar')}
        activeSection={activeSection}
      />

      {/* Main Landing Page Flow */}
      <main className="overflow-x-clip w-full pb-20 md:pb-0">
        {/* 1. Hero Section */}
        <Hero
          onSelectArea={handleSelectAreaFromHero}
          onNavigateToBooking={() => scrollTo('agendar')}
        />

        {/* 2. Corporate Marquee (SmartLegal Standard) */}
        <ClientTrustLogos />

        {/* 3. La Firma (Who We Are) */}
        <WhoWeAre onLearnMore={() => scrollTo('abogados')} />

        {/* 4. Especialidades (Practice Areas) */}
        <PracticeAreas
          selectedAreaId={selectedPracticeArea}
          onSelectAreaForBooking={handleSelectAreaForBooking}
          onOpenAreaDetail={(area) => setModalArea(area)}
        />

        {/* 5. Evaluador de Viabilidad (Diagnostic Wizard) */}
        <CaseDiagnosticWizard onApplyDiagnosisToForm={handleApplyDiagnosis} />

        {/* 6. Modelos de Honorarios (Fee Calculator) */}
        <FeeCalculator onSelectPlanForBooking={handleSelectPlanForBooking} />

        {/* 7. Socios y Abogados Principales */}
        <Attorneys onConsultPartner={handleConsultPartner} />

        {/* 8. Casos de Éxito & Acreditaciones */}
        <CaseStudiesAndProof />

        {/* 9. Formulario de Agendamiento Privado */}
        <BookingForm
          preselectedArea={selectedPracticeArea}
          preselectedNotes={preselectedNotes}
          onClearPreselection={() => setPreselectedNotes('')}
        />

        {/* 10. Preguntas Frecuentes */}
        <FaqAccordion />

        {/* 11. Footer Institucional */}
        <Footer onNavigateToBooking={() => scrollTo('agendar')} />
      </main>

      {/* Mobile Bottom Navigation Bar with Tubelight Lamp */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigateToSection={scrollTo}
      />

      {/* Floating WhatsApp Emergency Button */}
      <EmergencyWhatsAppButton />

      {/* Area Detail Modal */}
      <AreaDetailModal
        area={modalArea}
        isOpen={modalArea !== null}
        onClose={() => setModalArea(null)}
        onSelectForBooking={handleSelectAreaForBooking}
      />
    </div>
  );
}
