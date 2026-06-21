export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  image: string;
  author: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cctv-installation-cost-guide-india-2024",
    title: "CCTV Installation Cost Guide for Warehouses & Factories (2024)",
    excerpt: "A comprehensive breakdown of CCTV installation costs in India — from camera types to NVR storage, labor, and AMC.",
    category: "CCTV",
    readTime: "8 min",
    date: "2024-12-15",
    featured: true,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    author: "Raksha Engineering Team",
    tags: ["CCTV", "Cost Guide", "Warehouse", "Budget"],
    metaTitle: "CCTV Installation Cost in India 2024 | Warehouse & Factory Guide",
    metaDescription: "Complete CCTV installation cost breakdown for Indian warehouses and factories. Camera prices, NVR costs, cabling, labor, and AMC charges explained.",
    content: `## How Much Does CCTV Installation Cost in India?

The cost of CCTV installation varies significantly based on facility size, camera quality, storage requirements, and infrastructure complexity. Here's a detailed breakdown for 2024.

## Camera Costs

| Camera Type | Price Range (per unit) | Best For |
|---|---|---|
| 2MP Dome (Indoor) | ₹2,500 – ₹5,000 | Office corridors, general areas |
| 4MP Dome (Indoor) | ₹4,000 – ₹8,000 | Warehouse aisles, storage zones |
| 4K Dome (Indoor) | ₹8,000 – ₹15,000 | High-value zones, compliance |
| 2MP Bullet (Outdoor) | ₹3,000 – ₹6,000 | Perimeter, parking |
| 4MP Bullet (Outdoor) | ₹5,000 – ₹10,000 | Loading docks, gates |
| PTZ Camera | ₹15,000 – ₹45,000 | Large open areas, tracking |
| ANPR Camera | ₹25,000 – ₹60,000 | Vehicle entry gates |

## NVR & Storage Costs

| Component | Price Range |
|---|---|
| 8-Channel NVR | ₹8,000 – ₹15,000 |
| 16-Channel NVR | ₹15,000 – ₹30,000 |
| 32-Channel NVR | ₹25,000 – ₹50,000 |
| 64-Channel NVR | ₹50,000 – ₹1,00,000 |
| Hard Disk (per TB) | ₹4,000 – ₹6,000 |

**Storage calculation:** For 30 days with 50 cameras at 4MP, you need approximately 50TB of storage.

## Infrastructure Costs

| Item | Cost Per Camera Point |
|---|---|
| Cat6 Cable + Conduit | ₹1,500 – ₹3,000 |
| PoE Switch Port | ₹1,000 – ₹2,000 |
| Cable Tray (per meter) | ₹200 – ₹500 |
| Junction Box | ₹100 – ₹300 |

## Labor & Installation

| Service | Cost |
|---|---|
| Installation per camera | ₹1,500 – ₹3,000 |
| NVR setup & configuration | ₹5,000 – ₹10,000 |
| Network configuration | ₹10,000 – ₹25,000 |
| Remote access setup | ₹5,000 – ₹10,000 |
| Testing & commissioning | ₹5,000 – ₹15,000 |

## Total Project Cost Examples

| Facility | Cameras | Estimated Total |
|---|---|---|
| Small warehouse (10,000 sqft) | 20-30 | ₹3 – 5 Lakhs |
| Medium warehouse (50,000 sqft) | 60-80 | ₹10 – 15 Lakhs |
| Large warehouse (1,00,000 sqft) | 100-150 | ₹20 – 45 Lakhs |
| Multi-site (5 locations) | 300-500 | ₹80L – 2 Crore |

## AMC Costs (Annual)

Typically 8-15% of equipment value per year. For a ₹20 Lakh installation, expect ₹1.6 – 3 Lakhs per year for comprehensive AMC.

## How to Get an Accurate Quote

Every facility is different. The most accurate way to budget is:

1. **Free site survey** — Our engineers assess your facility
2. **Custom design** — Camera placement optimized for your layout
3. **Detailed BOQ** — Itemized quotation with all components

[Get your free site survey →](/rfq)

## Key Factors That Affect Cost

- **Resolution:** 4K costs 2-3x more than 2MP
- **Storage duration:** 90 days costs 3x more than 30 days
- **Cable distance:** Longer runs need fiber (more expensive)
- **Environment:** Outdoor, dusty, or cold environments need specialized cameras
- **Analytics:** AI features (face detection, counting) add 20-40% to camera cost

## Our Recommendation

For warehouses, we recommend **4MP cameras with 45-day storage** as the sweet spot between cost and quality. This provides clear identification footage while keeping storage costs manageable.

---

*Need a precise quote? [Contact our team](/contact) or use our [CCTV Calculator](/tools/cctv-calculator) for an instant estimate.*`,
  },
  {
    slug: "warehouse-cctv-design-best-practices",
    title: "Warehouse CCTV Design: Camera Placement & Coverage Guide",
    excerpt: "Learn how to design an effective warehouse surveillance system — loading dock coverage, aisle cameras, blind spots, and storage considerations.",
    category: "CCTV",
    readTime: "10 min",
    date: "2024-12-01",
    featured: false,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    author: "Raksha Engineering Team",
    tags: ["CCTV", "Warehouse", "Design", "Camera Placement"],
    metaTitle: "Warehouse CCTV Design Guide | Camera Placement Best Practices",
    metaDescription: "Expert guide on warehouse CCTV design — camera placement for loading docks, aisles, entry points, and high-value zones. Minimize blind spots.",
    content: `## Designing an Effective Warehouse Surveillance System

A well-designed CCTV system is the difference between catching incidents and missing them entirely. This guide covers the principles of warehouse camera placement.

## Critical Coverage Zones

### 1. Entry & Exit Points
Every door, gate, and dock must have dedicated cameras. Use **face-capture quality** (4MP minimum) positioned at eye level for identification.

- Main entrance: Face capture + overview
- Emergency exits: Coverage even if rarely used
- Vehicle gates: ANPR + overview camera

### 2. Loading Docks
The highest-risk area for pilferage. Each dock door needs:
- **Overhead camera** looking down at goods movement
- **Side camera** showing vehicle and personnel
- **ANPR** capturing truck license plates

### 3. Storage Aisles
Use **dome cameras at aisle intersections** to cover multiple aisles from one point. For long aisles, position cameras every 15-20 meters.

### 4. High-Value Zones
Pharmaceutical storage, electronics, or bonded areas need:
- Higher resolution (4K)
- Better frame rate (25fps vs 15fps)
- Dedicated recording channel

### 5. Perimeter
Outdoor bullet cameras with IR for night vision. Coverage overlap of 20% between adjacent cameras eliminates blind spots.

## Camera Count Formula

**General rule:** 1 camera per 500-800 sqft for indoor warehouse areas, plus dedicated cameras for:
- Each entry/exit point (×2 cameras)
- Each loading dock (×2 cameras)
- Each high-value zone (×1-2 cameras)
- Perimeter (1 per 20m)

## Common Mistakes to Avoid

1. **Backlit cameras** — Cameras facing windows or bright dock doors produce silhouettes
2. **Too few cameras** — Savings today means gaps in coverage forever
3. **Wrong lens type** — Wide-angle for general area, telephoto for identification
4. **Ignoring night shift** — Ensure IR range covers the actual distance needed
5. **No redundancy** — Critical areas should have overlapping camera coverage

## Network Infrastructure

For reliable IP camera systems:
- **PoE switches** at every 80m (Cat6 cable limit)
- **Dedicated VLAN** for cameras (separate from office network)
- **Redundant paths** — if one switch fails, cameras on other switch still record
- **UPS backup** — minimum 4 hours for switches and NVR

## Storage Planning

| Cameras | Resolution | 30 Days | 60 Days | 90 Days |
|---|---|---|---|---|
| 50 | 2MP | 15TB | 30TB | 45TB |
| 50 | 4MP | 30TB | 60TB | 90TB |
| 100 | 4MP | 60TB | 120TB | 180TB |

Use **H.265+ compression** to reduce storage by 50-70% vs H.264.

## Our Design Process

1. **Site survey** — Measure facility, identify risk zones
2. **Camera layout** — CAD drawing with camera positions and angles
3. **Infrastructure design** — Cable routes, switch locations, NVR room
4. **BOQ preparation** — Itemized list with specifications
5. **Client review** — Walk through design, make adjustments
6. **Installation** — Execute per approved design

---

*Want a professional camera layout designed for your warehouse? [Book a free site survey](/rfq) — our engineers will create a custom design within 48 hours.*`,
  },
  {
    slug: "industrial-electrification-complete-guide",
    title: "Industrial Electrification: HT/LT Panels, Transformers & Power Planning",
    excerpt: "Everything you need to know about setting up electrical infrastructure for factories and warehouses — from HT yard to shop floor.",
    category: "Electrification",
    readTime: "12 min",
    date: "2024-11-20",
    featured: false,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    author: "Raksha Engineering Team",
    tags: ["Electrification", "HT/LT", "Transformer", "Power"],
    metaTitle: "Industrial Electrification Guide | HT/LT Panels & Transformer Installation",
    metaDescription: "Complete guide to industrial electrification — HT/LT panel installation, transformer sizing, DG synchronization, earthing, and CEIG compliance.",
    content: `## Industrial Electrification — Complete Planning Guide

Setting up electrical infrastructure for a factory or warehouse is a complex engineering exercise. This guide walks you through the entire process.

## Step 1: Load Assessment

Before any design work, you need to know your total electrical load:

- **Connected load** — Sum of all equipment rated power (kW)
- **Demand load** — Connected load × Diversity factor (typically 0.6-0.8)
- **Future provision** — Add 20-30% for expansion

### Common Industrial Loads

| Equipment | Typical Load |
|---|---|
| CNC Machine | 10-25 kW |
| EOT Crane | 15-50 kW |
| Compressor | 5-15 kW |
| Welding Machine | 8-15 kW |
| HVAC (per ton) | 1.2-1.5 kW |
| Lighting (per 1000 sqft) | 1.5-2.5 kW |
| Conveyor | 3-7 kW |

## Step 2: Transformer Sizing

**Formula:** Transformer kVA = Demand Load (kW) / Power Factor

Standard transformer sizes: 100, 160, 200, 250, 315, 400, 500, 630, 750, 1000, 1250, 1500, 2000, 2500 kVA

**Rule:** Choose a transformer that is loaded to 60-80% at full demand. This allows for expansion and ensures efficiency.

## Step 3: HT/LT Panel Design

### HT Side (11kV/33kV)
- Ring Main Unit (RMU) or HT Panel
- Vacuum Circuit Breaker (VCB)
- CT/PT for metering
- Protection relays

### LT Side (415V)
- Main Distribution Board (MDB)
- Sub Main Distribution Boards (SMDB)
- Distribution Boards (DB) — one per area/floor
- Motor Control Centers (MCC)
- APFC Panel for power factor correction

## Step 4: DG Backup

For uninterrupted operations:
- DG capacity = 80% of transformer rating
- AMF (Auto Mains Failure) panel for auto changeover
- Changeover time: 10-15 seconds typical
- For critical loads: UPS + DG combination

## Step 5: Earthing & Protection

Mandatory for safety and CEIG compliance:
- **Plate earthing** or **pipe earthing** — minimum 2 earth pits
- **Lightning arrestors** — for buildings above 15m
- **Surge Protection Devices (SPD)** — at MDB level
- **Earth resistance** — must be less than 1 Ohm

## Step 6: Cable Sizing

Cable selection based on:
1. Current carrying capacity
2. Voltage drop (max 3% for main cables)
3. Short circuit withstand
4. Ambient temperature derating

## CEIG Compliance

All industrial installations above 100 kVA require CEIG (Chief Electrical Inspector) approval:

**Documents needed:**
- Single Line Diagram (SLD)
- Equipment specifications
- Test reports (insulation, earth resistance)
- Installation completion certificate
- Contractor license copy

**Timeline:** Submit documents → Inspection scheduled (2-4 weeks) → Approval issued

## Cost Estimates

| Component | Cost Range |
|---|---|
| Transformer (500 kVA) | ₹8-12 Lakhs |
| HT Panel | ₹3-6 Lakhs |
| LT Panel (MDB) | ₹2-5 Lakhs |
| DG Set (500 kVA) | ₹15-25 Lakhs |
| Cabling & Trays | ₹3-8 Lakhs |
| Earthing | ₹1-2 Lakhs |
| Lighting | ₹2-5 Lakhs |
| Labor & Commissioning | ₹3-8 Lakhs |

**Total for a 500 kVA installation:** ₹40-70 Lakhs (varies by complexity)

## Timeline

| Phase | Duration |
|---|---|
| Design & approval | 2-3 weeks |
| Procurement | 3-4 weeks |
| Civil works (foundations) | 1-2 weeks |
| Installation | 3-5 weeks |
| Testing & commissioning | 1 week |
| CEIG inspection | 2-4 weeks |
| **Total** | **12-18 weeks** |

---

*Planning an electrification project? Use our [Electrical Load Calculator](/tools/electrical-load-calculator) for instant sizing, or [contact us](/contact) for a detailed proposal.*`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
