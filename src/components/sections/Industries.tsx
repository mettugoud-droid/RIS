"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  Building2,
  Snowflake,
  ShoppingBag,
  FlaskConical,
  Building,
  Settings,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { staggerContainer, staggerItem } from "@/lib/animations";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    details: ["CCTV Surveillance", "Power Distribution", "Fire Safety", "Access Control"],
  },
  {
    icon: Truck,
    title: "Logistics & 3PL",
    details: ["Warehouse CCTV", "Loading Bay Monitoring", "Perimeter Security", "Electrical Infra"],
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    details: ["IP CCTV Systems", "Structured Cabling", "Access Control", "Electrical Works"],
  },
  {
    icon: Snowflake,
    title: "Cold Storage",
    details: ["Temperature Monitoring", "Specialized Cameras", "Power Backup", "Alarm Systems"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & Malls",
    details: ["Loss Prevention", "Footfall Analytics", "PA Systems", "Emergency Lighting"],
  },
  {
    icon: FlaskConical,
    title: "Pharma",
    details: ["Cleanroom Monitoring", "Access Restriction", "Audit Compliance", "Network Infra"],
  },
  {
    icon: Building,
    title: "Industrial Parks",
    details: ["Campus Security", "Common Area CCTV", "HT/LT Infra", "Smart Lighting"],
  },
  {
    icon: Settings,
    title: "Facility Management",
    details: ["Multi-site CCTV", "AMC Services", "Remote Monitoring", "Preventive Maintenance"],
  },
];

export function Industries() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-white">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by India&apos;s Leading Enterprises
          </h2>
          <p className="text-lg text-grey-400 max-w-2xl mx-auto">
            Specialized solutions for every industrial vertical with deep domain expertise.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={staggerItem}
              className="group relative bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-6 sm:p-8 text-center min-h-[180px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[#F8FAFC] hover:border-[#1F6E8C] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 transition-all duration-300 group-hover:scale-110">
                <industry.icon className="w-10 h-10 sm:w-12 sm:h-12 text-electric-400 opacity-80 group-hover:opacity-100 group-hover:text-electric-300 transition-all duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {industry.title}
              </h3>

              {/* Details (shown on hover) */}
              <div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                <ul className="text-xs sm:text-sm text-grey-400 space-y-1 pt-2">
                  {industry.details.map((detail) => (
                    <li key={detail} className="flex items-center justify-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-electric-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
