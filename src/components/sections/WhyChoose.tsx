"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import {
  staggerContainer,
  slideInFromLeft,
  slideInFromRight,
  tableRowVariant,
  checkmarkBounce,
} from "@/lib/animations";

const features = [
  { feature: "Site Survey", raksha: "Free + Detailed Report", others: "No Survey" },
  { feature: "Design Phase", raksha: "Engineering-Led Design", others: "Ad-hoc Installation" },
  { feature: "Project Timeline", raksha: "Guaranteed SLA", others: "Unpredictable" },
  { feature: "Documentation", raksha: "Complete BOQ & Drawings", others: "Minimal" },
  { feature: "After-Sales", raksha: "24/7 AMC Support", others: "No Support" },
  { feature: "Safety Compliance", raksha: "ISO Standards", others: "Non-compliant" },
  { feature: "Warranty", raksha: "3 Year Warranty", others: "6 Months" },
  { feature: "Scalability", raksha: "Future-Ready Design", others: "Fixed Capacity" },
];

const highlights = [
  "Engineering-first approach to every project",
  "Dedicated project manager assigned",
  "Real-time progress tracking dashboard",
  "Post-installation performance audit",
  "Guaranteed response time under 2 hours",
];

export function WhyChoose() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column — Value Proposition */}
          <motion.div variants={slideInFromLeft}>
            <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
              WHY RAKSHA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Why Industry Leaders
              <br />
              Choose Raksha
            </h2>
            <p className="text-lg text-grey-400 mb-8 leading-relaxed">
              We don&apos;t just install equipment — we engineer complete
              infrastructure solutions built for reliability, scalability, and
              decades of performance.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  variants={tableRowVariant}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-success" />
                  </div>
                  <span className="text-base font-medium text-grey-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#site-audit"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_60px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              See Our Process
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column — Comparison Table */}
          <motion.div
            variants={slideInFromRight}
            className="glass rounded-[20px] p-4 sm:p-8 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 pb-4 border-b border-white/[0.08] mb-2">
              <span className="text-sm font-semibold text-grey-400 uppercase tracking-[0.05em]">
                Feature
              </span>
              <span className="text-sm font-semibold text-electric-400 uppercase tracking-[0.05em] text-center">
                Raksha
              </span>
              <span className="text-sm font-semibold text-grey-500 uppercase tracking-[0.05em] text-center">
                Others
              </span>
            </div>

            {/* Table Rows */}
            <div className="space-y-0">
              {features.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="grid grid-cols-[1fr_1fr_1fr] gap-2 py-4 border-b border-white/[0.04] hover:bg-electric-500/[0.03] transition-colors rounded-lg px-2"
                >
                  {/* Feature Name */}
                  <span className="text-sm sm:text-base font-medium text-white">
                    {row.feature}
                  </span>

                  {/* Raksha Value */}
                  <div className="flex items-center justify-center gap-1.5">
                    <motion.div
                      variants={checkmarkBounce}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                    </motion.div>
                    <span className="text-xs sm:text-sm font-medium text-success hidden sm:inline">
                      {row.raksha}
                    </span>
                  </div>

                  {/* Others Value */}
                  <div className="flex items-center justify-center gap-1.5 opacity-60">
                    <X className="w-4 h-4 text-grey-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-grey-500 hidden sm:inline">
                      {row.others}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
