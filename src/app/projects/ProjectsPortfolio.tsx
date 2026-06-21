"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { projects } from "@/lib/data/projects";
import { MapPin, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const industries = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
const serviceTypes = ["All", ...Array.from(new Set(projects.map((p) => p.serviceType)))];

export function ProjectsPortfolio() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  const filteredProjects = projects.filter((p) => {
    const industryMatch = selectedIndustry === "All" || p.industry === selectedIndustry;
    const serviceMatch = selectedService === "All" || p.serviceType === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Our <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-lg text-grey-400 max-w-2xl mx-auto">
                500+ successful projects across CCTV, electrification, networking, and integrated
                security. See our work in action.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-6 px-4 border-b border-navy-700 sticky top-0 z-30 bg-navy-900/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="text-xs text-grey-400 uppercase tracking-wider mb-2 block">
                Industry
              </label>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedIndustry === ind
                        ? "bg-electric-500 text-white"
                        : "glass text-grey-300 hover:text-white hover:border-electric-500"
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="text-xs text-grey-400 uppercase tracking-wider mb-2 block">
                Service Type
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceTypes.map((svc) => (
                  <button
                    key={svc}
                    onClick={() => setSelectedService(svc)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedService === svc
                        ? "bg-electric-500 text-white"
                        : "glass text-grey-300 hover:text-white hover:border-electric-500"
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <React.Fragment key={project.slug}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block glass rounded-2xl p-6 glass-hover group h-full"
                    >
                      {/* Industry Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-medium">
                          {project.industry}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Location & Value */}
                      <div className="flex items-center gap-4 text-sm text-grey-400 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {project.location}
                        </span>
                        <span className="font-semibold text-white">{project.value}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 rounded bg-navy-700 text-xs text-grey-300"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>

                  {/* Inline CTA every 6 projects */}
                  {(i + 1) % 6 === 0 && i < filteredProjects.length - 1 && (
                    <motion.div
                      key={`cta-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="md:col-span-2 lg:col-span-3 glass rounded-2xl p-8 text-center"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        Want Similar Results for Your Facility?
                      </h3>
                      <p className="text-grey-400 mb-4">
                        Get a free site survey and customized proposal for your requirements.
                      </p>
                      <a
                        href="/rfq"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform"
                      >
                        Request Free Quote
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-grey-400 text-lg">
                  No projects found for this filter combination.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}


