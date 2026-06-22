"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ShieldCheck, Zap, Network, Flame } from "lucide-react";

interface Partner {
  name: string;
  category: "Security" | "Electrical" | "Networking" | "Fire Safety";
  level: "Authorized" | "Channel Partner" | "Certified Installer" | "Preferred";
  solutions: string[];
}

const partners: Partner[] = [
  { name: "Hikvision", category: "Security", level: "Authorized", solutions: ["IP Cameras", "NVR/DVR", "Access Control", "Video Intercom"] },
  { name: "Dahua", category: "Security", level: "Channel Partner", solutions: ["IP Cameras", "PTZ", "Thermal", "ANPR"] },
  { name: "CP Plus", category: "Security", level: "Authorized", solutions: ["CCTV Cameras", "DVR", "NVR", "VDP"] },
  { name: "Honeywell", category: "Fire Safety", level: "Certified Installer", solutions: ["Fire Panels", "Detectors", "Access Control", "Intrusion"] },
  { name: "Bosch", category: "Security", level: "Preferred", solutions: ["Cameras", "PA Systems", "Fire Detection", "Access"] },
  { name: "Schneider Electric", category: "Electrical", level: "Channel Partner", solutions: ["MCBs/MCCBs", "Panels", "Switchgear", "Metering"] },
  { name: "ABB", category: "Electrical", level: "Channel Partner", solutions: ["Breakers", "Contactors", "Drives", "Switchgear"] },
  { name: "Havells", category: "Electrical", level: "Preferred", solutions: ["MCBs", "Cables", "Lighting", "Fans"] },
  { name: "L&T", category: "Electrical", level: "Authorized", solutions: ["Switchgear", "Contactors", "Starters", "Panels"] },
  { name: "D-Link", category: "Networking", level: "Channel Partner", solutions: ["Switches", "Routers", "Wireless", "PoE"] },
  { name: "Cisco", category: "Networking", level: "Preferred", solutions: ["Enterprise Switches", "Routers", "Wireless", "Security"] },
  { name: "Ubiquiti", category: "Networking", level: "Certified Installer", solutions: ["UniFi APs", "Switches", "Cameras", "Gateways"] },
  { name: "Polycab", category: "Electrical", level: "Preferred", solutions: ["Cables", "Wires", "Conduits", "Lighting"] },
  { name: "Finolex", category: "Electrical", level: "Authorized", solutions: ["Cables", "Wires", "Switches", "Conduits"] },
  { name: "Morley (Honeywell)", category: "Fire Safety", level: "Certified Installer", solutions: ["Addressable Panels", "Detectors", "Sounders", "Beamers"] },
  { name: "Agni (Fire)", category: "Fire Safety", level: "Authorized", solutions: ["Fire Panels", "Smoke Detectors", "MCP", "Hooters"] },
];

const categoryConfig = {
  Security: { icon: ShieldCheck, color: "text-blue-400", bg: "bg-blue-400/10" },
  Electrical: { icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  Networking: { icon: Network, color: "text-green-400", bg: "bg-green-400/10" },
  "Fire Safety": { icon: Flame, color: "text-orange-400", bg: "bg-orange-400/10" },
};

const levelBadge: Record<string, string> = {
  Authorized: "bg-electric-500/10 text-electric-400 border-electric-500/20",
  "Channel Partner": "bg-success/10 text-success border-success/20",
  "Certified Installer": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Preferred: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export function OEMPartners() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const categories = ["Security", "Electrical", "Networking", "Fire Safety"] as const;

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-3">
            OEM PARTNERSHIPS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Authorized Partners of Industry-Leading Brands
          </h2>
          <p className="text-grey-400 max-w-2xl mx-auto">
            We work exclusively with tier-1 OEMs to deliver enterprise-grade infrastructure. Every product carries manufacturer warranty and certified support.
          </p>
        </motion.div>

        {/* Category Sections */}
        {categories.map((category, catIdx) => {
          const config = categoryConfig[category];
          const Icon = config.icon;
          const categoryPartners = partners.filter((p) => p.category === category);

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="mb-10 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-lg ${config.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{category} Brands</h3>
                <span className="text-xs text-[#475569] ml-auto">{categoryPartners.length} partners</span>
              </div>

              {/* Partner Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {categoryPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="bg-white border border-[#E2E8F0] shadow-sm rounded-xl p-4 hover:border-[#1F6E8C] hover:shadow-md transition-all group"
                  >
                    {/* Brand Name */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-white group-hover:text-electric-300 transition-colors">
                        {partner.name}
                      </span>
                    </div>

                    {/* Level Badge */}
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium border mb-3 ${levelBadge[partner.level]}`}>
                      {partner.level}
                    </span>

                    {/* Solutions */}
                    <div className="flex flex-wrap gap-1">
                      {partner.solutions.slice(0, 3).map((sol) => (
                        <span key={sol} className="px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[10px] text-grey-400">
                          {sol}
                        </span>
                      ))}
                      {partner.solutions.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[10px] text-[#475569]">
                          +{partner.solutions.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Trust Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#475569]">
            All products sourced through authorized channels with manufacturer warranty. Certificates available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
