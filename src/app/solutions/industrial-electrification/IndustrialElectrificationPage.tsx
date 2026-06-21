"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import {
  Zap,
  Battery,
  Gauge,
  Cable,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Complete Power Infrastructure",
    description:
      "End-to-end electrical design and execution from HT yard to final distribution boards. Single vendor accountability.",
  },
  {
    icon: Battery,
    title: "Zero Downtime Design",
    description:
      "Redundant power paths, auto-changeover systems, and DG synchronization ensure your operations never stop.",
  },
  {
    icon: Gauge,
    title: "Energy Efficiency",
    description:
      "Power factor correction, harmonic filtering, and energy-efficient designs that reduce your electricity bills by 15-25%.",
  },
  {
    icon: Cable,
    title: "Safety Compliant",
    description:
      "All installations comply with IS standards, IE rules, and CEIG regulations. Complete documentation for inspections.",
  },
  {
    icon: ShieldCheck,
    title: "3-Year Warranty",
    description:
      "Extended warranty on all panels, switchgear, and installations with comprehensive AMC options for long-term support.",
  },
  {
    icon: Wrench,
    title: "Turnkey Execution",
    description:
      "From design and procurement to installation, testing, and commissioning — we handle everything under one roof.",
  },
];

const solutions = [
  {
    title: "HT/LT Panels",
    features: [
      "11kV/33kV HT Panel installation",
      "LT Distribution Boards (MDB, SMDB, DB)",
      "Power Control Centers (PCC)",
      "Motor Control Centers (MCC)",
      "Automatic Power Factor Correction (APFC)",
    ],
  },
  {
    title: "Power Distribution",
    features: [
      "Bus bar trunking systems",
      "Cable tray installation",
      "HT/LT cable laying and termination",
      "Rising mains for multi-story buildings",
      "Power outlet distribution",
    ],
  },
  {
    title: "Transformer & DG",
    features: [
      "Transformer installation & commissioning",
      "DG set installation up to 2000 kVA",
      "AMF/ATS panel installation",
      "DG synchronization panels",
      "Load sharing systems",
    ],
  },
  {
    title: "Earthing & Protection",
    features: [
      "Chemical & conventional earthing",
      "Lightning protection systems",
      "Surge protection devices (SPD)",
      "Earth leakage protection",
      "Equipotential bonding",
    ],
  },
  {
    title: "Industrial Lighting",
    features: [
      "High bay LED lighting for factories",
      "Flameproof lighting for hazardous areas",
      "Emergency lighting systems",
      "Lighting control & automation",
      "Lux level design as per standards",
    ],
  },
  {
    title: "Testing & Commissioning",
    features: [
      "Insulation resistance testing",
      "Earth resistance testing",
      "Relay coordination testing",
      "Thermographic surveys",
      "Complete as-built documentation",
    ],
  },
];

const caseStudies = [
  {
    title: "Large Manufacturing Plant",
    location: "Pune, Maharashtra",
    scope: "2000 kVA transformer + complete LT distribution",
    result: "20% reduction in power costs",
    value: "₹1.5 Crore",
  },
  {
    title: "Pharmaceutical Factory",
    location: "Hyderabad, Telangana",
    scope: "Cleanroom-grade electrical + UPS + DG",
    result: "100% CEIG compliance",
    value: "₹85 Lakhs",
  },
  {
    title: "Food Processing Unit",
    location: "Chennai, Tamil Nadu",
    scope: "Complete electrification from scratch",
    result: "Commissioned in 45 days",
    value: "₹60 Lakhs",
  },
];

const faqs = [
  {
    question: "What size projects do you handle?",
    answer:
      "We handle projects ranging from 100 kVA to 5000 kVA. This includes small industrial sheds, large manufacturing plants, warehouses, commercial buildings, and multi-building campuses. Our minimum project value is typically ₹10 Lakhs.",
  },
  {
    question: "Do you handle CEIG inspections and approvals?",
    answer:
      "Yes, we prepare all documentation required for CEIG (Chief Electrical Inspector to Government) inspections including single line diagrams, load calculations, test reports, and as-built drawings. We coordinate the inspection process end-to-end.",
  },
  {
    question: "What brands of panels and switchgear do you use?",
    answer:
      "We use reputed brands like Schneider Electric, ABB, Siemens, L&T, Havells, and C&S Electric. Brand selection depends on project requirements and budget. All equipment comes with manufacturer warranty.",
  },
  {
    question: "Can you work while our factory is operational?",
    answer:
      "Yes, we specialize in live environment installations. We plan work in phases, execute during non-production hours where possible, and follow strict safety protocols (LOTO, PTW) for working near live equipment.",
  },
  {
    question: "What is included in your AMC for electrical systems?",
    answer:
      "Our electrical AMC includes quarterly preventive maintenance, thermographic surveys, tightness checks, earth testing, breaker servicing, panel cleaning, and 24/7 breakdown support with guaranteed response time.",
  },
  {
    question: "How long does a typical electrification project take?",
    answer:
      "Timeline depends on scope. A typical 500 kVA industrial installation takes 4-6 weeks. Larger projects (2000+ kVA) take 8-12 weeks. We provide a detailed project schedule during proposal stage with milestone tracking.",
  },
];

export function IndustrialElectrificationPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        badge="INDUSTRIAL ELECTRIFICATION"
        title="Complete Electrical Infrastructure for"
        highlight="Industries & Factories"
        subtitle="Turnkey industrial electrification from HT yard to final distribution. HT/LT panels, transformers, DG synchronization, bus bars, and complete power distribution systems."
        benefits={benefits}
        solutions={solutions}
        caseStudies={caseStudies}
        faqs={faqs}
        ctaText="Get Electrification Quote"
      />
      <Footer />
      <FloatingButtons />
    </>
  );
}
