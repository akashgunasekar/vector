import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ProductsClient from "./ProductsClient";
import { SITE_CONFIG } from "@/data/company";

export const metadata: Metadata = {
  title: "Commercial Kitchen Equipment Catalog",
  description:
    "Explore Vector's range of commercial and industrial kitchen equipment designed for professional food-service environments: cooking ranges, refrigeration, dishwashers, bakery ovens, and stainless steel fabrication.",
  keywords: [
    "commercial kitchen equipment",
    "restaurant kitchen equipment",
    "hotel kitchen equipment",
    "industrial kitchen equipment",
    "commercial cooking equipment",
    "commercial dishwashers",
    "walk in cold rooms",
    "stainless steel kitchen tables",
  ],
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Commercial Equipment Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Commercial Kitchen Equipment
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              Explore Vector&apos;s range of commercial and industrial kitchen equipment designed for professional food-service environments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsClient />
        </div>
      </section>

      {/* Custom Fabrication Callout */}
      <section className="bg-slate-50 border-t border-slate-200/80 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
            Custom Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Require Custom Sizing or Non-Standard Stainless Metalwork?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Vector fabricates bespoke AISI 304/316 work tables, sinks, floor sumps, exhaust canopies, and transport carts built strictly to your site CAD drawings.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
            >
              <span>Submit Custom BOQ</span>
            </Link>
            <Link
              href="/kitchen-design"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
            >
              <span>View Kitchen Design Scope</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
