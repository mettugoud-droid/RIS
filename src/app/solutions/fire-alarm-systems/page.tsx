import type { Metadata } from "next";
import { FireAlarmPage } from "./FireAlarmPage";

export const metadata: Metadata = {
  title: "Fire Alarm Systems Installation | Raksha Integrated Solutions",
  description:
    "Conventional and addressable fire alarm systems, smoke detectors, fire suppression, PA systems, and emergency evacuation solutions for commercial and industrial buildings.",
  keywords: [
    "fire alarm system installation",
    "addressable fire alarm",
    "smoke detector installation",
    "fire detection system",
    "PA system installation",
    "fire safety contractor",
  ],
};

export default function Page() {
  return <FireAlarmPage />;
}
