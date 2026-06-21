// Lead management utilities and Zoho CRM integration

export interface Lead {
  name: string;
  email?: string;
  phone: string;
  company?: string;
  designation?: string;
  source: LeadSource;
  sourcePage?: string;
  industry?: string;
  serviceNeeded?: string;
  budgetRange?: string;
  timeline?: string;
  projectLocation?: string;
  areaSqft?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  notes?: string;
}

export type LeadSource =
  | "rfq"
  | "site_survey"
  | "calculator"
  | "download"
  | "whatsapp"
  | "landing_page"
  | "blog"
  | "contact"
  | "project_enquiry";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "proposal_sent"
  | "negotiation"
  | "won"
  | "lost";

// Lead scoring algorithm
export function calculateLeadScore(lead: Lead): number {
  let score = 0;

  // Budget signals
  if (lead.budgetRange?.includes("Crore")) score += 40;
  else if (lead.budgetRange?.includes("50 Lakhs")) score += 30;
  else if (lead.budgetRange?.includes("15 Lakhs")) score += 20;
  else if (lead.budgetRange) score += 10;

  // Source quality
  if (lead.source === "rfq") score += 25;
  else if (lead.source === "site_survey") score += 20;
  else if (lead.source === "project_enquiry") score += 15;
  else if (lead.source === "calculator") score += 10;
  else if (lead.source === "download") score += 5;

  // Completeness signals
  if (lead.email) score += 5;
  if (lead.company) score += 10;
  if (lead.designation) score += 5;
  if (lead.areaSqft && parseInt(lead.areaSqft) > 50000) score += 10;

  // Industry premium
  const premiumIndustries = ["warehouse", "logistics", "manufacturing", "pharma"];
  if (lead.industry && premiumIndustries.some((i) => lead.industry?.toLowerCase().includes(i))) {
    score += 10;
  }

  // Multiple services
  if (lead.serviceNeeded && lead.serviceNeeded.split(",").length > 2) score += 15;

  // Corporate email
  if (lead.email && !lead.email.includes("gmail") && !lead.email.includes("yahoo") && !lead.email.includes("hotmail")) {
    score += 10;
  }

  return Math.min(score, 100);
}

// Determine priority based on score
export function getLeadPriority(score: number): "low" | "medium" | "high" | "urgent" {
  if (score >= 70) return "urgent";
  if (score >= 50) return "high";
  if (score >= 30) return "medium";
  return "low";
}

// Determine assignment based on score
export function getAssignment(score: number, source: LeadSource): string {
  if (source === "rfq") return "sales_head";
  if (score >= 70) return "sales_head";
  if (score >= 40) return "senior_sales";
  return "inside_sales";
}

// Generate RFQ number
export function generateRFQNumber(): string {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const random = String(Math.floor(Math.random() * 9999)).padStart(4, "0");
  return `RFQ-${year}${month}-${random}`;
}

// WhatsApp message templates
export const whatsappTemplates = {
  welcome: (name: string, service: string) =>
    `Hi ${name}! 👋\n\nThank you for reaching out to Raksha Integrated Solutions.\n\nWe've received your enquiry for ${service} and our team will respond within 2 hours.\n\nMeanwhile, explore our projects: raksha.work/projects\n\n— Team Raksha`,

  rfq_received: (name: string, rfqNumber: string) =>
    `Hi ${name}! ✅\n\nYour RFQ (${rfqNumber}) has been received successfully.\n\nOur engineering team is reviewing your requirements. You'll receive a detailed proposal within 48 hours.\n\nFor urgent queries, call: +91 99999 99999\n\n— Team Raksha`,

  survey_booked: (name: string, date: string) =>
    `Hi ${name}! 📅\n\nYour FREE site survey has been confirmed.\n\n📍 Date: ${date}\n⏰ Our engineer will call 30 min before arrival.\n\nPlease ensure site access is available.\n\n— Team Raksha`,

  quote_sent: (name: string, projectTitle: string) =>
    `Hi ${name}! 📋\n\nGood news! Your quotation for "${projectTitle}" is ready.\n\nPlease check your email for the detailed proposal.\n\nFeel free to reply here with any questions!\n\n— Team Raksha`,

  follow_up: (name: string) =>
    `Hi ${name}! 👋\n\nJust checking in — did you get a chance to review our proposal?\n\nWe're happy to schedule a call to discuss any questions or modifications.\n\nReply here or call: +91 99999 99999\n\n— Team Raksha`,
};

// Zoho CRM field mapping
export function mapLeadToZoho(lead: Lead & { score: number; priority: string }) {
  const nameParts = lead.name.split(" ");
  return {
    First_Name: nameParts[0] || "",
    Last_Name: nameParts.slice(1).join(" ") || nameParts[0],
    Email: lead.email || "",
    Phone: lead.phone,
    Company: lead.company || "Unknown",
    Designation: lead.designation || "",
    Lead_Source: mapSourceToZoho(lead.source),
    Industry: lead.industry || "",
    Rating: lead.priority === "urgent" ? "Hot" : lead.priority === "high" ? "Warm" : "Cold",
    Description: `Service: ${lead.serviceNeeded || "N/A"}\nBudget: ${lead.budgetRange || "N/A"}\nLocation: ${lead.projectLocation || "N/A"}\nArea: ${lead.areaSqft || "N/A"} sqft\nTimeline: ${lead.timeline || "N/A"}\nSource Page: ${lead.sourcePage || "N/A"}`,
    // Custom fields
    Lead_Score: lead.score,
    Service_Interest: lead.serviceNeeded || "",
    Facility_Size: lead.areaSqft || "",
    Campaign_Source: lead.utmCampaign || "",
  };
}

function mapSourceToZoho(source: LeadSource): string {
  const map: Record<LeadSource, string> = {
    rfq: "RFQ Submission",
    site_survey: "Site Survey Request",
    calculator: "Online Calculator",
    download: "Content Download",
    whatsapp: "WhatsApp",
    landing_page: "SEO Landing Page",
    blog: "Blog / Content",
    contact: "Contact Form",
    project_enquiry: "Project Enquiry",
  };
  return map[source] || "Website";
}
