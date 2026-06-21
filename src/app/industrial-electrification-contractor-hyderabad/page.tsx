import type { Metadata } from "next";
import { ElectrificationLanding } from "./ElectrificationLanding";

export const metadata: Metadata = {
  title: "Industrial Electrification Contractor Hyderabad | Raksha",
  description:
    "Top-rated industrial electrification contractor in Hyderabad. HT/LT panels, transformers, power distribution, DG synchronization for factories & warehouses. Free site survey.",
  keywords: [
    "industrial electrification contractor hyderabad",
    "electrical contractor hyderabad",
    "HT LT panel installation hyderabad",
    "factory electrical works hyderabad",
    "warehouse electrification hyderabad",
  ],
};

export default function Page() {
  return <ElectrificationLanding />;
}
