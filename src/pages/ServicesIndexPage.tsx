import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { servicesData } from '../data/servicesData';
import { ArrowRight, CheckCircle2, Shield, Activity, Wrench, Search } from 'lucide-react';

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'thermal' | 'plumbing'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#070e1e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Our Services' }]} onNavigate={onNavigate} />

        {/* Header */}
        <div className="py-12 border-b border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              Engineering Diagnostics & Civil Plumbing
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-display">
              Advanced Thermal Leakage Detection & Plumbing Contracting
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4">
              Explore our complete range of non-destructive diagnostic inspections and master civil plumbing engineering solutions for residential, commercial, and industrial properties in Hyderabad.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 w-full sm:w-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Capabilities ({servicesData.length})
              </button>
              <button
                onClick={() => setActiveCategory('thermal')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === 'thermal'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Thermal Leakage Detection
              </button>
              <button
                onClick={() => setActiveCategory('plumbing')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === 'plumbing'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Plumbing Contracting
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services or symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="rounded-2xl p-7 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      service.category === 'thermal'
                        ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30'
                        : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                    }`}
                  >
                    {service.category === 'thermal' ? 'Thermal Scan' : 'Civil Plumbing'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-800/80 mb-6">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wide block">
                    Diagnostic Highlights:
                  </span>
                  {service.keyBenefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="text-xs font-semibold text-slate-200 group-hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onOpenBookingModal(service.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
