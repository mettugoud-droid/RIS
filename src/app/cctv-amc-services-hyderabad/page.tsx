import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "CCTV AMC Services in Hyderabad | Raksha Infra",
  description:
    "Annual maintenance contracts for surveillance systems in Hyderabad. Preventive maintenance, 24/7 breakdown support, 2-hour response time, 99% uptime.",
};

export default function Page() {
  const data = getLandingPageBySlug("cctv-amc-services-hyderabad")!;
  return <SEOLandingTemplate data={data} />;
}
