"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

export interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceSolution {
  title: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  title: string;
  location: string;
  scope: string;
  result: string;
  value: string;
}

export interface ServicePageProps {
  // Hero
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  heroImage?: string;

  // Benefits
  benefits: ServiceBenefit[];

  // Solutions
  solutions: ServiceSolution[];

  // Case Studies
  caseStudies: CaseStudy[];

  // FAQ
  faqs: FAQ[];

  // SEO
  ctaText?: string;
}

export function ServicePageTemplate({
  badge,
  title,
  highlight,
  subtitle,
  benefits,
  solutions,
  caseStudies,
  faqs,
  ctaText = "Get Free Site Survey",
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* HERO SECTION */}
      <ServiceHero
        badge={badge}
        title={title}
        highlight={highlight}
        subtitle={subtitle}
        ctaText={ctaText}
      />

      {/* BENEFITS SECTION */}
      <BenefitsSection benefits={benefits} />

      {/* SOLUTIONS SECTION */}
      <SolutionsSection solutions={solutions} />

      {/* CASE STUDIES SECTION */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* FAQ SECTION */}
      <FAQSection faqs={faqs} />

      {/* BOTTOM CTA */}
      <BottomCTA ctaText={ctaText} />
    </div>
  );
}

/* ===== SUB-COMPONENTS ===== */

function ServiceHero({
  badge,
  title,
  highlight,
  subtitle,
  ctaText,
}: {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  ctaText: string;
}) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(0,102,255,0.06), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-6">
            {badge}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {title}{" "}
            <span className="gradient-text">{highlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-grey-400 leading-relaxed mb-10 max-w-2xl">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_60px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/20 hover:border-electric-500 hover:bg-electric-500/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Talk To Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection({ benefits }: { benefits: ServiceBenefit[] }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-navy-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
            KEY BENEFITS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why This Solution Matters
          </h2>
          <p className="text-lg text-grey-400 max-w-2xl mx-auto">
            Engineered for reliability, scalability, and long-term performance.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-electric-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-grey-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsSection({ solutions }: { solutions: ServiceSolution[] }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-navy-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
            OUR SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What We Deliver
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={staggerItem}
              className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4 pb-4 border-b border-[#E2E8F0]">
                {solution.title}
              </h3>
              <ul className="space-y-3">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-grey-300"
                  >
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-navy-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
            CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Projects, Real Results
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={staggerItem}
              className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-electric-500/20 to-navy-700 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-lg bg-[#E2E8F0]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-grey-400 mb-4">{study.location}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#475569]">Scope</span>
                    <span className="text-grey-300 font-medium">{study.scope}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#475569]">Result</span>
                    <span className="text-success font-medium">{study.result}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#475569]">Value</span>
                    <span className="text-electric-400 font-bold">{study.value}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-navy-800">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-500 uppercase tracking-[0.1em] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              variants={staggerItem}
              className="group bg-white border border-[#E2E8F0] shadow-sm rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-medium hover:text-electric-300 transition-colors list-none">
                {faq.question}
                <span className="text-electric-500 text-xl ml-4 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-grey-400 leading-relaxed border-t border-[#E2E8F0] pt-4">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BottomCTA({ ctaText }: { ctaText: string }) {
  return (
    <section
      id="lead-form"
      className="py-16 sm:py-24"
      style={{ background: "linear-gradient(135deg, #0F1629, #141D38)" }}
    >
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-grey-400 mb-10">
          Book a free site survey and get a detailed proposal within 48 hours.
        </p>

        {/* Lead Form */}
        <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-3xl p-8 text-left">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-grey-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-grey-300 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-grey-300 mb-2">
                Company *
              </label>
              <input
                type="text"
                placeholder="Your Company Pvt Ltd"
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-grey-300 mb-2">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your requirement..."
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#475569] focus:border-electric-500 focus:ring-4 focus:ring-electric-500/10 outline-none transition-all resize-y"
              />
            </div>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-cta shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
