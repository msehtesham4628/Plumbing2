import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, Home, Search, AlertCircle } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 bg-[#070e1e] min-h-[85vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
          Error 404 · Route Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-display">
          Page Does Not Exist
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 max-w-md">
          The diagnostic route or page you are looking for has moved or does not exist. Explore our primary inspection and plumbing services in Hyderabad below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 w-full max-w-md text-left text-xs">
          <button
            onClick={() => onNavigate('/services/thermal-leakage-detection')}
            className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-200 transition-colors flex items-center justify-between"
          >
            <span>Thermal Leakage Detection</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
          <button
            onClick={() => onNavigate('/services/bathroom-leakage-detection')}
            className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-200 transition-colors flex items-center justify-between"
          >
            <span>Bathroom Leakage Scan</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
          <button
            onClick={() => onNavigate('/services/pipeline-leakage-detection')}
            className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-200 transition-colors flex items-center justify-between"
          >
            <span>Concealed Pipeline Leak</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
          <button
            onClick={() => onNavigate('/services/plumbing-services')}
            className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-200 transition-colors flex items-center justify-between"
          >
            <span>Plumbing Contracting</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        <button
          onClick={() => onNavigate('/')}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
