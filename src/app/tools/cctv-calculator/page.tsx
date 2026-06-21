import type { Metadata } from "next";
import { CCTVCalculator } from "./CCTVCalculator";

export const metadata: Metadata = {
  title: "CCTV Camera Calculator | Raksha Integrated Solutions",
  description:
    "Calculate the number of CCTV cameras needed for your warehouse, factory, or office. Get instant recommendations based on area, entry points, and coverage requirements.",
};

export default function Page() {
  return <CCTVCalculator />;
}
