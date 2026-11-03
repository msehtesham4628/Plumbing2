export interface FAQItem {
  id: string;
  category: 'Thermal Detection' | 'Plumbing Contracting' | 'Costs & Reports' | 'Hyderabad Service';
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Thermal Detection',
    question: 'How does thermal imaging find water leaks without breaking walls or tiles?',
    answer: 'Thermal cameras detect subtle temperature differences on wall, ceiling, and floor surfaces. Moisture alters the thermal conductivity, evaporative rate, and thermal mass of building materials. As moisture evaporates, it cools the surface, producing a distinct temperature signature (ΔT) that our calibrated FLIR infrared optics visualize as a thermographic color gradient. This reveals the exact origin and path of hidden water without knocking down a single brick.',
  },
  {
    id: 'faq-2',
    category: 'Thermal Detection',
    question: 'Can thermal cameras see through solid concrete, granite, and Italian marble?',
    answer: 'Thermal cameras do not "see through" materials like X-rays; instead, they detect radiant infrared surface temperatures. Because water conducted into concrete, brickwork, or marble backing conducts thermal energy differently from dry materials, the surface temperature pattern directly reflects the underlying water pooling and pipe temperature anomaly. We cross-verify this with non-invasive dielectric moisture meters for 100% pinpoint accuracy.',
  },
  {
    id: 'faq-3',
    category: 'Costs & Reports',
    question: 'How much does a thermal leak detection survey cost in Hyderabad?',
    answer: 'Pricing depends on the property scale and survey scope. A targeted residential bathroom or single-room leak survey in Hyderabad typically starts from ₹4,500 to ₹7,500, including on-site acoustic checks and a detailed engineering report with thermographic imagery. Commercial buildings, high-rise shafts, and full-villa surveys are quoted based on square footage and pipeline length.',
  },
  {
    id: 'faq-4',
    category: 'Costs & Reports',
    question: 'Will I receive a formal diagnostic report for my builder, landlord, or insurance company?',
    answer: 'Yes. Every inspection includes a certified digital engineering diagnostic report complete with radiometric infrared thermograms, visual inspection photographs, temperature histograms, moisture percentage readings, and a recommended micro-surgical repair scope. This formal report is widely utilized for builder defect claims, RWA disputes, and insurance filings in Telangana.',
  },
  {
    id: 'faq-5',
    category: 'Plumbing Contracting',
    question: 'Are you qualified to fix the plumbing leak once you detect it?',
    answer: 'Yes. Unlike pure consulting inspectors who leave you searching for a plumber, HydroScan operates a full civil and mechanical plumbing contracting division. Once our diagnosis identifies the exact leak coordinate, our master plumbing team performs micro-surgical access, replaces the defective pipe or fitting with premium CPVC/PPR materials, pressure-tests the installation, and verifies resolution with a follow-up thermal scan.',
  },
  {
    id: 'faq-6',
    category: 'Hyderabad Service',
    question: 'Which areas in Hyderabad and Telangana do you cover?',
    answer: 'We provide prompt inspection and contracting services throughout Hyderabad and Secunderabad, with priority dispatch to Jubilee Hills, Banjara Hills, Gachibowli, Hitec City, Madhapur, Financial District, Kondapur, Kokapet, Kukatpally, Miyapur, Begumpet, and surrounding gated communities across the Outer Ring Road (ORR).',
  },
  {
    id: 'faq-7',
    category: 'Hyderabad Service',
    question: 'How fast can a technician arrive for an urgent leak inspection?',
    answer: 'For emergency water ingress or active flooding from concealed pipe bursts, our emergency response team can reach most central and western Hyderabad locations within 2 to 4 hours. You can call or WhatsApp our helpline directly at +91 97001 89654.',
  },
  {
    id: 'faq-8',
    category: 'Plumbing Contracting',
    question: 'What is the difference between HydroScan and a traditional local plumber?',
    answer: 'Traditional plumbers rely on guesswork, trial-and-error sledgehammering, and breaking multiple tiles hoping to find the leak. HydroScan employs certified building diagnostic engineers equipped with FLIR thermal imaging, ultrasonic flow meters, and acoustic ground listening probes to locate the exact leak within inches before touching a tool. We treat your property with scientific precision.',
  },
];
