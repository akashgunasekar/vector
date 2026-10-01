export interface Service {
  number: string;
  id: string;
  title: string;
  category: "Design & Planning" | "Engineering & Fabrication" | "Support & Maintenance";
  shortDescription: string;
  detailedDescription: string;
  scopeOfWork: string[];
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    number: "01",
    id: "kitchen-planning-design",
    title: "Kitchen Planning & Design",
    category: "Design & Planning",
    shortDescription:
      "Scientific spatial planning, ergonomic zoning, and workflow schematics tailored for professional culinary operations.",
    detailedDescription:
      "Vector specializes in comprehensive commercial kitchen design, taking into account menu characteristics, meal output capacity, HACCP hygiene segregation, and equipment ergonomics. We analyze receiving docks, dry/cold storage, pre-prep, active hot cooking lines, plating, service pass, and warewashing loops to ensure a smooth, cross-contamination-free flow of staff and food.",
    scopeOfWork: [
      "Site physical survey and structural boundary measurement",
      "Ergonomic kitchen zoning and functional culinary department layout",
      "Workflow routing for raw material receiving, storage, cooking, and plating",
      "Hygiene separation between clean service paths and dirty dish return",
    ],
    deliverables: [
      "Detailed 2D CAD architectural kitchen floor plans",
      "Equipment placement schematics with dimensional clearances",
      "3D volumetric visualization and aisle spacing studies",
    ],
  },
  {
    number: "02",
    id: "boq-documentation",
    title: "BOQ & Documentation",
    category: "Design & Planning",
    shortDescription:
      "Exhaustive Bill of Quantities (BOQ), technical equipment schedules, and compliant tender specifications.",
    detailedDescription:
      "Accurate procurement starts with rigorous documentation. Vector formulates exhaustive BOQs detailing every piece of equipment, sheet metal thickness (SS 304/316 gauge), electrical kilowatt ratings, gas load in BTU/kcal, water pressures, and drainage connections. This empowers clients to obtain transparent, cost-effective purchasing suited to international quality standards without unexpected budget overruns.",
    scopeOfWork: [
      "Comprehensive item-by-item equipment schedule creation",
      "Technical specifications (sheet gauge, motor ratings, heating elements)",
      "Utility consumption summaries (KW power, gas BTU, water flow, drain dia)",
      "Tender document preparation for institutional and corporate bidding",
    ],
    deliverables: [
      "Complete Bill of Quantities (BOQ) with item codes and specifications",
      "Detailed MEP utility load chart for consultants and civil teams",
      "Tender comparison schedules and material compliance checklists",
    ],
  },
  {
    number: "03",
    id: "equipment-design",
    title: "Equipment Design & Selection",
    category: "Engineering & Fabrication",
    shortDescription:
      "Tailored selection of standard commercial appliances and custom equipment engineering matching your specific menu.",
    detailedDescription:
      "Every culinary concept requires a specialized balance of equipment. We help hospitality and catering operators select the right capacity burners, ovens, fryers, dishwashers, and refrigeration units, eliminating both under-powered bottlenecks and costly over-specification. Where standard equipment does not fit architectural conditions, we engineer custom solutions.",
    scopeOfWork: [
      "Thermal load calculation based on menu turnover and batch sizes",
      "Energy source evaluation (LPG, natural gas, 3-phase electric, induction)",
      "Matching equipment duty cycles to operational operating hours",
      "Custom appliance design for specialized regional or international cuisines",
    ],
    deliverables: [
      "Itemized equipment selection matrix with capacity justifications",
      "Custom fabrication drawings for non-standard equipment units",
      "Energy and fuel efficiency optimization recommendations",
    ],
  },
  {
    number: "04",
    id: "ss-fabrication",
    title: "SS Fabrication",
    category: "Engineering & Fabrication",
    shortDescription:
      "Precision custom stainless steel fabrication using food-grade AISI 304/316 for worktables, sinks, counters, and sumps.",
    detailedDescription:
      "Stainless steel is the backbone of any commercial kitchen. Vector fabricates high-precision stainless steel equipment and fixtures using food-grade AISI 304 and 316. Our fabrication includes sound-deadened worktables, multi-bowl prep sinks, soil tables, mobile trolleys, dry storage racks, hygiene wash stations, and bespoke stainless cabinets built to exact site measurements.",
    scopeOfWork: [
      "Laser cutting, CNC press brake bending, and precision TIG welding",
      "Marine ply sound-deadening on work surfaces to eliminate metallic clatter",
      "Smooth sanitary coved corners and burr-free deburred edge finishing",
      "Rigid tubular under-frames with adjustable heavy nylon bullet feet",
    ],
    deliverables: [
      "Custom-fitted stainless steel worktables and prep stations",
      "Sanitary washing sinks and pass-through dishwashing tables",
      "Inspection and material certification for food-grade alloy integrity",
    ],
  },
  {
    number: "05",
    id: "kitchen-infrastructure",
    title: "Kitchen Infrastructure",
    category: "Design & Planning",
    shortDescription:
      "Holistic coordination across civil layouts, plumbing, electrical, drainage channels, gas lines, and exhaust/fresh air systems.",
    detailedDescription:
      "A commercial kitchen cannot function without synchronized infrastructure. Vector designs and specifies the complete supporting backbone: gas manifold systems, fresh air make-up ducting, grease exhaust extraction with baffle filters, floor drainage trench slopes, waste water management, and fuel piping, ensuring safety and compliance with civic regulations.",
    scopeOfWork: [
      "Civil wall positioning, curb dimensions, and floor slope gradients",
      "Plumbing inlet lines, water treatment integration, and floor drain trenches",
      "Electrical distribution boards, conduit paths, and waterproof socket locations",
      "LPG/PNG gas manifold piping, emergency isolation valves, and leak detection",
      "Exhaust hood sizing, fresh make-up air balance, and duct routing",
      "Waste management and waste water grease interceptor planning",
    ],
    deliverables: [
      "Comprehensive Civil, Plumbing, Electrical, and Gas Line Layout Drawings (MEP)",
      "Exhaust and Fresh Air ventilation sizing calculations and duct schematics",
      "Grease trap and floor drainage slope specifications",
    ],
  },
  {
    number: "06",
    id: "installation-support",
    title: "Installation Support",
    category: "Engineering & Fabrication",
    shortDescription:
      "On-site positioning, leveling, utility interconnection, and pre-commissioning testing by trained technicians.",
    detailedDescription:
      "Professional installation ensures that high-value kitchen equipment performs safely and reliably from day one. Vector's experienced field engineers supervise equipment unloading, placement according to CAD layouts, precise leveling, final connection to utility points (gas, water, drainage, electricity), and pre-commission test burns and cycles.",
    scopeOfWork: [
      "Site readiness verification prior to equipment delivery",
      "Rigging, positioning, and seismic/vibration leveling on floor curbs",
      "Final hookup verification with licensed gas and electrical contractors",
      "No-load and full-load trial runs of cooking, refrigeration, and warewash units",
    ],
    deliverables: [
      "Site installation sign-off and commissioning checklist",
      "Equipment operational testing log and calibration verification",
      "Operational handover report to kitchen executive chefs and engineers",
    ],
  },
  {
    number: "07",
    id: "breakdown-maintenance",
    title: "Breakdown Maintenance",
    category: "Support & Maintenance",
    shortDescription:
      "Rapid diagnostic and repair assistance to minimize operational downtime in active commercial kitchens.",
    detailedDescription:
      "Kitchen equipment breakdowns during peak service hours can halt operations. Vector provides prompt breakdown maintenance support with knowledgeable technical staff who diagnose gas burner issues, electrical thermostat faults, refrigeration compressor trips, and mechanical dishwashing conveyor jams to restore kitchen functionality quickly.",
    scopeOfWork: [
      "Dedicated technical support escalation channel for operational breakdowns",
      "On-site diagnostic inspection and component fault isolation",
      "Quick replacement of critical failure items (thermostats, thermocouples, pumps)",
      "Safety recalibration before returning units to active kitchen line duty",
    ],
    deliverables: [
      "Breakdown diagnosis report detailing cause and remedial actions",
      "Component replacement tracking and warranty validation",
      "Preventive operational guidance to kitchen staff to avoid recurrences",
    ],
  },
  {
    number: "08",
    id: "annual-maintenance-contract",
    title: "Annual Maintenance Contract (AMC)",
    category: "Support & Maintenance",
    shortDescription:
      "Scheduled preventive maintenance programs ensuring peak equipment efficiency, safety, and prolonged service lifespan.",
    detailedDescription:
      "Preventive upkeep is substantially cheaper than emergency repairs. Vector offers tailored Annual Maintenance Contracts (AMC) that include scheduled quarterly or monthly inspections, descaling of steam boilers, burner nozzle decarb cleaning, refrigeration coil dusting, gasket checks, and electrical contactor tightening.",
    scopeOfWork: [
      "Periodic scheduled visits by certified service technicians",
      "Comprehensive multi-point equipment inspection and tune-up",
      "Cleaning and calibration of burners, ignition probes, and safety cutoffs",
      "Checking compressor pressures, door gaskets, and condensate lines",
      "Inspection of exhaust hood baffle filters and blower belt tension",
    ],
    deliverables: [
      "Periodic preventive maintenance service log books",
      "Advance component wear notices and early replacement alerts",
      "Priority response dispatch for contract holders during emergencies",
    ],
  },
  {
    number: "09",
    id: "technical-support",
    title: "Technical Support",
    category: "Support & Maintenance",
    shortDescription:
      "Staff equipment operational training, operating manuals, troubleshooting guidance, and spare parts coordination.",
    detailedDescription:
      "Beyond physical repairs, our technical support desk assists client culinary and maintenance teams with equipment operational training, safety protocol briefings, user manual distribution, and prompt coordination for genuine replacement parts and accessories across all product lines.",
    scopeOfWork: [
      "Staff onboarding and training on proper equipment operation and cleaning",
      "Standard Operating Procedure (SOP) guidance for daily maintenance",
      "Technical guidance over phone and email for minor operating queries",
      "Genuine spare parts sourcing and supply logistics",
    ],
    deliverables: [
      "Equipment user documentation and maintenance manuals",
      "Staff operational training certification and SOP checklists",
      "Dedicated parts inquiry and fulfillment tracking",
    ],
  },
];

