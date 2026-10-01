export interface Industry {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline: string;
  image: string;
  description: string;
  challenges: string[];
  keySolutions: string[];
  relevantCategories: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: "hotels-restaurants",
    slug: "hotels-restaurants",
    title: "Hotels & Restaurants",
    shortTitle: "Hotels & Dining",
    heroHeadline: "Precision-Engineered Front & Back-of-House Kitchen Systems",
    image: "/images/ind_hotel_restaurant.jpg",
    description:
      "Vector delivers comprehensive kitchen design and heavy-duty equipment suites for fine dining, star hotels, and busy commercial restaurants. From custom cooking islands and high-efficiency ranges to noise-dampened preparation stations, walk-in cold rooms, and continuous dishwashing lines, every installation is engineered for rapid service speed and rigorous food safety.",
    challenges: [
      "Peak-hour high meal ticket volume with zero thermal recovery lag",
      "Ergonomic spatial efficiency in constrained urban kitchen footprints",
      "Sanitation compliance and grease-free chef working environments",
      "Reliable temperature separation across hot prep, cold garde manger, and service counters",
    ],
    keySolutions: [
      "Custom cooking islands with heavy-gauge SS burner ranges and ovens",
      "Under-counter and walk-in refrigeration maintaining precise temperature zones",
      "High-throughput hood dishwashers and soil-table sorting lines",
      "Engineered exhaust canopies with baffle filters for clean kitchen air",
    ],
    relevantCategories: [
      "Cooking Equipment",
      "Refrigeration Equipment",
      "Dishwashing Equipment",
      "Preparation & Washing",
      "Exhaust, Fire & Fresh Air",
    ],
  },
  {
    id: "catering-units",
    slug: "catering-units",
    title: "Catering Units",
    shortTitle: "Outdoor & Event Catering",
    image: "/images/ind_catering_banquet.jpg",
    heroHeadline: "High-Volume Batch Production & Mobile Logistics Solutions",
    description:
      "Catering kitchens demand rugged bulk processing capacity, continuous steam generation, and dependable transport equipment. Vector plans and equips high-volume production commissaries and outdoor banquet setups with industrial tilting bratt pans, bulk steam cooking vessels, motorized grinders, and heavy-duty stainless steel service trolleys.",
    challenges: [
      "Cooking mass quantities within tight event deadlines",
      "Hygienic bulk hot holding and insulated temperature-controlled logistics",
      "Rapid washdown and cleanup of oversized bulk vessels and sheet pans",
      "Durable mobile equipment capable of withstanding intensive movement",
    ],
    keySolutions: [
      "High-output steam-jacketed boiling vessels and idly steamer units",
      "Heavy motorized vegetable cutters, dough kneaders, and wet grinders",
      "Reinforced stainless steel bulk storage racks and dunnage pallets",
      "Mobile transport trolleys and insulated Bain Marie holding units",
    ],
    relevantCategories: [
      "Steam Cooking Equipment",
      "Kitchen Processing Machines",
      "Storage Equipment",
      "SS Fabrication",
      "Preparation & Washing",
    ],
  },
  {
    id: "food-courts",
    slug: "food-courts",
    title: "Food Courts & Quick-Service",
    shortTitle: "Food Courts & QSR",
    image: "/images/ind_qsr_foodcourts.jpg",
    heroHeadline: "Modular High-Speed Turnaround Kitchen Stations & Display Counters",
    description:
      "Food court kiosks and high-traffic shopping mall counters operate under compact space constraints requiring maximum speed per square meter. Vector designs streamlined workflow layouts with front-of-house heated/refrigerated display counters, high-speed griddles, modular fryers, and integrated exhaust hoods tailored for mall utility provisions.",
    challenges: [
      "Strict mall exhaust and fire safety compliance guidelines",
      "High turnaround customer queues demanding instant cooking response",
      "Visually spotless front-of-house customer facing display counters",
      "Limited back-of-house storage requiring optimized space utilization",
    ],
    keySolutions: [
      "Heated bain maries, cake display chillers, and juice counters",
      "Compact countertop griddles, sandwich grillers, and conveyor ovens",
      "Certified kitchen fire suppression integration inside low-profile hoods",
      "Modular stainless under-counter refrigeration and custom worktables",
    ],
    relevantCategories: [
      "Display & Food Serving",
      "Bakery & Pantry Equipment",
      "Cooking Equipment",
      "Refrigeration Equipment",
      "Exhaust, Fire & Fresh Air",
    ],
  },
  {
    id: "institutional-kitchens",
    slug: "institutional-kitchens",
    title: "Institutional Kitchens",
    shortTitle: "Colleges & Hospitals",
    image: "/images/ind_institutions_hospitals.jpg",
    heroHeadline: "Safe, Sanitary, High-Capacity Dining Infrastructure for Institutions",
    description:
      "Hospitals, universities, corporate campuses, and hostels require uncompromising hygiene, high capacity, and predictable cooking routines. Vector engineers turnkey kitchen facilities featuring automated processing machinery, multi-tray steam boilers, sanitary stainless floor trench drainage, and healthcare-grade utility lockers.",
    challenges: [
      "Cooking thousands of balanced meals in scheduled dining shifts",
      "Preventing cross-contamination through strict zoning (Receiving, Prep, Cooking, Wash)",
      "Continuous hot washdown sanitation without floor pooling or odors",
      "Durable food-grade stainless metalwork that withstands round-the-clock use",
    ],
    keySolutions: [
      "Automated root vegetable peelers, slicers, and heavy planetary mixers",
      "High-efficiency LPG and electric steam boilers with steam kettles",
      "Stainless steel floor gratings, grease trenches, and sanitary sinks",
      "Hospital-grade storage lockers, utility cabinets, and hygiene wash stations",
    ],
    relevantCategories: [
      "Kitchen Processing Machines",
      "Steam Cooking Equipment",
      "Drainage Systems & Utility",
      "Dishwashing Equipment",
      "SS Fabrication",
    ],
  },
  {
    id: "industrial-kitchens",
    slug: "industrial-kitchens",
    title: "Industrial Kitchens",
    shortTitle: "Central Commissaries",
    image: "/images/ind_industrial_central.jpg",
    heroHeadline: "Heavy-Duty Production Lines for Central Food Commissaries",
    description:
      "For large industrial canteens, central commissaries, and commercial food manufacturing facilities, Vector provides engineered industrial-scale kitchen layouts. Our solutions include continuous rack conveyors, bulk steam distribution systems, high-capacity dough processing lines, and custom stainless fabrication built to industrial standards.",
    challenges: [
      "Non-stop production shifts demanding continuous equipment uptime",
      "Complex utility routing for gas, 3-phase power, steam, and compressed air",
      "Massive steam and grease vapor extraction handling",
      "Stringent workplace safety and industrial food hygiene protocols",
    ],
    keySolutions: [
      "Turnkey civil, plumbing, electrical, and gas line infrastructure planning",
      "High-capacity industrial rotary rack ovens and combi steamers",
      "Centrifugal heavy exhaust blowers and fresh make-up air duct systems",
      "Automated dishwashing conveyor lines with pre-sorting soil tables",
    ],
    relevantCategories: [
      "Cooking Equipment",
      "Bakery & Pantry Equipment",
      "Steam Cooking Equipment",
      "Exhaust, Fire & Fresh Air",
      "Drainage Systems & Utility",
    ],
  },
];
