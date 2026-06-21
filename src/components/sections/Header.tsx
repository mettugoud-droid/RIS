"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Camera,
  Zap,
  Warehouse,
  Network,
  ShieldCheck,
  Flame,
  Wrench,
  Factory,
  Truck,
  Building2,
  Snowflake,
  ShoppingBag,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const solutionsMenu = [
  {
    category: "Surveillance",
    items: [
      { icon: Camera, title: "Warehouse CCTV", desc: "Enterprise IP surveillance", href: "/solutions/warehouse-cctv-installation" },
      { icon: Camera, title: "Industrial Surveillance", desc: "Factory & plant monitoring", href: "/solutions/industrial-surveillance" },
      { icon: Camera, title: "Corporate CCTV", desc: "Office security systems", href: "/solutions/corporate-cctv" },
    ],
  },
  {
    category: "Electrification",
    items: [
      { icon: Zap, title: "Industrial Electrification", desc: "HT/LT power systems", href: "/solutions/industrial-electrification" },
      { icon: Warehouse, title: "Warehouse Electrification", desc: "Complete power distribution", href: "/solutions/warehouse-electrification" },
      { icon: Zap, title: "Corporate Electrical", desc: "Office power infrastructure", href: "/solutions/corporate-electrical" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { icon: Network, title: "Structured Cabling", desc: "Cat6/Fiber networks", href: "/solutions/structured-cabling" },
      { icon: ShieldCheck, title: "Access Control", desc: "Biometric & RFID systems", href: "/solutions/access-control-systems" },
      { icon: Flame, title: "Fire Alarm Systems", desc: "Detection & alarm", href: "/solutions/fire-alarm-systems" },
    ],
  },
  {
    category: "Services",
    items: [
      { icon: Wrench, title: "AMC Services", desc: "Annual maintenance", href: "/solutions/amc-services" },
      { icon: Wrench, title: "Site Surveys", desc: "Free infrastructure audit", href: "/contact/book-site-survey" },
      { icon: Wrench, title: "Emergency Support", desc: "24/7 technical support", href: "/solutions/emergency-support" },
    ],
  },
];

const industriesMenu = [
  { icon: Warehouse, title: "Warehouses & Logistics", href: "/industries/warehouses-logistics" },
  { icon: Factory, title: "Manufacturing", href: "/industries/manufacturing" },
  { icon: Building2, title: "Corporate Offices", href: "/industries/corporate-offices" },
  { icon: Snowflake, title: "Cold Storage", href: "/industries/cold-storage" },
  { icon: ShoppingBag, title: "Retail & Malls", href: "/industries/retail-malls" },
  { icon: FlaskConical, title: "Pharma", href: "/industries/pharma" },
  { icon: Truck, title: "Facility Management", href: "/industries/facility-management" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[10000] transition-all duration-300",
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Logo size={scrolled ? "md" : "lg"} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenu("solutions")}
              onMouseLeave={() => setMegaMenu(null)}
            >
              <button className={cn("flex items-center gap-1 text-sm font-medium transition-colors", scrolled ? "text-navy-900 hover:text-brand-red" : "text-white hover:text-grey-300")}>
                Solutions
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    megaMenu === "solutions" && "rotate-180"
                  )}
                />
              </button>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenu("industries")}
              onMouseLeave={() => setMegaMenu(null)}
            >
              <button className={cn("flex items-center gap-1 text-sm font-medium transition-colors", scrolled ? "text-navy-900 hover:text-brand-red" : "text-white hover:text-grey-300")}>
                Industries
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    megaMenu === "industries" && "rotate-180"
                  )}
                />
              </button>
            </div>

            <a href="/projects" className={cn("text-sm font-medium transition-colors", scrolled ? "text-navy-900 hover:text-brand-red" : "text-white hover:text-grey-300")}>
              Projects
            </a>
            <a href="/resources/blog" className={cn("text-sm font-medium transition-colors", scrolled ? "text-navy-900 hover:text-brand-red" : "text-white hover:text-grey-300")}>
              Resources
            </a>
            <a href="/about" className={cn("text-sm font-medium transition-colors", scrolled ? "text-navy-900 hover:text-brand-red" : "text-white hover:text-grey-300")}>
              About
            </a>
            <a href="/contact" className={cn("text-sm font-medium transition-colors", scrolled ? "text-navy-900 hover:text-brand-red" : "text-white hover:text-grey-300")}>
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#site-audit"
            className={cn(
              "hidden lg:inline-flex items-center px-6 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
              scrolled
                ? "text-white bg-brand-red hover:bg-brand-red-dark"
                : "text-white bg-brand-red hover:bg-brand-red-dark"
            )}
          >
            Get Quote
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("lg:hidden w-10 h-10 flex items-center justify-center", scrolled ? "text-navy-900" : "text-white")}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mega Menu — Solutions */}
        <AnimatePresence>
          {megaMenu === "solutions" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-80px)] max-w-[1100px] mt-2 hidden lg:block"
              onMouseEnter={() => setMegaMenu("solutions")}
              onMouseLeave={() => setMegaMenu(null)}
            >
              <div className="bg-navy-800/98 backdrop-blur-2xl border border-white/[0.06] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8">
                <div className="grid grid-cols-4 gap-8">
                  {solutionsMenu.map((col) => (
                    <div key={col.category}>
                      <h4 className="text-xs font-semibold text-electric-400 uppercase tracking-[0.08em] mb-4 pb-3 border-b border-electric-500/15">
                        {col.category}
                      </h4>
                      <div className="space-y-1">
                        {col.items.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-electric-500/[0.08] transition-colors group"
                          >
                            <item.icon className="w-5 h-5 text-grey-400 group-hover:text-electric-400 mt-0.5 flex-shrink-0 transition-colors" />
                            <div>
                              <p className="text-sm font-medium text-grey-200 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-grey-500 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <p className="text-sm text-grey-400">Not sure what you need?</p>
                  <a
                    href="#site-audit"
                    className="flex items-center gap-1.5 text-sm font-medium text-electric-400 hover:text-white transition-colors"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mega Menu — Industries */}
        <AnimatePresence>
          {megaMenu === "industries" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-80px)] max-w-[700px] mt-2 hidden lg:block"
              onMouseEnter={() => setMegaMenu("industries")}
              onMouseLeave={() => setMegaMenu(null)}
            >
              <div className="bg-navy-800/98 backdrop-blur-2xl border border-white/[0.06] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8">
                <div className="grid grid-cols-2 gap-2">
                  {industriesMenu.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-[10px] hover:bg-electric-500/[0.08] transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-grey-400 group-hover:text-electric-400 transition-colors" />
                      <span className="text-sm font-medium text-grey-200 group-hover:text-white">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/5">
                  <a
                    href="/industries"
                    className="flex items-center gap-1.5 text-sm font-medium text-electric-400 hover:text-white transition-colors"
                  >
                    View All Industries
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-navy-900 pt-20 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <nav className="space-y-1">
              <a
                href="/solutions"
                className="block text-2xl font-semibold text-white py-4 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Solutions
              </a>
              <a
                href="/industries"
                className="block text-2xl font-semibold text-white py-4 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Industries
              </a>
              <a
                href="/projects"
                className="block text-2xl font-semibold text-white py-4 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </a>
              <a
                href="/resources/blog"
                className="block text-2xl font-semibold text-white py-4 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Resources
              </a>
              <a
                href="/about"
                className="block text-2xl font-semibold text-white py-4 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-2xl font-semibold text-white py-4 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8">
              <a
                href="#site-audit"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)]"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
