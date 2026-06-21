import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ArrowRight, Phone, Building, Camera, Zap, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Park Solutions | Raksha Integrated Solutions",
  description:
    "Infrastructure solutions for industrial parks and SEZs — perimeter security, common area surveillance, HT power distribution, fiber networking, and centralized monitoring.",
};

const services = [
  {
    icon: Camera,
    title: "Perimeter & Common Area Surveillance",
    description: "ANPR at gates, perimeter intrusion detection, common area monitoring, and centralized security operations center (SOC) setup.",
  },
  {
    icon: Zap,
    title: "HT Power Distribution",
    description: "HT/LT substations, power distribution to individual units, street lighting, and DG backup for common infrastructure.",
  },
  {
    icon: Network,
    title: "Park-Wide Networking",
    description: "Fiber optic backbone across the park, common Wi-Fi infrastructure, VoIP systems, and tenant connectivity solutions.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Building className="w-8 h-8 text-electric-500" />
            <span className="text-sm text-electric-500 font-medium uppercase tracking-wider">Industry Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Industrial Parks & SEZs
          </h1>
          <p className="text-lg text-grey-400 mb-12 max-w-3xl">
            Comprehensive infrastructure for industrial parks — from perimeter security and power
            distribution to park-wide networking that serves all tenant units efficiently.
          </p>

          <div className="space-y-6 mb-12">
            {services.map((service) => (
              <div key={service.title} className="glass rounded-xl p-6 flex items-start gap-4">
                <service.icon className="w-8 h-8 text-electric-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-grey-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/rfq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-electric-500/20"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-grey-600 text-white font-semibold hover:border-electric-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
