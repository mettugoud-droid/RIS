"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import {
  Camera,
  Eye,
  Shield,
  Wifi,
  HardDrive,
  MonitorPlay,
} from "lucide-react";

const benefits = [
  {
    icon: Camera,
    title: "4K Ultra HD Coverage",
    description:
      "Crystal clear 4K resolution cameras that capture every detail across your warehouse floor, loading docks, and storage aisles.",
  },
  {
    icon: Eye,
    title: "24/7 Remote Monitoring",
    description:
      "Access live feeds and recordings from anywhere using mobile apps and desktop clients. Real-time alerts for suspicious activity.",
  },
  {
    icon: Shield,
    title: "Theft & Pilferage Prevention",
    description:
      "Strategic camera placement at entry/exit points, high-value zones, and blind spots reduces shrinkage by up to 40%.",
  },
  {
    icon: Wifi,
    title: "Smart Analytics & AI",
    description:
      "Motion detection, people counting, zone intrusion alerts, and heat mapping for operational intelligence.",
  },
  {
    icon: HardDrive,
    title: "30-90 Day Storage",
    description:
      "Enterprise-grade NVR systems with RAID storage ensuring 30 to 90 days of continuous recording with redundancy.",
  },
  {
    icon: MonitorPlay,
    title: "Centralized Management",
    description:
      "Single dashboard to manage cameras across multiple warehouses. Scalable architecture for future expansion.",
  },
];

const solutions = [
  {
    title: "Indoor Surveillance",
    features: [
      "Dome cameras for general floor coverage",
      "PTZ cameras for large open areas",
      "Fisheye cameras for 360-degree views",
      "Low-light cameras for poorly lit zones",
      "Anti-vandal cameras for high-risk areas",
    ],
  },
  {
    title: "Perimeter Security",
    features: [
      "Bullet cameras for long-range outdoor coverage",
      "IR cameras for night vision up to 80m",
      "License plate recognition (ANPR) at gates",
      "Thermal cameras for perimeter intrusion",
      "Integration with alarm systems",
    ],
  },
  {
    title: "Loading Dock Monitoring",
    features: [
      "High-resolution cameras at each dock door",
      "Vehicle number capture systems",
      "Time-lapse recording of loading activities",
      "Proof of delivery recording",
      "Integration with WMS systems",
    ],
  },
  {
    title: "Network Infrastructure",
    features: [
      "PoE switches for camera power & data",
      "Cat6 structured cabling throughout",
      "Fiber backbone for long distances",
      "Redundant network paths",
      "Network video recorders (NVR)",
    ],
  },
  {
    title: "Control Room Setup",
    features: [
      "Video wall displays",
      "Operator workstations",
      "Alarm management integration",
      "Visitor management integration",
      "UPS backup for 4+ hours",
    ],
  },
  {
    title: "Cloud & Remote Access",
    features: [
      "Cloud-based backup options",
      "Mobile app for iOS & Android",
      "Multi-site centralized monitoring",
      "Role-based access control",
      "Encrypted video streaming",
    ],
  },
];

const caseStudies = [
  {
    title: "XYZ Logistics — Mega Warehouse",
    location: "Hyderabad, Telangana",
    scope: "200+ cameras across 1,00,000 sqft",
    result: "40% reduction in pilferage",
    value: "₹45 Lakhs",
  },
  {
    title: "ABC Cold Chain — Multi-Site",
    location: "Mumbai & Pune",
    scope: "500 cameras across 8 facilities",
    result: "99.9% uptime, 60-day storage",
    value: "₹1.8 Crore",
  },
  {
    title: "DEF 3PL — Distribution Center",
    location: "Bangalore",
    scope: "120 cameras, ANPR at 6 gates",
    result: "Zero theft in 18 months",
    value: "₹28 Lakhs",
  },
];

const faqs = [
  {
    question: "How many cameras do I need for my warehouse?",
    answer:
      "The number depends on warehouse size, layout, entry points, and coverage requirements. As a general rule, you need 1 camera per 500-1000 sqft for indoor areas plus dedicated cameras at all entry/exit points. We provide a free site survey to give you an exact count.",
  },
  {
    question: "What type of cameras work best in warehouses?",
    answer:
      "We recommend a mix: dome cameras for general floor areas, PTZ cameras for large open spaces, bullet cameras for outdoor perimeter, and specialized cameras for loading docks. All should be IP-based with PoE for easy deployment and minimum 2MP resolution (4K preferred).",
  },
  {
    question: "How long can recordings be stored?",
    answer:
      "Storage duration depends on camera count, resolution, and NVR capacity. We typically design for 30-90 days of continuous recording. With H.265+ compression and motion-based recording, storage is optimized without losing critical footage.",
  },
  {
    question: "Can I access cameras remotely on my phone?",
    answer:
      "Absolutely. All our installations include mobile app setup for both iOS and Android. You can view live feeds, playback recordings, receive alerts, and even control PTZ cameras from anywhere with internet access.",
  },
  {
    question: "What is the warranty and AMC coverage?",
    answer:
      "We provide a 3-year manufacturer warranty on all cameras and equipment. Our AMC packages include preventive maintenance every quarter, firmware updates, camera cleaning, and 24/7 breakdown support with guaranteed 2-hour response time.",
  },
  {
    question: "How long does installation take?",
    answer:
      "For a typical 50,000 sqft warehouse with 80-100 cameras, installation takes 2-3 weeks from cable laying to final commissioning. We work in phases to minimize disruption to your operations.",
  },
];

export function WarehouseCCTVPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        badge="WAREHOUSE SURVEILLANCE"
        title="Enterprise CCTV for"
        highlight="Warehouses & Logistics"
        subtitle="Comprehensive IP surveillance systems designed for large-scale warehouses, distribution centers, and logistics hubs. From site survey to installation to 24/7 AMC support."
        benefits={benefits}
        solutions={solutions}
        caseStudies={caseStudies}
        faqs={faqs}
        ctaText="Get Free CCTV Survey"
      />
      <Footer />
      <FloatingButtons />
    </>
  );
}
