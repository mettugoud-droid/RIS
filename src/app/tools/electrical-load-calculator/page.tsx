import type { Metadata } from "next";
import { ElectricalLoadCalculator } from "./ElectricalLoadCalculator";

export const metadata: Metadata = {
  title: "Electrical Load Calculator | Raksha Integrated Solutions",
  description:
    "Calculate your facility's electrical load requirements. Get recommendations for transformer capacity, panel sizing, and power distribution infrastructure.",
};

export default function Page() {
  return <ElectricalLoadCalculator />;
}
