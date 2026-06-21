"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import type { Project } from "@/lib/data/projects";
import { projects } from "@/lib/data/projects";
import {
  MapPin,
  Building2,
  Calendar,
  IndianRupee,
  ArrowRight,
  Phone,
  Check,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Tag,
} from "lucide-react";
import Link from "next/link";

export function ProjectDetailPage({ project }: { project: Project }) {
  const relatedProjects = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        (p.industry === project.industry || p.serviceType === project.serviceType)
    )
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 text-sm font-medium">
                  {project.industry}
                </span>
                <span className="px-3 py-1 rounded-full glass text-grey-300 text-sm">
                  {project.serviceType}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 max-w-4xl">
                {project.title}
              </h1>
              <p className="text-lg text-grey-400 max-w-3xl mb-6">{project.summary}</p>
              <div className="flex flex-wrap gap-6 text-sm text-grey-400">
                <span className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-electric-500" />
                  {project.client}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-electric-500" />
                  {project.location}
                </span>
                <span className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-electric-500" />
                  {project.value}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-electric-500" />
                  {project.duration}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Row */}
        <section className="py-10 px-4 border-t border-navy-700">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center glass rounded-xl p-4"
              >
                <div className="text-2xl font-extrabold text-white">{metric.value}</div>
                <p className="text-xs text-grey-400 uppercase tracking-wider mt-1">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                  <h2 className="text-xl font-bold text-white">The Challenge</h2>
                </div>
                <p className="text-grey-400 leading-relaxed">{project.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-electric-500" />
                  <h2 className="text-xl font-bold text-white">Our Solution</h2>
                </div>
                <p className="text-grey-400 leading-relaxed">{project.solution}</p>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-success" />
                  <h2 className="text-xl font-bold text-white">Results</h2>
                </div>
                <div className="space-y-3">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-grey-300">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">Project Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="aspect-video rounded-xl bg-navy-800 border border-navy-600 flex items-center justify-center"
                    >
                      <span className="text-grey-500 text-sm">Photo {n}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    Want Similar Results?
                  </h3>
                  <p className="text-sm text-grey-400 mb-6">
                    Get a free site survey and customized proposal for your{" "}
                    {project.serviceType.toLowerCase()} requirements.
                  </p>
                  <a
                    href="/rfq"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-electric-500/20 mb-3"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+919999999999"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-grey-600 text-white font-semibold hover:border-electric-500 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>

                  {/* Tags */}
                  <div className="mt-6 pt-6 border-t border-navy-700">
                    <p className="text-xs text-grey-400 uppercase tracking-wider mb-3">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 rounded bg-navy-700 text-xs text-grey-300"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 px-4 border-t border-navy-700">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Related Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((rp, i) => (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link
                      href={`/projects/${rp.slug}`}
                      className="block glass rounded-2xl p-6 glass-hover group h-full"
                    >
                      <span className="px-2.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-medium">
                        {rp.industry}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-electric-400 transition-colors">
                        {rp.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-grey-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rp.location}
                        </span>
                        <span className="font-semibold text-white">{rp.value}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
