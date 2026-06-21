import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "Fiber Optic Installation Services | Raksha Infra",
  description:
    "Single-mode & multi-mode fiber for campus networks, inter-building connectivity, and ISP infrastructure. 500+ km laid, OTDR tested, 25-year warranty.",
};

export default function Page() {
  const data = getLandingPageBySlug("fiber-optic-installation-services")!;
  return <SEOLandingTemplate data={data} />;
}
