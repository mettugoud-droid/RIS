// Client-side conversion tracking utilities

type ConversionEvent =
  | "form_start"
  | "form_complete"
  | "cta_click"
  | "calculator_use"
  | "calculator_result"
  | "download_start"
  | "download_complete"
  | "whatsapp_click"
  | "call_click"
  | "rfq_start"
  | "rfq_complete"
  | "project_view"
  | "case_study_view";

interface TrackOptions {
  page?: string;
  value?: number;
  data?: Record<string, string | number>;
}

export function trackEvent(eventType: ConversionEvent, options?: TrackOptions) {
  // Send to our API
  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventType,
      eventPage: options?.page || window.location.pathname,
      value: options?.value,
      eventData: options?.data,
      sessionId: getSessionId(),
    }),
  }).catch(() => {});

  // Push to GA4 dataLayer
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).dataLayer) {
    ((window as unknown as Record<string, unknown[]>).dataLayer).push({
      event: eventType,
      event_category: "conversion",
      event_value: options?.value,
      ...options?.data,
    });
  }

  // Push to Meta Pixel
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).fbq) {
    const fbq = (window as unknown as Record<string, (...args: unknown[]) => void>).fbq;
    if (eventType === "form_complete" || eventType === "rfq_complete") {
      fbq("track", "Lead", { value: options?.value, currency: "INR" });
    }
    if (eventType === "rfq_complete") {
      fbq("track", "SubmitApplication");
    }
  }
}

// Generate/retrieve session ID
function getSessionId(): string {
  if (typeof window === "undefined") return "server";
  let sessionId = sessionStorage.getItem("ris_session");
  if (!sessionId) {
    sessionId = `s_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    sessionStorage.setItem("ris_session", sessionId);
  }
  return sessionId;
}

// Track UTM parameters
export function captureUTM(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem("ris_utm", JSON.stringify(utm));
  }
  return JSON.parse(sessionStorage.getItem("ris_utm") || "{}");
}
