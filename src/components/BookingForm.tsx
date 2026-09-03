import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, CheckCircle2, Lock, ArrowUpRight, AlertCircle, Sparkles, MapPin, Phone } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BookingFormProps {
  preselectedArea?: string;
  preselectedNotes?: string;
  onClearPreselection?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedArea,
  preselectedNotes,
  onClearPreselection
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState(preselectedArea || 'corporativo-m-a');
  const [notes, setNotes] = useState(preselectedNotes || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00');
  const [honeypot, setHoneypot] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [submissionFolio, setSubmissionFolio] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedArea) {
      setArea(preselectedArea);
    }
  }, [preselectedArea]);

  useEffect(() => {
    if (preselectedNotes) {
      setNotes(preselectedNotes);
    }
  }, [preselectedNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot.trim() !== '') {
      return;
    }

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Por favor complete su nombre, correo y número telefónico.');
      return;
    }

    const generatedFolio = `AG-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionFolio(generatedFolio);
    setSubmitted(true);
    setErrorMsg('');
  };

  const getWhatsAppBookingUrl = () => {
    const text = `*SOLICITUD DE CONSULTA JURÍDICA*\nFolio: ${submissionFolio}\nNombre: ${fullName}\nEmail: ${email}\nTeléfono: ${phone}\nÁrea: ${area}\nFecha deseada: ${preferredDate || 'Lo antes posible'} a las ${preferredTime}\nNotas: ${notes}`;
    return `https://wa.me/593999999999?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="agendar" className="py-20 lg:py-28 bg-gradient-to-b from-[#071326] via-[#0A2040] to-[#071326] text-white relative border-t border-slate-800/80 overflow-hidden">
      {/* Executive Studio Atmosphere & Warm Highlights */}
      <div className="absolute inset-0 bg-grid-subtle opacity-45 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-blue-600/12 via-[#D4AF37]/10 to-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
            Cita Confidencial Privada
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
            <span className="font-extrabold text-white">Agendamiento de</span>{" "}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#D4AF37] to-[#AA771C] drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Sesión Estratégica
            </span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Reserve una sesión inicial con el socio director a cargo de su materia. Toda información
            compartida se encuentra protegida bajo secreto fiduciario legal.
          </p>
        </div>

        {/* Preselection Banner */}
        {preselectedNotes && !submitted && (
          <div className="mb-8 max-w-4xl mx-auto p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-[#D4AF37]">
              <Sparkles className="w-4 h-4 shrink-0 text-[#D4AF37]" />
              <span>Se han precargado parámetros de consulta previa en el formulario.</span>
            </div>
            {onClearPreselection && (
              <button
                onClick={onClearPreselection}
                className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>
        )}

        {/* High-Impact 2-Column Split Layout with Architectural Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Visual Photography & Executive Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden border border-slate-800 relative min-h-[420px] shadow-2xl group">
            {/* Background High-Res Image */}
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Sala de Reuniones Privada Valmont & Asociados"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-75 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/70 to-[#071326]/40 pointer-events-none" />

            {/* Top Badge on Photo */}
            <div className="relative z-10 p-6 sm:p-8">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 inline-block mb-3">
                Sede Matriz • Sala Ejecutiva
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white leading-snug">
                Privacidad Incondicional & Rigor Inmediato
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Sesiones presenciales en nuestras instalaciones de Titanium Plaza o vía teleconferencia cifrada de alta definición.
              </p>
            </div>

            {/* Bottom Contact Pills on Photo */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3 bg-gradient-to-t from-[#071326] to-transparent">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Edif. Titanium Plaza, Piso 14, Quito</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>PBX Directo: +593 (02) 394-8200</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/593999999999?text=Hola%2C%20deseo%20asistencia%20inmediata%20de%20la%20secretar%C3%ADa%20del%20despacho."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Atención Inmediata por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Booking Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B1D3A]/60 border border-slate-800 p-7 sm:p-9 shadow-xl backdrop-blur-xl flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="user_verification_token"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Nombre y Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Carlos Morales"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#071326] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#071326] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Teléfono Móvil (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+593 99 999 9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#071326] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Materia o Especialidad
                      </label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#071326] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                      >
                        {PRACTICE_AREAS.map((pa) => (
                          <option key={pa.id} value={pa.id} className="bg-[#071326] text-white">
                            {pa.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Fecha Tentativa
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#071326] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Franja Horaria
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#071326] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                      >
                        <option value="09:00" className="bg-[#071326]">09:00 - 10:30 (Mañana)</option>
                        <option value="11:00" className="bg-[#071326]">11:00 - 12:30 (Media Mañana)</option>
                        <option value="15:00" className="bg-[#071326]">15:00 - 16:30 (Tarde)</option>
                        <option value="17:00" className="bg-[#071326]">17:00 - 18:30 (Final de Tarde)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Resumen Preliminar del Asunto
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detalle brevemente hechos, partes y si existe alguna citación con plazo perentorio..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#071326] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all resize-none"
                    />
                  </div>

                  {/* Direct Notice */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>
                      Información amparada bajo secreto profesional legal (Art. 11 del Código de Ética).
                    </span>
                  </div>

                  {/* Submit Pill Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <span>Confirmar Solicitud de Cita Privada</span>
                      <div className="w-4 h-4 rounded-full bg-slate-950/15 flex items-center justify-center">
                        <ArrowUpRight className="w-3 h-3 text-slate-950" />
                      </div>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-white mb-1">
                      Solicitud Registrada con Éxito
                    </h3>
                    <p className="text-xs text-slate-400">
                      Nuestra secretaría ejecutiva validará su requerimiento en menos de 2 horas hábiles.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#071326] border border-slate-800 max-w-md mx-auto text-xs space-y-2 text-slate-300">
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Folio Oficial:</span>
                      <strong className="text-[#D4AF37] font-mono">{submissionFolio}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Cliente:</span>
                      <strong className="text-white">{fullName}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400">Canal de Notificación:</span>
                      <strong className="text-white">{phone}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Horario Solicitado:</span>
                      <strong className="text-[#D4AF37]">{preferredDate || 'Próximo turno disponible'} ({preferredTime})</strong>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Confirmar vía WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setEmail('');
                        setPhone('');
                        setNotes('');
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
                    >
                      Nueva Solicitud
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



