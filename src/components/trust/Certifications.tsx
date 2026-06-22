"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Award, ShieldCheck, FileCheck, Building } from "lucide-react";

const certs = [
  { icon: Building, title: "MSME Registered", desc: "Government recognized micro/small/medium enterprise" },
  { icon: FileCheck, title: "GST Registered", desc: "Fully tax compliant with GST certification" },
  { icon: ShieldCheck, title: "ISO Processes", desc: "Quality management systems for consistent delivery" },
  { icon: Award, title: "OEM Certified", desc: "Authorized partner for Hikvision, Schneider, Honeywell" },
];

export function Certifications() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-12 bg-navy-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 glass rounded-xl p-4"
            >
              <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center flex-shrink-0">
                <cert.icon className="w-5 h-5 text-electric-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{cert.title}</p>
                <p className="text-xs text-[#475569]">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
