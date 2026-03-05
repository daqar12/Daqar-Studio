"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Star, ThumbsUp, MessageSquare, ArrowRight, ChevronDown } from "lucide-react";

// ─────────────────────── DATA ────────────────────────

const ratingBars = [
    { stars: 5, pct: 92 },
    { stars: 4, pct: 6 },
    { stars: 3, pct: 1 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 1 },
];

const caseStudies = [
    {
        name: "Alexandra & James",
        location: "Villa d'Este, Lake Como",
        avatar: "https://i.pravatar.cc/48?img=47",
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
        quote: "Daqar Studio didn't just document our wedding; they captured the soul of the celebration. Every photograph feels like an editorial masterpiece from a high-fashion magazine. Their discretion and professionalism were unmatched.",
        stars: 5,
    },
    {
        name: "Isabella & Marcus",
        location: "Amanpuri, Phuket",
        avatar: "https://i.pravatar.cc/48?img=5",
        image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
        quote: "We were looking for cinematic storytelling that moved away from traditional wedding tropes. The team delivered a visual narrative that surpassed our wildest expectations. Their eye for lighting and composition is pure genius.",
        stars: 5,
    },
];

const reviews = [
    {
        name: "Sophie Beaumont",
        date: "October 2023",
        avatar: "https://i.pravatar.cc/40?img=9",
        initials: "SB",
        stars: 5,
        text: "The level of detail and the editorial style of the photos exceeded our expectations. Truly a luxury service from start to finish.",
        likes: 9,
    },
    {
        name: "Michael Laurent",
        date: "September 2023",
        avatar: "https://i.pravatar.cc/40?img=11",
        initials: "ML",
        stars: 5,
        text: "As a fellow creative, I have very high standards for composition. Daqar Studio is one of the few studios I trust entirely for commercial projects.",
        likes: 21,
    },
    {
        name: "The Henri Store",
        date: "August 2023",
        avatar: null,
        initials: "TH",
        stars: 5,
        text: "Professional and so much better than what's advertised. They are serious! We didn't expect it to be that exceptional — an experience that went totally beyond.",
        likes: 4,
    },
    {
        name: "Elena Rosic",
        date: "August 2023",
        avatar: null,
        initials: "ER",
        stars: 5,
        text: "Absolutely stunning work. The 'cinematic flow' that they promised was more than I could ask, and quality of the final art was world class.",
        likes: 8,
    },
];

// ─────────────────────── COMPONENTS ──────────────────────

function Stars({ count, size = 14 }: { count: number; size?: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star
                    key={i}
                    size={size}
                    className={i <= count ? "fill-brand-gold text-brand-gold" : "text-foreground/20"}
                />
            ))}
        </div>
    );
}

function Avatar({ src, initials }: { src: string | null; initials: string }) {
    if (src) {
        return <img src={src} alt={initials} className="w-10 h-10 rounded-full object-cover" />;
    }
    return (
        <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-sm font-bold flex-shrink-0">
            {initials}
        </div>
    );
}

// ─────────────────────── PAGE ────────────────────────────

