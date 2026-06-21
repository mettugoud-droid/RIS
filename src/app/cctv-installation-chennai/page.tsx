import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "CCTV Installation Company in Chennai | Raksha Infra",
  description:
    "Industrial surveillance, warehouse monitoring, and corporate security cameras across Chennai & Tamil Nadu. Free survey, 3-year warranty.",
};

export default function Page() {
  const data = getLandingPageBySlug("cctv-installation-chennai")!;
  return <SEOLandingTemplate data={data} />;
}
