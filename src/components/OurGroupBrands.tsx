import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  aspectClass: string;
  ctaText: string;
  url: string;
  isExternal: boolean;
  accentBorderHover: string;
  badgeText: string;
  badgeStyle: string;
  buttonStyle: string;
}

const GROUP_BRANDS: BrandItem[] = [
  {
    id: "vector",
    name: "VECTOR FOOD EQUIPMENTS",
    tagline: "Complete Commercial Kitchen Solutions",
    description:
      "Turnkey kitchen planning, 2D/3D layouts, food-grade SS 304 fabrication, equipment supply, and technical maintenance support.",
    logo: "/brands/vector-official-logo.png",
    aspectClass: "h-14 w-44 sm:h-16 sm:w-48",
    ctaText: "Explore Vector",
    url: "/products",
    isExternal: false,
    accentBorderHover: "hover:border-red-500 hover:shadow-red-500/10",
    badgeText: "Commercial Kitchen Solutions",
    badgeStyle: "bg-red-50 text-red-600 border-red-200",
    buttonStyle: "bg-slate-900 hover:bg-red-600 text-white shadow-xs border-slate-900 hover:border-red-600",
  },
  {
    id: "maxwell-induction",
    name: "MAXWELL INDUCTION",
    tagline: "Commercial Induction Technology",
    description:
      "High-efficiency commercial induction ranges, boiling kettles, induction woks, and flameless kitchen equipment.",
    logo: "/brands/maxwell-induction-original.png",
    aspectClass: "h-12 w-48 sm:h-14 sm:w-52",
    ctaText: "Visit Maxwell Induction",
    url: "https://www.maxwellinduction.com/",
    isExternal: true,
    accentBorderHover: "hover:border-sky-500 hover:shadow-sky-500/10",
    badgeText: "Induction Technology",
    badgeStyle: "bg-sky-50 text-sky-700 border-sky-200",
    buttonStyle: "bg-slate-900 hover:bg-sky-600 text-white shadow-xs border-slate-900 hover:border-sky-600",
  },
  {
    id: "sk-powercook",
    name: "SK POWER COOK MACHINERY",
    tagline: "Engineered Solutions for Commercial Food Processing",
    description:
      "Industrial electric kadhais, motorized tilting kettles, planetary mixers, and heavy machinery for commercial food processing.",
    logo: "/brands/sk-powercook-original.png",
    aspectClass: "h-14 w-44 sm:h-16 sm:w-48",
    ctaText: "Visit SK Power Cook",
    url: "https://www.skpcm.com/",
    isExternal: true,
    accentBorderHover: "hover:border-orange-500 hover:shadow-orange-500/10",
    badgeText: "Food Processing Machinery",
    badgeStyle: "bg-orange-50 text-orange-700 border-orange-200",
    buttonStyle: "bg-slate-900 hover:bg-orange-600 text-white shadow-xs border-slate-900 hover:border-orange-600",
  },
];

export default function OurGroupBrands() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-slate-800" />
            <span>Maxwell Group Ecosystem</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Part of Maxwell Group
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Vector Food Equipments is part of a group of specialized brands serving the professional kitchen and food-processing industry.
          </p>

          <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500 tracking-wide uppercase">
            Specialized brands. Shared expertise. One group.
          </p>
        </div>

        {/* 3 Brand Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {GROUP_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className={`relative bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-lg ${brand.accentBorderHover}`}
            >
              <div>
                {/* Brand Top Header: Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${brand.badgeStyle}`}
                  >
                    {brand.badgeText}
                  </span>
                </div>

                {/* Clean White Logo Container (Preserves original colors) */}
                <div className="h-24 sm:h-28 w-full bg-white rounded-xl border border-slate-100 flex items-center justify-center p-3 mb-6">
                  <div className={`relative ${brand.aspectClass}`}>
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      fill
                      sizes="(max-width: 1024px) 80vw, 30vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Brand Info */}
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  {brand.name}
                </h3>

                <p className="text-xs font-bold text-slate-700 mt-1">
                  &ldquo;{brand.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              {/* Card CTA Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                {brand.isExternal ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 active:scale-98 ${brand.buttonStyle}`}
                  >
                    <span>{brand.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={brand.url}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 active:scale-98 ${brand.buttonStyle}`}
                  >
                    <span>{brand.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Group Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            Operating collaboratively under <span className="font-semibold text-slate-800">Maxwell Group</span>, each specialized enterprise maintains dedicated manufacturing standards, technical design, and pan-India after-sales infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
