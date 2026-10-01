import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  badgeColor?: "red" | "slate";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-12 lg:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-start"}`}>
          <span className="w-2 h-2 rounded-full bg-red-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
