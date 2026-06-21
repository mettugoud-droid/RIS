"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import {
  Flame,
  Bell,
  Radio,
  Shield,
  MonitorPlay,
  FileCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Early Fire Detection",
    description: "Smoke, heat, and multi-sensor detectors that identify fire hazards in seconds, giving you critical time to respond.",
  },
  {
    icon: Bell,
    title: "Instant Alerting",
    description: "Audible and visual alarms, auto-dialer notifications, and integration with building management systems for immediate response.",
  },
  {
    icon: Radio,
    title: "PA & Voice Evacuation",
    description: "Public address systems with pre-recorded evacuation messages and live announcement capability for orderly building evacuation.",
  },
  {
    icon: Shield,
    title: "NBC Compliance",
    description: "All installations comply with National Building Code, local fire department requirements, and insurance regulations.",
  },
  {
    icon: MonitorPlay,
    title: "Centralized Monitoring",
    description: "Fire alarm control panels with zone-wise status, fault detection, and remote monitoring for multi-site facilities.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description: "Design drawings, zone charts, test certificates, and compliance documentation for regulatory approvals and insurance claims.",
  },
];

const solutions = [
  {
    title: "Conventional Systems",
    features: [
      "Zone-based fire detection",
      "Smoke & heat detectors",
      "Manual call points",
      "Sounder & flasher units",
      "Ideal for small-medium buildings",
    ],
  },
  {
    title: "Addressable Systems",
    features: [
      "Individual device identification",
      "Exact location pinpointing",
      "Loop-based architecture",
      "Advanced cause-effect programming",
      "Large buildings & campuses",
    ],
  },
  {
    title: "Suppression Systems",
    features: [
      "FM200 gas suppression (server rooms)",
      "CO2 suppression systems",
      "Water mist systems",
      "Sprinkler system design support",
      "Kitchen hood suppression",
    ],
  },
  {
    title: "PA & EVAC Systems",
    features: [
      "EN 54 compliant voice evacuation",
      "Multi-zone public address",
      "Background music + emergency override",
      "Fireman's microphone",
      "Battery backup (24hr standby)",
    ],
  },
  {
    title: "Integration Services",
    features: [
      "CCTV camera pop-up on alarm",
      "Access control auto door release",
      "Elevator recall to ground floor",
      "HVAC shutdown on fire event",
      "BMS integration",
    ],
  },
  {
    title: "Maintenance & Testing",
    features: [
      "Quarterly detector testing",
      "Annual system certification",
      "Battery replacement schedule",
      "False alarm investigation",
      "24/7 emergency support",
    ],
  },
];

const caseStudies = [
  {
    title: "Shopping Mall — 5 Floors",
    location: "Hyderabad, Telangana",
    scope: "Addressable system + EVAC + sprinkler coordination",
    result: "Fire NOC obtained in first attempt",
    value: "₹55 Lakhs",
  },
  {
    title: "Data Center",
    location: "Bangalore, Karnataka",
    scope: "VESDA + FM200 + addressable detection",
    result: "Zero false alarms in 2 years",
    value: "₹38 Lakhs",
  },
  {
    title: "Manufacturing Plant",
    location: "Chennai, Tamil Nadu",
    scope: "400+ detectors + PA system + BMS integration",
    result: "Insurance premium reduced 30%",
    value: "₹42 Lakhs",
  },
];

const faqs = [
  {
    question: "Conventional vs Addressable — which do I need?",
    answer: "Conventional systems are cost-effective for small buildings under 5000 sqft with simple layouts. Addressable systems are recommended for larger buildings, multi-floor structures, and facilities requiring precise alarm location identification. We assess and recommend during site survey.",
  },
  {
    question: "Will the fire alarm system help with our fire NOC?",
    answer: "Yes, we design all systems as per NBC (National Building Code) and local fire department requirements. We provide complete documentation including drawings, zone charts, and test certificates needed for fire NOC approval.",
  },
  {
    question: "How often should the system be maintained?",
    answer: "We recommend quarterly testing of all detectors and devices, annual comprehensive system testing with certification, and immediate attention to any fault conditions. Our AMC covers all this with guaranteed response times.",
  },
  {
    question: "Can false alarms be minimized?",
    answer: "Yes, through proper detector selection (choosing the right type for each environment), multi-criteria detection, confirmation protocols, and regular cleaning/maintenance. Addressable systems with advanced algorithms significantly reduce false alarms.",
  },
  {
    question: "Do you handle gas suppression for server rooms?",
    answer: "Yes, we install FM200, Novec 1230, and CO2 suppression systems for server rooms, electrical panels, and other high-value asset areas. These include VESDA (Very Early Smoke Detection Apparatus) for earliest possible detection.",
  },
];

export function FireAlarmPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        badge="FIRE SAFETY"
        title="Fire Alarm & Detection Systems for"
        highlight="Complete Safety"
        subtitle="Conventional and addressable fire detection, voice evacuation, gas suppression, and PA systems. NBC compliant installations with fire NOC documentation support."
        benefits={benefits}
        solutions={solutions}
        caseStudies={caseStudies}
        faqs={faqs}
        ctaText="Get Fire Safety Quote"
      />
      <Footer />
      <FloatingButtons />
    </>
  );
}
