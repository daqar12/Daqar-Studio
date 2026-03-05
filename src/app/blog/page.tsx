"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { Clock, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = ["All Stories", "Wedding Tips", "Photography Tips", "Event Highlights", "Behind the Scenes"];

const featuredPost = {
    title: "Capturing the Essence of Luxury Weddings",
    excerpt: "Discover our approach to timeless wedding photography, focusing on authentic emotion and cinematic aesthetics in the world's most beautiful venues.",
    category: "Editor's Pick",
    author: "Marcus Vane",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
};

const trendingPosts = [
    {
        title: "Met Gala Style: 2024 Event Trends We Love",
        category: "Event Highlights",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    },
    {
        title: "Planning Your Morning: The Photography Timeline",
        category: "Wedding Tips",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80",
    },
    {
        title: "Golden Hour Secrets: Location Scouting for Couples",
        category: "Photography Tips",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80",
    },
];

const latestPosts = [
    {
        title: "Coastal Romance: A Destination Wedding in Amalfi",
        excerpt: "Exploring the logistics and beauty of planning an international luxury destination wedding on the...",
        category: "Event Highlights",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    },
    {
        title: "Lighting the Night: Mastering Reception Flash",
        excerpt: "Don't fear the dark. Learn how we use professional lighting to maintain a cinematic mood during high-...",
        category: "Photography Tips",
        image: "https://images.unsplash.com/photo-1510076857177-74700760beaa?auto=format&fit=crop&q=80",
    },
    {
        title: "The Details Matter: Creating a Flat Lay Story",
        excerpt: "Your stationery, heirlooms, and rings tell a story. Here is how to curate your details for the most...",
        category: "Wedding Tips",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
    },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All Stories");

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            {/* Featured Hero Post */}
            <section className="relative h-[80vh] flex items-end pb-24 overflow-hidden pt-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl space-y-6"
                    >
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                            {featuredPost.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            {featuredPost.title}
                        </h1>
                        <p className="text-lg text-foreground/70 font-light leading-relaxed max-w-2xl">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <Button className="h-14 px-10 bg-brand-gold text-background hover:bg-foreground hover:text-background border-none rounded-sm font-bold">
                                Read the Story
                            </Button>
                            <span className="text-sm font-light opacity-60">
                                {featuredPost.readTime} • By {featuredPost.author}
                            </span>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Category Navigation */}
            <section className="py-12 border-b border-brand-gold/10">
                <Container>
                    <div className="flex flex-wrap items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 relative py-2",
                                    activeCategory === cat
                                        ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-gold"
                                        : "text-foreground/40 hover:text-foreground/70"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Primary Column */}
                        <div className="lg:col-span-2 space-y-12">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-8 bg-foreground/5">
                                    <img
                                        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
                                        alt="Camera Lens"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-brand-gold">Photography Tips</span>
                                        <span className="opacity-40">Oct 24, 2023</span>
                                    </div>
                                    <h2 className="text-4xl font-bold tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                                        The Art of Monochrome: Why Black & White Photography is Timeless
                                    </h2>
                                    <p className="text-lg text-foreground/50 font-light leading-relaxed">
                                        Discover how removing color can add depth, emotion, and a classic editorial feel to your wedding gallery. We explore lighting, composition, and soul...
                                    </p>
                                    <div className="flex items-center gap-4 pt-2">
                                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 overflow-hidden">
                                            <img src="https://i.pravatar.cc/150?u=julian" alt="Julian Reed" />
                                        </div>
                                        <span className="text-sm font-medium opacity-80">Julian Reed</span>
                                    </div>
                                </div>
                            </motion.article>
                        </div>

                        {/* Sidebar Column */}
                        <aside className="space-y-16">
                            {/* Trending */}
                            <div className="space-y-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-6 bg-brand-gold" />
                                    <h3 className="text-xl font-bold uppercase tracking-widest">Trending Insights</h3>
                                </div>
                                <div className="space-y-8">
                                    {trendingPosts.map((post, i) => (
                                        <Link key={i} href="#" className="flex gap-6 group">
                                            <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-foreground/5">
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                            </div>
                                            <div className="space-y-2">
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">{post.category}</span>
                                                <h4 className="text-sm font-bold leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <span className="text-[10px] opacity-40 uppercase tracking-widest">{post.readTime}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="p-10 bg-foreground/[0.03] border border-brand-gold/10 rounded-2xl space-y-8 text-center">
                                <h3 className="text-xl font-bold">Join the Studio Circle</h3>
                                <p className="text-sm text-foreground/50 font-light leading-relaxed">
                                    Get curated photography advice and event inspiration delivered to your inbox monthly.
                                </p>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-background/50 border border-foreground/10 rounded-sm px-5 py-3.5 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                                    />
                                    <Button className="w-full h-12 bg-brand-gold text-background hover:bg-foreground hover:text-background border-none rounded-sm font-bold text-[11px] uppercase tracking-widest">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            {/* Latest Insights */}
            <section className="py-24 bg-foreground/[0.01]">
                <Container>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Latest Insights</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {latestPosts.map((post, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-foreground/[0.03] border border-brand-gold/10 rounded-xl overflow-hidden group border-b-4 border-b-transparent hover:border-b-brand-gold transition-all duration-300"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-8 space-y-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">{post.category}</span>
                                    <h3 className="text-xl font-bold leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-brand-gold transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-foreground/50 font-light leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <Link href="#" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest pt-4 group/link">
                                        Read More <ArrowRight size={14} className="text-brand-gold transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-foreground/10 hover:border-brand-gold group transition-colors">
                            <ChevronLeft size={18} className="opacity-40 group-hover:opacity-100" />
                        </button>
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                className={cn(
                                    "w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-all",
                                    num === 1 ? "bg-brand-gold text-background shadow-lg shadow-brand-gold/20" : "border border-foreground/5 hover:border-brand-gold/40"
                                )}
                            >
                                {num}
                            </button>
                        ))}
                        <span className="px-2 opacity-50">...</span>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-foreground/5 hover:border-brand-gold/40 font-bold text-sm">
                            8
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-foreground/5 hover:border-brand-gold/40 group transition-colors">
                            <ChevronRight size={18} className="opacity-40 group-hover:opacity-100" />
                        </button>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
