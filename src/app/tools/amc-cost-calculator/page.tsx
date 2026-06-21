import type { Metadata } from "next";
import { AMCCostCalculator } from "./AMCCostCalculator";

export const metadata: Metadata = {
  title: "AMC Cost Calculator | Raksha Integrated Solutions",
  description:
    "Calculate your annual maintenance contract cost for CCTV, electrical, networking, and security systems. Get instant AMC pricing based on your equipment inventory.",
};

export default function Page() {
  return <AMCCostCalculator />;
}
