import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Fire Alarm Installation in Hyderabad | Raksha Infra",
  description:
    "Conventional & addressable fire detection, voice evacuation, and NBC-compliant systems in Hyderabad. 100% Fire NOC pass rate, 5000+ detectors installed.",
};

export default function Page() {
  const data = getLandingPageBySlug("fire-alarm-installation-hyderabad")!;
  return <SEOLandingTemplate data={data} />;
}
