import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  DraftingCompass,
  Flame,
  Wrench,
  Fuel,
  Wind,
  Layers,
  HardHat,
  ShieldCheck,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import OurGroupBrands from "@/components/OurGroupBrands";
import { CATEGORIES } from "@/data/categories";
import { CORE_PILLARS, WORKFLOW_PROCESS } from "@/data/company";
import { INDUSTRIES } from "@/data/industries";

export default function HomePage() {
  const solutions = [
    {
      number: "01",
      title: "KITCHEN DESIGN",
      description: "Architectural 2D/3D layouts, scientific culinary zoning, and operational workflow planning.",
      icon: DraftingCompass,
      href: "/kitchen-design",
    },
    {
      number: "02",
      title: "COMMERCIAL KITCHEN EQUIPMENT",
      description: "Heavy-duty cooking suites, dishwashing systems, combi ovens, and commercial refrigeration.",
      icon: Flame,
      href: "/products",
    },
    {
      number: "03",
      title: "SS FABRICATION",
      description: "Food-grade AISI 304/316 custom stainless steel worktables, sinks, trolleys, and tanks.",
      icon: Wrench,
      href: "/services",
    },
    {
      number: "04",
      title: "COMMERCIAL GAS LINE",
      description: "Engineered LPG/PNG pipeline manifolds, pressure reducing stations, leak detection, and auto-shutoffs.",
      icon: Fuel,
      href: "/kitchen-design#gas-line-layout",
    },
    {
      number: "05",
      title: "EXHAUST & FRESH AIR",
      description: "Engineered SS hoods, baffle filters, make-up fresh air ducting, and certified fire suppression.",
      icon: Wind,
      href: "/services",
    },
    {
      number: "06",
      title: "KITCHEN INFRASTRUCTURE",
      description: "Coordinated civil curbs, plumbing lines, electrical distributions, and floor trench drainage.",
      icon: Layers,
      href: "/kitchen-design",
    },
    {
      number: "07",
      title: "TURNKEY INSTALLATION",
      description: "On-site equipment positioning, utility line hookups, precision leveling, and pre-commission test burns.",
      icon: HardHat,
      href: "/services",
    },
    {
      number: "08",
      title: "TECHNICAL & MAINTENANCE SUPPORT",
      description: "On-site trial runs, staff operational training, preventive AMC schedules, and breakdown repairs.",
      icon: ShieldCheck,
      href: "/services",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/80 overflow-hidden">
        {/* Subtle architectural background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>VECTOR FOOD EQUIPMENTS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Complete Commercial Kitchen Solutions
              </h1>

              <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                From kitchen planning and design to equipment supply, fabrication and technical support.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/25 transition-all duration-200 active:scale-95"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-xs transition-all duration-200"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>

              {/* Supported Scope Pill Checklist */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Layout & BOQ Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Custom SS 304 Fabrication</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Commercial Gas Line</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Exhaust & Fresh Air</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Commercial Ranges & Ovens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Walk-in Cold Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Turnkey Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Preventive AMC & Support</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-900/5 bg-slate-100 aspect-4/3 lg:aspect-5/4">
                <Image
                  src="/images/hero_commercial_kitchen.jpg"
                  alt="Vector Commercial Kitchen Solutions"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Subtle red accent badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                      <DraftingCompass className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                        Turnkey Commercial Engineering
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        Concept, Fabrication, Infrastructure & Maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INTRO STRIP */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
              <h2 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide">
                Designed for Professional Kitchens
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Solutions for hotels, restaurants, catering units, food courts, institutions and other professional food-service environments.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT VECTOR (EDITORIAL SPLIT LAYOUT) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-16/11 bg-slate-100">
                <Image
                  src="/images/vector_kitchen_equipment.jpg"
                  alt="Vector Stainless Steel Food Equipment Engineering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Engineering Better Commercial Kitchens
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Specialized in Planning, Designing & Custom Kitchen Fabrication
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Vector Food Equipments specializes in the planning and designing of industrial kitchens, restaurants, catering units and food courts, along with customized kitchen equipment and infrastructure solutions.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From layout planning and BOQ to equipment, fabrication and supporting kitchen systems, our approach is focused on practical, efficient and professional kitchen environments.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-slate-900 bg-slate-100 hover:bg-red-50 hover:text-red-600 border border-slate-200 transition-colors"
                >
                  <span>About Vector</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION (8 CARDS) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Turnkey Scope"
            title="Complete Kitchen Solutions"
            description="Vector integrates planning, custom fabrication, commercial gas lines, equipment supply, and technical maintenance into a unified implementation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.number}
                  href={item.href}
                  className="group bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-slate-300 group-hover:text-red-500 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-red-600 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES GRID (12 BROCHURE CATEGORIES) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              eyebrow="Commercial Catalog"
              title="Equipment for Every Kitchen Requirement"
              description="Explore Vector's comprehensive range of commercial food equipment categories designed for high-throughput food service operations."
            />
            <div className="hidden md:block pb-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 hover:underline"
              >
                <span>View Full Equipment Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-red-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold tracking-wider text-slate-800 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-slate-200">
                        CAT {cat.number}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/products#${cat.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-700 bg-slate-50 hover:bg-red-50 hover:text-red-600 border border-slate-200 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <span>View Products</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-red-600"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY VECTOR (4 FEATURE BLOCKS) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Value Proposition"
            title="Why Choose Vector?"
            description="Our approach connects practical operating experience with engineering rigor to deliver kitchens built for heavy daily duty."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs relative overflow-hidden group hover:border-red-200 transition-colors"
              >
                <div className="text-2xl font-black text-red-600/30 font-mono mb-4 group-hover:text-red-600 transition-colors">
                  {pillar.number}
                </div>
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="w-8 h-0.5 bg-red-600/30 group-hover:w-16 group-hover:bg-red-600 transition-all duration-300 mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HORIZONTAL PROCESS (KITCHEN EXECUTION) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Turnkey Process"
            title="Kitchen Execution"
            description="A structured 8-stage engineering methodology ensuring precision from initial spatial discovery to commissioning."
          />

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-5.5 xl:top-6 left-6 right-6 h-0.5 bg-red-100 z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 lg:gap-2.5 xl:gap-4 relative z-10">
              {WORKFLOW_PROCESS.map((item) => (
                <div key={item.step} className="flex flex-col items-start lg:items-center text-left lg:text-center">
                  <div className="w-12 h-12 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full bg-white border-2 border-red-600 text-red-600 font-extrabold text-xs lg:text-xs xl:text-sm flex items-center justify-center shadow-xs mb-3.5 shrink-0">
                    {item.step}
                  </div>
                  <h3 className="text-xs xl:text-sm font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] xl:text-xs text-slate-500 mt-1 leading-snug xl:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/kitchen-design"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
            >
              <span>Explore Kitchen Design & Planning Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES PREVIEW */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              eyebrow="Sector Expertise"
              title="Solutions for Professional Food-Service Environments"
              description="Engineered equipment configurations tailored to specific culinary workflows and production volumes."
            />
            <div className="hidden md:block pb-12">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 hover:underline"
              >
                <span>Explore All Industries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                href="/industries"
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-red-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-3 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <span className="text-[11px] font-bold text-red-600 inline-flex items-center gap-1 group-hover:underline">
                    View Solutions →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION (LIGHT WITH RED ACCENTS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 via-slate-50 to-red-50/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-red-100 shadow-sm text-center max-w-4xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-600 bg-white px-3 py-1 rounded-full border border-red-200 shadow-xs mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Planning a Commercial Kitchen?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Talk to our team about your kitchen requirements, equipment and project needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/25 transition-all duration-200 active:scale-95"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all duration-200"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR GROUP BRANDS (PART OF MAXWELL GROUP) */}
      <OurGroupBrands />
    </div>
  );
}
