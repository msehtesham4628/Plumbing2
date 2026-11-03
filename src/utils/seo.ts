export interface RouteMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
}

const BASE_URL = 'https://hydroscan-hyderabad.in';

export const routeMetadataMap: Record<string, RouteMeta> = {
  '/': {
    title: 'HydroScan Engineering | Thermal Water Leakage Detection & Plumbing Hyderabad',
    description: 'Find hidden water leaks without breaking your walls. Advanced FLIR thermal imaging, acoustic sensor diagnostics, and expert plumbing contracting in Hyderabad.',
    keywords: [
      'Thermal Leakage Detection Hyderabad',
      'Water Leakage Detection Hyderabad',
      'Plumbing Contractor Hyderabad',
      'Non-destructive leak detection',
    ],
    canonical: `${BASE_URL}/`,
  },
  '/about': {
    title: 'About HydroScan Engineering | Building Diagnostics & Master Plumbing Hyderabad',
    description: 'Learn about Hyderabad’s premier building diagnostics and plumbing contractor. Engineering precision, zero unnecessary demolition, and certified thermal thermography.',
    keywords: ['About HydroScan', 'Building diagnostics Hyderabad', 'Certified thermography Telangana'],
    canonical: `${BASE_URL}/about`,
  },
  '/services': {
    title: 'Thermal Leakage Detection & Plumbing Contracting Services | Hyderabad',
    description: 'Complete range of non-destructive thermal imaging diagnostics and civil plumbing contracting services for villas, high-rises, and commercial sites in Hyderabad.',
    keywords: ['Plumbing services Hyderabad', 'Thermal inspection Telangana', 'Moisture mapping Hyderabad'],
    canonical: `${BASE_URL}/services`,
  },
  '/services/thermal-leakage-detection': {
    title: 'Advanced Thermal Imaging Water Leakage Detection Hyderabad | HydroScan',
    description: 'Non-invasive FLIR infrared thermal moisture detection pinpointing sub-surface pipe leaks, moisture ingress, and thermal anomalies with zero demolition.',
    keywords: ['Thermal leakage detection Hyderabad', 'FLIR camera inspection Hyderabad', 'Hidden leak locator'],
    canonical: `${BASE_URL}/services/thermal-leakage-detection`,
  },
  '/services/bathroom-leakage-detection': {
    title: 'Bathroom Leakage Detection Without Breaking Tiles | Hyderabad HydroScan',
    description: 'Specialized thermal imaging and pressure diagnostics for bathroom concealed pipeline leaks, sunken slab seepage, and tile joint moisture intrusion in Hyderabad.',
    keywords: ['Bathroom leakage detection Hyderabad', 'Tile leak without breaking', 'Sunken slab seepage'],
    canonical: `${BASE_URL}/services/bathroom-leakage-detection`,
  },
  '/services/pipeline-leakage-detection': {
    title: 'Concealed Pipeline Leakage Detection Hyderabad | Acoustic & Thermal Scan',
    description: 'Locate underground, wall-embedded, and ceiling pipeline leaks using dual-frequency acoustic ground microphones and thermal imaging cameras in Hyderabad.',
    keywords: ['Concealed pipeline leakage detection Hyderabad', 'Underground pipe leak detector', 'Acoustic leak test'],
    canonical: `${BASE_URL}/services/pipeline-leakage-detection`,
  },
  '/services/wall-seepage-detection': {
    title: 'Wall Moisture & Damp Seepage Detection Hyderabad | Non-Destructive Scan',
    description: 'Diagnose damp walls, peeling paint, efflorescence, and hidden moisture capillaries using thermal thermography and non-invasive pinless moisture meters.',
    keywords: ['Wall seepage detection Hyderabad', 'Wall dampness inspection', 'Efflorescence cause test'],
    canonical: `${BASE_URL}/services/wall-seepage-detection`,
  },
  '/services/terrace-leakage-detection': {
    title: 'Terrace & Roof Slab Water Leakage Detection Hyderabad | HydroScan Diagnostics',
    description: 'Infrared thermal drone & handheld camera moisture scanning for building terrace slabs, parapet joints, expansion cracks, and rainwater ponding in Hyderabad.',
    keywords: ['Terrace leakage detection Hyderabad', 'Roof slab moisture scan', 'Waterproofing diagnostics'],
    canonical: `${BASE_URL}/services/terrace-leakage-detection`,
  },
  '/services/plumbing-services': {
    title: 'Professional Plumbing Contracting & Civil Engineering Hyderabad',
    description: 'Full-spectrum plumbing contracting for luxury homes, gated communities, and commercial towers. High-pressure distribution, drainage, and pump automation.',
    keywords: ['Plumbing contractor Hyderabad', 'Mechanical plumbing engineering', 'Sanitary contractor'],
    canonical: `${BASE_URL}/services/plumbing-services`,
  },
  '/services/plumbing-installation': {
    title: 'New Plumbing Installation & Piping Systems Hyderabad | HydroScan',
    description: 'Turnkey residential and commercial plumbing installations: multi-layer CPVC, PPR-CT, copper manifolds, pressure booster pumps, and rainwater harvesting networks.',
    keywords: ['Plumbing installation Hyderabad', 'Piping contractor Telangana', 'Booster pump installation'],
    canonical: `${BASE_URL}/services/plumbing-installation`,
  },
  '/services/plumbing-repair': {
    title: 'High-Precision Plumbing Repair & Pipeline Overhaul Hyderabad',
    description: 'Rapid-response precision plumbing repairs: pinpoint valve replacements, pipeline relining, pressure regulation, and sewage drainage clearing in Hyderabad.',
    keywords: ['Plumbing repair Hyderabad', 'Pipeline repair contractor', 'Emergency plumber Hyderabad'],
    canonical: `${BASE_URL}/services/plumbing-repair`,
  },
  '/projects': {
    title: 'Diagnostic Projects & Case Studies Hyderabad | HydroScan Engineering',
    description: 'Explore real-world thermal leak detection and plumbing contracting case studies from Jubilee Hills, Hitec City, Gachibowli, and Banjara Hills.',
    keywords: ['Plumbing projects Hyderabad', 'Leak detection case studies', 'Building inspection portfolio'],
    canonical: `${BASE_URL}/projects`,
  },
  '/contact': {
    title: 'Contact HydroScan Engineering | Book Thermal Leak Inspection Hyderabad',
    description: 'Book an on-site thermal leak detection survey or discuss plumbing contracting in Hyderabad. Call or WhatsApp +91 97001 89654 for same-day priority dispatch.',
    keywords: ['Contact HydroScan', 'Book leak detection Hyderabad', 'Plumbing phone number Hyderabad'],
    canonical: `${BASE_URL}/contact`,
  },
  '/faq': {
    title: 'Frequently Asked Questions | Thermal Leak Detection & Plumbing Hyderabad',
    description: 'Got questions about thermal water leakage detection without breaking walls? Read detailed answers on inspection methodology, costs, accuracy, and reports.',
    keywords: ['Thermal leak detection FAQ', 'Plumbing contractor FAQ Hyderabad', 'Leak inspection price'],
    canonical: `${BASE_URL}/faq`,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | HydroScan Engineering Hyderabad',
    description: 'Our customer data protection and privacy policy for inspection and contracting inquiries in Hyderabad, Telangana.',
    canonical: `${BASE_URL}/privacy-policy`,
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | HydroScan Engineering Hyderabad',
    description: 'Standard terms of service, warranty stipulations, and diagnostics survey protocols for HydroScan Engineering Hyderabad.',
    canonical: `${BASE_URL}/terms-and-conditions`,
  },
};

/**
 * Returns SEO metadata for a given path
 */
export function getRouteMeta(pathname: string): RouteMeta {
  // Normalize trailing slash
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return (
    routeMetadataMap[cleanPath] || {
      title: 'Page Not Found (404) | HydroScan Engineering Hyderabad',
      description: 'The requested page was not found. Explore our thermal leakage detection and plumbing services in Hyderabad.',
      canonical: `${BASE_URL}${cleanPath}`,
    }
  );
}

/**
 * Generates BreadcrumbList Schema JSON-LD for rich snippets
 */
export function generateBreadcrumbSchema(pathname: string): object {
  const segments = pathname.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${BASE_URL}/`,
    },
  ];

  let currentPath = '';
  segments.forEach((seg, idx) => {
    currentPath += `/${seg}`;
    const name = seg
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    items.push({
      '@type': 'ListItem',
      position: idx + 2,
      name,
      item: `${BASE_URL}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
