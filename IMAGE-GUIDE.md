# Image Replacement Guide — Raksha Integrated Solutions

## Overview

The website currently uses **free Unsplash stock images** as placeholders.
For maximum conversion with procurement teams, replace them with **real project photos**.

---

## Priority Order for Replacement

| Priority | Section | Impact on Conversion |
|---|---|---|
| P0 | Project portfolio images | HIGHEST — proves capability |
| P0 | Hero background | First impression |
| P1 | OEM brand logos (SVG) | Trust signal |
| P1 | Testimonial avatars | Social proof |
| P2 | Blog thumbnails | Content quality |
| P3 | Service page heroes | Context |

---

## Image Specifications

### 1. Project Portfolio Images (10 needed)

**Location:** Replace URLs in `src/lib/images.ts` → `projectImages`

| File Name | Dimensions | Format | What to Photograph |
|---|---|---|---|
| warehouse-cctv.jpg | 800x600px | JPG (< 200KB) | Camera installations in warehouse |
| industrial-panel.jpg | 800x600px | JPG (< 200KB) | HT/LT panel room |
| corporate-office.jpg | 800x600px | JPG (< 200KB) | Office with cameras/access points |
| cold-storage.jpg | 800x600px | JPG (< 200KB) | Cameras inside cold room |
| logistics-hub.jpg | 800x600px | JPG (< 200KB) | Large warehouse with cameras visible |
| pharma-access.jpg | 800x600px | JPG (< 200KB) | Biometric reader at cleanroom |
| mall-fire.jpg | 800x600px | JPG (< 200KB) | Fire alarm panel or detector |
| server-room.jpg | 800x600px | JPG (< 200KB) | Server racks with cabling |
| industrial-park.jpg | 800x600px | JPG (< 200KB) | Perimeter cameras / boom barrier |
| manufacturing.jpg | 800x600px | JPG (< 200KB) | Factory floor with cameras |

**Photography Tips:**
- Shoot during daytime for good lighting
- Include equipment brand names visible (Hikvision, Schneider)
- Show scale (person for reference if possible)
- Clean, organized installations look professional
- Wide-angle shots work best for portfolio

---

### 2. Hero Background Image/Video

**Location:** `src/components/sections/Hero.tsx` → Image src

| Option | Dimensions | Format | Content |
|---|---|---|---|
| Static image | 1920x1080px | JPG (< 500KB) | Warehouse interior with cameras |
| Video (better) | 1920x1080px | MP4 (< 5MB) | Slow pan of warehouse/control room |

**Best subjects for hero:**
- Warehouse aisle with cameras visible overhead
- Electrical panel room with LED indicators
- Control room with monitors showing camera feeds
- Time-lapse of installation work

---

### 3. OEM Brand Logos (12 needed)

**Location:** `src/components/trust/OEMPartners.tsx`

| Brand | Get From | Format |
|---|---|---|
| Hikvision | hikvision.com/press | SVG or PNG (transparent) |
| Dahua | dahuasecurity.com | SVG or PNG |
| CP Plus | cpplusworld.com | SVG or PNG |
| Honeywell | honeywell.com/brand | SVG or PNG |
| Bosch | boschsecurity.com | SVG or PNG |
| Schneider Electric | se.com/brand | SVG or PNG |
| ABB | abb.com/brand | SVG or PNG |
| Havells | havells.com | SVG or PNG |
| L&T | lntecc.com | SVG or PNG |
| D-Link | dlink.com | SVG or PNG |
| Cisco | cisco.com/brand | SVG or PNG |
| Ubiquiti | ui.com/brand | SVG or PNG |

**Specs:** 200x80px, transparent background, SVG preferred
**Store at:** `/public/brands/hikvision.svg`, `/public/brands/schneider.svg`, etc.

---

### 4. Testimonial Avatars (4 needed)

**Location:** `src/components/sections/Testimonials.tsx`

| Dimensions | Format | Notes |
|---|---|---|
| 200x200px | JPG (< 50KB) | Square, face-centered |

**Options:**
- Ask real clients for headshots
- Use LinkedIn profile photos (with permission)
- Use initials as fallback (already coded as backup)

---

### 5. Blog Thumbnails (10 needed)

**Location:** `src/app/blog/BlogListingPage.tsx`

| Dimensions | Format | Content |
|---|---|---|
| 800x450px (16:9) | JPG (< 150KB) | Related to article topic |

Can use Canva templates or stock photos for these.

---

### 6. Corporate Profile PDF Cover

**Location:** `src/app/downloads/corporate-profile/`

Create in Canva or InDesign:
- A4 size (210x297mm)
- Dark navy + electric blue theme
- Include: Logo, tagline, key stats
- 12-16 pages covering all services

---

## How to Replace Images

### Option A: Use Local Files (Best Performance)

1. Save images to `/public/images/projects/`
2. Update `src/lib/images.ts`:

```typescript
// Change FROM:
warehouseCCTV: "https://images.unsplash.com/photo-...",

// Change TO:
warehouseCCTV: "/images/projects/warehouse-cctv.jpg",
```

3. Run `npm run build` to verify

### Option B: Use a CDN (Cloudinary/Imgix)

1. Upload images to Cloudinary (free tier: 25GB)
2. Use Cloudinary URLs with auto-optimization:

```typescript
warehouseCCTV: "https://res.cloudinary.com/your-account/image/upload/w_800,q_auto/projects/warehouse-cctv.jpg",
```

3. Add Cloudinary to `next.config.ts` remotePatterns

---

## Image Optimization Checklist

- [ ] All images under 200KB (use tinypng.com to compress)
- [ ] WebP format preferred (Next.js auto-converts with Image component)
- [ ] Include alt text for SEO
- [ ] Use responsive sizes prop
- [ ] Hero image marked as priority={true}
- [ ] Lazy load all below-the-fold images (default behavior)

---

## Quick Start

1. Take 10 project photos on your phone (landscape mode)
2. Compress at tinypng.com
3. Upload to `/public/images/projects/`
4. Update URLs in `src/lib/images.ts`
5. Push to GitHub → Auto-deploys on Vercel

**Total time:** 30 minutes for a massive visual upgrade.
