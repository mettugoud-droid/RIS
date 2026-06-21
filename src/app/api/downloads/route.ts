import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, downloadSlug } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Create lead from download request
    const leadPayload = {
      name,
      email,
      phone,
      company,
      source: "download" as const,
      sourcePage: `/downloads/${downloadSlug}`,
      notes: `Downloaded: ${downloadSlug}`,
    };

    // In production: Save lead, sync CRM, track event

    // Return download URL
    const downloadUrl = getDownloadUrl(downloadSlug);

    return NextResponse.json({
      success: true,
      downloadUrl,
      message: "Your download is ready!",
    });
  } catch (error) {
    console.error("Download request error:", error);
    return NextResponse.json(
      { error: "Failed to process download request." },
      { status: 500 }
    );
  }
}

function getDownloadUrl(slug: string): string {
  const downloads: Record<string, string> = {
    "corporate-profile": "/files/raksha-corporate-profile-2024.pdf",
    "cctv-design-guide": "/files/cctv-design-guide-warehouses.pdf",
    "electrical-checklist": "/files/electrical-infrastructure-checklist.pdf",
    "case-study-xyz": "/files/case-study-xyz-logistics.pdf",
  };
  return downloads[slug] || "/files/raksha-corporate-profile-2024.pdf";
}
