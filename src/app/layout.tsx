import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TrackingScripts } from "@/components/analytics/TrackingScripts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raksha Integrated Solutions | Industrial CCTV & Electrification Experts",
  description:
    "India's leading industrial CCTV installation & electrification contractor. Warehouse surveillance, industrial power distribution, networking, and AMC services. 500+ projects completed across 15+ cities.",
  keywords: [
    "warehouse cctv installation hyderabad",
    "industrial electrification contractor",
    "warehouse electrical contractor",
    "industrial security systems",
    "corporate office electrical works",
    "electrical AMC services",
    "structured cabling contractor",
    "fire alarm installation company",
  ],
  authors: [{ name: "Raksha Integrated Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://raksha.co.in",
    siteName: "Raksha Integrated Solutions",
    title: "Raksha Integrated Solutions | Industrial CCTV & Electrification Experts",
    description:
      "Designing, Executing and Maintaining Mission-Critical Infrastructure Across India. 500+ projects, 50+ enterprise clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raksha Integrated Solutions",
    description: "Industrial CCTV & Electrification Experts",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-navy-900 text-grey-100 antialiased">
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}
