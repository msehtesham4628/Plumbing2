import React from 'react';
import { Phone, MessageCircle, Calendar, ArrowRight, ShieldCheck, Activity, Search, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingModal: (service?: string) => void;
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  onNavigate,
}) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Full-width continuous background blending seamlessly behind the transparent navbar */}
      <div className="absolute inset-0 z-0">
        {/* Technical Architectural Background with Thermal Simulation */}
        <div className="absolute inset-0 bg-[#070e1e]" />

        {/* Photorealistic thermographic wall inspection visual composite */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900">
            <defs>
              <radialGradient id="thermalCore" cx="72%" cy="46%" r="35%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="18%" stopColor="#fde047" stopOpacity="0.8" />
                <stop offset="42%" stopColor="#f97316" stopOpacity="0.65" />
                <stop offset="68%" stopColor="#c026d3" stopOpacity="0.4" />
                <stop offset="90%" stopColor="#2563eb" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#070e1e" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="wallGrid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Architectural wall tile lines */}
            <g stroke="#334155" strokeWidth="0.8" strokeOpacity="0.35">
              <line x1="100" y1="0" x2="100" y2="900" />
              <line x1="300" y1="0" x2="300" y2="900" />
              <line x1="500" y1="0" x2="500" y2="900" />
              <line x1="700" y1="0" x2="700" y2="900" />
              <line x1="900" y1="0" x2="900" y2="900" />
              <line x1="1100" y1="0" x2="1100" y2="900" />
              <line x1="1300" y1="0" x2="1300" y2="900" />
              <line x1="0" y1="180" x2="1440" y2="180" />
              <line x1="0" y1="360" x2="1440" y2="360" />
              <line x1="0" y1="540" x2="1440" y2="540" />
              <line x1="0" y1="720" x2="1440" y2="720" />
            </g>

            {/* Concealed Piping Path */}
            <path
              d="M 1030 0 L 1030 420 L 1180 420 L 1180 900"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="10"
              strokeDasharray="8 4"
              strokeOpacity="0.45"
            />
            <circle cx="1030" cy="420" r="16" fill="#f59e0b" fillOpacity="0.6" />

            {/* Thermal Moisture Leak Anomaly Plume */}
            <circle cx="1040" cy="415" r="280" fill="url(#thermalCore)" />

            {/* Targeting laser beam */}
            <line x1="760" y1="640" x2="1030" y2="420" stroke="#ef4444" strokeWidth="2.5" strokeOpacity="0.85" />
            <circle cx="1030" cy="420" r="5" fill="#ffffff" />
          </svg>
        </div>

        {/* Dark Navy Depth Gradient & Scrim for perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e1e] via-[#070e1e]/90 to-[#070e1e]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e1e] via-transparent to-[#070e1e]/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Trust Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide w-fit">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Professional Plumbing & Building Diagnostics · Hyderabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
              Find Hidden Water Leaks. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Without Breaking Your Walls.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Advanced thermal imaging water leakage detection and professional plumbing solutions for residential and commercial properties in Hyderabad. Certified FLIR non-destructive thermography pinpointing concealed pipe bursts with sub-millimeter precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBookingModal('General Thermal Inspection')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base transition-all hover:scale-[1.02] shadow-xl shadow-amber-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Inspection</span>
              </button>

              <a
                href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+919700189654"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 97001 89654</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Demolition Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certified Engineering Report</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Same-Day Hyderabad Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Diagnostic Card Preview (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-xl">
              {/* Card Header: FLIR Sensor HUD */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
                    FLIR INFRARED ACTIVE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-400">
                  ISO 18436-7 CERTIFIED
                </span>
              </div>

              {/* Graphic Display: Thermal Heatmap Inspection Simulation */}
              <div className="relative my-4 h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                {/* Simulated Wall with Grout & Concealed Pipe */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />

                {/* Thermal Ironbow Anomaly Ring */}
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 via-amber-500 to-yellow-300 opacity-80 blur-xl animate-pulse" />
                <div className="absolute w-20 h-20 rounded-full bg-white opacity-90 blur-md" />

                {/* Crosshair & Target Overlays */}
                <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none text-center">
                  <div className="w-16 h-16 border border-white/60 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <div className="mt-3 px-3 py-1 rounded bg-black/80 border border-amber-400/50 text-amber-300 font-mono text-xs font-bold">
                    HOTSPOT: ΔT -4.2°C (LEAK LOCATED)
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-1">
                    Concealed CPVC Tee Fitting @ 45mm Depth
                  </span>
                </div>

                {/* Live Temperature Scale Bar on Right */}
                <div className="absolute right-2.5 top-3 bottom-3 w-3 rounded-full bg-gradient-to-b from-yellow-300 via-amber-500 via-pink-600 to-blue-800 border border-white/20 flex flex-col justify-between py-1 px-0.5 text-[8px] font-mono text-white text-center">
                  <span>32°</span>
                  <span>26°</span>
                  <span>19°</span>
                </div>
              </div>

              {/* Card Footer: Quick Actions */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Accuracy</span>
                  <span className="font-bold text-slate-100 font-mono">± 2 Inches Pinpoint</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Cost Saved</span>
                  <span className="font-bold text-amber-400 font-mono">Up to 80% Demo Cost</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/services/thermal-leakage-detection')}
                className="mt-3.5 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              >
                <span>Explore Thermal Technology Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
