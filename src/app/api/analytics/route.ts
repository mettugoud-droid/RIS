import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventType, eventPage, eventData, sessionId, value } = body;

    if (!eventType) {
      return NextResponse.json({ error: "eventType is required" }, { status: 400 });
    }

    // Track conversion event
    const event = {
      id: crypto.randomUUID(),
      sessionId: sessionId || "anonymous",
      eventType,
      eventPage: eventPage || "",
      eventData: eventData || {},
      value: value || 0,
      createdAt: new Date().toISOString(),
    };

    // In production: Save to database
    console.log("[Analytics] Event tracked:", event);

    // Push to GA4 server-side (in production)
    if (isConversionEvent(eventType)) {
      pushToGA4(event);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
  }
}

function isConversionEvent(type: string): boolean {
  return [
    "form_complete",
    "rfq_submit",
    "calculator_result",
    "download_complete",
    "whatsapp_click",
    "call_click",
  ].includes(type);
}

function pushToGA4(event: Record<string, unknown>) {
  const GA_MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID;
  const GA_API_SECRET = process.env.GA4_API_SECRET;

  if (!GA_MEASUREMENT_ID || !GA_API_SECRET) return;

  // GA4 Measurement Protocol
  fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
    {
      method: "POST",
      body: JSON.stringify({
        client_id: event.sessionId,
        events: [
          {
            name: event.eventType,
            params: {
              page_location: event.eventPage,
              value: event.value,
              ...((event.eventData || {}) as Record<string, unknown>),
            },
          },
        ],
      }),
    }
  ).catch(console.error);
}
