import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ArrowRight, Phone, Factory, Camera, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Solutions | Raksha Integrated Solutions",
  description:
    "Complete infrastructure solutions for manufacturing plants — CCTV surveillance, industrial electrification, fire safety, and access control. Trusted by leading manufacturers across India.",
};

const services = [
  {
    icon: Camera,
    title: "Production Floor Surveillance",
    description: "4K cameras with AI analytics to monitor production lines, quality checkpoints, and material movement 24/7.",
  },
  {
    icon: Zap,
    title: "Industrial Electrification",
    description: "HT/LT panels, power distribution, motor control centers, and energy-efficient lighting for manufacturing operations.",
  },
  {
    icon: ShieldCheck,
    title: "Access Control & Safety",
    description: "Biometric access, zone-based restrictions, fire alarm systems, and NBC-compliant safety infrastructure.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-8 h-8 text-electric-500" />
            <span className="text-sm text-electric-500 font-medium uppercase tracking-wider">Industry Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Manufacturing Plants
          </h1>
          <p className="text-lg text-grey-400 mb-12 max-w-3xl">
            End-to-end infrastructure solutions designed for manufacturing environments — from
            heavy-duty electrification to precision surveillance systems that withstand industrial conditions.
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
