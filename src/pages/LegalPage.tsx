import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-24 pb-20 bg-[#070e1e] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: isPrivacy ? 'Privacy Policy' : 'Terms and Conditions' }]}
          onNavigate={onNavigate}
        />

        <div className="py-10 border-b border-slate-800">
          <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-display">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions of Service'}
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-2">
            Last Updated: November 2026 · HydroScan Engineering · All rights reserved for zentrixasr · Hyderabad, Telangana, India
          </p>
        </div>

        <div className="py-12 prose prose-invert prose-slate max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed space-y-6">
          {isPrivacy ? (
            <>
              <section>
                <h2 className="text-lg font-bold text-white mb-2">1. Introduction & Scope</h2>
                <p>
                  HydroScan Engineering ("HydroScan", "we", "our", or "us") provides non-destructive thermal imaging moisture diagnostics and plumbing contracting services in Hyderabad, Telangana. This Privacy Policy outlines our standards concerning the collection, storage, and processing of customer contact details, inspection records, and building thermograms in compliance with the Digital Personal Data Protection Act (DPDPA) and Indian IT Act.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">2. Information We Collect</h2>
                <p>
                  When you submit an inspection inquiry or contact us via WhatsApp or telephone, we collect:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-400">
                  <li>Your full name, mobile telephone number, and optional email address.</li>
                  <li>Property physical location, address, and apartment/villa details in Hyderabad.</li>
                  <li>Descriptions of water seepage, pipe noise, or damp wall symptoms.</li>
                  <li>Radiometric thermograms and optical photographs captured during on-site inspections.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">3. Use of Diagnostic Data</h2>
                <p>
                  Your information is utilized solely to schedule engineering technicians, conduct thermal leak detection surveys, generate certified technical diagnostic reports, and execute warranty plumbing repairs. We never sell, lease, or monetize customer contact data with third-party advertisers.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">4. Data Security & Storage</h2>
                <p>
                  All diagnostic records, thermographic images, and customer reports are stored in secure cloud infrastructure with encrypted transit and restricted technician access.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">5. Contact Grievance Officer</h2>
                <p>
                  For any privacy inquiries or to request deletion of your inspection records, contact us at:
                  <br />
                  <strong>HydroScan Engineering Grievance Desk</strong>
                  <br />
                  Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033
                  <br />
                  Phone: +91 97001 89654 · Email: diagnostics@hydroscan-hyderabad.in
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-lg font-bold text-white mb-2">1. Scope of Diagnostic Services</h2>
                <p>
                  HydroScan provides specialized non-destructive testing (NDT) utilizing infrared thermography, acoustic ground microphones, and dielectric moisture meters. Inspections identify thermal anomalies associated with moisture ingress and pressurized pipe breaches.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">2. Property Access & Inspection Conditions</h2>
                <p>
                  The customer agrees to provide safe access to the inspection zones (bathrooms, shafts, terrace slabs, electrical rooms, and pump stations). For optimal thermal contrast, building water supply lines should be pressurized, and thermal conditioning protocols followed as guided by our technician.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">3. Zero-Demolition Inspection Guarantee</h2>
                <p>
                  HydroScan guarantees that the diagnostic phase is 100% non-destructive. No tiles, walls, or marble will be chipped, broken, or drilled during the initial inspection without explicit written customer consent.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">4. Plumbing Repair Scope & Warranty</h2>
                <p>
                  Plumbing repairs executed by HydroScan master plumbers carry a 1-year written leak-free warranty on the specific repaired joint or replacement section. HydroScan is not liable for pre-existing structural decay or uninspected pipelines elsewhere in the property.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-2">5. Jurisdiction</h2>
                <p>
                  All agreements and service disputes are subject exclusively to the jurisdiction of the courts of Hyderabad, Telangana, India.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
