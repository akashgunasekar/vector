export interface DesignLayoutSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export const KITCHEN_DESIGN_SECTIONS: DesignLayoutSection[] = [
  {
    id: "kitchen-layout-design",
    number: "01",
    title: "Kitchen Layout Design",
    subtitle: "Ergonomic Chef Workflow & Spatial Optimization",
    description:
      "A successful commercial kitchen is an engineered machine. Vector drafts complete architectural layouts with strict functional zoning: receiving dock, temperature-controlled dry and cold storage, pre-prep areas (meat, poultry, fish, veg), active cooking line, plating and pickup counter, beverage pantry, and dishwash scullery. This eliminates cross-traffic bottlenecks and guarantees food safety protocols.",
    iconName: "LayoutTemplate",
    details: [
      "Strict HACCP workflow segregation between raw and cooked goods",
      "Ergonomically dimensioned aisle clearances (900mm–1200mm) for high-speed chef transit",
      "Line-of-sight coordination between executive chef pass and expediter counter",
      "Integrated waste drop points and clean plate replenishment circuits",
    ],
  },
  {
    id: "boq-preparation",
    number: "02",
    title: "BOQ Preparation",
    subtitle: "Itemized Specifications & Transparent Cost Engineering",
    description:
      "Vector formulates exhaustive Bills of Quantities (BOQ) covering every single item of equipment, custom stainless steel fabrication, and mechanical accessory. Each entry specifies material grade (AISI 304/316), sheet gauge thickness, connected electrical KW, gas BTU rating, and water requirements, enabling cost-effective purchasing suited to international standards.",
    iconName: "FileSpreadsheet",
    details: [
      "Itemized equipment schedules with dimensions and technical specifications",
      "Food-grade stainless steel sheet metal gauge breakdowns (16G, 18G)",
      "Utility consumption summaries for MEP consultants and project architects",
      "Accurate budgeting without unexpected hidden scope creep",
    ],
  },
  {
    id: "civil-layout",
    number: "03",
    title: "Civil Layout",
    subtitle: "Equipment Curbs, Floor Slopes & Wall Reinforcements",
    description:
      "Civil planning provides the structural foundation for your kitchen. Vector supplies detailed civil drawings indicating masonry equipment mounting curbs (plinths), floor depression zones for cold rooms, wall partition locations, non-slip tile layouts, and heavy wall anchor backing for overhead storage cabinets and exhaust canopies.",
    iconName: "Building2",
    details: [
      "Masonry plinth heights and recessed floor curbs for cooking ranges and steamers",
      "Sub-floor depression calculations for walk-in cold room insulation slabs",
      "Structural wall load calculations for overhead exhaust hood bracket anchors",
      "Sanitary coved wall-to-floor junctions preventing dirt accumulation",
    ],
  },
  {
    id: "plumbing-layout",
    number: "04",
    title: "Plumbing Layout",
    subtitle: "Potable Water Inlets, Pressure Balancing & Hot/Cold Distribution",
    description:
      "High-output kitchens require carefully calibrated water delivery. Vector maps hot and cold water supply lines to pot sinks, pre-rinse spray units, dishwashers, combi ovens, and steam boilers with appropriate pipe diameters, backflow preventers, and pressure regulating valves.",
    iconName: "Droplets",
    details: [
      "Hot and cold water supply point coordinates with shutoff isolation valves",
      "Treated softened water routing for combi ovens, dishwashers, and steam generators",
      "Adequate water pressure calculations ensuring rapid fill times for prep sinks",
      "Dual connection provisions for pass-through warewashing stations",
    ],
  },
  {
    id: "electrical-layout",
    number: "05",
    title: "Electrical Layout",
    subtitle: "3-Phase Power Distribution, Connected Loads & Waterproof Isolators",
    description:
      "Commercial kitchens harbor massive electrical demand across cooking, refrigeration, and dishwashing equipment. Vector creates coordinated electrical distribution drawings showing exact single-phase and 3-phase power drop points, connected KW loads, dedicated circuit breakers, and IP65 waterproof isolator switches situated away from splash zones.",
    iconName: "Zap",
    details: [
      "Connected electrical load schedules by station and phase balancing",
      "Coordinates for industrial waterproof sockets and wall isolators",
      "Dedicated high-amperage lines for ovens, induction ranges, and dishwashers",
      "Emergency power and UPS routing for cold room digital controllers and POS systems",
    ],
  },
  {
    id: "drainage-layout",
    number: "06",
    title: "Drainage Layout & Waste Water Management",
    subtitle: "Sanitary Floor Trenches, Grating & Grease Trap Interceptors",
    description:
      "Proper drainage prevents kitchen flooding and grease accumulation. Vector designs continuous stainless steel floor trenches with built-in gravity falls, non-slip removable gratings, debris catch baskets, and central grease interceptors, meeting environmental waste water management guidelines.",
    iconName: "Waves",
    details: [
      "Floor drainage channel routes with integrated 1:100 fall towards discharge sumps",
      "Food-grade AISI 304 laser-cut non-slip gratings designed for trolley loads",
      "Multi-stage commercial grease traps preventing municipal sewer blockages",
      "High-temperature discharge lines for dishwashers and tilting bratt pans",
    ],
  },
  {
    id: "gas-line-layout",
    number: "07",
    title: "Gas Line Layout & Fuel Management",
    subtitle: "LPG/PNG Manifolds, Regulators & Automated Safety Shutoffs",
    description:
      "Safety is paramount when handling commercial fuels. Vector designs robust LPG cylinder manifold yards, bulk LOT systems, or piped natural gas (PNG) line networks with primary and secondary pressure regulators, gas leak detection sensors, and automated solenoid safety shut-off valves linked to fire suppression systems.",
    iconName: "Flame",
    details: [
      "C-class seamless carbon steel piping with welded joints and color coding",
      "Secondary pressure regulators providing stable burner manifold pressures",
      "Combustible gas leak detectors with audio-visual alarm annunciators",
      "Solenoid emergency shut-off valves interlocked with kitchen fire alarm systems",
    ],
  },
  {
    id: "exhaust-layout",
    number: "08",
    title: "Exhaust Layout",
    subtitle: "Grease Hood Capture, Static Pressure Calculations & Extraction Blowers",
    description:
      "Vector engineers commercial kitchen exhaust systems to extract grease vapors, smoke, and excess thermal heat. Our designs specify hood overhang dimensions (minimum 150mm–300mm), aerodynamic SS grease baffle filters, fire-rated duct runs, and high-efficiency backward-curved centrifugal blowers.",
    iconName: "Wind",
    details: [
      "Capture velocity calculations based on cook line equipment thermal heat output",
      "Food-grade stainless steel exhaust canopies with continuous grease gutters",
      "Low-resistance duct sizing minimizing fan horsepower and acoustic vibration",
      "Rooftop discharge stacks situated safely away from fresh air intakes",
    ],
  },
  {
    id: "fresh-air-layout",
    number: "09",
    title: "Fresh Air Make-Up Layout",
    subtitle: "Balanced Kitchen Pressure & Thermal Comfort",
    description:
      "A kitchen that only exhausts air creates a severe negative pressure vacuum, leading to backdrafts, whistling doors, and unbearable heat. Vector designs balanced make-up fresh air supply systems providing 80–85% tempered replacement air delivered directly in front of cook lines to maintain a comfortable working climate.",
    iconName: "Compass",
    details: [
      "Supply air volume calibrated to 80–85% of total exhaust air extraction rate",
      "Low-velocity perforated supply plenums preventing disruption of hood grease capture",
      "Two-stage air filtration removing outside ambient dust and particulate matter",
      "Significant reduction in chef heat fatigue and improved oxygenation",
    ],
  },
  {
    id: "equipment-planning",
    number: "10",
    title: "Equipment Planning",
    subtitle: "Menu Matching, Sizing & Ergonomic Positioning",
    description:
      "We bridge the gap between executive chef culinary aspirations and engineering reality. By evaluating meal production schedules, peak turn times, and dish menus, Vector selects appliances with exact batch capacities, avoiding bottlenecks and saving clients from over-investing in unnecessary capacity.",
    iconName: "Sliders",
    details: [
      "Comprehensive menu item thermal breakdown and pan volume matching",
      "Standard commercial appliance sourcing paired with custom fabrication",
      "Direct juxtaposition of prep tables, cold storage, and hot cook stations",
      "Energy conservation evaluation comparing gas, electric, and induction efficiencies",
    ],
  },
  {
    id: "kitchen-infrastructure",
    number: "11",
    title: "Kitchen Infrastructure & Waste Management",
    subtitle: "Hygiene Zoning, Refuse Flow & Eco-friendly Management",
    description:
      "Modern kitchens require intelligent solid and liquid waste management systems. Vector incorporates touch-free foot-pedal bio-bins, dedicated garbage refrigeration holding rooms, grease recovery chambers, and food waste shredding infrastructure to satisfy civic environmental and hygiene audits.",
    iconName: "ShieldCheck",
    details: [
      "Separated wet organic food waste and dry recyclable packaging sorting points",
      "Dedicated air-conditioned waste holding rooms preventing pest infestation and odor",
      "Automated hand hygiene stations and boot sanitizing basins at kitchen entries",
      "Restaurant and cocktail bar interior concept coordination with dining areas",
    ],
  },
  {
    id: "tender-documentation",
    number: "12",
    title: "Tender Documentation",
    subtitle: "RFP Packages, Vendor Pre-Qualification & Compliance",
    description:
      "For institutional, hotel, and government projects, Vector prepares comprehensive tender documentation packages. This includes detailed equipment datasheets, approved make lists, fabrication standards, utility connection matrices, and testing/commissioning criteria for fair, transparent bidding.",
    iconName: "FileCheck2",
    details: [
      "Complete technical specification sheets with tolerance parameters",
      "Approved vendor and component brand make-lists (compressors, valves, steel)",
      "Factory inspection checklists and on-site testing protocols",
      "Transparent tender evaluation criteria ensuring international quality benchmarks",
    ],
  },
];

