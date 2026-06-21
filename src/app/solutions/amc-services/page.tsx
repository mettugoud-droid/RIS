import type { Metadata } from "next";
import { AMCServicesPage } from "./AMCServicesPage";

export const metadata: Metadata = {
  title: "AMC Services - Annual Maintenance Contract | Raksha Integrated Solutions",
  description:
    "Comprehensive annual maintenance contracts for CCTV, electrical systems, networking, access control, and fire alarm systems. 24/7 support with guaranteed response time.",
  keywords: [
    "CCTV AMC services",
    "electrical AMC contract",
    "annual maintenance contract",
    "preventive maintenance",
    "24/7 technical support",
    "equipment maintenance services",
  ],
};

export default function Page() {
  return <AMCServicesPage />;
}
