"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Network, Wifi, Cable, Server, Globe, Gauge } from "lucide-react";

const benefits = [
  {
    icon: Network,
    title: "Structured Cabling",
    description: "TIA/EIA 568 compliant structured cabling with Cat6/Cat6A for future-proof network infrastructure supporting 10Gbps speeds.",
  },
  {
    icon: Cable,
    title: "Fiber Optic Networks",
    description: "Single-mode and multi-mode fiber for backbone connectivity, inter-building links, and high-bandwidth applications.",
  },
  {
    icon: Wifi,
    title: "Enterprise Wi-Fi",
    description: "High-density Wi-Fi 6 deployments with seamless roaming, centralized management, and guest access portals.",
  },
  {
    icon: Server,
    title: "Data Center Infrastructure",
    description: "Server rack installation, patch panels, cable management, hot/cold aisle design, and power distribution units.",
  },
  {
    icon: Globe,
    title: "WAN & Internet",
    description: "Multi-ISP connectivity, SD-WAN deployment, load balancing, and failover configuration for always-on connectivity.",
  },
  {
    icon: Gauge,
    title: "Network Performance",
    description: "Fluke-certified testing, OTDR fiber testing, bandwidth monitoring, and performance optimization services.",
  },
];

const solutions = [
  {
    title: "Copper Cabling",
    features: [
      "Cat6/Cat6A (up to 10Gbps)",
      "Patch panel termination",
      "Face plate installation",
      "Cable tray & pathway routing",
      "Fluke DTX certification",
    ],
  },
  {
    title: "Fiber Optic",
    features: [
      "Single-mode fiber (OS2)",
      "Multi-mode fiber (OM3/OM4)",
      "Fusion splicing",
      "OTDR testing & certification",
      "Fiber patch panel & enclosures",
    ],
  },
  {
    title: "Active Networking",
    features: [
      "L2/L3 switch deployment",
      "PoE switch installation",
      "Router & firewall setup",
      "VLAN & QoS configuration",
      "Network monitoring setup",
    ],
  },
  {
    title: "Wireless Solutions",
    features: [
      "Wi-Fi 6 access points",
      "Site survey & heat mapping",
      "Controller-based management",
      "Guest captive portal",
      "Outdoor wireless bridges",
    ],
  },
  {
    title: "Server Room / Data Center",
    features: [
      "42U/22U rack installation",
      "Hot/cold aisle containment",
      "PDU & UPS integration",
      "Environmental monitoring",
      "Access control for server room",
    ],
  },
  {
    title: "Testing & Documentation",
    features: [
      "End-to-end cable certification",
      "OTDR fiber reports",
      "As-built documentation",
      "Cable labeling & tracking",
      "Network topology diagrams",
    ],
  },
];

const caseStudies = [
  {
    title: "Corporate Campus — 2000 Nodes",
    location: "Hyderabad, Telangana",
    scope: "Cat6A + Fiber backbone + Wi-Fi 6",
    result: "10Gbps capable infrastructure",
    value: "₹65 Lakhs",
  },
  {
    title: "Warehouse Network — Multi-Building",
    location: "Mumbai, Maharashtra",
    scope: "Fiber inter-connect + PoE for cameras",
    result: "Supports 300+ IP cameras",
    value: "₹22 Lakhs",
  },
  {
    title: "Hospital IT Infrastructure",
    location: "Bangalore, Karnataka",
    scope: "1500 nodes + server room + Wi-Fi",
    result: "Zero network downtime post-deployment",
    value: "₹48 Lakhs",
  },
];

const faqs = [
  {
    question: "Cat6 vs Cat6A — which should I choose?",
    answer: "Cat6 supports 1Gbps (up to 10Gbps at short distances) and is sufficient for most office environments. Cat6A supports 10Gbps at full 100m distance and is recommended for new installations as it future-proofs your network for the next 10-15 years. Price difference is approximately 20-30%.",
  },
  {
    question: "How do you ensure cable quality?",
    answer: "Every cable run is tested using Fluke DTX CableAnalyzer for copper and OTDR for fiber. We provide certified test reports for each link showing compliance with TIA/EIA standards. Cables that fail are re-terminated or replaced before handover.",
  },
  {
    question: "Can you work in an occupied building?",
    answer: "Yes, we regularly execute cabling projects in operational buildings. We work during non-business hours when possible, use clean installation methods (no dust, minimal noise), and coordinate with your facilities team to minimize disruption.",
  },
  {
    question: "Do you provide networking equipment or just cabling?",
    answer: "We provide complete turnkey solutions including passive infrastructure (cabling, racks, patch panels) and active equipment (switches, routers, APs, firewalls). We work with brands like Cisco, HPE Aruba, Juniper, Ubiquiti, and D-Link depending on requirements and budget.",
  },
  {
    question: "What warranty do you provide on cabling?",
    answer: "We provide a 25-year warranty on passive cabling infrastructure (in partnership with cable manufacturers). Active equipment carries manufacturer warranty (typically 3-5 years). Our workmanship is warrantied for 3 years.",
  },
];

export function NetworkingSolutionsPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        badge="NETWORKING & CABLING"
        title="Enterprise Network Infrastructure for"
        highlight="Seamless Connectivity"
        subtitle="Structured cabling, fiber optics, enterprise Wi-Fi, and data center infrastructure. TIA/EIA compliant installations with Fluke-certified testing."
        benefits={benefits}
        solutions={solutions}
        caseStudies={caseStudies}
        faqs={faqs}
        ctaText="Get Networking Quote"
      />
      <Footer />
      <FloatingButtons />
    </>
  );
}