export const DESIGN_PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement",
    tagline: "Menu, Capacity & Space Discovery",
    description:
      "We begin by understanding your concept: menu style, peak seating capacity, operational shifts, culinary staff headcount, and available architectural footprint.",
  },
  {
    step: "02",
    title: "Site Understanding",
    tagline: "Physical Survey & Structural Assessment",
    description:
      "Detailed survey of column grids, ceiling slab heights, utility shaft locations, exhaust riser pathways, and receiving dock access constraints.",
  },
  {
    step: "03",
    title: "Kitchen Layout",
    tagline: "2D Architectural Floor Planning",
    description:
      "Drafting scientific functional zones with smooth chef workflow, clear receiving-to-service lines, aisle clearances, and hygiene segregation.",
  },
  {
    step: "04",
    title: "BOQ Formulation",
    tagline: "Detailed Bill of Quantities",
    description:
      "Formulating an exhaustive, itemized BOQ detailing equipment dimensions, steel grades, sheet thickness, and utility consumption ratings.",
  },
  {
    step: "05",
    title: "Utility Planning",
    tagline: "Civil, MEP, Gas & Exhaust Schematics",
    description:
      "Marking precise coordinates for civil curbs, plumbing taps, drainage sumps, electrical points, gas manifolds, and ventilation ducting.",
  },
  {
    step: "06",
    title: "Equipment Selection",
    tagline: "Standard Appliances & Custom SS Fabrication",
    description:
      "Finalizing heavy-duty equipment choices, custom stainless steel counters, cold rooms, and warewashing systems tailored to your menu volume.",
  },
  {
    step: "07",
    title: "Final Design & Handover",
    tagline: "Tender Package & Coordinated Execution Drawings",
    description:
      "Issuing finalized fabrication drawings, MEP coordination blueprints, and tender documentation ready for smooth project execution.",
  },
];
