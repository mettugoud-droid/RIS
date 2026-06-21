import type { Metadata } from "next";
import { IndustrialElectrificationPage } from "./IndustrialElectrificationPage";

export const metadata: Metadata = {
  title: "Industrial Electrification Contractor | Raksha Integrated Solutions",
  description:
    "Complete industrial electrification services including HT/LT panels, power distribution, bus bars, cable trays, earthing, and DG synchronization for factories and plants.",
  keywords: [
    "industrial electrification contractor",
    "HT LT panel installation",
    "factory electrical contractor",
    "power distribution system",
    "industrial electrical works",
    "bus bar installation",
  ],
};

export default function Page() {
  return <IndustrialElectrificationPage />;
}
