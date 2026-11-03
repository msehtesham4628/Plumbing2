import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { faqsData } from '../data/faqsData';
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const categories = [
    'All',
    'Thermal Detection',
    'Costs & Reports',
    'Plumbing Contracting',
    'Hyderabad Service',
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory =
      activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#070e1e] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />

        <div className="py-12 border-b border-slate-800">
          <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4">
            Everything you need to know about thermal imaging leakage detection, non-destructive moisture diagnostics, survey costs, and plumbing repairs in Hyderabad.
          </p>

          {/* Search Box */}
          <div className="mt-8 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. price, marble, concrete, warranty)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="py-12 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching questions found for "{searchQuery}". Call us at +91 97001 89654 for personal guidance.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Have a specific question about your property?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Our certified diagnostic engineers in Hyderabad are available on phone and WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919700189654?text=Hello%2C%20I%20have%20a%20question%20regarding%20thermal%20water%20leakage%20detection."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenBookingModal}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
            >
              Book Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
