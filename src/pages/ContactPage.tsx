import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Mail } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 bg-[#070e1e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact HydroScan Hyderabad' }]} onNavigate={onNavigate} />

        <div className="py-12 border-b border-slate-800">
          <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
            Direct Engineering Dispatch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-display">
            Contact HydroScan Building Diagnostics
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl">
            Book an urgent diagnostic survey or request a civil plumbing consultation anywhere across Hyderabad and Telangana.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Direct Phone Hotline
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Call our senior diagnostic engineer directly for immediate emergency assistance.
              </p>
            </div>
            <a
              href="tel:+919700189654"
              className="text-base font-bold text-amber-400 hover:text-amber-300 font-mono"
            >
              +91 97001 89654
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                WhatsApp Dispatch
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Send photos or videos of the leak or damp wall for an instant preliminary assessment.
              </p>
            </div>
            <a
              href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-emerald-400 hover:text-emerald-300 font-mono"
            >
              +91 97001 89654
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Operating Hours
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                7 Days a Week: 7:00 AM – 10:00 PM IST.<br />
                Emergency night dispatch for critical pipeline failures.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              7:00 AM – 10:00 PM Daily
            </span>
          </div>
        </div>

        {/* Embedded Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
};
