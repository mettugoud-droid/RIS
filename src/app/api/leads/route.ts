import { NextRequest, NextResponse } from "next/server";
import {
  type Lead,
  calculateLeadScore,
  getLeadPriority,
  getAssignment,
  mapLeadToZoho,
  whatsappTemplates,
} from "@/lib/leads";

export async function POST(request: NextRequest) {
  try {
    const body: Lead = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.source) {
      return NextResponse.json(
        { error: "Name, phone, and source are required" },
        { status: 400 }
      );
    }

    // Calculate lead score and priority
    const score = calculateLeadScore(body);
    const priority = getLeadPriority(score);
    const assignedTo = getAssignment(score, body.source);

    // Create lead record (in production, save to database)
    const lead = {
      id: crypto.randomUUID(),
      ...body,
      score,
      priority,
      assignedTo,
      status: "new" as const,
      createdAt: new Date().toISOString(),
    };

    // Sync to Zoho CRM (async, don't block response)
    syncToZohoCRM(lead).catch(console.error);

    // Send WhatsApp welcome message (async)
    sendWhatsAppWelcome(lead).catch(console.error);

    // Track conversion event
    trackConversion({
      eventType: "lead_created",
      leadId: lead.id,
      source: body.source,
      value: estimateValue(body.budgetRange),
    });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: "Thank you! Our team will contact you within 2 hours.",
    });
  } catch (error) {
    console.error("Lead creation error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}

// Zoho CRM sync
async function syncToZohoCRM(lead: Lead & { score: number; priority: string }) {
  const ZOHO_API_URL = process.env.ZOHO_CRM_API_URL;
  const ZOHO_TOKEN = process.env.ZOHO_ACCESS_TOKEN;

  if (!ZOHO_API_URL || !ZOHO_TOKEN) {
    console.log("[CRM] Zoho not configured, skipping sync");
    return;
  }

  const zohoData = mapLeadToZoho(lead);

  try {
    const response = await fetch(`${ZOHO_API_URL}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${ZOHO_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [zohoData] }),
    });

    if (!response.ok) {
      throw new Error(`Zoho API error: ${response.status}`);
    }

    console.log("[CRM] Lead synced to Zoho successfully");
  } catch (error) {
    console.error("[CRM] Zoho sync failed:", error);
  }
}

// WhatsApp welcome message
async function sendWhatsAppWelcome(lead: Lead & { score: number }) {
  const WA_API_URL = process.env.WHATSAPP_API_URL;
  const WA_TOKEN = process.env.WHATSAPP_TOKEN;

  if (!WA_API_URL || !WA_TOKEN) {
    console.log("[WA] WhatsApp not configured, skipping");
    return;
  }

  const message = whatsappTemplates.welcome(
    lead.name.split(" ")[0],
    lead.serviceNeeded || "your project"
  );

  try {
    await fetch(`${WA_API_URL}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WA_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: lead.phone.replace(/\D/g, ""),
        type: "text",
        text: { body: message },
      }),
    });

    console.log("[WA] Welcome message sent");
  } catch (error) {
    console.error("[WA] Message failed:", error);
  }
}

// Conversion tracking
function trackConversion(event: {
  eventType: string;
  leadId: string;
  source: string;
  value?: number;
}) {
  // In production, save to database and push to GA4/GTM
  console.log("[Analytics] Conversion:", event);
}

// Estimate deal value from budget range
function estimateValue(budgetRange?: string): number {
  if (!budgetRange) return 500000; // Default ₹5L
  if (budgetRange.includes("Crore")) return 10000000;
  if (budgetRange.includes("50 Lakhs")) return 5000000;
  if (budgetRange.includes("15 Lakhs")) return 1500000;
  if (budgetRange.includes("5 Lakhs")) return 500000;
  return 500000;
}
