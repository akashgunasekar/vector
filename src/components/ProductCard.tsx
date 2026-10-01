"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Product } from "@/data/products";
import { openQuoteModal } from "./QuoteModal";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const handleQuoteClick = () => {
    openQuoteModal(product.name);
  };

  return (
    <div className="group relative bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-red-300 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Product Image */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 left-3">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-700 px-2.5 py-1 rounded shadow-xs border border-slate-200/80 backdrop-blur-xs">
              {product.categoryName}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Key Specs / Badges */}
          {product.features && product.features.length > 0 && (
            <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
              {product.features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 truncate">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
        <button
          type="button"
          onClick={handleQuoteClick}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-slate-800 bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-200 hover:border-red-600 transition-all duration-200 active:scale-98 shadow-xs"
        >
          <span>Request Quote</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
