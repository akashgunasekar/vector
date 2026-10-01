import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, AlertCircle, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Commercial Kitchen Solutions Across Industries",
  description:
    "Tailored commercial kitchen design and equipment solutions for hotels, restaurants, catering units, food courts, institutional kitchens, and industrial facilities.",
  keywords: [
    "hotel kitchen equipment",
    "restaurant kitchen equipment",
    "catering kitchen equipment",
    "institutional kitchen equipment",
    "industrial kitchen solutions",
    "food court kitchen planning",
  ],
};

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Sectors & Applications</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Commercial Kitchen Solutions Across Industries
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              Specialized layout planning, stainless steel fabrication, and commercial equipment suites tailored to distinct operational workflows and meal capacities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detailed Sections */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {INDUSTRIES.map((ind, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={ind.id}
                id={ind.slug}
                className="scroll-mt-28 border-b border-slate-200/80 pb-20 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-16/11 bg-slate-100">
                      <Image
                        src={ind.image}
                        alt={`${ind.title} Commercial Kitchen Solutions`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-md text-xs font-extrabold text-slate-800 shadow-xs border border-slate-200">
                        {ind.shortTitle}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } space-y-6`}
                  >
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                        Sector Solutions
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                        {ind.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                        {ind.heroHeadline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Operational Challenges & Solutions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Operational Demands</span>
                        </h3>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {ind.challenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-slate-400">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50/60 p-4 rounded-xl border border-red-100">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-red-900 mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-red-600" />
                          <span>Vector Engineering</span>
                        </h3>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {ind.keySolutions.map((s, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Relevant Categories */}
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Equipment Categories
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {ind.relevantCategories.map((cat, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-200"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
                      >
                        <span>Request Industry Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
                      >
                        <span>Explore Relevant Equipment</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Consult on Your Sector Requirements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Whether establishing a star hotel culinary line or an institutional commissary, Vector plans the ideal equipment configuration.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
            >
              <span>Get In Touch With Vector</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
