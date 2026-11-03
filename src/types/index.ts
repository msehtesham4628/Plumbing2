export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'thermal' | 'plumbing';
  heroHeadline: string;
  overview: string;
  iconName: string;
  diagnosticEquipment: string[];
  symptoms: string[];
  detectionProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  caseStudyHighlight?: {
    location: string;
    finding: string;
    savings: string;
  };
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  propertyType: 'Residential Villa' | 'High-Rise Apartment' | 'Commercial Office' | 'Hospitality';
  category: 'Thermal Detection' | 'Concealed Pipeline' | 'Terrace Waterproofing' | 'Plumbing Overhaul';
  problem: string;
  diagnosis: string;
  thermalDeltaT: string;
  equipmentUsed: string[];
  solution: string;
  completionTime: string;
  customerOutcome: string;
  tags: string[];
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  serviceRequired: string;
  propertyLocation: string;
  problemDescription: string;
}

export interface ValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  serviceRequired?: string;
  propertyLocation?: string;
  problemDescription?: string;
}
