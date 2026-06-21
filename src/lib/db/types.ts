export interface Lead {
  id?: string;
  name: string;
  email?: string;
  phone: string;
  company?: string;
  designation?: string;
  source: string;
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
  utmTerm?: string;
  notes?: string;
  score?: number;
  priority?: string;
  status?: string;
  assignedTo?: string;
  zohoLeadId?: string;
  zohoSynced?: boolean;
  zohoSyncedAt?: string;
  zohoSyncRetries?: number;
  whatsappSent?: boolean;
  createdAt?: string;
}

export interface RFQSubmission {
  id?: string;
  rfqNumber: string;
  leadId?: string;
  projectTitle: string;
  services: string[];
  projectLocation?: string;
  areaSqft?: string;
  numberOfBuildings?: string;
  description?: string;
  specifications?: string;
  budgetRange?: string;
  expectedStart?: string;
  expectedCompletion?: string;
  paymentTerms?: string;
  attachments?: { name: string; url: string; size: string; type: string }[];
  status?: string;
  createdAt?: string;
}

export interface ConversionEvent {
  id?: string;
  sessionId?: string;
  leadId?: string;
  eventType: string;
  eventPage?: string;
  eventData?: Record<string, unknown>;
  value?: number;
  ipAddress?: string;
  userAgent?: string;
  createdAt?: string;
}
