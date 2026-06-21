import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Security System Integrator — India | Raksha Infra",
  description:
    "Pan-India security integration: CCTV, access control, fire safety, and networking under one roof. 500+ projects across 15+ cities.",
};

export default function Page() {
  const data = getLandingPageBySlug("security-system-integrator-india")!;
  return <SEOLandingTemplate data={data} />;
}
