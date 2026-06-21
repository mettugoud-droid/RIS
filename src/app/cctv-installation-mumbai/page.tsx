import type { Metadata } from "next";
import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";

export const metadata: Metadata = {
  title: "CCTV Installation Services in Mumbai | Raksha Infra",
  description:
    "Warehouse, factory, and corporate CCTV systems in Mumbai. NVR with RAID storage, remote monitoring, AI analytics. Mumbai's trusted surveillance contractor.",
};

export default function Page() {
  const data = getLandingPageBySlug("cctv-installation-mumbai")!;
  return <SEOLandingTemplate data={data} />;
}
