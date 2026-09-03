import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSearch,
  Building2,
  User,
  AlertTriangle,
  Clock,
  Calendar,
  Zap,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  MessageSquare,
  Shield,
  FileCheck
} from 'lucide-react';

interface CaseDiagnosticWizardProps {
  onApplyDiagnosisToForm: (nature: string, urgency: string, notes: string) => void;
}

export const CaseDiagnosticWizard: React.FC<CaseDiagnosticWizardProps> = ({
  onApplyDiagnosisToForm
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [caseNature, setCaseNature] = useState<'empresa' | 'persona' | 'conflicto' | null>(null);
  const [urgency, setUrgency] = useState<'inmediata' | 'planificacion' | 'audiencia' | null>(null);

  const getSpecialistDetails = () => {
    let specialist = 'Socio Director de Litigios & Estrategia Procesal';
    let time = '< 2 Horas Hábiles';
    let code = 'VAL-2026-894';

    if (caseNature === 'empresa') {
      if (urgency === 'inmediata') {
        specialist = 'Dra. Elena Mendoza & Equipo de Defensa de Emergencia';
        time = '< 1 Hora (Canal Rojo Prioritario)';
        code = 'CORP-URG-104';
      } else {
        specialist = 'Dra. Elena Mendoza (Socia Directora M&A y Gobierno Corporativo)';
        time = '< 2 Horas Hábiles';
        code = 'CORP-EST-218';
      }
    } else if (caseNature === 'persona') {
      specialist = 'Dr. Carlos Alarcón (Socio de Protección Patrimonial & Fideicomisos)';
      time = '< 2 Horas Hábiles';
      code = 'PATR-DIR-512';
    } else {
      specialist = 'Dr. Fernando Valenzuela (Socio Fundador & Director de Litigios)';
      time = '< 45 Minutos (Mesa de Crisis Judicial)';
      code = 'LIT-CRISIS-991';
    }

    return { specialist, time, code };
  };

  const { specialist, time, code } = getSpecialistDetails();

  const handleReset = () => {
    setCaseNature(null);
    setUrgency(null);
    setStep(1);
  };

  const getWhatsAppDiagnosticUrl = () => {
    const natureLabel =
      caseNature === 'empresa'
        ? 'Corporativo / Empresa'
        : caseNature === 'persona'
        ? 'Persona Natural / Patrimonio'
        : 'Conflicto Activo / Judicial';

    const urgencyLabel =
      urgency === 'inmediata'
        ? 'Inmediata (< 24 Horas)'
        : urgency === 'planificacion'
        ? 'Planificación Preventiva'
        : 'Audiencia Próxima / Término Procesal';

    const message = `Hola, he completado el diagnóstico en Valenzuela & Asociados con el folio ${code}.
- Naturaleza: ${natureLabel}
- Nivel de Urgencia: ${urgencyLabel}
- Especialista asignado: ${specialist}
Requiero coordinar la sesión confidencial con el socio director.`;

    return `https://wa.me/593999999999?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="diagnostico" className="relative py-24 bg-[#070B19] border-t border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <FileSearch className="w-3.5 h-3.5 text-amber-400" />
            Evaluador Preliminar Confidencial
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mb-3">
            Diagnóstico de Caso en 3 Clics
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Identifique en menos de un minuto el socio especializado idóneo para su caso y el tiempo de
            respuesta estimado para salvaguardar sus derechos.
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="rounded-sm bg-slate-900/80 border border-amber-500/30 shadow-2xl backdrop-blur-md overflow-hidden relative">
          
          {/* Top Progress Bar */}
          <div className="h-1.5 w-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <div className="p-6 sm:p-10">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 1 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  1
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 hidden sm:inline">
                  Naturaleza
                </span>
              </div>
              <div className="h-px w-10 bg-slate-700" />
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 2 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  2
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 hidden sm:inline">
                  Urgencia
                </span>
              </div>
              <div className="h-px w-10 bg-slate-700" />
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step === 3 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  3
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 hidden sm:inline">
                  Dictamen Rápido
                </span>
              </div>
            </div>

            {/* Step 1: Naturaleza del caso */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                    Paso 1: ¿Cuál es la naturaleza de su situación legal?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-6">
                    Seleccione la categoría que mejor describa la entidad o interés a representar.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {/* Option 1 */}
                    <button
                      type="button"
                      onClick={() => {
                        setCaseNature('empresa');
                        setStep(2);
                      }}
                      className="p-5 rounded-sm bg-slate-950/60 border border-white/10 hover:border-amber-400/60 hover:bg-slate-800/80 text-left transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Building2 className="w-5 h-5 text-amber-400" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300">
                        Empresa / Corporación
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        Contratos, litigios mercantiles, fusiones, auditoría fiscal o derecho societario.
                      </p>
                    </button>

                    {/* Option 2 */}
                    <button
                      type="button"
                      onClick={() => {
                        setCaseNature('persona');
                        setStep(2);
                      }}
                      className="p-5 rounded-sm bg-slate-950/60 border border-white/10 hover:border-amber-400/60 hover:bg-slate-800/80 text-left transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <User className="w-5 h-5 text-amber-400" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300">
                        Persona Natural / Familia
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        Blindaje patrimonial, herencias, fideicomisos privados y transacciones de activos.
                      </p>
                    </button>

                    {/* Option 3 */}
                    <button
                      type="button"
                      onClick={() => {
                        setCaseNature('conflicto');
                        setStep(2);
                      }}
                      className="p-5 rounded-sm bg-slate-950/60 border border-white/10 hover:border-amber-400/60 hover:bg-slate-800/80 text-left transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300">
                        Conflicto Activo / Notificación
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        Citación judicial recibida, requerimiento fiscal, amenaza de embargo o demanda en curso.
                      </p>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Nivel de Urgencia */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                    Paso 2: ¿Cuál es el nivel de urgencia o plazo legal?
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-6">
                    Esto determina la velocidad de asignación del equipo de guardia judicial.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {/* Urgencia 1 */}
                    <button
                      type="button"
                      onClick={() => {
                        setUrgency('inmediata');
                        setStep(3);
                      }}
                      className="p-5 rounded-sm bg-slate-950/60 border border-white/10 hover:border-amber-400/60 hover:bg-slate-800/80 text-left transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Zap className="w-5 h-5 text-red-400" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300">
                        Inmediata (&lt; 24 Horas)
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        Plazo legal por expirar, medida cautelar en ejecución o situación de riesgo crítico.
                      </p>
                    </button>

                    {/* Urgencia 2 */}
                    <button
                      type="button"
                      onClick={() => {
                        setUrgency('audiencia');
                        setStep(3);
                      }}
                      className="p-5 rounded-sm bg-slate-950/60 border border-white/10 hover:border-amber-400/60 hover:bg-slate-800/80 text-left transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Clock className="w-5 h-5 text-amber-400" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300">
                        Audiencia Próxima (3 - 7 Días)
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        Fecha fijada para comparecencia, contestación de demanda o negociación crucial.
                      </p>
                    </button>

                    {/* Urgencia 3 */}
                    <button
                      type="button"
                      onClick={() => {
                        setUrgency('planificacion');
                        setStep(3);
                      }}
                      className="p-5 rounded-sm bg-slate-950/60 border border-white/10 hover:border-amber-400/60 hover:bg-slate-800/80 text-left transition-all group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Calendar className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300">
                        Planificación Estratégica
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        Estructuración preventiva, revisión de gobierno corporativo o proyectos futuros.
                      </p>
                    </button>
                  </div>

                  <div className="flex justify-start">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      ← Volver al paso anterior
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Resultado Inmediato y Canales */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-sm bg-slate-950 border border-amber-500/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                          Folio de Asignación Confidencial:
                        </span>
                        <div className="font-mono text-lg font-bold text-white">{code}</div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Diagnóstico Completado</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
                      <div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                          Especialista Asignado de Guardia:
                        </span>
                        <p className="text-sm font-bold text-amber-200 font-serif-luxury">
                          {specialist}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                          Tiempo de Respuesta Garantizado:
                        </span>
                        <p className="text-sm font-bold text-white flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-400" />
                          <span>{time}</span>
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded border border-white/10 text-xs text-slate-300 flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>
                        Sus datos están amparados bajo el secreto profesional legal (Art. 11 Ley de Ética).
                      </span>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* WhatsApp Action Button with encoded prefilled message */}
                    <a
                      href={getWhatsAppDiagnosticUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Contactar por WhatsApp Directo</span>
                    </a>

                    {/* Apply to official booking form */}
                    <button
                      onClick={() => {
                        const natureText =
                          caseNature === 'empresa'
                            ? 'Corporativo & M&A'
                            : caseNature === 'persona'
                            ? 'Patrimonial & Sucesiones'
                            : 'Litigios Complejos & Urgencias';
                        const urgencyText =
                          urgency === 'inmediata'
                            ? 'Urgencia Inmediata (<24h)'
                            : urgency === 'audiencia'
                            ? 'Audiencia Próxima'
                            : 'Planificación Estratégica';
                        onApplyDiagnosisToForm(
                          natureText,
                          urgencyText,
                          `[Diagnóstico Folio: ${code}] Especialista: ${specialist}. Tiempo estimado: ${time}.`
                        );
                      }}
                      className="flex-1 py-3.5 px-5 rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                    >
                      <FileCheck className="w-4 h-4 text-slate-950" />
                      <span>Formalizar Agendamiento en la Web</span>
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-amber-400 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reiniciar evaluación</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};
