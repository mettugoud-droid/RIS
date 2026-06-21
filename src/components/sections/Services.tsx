"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Zap,
  Warehouse,
  Network,
  ShieldCheck,
  Flame,
  Wrench,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "CCTV Solutions",
    description:
      "Enterprise-grade surveillance systems for warehouses, factories, and corporate campuses. IP cameras, NVR, and remote monitoring.",
    href: "/solutions/warehouse-cctv-installation",
  },
  {
    icon: Zap,
    title: "Industrial Electrification",
    description:
      "Complete HT/LT electrical infrastructure for manufacturing plants, industrial sheds, and large-scale facilities.",
    href: "/solutions/industrial-electrification",
  },
  {
    icon: Warehouse,
    title: "Warehouse Electrification",
    description:
      "Specialized power distribution, lighting, and electrical systems designed for modern logistics and warehousing operations.",
    href: "/solutions/warehouse-electrification",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description:
      "Structured cabling, fiber optic installation, and enterprise networking for seamless connectivity across your facility.",
    href: "/solutions/networking-solutions",
  },
  {
    icon: ShieldCheck,
    title: "Access Control",
    description:
      "Biometric systems, RFID access, boom barriers, and integrated security solutions for restricted area management.",
    href: "/solutions/access-control-systems",
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    description:
      "Conventional and addressable fire detection, alarm systems, and PA systems compliant with safety regulations.",
    href: "/solutions/fire-alarm-systems",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description:
      "Annual maintenance contracts with guaranteed response times, preventive maintenance, and 24/7 emergency support.",
    href: "/solutions/amc-services",
  },
];

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-navy-900">
      {/* Background Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full gradient-radial-blue opacity-50" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
            OUR SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
            Comprehensive Infrastructure for Modern Industry
          </h2>
          <p className="text-lg text-grey-400 max-w-2xl mx-auto">
            End-to-end solutions engineered for reliability, scalability, and
            compliance.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.a
              key={service.title}
              href={service.href}
              variants={staggerItem}
              className="group glass glass-hover rounded-2xl p-8 flex flex-col transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_40px_rgba(0,102,255,0.1)] cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-electric-500/10 flex items-center justify-center mb-6 group-hover:bg-electric-500/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-electric-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-grey-400 leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-1 text-sm font-medium text-electric-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
