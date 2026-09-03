import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lock,
  Calendar,
  User,
  Phone,
  Mail,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';

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
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    area: 'corporativo-m-a',
    date: '',
    description: '',
    honeypot: '' // Anti-spam hidden field
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedArea) {
      setFormData((prev) => ({ ...prev, area: preselectedArea }));
    }
    if (preselectedNotes) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description
          ? `${prev.description}\n\n${preselectedNotes}`
          : preselectedNotes
      }));
    }
  }, [preselectedArea, preselectedNotes]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam bot check
    if (formData.honeypot) {
      console.warn('Spam submission detected.');
      return;
    }

    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Por favor complete los campos obligatorios para coordinar su sesión.');
      return;
    }

    setLoading(true);

    // Simulate secure TLS encryption & server submission
    setTimeout(() => {
      const genCode = `VAL-EXP-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(genCode);
      setLoading(false);
      setSubmitted(true);
      setToastMessage(`Solicitud radicada con éxito. Código confidencial: ${genCode}`);

      setTimeout(() => {
        setToastMessage(null);
      }, 7000);
    }, 1500);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      area: 'corporativo-m-a',
      date: '',
      description: '',
      honeypot: ''
    });
    if (onClearPreselection) onClearPreselection();
  };

  return (
    <section id="agendar" className="py-24 bg-[#070B19] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification Container */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-4 sm:right-8 z-50 max-w-md bg-emerald-950 border border-emerald-500/50 text-emerald-200 px-5 py-4 rounded-sm shadow-2xl flex items-center gap-3 backdrop-blur-md"
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-xs uppercase tracking-wider text-emerald-300">
                  Agendamiento Registrado
                </p>
                <p className="text-xs text-emerald-100">{toastMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Secreto Profesional y Confidencialidad Garantizada</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Agendar Consulta Jurídica Privada
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-4" />
          <p className="text-slate-300 text-sm sm:text-base">
            Coordine una sesión de análisis preliminar con uno de nuestros socios directores. La
            información compartida está protegida por ley procesal y secreto profesional inquebrantable.
          </p>
        </div>

        {/* Card Form */}
        <div className="rounded-sm bg-slate-900/80 border border-amber-500/30 p-8 sm:p-12 shadow-2xl backdrop-blur-md relative">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle2 className="w-8 h-8 text-amber-400" />
              </div>

              <div>
                <h3 className="font-serif-luxury text-3xl font-bold text-white mb-2">
                  Solicitud Cifrada y Radicada
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Su requerimiento ha ingresado con máxima prioridad a la secretaría del despacho. Un
                  socio director revisará los antecedentes y se pondrá en contacto en menos de 2 horas
                  hábiles.
                </p>
              </div>

              <div className="inline-block p-4 rounded bg-slate-950 border border-amber-500/30 font-mono text-center">
                <span className="text-xs text-slate-400 block uppercase tracking-widest mb-1">
                  Expediente de Radicación Confidencial:
                </span>
                <span className="text-xl font-bold text-amber-400">{referenceCode}</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`https://wa.me/593999999999?text=Hola%2C%20acabo%20de%20agendar%20en%20l%C3%ADnea%20mi%20consulta%20con%20folio%20${referenceCode}.%20Deseo%20confirmar%20recepci%C3%B3n.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Confirmar por WhatsApp Inmediato
                </a>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-3 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium uppercase tracking-wider transition-colors border border-white/10"
                >
                  Agendar Otro Requerimiento
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Anti-spam Honeypot field (hidden from real users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="website_hp">No llenar este campo</label>
                <input
                  type="text"
                  id="website_hp"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre Completo */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Nombre Completo o Razón Social <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Dr. / Ing. / Lic. / Empresa S.A."
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700 rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Teléfono / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Teléfono Directo / Celular <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+593 99 999 9999"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700 rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Correo Electrónico Corporativo <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700 rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Área del Caso */}
                <div>
                  <label htmlFor="area" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Especialidad Jurídica <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-700 rounded-sm text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  >
                    {PRACTICE_AREAS.map((pa) => (
                      <option key={pa.id} value={pa.id} className="bg-slate-900 text-white">
                        {pa.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Fecha Preferida */}
              <div>
                <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Fecha Preferida para Consulta (Tentativa)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700 rounded-sm text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Breve descripción */}
              <div>
                <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Breve Síntesis de los Hechos o Requerimiento
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Describa brevemente la controversia, transacción o consulta legal..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-slate-950/80 border border-slate-700 rounded-sm text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              {/* Confidentiality Notice */}
              <div className="p-3.5 bg-slate-950/60 rounded border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Garantía de confidencialidad: El envío de este formulario genera una relación
                  precontractual blindada bajo secreto profesional inquebrantable (Código de Ética Profesional
                  y leyes procesales vigentes).
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  id="btn-submit-booking"
                  className="w-full py-4 px-6 rounded-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                      <span>Cifrando y Radicando Expediente...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Formalizar Solicitud de Consulta</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
