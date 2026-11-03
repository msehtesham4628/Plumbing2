import { ServiceItem } from '../types/index';

export const servicesData: ServiceItem[] = [
  {
    id: 'thermal-leakage-detection',
    slug: 'thermal-leakage-detection',
    title: 'Advanced Thermal Water Leakage Detection',
    shortDescription: 'Military-grade infrared thermography pinpointing concealed sub-surface moisture anomalies and hidden pipe ruptures with zero tile or wall destruction.',
    category: 'thermal',
    heroHeadline: 'Pinpoint Hidden Leaks with High-Precision Thermal Thermography',
    overview: 'Our non-destructive thermal imaging diagnostics uses calibrated FLIR infrared optics to map thermal conductivity differences caused by sub-surface water pooling, evaporative cooling anomalies, and pressurized pipe friction. Serving gated villas, luxury apartments, and commercial complexes across Hyderabad.',
    iconName: 'Camera',
    diagnosticEquipment: [
      'FLIR E8-XT High-Resolution Infrared Sensor (320x240 IR)',
      'Trotec T660 High-Frequency Dielectric Moisture Prober',
      'Fluke Visual IR Thermometer with Laser Target Marker',
      'Dual-Frequency Endoscopic Inspection Probe (3-meter snake)',
    ],
    symptoms: [
      'Unexplained spikes in monthly municipal / borewell water bills',
      'Damp, bubbling paint or cold damp patches on internal plaster',
      'Efflorescence (white salt crusts) accumulating along skirting boards',
      'Musty indoor odor without an obvious surface origin',
      'Hydro-pneumatic booster pump cycling on repeatedly when taps are closed',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Thermal Boundary Baseline & Pressure Equalization',
        description: 'Our certified thermographer measures ambient temperature and humidity, establishing standard baseline Delta-T calibration across target building planes.',
      },
      {
        step: 2,
        title: 'Active Infrared Scanning & Evaporative Differential Mapping',
        description: 'We scan walls, ceilings, and slab substrates with FLIR infrared cameras to identify cold-spot evaporative anomalies (ΔT ≥ 2.5°C) indicating moisture.',
      },
      {
        step: 3,
        title: 'Dielectric Depth Verification & Acoustic Cross-Check',
        description: 'Using non-invasive RF capacitance meters, we measure moisture content up to 40mm deep without driving pins or breaking tiles.',
      },
      {
        step: 4,
        title: 'Diagnostic Report & Micro-Surgical Repair Plan',
        description: 'You receive an engineering report with thermograms, temperature histograms, exact GPS/room coordinates, and a pinpoint repair blueprint.',
      },
    ],
    keyBenefits: [
      '100% Non-destructive: No exploratory tile breaking or wall hammering',
      'Sub-millimeter accuracy: Pinpoints leak origin within a 2-inch radius',
      'Comprehensive PDF engineering report accepted by builders & insurance',
      'Saves up to 80% on repair demolition and restoration costs',
    ],
    deliverables: [
      'Full-spectrum infrared thermograms (FLIR radiometric JPEG)',
      'Relative surface & sub-surface moisture percentage chart',
      'Acoustic pressure drop log & ultrasonic frequency graph',
      'Itemized plumbing repair scope with minimal excavation estimate',
    ],
    faqs: [
      {
        question: 'Can thermal imaging detect leaks inside concrete slabs and thick RCC columns?',
        answer: 'Yes. Moisture alters the thermal capacitance and thermal conductivity of reinforced concrete. As water migrates and evaporates, it produces a distinctive thermal footprint that our high-sensitivity FLIR cameras detect down to 0.05°C thermal sensitivity.',
      },
      {
        question: 'How long does a residential thermal leak inspection take in Hyderabad?',
        answer: 'A standard 3BHK or 4BHK villa inspection in Hyderabad typically requires 1.5 to 2.5 hours, covering bathrooms, kitchen shafts, external drainage ducts, and adjacent dry walls.',
      },
      {
        question: 'Do you provide the plumbing repair service after detecting the leak?',
        answer: 'Yes. HydroScan is both a diagnostic engineering firm and a master plumbing contractor. We perform precision micro-repairs without unnecessary demolition, then re-scan with thermal cameras to verify 100% resolution.',
      },
    ],
    caseStudyHighlight: {
      location: 'Jubilee Hills, Road No 36',
      finding: 'Concealed CPVC hot water riser elbow hairline crack behind Italian marble vanity',
      savings: 'Saved ₹1.8 Lakhs in marble replacement by opening only a single 4-inch access tile',
    },
  },
  {
    id: 'bathroom-leakage-detection',
    slug: 'bathroom-leakage-detection',
    title: 'Bathroom Leakage & Moisture Inspection',
    shortDescription: 'Detect concealed concealed pipeline bursts, sunken slab water accumulation, and failed tile waterproofing without hacking bathroom tiles.',
    category: 'thermal',
    heroHeadline: 'Zero-Demolition Bathroom Leakage & Moisture Diagnostics',
    overview: 'Bathroom moisture is Hyderabad’s most common structural complaint, often damaging lower-floor false ceilings or adjacent bedroom wardrobes. We differentiate between concealed pipe fractures, grout porosity, sunken slab tray overflows, and sanitary fixture seal failures.',
    iconName: 'Droplets',
    diagnosticEquipment: [
      'FLIR Thermal Core with MSX Multi-Spectral Edge Detail',
      'Testo 606-2 Digital Moisture & Dewpoint Hygro-sensor',
      'Acoustic Pipe Listening Microphone with High-Pass Filters',
      'Drain Line Inspection Endoscope with 1080p LED Camera',
    ],
    symptoms: [
      'Dampness on bedroom wall opposite the bathroom shower mixer',
      'Water dripping through downstairs neighbor ceiling or light fixtures',
      'Dark stains or fungal mould along bathroom baseboards',
      'Tile joints staying wet long after shower usage',
      'Hollow sounding tiles indicating sub-surface water pooling in sunken slab',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Static & Dynamic Pressure Testing',
        description: 'Isolate cold and hot water plumbing lines with manifold test gauges to determine if active pressure loss is occurring.',
      },
      {
        step: 2,
        title: 'High-Resolution Infrared Tile Surface Scan',
        description: 'Sweep all vertical walls, shower recesses, concealed cisterns, and floor slabs to detect temperature differentials indicating trapped moisture.',
      },
      {
        step: 3,
        title: 'Endoscopic Trap & Drainage Inspection',
        description: 'Insert flexible lighted micro-cameras down floor traps, nahani traps, and waste lines to check for joint detachment and pipe fractures.',
      },
      {
        step: 4,
        title: 'Remediation Roadmap',
        description: 'Provide surgical repair recommendations, including nano-crystallization grouting or targeted single-tile pipe repair.',
      },
    ],
    keyBenefits: [
      'Preserves expensive designer tiles, Italian marble, and sanitaryware',
      'Prevents structural corrosion of RCC ceiling rebar in lower apartments',
      'Eliminates guesswork between plumbing leaks vs waterproofing failure',
      'Rapid same-day diagnostic service across Hyderabad',
    ],
    deliverables: [
      'Annotated thermal and optical side-by-side comparison photos',
      'Trap and pipeline endoscopic video footage',
      'Quantitative moisture gradient map of affected walls',
      'Cost-effective remediation plan',
    ],
    faqs: [
      {
        question: 'Why is water leaking into my bedroom wall if my bathroom tiles look fine?',
        answer: 'Tiles themselves are waterproof, but micro-cracks in cementitious grout or a hidden fracture in the concealed CPVC/PPR pipeline allow water to enter the wall cavity. Capillary action drives this water into the porous plaster of your adjoining bedroom.',
      },
      {
        question: 'Do you need to break my bathroom floor to test the sunken slab?',
        answer: 'No. Our non-invasive dielectric scanners and thermal cameras inspect through tile and marble without drilling a single hole.',
      },
    ],
    caseStudyHighlight: {
      location: 'Financial District, Nanakramguda',
      finding: 'Sunken slab waterproofing bypass caused by failed waste trap collar ring',
      savings: 'Resolved without re-tiling the ₹3.5 Lakh master bathroom',
    },
  },
  {
    id: 'pipeline-leakage-detection',
    slug: 'pipeline-leakage-detection',
    title: 'Concealed Pipeline Leakage Detection',
    shortDescription: 'Pinpoint underground, shaft-embedded, and in-wall water supply leaks using acoustic correlation and thermal infrared technology.',
    category: 'thermal',
    heroHeadline: 'Acoustic & Thermal Concealed Pipeline Leak Detection',
    overview: 'Concealed water pipelines inside brick masonry, RCC duct shafts, or buried under garden pathways can leak thousands of liters silently. We combine acoustic frequency listening sensors with thermal imaging to pinpoint the exact breach coordinate.',
    iconName: 'Activity',
    diagnosticEquipment: [
      'Acoustic Ground Microphone with Digital Noise Filter (100Hz - 4000Hz)',
      'Correlation Leak Locator System for Long Pipeline Runs',
      'Radiometric Thermal Camera with Telephoto Lens for Building Shafts',
      'Ultrasonic Flow Rate Meter for Non-Invasive Volume Verification',
    ],
    symptoms: [
      'Overhead water tank emptying unusually fast',
      'Continuous sound of hissing or rushing water behind walls',
      'Water pooling along driveway paving stones or garden lawn',
      'Drop in municipal water delivery pressure across upper floors',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Line Segment Isolation & Pressure Profiling',
        description: 'Isolate main delivery sections to calculate localized pressure decay over standard 30-minute intervals.',
      },
      {
        step: 2,
        title: 'Acoustic Sound Peak Triangulation',
        description: 'Place acoustic ground sensors directly above the pipe run to capture escaping high-frequency fluid jet turbulence.',
      },
      {
        step: 3,
        title: 'Thermal Plume Confirmation',
        description: 'Verify the acoustic epicenter with thermal imaging to detect localized soil or plaster temperature dispersion.',
      },
      {
        step: 4,
        title: 'Precision Surface Marking',
        description: 'Physically mark the exact drill/cut coordinate with chalk/tape for surgical access.',
      },
    ],
    keyBenefits: [
      'Eliminates trenching or trench digging across lawns and driveways',
      'Locates leaks in CPVC, GI, PPR, HDPE, and copper pipelines',
      'Works through concrete, asphalt, paver blocks, and interior plaster',
      'Prevents foundation soil erosion and building settlement',
    ],
    deliverables: [
      'Coordinate mapping of the leak point',
      'Pipe run layout tracing schematic',
      'Acoustic decibel waveform report',
      'Turnkey plumbing repair quote',
    ],
    faqs: [
      {
        question: 'Can you detect leaks in non-metallic PVC or CPVC pipelines?',
        answer: 'Yes. While sound travels differently through plastic compared to GI steel, our acoustic filters and thermal cameras detect fluid friction and soil saturation around plastic pipe breaches with equal precision.',
      },
      {
        question: 'How deep underground can your equipment detect leaks?',
        answer: 'Under standard soil and concrete paving in Hyderabad, our acoustic ground listening probes detect pressurized line leaks up to 2.5 meters (8 feet) deep.',
      },
    ],
    caseStudyHighlight: {
      location: 'Madhapur Commercial Tech Center',
      finding: 'Sheared 65mm CPVC main line joint 1.2m below decorative vehicular driveway',
      savings: 'Prevented ₹4 Lakh paver demolition by cutting a single 30cm inspection hatch',
    },
  },
  {
    id: 'wall-seepage-detection',
    slug: 'wall-seepage-detection',
    title: 'Wall Moisture & Damp Seepage Detection',
    shortDescription: 'Non-invasive diagnostic survey identifying the root cause of damp walls, blistering paint, rising damp, and efflorescence.',
    category: 'thermal',
    heroHeadline: 'Scientific Wall Seepage & Rising Damp Diagnostics',
    overview: 'Repainting damp walls without identifying the water source is a waste of money. Our scientific wall seepage assessment determines whether moisture originates from plumbing leaks, external rain wall fissures, rising ground dampness, or internal condensation.',
    iconName: 'ShieldAlert',
    diagnosticEquipment: [
      'FLIR E-Series Thermographic Imager',
      'Pinless Dual-Depth Capacitive Moisture Meter',
      'Hygro-Thermometer for Dew Point Calculation',
      'Laser Distance Meter & Wall Infiltration Mapping Tool',
    ],
    symptoms: [
      'Paint peeling, chalking, or flaking off internal walls',
      'White powdery salt deposits (efflorescence) pushing through plaster',
      'Black mould colonies forming on bedroom corner walls',
      'Damp smell intensifying during monsoon season in Hyderabad',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Capacitive Moisture Depth Profiling',
        description: 'Measure sub-surface moisture percentage at 1-foot intervals from skirting to ceiling.',
      },
      {
        step: 2,
        title: 'Thermal Boundary Gradient Scan',
        description: 'Capture infrared images to visualize the moisture migration pattern (plume shape, downward gravity track, or upward capillary meniscus).',
      },
      {
        step: 3,
        title: 'Plumbing vs Waterproofing Differentiation',
        description: 'Test connected pipe runs under dynamic load to rule out or confirm pressurized pipe failure.',
      },
      {
        step: 4,
        title: 'Permanent Solution Blueprint',
        description: 'Provide an actionable remediation specification: chemical DPC, negative-side crystalline coating, or plumbing re-route.',
      },
    ],
    keyBenefits: [
      'Stops recurring painting expenses year after year',
      'Eliminates respiratory allergens and black mould spores',
      'Protects electrical conduits embedded inside wet brickwork',
      'Comprehensive moisture percentage documentation',
    ],
    deliverables: [
      '2D Wall Moisture Gradient Contour Map',
      'Infrared thermal documentation with comparative delta-T',
      'Chemical damp-proof remediation specification',
    ],
    faqs: [
      {
        question: 'Why does wall seepage return every year after repainting?',
        answer: 'Paint seals the surface temporarily. Trapped moisture behind the paint builds hydrostatic and vapor pressure, causing blistering and efflorescence. Only resolving the upstream water source permanently cures the wall.',
      },
    ],
    caseStudyHighlight: {
      location: 'Banjara Hills, Hill Ridge Residences',
      finding: 'Leaking internal AC drain line hidden behind POP false wall panel',
      savings: 'Saved ₹1.2 Lakh in recurring interior wall repainting',
    },
  },
  {
    id: 'terrace-leakage-detection',
    slug: 'terrace-leakage-detection',
    title: 'Terrace & Roof Slab Water Leakage Detection',
    shortDescription: 'High-sensitivity infrared thermal scanning detecting trapped rainwater, membrane punctures, and slab cracks without dismantling floor finishes.',
    category: 'thermal',
    heroHeadline: 'Infrared Diagnostics for Terrace Slabs & Roof Membranes',
    overview: 'Terrace water intrusion causes devastating structural damage to topmost residential units and commercial roof decks in Hyderabad. Utilizing evening solar heat dissipation, our thermal cameras reveal exact trapped water pockets beneath tiles and waterproofing membranes.',
    iconName: 'Sun',
    diagnosticEquipment: [
      'High-Sensitivity Calibrated Infrared Radiometer',
      'Nuclear/Dielectric Roof Moisture Impedance Gauge',
      'Drone-Mounted Optical & Thermal Aerial Inspection Unit',
      'Electronic Flood Level & Parapet Crack Caliper',
    ],
    symptoms: [
      'Ceiling dampness on the top floor during Hyderabad monsoon downpours',
      'Water pooling around rainwater downspout drains',
      'Cracks in brick-bat coba or reflective roof tiles',
      'Rust staining around ceiling fan fixtures on top floor',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Optimal Sunset / Twilight Radiative Scan',
        description: 'As the sun sets, dry concrete cools down quickly, while wet saturated areas retain solar heat, creating vivid thermal contrast on our sensors.',
      },
      {
        step: 2,
        title: 'Downspout & Parapet Joint Inspection',
        description: 'Inspect expansion joints, rain water pipe collars, and parapet coping flashing.',
      },
      {
        step: 3,
        title: 'Sub-Membrane Moisture Boundary Mapping',
        description: 'Delineate the exact perimeter of saturated screed or sub-tile ponding.',
      },
      {
        step: 4,
        title: 'Waterproofing Integrity Certification',
        description: 'Deliver targeted remediation specs: localized injection grouting vs full elastomeric recoating.',
      },
    ],
    keyBenefits: [
      'Avoids ripping up hundreds of square meters of terrace tiles',
      'Extends the structural lifespan of the concrete building slab',
      'Guarantees waterproof seal before heavy monsoon downpours',
      'Certified inspection reports for builders and residents welfare associations (RWAs)',
    ],
    deliverables: [
      'Roof aerial/handheld radiometric thermograms',
      'Saturated moisture zone percentage calculation',
      'Drainage slope and ponding gradient audit',
      'Contractor repair specifications',
    ],
    faqs: [
      {
        question: 'When is the best time of day to conduct a terrace thermal leak test?',
        answer: 'Late afternoon to dusk is ideal. The building absorbs solar heat during the afternoon; as the ambient air cools, water-saturated concrete remains warm due to higher thermal mass, making sub-surface moisture glow brightly on infrared screens.',
      },
    ],
  },
  {
    id: 'plumbing-services',
    slug: 'plumbing-services',
    title: 'Professional Plumbing Contracting & Civil Engineering',
    shortDescription: 'Master mechanical and civil plumbing contracting for luxury villas, gated communities, and commercial complexes in Hyderabad.',
    category: 'plumbing',
    heroHeadline: 'Engineering-Grade Plumbing Contracting for Modern Buildings',
    overview: 'We are licensed plumbing contractors combining civil engineering principles with advanced European piping standards. From multi-story pressure balancing to silent acoustic drainage networks, we build systems designed to operate without maintenance headaches for decades.',
    iconName: 'Wrench',
    diagnosticEquipment: [
      'Hydrostatic Hydraulic Pressure Test Rigs (up to 25 bar)',
      'Rothenberger Electro-fusion & Socket Fusion Machines',
      'Laser Pipe Level & Slope Inclinometer',
      'Digital Flow & Velocity Measurement Gauges',
    ],
    symptoms: [
      'Unbalanced water pressure between upper and lower floors',
      'Water hammer knocking sounds when faucets are shut off',
      'Recurring drain clogs and foul odors from drainage shafts',
      'Corroded GI pipelines needing replacement with composite CPVC/PPR',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Hydraulic System Audit & Flow Calculation',
        description: 'We review fixture units, pump head requirements, and pipe diameters to optimize pressure across all outlets.',
      },
      {
        step: 2,
        title: 'Material Engineering & Manifold Design',
        description: 'Specify premium CPVC SDR-11, PPR-CT multi-layer, or copper systems with isolation valves for every bathroom zone.',
      },
      {
        step: 3,
        title: 'Installation with Seismic & Expansion Anchoring',
        description: 'Mount pipe runs using vibration-damped pipe clamps and expansion loops to eliminate stress fractures.',
      },
      {
        step: 4,
        title: 'Multi-Stage Pressure Holding Verification',
        description: 'Hold 1.5x working pressure for 24 hours with digital chart recording before wall concealment.',
      },
    ],
    keyBenefits: [
      'Zero-leak guarantee with hydrostatic pressure certification',
      'Engineered water pressure balancing (no scalds or trickle showers)',
      'Complies with National Building Code (NBC) & Uniform Plumbing Code India (UPC-I)',
      'Certified master plumbers with extensive high-rise experience',
    ],
    deliverables: [
      'As-Built Plumbing Schematics & Isometric Diagrams',
      '24-Hour Hydrostatic Test Certificate',
      'Manufacturer material warranty validation',
      'Comprehensive annual maintenance protocol',
    ],
    faqs: [
      {
        question: 'What piping material do you recommend for luxury residences in Hyderabad?',
        answer: 'For internal pressurized supply, we recommend multi-layer PPR-CT or SDR-11 CPVC with brass fittings. For drainage, sound-attenuated triple-layer acoustic PVC prevents flushing noise in bedrooms.',
      },
    ],
  },
  {
    id: 'plumbing-installation',
    slug: 'plumbing-installation',
    title: 'New Plumbing Installation & Turnkey Piping',
    shortDescription: 'Turnkey sanitary, drainage, and water supply engineering for new construction, villa renovations, and penthouse fit-outs.',
    category: 'plumbing',
    heroHeadline: 'Turnkey Sanitary & Water Supply Installation in Hyderabad',
    overview: 'Flawless execution from sump to overhead tank. We handle full plumbing installations for bespoke architectural residences, gated communities, and commercial spaces across Hyderabad, ensuring future maintenance is seamless with dedicated zone shut-offs.',
    iconName: 'Layers',
    diagnosticEquipment: [
      'Precision Hydraulic Test Bench',
      'Rothenberger PPR Fusion Equipment',
      'Thermal Imaging Quality Assurance Scanner',
      'Laser Grade Aligners',
    ],
    symptoms: [
      'Building new villa or undertaking major renovation in Hyderabad',
      'Replacing old galvanized iron (GI) plumbing with modern CPVC/PPR',
      'Installing luxury concealed thermostatic valves and rain showers',
      'Upgrading to centralized pressure booster pump systems',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Design Review & Isometric Routing',
        description: 'Optimize pipe routes to minimize fittings and eliminate friction head losses.',
      },
      {
        step: 2,
        title: 'First-Fix Piping & Structural Chasing',
        description: 'Precision wall chasing and rigid mounting with anti-vibration rubber-lined clamps.',
      },
      {
        step: 3,
        title: 'Pressure Holding & Thermal QA Scan',
        description: 'Subject installation to 10 bar test pressure and verify every joint with thermal camera before plastering.',
      },
      {
        step: 4,
        title: 'Second-Fix Fixture Fitting & Commissioning',
        description: 'Install premium faucets, concealed cisterns, thermostatic mixers, and verify water flows.',
      },
    ],
    keyBenefits: [
      'Piping layouts documented with as-built drawings for future reference',
      'Every wet zone has independent isolation valves',
      'Acoustic insulation prevents water rush sounds through walls',
      'Punctual execution aligned with your interior finishing schedule',
    ],
    deliverables: [
      'Complete as-built piping CAD drawings',
      'Pre-plaster photographic record of all concealed pipe runs',
      'Pressure test certificate signed by licensed engineer',
    ],
    faqs: [
      {
        question: 'Do you work alongside our interior designer and civil contractor?',
        answer: 'Yes. We collaborate closely with architects, interior teams, and structural engineers in Hyderabad to coordinate piping chases and fixture heights seamlessly.',
      },
    ],
  },
  {
    id: 'plumbing-repair',
    slug: 'plumbing-repair',
    title: 'High-Precision Plumbing Repair & Pipeline Overhaul',
    shortDescription: 'Rapid surgical plumbing repairs, valve replacements, pipeline relining, and pressure balancing with minimal downtime.',
    category: 'plumbing',
    heroHeadline: 'Surgical Plumbing Repairs & Emergency Troubleshooting',
    overview: 'When plumbing fails, tearing apart your home is not the answer. HydroScan provides high-precision micro-surgical plumbing repairs. Once our thermal and acoustic instruments pinpoint the exact leak coordinate, we cut a clean, minimal inspection hatch to repair the pipe without destroying surrounding finishes.',
    iconName: 'Tool',
    diagnosticEquipment: [
      'High-Speed Micro-Cutter & Tile Scribe',
      'Telescopic Pipe Borescope',
      'Mechanical Pipe Plug Isolation Tools',
      'Thermal Leak Re-Scan Verification Sensor',
    ],
    symptoms: [
      'Burst concealed pipeline pouring water through walls',
      'Pressure pump failing to build pressure or humming continuously',
      'Severe foul sewer gas entering bathrooms through dry traps',
      'Failed diverter valves inside luxury showers',
    ],
    detectionProcess: [
      {
        step: 1,
        title: 'Rapid Zone Isolation',
        description: 'Immediately isolate the failing sub-system to halt active water damage.',
      },
      {
        step: 2,
        title: 'Targeted Surgical Access',
        description: 'Cut a precise single-tile or drywall port directly at the diagnosed breach point.',
      },
      {
        step: 3,
        title: 'Permanent Pipe Section Replacement',
        description: 'Excavate the damaged elbow or pipe section, install new heavy-duty schedule pipe with mechanical fittings.',
      },
      {
        step: 4,
        title: 'Thermal & Pressure Re-Verification',
        description: 'Re-pressurize the line and re-scan with thermal imaging to verify zero leakage before sealing the access port.',
      },
    ],
    keyBenefits: [
      '90% less demolition compared to traditional trial-and-error plumbers',
      'Same-day emergency response in central & western Hyderabad',
      'Repairs backed by 1-year written leak-free warranty',
      'Clean work area with dust containment and floor protection',
    ],
    deliverables: [
      'Before & After photographic report of the repaired pipe',
      'Thermal verification scan proving leak resolution',
      '12-Month service warranty certificate',
    ],
    faqs: [
      {
        question: 'Can you match my original tile after a surgical repair?',
        answer: 'Because our diagnosis is accurate within inches, we only remove one or two tiles. If you have spare tiles, we reinstall them seamlessly. If not, we can neatly fit an aesthetic stainless steel access panel or color-matched cover.',
      },
    ],
  },
];
