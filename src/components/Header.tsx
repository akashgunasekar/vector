"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/company";

interface HeaderProps {
  onRequestQuote?: (productName?: string) => void;
}

export default function Header({ onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleQuoteClick = (e: React.MouseEvent) => {
    if (onRequestQuote) {
      e.preventDefault();
      onRequestQuote();
    }
  };

  return (
    <>
      {/* Top subtle utility bar */}
      <div className="bg-slate-100/80 border-b border-slate-200/80 text-xs text-slate-600 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="font-medium text-slate-700">
              Commercial & Industrial Kitchen Solutions
            </span>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${SITE_CONFIG.contact.phone.split("/")[0].trim()}`}
              className="hover:text-red-600 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hover:text-red-600 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-red-600" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">
              {SITE_CONFIG.parentGroupNote}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? "py-2.5 shadow-md shadow-slate-900/5 border-b border-slate-200/90"
            : "py-4 border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg p-1"
              aria-label="Vector Food Equipments Home"
            >
              <div className="relative h-10 w-36 sm:h-11 sm:w-44 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/brands/vector-official-logo.png"
                  alt="Vector Food Equipments Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {SITE_CONFIG.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold tracking-tight transition-colors duration-150 rounded-md ${
                      isActive
                        ? "text-red-600 bg-red-50/70"
                        : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/contact"
                onClick={handleQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm shadow-red-600/30 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                onClick={handleQuoteClick}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-md shadow-sm"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="relative h-9 w-32">
                  <Image
                    src="/brands/vector-official-logo.png"
                    alt="Vector Food Equipments Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Navigation
                </p>
                <nav className="flex flex-col space-y-1">
                  {SITE_CONFIG.nav.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-3.5 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                          isActive
                            ? "bg-red-50 text-red-600"
                            : "text-slate-800 hover:bg-slate-50 hover:text-red-600"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-4">
              <Link
                href="/contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleQuoteClick(e);
                }}
                className="w-full py-3 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-xs text-slate-500 text-center space-y-1">
                <p>{SITE_CONFIG.parentGroupNote}</p>
                <p>{SITE_CONFIG.contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
