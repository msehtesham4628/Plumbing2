import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Layers,
  Wrench,
  Search,
  Activity,
  Eye,
  Cpu,
  FileCheck2,
  Building2,
  Home as HomeIcon,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { ThreeThermalScanner } from '../components/ThreeThermalScanner';
import { ContactSection } from '../components/ContactSection';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { faqsData } from '../data/faqsData';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [activeSolutionTab, setActiveSolutionTab] = useState<'residential' | 'commercial'>('residential');

  return (
    <div className="flex flex-col w-full">
      {/* 1. Premium Hero Section */}
      <HeroSection
        onOpenBookingModal={onOpenBookingModal}
        onNavigate={onNavigate}
      />

      {/* 2. Company Introduction (Alternating Content & Architectural Imagery) */}
      <section className="py-24 bg-[#091124] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                <span>01. Engineering Diagnostics Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
                We Replace Guesswork With Infrared Precision.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                HydroScan is an advanced building diagnostics engineering firm and civil plumbing contractor headquartered in Hyderabad. For decades, property owners facing water leakage were subjected to destructive trial-and-error: breaking expensive Italian marble, smashing bathroom tiles, and hacking concrete slabs searching blindly for a leak.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                By integrating military-grade FLIR thermal imaging cameras, acoustic ground microphones, and non-destructive dielectric moisture meters, our certified engineers pinpoint concealed pipe fractures and moisture migration paths within inches before any tool touches your wall.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold text-amber-400 font-mono">100%</div>
                  <div className="text-xs text-slate-300 font-medium mt-1">Non-Destructive Testing</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Zero exploratory hacking or broken tiles</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl font-bold text-emerald-400 font-mono">2,500+</div>
                  <div className="text-xs text-slate-300 font-medium mt-1">Properties Diagnosed</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Across Jubilee Hills, Hitec City & Gachibowli</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 group transition-colors"
                >
                  <span>Learn more about our diagnostic engineering standards</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Graphic: Architectural Visual Composition (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-700/70 shadow-2xl overflow-hidden">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider flex items-center justify-between">
                  <span>Diagnostic Capability Matrix</span>
                  <span className="text-amber-400">ISO 18436</span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">Micro-Bolometer Infrared Sensor</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Detects temperature differentials down to 0.05°C (thermal sensitivity) to visualize evaporative moisture cooling.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">Acoustic Pipeline Triangulation</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Listens to fluid escaping pressurized CPVC, PPR, and GI lines through 150mm reinforced concrete slabs.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400 shrink-0">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">Certified Radiometric Report</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Provides GPS-tagged thermograms with exact repair coordinates accepted by building management and builders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Telangana Operational Base:</span>
                  <span className="text-slate-200 font-medium">Jubilee Hills & Hitec City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview (Clean Bento Hierarchy with Alternating Visuals) */}
      <section className="py-24 bg-[#070e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2">
                02. Specialized Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Comprehensive Diagnostic & Plumbing Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
            >
              <span>View All 15 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service, idx) => (
              <div
                key={service.id}
                className="group relative rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      service.category === 'thermal'
                        ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30'
                        : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                    }`}>
                      {service.category === 'thermal' ? 'Thermal Scan' : 'Plumbing'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-display mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80 mb-5">
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="text-xs font-semibold text-slate-300 group-hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Technical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Thermal Imaging Technology Explanation (Interactive Three.js 3D Diagnostic Simulator) */}
      <section className="py-24 bg-[#091124] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2">
                03. Interactive Diagnostics Simulation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                How Thermal Technology Sees What the Human Eye Cannot
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                Interact with our 3D building inspection simulator below. Rotate the concrete wall cross-section, toggle between FLIR thermal infrared heat mapping, structural piping X-ray, and visual surface views, and slide the exploded view to inspect concealed pipes.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                <span className="text-slate-400 block text-[10px] uppercase">Equipment</span>
                <span className="font-bold text-slate-200 font-mono">FLIR E8-XT + Acoustic Triangulator</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                <span className="text-slate-400 block text-[10px] uppercase">Thermal Sensitivity</span>
                <span className="font-bold text-amber-400 font-mono">NETD &lt; 0.05°C (50 mK)</span>
              </div>
            </div>
          </div>

          {/* The 3D Three.js Module */}
          <ThreeThermalScanner />
        </div>
      </section>

      {/* 5. How Our Inspection Process Works (Step-by-Step Rigorous Workflow) */}
      <section className="py-24 bg-[#070e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2">
              04. Systematic Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Four Steps to Zero-Destruction Resolution
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              We follow international thermographic building inspection protocols to eliminate ambiguity and prevent unnecessary demolition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Thermal Surface Mapping',
                desc: 'Our engineer conducts radiometric scans of target walls, ceilings, and floors using FLIR cameras to detect evaporative cooling anomalies.',
                tag: 'Infrared Thermogram',
              },
              {
                step: '02',
                title: 'Acoustic Sound Triangulation',
                desc: 'High-frequency ground microphones listen to pressurized water turbulence escaping through pipes embedded behind masonry.',
                tag: 'Acoustic Decibels',
              },
              {
                step: '03',
                title: 'Dielectric Depth Measurement',
                desc: 'Pinless RF moisture meters measure sub-surface moisture content up to 40mm deep without driving pins into tiles.',
                tag: 'WME % Verification',
              },
              {
                step: '04',
                title: 'Surgical Micro-Repair',
                desc: 'We cut a single pinpoint inspection port to repair the damaged pipe or apply crystalline sealants, re-scanning to certify 100% cure.',
                tag: '1-Year Warranty',
              },
            ].map((st, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 bg-slate-900/70 border border-slate-800 hover:border-amber-400/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-amber-400/80 font-mono">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                      {st.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us (Engineering vs Generic Plumbers) */}
      <section className="py-24 bg-[#091124] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                05. The HydroScan Advantage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Why Hyderabad Homeowners & Engineers Choose HydroScan
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Generic local plumbers use sledgehammers and guesswork, leaving your home with shattered tiles, ruined marble, and unresolved leaks. HydroScan provides precision engineering, certified instruments, and guaranteed outcomes.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Level-II Certified Infrared Thermographers with civil engineering degrees',
                  'Saves 70% to 85% compared to trial-and-error demolition and retiling',
                  'Comprehensive Radiometric Diagnostic Report for builders & insurance claims',
                  'Full-service master plumbing team to execute the surgical repair immediately',
                  'Rapid same-day response across all Hyderabad & Cyberabad localities',
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  Book Priority Diagnostic Inspection
                </button>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-3 p-4 bg-slate-950 border-b border-slate-800 text-xs font-bold font-mono">
                  <div className="text-slate-400">Diagnostic Feature</div>
                  <div className="text-amber-400">HydroScan Engineering</div>
                  <div className="text-slate-500">Generic Local Plumber</div>
                </div>

                <div className="divide-y divide-slate-800/80 text-xs">
                  <div className="grid grid-cols-3 p-4 items-center">
                    <div className="font-medium text-slate-300">Methodology</div>
                    <div className="text-emerald-400 font-semibold">Thermal FLIR & Acoustic</div>
                    <div className="text-red-400">Hammering & Guesswork</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 items-center">
                    <div className="font-medium text-slate-300">Wall / Tile Damage</div>
                    <div className="text-emerald-400 font-semibold">Zero Demolition</div>
                    <div className="text-red-400">Extensive Tile Hacking</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 items-center">
                    <div className="font-medium text-slate-300">Accuracy</div>
                    <div className="text-emerald-400 font-semibold">Within ± 2 Inches</div>
                    <div className="text-red-400">Blind Trial & Error</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 items-center">
                    <div className="font-medium text-slate-300">Documentation</div>
                    <div className="text-emerald-400 font-semibold">Certified PDF Report</div>
                    <div className="text-red-400">No Technical Record</div>
                  </div>
                  <div className="grid grid-cols-3 p-4 items-center">
                    <div className="font-medium text-slate-300">Warranty</div>
                    <div className="text-emerald-400 font-semibold">Written 1-Year Guarantee</div>
                    <div className="text-red-400">No Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Residential and Commercial Solutions */}
      <section className="py-24 bg-[#070e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2">
              06. Tailored Industry Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Engineered For Luxury Homes & Commercial Facilities
            </h2>
          </div>

          {/* Solution Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveSolutionTab('residential')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeSolutionTab === 'residential'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <HomeIcon className="w-4 h-4" />
                <span>Residential & Luxury Villas</span>
              </button>
              <button
                onClick={() => setActiveSolutionTab('commercial')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeSolutionTab === 'commercial'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Commercial & High-Rise Buildings</span>
              </button>
            </div>
          </div>

          {activeSolutionTab === 'residential' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  Luxury Villas & Penthouses
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Preserve high-end Italian marble, imported travertine, and bespoke walnut cabinetry with sub-surface thermal pipe inspection.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Concealed shower diverter leaks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Underfloor heating & jacuzzi line scans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Penthouse terrace moisture ingress</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  Apartment & Gated Community Disputes
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Eliminate finger-pointing between upstairs and downstairs apartment owners with an objective radiometric proof report.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sunken slab Nahani trap failure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Rainwater duct vertical shaft leaks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Builder defect liability reports</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  Turnkey Villa Plumbing Overhauls
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Complete design, re-piping, pressure booster pump balancing, and silent acoustic drainage installation for luxury homes.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>SDR-11 CPVC & PPR-CT piping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pressure balancing manifold design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Independent zone shut-off valves</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  IT Parks & Commercial Campuses
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Locate high-volume underground potable water and fire hydrant pipeline losses without shutting down tech park operations.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Underground acoustic correlation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Driveway paver zero-trenching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Water audit & flow rate logging</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  Hotels & Hospital Diagnostic Surveys
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  24/7 continuous hospitality diagnostics preventing room out-of-order downtime and preserving guest comfort.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Hot water circulation balancing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Boiler line steam & condensate leaks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Commercial kitchen grease trap leaks</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  Civil Plumbing Contracting
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Licensed plumbing contracting for multi-story towers: pump rooms, hydro-pneumatic systems, STP piping, and water storage sumps.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Hydrostatic pressure holding tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>NBC / UPC-I compliance certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Automated telemetry integration</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. Project Gallery (Real Hyderabad Case Studies) */}
      <section className="py-24 bg-[#091124] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2">
                07. Verified Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Documented Leak Detection Success in Hyderabad
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="rounded-3xl p-7 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                    <span>{project.location}</span>
                    <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/30">
                      {project.thermalDeltaT}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {project.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div>
                      <strong className="text-slate-400 block text-[11px] uppercase">Problem:</strong>
                      <p className="mt-0.5 text-slate-400">{project.problem}</p>
                    </div>
                    <div>
                      <strong className="text-amber-400 block text-[11px] uppercase">Diagnosis:</strong>
                      <p className="mt-0.5">{project.diagnosis}</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-emerald-400 font-medium">
                    ✓ Outcome: {project.customerOutcome}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    Time: {project.completionTime}
                  </span>
                  <button
                    onClick={() => onNavigate('/projects')}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="py-24 bg-[#070e1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2">
              08. Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Clear answers on thermal leak inspection science, costs, and plumbing repairs in Hyderabad.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.slice(0, 5).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
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
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('/faq')}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
            >
              <span>View all questions & pricing details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. Strong Contact CTA */}
      <ContactSection />
    </div>
  );
};
