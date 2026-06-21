import type { Metadata } from "next";
import { EmergencySupportPage } from "./EmergencySupportPage";

export const metadata: Metadata = {
  title: "24/7 Emergency Support — Raksha Integrated Solutions",
  description:
    "Round-the-clock emergency support for CCTV failures, electrical breakdowns, fire alarm emergencies, and network outages. 2-hour response guaranteed for AMC clients.",
};

export default function Page() {
  return <EmergencySupportPage />;
}
