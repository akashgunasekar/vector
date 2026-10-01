export interface Category {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortTitle: string;
  description: string;
  image: string;
  highlightItems: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "cooking-equipment",
    slug: "cooking-equipment",
    number: "01",
    name: "Cooking Equipment",
    shortTitle: "Cooking Ranges",
    description:
      "Heavy-duty gas and electric cooking suites, burner ranges, tandoors, and high-output cooking islands engineered for rigorous culinary operations.",
    image: "/images/cooking_equipment_range.jpg",
    highlightItems: [
      "Stock Pot Range",
      "Burner Range with Oven",
      "Chinese Range",
      "Dosa Hot Plate",
      "Tandoori Pot",
      "Tilting Bratt Pan",
    ],
  },
  {
    id: "bakery-pantry",
    slug: "bakery-pantry",
    number: "02",
    name: "Bakery & Pantry Equipment",
    shortTitle: "Bakery & Pantry",
    description:
      "Precision baking ovens, combination convection units, automated pizza lines, and compact pantry appliances for bakeries and pastry kitchens.",
    image: "/images/bakery_combi_ovens.jpg",
    highlightItems: [
      "Deck Oven",
      "Combi Oven",
      "Conveyor Pizza Oven",
      "Sandwich Griller",
      "Rotary Oven",
      "Bun Toaster",
    ],
  },
  {
    id: "dishwashing-equipment",
    slug: "dishwashing-equipment",
    number: "03",
    name: "Dishwashing Equipment",
    shortTitle: "Dishwashing Systems",
    description:
      "Sanitary pass-through hood dishwashers, rack conveyors, under-counter glass washers, and pre-rinse soil tables designed for high turnover sanitation.",
    image: "/images/commercial_dishwasher.jpg",
    highlightItems: [
      "Hood Type Dishwasher",
      "Conveyor Dishwasher",
      "Pot Washer",
      "Under-Counter Dishwasher",
      "Perforated Spray Unit",
    ],
  },
  {
    id: "refrigeration-equipment",
    slug: "refrigeration-equipment",
    number: "04",
    name: "Refrigeration Equipment",
    shortTitle: "Commercial Refrigeration",
    description:
      "Temperature-controlled vertical chillers, deep freezers, walk-in cold rooms, ice machines, and refrigerated preparation counters ensuring strict food safety.",
    image: "/images/commercial_refrigeration.jpg",
    highlightItems: [
      "Upright Refrigerator & Freezer",
      "Walk-in Cold Room",
      "Display Chiller",
      "Ice Cube Machine",
      "Pizza Prep Line",
    ],
  },
  {
    id: "kitchen-processing",
    slug: "kitchen-processing",
    number: "05",
    name: "Kitchen Processing Machines",
    shortTitle: "Food Processing",
    description:
      "High-torque industrial vegetable cutters, potato peelers, dough kneaders, heavy grinders, and planetary mixers that accelerate kitchen prep volume.",
    image: "/images/sk_power_cook_machinery.jpg",
    highlightItems: [
      "Vegetable Cutting Machine",
      "Potato Peeler",
      "Planetary & Gravy Mixer",
      "Wet Grinder",
      "Dough Kneader & Sheeter",
    ],
  },
  {
    id: "storage-equipment",
    slug: "storage-equipment",
    number: "06",
    name: "Storage Equipment",
    shortTitle: "Storage Systems",
    description:
      "Durable food-grade stainless steel storage racks, cold room shelving, bulk pallets, pot racks, and dry storage bins maximizing space efficiency.",
    image: "/images/hero_commercial_kitchen.jpg",
    highlightItems: [
      "Multi-Tier Storage Rack",
      "Bulk Store Pallet",
      "Dry Storage Bin",
      "Cold Room Shelving",
      "Wall Mounted Storage",
    ],
  },
  {
    id: "preparation-washing",
    slug: "preparation-washing",
    number: "07",
    name: "Preparation & Washing Equipment",
    shortTitle: "Prep & Washing",
    description:
      "Heavy-gauge stainless steel preparation tables, single and double sink units, soil dish tables, and sound-dampened chopping counters.",
    image: "/images/vector_kitchen_equipment.jpg",
    highlightItems: [
      "Custom SS Work Table",
      "Vegetable Washing Sink",
      "Two Sink Washing Unit",
      "Soil Dishwashing Table",
      "Work Table with Under-Shelf",
    ],
  },
  {
    id: "steam-cooking",
    slug: "steam-cooking",
    number: "08",
    name: "Steam Cooking Equipment",
    shortTitle: "Steam Systems",
    description:
      "Energy-efficient steam boilers, high-capacity idly steamers, potato steamers, and bulk cooking vessels for high-volume institutional food preparation.",
    image: "/images/maxwell-commercial-kitchen.jpg",
    highlightItems: [
      "Commercial Steam Boiler",
      "Bulk Cooking Steam Vessel",
      "Idly Steamer Unit",
      "Multi-Food Steamer",
      "Electric & LPG Steamers",
    ],
  },
  {
    id: "display-counters",
    slug: "display-counters",
    number: "09",
    name: "Display & Food Serving",
    shortTitle: "Display & Serving",
    description:
      "Front-of-house temperature-regulated bain maries, heated display cases, chat counters, beverage bars, and customer serving counters.",
    image: "/images/ind_qsr_foodcourts.jpg",
    highlightItems: [
      "Food Serving Counter",
      "Hot Bain Marie",
      "Cake Display Counter",
      "Chilled Juice & Beverage Counter",
      "Hot Case Showcase",
    ],
  },
  {
    id: "exhaust-fire-freshair",
    slug: "exhaust-fire-freshair",
    number: "10",
    name: "Exhaust, Fire & Fresh Air",
    shortTitle: "Ventilation & Safety",
    description:
      "Engineered stainless steel exhaust hoods with baffle filters, fresh air make-up ducting, heavy-duty blowers, and certified kitchen fire suppression integration.",
    image: "/images/kitchen_design_blueprint.jpg",
    highlightItems: [
      "Kitchen Exhaust Hood",
      "Fresh Air Ducting & Blower",
      "Fire Suppression System",
      "Grease Baffle Filters",
      "Centrifugal Exhaust Blower",
    ],
  },
  {
    id: "drainage-utility",
    slug: "drainage-utility",
    number: "11",
    name: "Drainage Systems & Utility",
    shortTitle: "Drainage & Utility",
    description:
      "Hygienic stainless steel floor gratings, trench drains, hospital utility lockers, wall-hung clean cabinets, and specialized wet-area plumbing fixtures.",
    image: "/images/ind_industrial_central.jpg",
    highlightItems: [
      "SS Kitchen Floor Grating",
      "Trench Drainage Channel",
      "Sanitary Wall Cabinet",
      "Heavy-Duty Floor Sump",
      "Utility Lockers",
    ],
  },
  {
    id: "ss-fabrication",
    slug: "ss-fabrication",
    number: "12",
    name: "SS Fabrication",
    shortTitle: "Custom SS Fabrication",
    description:
      "Custom architectural AISI 304/316 food-grade stainless steel fabrication, storage tanks, ladders, hygiene wash stations, service trolleys, and bespoke units.",
    image: "/images/vector_kitchen_equipment.jpg",
    highlightItems: [
      "Custom Stainless Steel Tank",
      "Hand Hygiene Station",
      "Mobile Service Trolley",
      "Heavy-Duty SS Waste Bin",
      "Bespoke Kitchen Metalwork",
    ],
  },
];
