"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Phone, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/data/blog-posts";
import { blogPosts } from "@/lib/data/blog-posts";

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown-to-HTML renderer for headings, tables, lists, bold, links
  const lines = content.split("\n");
  const html: string[] = [];
  let inTable = false;
  let inList = false;

  for (const line of lines) {
    // Tables
    if (line.startsWith("|") && line.endsWith("|")) {
      if (!inTable) { html.push('<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">'); inTable = true; }
      if (line.includes("---")) continue; // separator row
      const cells = line.split("|").filter(Boolean).map((c) => c.trim());
      const tag = html.filter((h) => h.includes("<tr>")).length === 0 ? "th" : "td";
      html.push(`<tr>${cells.map((c) => `<${tag} class="px-3 py-2 border border-navy-600 ${tag === "th" ? "bg-navy-700 text-grey-300 font-medium" : "text-grey-400"}">${c}</${tag}>`).join("")}</tr>`);
      continue;
    } else if (inTable) { html.push("</table></div>"); inTable = false; }

    // Lists
    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList) { html.push('<ul class="space-y-2 my-4 pl-5 list-disc">'); inList = true; }
      html.push(`<li class="text-grey-300">${formatInline(line.slice(2))}</li>`);
      continue;
    } else if (inList && line.trim() === "") { html.push("</ul>"); inList = false; }

    // Numbered lists
    if (/^\d+\.\s/.test(line)) {
      if (!inList) { html.push('<ol class="space-y-2 my-4 pl-5 list-decimal">'); inList = true; }
      html.push(`<li class="text-grey-300">${formatInline(line.replace(/^\d+\.\s/, ""))}</li>`);
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      html.push(`<h2 class="text-2xl font-bold text-white mt-10 mb-4">${line.slice(3)}</h2>`);
    } else if (line.startsWith("### ")) {
      html.push(`<h3 class="text-lg font-semibold text-white mt-8 mb-3">${line.slice(4)}</h3>`);
    } else if (line.startsWith("---")) {
      html.push('<hr class="border-navy-600 my-8" />');
    } else if (line.trim() === "") {
      if (inList) { html.push("</ul>"); inList = false; }
    } else {
      html.push(`<p class="text-grey-300 leading-relaxed mb-4">${formatInline(line)}</p>`);
    }
  }
  if (inTable) html.push("</table></div>");
  if (inList) html.push("</ul>");

  return <div dangerouslySetInnerHTML={{ __html: html.join("\n") }} />;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-electric-400 hover:underline">$1</a>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-navy-700 text-electric-300 text-xs font-mono">$1</code>');
}

export function BlogPostPage({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-900">
        {/* Hero */}
        <section className="relative pt-32 pb-12 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Back link */}
              <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-grey-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              {/* Category */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-grey-400">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {post.readTime} read
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <MarkdownContent content={post.content} />
            </motion.article>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-navy-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-navy-700 text-xs font-medium text-grey-300">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 glass rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Need Expert Help?</h3>
              <p className="text-grey-400 mb-6">Get a free consultation for your {post.category.toLowerCase()} project.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/rfq" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-cta shadow-lg hover:-translate-y-0.5 transition-all">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-grey-600 hover:border-electric-500 transition-colors">
                  <Phone className="w-4 h-4" /> Call Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="px-4 pb-16 border-t border-navy-700 pt-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="glass rounded-2xl p-5 glass-hover group block">
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-electric-400 transition-colors line-clamp-2">{rp.title}</h3>
                    <p className="text-xs text-grey-500 mt-2">{rp.readTime} read</p>
                  </Link>
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
