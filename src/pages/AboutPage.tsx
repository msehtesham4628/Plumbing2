import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Shield, Award, Users, CheckCircle2, Cpu, Wrench, Phone, MessageCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="pt-24 pb-20 bg-[#070e1e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About HydroScan Engineering' }]} onNavigate={onNavigate} />

        {/* Hero Banner */}
        <div className="py-12 border-b border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              About HydroScan Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-display">
              Hyderabad’s Pioneer in Non-Destructive Water Diagnostics & Civil Plumbing
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-5">
              Founded by structural diagnostics specialists and master mechanical plumbing engineers, HydroScan was created to eliminate the destructive trial-and-error approach that plagued water leakage repair across Hyderabad and Telangana.
            </p>
          </div>
        </div>

        {/* Section 1: The Core Philosophy */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why We Refuse to Break Walls Before Scanning
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When water leaks through a ceiling or appears on a bedroom wall, traditional plumbers often smash open the adjacent bathroom, breaking tens of thousands of rupees worth of imported tiles or Italian marble. In over 70% of cases, the actual leak was meters away—migrating silently along a concrete beam or conduit.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              HydroScan utilizes high-resolution FLIR infrared thermography and digital acoustic ground microphones to pinpoint the exact fluid breach coordinate within a 2-inch radius. Only when the coordinate is confirmed do our master plumbers perform micro-surgical repair.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-2xl font-bold text-amber-400 font-mono">Level-II</span>
                <span className="text-xs text-slate-300 block mt-1">Certified Thermographers</span>
                <span className="text-[11px] text-slate-500">ISO 18436 Compliance</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-2xl font-bold text-emerald-400 font-mono">15+ Years</span>
                <span className="text-xs text-slate-300 block mt-1">Plumbing Engineering</span>
                <span className="text-[11px] text-slate-500">NBC & UPC-I Standards</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 font-display">
                Our Fleet of Diagnostic Instruments
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block">FLIR E8-XT High-Res Infrared Camera:</strong>
                    <span>320x240 radiometric sensor measuring thermal differentials down to 0.05°C.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block">Acoustic Pipeline Ground Microphones:</strong>
                    <span>Filters ambient city noise to amplify leak turbulence from 100 Hz to 4,000 Hz.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block">Dielectric & RF Moisture Probes:</strong>
                    <span>Measures sub-surface moisture percentage up to 40mm without puncturing tiles.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Hyderabad Service Operations */}
        <div className="py-16 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Serving Gated Communities & Commercial Hubs
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Our diagnostic vans are deployed across western, central, and eastern Hyderabad daily.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Jubilee Hills & Banjara Hills', 'Hitec City & Madhapur', 'Gachibowli & Financial District', 'Kondapur & Kokapet'].map((area, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-semibold text-slate-200">
                {area}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                Need an engineering assessment for your property?
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct consultation with our senior diagnostics engineer. No sales pressure.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
              >
                Book Inspection
              </button>
              <a
                href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
