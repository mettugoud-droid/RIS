import type { Metadata } from "next";
import { RFQPage } from "./RFQPage";

export const metadata: Metadata = {
  title: "Submit RFQ - Request for Quotation | Raksha Integrated Solutions",
  description: "Submit your RFQ for CCTV, electrification, networking, or security projects. Get a detailed quotation within 48 hours. Upload BOQ, drawings, and specifications.",
};

export default function Page() {
  return <RFQPage />;
}
