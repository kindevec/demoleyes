import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQS } from '../data/legalData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const categories = [
    { id: 'all', label: 'Todas las Preguntas' },
    { id: 'Honorarios', label: 'Honorarios' },
    { id: 'Confidencialidad', label: 'Confidencialidad' },
    { id: 'Urgencias', label: 'Urgencias' },
    { id: 'Internacional', label: 'Internacional' },
    { id: 'Procesal', label: 'Primera Consulta' }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-to-b from-[#071326] via-[#091C3A] to-[#071326] text-white relative overflow-hidden">
      {/* Diffused Intersection Gradient Hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent pointer-events-none" />
      {/* Top Ambient Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            Transparencia & Respuestas Claras
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight mb-3">
            <span className="font-extrabold text-white">Preguntas</span>{" "}
            <span className="font-serif-deluxe italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFE58F] via-[#D4AF37] to-amber-500 drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Frecuentes & Garantías
            </span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed text-justify-clean">
            Respuestas detalladas sobre nuestros esquemas tarifarios, secreto fiduciario y dinamismo procesal.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Buscar tema (ej. honorarios, secreto profesional, plazos, extranjero)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#0B1D3A] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
            />
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#0B1D3A]/70 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="-mx-4 sm:mx-0 rounded-none sm:rounded-2xl bg-[#0B1D3A]/70 sm:bg-[#0B1D3A]/80 border-y sm:border border-slate-800/80 hover:border-[#D4AF37]/30 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] shrink-0">
                        {faq.id.replace('faq-', '0')}.
                      </span>
                      <span className="font-heading font-semibold text-base sm:text-lg text-white">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#D4AF37]/15 border-[#D4AF37]/40' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed text-justify-clean">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center rounded-2xl bg-[#0B1D3A]/40 border border-slate-800 text-slate-400 text-sm">
              No se encontraron preguntas que coincidan con su búsqueda.
            </div>
          )}
        </div>

        {/* WhatsApp Help Footer with Official Logo */}
        <div className="mt-10 p-5 -mx-4 sm:mx-0 rounded-none sm:rounded-3xl bg-[#0B1D3A]/70 border-y sm:border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-heading">¿Tiene una interrogante jurídica particular?</h4>
            <p className="text-xs text-slate-400">Consulte directamente con un abogado de guardia sin ningún costo preliminar.</p>
          </div>
          <a
            href="https://wa.me/593999999999?text=Hola%2C%20tengo%20una%20pregunta%20jur%C3%ADdica%20espec%C3%ADfica%20para%20la%20secretar%C3%ADa%20del%20despacho."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-md shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};





