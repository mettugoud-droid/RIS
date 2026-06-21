import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Access Control System Installation | Raksha",
  description: "Biometric, RFID, boom barriers, turnstiles for offices and factories.",
};

const data = getLandingPageBySlug("access-control-installation");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
