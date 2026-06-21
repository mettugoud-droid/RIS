"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  ShieldCheck,
  HardHat,
  Users,
  Globe,
  Wrench,
  FileCheck,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Single Vendor Accountability",
    desc: "One point of contact for CCTV, electrical, networking, and fire safety. No finger-pointing between contractors.",
  },
  {
    icon: HardHat,
    title: "Industrial Safety Standards",
    desc: "All installations comply with IS, NBC, CEIG, and IE standards. Complete documentation for audits.",
  },
  {
    icon: Users,
    title: "Experienced Engineers",
    desc: "Certified engineers with 8+ years average experience in industrial infrastructure projects.",
  },
  {
    icon: Globe,
    title: "Pan India Execution",
    desc: "Standardized quality across 15+ cities. Multi-site projects delivered with consistent SLAs.",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Capability",
    desc: "In-house AMC team with 2-hour response time. Quarterly preventive maintenance included.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    desc: "BOQ, SLD, as-built drawings, test reports, and compliance certificates for every project.",
  },
];

export function WhyRaksha() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-navy-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-3">
            WHY RAKSHA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Enterprises Trust Us
          </h2>
          <p className="text-lg text-grey-400 max-w-2xl mx-auto">
            We don&apos;t just install — we engineer infrastructure that lasts decades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-7 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-electric-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-grey-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
