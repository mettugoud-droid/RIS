"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const partners = [
  { name: "Hikvision", category: "Surveillance" },
  { name: "Dahua", category: "Surveillance" },
  { name: "CP Plus", category: "Surveillance" },
  { name: "Honeywell", category: "Fire & Access" },
  { name: "Bosch", category: "Security" },
  { name: "Schneider Electric", category: "Electrical" },
  { name: "ABB", category: "Electrical" },
  { name: "Havells", category: "Electrical" },
  { name: "L&T", category: "Switchgear" },
  { name: "D-Link", category: "Networking" },
  { name: "Cisco", category: "Networking" },
  { name: "Ubiquiti", category: "Networking" },
];

export function OEMPartners() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-navy-800 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-3">
            OEM PARTNERSHIPS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            We Work With The Best Brands
          </h2>
          <p className="text-grey-400 max-w-xl mx-auto">
            Authorized channel partners and certified installers for industry-leading equipment manufacturers.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:border-electric-500/30 transition-all group cursor-default"
            >
              {/* Logo placeholder - replace with actual SVG/images */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/5 flex items-center justify-center mb-2 group-hover:bg-electric-500/10 transition-colors">
                <span className="text-[10px] sm:text-xs font-bold text-grey-300 group-hover:text-electric-300 transition-colors leading-tight text-center">
                  {partner.name.split(" ")[0]}
                </span>
              </div>
              <p className="text-xs font-medium text-grey-300 hidden sm:block">{partner.name}</p>
              <p className="text-[10px] text-grey-500 mt-0.5 hidden sm:block">{partner.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
