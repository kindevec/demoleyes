import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
import { EmergencyWhatsAppButton } from './components/EmergencyWhatsAppButton';
import { PracticeArea } from './types';

export default function App() {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>('corporativo-m-a');
  const [preselectedNotes, setPreselectedNotes] = useState<string>('');
  const [modalArea, setModalArea] = useState<PracticeArea | null>(null);

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
    setPreselectedNotes(`[Consulta prioritaria sobre el área: ${areaTitle}]`);
    scrollTo('agendar');
  };

  const handleApplyDiagnosis = (nature: string, urgency: string, notes: string) => {
    setPreselectedNotes(`${notes}\nNaturaleza del caso: ${nature}\nNivel de urgencia: ${urgency}`);
    scrollTo('agendar');
  };

  const handleConsultPartner = (partnerName: string) => {
    setPreselectedNotes(`[Solicitud de consulta dirigida específicamente al socio: ${partnerName}]`);
    scrollTo('agendar');
  };

  const handleSelectPlanForBooking = (planName: string) => {
    setPreselectedNotes(`[Interés en esquema de honorarios: ${planName}]`);
    scrollTo('agendar');
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Desktop Sticky Header & Mobile Bottom Nav Bar */}
      <Navbar onNavigateToBooking={() => scrollTo('agendar')} />

      {/* Root Container with mandatory KINDEV constraints: overflow-x-hidden and pb-24 md:pb-12 */}
      <main className="overflow-x-hidden pb-24 md:pb-12">
        {/* 1. Hero Section de Alto Impacto */}
        <Hero
          onSelectArea={handleSelectAreaFromHero}
          onNavigateToBooking={() => scrollTo('agendar')}
        />

        {/* 2. Sección Quiénes Somos / Institucional con Tabs Interactivos */}
        <WhoWeAre onLearnMore={() => scrollTo('abogados')} />

        {/* 3. Áreas de Práctica con Filtros Dinámicos */}
        <PracticeAreas
          selectedAreaId={selectedPracticeArea}
          onSelectAreaForBooking={handleSelectAreaForBooking}
          onOpenAreaDetail={(area) => setModalArea(area)}
        />

        {/* 4. Evaluador Interactivo de Caso (Wizard en 3 Clics con Código de Folio) */}
        <CaseDiagnosticWizard onApplyDiagnosisToForm={handleApplyDiagnosis} />

        {/* 5. Simulador de Modelos de Honorarios y Transparencia Tarifaria (Nuevo) */}
        <FeeCalculator onSelectPlanForBooking={handleSelectPlanForBooking} />

        {/* 6. Equipo de Socios y Abogados Principales con Modal de Trayectoria */}
        <Attorneys onConsultPartner={handleConsultPartner} />

        {/* 7. Prueba Social, Sellos ISO 27001 y Casos Emblemáticos Resueltos */}
        <CaseStudiesAndProof />

        {/* 8. Formulario de Agendamiento Seguro con Cifrado Simulado */}
        <BookingForm
          preselectedArea={selectedPracticeArea}
          preselectedNotes={preselectedNotes}
          onClearPreselection={() => setPreselectedNotes('')}
        />

        {/* 9. Preguntas Frecuentes con Búsqueda en Vivo y Filtros de Categoría */}
        <FaqAccordion />

        {/* 10. Footer Corporativo Multisede */}
        <Footer />
      </main>

      {/* Canal Flotante de Emergencia (WhatsApp Inteligente 24/7) */}
      <EmergencyWhatsAppButton />

      {/* Modal de Detalle de Área de Práctica */}
      <AreaDetailModal
        area={modalArea}
        isOpen={modalArea !== null}
        onClose={() => setModalArea(null)}
        onSelectForBooking={handleSelectAreaForBooking}
      />
    </div>
  );
}
