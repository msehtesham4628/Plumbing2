import React from 'react';
import { Phone, MessageCircle, MapPin, Shield, CheckCircle2, Activity } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 text-neutral-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company Introduction */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-black shadow-md">
                <Activity className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-black font-display">
                HYDROSCAN <span className="text-neutral-500 font-normal">ENGINEERING</span>
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Hyderabad's premier building diagnostics and engineering plumbing contractor. We introduce certified infrared thermal thermography and acoustic leak localization to pinpoint sub-surface moisture and pipe bursts without breaking your walls or tiles.
            </p>
            <div className="flex flex-col gap-2 mt-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-black shrink-0" />
                <span>Certified Level-II Infrared Thermography Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Zero-Destruction Diagnostic Guarantee</span>
              </div>
            </div>
          </div>

          {/* Column 2: Thermal Detection Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black font-mono">
              Thermal Diagnostics
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/services/thermal-leakage-detection')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Thermal Leakage Detection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/bathroom-leakage-detection')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Bathroom Leakage (No Tile Breaking)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/pipeline-leakage-detection')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Concealed Pipeline Leakage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/wall-seepage-detection')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Wall Seepage & Moisture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/terrace-leakage-detection')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Terrace & Roof Slab
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Plumbing Contracting Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black font-mono">
              Plumbing Solutions
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/services/plumbing-installation')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Pipeline Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/plumbing-repair')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Precision Pipe Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/plumbing-services')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Commercial Plumbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/projects')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Hyderabad Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/faq')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Thermal Inspection FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black font-mono">
              Hyderabad Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="tel:+919700189654"
                className="flex items-center gap-2 text-neutral-800 hover:text-black transition-colors font-mono font-medium"
              >
                <Phone className="w-4 h-4 text-black shrink-0" />
                <span>+91 97001 89654</span>
              </a>

              <a
                href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-800 hover:text-black transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 text-black shrink-0" />
                <span>WhatsApp Helpline</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-neutral-600 pt-1">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span>
                  Road No. 36, Jubilee Hills & Hitec City, Hyderabad, Telangana 500033
                </span>
              </div>

              <div className="pt-2 text-xs text-neutral-600">
                <span className="font-semibold text-black block mb-1">Serving all Hyderabad:</span>
                <p className="text-[11px] leading-relaxed text-neutral-500">
                  Jubilee Hills · Banjara Hills · Gachibowli · Hitec City · Madhapur · Kondapur · Kokapet · Secunderabad · Kukatpally
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} HydroScan Engineering & Diagnostics. All rights reserved. Hyderabad, India.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('/privacy-policy')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('/terms-and-conditions')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('/contact')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Emergency Dispatch
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