export default function TestimonialsPage() {
    const [likes, setLikes] = useState<Record<number, boolean>>({});

    const toggleLike = (i: number) => setLikes((prev) => ({ ...prev, [i]: !prev[i] }));

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* background image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80"
                        alt="Hero"
                        className="w-full h-full object-cover object-top opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-2xl space-y-6 text-center"
                    >
                        <span className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] border border-brand-gold/30 px-4 py-1.5 rounded-full">
                            Excellence in Media
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Client Testimonials &amp; Stories
                        </h1>
                        <p className="text-foreground/60 font-light max-w-lg leading-relaxed mx-auto">
                            Capturing timeless moments for our distinguished clientele across the globe.
                            Read about their experiences with Daqar Studio.
                        </p>
                        <div className="flex gap-3 flex-wrap justify-center">
                            <Link href="/portfolio">
                                <button className="px-6 py-3 bg-brand-gold text-brand-black text-sm font-bold rounded-lg hover:brightness-110 transition-all">
                                    View Gallery
                                </button>
                            </Link>
                            <a href="#write-review">
                                <button className="px-6 py-3 border border-foreground/20 text-foreground text-sm font-bold rounded-lg hover:border-brand-gold/50 transition-all">
                                    Write a Review
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* ── OVERALL EXCELLENCE ── */}
            <section className="py-16 border-b border-foreground/5">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl"
                    >
                        {/* Left: Score */}
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold">Overall Excellence</h2>
                            <div className="flex items-end gap-3">
                                <span className="text-6xl font-bold text-foreground">4.9</span>
                                <div className="pb-2">
                                    <Stars count={5} size={18} />
                                    <p className="text-xs text-foreground/40 mt-1">Based on 120+ verified reviews</p>
                                </div>
                            </div>
                            <p className="text-sm text-foreground/50 font-light leading-relaxed max-w-xs">
                                Our commitment to luxury storytelling and technical perfection is reflected in every project we undertake.
                            </p>
                        </div>

                        {/* Right: Rating Bars */}
                        <div className="space-y-2 self-center">
                            {ratingBars.map((bar) => (
                                <div key={bar.stars} className="flex items-center gap-3 text-xs">
                                    <span className="text-foreground/40 w-2">{bar.stars}</span>
                                    <div className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${bar.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.1 }}
                                            className="h-full bg-brand-gold rounded-full"
                                        />
                                    </div>
                                    <span className="text-foreground/40 w-8 text-right">{bar.pct}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* ── FEATURED CASE STUDIES ── */}
            <section className="py-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 space-y-3"
                    >
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">
                            Featured Case Studies
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Wedding Client Stories
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {caseStudies.map((cs, i) => (
                            <motion.div
                                key={cs.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="bg-foreground/[0.03] border border-foreground/10 rounded-2xl overflow-hidden hover:border-brand-gold/20 transition-all group"
                            >
                                {/* Photo */}
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={cs.image}
                                        alt={cs.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    {/* Client info */}
                                    <div className="flex items-center gap-3">
                                        <img src={cs.avatar} alt={cs.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="font-bold text-sm text-foreground">{cs.name}</p>
                                            <p className="text-xs text-foreground/40">{cs.location}</p>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <p className="text-sm text-foreground/70 font-light leading-relaxed italic">
                                        &ldquo;{cs.quote}&rdquo;
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-2 border-t border-foreground/5">
                                        <Stars count={cs.stars} />
                                        <button className="text-xs text-brand-gold font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                            View Full Story <ArrowRight size={12} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── RECENT CLIENT REVIEWS ── */}
            <section className="pb-24" id="write-review">
                <Container>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-bold">Recent Client Reviews</h2>
                        <div className="flex items-center gap-2 text-sm text-foreground/50">
                            <span>Sort by:</span>
                            <button className="text-foreground font-semibold flex items-center gap-1">
                                Most Recent <ChevronDown size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Review cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {reviews.map((r, i) => (
                            <motion.div
                                key={r.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-foreground/[0.03] border border-foreground/10 rounded-xl p-5 space-y-3 hover:border-foreground/20 transition-all"
                            >
                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <Avatar src={r.avatar} initials={r.initials} />
                                    <div>
                                        <p className="font-semibold text-sm text-foreground">{r.name}</p>
                                        <p className="text-xs text-foreground/40">{r.date}</p>
                                    </div>
                                    <div className="ml-auto">
                                        <Stars count={r.stars} size={12} />
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-sm text-foreground/65 font-light leading-relaxed">
                                    {r.text}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center gap-4 pt-1">
                                    <button
                                        onClick={() => toggleLike(i)}
                                        className={`flex items-center gap-1.5 text-xs transition-colors ${likes[i] ? "text-brand-gold" : "text-foreground/40 hover:text-foreground/70"}`}
                                    >
                                        <ThumbsUp size={13} />
                                        {r.likes + (likes[i] ? 1 : 0)}
                                    </button>
                                    <button className="flex items-center gap-1.5 text-xs text-foreground/40 hover:text-foreground/70 transition-colors">
                                        <MessageSquare size={13} /> Reply
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="flex justify-center">
                        <button className="flex items-center gap-2 border border-foreground/15 text-foreground/70 text-sm font-semibold px-8 py-3 rounded-full hover:border-foreground/30 transition-all">
                            Load More Stories <ChevronDown size={16} />
                        </button>
                    </div>
                </Container>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 border-t border-foreground/5">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">Ready to start your story?</h2>
                        <p className="text-foreground/50 font-light max-w-md mx-auto">
                            Join our distinguished list of clients and let&apos;s capture your most meaningful moments.
                        </p>
                        <div className="flex gap-3 justify-center flex-wrap">
                            <Link href="/booking">
                                <button className="px-8 py-3.5 bg-brand-gold text-brand-black font-bold rounded-lg text-sm hover:brightness-110 transition-all">
                                    Inquire Now
                                </button>
                            </Link>
                            <Link href="/portfolio">
                                <button className="px-8 py-3.5 border border-foreground/20 text-foreground font-bold rounded-lg text-sm hover:border-brand-gold/50 transition-all">
                                    View Portfolio
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
