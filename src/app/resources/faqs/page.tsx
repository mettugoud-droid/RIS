import type { Metadata } from "next";
import { FAQsPage } from "./FAQsPage";

export const metadata: Metadata = {
  title: "FAQs — Raksha Integrated Solutions",
  description:
    "Frequently asked questions about CCTV installation, industrial electrification, AMC services, and more. Get answers from India's leading infrastructure solutions provider.",
};

export default function Page() {
  return <FAQsPage />;
}
