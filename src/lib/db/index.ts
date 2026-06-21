// Database service layer with retry logic
// Uses in-memory fallback when DATABASE_URL is not configured

import type { Lead, RFQSubmission, ConversionEvent } from "./types";

// === STORAGE INTERFACE ===
interface StorageEngine {
  createLead(data: Lead): Promise<{ id: string }>;
  createRFQ(data: RFQSubmission): Promise<{ id: string }>;
  trackEvent(data: ConversionEvent): Promise<void>;
  getLeadById(id: string): Promise<Lead | null>;
  updateLeadZohoSync(id: string, zohoLeadId: string): Promise<void>;
  markLeadZohoFailed(id: string, retries: number): Promise<void>;
  getUnsyncedLeads(): Promise<Lead[]>;
}

// === IN-MEMORY STORAGE (Fallback when no DB) ===
const memoryStore: {
  leads: Map<string, Lead>;
  rfqs: Map<string, RFQSubmission>;
  events: ConversionEvent[];
} = {
  leads: new Map(),
  rfqs: new Map(),
  events: [],
};

const memoryEngine: StorageEngine = {
  async createLead(data) {
    const id = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const lead = { ...data, id, createdAt: new Date().toISOString() };
    memoryStore.leads.set(id, lead);
    console.log("[DB:Memory] Lead created:", id);
    return { id };
  },
  async createRFQ(data) {
    const id = `rfq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const rfq = { ...data, id, createdAt: new Date().toISOString() };
    memoryStore.rfqs.set(id, rfq);
    console.log("[DB:Memory] RFQ created:", id);
    return { id };
  },
  async trackEvent(data) {
    memoryStore.events.push({ ...data, createdAt: new Date().toISOString() });
  },
  async getLeadById(id) {
    return memoryStore.leads.get(id) || null;
  },
  async updateLeadZohoSync(id, zohoLeadId) {
    const lead = memoryStore.leads.get(id);
    if (lead) {
      lead.zohoSynced = true;
      lead.zohoLeadId = zohoLeadId;
      lead.zohoSyncedAt = new Date().toISOString();
    }
  },
  async markLeadZohoFailed(id, retries) {
    const lead = memoryStore.leads.get(id);
    if (lead) {
      lead.zohoSyncRetries = retries;
    }
  },
  async getUnsyncedLeads() {
    return Array.from(memoryStore.leads.values()).filter(
      (l) => !l.zohoSynced && (l.zohoSyncRetries || 0) < 5
    );
  },
};

// === DATABASE ENGINE (Prisma — when DATABASE_URL is set) ===
async function getPrismaEngine(): Promise<StorageEngine | null> {
  if (!process.env.DATABASE_URL) return null;

  try {
    // Dynamic import to avoid build errors when prisma isn't installed
    // @ts-expect-error — prisma client may not be installed yet
    const { PrismaClient } = await import("@prisma/client");
    const prisma = new PrismaClient();

    return {
      async createLead(data) {
        const lead = await prisma.lead.create({ data: data as never });
        return { id: lead.id };
      },
      async createRFQ(data) {
        const rfq = await prisma.rFQSubmission.create({ data: data as never });
        return { id: rfq.id };
      },
      async trackEvent(data) {
        await prisma.conversionEvent.create({ data: data as never });
      },
      async getLeadById(id) {
        return (await prisma.lead.findUnique({ where: { id } })) as Lead | null;
      },
      async updateLeadZohoSync(id, zohoLeadId) {
        await prisma.lead.update({
          where: { id },
          data: { zohoSynced: true, zohoLeadId, zohoSyncedAt: new Date() },
        });
      },
      async markLeadZohoFailed(id, retries) {
        await prisma.lead.update({
          where: { id },
          data: { zohoSyncRetries: retries },
        });
      },
      async getUnsyncedLeads() {
        const leads = await prisma.lead.findMany({
          where: { zohoSynced: false, zohoSyncRetries: { lt: 5 } },
          take: 50,
          orderBy: { createdAt: "asc" },
        });
        return leads as unknown as Lead[];
      },
    };
  } catch {
    console.warn("[DB] Prisma not available, using memory storage");
    return null;
  }
}

// === MAIN DATABASE SERVICE ===
let engine: StorageEngine | null = null;

async function getEngine(): Promise<StorageEngine> {
  if (engine) return engine;
  engine = (await getPrismaEngine()) || memoryEngine;
  return engine;
}

export const db = {
  async createLead(data: Lead) {
    const eng = await getEngine();
    return eng.createLead(data);
  },
  async createRFQ(data: RFQSubmission) {
    const eng = await getEngine();
    return eng.createRFQ(data);
  },
  async trackEvent(data: ConversionEvent) {
    const eng = await getEngine();
    return eng.trackEvent(data);
  },
  async getLeadById(id: string) {
    const eng = await getEngine();
    return eng.getLeadById(id);
  },
  async updateLeadZohoSync(id: string, zohoLeadId: string) {
    const eng = await getEngine();
    return eng.updateLeadZohoSync(id, zohoLeadId);
  },
  async markLeadZohoFailed(id: string, retries: number) {
    const eng = await getEngine();
    return eng.markLeadZohoFailed(id, retries);
  },
  async getUnsyncedLeads() {
    const eng = await getEngine();
    return eng.getUnsyncedLeads();
  },
};

// === ZOHO SYNC WITH RETRY ===
export async function syncLeadToZohoWithRetry(
  leadId: string,
  leadData: Lead,
  maxRetries = 3
): Promise<boolean> {
  const ZOHO_API_URL = process.env.ZOHO_CRM_API_URL;
  const ZOHO_TOKEN = process.env.ZOHO_ACCESS_TOKEN;

  if (!ZOHO_API_URL || !ZOHO_TOKEN) {
    console.log("[CRM] Zoho not configured, lead stored locally");
    return false;
  }

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(`${ZOHO_API_URL}/crm/v2/Leads`, {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${ZOHO_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [mapToZohoFields(leadData)],
        }),
      });

      if (response.ok) {
        const result = await response.json();
        const zohoId = result?.data?.[0]?.details?.id || "synced";
        await db.updateLeadZohoSync(leadId, zohoId);
        console.log(`[CRM] Lead ${leadId} synced to Zoho (attempt ${attempt})`);
        return true;
      }

      throw new Error(`Zoho API error: ${response.status}`);
    } catch (error) {
      console.error(`[CRM] Sync attempt ${attempt}/${maxRetries} failed:`, error);
      if (attempt === maxRetries) {
        await db.markLeadZohoFailed(leadId, attempt);
        console.error(`[CRM] Lead ${leadId} — all retries exhausted, stored locally for later sync`);
        return false;
      }
      // Exponential backoff: 1s, 2s, 4s
      await new Promise((r) => setTimeout(r, 1000 * Math.pow(2, attempt - 1)));
    }
  }
  return false;
}

function mapToZohoFields(lead: Lead): Record<string, unknown> {
  const nameParts = (lead.name || "").split(" ");
  return {
    First_Name: nameParts[0] || "",
    Last_Name: nameParts.slice(1).join(" ") || nameParts[0] || "Unknown",
    Email: lead.email || "",
    Phone: lead.phone || "",
    Company: lead.company || "Unknown",
    Designation: lead.designation || "",
    Lead_Source: lead.source || "Website",
    Industry: lead.industry || "",
    Description: `Service: ${lead.serviceNeeded || "N/A"}\nBudget: ${lead.budgetRange || "N/A"}\nLocation: ${lead.projectLocation || "N/A"}\nArea: ${lead.areaSqft || "N/A"} sqft\nSource Page: ${lead.sourcePage || "N/A"}`,
  };
}
