import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  DraftingCompass,
  Wrench,
  ShieldCheck,
  Building,
  Utensils,
  Layers,
  Flame,
  FileSpreadsheet,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us & Engineering Scope",
  description:
    "Learn about Vector Food Equipments: specializing in planning and designing industrial kitchens, restaurants, catering units, and food courts with custom stainless steel fabrication and infrastructure.",
  keywords: [
    "commercial kitchen equipment company",
    "kitchen equipment solutions",
    "industrial kitchen planning",
    "Vector Food Equipments about",
    "commercial kitchen design Maxwell Group",
  ],
};

export default function AboutPage() {
  const expertiseAreas = [
    {
      title: "Industrial Kitchens",
      description: "Planning and equipping large central production facilities, commissaries, and industrial dining canteens.",
      icon: Building,
    },
    {
      title: "Commercial Restaurants",
      description: "Optimized hot line kitchens, cooking suites, prep lines, and pass-through sculleries for active dining establishments.",
      icon: Utensils,
    },
    {
      title: "Catering Units",
      description: "Bulk volume steam cooking vessels, high-torque processing machinery, and mobile logistics storage systems.",
      icon: Layers,
    },
    {
      title: "Food Courts & QSR",
      description: "High-speed front counter cooking, heated/chilled display counters, and low-profile ventilation setups.",
      icon: Flame,
    },
  ];

  const whatWeProvide = [
    {
      title: "Kitchen Infrastructure Design & Planning",
      description: "Comprehensive coordination across MEP, drainage channels, equipment plinths, and ventilation.",
    },
    {
      title: "Restaurant & Cocktail Bar Interior Concept Design",
      description: "Harmonizing front-of-house culinary counters, beverage dispensaries, and customer display showcases.",
    },
    {
      title: "Waste & Waste Water Management",
      description: "Hygienic bio-waste segregation systems, grease trap interceptors, and stainless floor trench drains.",
    },
    {
      title: "Fuel Management & Gas Piping",
      description: "Safe LPG/PNG manifold engineering with emergency shutoffs, regulators, and combustible gas sensors.",
    },
    {
      title: "Bill of Quantities (BOQ)",
      description: "Itemized schedules with sheet metal gauge thicknesses, connected KW loads, and consumption benchmarks.",
    },
    {
      title: "Tender Documentation & Purchasing Guidance",
      description: "Transparent procurement documents enabling cost-effective purchasing suited to international standards.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>About Us</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              About Vector Food Equipments
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              Specializing in the planning and designing of industrial kitchens, restaurants, catering units, and food courts, along with customized kitchen equipment and infrastructure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Company Overview */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Company Overview
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                From Layout Planning & BOQ to Equipment, Fabrication and Supporting Systems
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Vector Food Equipments is dedicated to engineering practical, efficient, and professional food-service environments. Rather than acting as a simple equipment retailer, Vector takes a holistic engineering approach to every kitchen facility.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our scope spans initial concept analysis and site surveys through detailed 2D architectural zoning, MEP infrastructure schematics, custom food-grade stainless steel fabrication, heavy-duty equipment sourcing, and long-term technical service.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-red-600 rounded-r-lg text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Brand Affiliation:</span> Vector Food Equipments operates as one of the specialized commercial kitchen brands under the <span className="font-semibold text-slate-900">{SITE_CONFIG.parentGroup}</span> ecosystem, delivering dedicated turn-key kitchen solutions.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-16/11 bg-slate-100">
                <Image
                  src="/images/kitchen_design_blueprint.jpg"
                  alt="Vector Commercial Kitchen Layout Planning and Engineering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Area of Expertise */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Competence"
            title="Areas of Specialization"
            description="Our primary planning and engineering capabilities are structured around four major commercial dining models."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs hover:border-red-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. What We Provide */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Deliverables & Capabilities"
            title="What We Provide"
            description="Our service offering adheres strictly to professional standards for commercial food preparation facilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatWeProvide.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200/90 bg-white hover:border-red-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-red-600 mb-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engineering & Design Approach */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-16/11 bg-slate-100">
                <Image
                  src="/images/hero_commercial_kitchen.jpg"
                  alt="Vector Engineering and Design Approach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Engineering & Design Approach
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Designed Around Practical Operating Requirements
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Commercial kitchens operate under intense thermal, physical, and sanitation stresses. Our engineering philosophy centers on understanding peak operational demand before selecting or fabricating equipment.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span><strong>Ergonomic Layouts:</strong> Reducing unnecessary foot-travel steps between prep, cook line, and plating pass.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span><strong>Utility Synchronization:</strong> Precision alignment of civil curbs, water connections, drainage sumps, and 3-phase electricity.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span><strong>Cost-Effective Purchasing:</strong> Clear BOQs and tender documentation enabling procurement suited to international standards.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality, Fabrication & Support */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Quality & Fabrication */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Quality & Stainless Steel Fabrication
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We utilize food-grade AISI 304 and 316 stainless steel for custom fabrication. Surfaces are reinforced with sound-dampened underlays to reduce metallic noise during busy shifts, while edges are rolled and de-burred to ensure hygienic washability and operator safety.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/services#ss-fabrication"
                  className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                >
                  Explore SS Fabrication Services →
                </Link>
              </div>
            </div>

            {/* Technical Support */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Technical Support & Maintenance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Vector provides support spanning installation, pre-commissioning testing, scheduled preventive maintenance (AMC), and responsive breakdown assistance. Our technical team works to ensure equipment longevity and operational reliability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/services#annual-maintenance-contract"
                  className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                >
                  Explore Maintenance & AMC →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Consult With Our Kitchen Planning Team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Discuss your facility footprint, project type, or equipment requirement with Vector Food Equipments.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/kitchen-design"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
            >
              <span>Explore Kitchen Design</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
