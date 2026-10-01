import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/company";
import { CATEGORIES } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700">
      {/* Top CTA Strip */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                Commercial Kitchen Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                Planning or Equipping a Commercial Kitchen?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Consult with Vector Food Equipments for comprehensive kitchen layouts, itemized BOQs, custom stainless steel fabrication, and reliable equipment supply.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all duration-200"
              >
                <span>Request a Project Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kitchen-design"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                <span>Explore Design & BOQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Vector Food Equipments">
              <div className="relative h-11 w-44">
                <Image
                  src="/brands/vector-official-logo.png"
                  alt="Vector Food Equipments"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Vector Food Equipments specializes in the planning and designing of industrial kitchens, restaurants, catering units, and food courts, along with customized kitchen equipment and infrastructure solutions.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.split("/")[0].trim()}`}
                  className="hover:text-red-600 transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-red-600 transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-600 shrink-0" />
                <span>{SITE_CONFIG.contact.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Website
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Equipment Categories */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Equipment Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products#${cat.slug}`}
                    className="text-slate-600 hover:text-red-600 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-red-600 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  View All 12 Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions & Support */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Solutions & Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/kitchen-design#kitchen-layout-design"
                  className="text-slate-600 hover:text-red-600 transition-colors"
                >
                  Kitchen Layout Design
                </Link>
              </li>
              <li>
                <Link
                  href="/kitchen-design#boq-preparation"
                  className="text-slate-600 hover:text-red-600 transition-colors"
                >
                  BOQ & Tender Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ss-fabrication"
                  className="text-slate-600 hover:text-red-600 transition-colors"
                >
                  SS 304 Fabrication
                </Link>
              </li>
              <li>
                <Link
                  href="/services#kitchen-infrastructure"
                  className="text-slate-600 hover:text-red-600 transition-colors"
                >
                  MEP & Gas Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services#annual-maintenance-contract"
                  className="text-slate-600 hover:text-red-600 transition-colors"
                >
                  Preventive AMC Support
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-slate-600 hover:text-red-600 transition-colors"
                >
                  Industry Applications
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} Vector Food Equipments. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-700 font-medium">
              {SITE_CONFIG.parentGroupNote}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs">
            <span className="text-slate-400">
              Commercial & Industrial Kitchen Engineering
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
