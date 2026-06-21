import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ArrowRight, Phone, Pill, Camera, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmaceutical Solutions | Raksha Integrated Solutions",
  description:
    "Infrastructure solutions for pharmaceutical facilities — cleanroom-compatible surveillance, GMP-compliant electrification, access control, and environmental monitoring.",
};

const services = [
  {
    icon: Camera,
    title: "GMP-Compliant Surveillance",
    description: "Cleanroom-rated cameras, production batch monitoring, audit trail recording, and tamper-proof storage meeting pharma compliance needs.",
  },
  {
    icon: Zap,
    title: "Pharmaceutical Electrification",
    description: "Cleanroom-grade wiring, UPS with zero-transfer time, HVAC power systems, and validated electrical installations per GMP standards.",
  },
  {
    icon: ShieldCheck,
    title: "Access Control & Monitoring",
    description: "Zone-restricted biometric access, environmental monitoring with data logging, and FDA 21 CFR Part 11 compatible systems.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Pill className="w-8 h-8 text-electric-500" />
            <span className="text-sm text-electric-500 font-medium uppercase tracking-wider">Industry Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Pharmaceutical Facilities
          </h1>
          <p className="text-lg text-grey-400 mb-12 max-w-3xl">
            Compliance-first infrastructure for pharmaceutical manufacturing and R&D facilities.
            Designed to meet GMP, WHO-GMP, and FDA requirements with validated installations.
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
