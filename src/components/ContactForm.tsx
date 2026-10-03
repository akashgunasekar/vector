"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Upload, AlertCircle, FileText } from "lucide-react";

interface ContactFormProps {
  initialSubject?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export default function ContactForm({
  initialSubject = "",
  isModal = false,
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",
    projectType: "Restaurant / Cafe",
    requirement: initialSubject || "Commercial Kitchen Equipment",
    message: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Hotels & Fine Dining",
    "Restaurant / Cafe",
    "Catering / Banquet Commissary",
    "Food Court / QSR Chain",
    "Institutional / College / Hospital",
    "Industrial Central Production Kitchen",
    "Commercial Gas Pipeline Project",
    "SS Custom Fabrication Project",
    "Exhaust & Fresh Air Infrastructure",
    "Other Commercial Facility",
  ];

  const requirementTypes = [
    "Complete Kitchen Planning & BOQ",
    "Commercial Cooking Ranges & Suites",
    "Commercial Gas Line & Manifolds",
    "Commercial Refrigeration & Cold Rooms",
    "Commercial Dishwashing Systems",
    "Bakery & Combi Ovens",
    "Food Processing Machines",
    "Custom Stainless Steel Fabrication",
    "Kitchen Exhaust & Ventilation",
    "Maintenance & AMC Support",
    "Multiple Equipment Quote",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMessage("Please fill in your name, contact phone, and email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission to CRM / Email dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2500);
      }
    }, 900);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-emerald-200 text-center shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Enquiry Received Successfully
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our commercial kitchen engineering team will review your project requirements and connect with you shortly.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1.5">
          <div><span className="font-semibold">Project Type:</span> {formData.projectType}</div>
          <div><span className="font-semibold">Requirement:</span> {formData.requirement}</div>
          {formData.location && <div><span className="font-semibold">Location:</span> {formData.location}</div>}
          {fileName && (
            <div className="flex items-center gap-1.5 text-red-600 font-medium pt-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Attached: {fileName}</span>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              companyName: "",
              phone: "",
              email: "",
              location: "",
              projectType: "Restaurant / Cafe",
              requirement: "Commercial Kitchen Equipment",
              message: "",
            });
            setFileName(null);
          }}
          className="mt-6 text-xs font-semibold text-red-600 hover:text-red-700 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm ${
        isModal ? "p-4 sm:p-6" : "p-6 sm:p-8 lg:p-10"
      }`}
    >
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
          Commercial Project Enquiry
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
          Request a Quotation & Equipment Proposal
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Tell us about your kitchen dimensions, operational volume, or specific equipment needs.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Rajesh Kumar"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Company / Business Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="e.g. Metro Grand Hospitality"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. rajesh@metrohospitality.com"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            City / Project Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g. Chennai, Bangalore, Hyderabad..."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Project Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Requirement */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Primary Requirement / Equipment Focus
          </label>
          <select
            name="requirement"
            value={formData.requirement}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          >
            {requirementTypes.map((req) => (
              <option key={req} value={req}>
                {req}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Project Specifications & Details
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Share details such as seating capacity, kitchen square footage, specific items needed, or existing site conditions..."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
          />
        </div>

        {/* Upload Drawing / BOQ */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
            Upload Floor Plan / BOQ / Drawing <span className="text-slate-400 font-normal">(Optional, PDF/DWG/Images)</span>
          </label>
          <div className="flex items-center gap-3">
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 border border-dashed border-slate-300 hover:border-red-500 bg-slate-50 hover:bg-red-50/50 rounded-lg text-xs font-semibold text-slate-700 transition-colors">
              <Upload className="w-4 h-4 text-red-600" />
              <span>{fileName ? "Change Attached File" : "Choose File to Attach"}</span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.xlsx,.xls"
                onChange={handleFileChange}
              />
            </label>
            {fileName && (
              <span className="text-xs text-slate-600 truncate max-w-xs font-medium">
                {fileName}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          Direct B2B enquiry. No spam. Fast turnaround for commercial estimates.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 shadow-md shadow-red-600/20 transition-all duration-200 disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Request a Quote</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
