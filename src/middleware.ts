import { NextRequest, NextResponse } from "next/server";

// === RATE LIMITING (In-Memory for Vercel Edge) ===
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // 5 requests per window
const RATE_WINDOW = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT) return true;
  return false;
}

// === BOT DETECTION ===
const BOT_USER_AGENTS = [
  "bot", "crawler", "spider", "scraper", "curl", "wget",
  "python-requests", "axios/0", "go-http-client", "java/",
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some((bot) => ua.includes(bot));
}

// === SECURITY HEADERS ===
function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self)"
  );
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://snap.licdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://www.zohoapis.in https://graph.facebook.com https://api.whatsapp.com; frame-src 'self' https://www.google.com https://www.youtube.com;"
  );
  return response;
}

// === HONEYPOT VALIDATION ===
function hasHoneypotFilled(body: Record<string, unknown>): boolean {
  // If hidden field "website" or "url" or "fax" is filled, it's a bot
  const honeypotFields = ["website", "url", "fax", "company_url", "honeypot"];
  return honeypotFields.some(
    (field) => body[field] && String(body[field]).length > 0
  );
}

// === MIDDLEWARE ===
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = request.headers.get("user-agent") || "";

  // Apply security headers to all responses
  const response = NextResponse.next();

  // Rate limit API routes
  if (pathname.startsWith("/api/leads") || pathname.startsWith("/api/rfq") || pathname.startsWith("/api/downloads")) {
    // Bot detection
    if (isBot(userAgent) && request.method === "POST") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403, headers: { "X-Frame-Options": "DENY" } }
      );
    }

    // Rate limiting
    if (request.method === "POST" && isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    // Honeypot check for POST requests
    if (request.method === "POST") {
      try {
        const clonedRequest = request.clone();
        const body = await clonedRequest.json();
        if (hasHoneypotFilled(body)) {
          // Silently accept but don't process (bot thinks it worked)
          return NextResponse.json({ success: true, leadId: "blocked" });
        }
      } catch {
        // Not JSON body, skip honeypot check
      }
    }
  }

  return addSecurityHeaders(response);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo|brands|images|files|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
