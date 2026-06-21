// ============================================
// IMAGE ASSETS — Raksha Integrated Solutions
// ============================================
// Using Unsplash for stock images (free, no attribution required for web use)
// Replace with real project photos for maximum conversion

export const images = {
  // === HERO ===
  hero: {
    warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    controlRoom: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
    electrical: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
    industrial: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
  },

  // === PROJECTS ===
  projects: {
    warehouseCCTV: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    industrialElec: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    corporateOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    coldStorage: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    logisticsHub: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    pharma: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    shoppingMall: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80",
    serverRoom: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    industrialPark: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
    manufacturing: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
  },

  // === SERVICES ===
  services: {
    cctv: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
    electrification: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    networking: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    accessControl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    fireAlarm: "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=600&q=80",
    amc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },

  // === INDUSTRIES ===
  industries: {
    warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    logistics: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    manufacturing: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
    corporate: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    coldStorage: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
    retail: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&q=80",
    pharma: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
    industrialPark: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
  },

  // === BLOG ===
  blog: {
    cctvCost: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    warehouseDesign: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    electrification: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    fireCompliance: "https://images.unsplash.com/photo-1618060932014-4deda4932554?w=800&q=80",
    accessControl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    amcChecklist: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    networking: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    coldStorage: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    lighting: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    perimeter: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  },

  // === TESTIMONIALS ===
  testimonials: {
    person1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    person2: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    person3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    person4: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },

  // === OG (Social Sharing) ===
  og: {
    default: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&q=80",
  },
};

// Project image mapping
export const projectImages: Record<string, string> = {
  "warehouse-cctv-120-camera-installation": images.projects.warehouseCCTV,
  "industrial-electrification-2mw-facility": images.projects.industrialElec,
  "corporate-office-security-upgrade": images.projects.corporateOffice,
  "cold-storage-surveillance-monitoring": images.projects.coldStorage,
  "3pl-multi-warehouse-surveillance": images.projects.logisticsHub,
  "pharma-cleanroom-access-control": images.projects.pharma,
  "shopping-mall-fire-alarm-pa-system": images.projects.shoppingMall,
  "warehouse-complete-electrification": images.projects.warehouseCCTV,
  "enterprise-networking-2000-nodes": images.projects.serverRoom,
  "industrial-park-perimeter-security": images.projects.industrialPark,
};
