import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { projectsData } from '../data/projectsData';
import { ArrowRight, ShieldCheck, MapPin, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Concealed Pipeline', 'Thermal Detection', 'Terrace Waterproofing'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="pt-24 pb-20 bg-[#070e1e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Engineering Case Studies' }]} onNavigate={onNavigate} />

        {/* Header */}
        <div className="py-12 border-b border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              Proven Hyderabad Case Studies
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-display">
              Documented Thermal Leak Diagnoses Across Hyderabad
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4">
              Real engineering challenges solved without destructive trial-and-error demolition. Review real-world leak localization cases from Jubilee Hills, Hitec City, Gachibowli, and Banjara Hills.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-7 bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-[11px] font-bold">
                    {project.thermalDeltaT}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display">
                  {project.title}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                      The Problem:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-amber-400 block mb-0.5">
                      Thermal & Acoustic Diagnosis:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.diagnosis}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-0.5">
                      Engineering Solution:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300">
                  <strong>Outcome & Savings:</strong> {project.customerOutcome}
                </div>

                {/* Instruments Used */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.equipmentUsed.map((eq, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-[10px] text-slate-400 font-mono"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Turnaround: {project.completionTime}
                </span>
                <button
                  onClick={() => onOpenBookingModal(`Inspection like ${project.title}`)}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
                >
                  Book Similar Diagnostic
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