export const SERVICE_TIMELINE = [
  {
    step: "01",
    phase: "Consultation & Survey",
    timeline: "Week 1",
    description: "Initial discovery, site spatial survey, menu analysis, and operational load assessment.",
  },
  {
    step: "02",
    phase: "Design & BOQ Formulation",
    timeline: "Weeks 1–2",
    description: "Architectural 2D layout planning, MEP utility schematics, and comprehensive tender BOQ.",
  },
  {
    step: "03",
    phase: "Approval & Engineering",
    timeline: "Week 3",
    description: "Layout sign-off, custom equipment manufacturing drawings, and utility readiness checklist.",
  },
  {
    step: "04",
    phase: "SS Fabrication & Sourcing",
    timeline: "Weeks 3–6",
    description: "Food-grade stainless steel fabrication, procurement of heavy machinery, and factory QC.",
  },
  {
    step: "05",
    phase: "Site Delivery & Installation",
    timeline: "Weeks 6–7",
    description: "Staged equipment delivery, mechanical positioning, leveling, and utility point hookup.",
  },
  {
    step: "06",
    phase: "Testing, Commissioning & Handover",
    timeline: "Week 8",
    description: "Full-load test runs, safety cutoff checks, chef operational training, and warranty handover.",
  },
  {
    step: "07",
    phase: "Ongoing Support & AMC",
    timeline: "Post-Launch",
    description: "Periodic preventive servicing, emergency breakdown attendance, and genuine spare parts support.",
  },
];
