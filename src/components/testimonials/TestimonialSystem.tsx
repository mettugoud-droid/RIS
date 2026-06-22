"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// === DATA ===
export interface Testimonial {
  id: number;
  type: "video" | "text";
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  avatar: string;
  videoUrl?: string;
  projectType?: string;
  metrics?: { label: string; value: string }[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1, type: "video",
    quote: "Raksha transformed our warehouse security completely. 200 cameras deployed across our 1 lakh sqft facility in just 3 weeks with zero downtime to operations.",
    author: "Rajesh Kumar", role: "VP Operations", company: "XYZ Logistics Pvt Ltd", industry: "Logistics",
    rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    projectType: "CCTV", metrics: [{ label: "Theft Reduction", value: "↓40%" }, { label: "Uptime", value: "99.9%" }, { label: "ROI Period", value: "8 Months" }],
  },
  {
    id: 2, type: "text",
    quote: "The electrical infrastructure they designed for our manufacturing plant is world-class. Their engineering-first approach saved us 20% on our power bills from day one.",
    author: "Priya Sharma", role: "Plant Head", company: "ABC Manufacturing Ltd", industry: "Manufacturing",
    rating: 5, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    projectType: "Electrification", metrics: [{ label: "Power Savings", value: "20%" }, { label: "Compliance", value: "100%" }, { label: "Delivery", value: "On Time" }],
  },
  {
    id: 3, type: "text",
    quote: "We needed a complete security overhaul for 8 cold storage facilities. Raksha delivered on time, within budget, and the AMC support has been exceptional.",
    author: "Amit Patel", role: "Director", company: "ColdChain Solutions India", industry: "Cold Storage",
    rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    projectType: "CCTV", metrics: [{ label: "Facilities", value: "8" }, { label: "Cameras", value: "500+" }, { label: "Support SLA", value: "<2hr" }],
  },
  {
    id: 4, type: "video",
    quote: "From initial site survey to final handover, the professionalism was outstanding. Their documentation and compliance standards match multinational contractors.",
    author: "Suresh Reddy", role: "Procurement Head", company: "TechPark Developers", industry: "Corporate",
    rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    projectType: "Integrated", metrics: [{ label: "Project Value", value: "₹2.5Cr" }, { label: "Delivery", value: "45 Days" }, { label: "Defects", value: "Zero" }],
  },
  {
    id: 5, type: "text",
    quote: "Raksha's structured cabling team delivered 2000+ network points across our new campus. Fluke-certified, zero rework. The 25-year warranty gives us peace of mind.",
    author: "Vikram Singh", role: "IT Director", company: "InfoSpace Technologies", industry: "IT/Corporate",
    rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    projectType: "Networking", metrics: [{ label: "Nodes", value: "2000+" }, { label: "Certified", value: "100%" }, { label: "Warranty", value: "25 Yrs" }],
  },
  {
    id: 6, type: "text",
    quote: "The fire alarm system Raksha installed helped us get our Fire NOC in the first attempt. Their NBC compliance knowledge is unmatched in the industry.",
    author: "Meena Rao", role: "Facility Manager", company: "CityMall Properties", industry: "Retail",
    rating: 5, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    projectType: "Fire Alarm", metrics: [{ label: "NOC", value: "1st Attempt" }, { label: "Detectors", value: "400+" }, { label: "Insurance", value: "↓30%" }],
  },
];

const industryFilters = ["All", "Logistics", "Manufacturing", "Cold Storage", "Corporate", "IT/Corporate", "Retail"];

// === GOOGLE REVIEW CARD ===
function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 flex flex-col h-full glass-hover"
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-grey-300 leading-relaxed flex-1 mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Metrics */}
      {testimonial.metrics && (
        <div className="flex gap-4 mb-4 py-3 border-t border-[#E2E8F0]">
          {testimonial.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-base font-bold text-electric-400">{m.value}</p>
              <p className="text-[10px] text-[#475569]">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-[#E2E8F0]">
        <Image src={testimonial.avatar} alt={testimonial.author} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.author}</p>
          <p className="text-xs text-grey-400">{testimonial.role}, <span className="text-electric-400">{testimonial.company}</span></p>
        </div>
        {testimonial.type === "video" && (
          <div className="ml-auto w-8 h-8 rounded-full bg-electric-500/20 flex items-center justify-center">
            <Play className="w-3.5 h-3.5 text-electric-400 ml-0.5" fill="currentColor" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// === FEATURED CAROUSEL (Large) ===
export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <Quote className="w-10 h-10 text-electric-500/20 mb-4" />
          <p className="text-lg sm:text-xl text-grey-200 italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-4">
            <Image src={t.avatar} alt={t.author} width={56} height={56} className="w-14 h-14 rounded-full object-cover border-2 border-electric-500" />
            <div>
              <p className="text-base font-semibold text-white">{t.author}</p>
              <p className="text-sm text-grey-400">{t.role}, <span className="text-electric-400">{t.company}</span></p>
            </div>
          </div>
          {t.metrics && (
            <div className="flex gap-8 mt-6 pt-6 border-t border-[#E2E8F0]">
              {t.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xl font-bold text-electric-400">{m.value}</p>
                  <p className="text-xs text-[#475569]">{m.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-electric-500/10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={cn("h-2 rounded-full transition-all", i === current ? "w-8 bg-electric-500" : "w-2 bg-white/20")} />
          ))}
        </div>
        <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-electric-500/10">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// === GRID SECTION (Google Review Style) ===
export function TestimonialGrid({ filter = "All" }: { filter?: string }) {
  const filtered = filter === "All" ? testimonials : testimonials.filter((t) => t.industry === filter);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((t) => (
        <ReviewCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
}

// === CLIENT LOGOS ===
const clientLogos = [
  "XYZ Logistics", "ABC Manufacturing", "ColdChain Solutions",
  "TechPark Developers", "InfoSpace Technologies", "CityMall Properties",
  "SpeedLog 3PL", "MedLife Pharma", "QuickShip Fulfillment",
  "Greenfield Industrial",
];

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {clientLogos.map((name) => (
        <div key={name} className="glass rounded-xl p-4 flex items-center justify-center h-16 hover:border-electric-500/30 transition-colors">
          <span className="text-xs font-semibold text-grey-400 text-center">{name}</span>
        </div>
      ))}
    </div>
  );
}

// === FULL TESTIMONIAL SECTION (Drop-in anywhere) ===
export function TestimonialSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="py-20 px-4 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-electric-500 uppercase tracking-[0.1em]">TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-3">What Our Clients Say</h2>
          <p className="text-grey-400 max-w-xl mx-auto">Real feedback from procurement heads, facility managers, and business owners.</p>
        </div>

        {/* Featured Carousel */}
        <div className="mb-16">
          <TestimonialCarousel />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {industryFilters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", activeFilter === f ? "bg-electric-500 text-white" : "glass text-grey-300 hover:text-white")}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <TestimonialGrid filter={activeFilter} />

        {/* Client Logos */}
        <div className="mt-16">
          <p className="text-center text-xs font-semibold text-[#475569] uppercase tracking-wider mb-6">Trusted By</p>
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}
