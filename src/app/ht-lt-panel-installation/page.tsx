import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "HT & LT Panel Installation Services | Raksha Infra",
  description:
    "Design, supply, and installation of HT panels (11kV/33kV) and LT distribution boards. 500+ panels installed, 100% type-tested assemblies.",
};

export default function Page() {
  const data = getLandingPageBySlug("ht-lt-panel-installation")!;
  return <SEOLandingTemplate data={data} />;
}
