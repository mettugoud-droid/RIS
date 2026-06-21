"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ChevronDown, Camera, Zap, Wrench, HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ElementType;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "CCTV Installation",
    icon: Camera,
    faqs: [
      {
        question: "How many cameras does a warehouse need?",
        answer:
          "The number depends on warehouse size, layout, and coverage needs. Typically, a 50,000 sq ft warehouse requires 32–48 cameras covering entry/exit points, loading docks, aisles, and perimeter. We conduct a free site survey to provide an exact count.",
      },
      {
        question: "What type of cameras do you install?",
        answer:
          "We install IP-based cameras from leading brands like Hikvision, Dahua, and CP Plus. Options include 2MP, 4MP, and 4K resolution with features like night vision, AI analytics, ANPR, and PTZ capabilities based on your requirements.",
      },
      {
        question: "How long is CCTV footage stored?",
        answer:
          "Storage duration depends on the NVR/server capacity and camera count. We typically design for 30–90 days of continuous recording. Cloud backup options are available for critical footage. We size the storage based on your compliance requirements.",
      },
      {
        question: "Can I view cameras remotely on my phone?",
        answer:
          "Yes, all our installations include remote viewing setup. You can monitor live feeds and playback recordings from your smartphone, tablet, or laptop from anywhere with an internet connection using the manufacturer's app or VMS software.",
      },
      {
        question: "Do you provide AMC for CCTV systems?",
        answer:
          "Yes, we offer comprehensive AMC packages that include quarterly preventive maintenance visits, camera cleaning, firmware updates, NVR health checks, and 24/7 breakdown support with 2-hour response time for critical issues.",
      },
    ],
  },
  {
    title: "Electrification",
    icon: Zap,
    faqs: [
      {
        question: "What electrical services do you provide for industries?",
        answer:
          "We handle complete industrial electrification including HT/LT panel installation, power distribution, transformer installation, internal wiring, high-bay lighting, DG set integration, earthing systems, and energy metering — all compliant with IE rules and NBC.",
      },
      {
        question: "Do you handle government approvals and inspections?",
        answer:
          "Yes, we manage the entire compliance process including electrical inspector approvals, CEA compliance documentation, energy audit preparation, and liaison with DISCOMs for power connections and load enhancements.",
      },
      {
        question: "Can you upgrade existing electrical infrastructure?",
        answer:
          "Absolutely. We conduct electrical audits to assess your current infrastructure, identify bottlenecks, and provide upgrade recommendations. Services include panel upgrades, load balancing, energy efficiency improvements, and safety compliance retrofits.",
      },
    ],
  },
  {
    title: "AMC & Maintenance",
    icon: Wrench,
    faqs: [
      {
        question: "What does your AMC package include?",
        answer:
          "Our AMC packages include quarterly preventive maintenance visits, 24/7 breakdown support, spare parts at discounted rates, system health reports, firmware/software updates, and dedicated account management. We offer Basic, Standard, and Premium tiers.",
      },
      {
        question: "What is your response time for emergencies?",
        answer:
          "For AMC clients, we guarantee a 2-hour response time for critical issues (system down) and 4-hour response for non-critical issues within city limits. Remote troubleshooting begins within 30 minutes of ticket creation.",
      },
      {
        question: "Do you provide AMC across all cities?",
        answer:
          "Yes, we provide AMC services in 15+ cities across India including Hyderabad, Bangalore, Mumbai, Pune, Chennai, Delhi NCR, and more. Multi-site clients benefit from centralized reporting and single-point coordination.",
      },
    ],
  },
  {
    title: "General",
    icon: HelpCircle,
    faqs: [
      {
        question: "Which cities do you operate in?",
        answer:
          "We operate across 15+ cities in India including Hyderabad, Bangalore, Mumbai, Pune, Chennai, Delhi NCR, Kolkata, Ahmedabad, Vizag, Vijayawada, Coimbatore, Kochi, Indore, Nagpur, and Jaipur. We can take up projects in other cities as well for enterprise clients.",
      },
      {
        question: "How do I get a quotation?",
        answer:
          "You can request a quote by filling our RFQ form, calling us, or sending a WhatsApp message. For accurate pricing, we recommend a free site survey where our engineers assess your requirements and provide a detailed proposal within 48 hours.",
      },
      {
        question: "Do you work with all industries?",
        answer:
          "We specialize in warehouses, manufacturing facilities, corporate offices, cold storage, retail spaces, pharmaceutical units, industrial parks, and data centers. Our solutions are customized based on industry-specific compliance and operational requirements.",
      },
    ],
  },
];

function AccordionItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-sm font-medium text-white pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-electric-500 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-sm text-grey-400 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-grey-400 max-w-2xl mx-auto">
              Find answers to common questions about our CCTV installation, electrification,
              networking, and maintenance services.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <section key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-electric-500" />
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
                <div className="space-y-3">
                  {category.faqs.map((faq, i) => (
                    <AccordionItem key={i} faq={faq} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 text-center glass rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-sm text-grey-400 mb-6">
              Our team is ready to help you with any queries about our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-grey-600 text-white font-semibold hover:border-electric-500 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
