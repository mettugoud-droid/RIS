"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Download, FileText, Check, Loader2 } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  pages: string;
  topics: string[];
}

const resources: Resource[] = [
  {
    id: "warehouse-security",
    title: "Warehouse Security Guide",
    description:
      "A comprehensive guide to designing surveillance systems for warehouses and logistics facilities. Covers camera placement, storage calculation, and compliance requirements.",
    pages: "24 pages",
    topics: ["Camera Placement Strategy", "NVR Sizing", "Insurance Compliance", "ROI Calculator"],
  },
  {
    id: "industrial-electrification",
    title: "Industrial Electrification Guide",
    description:
      "Everything you need to know about industrial power distribution, HT/LT panel design, load calculations, and safety compliance for manufacturing and warehouse facilities.",
    pages: "32 pages",
    topics: ["Load Calculation", "Panel Design", "Safety Standards", "Energy Efficiency"],
  },
  {
    id: "cctv-planning",
    title: "CCTV Planning Guide",
    description:
      "Step-by-step guide for planning a CCTV installation. From site assessment to camera selection, network design, and ongoing maintenance best practices.",
    pages: "18 pages",
    topics: ["Site Assessment", "Camera Selection", "Network Design", "Maintenance Planning"],
  },
  {
    id: "facility-management",
    title: "Facility Management Guide",
    description:
      "Best practices for managing facility infrastructure including preventive maintenance schedules, AMC planning, vendor management, and cost optimization strategies.",
    pages: "20 pages",
    topics: ["PM Schedules", "AMC Planning", "Cost Optimization", "Vendor Management"],
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, resource: resource.id }),
      });
      setSubmitted(true);
    } catch {
      // Handle silently
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-2xl p-6 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6 text-electric-500" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{resource.title}</h3>
          <p className="text-xs text-grey-500 mt-0.5">{resource.pages}</p>
        </div>
      </div>

      <p className="text-sm text-grey-400 mb-4 flex-1">{resource.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {resource.topics.map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 rounded-md bg-navy-800 text-xs text-grey-300 border border-navy-600"
          >
            {topic}
          </span>
        ))}
      </div>

      {submitted ? (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10 border border-success/20">
          <Check className="w-4 h-4 text-success" />
          <span className="text-sm text-success">Download link sent to your email!</span>
        </div>
      ) : showForm ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-navy-800 border border-navy-600 text-white text-sm placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-navy-800 border border-navy-600 text-white text-sm placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-navy-800 border border-navy-600 text-white text-sm placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg gradient-cta text-white text-sm font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {loading ? "Sending..." : "Get Free Download"}
          </button>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-2.5 rounded-lg gradient-cta text-white text-sm font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download Free Guide
        </button>
      )}
    </div>
  );
}

export function WhitepapersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Free Resources & Guides
            </h1>
            <p className="text-grey-400 max-w-2xl mx-auto">
              Download our expert guides on industrial infrastructure — CCTV planning, electrification
              design, and facility management best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
