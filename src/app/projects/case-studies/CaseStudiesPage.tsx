"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { projects } from "@/lib/data/projects";
import { ArrowRight, MapPin, Building2 } from "lucide-react";

const featuredProjects = projects.filter((p) => p.featured);

const industries = Array.from(new Set(featuredProjects.map((p) => p.industry)));

export function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.industry === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Case Studies</h1>
            <p className="text-grey-400 max-w-2xl mx-auto">
              Real projects, real results. Explore how we have delivered infrastructure solutions
              across industries and cities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === "All"
                  ? "bg-electric-500 text-white"
                  : "glass text-grey-300 hover:text-white"
              }`}
            >
              All
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === industry
                    ? "bg-electric-500 text-white"
                    : "glass text-grey-300 hover:text-white"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <a
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="glass rounded-2xl p-6 glass-hover group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-md bg-electric-500/10 text-xs font-medium text-electric-500">
                    {project.industry}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-navy-800 text-xs text-grey-400 border border-navy-600">
                    {project.serviceType}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-grey-400 mb-4 flex-1 line-clamp-2">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.metrics.slice(0, 3).map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs font-bold text-white">{metric.value}</div>
                      <div className="text-[10px] text-grey-500 uppercase">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-navy-700">
                  <div className="flex items-center gap-3 text-xs text-grey-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {project.client}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-electric-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-grey-400">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
