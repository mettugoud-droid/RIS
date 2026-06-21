import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Projects } from "@/components/sections/Projects";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { OEMPartners } from "@/components/trust/OEMPartners";
import { WhyRaksha } from "@/components/trust/WhyRaksha";
import { Certifications } from "@/components/trust/Certifications";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

export default function Home() {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Certifications />
        <Services />
        <Industries />
        <OEMPartners />
        <Projects />
        <WhyRaksha />
        <WhyChoose />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
