# Raksha Integrated Solutions — Website

**"Securing & Powering Industrial Infrastructure"**

Enterprise-grade website for Raksha Integrated Solutions — India's leading industrial CCTV installation & electrification contractor.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens + animations
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Homepage
├── components/
│   ├── sections/
│   │   ├── Header.tsx       # Sticky header + mega menu
│   │   ├── Hero.tsx         # Full-screen hero section
│   │   ├── TrustBar.tsx     # Animated stat counters
│   │   ├── Services.tsx     # Service cards grid
│   │   ├── Industries.tsx   # Industries hover grid
│   │   ├── Projects.tsx     # Filterable project portfolio
│   │   ├── WhyChoose.tsx    # Comparison table
│   │   ├── Testimonials.tsx # Client testimonial carousel
│   │   ├── LeadCapture.tsx  # 3-step lead form
│   │   └── Footer.tsx       # Mega footer
│   └── ui/
│       ├── NetworkDiagram.tsx  # Animated SVG network
│       └── FloatingButtons.tsx # WhatsApp + Call buttons
├── hooks/
│   ├── useInView.ts         # Intersection observer hook
│   └── useCountUp.ts        # Counter animation hook
└── lib/
    ├── utils.ts             # Utility functions
    └── animations.ts        # Framer Motion variants
```

## Features

- 9 animated homepage sections
- Mega menu with multi-column dropdown
- Interactive SVG network diagram
- Scroll-triggered counter animations
- Filterable project gallery with transitions
- 3-step multi-stage lead capture form
- Testimonial carousel with metrics
- Comparison table with animated checkmarks
- Glassmorphism design throughout
- Floating WhatsApp + Call CTAs
- Fully responsive (mobile, tablet, desktop)
- SEO-optimized metadata
- Accessibility-ready (ARIA labels, reduced motion support)

## Design System

- **Primary:** Dark Navy (#0A0E1A)
- **Accent:** Electric Blue (#0066FF)
- **Typography:** Inter (400-800)
- **Spacing:** 8px grid system
- **Radius:** 10-24px
- **Style:** Glassmorphism + Premium Gradients

## Deployment

Recommended: Deploy on [Vercel](https://vercel.com) for best Next.js performance.

```bash
npm run build
```

## License

Private — Raksha Integrated Solutions
