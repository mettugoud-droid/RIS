import type { Metadata } from "next";
import { ThreePLWarehousesPage } from "./ThreePLWarehousesPage";

export const metadata: Metadata = {
  title: "Infrastructure Solutions for 3PL, Logistics & Warehouses | Raksha Infra",
  description:
    "Complete warehouse CCTV installation, logistics security solutions, warehouse electrification, and 3PL infrastructure solutions. 200+ warehouses secured across India.",
  keywords: [
    "warehouse cctv installation",
    "logistics security solutions",
    "warehouse electrification",
    "3PL infrastructure solutions",
    "warehouse surveillance",
    "logistics warehouse security",
  ],
};

export default function Page() {
  return <ThreePLWarehousesPage />;
}
