import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileSearch, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, RefreshCw, CalendarCheck, MessageSquare } from 'lucide-react';

interface CaseDiagnosticWizardProps {
  onApplyDiagnosisToForm: (nature: string, urgency: string, notes: string) => void;
}

export const CaseDiagnosticWizard: React.FC<CaseDiagnosticWizardProps> = ({ onApplyDiagnosisToForm }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedNature, setSelectedNature] = useState<string>('');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('');
  const [hasDocumentation, setHasDocumentation] = useState<string>('');
  const [folioCode, setFolioCode] = useState<string>('');

  const handleNextToStep2 = (nature: string) => {
    setSelectedNature(nature);
    setStep(2);
  };

  const handleNextToStep3 = (urgency: string) => {
    setSelectedUrgency(urgency);
    setStep(3);
  };

  const handleCompleteDiagnosis = (docs: string) => {
    setHasDocumentation(docs);
    const randomFolio = `VZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setFolioCode(randomFolio);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedNature('');
    setSelectedUrgency('');
    setHasDocumentation('');
    setFolioCode('');
  };

  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-[#071326] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            <FileSearch className="w-3.5 h-3.5 text-[#D4AF37]" />
            Evaluador de Viabilidad 24/7
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-3">
            Diagnóstico Preliminar de Caso
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Identifique la urgencia procesal de su situación en 3 pasos breves para asignar al socio
            especialista con mayor afinidad técnica.
          </p>
        </div>

        {/* Progress Bar with Kindev Gold Accent */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            <span>Paso {Math.min(step, 3)} de 3</span>
            <span>{step === 4 ? '100% Completado' : `${((step - 1) / 3) * 100}%`}</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FDE047]"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Wizard Card Container */}
        <div className="rounded-3xl bg-[#0B1D3A]/90 border border-slate-700/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Materia */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="font-heading font-bold text-xl text-white mb-1">
                    1. ¿Cuál es la naturaleza principal de su requerimiento?
                  </h3>
                  <p className="text-xs text-slate-400">
                    Seleccione el área que mejor describa su consulta o controversia actual.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Disputa Judicial o Arbitral (Litigios)', id: 'Litigio Judicial' },
                    { label: 'Investigación Penal Económica / Fraude', id: 'Penal Económico' },
                    { label: 'Fusión, Venta o Pacto de Socios (M&A)', id: 'Societario M&A' },
                    { label: 'Contingencia Fiscal o Determinación SRI', id: 'Tributario SRI' },
                    { label: 'Blindaje Patrimonial / Family Office', id: 'Protección Patrimonial' },
                    { label: 'Conflicto Laboral de Alta Dirección', id: 'Laboral Ejecutivo' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNextToStep2(item.id)}
                      className="p-4 rounded-2xl bg-[#071326] hover:bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Urgencia */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">
                      2. ¿Cuál es el nivel de urgencia o plazo perentorio?
                    </h3>
                    <p className="text-xs text-slate-400">
                      Indica si existen términos judiciales o citaciones en curso.
                    </p>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Volver
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Inmediata (< 24h): Citación judicial, allanamiento o medida cautelar', id: 'Urgente Inmediata' },
                    { label: 'Alta (2 a 5 días): Término para contestar demanda o recurso procesal', id: 'Alta Prioridad' },
                    { label: 'Preventiva / Planificada: Consulta societaria o estructuración futura', id: 'Planificada Preventiva' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNextToStep3(item.id)}
                      className="w-full p-4 rounded-2xl bg-[#071326] hover:bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Documentación */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">
                      3. ¿Dispone de documentación o expediente digital?
                    </h3>
                    <p className="text-xs text-slate-400">
                      Ayuda a preparar la primera reunión con el socio titular.
                    </p>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Volver
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Sí, dispongo de copias de demandas, contratos o notificaciones', id: 'Documentación Completa' },
                    { label: 'Parcial, dispongo de antecedentes pero requiero gestión de copias judiciales', id: 'Documentación Parcial' },
                    { label: 'No, requiero auditoría desde cero para levantar el expediente', id: 'Sin Documentación' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleCompleteDiagnosis(item.id)}
                      className="w-full p-4 rounded-2xl bg-[#071326] hover:bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                        {item.label}
                      </span>
                      <CheckCircle2 className="w-5 h-5 text-slate-600 group-hover:text-[#D4AF37] transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Resultado & Transferencia */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                  <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Código de Diagnóstico Confidencial:</span>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-[#D4AF37] tracking-wider mt-0.5">
                    {folioCode}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#071326] border border-slate-800 text-left text-xs space-y-2 max-w-lg mx-auto text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Naturaleza:</span>
                    <strong className="text-white">{selectedNature}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Nivel de Urgencia:</span>
                    <strong className="text-[#D4AF37]">{selectedUrgency}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Soporte Documental:</span>
                    <strong className="text-white">{hasDocumentation}</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      const notes = `[Diagnóstico Folio: ${folioCode}]\nMateria: ${selectedNature}\nUrgencia: ${selectedUrgency}\nDocs: ${hasDocumentation}`;
                      onApplyDiagnosisToForm(selectedNature, selectedUrgency, notes);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <CalendarCheck className="w-4 h-4 text-slate-950" />
                    <span>Transferir al Formulario de Agendamiento</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reiniciar Diagnóstico</span>
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
