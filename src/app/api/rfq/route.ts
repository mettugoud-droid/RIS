import { NextRequest, NextResponse } from "next/server";
import { generateRFQNumber, whatsappTemplates } from "@/lib/leads";

export interface RFQSubmission {
  // Contact
  name: string;
  email: string;
  phone: string;
  company: string;
  designation?: string;

  // Project
  projectTitle: string;
  services: string[];
  projectLocation: string;
  areaSqft: string;
  numberOfBuildings?: string;
  description: string;

  // Specifications
  specifications?: string;
  budgetRange?: string;
  expectedStart?: string;
  expectedCompletion?: string;
  paymentTerms?: string;

  // Files
  attachments?: { name: string; url: string; size: string }[];
}

export async function POST(request: NextRequest) {
  try {
    const body: RFQSubmission = await request.json();

    // Validate
    if (!body.name || !body.phone || !body.company || !body.services?.length) {
      return NextResponse.json(
        { error: "Required fields: name, phone, company, services" },
        { status: 400 }
      );
    }

    // Generate RFQ number
    const rfqNumber = generateRFQNumber();

    // Create RFQ record
    const rfq = {
      id: crypto.randomUUID(),
      rfqNumber,
      ...body,
      status: "submitted",
      createdAt: new Date().toISOString(),
    };

    // Also create a lead entry
    const leadPayload = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      designation: body.designation,
      source: "rfq" as const,
      sourcePage: "/rfq",
      industry: guessIndustry(body.description),
      serviceNeeded: body.services.join(", "),
      budgetRange: body.budgetRange,
      timeline: body.expectedStart,
      projectLocation: body.projectLocation,
      areaSqft: body.areaSqft,
    };

    // In production: Save to DB, create lead, sync CRM

    // Send RFQ confirmation via WhatsApp
    const waMessage = whatsappTemplates.rfq_received(
      body.name.split(" ")[0],
      rfqNumber
    );
    console.log("[RFQ] WhatsApp confirmation:", waMessage);

    // Send email confirmation (in production)
    console.log("[RFQ] Email confirmation sent to:", body.email);

    // Notify sales team (in production: Slack/email/WhatsApp group)
    console.log("[RFQ] Sales team notified - Priority: URGENT");

    return NextResponse.json({
      success: true,
      rfqNumber,
      message: `RFQ ${rfqNumber} submitted successfully. Our team will respond within 24 hours.`,
    });
  } catch (error) {
    console.error("RFQ submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit RFQ. Please try again." },
      { status: 500 }
    );
  }
}

function guessIndustry(description: string): string {
  const text = description.toLowerCase();
  if (text.includes("warehouse") || text.includes("logistics")) return "Warehouse / Logistics";
  if (text.includes("factory") || text.includes("manufacturing")) return "Manufacturing";
  if (text.includes("office") || text.includes("corporate")) return "Corporate Office";
  if (text.includes("cold") || text.includes("storage")) return "Cold Storage";
  if (text.includes("pharma") || text.includes("medical")) return "Pharma";
  if (text.includes("mall") || text.includes("retail")) return "Retail / Mall";
  return "Other";
}
