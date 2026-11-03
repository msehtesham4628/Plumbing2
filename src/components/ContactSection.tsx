import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { ContactFormData, ValidationErrors } from '../types/index';
import { validateContactForm, generateWhatsAppUrl } from '../utils/validation';

interface ContactSectionProps {
  preselectedService?: string;
  onSuccess?: (ref: string, data: ContactFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: preselectedService || 'Thermal Leakage Detection',
    propertyLocation: '',
    problemDescription: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionRef, setSubmissionRef] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate secure backend submission & dispatch generation
    setTimeout(() => {
      const ref = `HYD-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionRef(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess(ref, formData);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      serviceRequired: 'Thermal Leakage Detection',
      propertyLocation: '',
      problemDescription: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact-booking" className="py-20 bg-[#070e1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Guarantees (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold w-fit">
              <span>Rapid Hyderabad Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Schedule Your Non-Destructive Thermal Survey
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Don't allow hidden water leaks to silently rot your building structure or rack up water bills. Contact HydroScan today for high-precision diagnostic scanning and master plumbing repair across Hyderabad.
            </p>

            {/* Direct Instant Channels */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="tel:+919700189654"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-mono block">Direct Helpline</span>
                  <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    +91 97001 89654
                  </span>
                </div>
              </a>

              <a
                href={generateWhatsAppUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-mono block">Instant WhatsApp Chat</span>
                  <span className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Chat with Lead Engineer
                  </span>
                </div>
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>2-4 Hour Emergency Dispatch in Jubilee Hills, Hitec City & Gachibowli</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Zero-Demolition Inspection Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>On-site service in all areas across Hyderabad & Secunderabad</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-400">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-emerald-500/20 animate-ping opacity-60" />
                    <div className="relative w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/30 transition-transform duration-300 scale-100 animate-in zoom-in-75">
                      <svg
                        className="w-8 h-8 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                          className="origin-center"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Inspection Request Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your diagnostic request ref{' '}
                    <span className="font-mono text-amber-400 font-bold">{submissionRef}</span> has been logged with our Hyderabad dispatch team. Our engineer will call you shortly at{' '}
                    <strong className="text-white">{formData.phoneNumber}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full justify-center">
                    <a
                      href={generateWhatsAppUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Forward Details to WhatsApp</span>
                    </a>
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="border-b border-slate-800 pb-3 mb-1">
                    <h3 className="text-xl font-bold text-white font-display">
                      Book an On-Site Inspection
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out your property details below for an accurate quote and prompt dispatch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="text-xs font-semibold text-slate-300">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Reddy"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-700 focus:border-amber-400 focus:ring-amber-400/20'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phoneNumber" className="text-xs font-semibold text-slate-300">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 97001 89654"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.phoneNumber
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-700 focus:border-amber-400 focus:ring-amber-400/20'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email (Optional) */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-slate-500 font-normal">(Optional for Report)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-700 focus:border-amber-400 focus:ring-amber-400/20'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Service Required */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="serviceRequired" className="text-xs font-semibold text-slate-300">
                        Service Required <span className="text-amber-400">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.serviceRequired
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-700 focus:border-amber-400 focus:ring-amber-400/20'
                        }`}
                      >
                        <option value="Thermal Leakage Detection">Thermal Leakage Detection</option>
                        <option value="Bathroom Leakage Inspection">Bathroom Leakage (No Tile Breaking)</option>
                        <option value="Concealed Pipeline Leakage">Concealed Pipeline Leakage</option>
                        <option value="Wall Moisture & Seepage">Wall Moisture & Seepage Scan</option>
                        <option value="Terrace Leakage Inspection">Terrace & Roof Slab Inspection</option>
                        <option value="Plumbing Contracting">Civil Plumbing Contracting</option>
                        <option value="Plumbing Installation">New Piping Installation</option>
                        <option value="Plumbing Repair">High-Precision Plumbing Repair</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Location */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="propertyLocation" className="text-xs font-semibold text-slate-300">
                      Property Locality in Hyderabad <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="propertyLocation"
                      name="propertyLocation"
                      value={formData.propertyLocation}
                      onChange={handleChange}
                      placeholder="e.g. Jubilee Hills, Road 36 / Gachibowli / Kondapur"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.propertyLocation
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-700 focus:border-amber-400 focus:ring-amber-400/20'
                      }`}
                    />
                    {errors.propertyLocation && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.propertyLocation}
                      </span>
                    )}
                  </div>

                  {/* Problem Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="problemDescription" className="text-xs font-semibold text-slate-300">
                      Problem Description <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="problemDescription"
                      name="problemDescription"
                      rows={3}
                      value={formData.problemDescription}
                      onChange={handleChange}
                      placeholder="Please describe the leak symptoms (e.g. dampness behind bedroom wardrobe, water dripping downstairs, continuous pump running)..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.problemDescription
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-700 focus:border-amber-400 focus:ring-amber-400/20'
                      }`}
                    />
                    {errors.problemDescription && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.problemDescription}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50 text-slate-950 font-bold text-sm sm:text-base transition-all hover:scale-[1.01] shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Inspection Booking</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center mt-1">
                    Direct enquiry routed to lead building engineer. We never share your phone number with 3rd parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
