import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/legalData';

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
    <section id="faq" className="py-24 bg-[#070B19] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Transparencia & Respuestas Claras
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-4" />
          <p className="text-slate-300 text-sm sm:text-base">
            Respuestas detalladas sobre nuestros esquemas tarifarios, secreto fiduciario y dinamismo procesal.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Buscar tema (ej. honorarios, secreto profesional, plazos, extranjero)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-sm bg-[#050813] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
            />
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-sm bg-slate-900/80 border border-white/10 hover:border-amber-500/30 transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-amber-400 shrink-0">
                        {faq.id.replace('faq-', '0')}.
                      </span>
                      <span className="font-serif-luxury text-base sm:text-xl font-bold text-white">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-amber-500/10 border-amber-500/30' : ''
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
                        <div className="px-6 pb-6 pt-2 border-t border-white/5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center rounded bg-slate-900/40 border border-white/10 text-slate-400 text-sm">
              No se encontraron preguntas que coincidan con su búsqueda.
            </div>
          )}
        </div>

        {/* WhatsApp Help Footer */}
        <div className="mt-12 p-6 rounded-sm bg-slate-900/50 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-serif-luxury">¿Tiene una interrogante jurídica no listada?</h4>
            <p className="text-xs text-slate-400">Consulte directamente con un abogado de guardia sin ningún costo preliminar.</p>
          </div>
          <a
            href="https://wa.me/593999999999?text=Hola%2C%20tengo%20una%20pregunta%20jur%C3%ADdica%20espec%C3%ADfica%20para%20la%20secretar%C3%ADa%20del%20despacho."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
