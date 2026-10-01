"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productTitle, setProductTitle] = useState("");

  useEffect(() => {
    const handleOpenModal = (e: CustomEvent<{ productName?: string }>) => {
      setProductTitle(e.detail?.productName || "Commercial Kitchen Equipment");
      setIsOpen(true);
    };

    window.addEventListener("open-quote-modal" as any, handleOpenModal);
    return () => {
      window.removeEventListener("open-quote-modal" as any, handleOpenModal);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-white/80 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <ContactForm
          initialSubject={productTitle ? `Quote for: ${productTitle}` : ""}
          isModal={true}
          onSuccess={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}

export function openQuoteModal(productName?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-quote-modal", {
        detail: { productName },
      })
    );
  }
}
