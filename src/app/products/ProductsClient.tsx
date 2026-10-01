"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Filter, Search, Sparkles } from "lucide-react";
import { CATEGORIES, Category } from "@/data/categories";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { openQuoteModal } from "@/components/QuoteModal";

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Check if URL has hash to select category
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (CATEGORIES.some((c) => c.slug === hashId)) {
        setSelectedCategory(hashId);
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categoryId === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search & Filter Controls */}
      <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, equipment, or categories..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              Showing {filteredProducts.length} Equipment Items
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs text-red-600 hover:underline font-semibold"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="mt-5 pt-5 border-t border-slate-200/80">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-red-600 text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat.slug
                    ? "bg-red-600 text-white shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Render by Category Sections if 'all', otherwise render filtered grid */}
      {selectedCategory === "all" && !searchQuery ? (
        <div className="space-y-20">
          {CATEGORIES.map((category) => {
            const categoryProducts = PRODUCTS.filter(
              (p) => p.categoryId === category.id
            );

            return (
              <section
                key={category.id}
                id={category.slug}
                className="scroll-mt-28 border-b border-slate-200/80 pb-16 last:border-b-0"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                        CAT {category.number}
                      </span>
                      <span className="text-xs text-slate-400">
                        {categoryProducts.length} Items
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                      {category.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(category.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 shrink-0 hover:underline cursor-pointer"
                  >
                    <span>Request Category Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Filtered Grid View */
        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-lg font-bold text-slate-800">
                No equipment items found matching your filter.
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Try selecting a different category or clearing your search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
