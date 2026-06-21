"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Raksha transformed our warehouse security completely. 200 cameras deployed across our 1 lakh sqft facility in just 3 weeks with zero downtime to operations.",
    author: "Rajesh Kumar",
    role: "VP Operations",
    company: "XYZ Logistics Pvt Ltd",
    metrics: [
      { value: "↓40%", label: "Theft Reduction" },
      { value: "99.9%", label: "Uptime" },
      { value: "↓60%", label: "Insurance Cost" },
    ],
  },
  {
    id: 2,
    quote:
      "The electrical infrastructure they designed for our manufacturing plant is world-class. Their engineering-first approach saved us 20% on our power bills from day one.",
    author: "Priya Sharma",
    role: "Plant Head",
    company: "ABC Manufacturing Ltd",
    metrics: [
      { value: "↓20%", label: "Power Cost" },
      { value: "100%", label: "Compliance" },
      { value: "3 Yr", label: "Warranty" },
    ],
  },
  {
    id: 3,
    quote:
      "We needed a complete security overhaul for 8 cold storage facilities. Raksha delivered on time, within budget, and the AMC support has been exceptional.",
    author: "Amit Patel",
    role: "Director",
    company: "ColdChain Solutions India",
    metrics: [
      { value: "8", label: "Facilities" },
      { value: "500+", label: "Cameras" },
      { value: "<2hr", label: "Support SLA" },
    ],
  },
  {
    id: 4,
    quote:
      "From initial site survey to final handover, the professionalism was outstanding. Their documentation and compliance standards match multinational contractors.",
    author: "Suresh Reddy",
    role: "Procurement Head",
    company: "TechPark Developers",
    metrics: [
      { value: "₹2.5Cr", label: "Project Value" },
      { value: "45 Days", label: "Delivery" },
      { value: "Zero", label: "Defects" },
    ],
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-navy-900 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-grey-400 max-w-2xl mx-auto">
            See how we&apos;ve transformed infrastructure for enterprises across India.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows (Desktop) */}
          <button
            onClick={prev}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full glass border border-white/[0.08] text-white hover:bg-electric-500/10 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full glass border border-white/[0.08] text-white hover:bg-electric-500/10 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-8 sm:p-12 relative"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-6 left-8 w-12 h-12 text-electric-500/10" />

              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-center">
                {/* Video Thumbnail Placeholder */}
                <div className="relative w-full max-w-[240px] mx-auto md:mx-0 aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-electric-500/20 to-navy-700 flex items-center justify-center cursor-pointer group">
                  <div className="w-14 h-14 rounded-full bg-electric-500/90 flex items-center justify-center shadow-[0_0_30px_rgba(0,102,255,0.4)] group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Quote Text */}
                  <p className="text-lg sm:text-xl text-grey-200 italic leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-6">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-500 to-electric-700 border-2 border-electric-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-grey-400">
                        {testimonial.role},{" "}
                        <span className="text-electric-400">
                          {testimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-6 pt-6 border-t border-white/[0.08]">
                    {testimonial.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-xl sm:text-2xl font-bold text-electric-400">
                          {metric.value}
                        </p>
                        <p className="text-xs font-medium text-grey-400 mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/[0.08] text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/[0.08] text-white"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 bg-electric-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
