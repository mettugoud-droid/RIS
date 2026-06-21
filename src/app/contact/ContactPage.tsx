"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  MessageCircle,
  Building2,
  Headphones,
  Send,
} from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Sales & Enquiries", value: "+91 99999 99999", href: "tel:+919999999999", desc: "Mon–Sat, 9AM–7PM" },
  { icon: Headphones, label: "Emergency Support", value: "+91 99999 88888", href: "tel:+919999988888", desc: "24/7 for AMC clients" },
  { icon: Mail, label: "Email", value: "info@raksha.work", href: "mailto:info@raksha.work", desc: "Response within 2 hours" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999", desc: "Instant response" },
];

const serviceAreas = [
  "Hyderabad", "Bangalore", "Mumbai", "Pune", "Chennai",
  "Delhi NCR", "Kolkata", "Ahmedabad", "Vizag", "Vijayawada",
  "Coimbatore", "Kochi", "Indore", "Nagpur", "Jaipur",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    subject: "", message: "", honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Bot trap

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          source: "contact",
          notes: `Subject: ${formData.subject}\nMessage: ${formData.message}`,
        }),
      });
    } catch {
      // Silently handle
    }
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* HERO */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-lg text-grey-400 max-w-2xl mx-auto">
                Ready to discuss your project? Our team responds within 2 hours during business hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center glass-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-electric-500" />
                </div>
                <p className="text-xs text-grey-500 uppercase tracking-wider mb-1">{info.label}</p>
                <p className="text-base font-semibold text-white mb-1">{info.value}</p>
                <p className="text-xs text-grey-400">{info.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* FORM + MAP */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-grey-400 mb-8">Fill the form below and our team will get back to you within 2 hours.</p>

              {submitted ? (
                <div className="glass rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-grey-400">Our team will respond within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                  {/* Honeypot - hidden from humans */}
                  <input type="text" name="honeypot" value={formData.honeypot} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Full Name <span className="text-error">*</span></label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" className="w-full px-4 py-3.5 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:border-electric-500 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Phone <span className="text-error">*</span></label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3.5 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:border-electric-500 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Email</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com" className="w-full px-4 py-3.5 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:border-electric-500 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-grey-300 mb-2">Company</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your Company" className="w-full px-4 py-3.5 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:border-electric-500 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-navy-800 border border-navy-600 text-white focus:border-electric-500 focus:outline-none transition-colors appearance-none">
                      <option value="">Select Subject</option>
                      <option value="New Project Enquiry">New Project Enquiry</option>
                      <option value="Request for Quotation">Request for Quotation</option>
                      <option value="Site Survey Request">Site Survey Request</option>
                      <option value="AMC Enquiry">AMC Enquiry</option>
                      <option value="Partnership / Vendor">Partnership / Vendor</option>
                      <option value="Career Enquiry">Career Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-300 mb-2">Message <span className="text-error">*</span></label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project or requirement..." className="w-full px-4 py-3.5 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:border-electric-500 focus:outline-none transition-colors resize-y" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-lg hover:-translate-y-0.5 transition-all">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map + Office Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              {/* Office */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-electric-500" />
                  <h3 className="text-lg font-semibold text-white">Head Office</h3>
                </div>
                <div className="space-y-3 text-grey-400">
                  <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-electric-500 mt-1 flex-shrink-0" /> Hyderabad, Telangana, India</p>
                  <p className="flex items-start gap-2"><Clock className="w-4 h-4 text-electric-500 mt-1 flex-shrink-0" /> Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: Closed (Emergency support available)</p>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-navy-600 h-[250px] bg-navy-800 flex items-center justify-center group cursor-pointer hover:border-electric-500/30 transition-colors">
                <a href="https://maps.google.com/?q=Hyderabad+Telangana" target="_blank" rel="noopener noreferrer" className="text-center">
                  <MapPin className="w-10 h-10 text-electric-500 mx-auto mb-2" />
                  <p className="text-sm text-grey-400">Click to open in Google Maps</p>
                  <p className="text-xs text-grey-500 mt-1">Hyderabad, Telangana</p>
                </a>
              </div>

              {/* Service Areas */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-electric-500" /> Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((city) => (
                    <span key={city} className="px-3 py-1.5 rounded-full bg-navy-700 text-xs font-medium text-grey-300">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 px-4 border-t border-navy-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Prefer a Quick Call?</h2>
            <p className="text-grey-400 mb-8">Our project consultants are available Mon–Sat, 9AM–7PM.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-lg hover:-translate-y-0.5 transition-all">
                <Phone className="w-5 h-5" /> Call +91 99999 99999
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#25D366] shadow-lg hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

// Missing import fix
function Globe2(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  );
}
