import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { PracticeAreas } from './components/PracticeAreas';
import { CaseDiagnosticWizard } from './components/CaseDiagnosticWizard';
import { Attorneys } from './components/Attorneys';
import { CaseStudiesAndProof } from './components/CaseStudiesAndProof';
import { BookingForm } from './components/BookingForm';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { EmergencyWhatsAppButton } from './components/EmergencyWhatsAppButton';

export default function App() {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>('corporativo-m-a');
  const [preselectedNotes, setPreselectedNotes] = useState<string>('');

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

        {/* 2. Sección Quiénes Somos / Institucional (Fiel al Diseño de la Imagen de Referencia) */}
        <WhoWeAre onLearnMore={() => scrollTo('abogados')} />

        {/* 3. Áreas de Práctica (Servicios Jurídicos) */}
        <PracticeAreas
          selectedAreaId={selectedPracticeArea}
          onSelectAreaForBooking={handleSelectAreaForBooking}
        />

        {/* 4. Evaluador Interactivo de Caso (Widget de Diagnóstico Preliminar en 3 Clics) */}
        <CaseDiagnosticWizard onApplyDiagnosisToForm={handleApplyDiagnosis} />

        {/* 5. Equipo de Socios y Abogados Principales */}
        <Attorneys onConsultPartner={handleConsultPartner} />

        {/* 6. Prueba Social y Casos Anónimos Resueltos */}
        <CaseStudiesAndProof />

        {/* 7. Formulario de Agendamiento Seguro */}
        <BookingForm
          preselectedArea={selectedPracticeArea}
          preselectedNotes={preselectedNotes}
          onClearPreselection={() => setPreselectedNotes('')}
        />

        {/* 8. Preguntas Frecuentes (FAQ Acordeón) */}
        <FaqAccordion />

        {/* 9. Footer Corporativo Oficial */}
        <Footer />
      </main>

      {/* Canal Flotante de Emergencia (WhatsApp Inteligente 24/7) */}
      <EmergencyWhatsAppButton />
    </div>
  );
}
