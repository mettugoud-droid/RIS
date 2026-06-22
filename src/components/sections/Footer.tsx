"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  Solutions: [
    { label: "CCTV Solutions", href: "/solutions/warehouse-cctv-installation" },
    { label: "Industrial Electrification", href: "/solutions/industrial-electrification" },
    { label: "Warehouse Electrification", href: "/solutions/warehouse-electrification" },
    { label: "Networking Solutions", href: "/solutions/networking-solutions" },
    { label: "Access Control", href: "/solutions/access-control-systems" },
    { label: "Fire Alarm Systems", href: "/solutions/fire-alarm-systems" },
    { label: "AMC Services", href: "/solutions/amc-services" },
  ],
  Industries: [
    { label: "Warehouses & Logistics", href: "/industries/warehouses-logistics" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Corporate Offices", href: "/industries/corporate-offices" },
    { label: "Cold Storage", href: "/industries/cold-storage" },
    { label: "Retail & Malls", href: "/industries/retail-malls" },
    { label: "Pharma", href: "/industries/pharma" },
    { label: "Industrial Parks", href: "/industries/industrial-parks" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Case Studies", href: "/projects/case-studies" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/about/partners" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "CCTV Calculator", href: "/tools/cctv-calculator" },
    { label: "Cost Estimator", href: "/tools/project-cost-estimator" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "Video Library", href: "/resources/videos" },
    { label: "FAQs", href: "/resources/faqs" },
    { label: "Site Survey", href: "/contact/book-site-survey" },
    { label: "Download Brochure", href: "/resources/brochure" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/raksha",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    hoverColor: "hover:bg-[#0077B5] hover:border-[#0077B5]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@raksha",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    hoverColor: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/raksha",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    hoverColor: "hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#bc1888] hover:border-transparent",
  },
  {
    label: "Google",
    href: "https://g.page/raksha",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
    hoverColor: "hover:bg-[#4285F4] hover:border-[#4285F4]",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t-4 border-[#D4A017]">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <Logo size="lg" />
            </div>

            <p className="text-sm text-grey-400 max-w-[280px] leading-relaxed mb-6">
              Securing & Powering Industrial Infrastructure. India&apos;s
              trusted partner for enterprise CCTV and electrification projects.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2.5 text-sm text-grey-300 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-electric-400 group-hover:brightness-125" />
                +91 99999 99999
              </a>
              <a
                href="mailto:info@raksha.work"
                className="flex items-center gap-2.5 text-sm text-grey-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-electric-400 group-hover:brightness-125" />
                info@raksha.work
              </a>
              <div className="flex items-center gap-2.5 text-sm text-grey-300">
                <MapPin className="w-4 h-4 text-electric-400 flex-shrink-0" />
                Hyderabad, Telangana, India
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-[10px] bg-white/5 border border-white/[0.08] flex items-center justify-center text-grey-400 hover:text-white transition-all duration-200 ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-[0.05em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-grey-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="py-10 border-b border-white/10">
          <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-white/5 bg-navy-800 flex items-center justify-center group cursor-pointer hover:border-electric-500/20 transition-colors">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-electric-500 mx-auto mb-2" />
              <p className="text-sm text-grey-400">
                Hyderabad, Telangana, India
              </p>
              <p className="text-xs text-[#94A3B8] mt-1">
                Click to open in Google Maps
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#94A3B8]">
            &copy; {new Date().getFullYear()} Raksha Integrated Solutions. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-[#94A3B8] hover:text-grey-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-[#94A3B8] hover:text-grey-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/sitemap.xml"
              className="text-sm text-[#94A3B8] hover:text-grey-300 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
