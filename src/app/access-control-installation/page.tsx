import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Access Control System Installation | Raksha Infra",
  description:
    "Biometric, RFID, boom barriers, turnstiles, and face recognition for offices, factories, and restricted areas. Zero breach record, 5000+ readers deployed.",
};

export default function Page() {
  const data = getLandingPageBySlug("access-control-installation")!;
  return <SEOLandingTemplate data={data} />;
}
