import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote",
  description:
    "Let's plan your kitchen. Contact Vector Food Equipments for commercial kitchen equipment quotes, layout consultations, custom SS fabrication, and technical support.",
  keywords: [
    "commercial kitchen equipment supplier",
    "commercial kitchen equipment enquiry",
    "commercial kitchen quote",
    "kitchen BOQ consultation",
    "Vector Food Equipments contact",
  ],
};

function ContactFormWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading form...</div>}>
      <ContactForm />
    </Suspense>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Project Consultation & Quotation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let&apos;s Plan Your Kitchen
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              Talk to our commercial kitchen engineering team about your floor plans, equipment BOQ, custom stainless steel fabrication, or technical support requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info + Form */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left: Contact Info & Operational Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Commercial Project Desk
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  We consult on hospitality ventures, star hotels, institutional dining canteens, catering facilities, and quick-service restaurant networks across India.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Phone & Technical Enquiry
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phone.split("/")[0].trim()}`}
                        className="text-base font-bold text-slate-900 hover:text-red-600 transition-colors block mt-0.5"
                      >
                        {SITE_CONFIG.contact.phone}
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Direct commercial desk & after-sales support</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        WhatsApp Instant Desk
                      </p>
                      <a
                        href={SITE_CONFIG.contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5"
                      >
                        {SITE_CONFIG.contact.whatsapp}
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Fast drawing & BOQ document sharing</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Email Communication
                      </p>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-base font-bold text-slate-900 hover:text-red-600 transition-colors block mt-0.5"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Official tender & formal quote requests</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-red-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Operations & Works
                      </p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                        {SITE_CONFIG.contact.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Operational Hours
                      </p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">
                        {SITE_CONFIG.contact.businessHours}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Emergency breakdown support for commercial contract holders
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Relationship Note */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-800">
                  {SITE_CONFIG.parentGroupNote}
                </span>
                <p>
                  Vector Food Equipments operates with complete engineering autonomy while leveraging Maxwell Group infrastructure for customer support and industrial standards.
                </p>
              </div>
            </div>

            {/* Right: Premium Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactFormWrapper />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
