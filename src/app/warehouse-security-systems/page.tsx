import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Complete Warehouse Security Systems | Raksha Infra",
  description:
    "End-to-end warehouse security: CCTV, access control, perimeter protection, and monitoring. 200+ warehouses secured with 99% uptime.",
};

export default function Page() {
  const data = getLandingPageBySlug("warehouse-security-systems")!;
  return <SEOLandingTemplate data={data} />;
}
