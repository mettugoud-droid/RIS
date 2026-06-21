"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Wrench, Clock, ShieldCheck, FileText, PhoneCall, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "2-Hour Response Time",
    description: "Guaranteed response time for all breakdown calls. Our field engineers are dispatched within minutes of your service request.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Scheduled quarterly visits for cleaning, testing, firmware updates, and proactive issue identification before failures occur.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Equipment Life",
    description: "Regular maintenance extends equipment lifespan by 40-60%, protecting your capital investment and reducing replacement costs.",
  },
  {
    icon: FileText,
    title: "Compliance Reports",
    description: "Detailed maintenance logs, test certificates, and compliance documentation for audits, insurance, and regulatory requirements.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Helpdesk",
    description: "Round-the-clock technical support via phone, email, and WhatsApp. Remote troubleshooting for network and software issues.",
  },
  {
    icon: BarChart3,
    title: "Health Dashboards",
    description: "Monthly system health reports with uptime statistics, incident logs, pending actions, and recommendations for your review.",
  },
];

const solutions = [
  {
    title: "CCTV AMC",
    features: [
      "Camera lens cleaning & alignment",
      "NVR health check & storage audit",
      "Firmware & software updates",
      "Cable & connector inspection",
      "Recording verification & backup",
    ],
  },
  {
    title: "Electrical AMC",
    features: [
      "Panel tightness & thermal imaging",
      "Breaker & relay testing",
      "Earth resistance measurement",
      "DG servicing coordination",
      "Energy audit support",
    ],
  },
  {
    title: "Networking AMC",
    features: [
      "Switch & router health check",
      "Wi-Fi coverage optimization",
      "Patch panel inspection",
      "Bandwidth monitoring review",
      "Security patch updates",
    ],
  },
  {
    title: "Access Control AMC",
    features: [
      "Biometric reader cleaning & calibration",
      "Card reader testing",
      "Lock mechanism servicing",
      "Software & database backup",
      "User access audit review",
    ],
  },
  {
    title: "Fire Alarm AMC",
    features: [
      "Detector sensitivity testing",
      "Panel battery replacement",
      "Sounder & beacon testing",
      "Zone walk test",
      "Annual certification",
    ],
  },
  {
    title: "Comprehensive AMC",
    features: [
      "All systems under single contract",
      "Dedicated account manager",
      "Priority response guarantee",
      "Spare parts inventory",
      "Quarterly review meetings",
    ],
  },
];

const caseStudies = [
  {
    title: "Multi-Site Logistics — 5 Locations",
    location: "Pan India",
    scope: "CCTV + Electrical + Networking across 5 warehouses",
    result: "99.8% system uptime maintained",
    value: "₹18 Lakhs/year",
  },
  {
    title: "Corporate Office — 200+ Devices",
    location: "Hyderabad, Telangana",
    scope: "Complete IT + security infrastructure AMC",
    result: "Zero unplanned downtime in 2 years",
    value: "₹8 Lakhs/year",
  },
  {
    title: "Manufacturing Plant",
    location: "Pune, Maharashtra",
    scope: "Electrical + Fire + Access Control AMC",
    result: "Passed all safety audits",
    value: "₹12 Lakhs/year",
  },
];

const faqs = [
  {
    question: "What's included in a standard AMC?",
    answer: "Our standard AMC includes quarterly preventive maintenance visits, unlimited breakdown calls (during business hours), spare parts at discounted rates, firmware/software updates, and monthly health reports. Comprehensive AMC adds 24/7 support, spare parts inclusive, and priority response.",
  },
  {
    question: "What is your response time for breakdown calls?",
    answer: "Standard AMC: 4-hour response during business hours. Comprehensive AMC: 2-hour response, 24/7. Critical sites can opt for on-site engineer posting for immediate response. Response time is measured from ticket logging to engineer arrival.",
  },
  {
    question: "Can I take AMC for systems not installed by Raksha?",
    answer: "Yes, we take over AMC for existing installations after a thorough audit. We assess system health, document current status, and recommend any remedial work needed. Once the system is brought to serviceable condition, we begin the AMC coverage.",
  },
  {
    question: "How is AMC pricing determined?",
    answer: "AMC pricing depends on: number and type of equipment, number of sites, service level (standard/comprehensive), spare parts inclusion, and response time SLA. We typically charge 8-15% of equipment value per year for standard AMC.",
  },
  {
    question: "What happens if equipment needs replacement during AMC?",
    answer: "Under standard AMC, replacement parts are charged at discounted rates (20-30% off market price). Under comprehensive AMC, most consumable spares are included. Major equipment replacement is handled through a separate quotation with priority execution.",
  },
];

export function AMCServicesPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        badge="AMC SERVICES"
        title="Annual Maintenance Contracts for"
        highlight="Zero Downtime"
        subtitle="Comprehensive preventive and breakdown maintenance for CCTV, electrical, networking, access control, and fire alarm systems. 24/7 support with guaranteed SLA."
        benefits={benefits}
        solutions={solutions}
        caseStudies={caseStudies}
        faqs={faqs}
        ctaText="Get AMC Quote"
      />
      <Footer />
      <FloatingButtons />
    </>
  );
}
