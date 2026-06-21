import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ArrowRight, Phone, Wrench, Camera, Zap, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Facility Management Solutions | Raksha Integrated Solutions",
  description:
    "Partner with facility management companies for CCTV, electrical, networking, and AMC services. White-label infrastructure support for FM companies across India.",
};

const services = [
  {
    icon: Camera,
    title: "Surveillance System Management",
    description: "Install, maintain, and upgrade CCTV systems across your managed properties. Single vendor for all surveillance needs with centralized monitoring.",
  },
  {
    icon: Zap,
    title: "Electrical Infrastructure Support",
    description: "Preventive maintenance, breakdown support, and upgrade services for electrical systems across your entire portfolio of managed facilities.",
  },
  {
    icon: ClipboardCheck,
    title: "Comprehensive AMC Partnership",
    description: "White-label AMC services with SLA-backed response times, quarterly health reports, and dedicated account management for FM companies.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-electric-500" />
            <span className="text-sm text-electric-500 font-medium uppercase tracking-wider">Industry Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Facility Management Companies
          </h1>
          <p className="text-lg text-grey-400 mb-12 max-w-3xl">
            A reliable infrastructure partner for facility management companies. We handle the
            technical complexity of CCTV, electrical, and networking so you can focus on client service.
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
