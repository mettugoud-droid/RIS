import { SEOLandingTemplate } from "@/components/templates/SEOLandingTemplate";
import { getLandingPageBySlug } from "@/lib/data/landing-pages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Fire Alarm Installation Hyderabad | Raksha",
  description: "Conventional and addressable fire detection, voice evacuation in Hyderabad.",
};

const data = getLandingPageBySlug("fire-alarm-installation-hyderabad");

export default function Page() {
  if (!data) notFound();
  return <SEOLandingTemplate data={data} />;
}
