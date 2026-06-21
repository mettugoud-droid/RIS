import type { Metadata } from "next";
import { WarehouseCCTVPage } from "./WarehouseCCTVPage";

export const metadata: Metadata = {
  title: "Warehouse CCTV Installation | Raksha Integrated Solutions",
  description:
    "Professional warehouse CCTV installation services. IP cameras, NVR systems, remote monitoring for logistics, 3PL, and distribution centers. 500+ projects completed.",
  keywords: [
    "warehouse cctv installation",
    "warehouse surveillance system",
    "warehouse security cameras",
    "logistics cctv",
    "3PL warehouse monitoring",
    "IP camera installation warehouse",
  ],
};

export default function Page() {
  return <WarehouseCCTVPage />;
}
