import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  FileSpreadsheet,
  Building2,
  Droplets,
  Zap,
  Waves,
  Flame,
  Wind,
  Compass,
  Sliders,
  ShieldCheck,
  FileCheck2,
  ArrowDown,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { KITCHEN_DESIGN_SECTIONS, DESIGN_PROCESS_STEPS } from "@/data/kitchenDesign";

export const metadata: Metadata = {
  title: "Commercial Kitchen Design & Planning",
  description:
    "Expert commercial kitchen design, architectural layout drafting, BOQ formulation, MEP civil/plumbing/electrical layouts, and exhaust ventilation engineering.",
  keywords: [
    "commercial kitchen design",
    "commercial kitchen layout",
    "kitchen planning",
    "kitchen BOQ",
    "industrial kitchen design",
    "commercial kitchen ventilation",
    "kitchen tender documentation",
  ],
};

const iconMap: Record<string, React.ElementType> = {
  LayoutTemplate,
  FileSpreadsheet,
  Building2,
  Droplets,
  Zap,
  Waves,
  Flame,
  Wind,
  Compass,
  Sliders,
  ShieldCheck,
  FileCheck2,
};

export default function KitchenDesignPage() {
  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>Architectural & MEP Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Commercial Kitchen Design & Planning
              </h1>
              <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                From kitchen layout design and BOQ formulation to complete civil, plumbing, electrical, drainage, gas line, and ventilation infrastructure.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
                >
                  <span>Submit Kitchen Drawings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#design-process"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
                >
                  <span>View 7-Step Process</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-16/11 bg-slate-100">
                <Image
                  src="/images/kitchen_design_blueprint.jpg"
                  alt="Commercial Kitchen CAD Blueprint and Floor Planning"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual 7-Step Process */}
      <section id="design-process" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Methodology"
            title="Visual Design & Planning Process"
            description="Our systematic engineering trajectory ensures that culinary operations, mechanical services, and spatial ergonomics are completely harmonized."
            align="center"
          />

          <div className="max-w-5xl mx-auto mt-12">
            <div className="space-y-4">
              {DESIGN_PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 text-red-600 font-extrabold text-base flex items-center justify-center shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full inline-block w-fit">
                        {step.tagline}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {idx < DESIGN_PROCESS_STEPS.length - 1 && (
                    <div className="hidden sm:block text-slate-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 12 Comprehensive Kitchen Design Sections */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Detailed Disciplines"
            title="Complete Kitchen Infrastructure & Engineering Scope"
            description="Vector provides exhaustive layout planning and infrastructure coordination across all mechanical, electrical, plumbing, civil, and safety dimensions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KITCHEN_DESIGN_SECTIONS.map((sec) => {
              const IconComponent = iconMap[sec.iconName] || LayoutTemplate;
              return (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between scroll-mt-24"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300">
                        SECTION {sec.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {sec.title}
                    </h3>
                    <p className="text-xs font-semibold text-red-600 mt-0.5">
                      {sec.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {sec.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {sec.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="text-slate-400">Technical Scope</span>
                    <Link
                      href="/contact"
                      className="text-red-600 hover:underline inline-flex items-center gap-1"
                    >
                      Enquire for this layout →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Brochure-Supported "What We Provide" Callout */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                Brochure Supported Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
                Cost-Effective Purchasing with Quality Suited to International Standards
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                By producing clear layout drawings, itemized Bill of Quantities, and tender documents, Vector eliminates scope ambiguity. Our clients achieve transparent bidding, exact stainless steel sheet gauges, and reliable infrastructure design without cost overruns.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold text-slate-700">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                ✓ Waste Management Systems
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                ✓ Waste Water & Grease Traps
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                ✓ Fuel & Gas Manifold Safety
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                ✓ Bar & Restaurant Interior Concepts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to Plan Your Commercial Kitchen?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Share your architectural floor plans or concept drawings with Vector for an initial layout review and BOQ consultation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
            >
              <span>Request Kitchen Design & BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
            >
              <span>Explore Kitchen Equipment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
