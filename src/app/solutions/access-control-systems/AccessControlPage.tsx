"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import {
  Fingerprint,
  CreditCard,
  DoorOpen,
  Users,
  Lock,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description:
      "Fingerprint, face recognition, and iris scanners for foolproof identity verification at all access points.",
  },
  {
    icon: CreditCard,
    title: "RFID & Smart Cards",
    description:
      "Proximity cards and smart card readers for quick, contactless access with multi-level permissions.",
  },
  {
    icon: DoorOpen,
    title: "Boom Barriers & Turnstiles",
    description:
      "Vehicle access control with ANPR-integrated boom barriers and pedestrian turnstiles for controlled entry.",
  },
  {
    icon: Users,
    title: "Visitor Management",
    description:
      "Digital visitor registration with pre-approval workflows, ID capture, badge printing, and host notification.",
  },
  {
    icon: Lock,
    title: "Zone-Based Restriction",
    description:
      "Multi-tier access levels for different zones — server rooms, labs, executive floors, and restricted areas.",
  },
  {
    icon: BarChart3,
    title: "Attendance & Reports",
    description:
      "Integrated time & attendance tracking with detailed reports, late alerts, and payroll system integration.",
  },
];

const solutions = [
  {
    title: "Biometric Systems",
    features: [
      "Fingerprint readers (optical & capacitive)",
      "Face recognition terminals",
      "Palm vein scanners",
      "Multi-factor authentication",
      "Anti-passback protection",
    ],
  },
  {
    title: "Card-Based Access",
    features: [
      "Proximity cards (125kHz / 13.56MHz)",
      "Smart cards with encryption",
      "Long-range RFID readers",
      "Mobile credential support",
      "Card + PIN dual authentication",
    ],
  },
  {
    title: "Vehicle Access",
    features: [
      "Automatic boom barriers",
      "Bollards and road blockers",
      "ANPR camera integration",
      "Weighbridge integration",
      "Parking management systems",
    ],
  },
  {
    title: "Pedestrian Access",
    features: [
      "Tripod turnstiles",
      "Full-height turnstiles",
      "Speed gates / flap barriers",
      "Swing gates for disabled access",
      "Mantrap / interlocking doors",
    ],
  },
  {
    title: "Software & Integration",
    features: [
      "Centralized access control software",
      "Multi-site management",
      "CCTV integration on events",
      "Fire alarm integration (auto-unlock)",
      "HR/ERP system integration",
    ],
  },
  {
    title: "Visitor Management",
    features: [
      "Digital registration kiosks",
      "Pre-registration via email/SMS",
      "Photo ID capture & badge print",
      "Host notification system",
      "Blacklist management",
    ],
  },
];

const caseStudies = [
  {
    title: "IT Campus — 5000 Employees",
    location: "Bangalore, Karnataka",
    scope: "120 access points + face recognition",
    result: "50% faster entry, zero tailgating",
    value: "₹42 Lakhs",
  },
  {
    title: "Pharma Manufacturing",
    location: "Hyderabad, Telangana",
    scope: "Cleanroom access + audit trail",
    result: "Full FDA compliance achieved",
    value: "₹18 Lakhs",
  },
  {
    title: "Logistics Park — 3 Buildings",
    location: "Mumbai, Maharashtra",
    scope: "Boom barriers + ANPR + visitor mgmt",
    result: "Vehicle throughput improved 3x",
    value: "₹32 Lakhs",
  },
];

const faqs = [
  {
    question: "Which biometric technology is best for our needs?",
    answer:
      "It depends on your environment. Fingerprint is most cost-effective for offices. Face recognition is ideal for contactless, high-throughput areas. Palm vein works best for industrial environments where fingers may be dirty or worn.",
  },
  {
    question: "Can access control integrate with our existing CCTV?",
    answer:
      "Yes, we integrate access events with CCTV to automatically pull up camera feeds when access is granted or denied. This provides visual verification and creates an audit trail combining access logs with video evidence.",
  },
  {
    question: "What happens during a power failure?",
    answer:
      "All our systems include battery backup (4-8 hours). Critical doors can be configured as fail-safe (unlock on power loss) or fail-secure (remain locked) based on safety requirements. Fire alarm integration ensures emergency egress.",
  },
  {
    question: "How many access points can one system manage?",
    answer:
      "Our enterprise controllers support up to 256 doors per controller and unlimited doors via software. Multi-site deployments are managed from a single centralized platform with real-time status monitoring.",
  },
  {
    question: "Can employees use their phones for access?",
    answer:
      "Yes, we deploy mobile credential solutions using Bluetooth Low Energy (BLE) and NFC. Employees can use their smartphones as access cards, with revocation capability managed from the admin panel.",
  },
];

export function AccessControlPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        badge="ACCESS CONTROL"
        title="Intelligent Access Control for"
        highlight="Secure Environments"
        subtitle="Biometric systems, smart cards, boom barriers, and visitor management solutions to protect your people, assets, and restricted areas."
        benefits={benefits}
        solutions={solutions}
        caseStudies={caseStudies}
        faqs={faqs}
        ctaText="Get Access Control Quote"
      />
      <Footer />
      <FloatingButtons />
    </>
  );
}
