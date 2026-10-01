import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldCheck,
  Calendar,
  Layers,
  FileSpreadsheet,
  Flame,
  DraftingCompass,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SERVICE_TIMELINE } from "@/data/services";

export const metadata: Metadata = {
  title: "Commercial Kitchen Services & Technical Support",
  description:
    "End-to-end commercial kitchen services: kitchen planning, BOQ documentation, custom SS fabrication, infrastructure engineering, equipment installation, breakdown maintenance, and Annual Maintenance Contracts (AMC).",
  keywords: [
    "commercial kitchen installation",
    "kitchen equipment maintenance",
    "commercial kitchen service",
    "kitchen equipment support",
    "annual maintenance contract commercial kitchen",
    "stainless steel fabrication service",
  ],
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Full Lifecycle Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Commercial Kitchen Services
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              From concept planning and custom stainless steel fabrication to turnkey equipment installation, scheduled AMC, and technical support.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Service Timeline */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Execution Milestones"
            title="Commercial Kitchen Project Timeline"
            description="A transparent step-by-step roadmap from initial conceptual design to post-commissioning handover and support."
            align="center"
          />

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICE_TIMELINE.slice(0, 4).map((phase) => (
                <div
                  key={phase.step}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded border border-red-100">
                        {phase.step}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {phase.timeline}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {phase.phase}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {SERVICE_TIMELINE.slice(4).map((phase) => (
                <div
                  key={phase.step}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded border border-red-100">
                        {phase.step}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {phase.timeline}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {phase.phase}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 9 Core Services Detailed */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Portfolio"
            title="Our 9 Commercial Kitchen Engineering Services"
            description="Structured around design rigor, food-grade manufacturing standards, and ongoing technical reliability."
          />

          <div className="space-y-12">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-7 sm:p-10 rounded-2xl border border-slate-200 bg-white hover:border-red-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column */}
                  <div className="lg:max-w-xl space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-extrabold text-red-600 bg-red-50 px-2.5 py-1 rounded border border-red-100">
                        SERVICE {service.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {service.shortDescription}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>

                  {/* Right Column: Scope & Deliverables */}
                  <div className="lg:w-96 shrink-0 space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                        Scope of Work
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.scopeOfWork.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                        Key Deliverables
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {service.deliverables.map((del, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-xs transition-colors"
                      >
                        <span>Enquire for {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Need Installation, Maintenance or AMC Support?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Contact our technical services department to discuss your kitchen servicing, scheduled preventive visits, or emergency breakdown needs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
            >
              <span>Contact Technical Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
