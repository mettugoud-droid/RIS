"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Calendar, Clock, ArrowRight, Tag, Mail } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: "cctv-installation-cost-guide-india-2024",
    title: "CCTV Installation Cost Guide for Warehouses & Factories (2024)",
    excerpt:
      "A comprehensive breakdown of CCTV installation costs in India — from camera types to NVR storage, labor, and AMC. Budget planning made easy.",
    category: "CCTV",
    readTime: "8 min",
    date: "2024-12-15",
    featured: true,
  },
  {
    slug: "warehouse-cctv-design-best-practices",
    title: "Warehouse CCTV Design: Camera Placement & Coverage Guide",
    excerpt:
      "Learn how to design an effective warehouse surveillance system — loading dock coverage, aisle cameras, blind spots, and storage considerations.",
    category: "CCTV",
    readTime: "10 min",
    date: "2024-12-01",
    featured: false,
  },
  {
    slug: "industrial-electrification-complete-guide",
    title: "Industrial Electrification: HT/LT Panels, Transformers & Power Planning",
    excerpt:
      "Everything you need to know about setting up electrical infrastructure for factories and warehouses — from HT yard to shop floor.",
    category: "Electrification",
    readTime: "12 min",
    date: "2024-11-20",
    featured: false,
  },
  {
    slug: "fire-alarm-compliance-nbc-india",
    title: "Fire Alarm Compliance: NBC, IS 2189, and Fire NOC Requirements",
    excerpt:
      "Navigate India's fire safety regulations confidently. Understand NBC norms, IS 2189 standards, and what you need for Fire NOC approval.",
    category: "Fire Safety",
    readTime: "7 min",
    date: "2024-11-10",
    featured: false,
  },
  {
    slug: "access-control-systems-comparison-2024",
    title: "Access Control Systems Compared: Biometric vs RFID vs Face Recognition",
    excerpt:
      "A detailed comparison of access control technologies for offices, factories, and warehouses — features, costs, and ideal use cases.",
    category: "Access Control",
    readTime: "9 min",
    date: "2024-11-01",
    featured: false,
  },
  {
    slug: "amc-checklist-surveillance-electrical",
    title: "AMC Checklist: What to Expect from Your CCTV & Electrical AMC Provider",
    excerpt:
      "Don't get shortchanged on your annual maintenance contract. Here's what a quality AMC should include for surveillance and electrical systems.",
    category: "AMC",
    readTime: "6 min",
    date: "2024-10-25",
    featured: false,
  },
  {
    slug: "structured-cabling-best-practices-enterprise",
    title: "Structured Cabling Best Practices for Enterprise Networks",
    excerpt:
      "From Cat6A selection to fiber backbone design — best practices for building a future-proof network infrastructure in corporate and industrial settings.",
    category: "Networking",
    readTime: "11 min",
    date: "2024-10-15",
    featured: false,
  },
  {
    slug: "cold-storage-security-camera-challenges",
    title: "Cold Storage CCTV: Solving Camera Fog, Condensation & Low-Temperature Challenges",
    excerpt:
      "Standard cameras fail in cold rooms. Learn about anti-fog technology, specialized housings, and temperature-rated equipment for cold storage surveillance.",
    category: "CCTV",
    readTime: "7 min",
    date: "2024-10-05",
    featured: false,
  },
  {
    slug: "industrial-led-lighting-design-warehouses",
    title: "Industrial LED Lighting Design for Warehouses: Lux Levels & Energy Savings",
    excerpt:
      "Achieve 500 lux uniformity while cutting energy costs by 40%. A guide to high-bay LED lighting design for warehouses and factories.",
    category: "Electrification",
    readTime: "8 min",
    date: "2024-09-28",
    featured: false,
  },
  {
    slug: "perimeter-security-industrial-parks",
    title: "Perimeter Security for Industrial Parks: Thermal Cameras, ANPR & Intrusion Detection",
    excerpt:
      "Comprehensive guide to securing large perimeters with thermal imaging, ANPR at gates, intrusion detection sensors, and central monitoring.",
    category: "CCTV",
    readTime: "9 min",
    date: "2024-09-15",
    featured: false,
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

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
                Infrastructure <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg text-grey-400 max-w-2xl mx-auto">
                Expert guides, cost breakdowns, and best practices for CCTV, electrification,
                networking, and security systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="px-4 pb-8">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-electric-500 text-white"
                    : "glass text-grey-300 hover:text-white hover:border-electric-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <section className="px-4 pb-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="block glass rounded-2xl p-8 md:p-12 glass-hover group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 text-sm font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full glass text-grey-300 text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-grey-400 mb-4 max-w-3xl">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-grey-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.slice(0, 6).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block glass rounded-2xl p-6 glass-hover group h-full"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-navy-700 text-xs text-grey-300">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-grey-400 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-grey-500 mt-auto">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 pb-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 text-center"
            >
              {subscribed ? (
                <div className="py-4">
                  <h3 className="text-xl font-bold text-white mb-2">You&apos;re In!</h3>
                  <p className="text-grey-400">
                    You&apos;ll receive our latest infrastructure insights every month.
                  </p>
                </div>
              ) : (
                <>
                  <Mail className="w-10 h-10 text-electric-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Get Infrastructure Insights
                  </h3>
                  <p className="text-sm text-grey-400 mb-6">
                    Monthly guides on CCTV, electrification, and security best practices. No spam.
                  </p>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder:text-grey-500 focus:outline-none focus:border-electric-500 transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg gradient-cta text-white font-semibold hover:scale-105 transition-transform whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Remaining posts */}
        {regularPosts.length > 6 && (
          <section className="px-4 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.slice(6).map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block glass rounded-2xl p-6 glass-hover group h-full"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-navy-700 text-xs text-grey-300">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-grey-400 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-grey-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
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
