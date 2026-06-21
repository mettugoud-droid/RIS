import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Briefcase, MapPin, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Raksha Integrated Solutions",
  description:
    "Join Raksha Integrated Solutions. Open positions for Field Engineers, Sales Executives, and Project Managers across India.",
};

const openPositions = [
  {
    title: "Field Engineer — CCTV & Networking",
    location: "Hyderabad, Bangalore",
    type: "Full-time",
    description:
      "Install and maintain CCTV systems, structured cabling, and networking infrastructure at client sites. 1-3 years experience in IP camera installation preferred.",
  },
  {
    title: "Sales Executive — B2B",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "Drive new business from warehouses, manufacturing plants, and corporate clients. Generate leads, conduct site visits, and close deals for infrastructure solutions.",
  },
  {
    title: "Project Manager — Electrification",
    location: "Hyderabad, Pune",
    type: "Full-time",
    description:
      "Manage industrial electrification projects end-to-end — planning, execution, vendor coordination, and commissioning. 5+ years experience in electrical contracting.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              We&apos;re Hiring
            </h1>
            <p className="text-grey-400 max-w-2xl mx-auto">
              Join a fast-growing team building India&apos;s critical infrastructure. We&apos;re looking
              for passionate engineers, sales professionals, and project managers.
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {openPositions.map((position) => (
              <div key={position.title} className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-grey-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-electric-500" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-electric-500" />
                        {position.type}
                      </span>
                    </div>
                    <p className="text-sm text-grey-400">{position.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">How to Apply</h2>
            <p className="text-sm text-grey-400 mb-6 max-w-lg mx-auto">
              Send your resume with the position title in the subject line. We review applications
              within 3 business days.
            </p>
            <a
              href="mailto:careers@raksha.work?subject=Job Application"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" />
              careers@raksha.work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
