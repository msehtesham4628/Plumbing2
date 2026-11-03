import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceItem } from '../types/index';
import {
  CheckCircle2,
  Cpu,
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  FileText,
  Calendar,
} from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/validation';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsappLink = generateWhatsAppUrl({
    serviceRequired: service.title,
    problemDescription: `Inquiry regarding ${service.title} in Hyderabad.`,
  });

  return (
    <div className="pt-24 pb-20 bg-[#070e1e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', path: '/services' },
            { label: service.title },
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero Section of Service */}
        <div className="py-12 border-b border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold w-fit">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Certified Hyderabad Diagnostic Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
                {service.heroHeadline}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-2">
                {service.overview}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onOpenBookingModal(service.title)}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all hover:scale-[1.02] shadow-xl shadow-amber-500/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {service.title}</span>
                </button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="tel:+919700189654"
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+91 97001 89654</span>
                </a>
              </div>
            </div>

            {/* Diagnostic Equipment & Highlights Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl p-6 bg-slate-900 border border-slate-700/80 shadow-2xl">
                <div className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-3">
                  Diagnostic Specification
                </div>
                <h4 className="text-base font-bold text-white mb-3 font-display">
                  Instruments & Calibrated Optics
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {service.diagnosticEquipment.map((eq, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>

                {service.caseStudyHighlight && (
                  <div className="mt-5 pt-4 border-t border-slate-800 text-xs">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">
                      Hyderabad Case Highlight:
                    </span>
                    <strong className="text-slate-200 block mt-0.5">
                      {service.caseStudyHighlight.location}
                    </strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      {service.caseStudyHighlight.finding}
                    </p>
                    <span className="text-emerald-400 font-bold block mt-1">
                      {service.caseStudyHighlight.savings}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Symptoms & When You Need This */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-slate-800">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              Triage & Warning Signs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Signs You Require This Inspection
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              If your property in Hyderabad is displaying any of these thermal or structural moisture symptoms, early non-destructive detection prevents catastrophic concrete spalling and RCC rebar corrosion.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.symptoms.map((symptom, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-snug">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Technical Detection Process */}
        <div className="py-16 border-b border-slate-800">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              Step-by-Step Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-2">
              Our Certified Inspection & Repair Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.detectionProcess.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono font-bold flex items-center justify-center text-sm mb-4">
                    0{step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Deliverables */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-800">
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4 font-display flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Key Diagnostic Benefits</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {service.keyBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4 font-display flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>Deliverables You Receive</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="py-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 font-display">
              Frequently Asked Questions About This Service
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-amber-300"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-2.5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Booking CTA */}
        <div className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-display">
              Ready to Book Your {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Serving Jubilee Hills, Banjara Hills, Gachibowli, Hitec City, and all of Hyderabad.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal(service.title)}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20"
            >
              Book Inspection
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
