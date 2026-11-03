import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ArrowRight, CheckCircle2, Crosshair } from 'lucide-react';
import heroDiagnosticImg from '../assets/images/hero_thermal_inspection_1793719469599.jpg';

interface HeroSectionProps {
  onOpenBookingModal: (service?: string) => void;
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  onNavigate,
}) => {
  const [activeViewMode, setActiveViewMode] = useState<'thermal' | 'xray' | 'raw'>('thermal');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white text-neutral-900">
      {/* Background Architectural Grid & Subtle Clean Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-white" />
        {/* Subtle geometric dot grid on white */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.85) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-neutral-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headlines & Call to Action (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            {/* Clean Unboxed Metadata Kicker (Anti-Pill Discipline) */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-600 uppercase">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span className="text-black font-semibold">FLIR Certified Diagnostics</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span>Non-Destructive Testing</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span>Hyderabad</span>
            </div>

            {/* Main Headline: White Background, Black Texting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.08] font-display">
              Find Hidden Water Leaks. <br />
              <span className="text-neutral-500 font-normal">
                Without Breaking Your Walls.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-normal">
              Non-invasive building diagnostics and advanced plumbing solutions for villas, apartments, and commercial high-rises across Hyderabad. Using FLIR thermal imaging, acoustic frequency triangulation, and RF moisture analysis to pinpoint concealed leaks with millimeter precision.
            </p>

            {/* CTA Buttons in Crisp Black & White */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenBookingModal('General Thermal Inspection')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-sm sm:text-base transition-all hover:scale-[1.02] shadow-xl shadow-black/10 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book an Inspection</span>
              </button>

              <a
                href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] border border-neutral-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+919700189654"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-sm font-mono transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>+91 97001 89654</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Zero Demolition Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>ISO 18436 Certified Report</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Same-Day Hyderabad Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with High-Tech Diagnostic Telemetry (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-neutral-50 border border-neutral-200 p-3 sm:p-4 shadow-xl shadow-neutral-200/50 overflow-hidden group">
              {/* Card Header: FLIR Sensor HUD */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200 px-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-black">
                    FLIR RADIOMETRIC ACTIVE
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-600">
                  <span className="text-black font-semibold">HYD-GEO:</span>
                  <span>17.4325° N, 78.4071° E</span>
                </div>
              </div>

              {/* Viewport: Photorealistic Hero Image with Interactive Diagnostic Overlays */}
              <div className="relative my-3 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
                {/* Hero Image */}
                <img
                  src={heroDiagnosticImg}
                  alt="Certified Diagnostic Engineer using FLIR Thermal Imaging Scanner in Hyderabad"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeViewMode === 'thermal'
                      ? 'contrast-125 brightness-105'
                      : activeViewMode === 'xray'
                      ? 'invert contrast-150'
                      : 'grayscale'
                  }`}
                  loading="eager"
                />

                {/* Technical HUD Overlay Elements */}
                <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between bg-gradient-to-t from-black/75 via-transparent to-black/35">
                  {/* Top HUD Row */}
                  <div className="flex justify-between items-start">
                    <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 font-mono text-[10px] text-white">
                      SPECTRUM: 7.5 - 14 µm · NETD &lt; 40 mK
                    </div>
                    <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 font-mono text-[10px] text-white font-bold flex items-center gap-1.5">
                      <Crosshair className="w-3 h-3 text-white" />
                      <span>TARGET LOCK</span>
                    </div>
                  </div>

                  {/* Center Laser Target Hotspot Callout */}
                  <div className="absolute top-[38%] right-[11%] flex items-center gap-2 pointer-events-none">
                    <div className="relative">
                      <div className="w-10 h-10 border-2 border-white/90 rounded-full animate-ping opacity-75" />
                      <div className="w-4 h-4 bg-white rounded-full absolute inset-0 m-auto" />
                    </div>
                    <div className="bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30 text-left shadow-xl hidden sm:block">
                      <div className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                        CONCEALED PIPE ANOMALY
                      </div>
                      <div className="text-xs font-mono font-extrabold text-neutral-200">
                        ΔT: -4.2°C @ 45mm Depth
                      </div>
                    </div>
                  </div>

                  {/* Bottom HUD Bar */}
                  <div className="flex justify-between items-end">
                    <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-700 font-mono text-[10px] text-neutral-300">
                      RESOLVED: CPVC Brass Fitting Seepage
                    </div>
                    <div className="bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-neutral-700 font-mono text-[9px] text-neutral-400">
                      FRAME: 60 FPS RADIOMETRIC
                    </div>
                  </div>
                </div>
              </div>

              {/* Viewport Control Dock: Filter Switcher */}
              <div className="flex items-center justify-between gap-2 p-1.5 bg-neutral-100 rounded-xl border border-neutral-200 text-xs">
                <span className="text-[11px] font-mono text-neutral-600 pl-2 hidden sm:inline">
                  Diagnostic Filter:
                </span>
                <div className="flex items-center gap-1 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setActiveViewMode('thermal')}
                    className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                      activeViewMode === 'thermal'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    Thermal Scan
                  </button>
                  <button
                    onClick={() => setActiveViewMode('xray')}
                    className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                      activeViewMode === 'xray'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    X-Ray Invert
                  </button>
                  <button
                    onClick={() => setActiveViewMode('raw')}
                    className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                      activeViewMode === 'raw'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    True Grayscale
                  </button>
                </div>
              </div>

              {/* Card Footer: Live Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-neutral-200 shadow-sm">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wide block font-mono">
                    Localization
                  </span>
                  <span className="font-bold text-black font-mono">± 2 Inches Pinpoint</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-neutral-200 shadow-sm">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wide block font-mono">
                    Demolition Saved
                  </span>
                  <span className="font-bold text-black font-mono">100% Zero Tiles Broken</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onNavigate('/services/thermal-leakage-detection')}
                className="mt-3 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <span>Inspect Thermal Diagnostic Process</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
