import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Shield, Zap, Network, Flame, Award, Handshake, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "OEM Partners — Raksha Integrated Solutions",
  description:
    "Our OEM technology partners include Hikvision, Dahua, CP Plus, Schneider, ABB, Havells, Cisco, Honeywell, and more. Authorized dealer and system integrator.",
};

interface Partner {
  name: string;
  specialty: string;
}

interface PartnerCategory {
  title: string;
  icon: React.ElementType;
  partners: Partner[];
}

const partnerCategories: PartnerCategory[] = [
  {
    title: "Security & Surveillance",
    icon: Shield,
    partners: [
      { name: "Hikvision", specialty: "IP Cameras, NVRs, AI Analytics" },
      { name: "Dahua", specialty: "IP Cameras, XVRs, Thermal Imaging" },
      { name: "CP Plus", specialty: "CCTV Systems, Access Control" },
      { name: "Bosch", specialty: "Video Systems, Intrusion Detection" },
    ],
  },
  {
    title: "Electrical & Power",
    icon: Zap,
    partners: [
      { name: "Schneider Electric", specialty: "Panels, MCBs, Power Distribution" },
      { name: "ABB", specialty: "Switchgear, Drives, Automation" },
      { name: "Havells", specialty: "Cables, MCBs, Lighting" },
      { name: "L&T", specialty: "Switchgear, Contactors, Panels" },
    ],
  },
  {
    title: "Networking & Cabling",
    icon: Network,
    partners: [
      { name: "D-Link", specialty: "Switches, Routers, Wireless APs" },
      { name: "Cisco", specialty: "Enterprise Networking, Security" },
      { name: "Ubiquiti", specialty: "Wi-Fi Systems, Surveillance" },
    ],
  },
  {
    title: "Fire Safety",
    icon: Flame,
    partners: [
      { name: "Honeywell", specialty: "Fire Alarm Panels, Detectors" },
      { name: "Morley", specialty: "Addressable Systems, PA/EVAC" },
      { name: "Agni", specialty: "Fire Detection, Suppression Systems" },
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: "Authorized Partnerships",
    description: "Direct access to genuine products, latest firmware, and manufacturer warranty support.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Engineers",
    description: "Our team holds manufacturer certifications ensuring proper installation and configuration.",
  },
  {
    icon: Handshake,
    title: "Priority Support",
    description: "As authorized partners, we get priority technical support and faster RMA processing.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Our Technology Partners
            </h1>
            <p className="text-grey-400 max-w-2xl mx-auto">
              We partner with global OEM leaders to deliver enterprise-grade infrastructure
              solutions. Authorized dealer and certified system integrator.
            </p>
          </div>

          <div className="space-y-10 mb-20">
            {partnerCategories.map((category) => (
              <section key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-electric-500" />
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="glass rounded-xl p-5 glass-hover"
                    >
                      <h3 className="text-base font-bold text-white mb-1">{partner.name}</h3>
                      <p className="text-xs text-grey-400">{partner.specialty}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-3">Partnership Benefits</h2>
              <p className="text-grey-400 max-w-xl mx-auto">
                Our OEM partnerships translate directly into better outcomes for your projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="glass rounded-2xl p-6 text-center">
                  <benefit.icon className="w-10 h-10 text-electric-500 mx-auto mb-4" />
                  <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-grey-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
