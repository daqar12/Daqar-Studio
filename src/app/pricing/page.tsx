"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle2, XCircle, ChevronDown } from "lucide-react";

// ─────────────────────────── DATA ────────────────────────────

const packages = [
    {
        tier: "THE ESSENTIAL",
        name: "Basic",
        price: "$499",
        popular: false,
        features: [
            { label: "2 Hours Coverage", available: true },
            { label: "15 Professionally Edited Photos", available: true },
            { label: "Private Online Gallery", available: true },
            { label: "Single Location Session", available: true },
            { label: "No Drone Footage", available: false },
        ],
    },
    {
        tier: "THE PROFESSIONAL",
        name: "Standard",
        price: "$899",
        popular: true,
        features: [
            { label: "4 Hours Coverage", available: true },
            { label: "35 Professionally Edited Photos", available: true },
            { label: "Drone Aerial Footage", available: true },
            { label: "2 Distinct Locations", available: true },
            { label: "High-End Beauty Retouching", available: true },
        ],
    },
    {
        tier: "THE MASTERPIECE",
        name: "Premium",
        price: "$1,499",
        popular: false,
        features: [
            { label: "Full Day (8–10h) Coverage", available: true },
            { label: "75 Master-Edited Photos", available: true },
            { label: "4K Cinematic Drone Video", available: true },
            { label: "Unlimited Location Access", available: true },
            { label: "Luxury Physical Photo Album", available: true },
            { label: "Priority 72-Hour Delivery", available: true },
        ],
    },
];

const faqs = [
    {
        q: "What is the turnaround time for edits?",
        a: "Standard delivery for edited photos is 7–10 business days. Our Premium package includes an express priority delivery of just 72 hours.",
    },
    {
        q: "Can I customize a package to my needs?",
        a: "Absolutely. We offer bespoke packages for destination shoots, corporate events, and multi-day projects. Reach out via our Contact page for a tailored quote.",
    },
    {
        q: "Do you travel for international shoots?",
        a: "Yes — Daqar Studio is available for shoots worldwide. Travel and accommodation fees apply for international bookings and will be quoted separately.",
    },
    {
        q: "How do I secure my booking date?",
        a: "A 30% deposit is required to secure your booking. We accept bank transfer and major credit/debit cards. The balance is due one week before the shoot.",
    },
];

// ─────────────────────────── FAQ ITEM ────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-foreground/10 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-foreground hover:bg-foreground/[0.03] transition-colors"
            >
                <span>{q}</span>
                <ChevronDown
                    size={18}
                    className={`text-brand-gold flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="faq"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="px-6 pb-6 text-sm text-foreground/60 font-light leading-relaxed border-t border-foreground/5 pt-4">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─────────────────────────── PAGE ────────────────────────────

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            {/* ── HERO ── */}
            <section className="pt-48 pb-16 text-center">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Studio Packages</h1>
                        <p className="text-foreground/60 font-light max-w-lg mx-auto leading-relaxed">
                            Professional luxury media services tailored for your unique vision. Choose a plan
                            that suits your creative project.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* ── PRICING CARDS ── */}
            <section className="pb-28">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative rounded-2xl flex flex-col p-8 transition-all duration-300 ${pkg.popular
                                    ? "border-2 border-brand-gold bg-[#0d1529] shadow-[0_0_50px_rgba(212,179,109,0.12)]"
                                    : "border border-foreground/10 bg-foreground/[0.03] hover:border-foreground/20"
                                    }`}
                            >
                                {/* Most Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">
                                            MOST POPULAR
                                        </span>
                                    </div>
                                )}

                                {/* Tier & Name */}
                                <div className="mb-6 mt-2">
                                    <p className={`text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2`}>
                                        {pkg.tier}
                                    </p>
                                    <h2 className={`text-2xl font-bold ${pkg.popular ? "text-white" : "text-foreground"}`}>{pkg.name}</h2>
                                </div>

                                {/* Price */}
                                <div className={`mb-8 pb-8 border-b ${pkg.popular ? "border-white/10" : "border-foreground/10"}`}>
                                    <div className="flex items-end gap-1">
                                        <span className={`text-5xl font-bold ${pkg.popular ? "text-white" : "text-foreground"}`}>{pkg.price}</span>
                                        <span className={`text-sm mb-1 ${pkg.popular ? "text-white/40" : "text-foreground/40"}`}>/ session</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="flex-grow space-y-4 mb-10">
                                    {pkg.features.map((f) => (
                                        <li key={f.label} className="flex items-center gap-3">
                                            {f.available ? (
                                                <CheckCircle2 size={18} className="text-brand-gold flex-shrink-0" />
                                            ) : (
                                                <XCircle size={18} className={`${pkg.popular ? "text-white/20" : "text-foreground/20"} flex-shrink-0`} />
                                            )}
                                            <span className={`text-sm ${f.available
                                                    ? pkg.popular ? "text-white/90" : "text-foreground/80"
                                                    : pkg.popular ? "text-white/30 line-through" : "text-foreground/30 line-through"
                                                }`}>
                                                {f.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link href="/booking">
                                    <button
                                        className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${pkg.popular
                                            ? "bg-brand-gold text-brand-black hover:brightness-110 shadow-[0_0_20px_rgba(212,179,109,0.3)]"
                                            : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                                            }`}
                                    >
                                        Book Now
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── FAQ ── */}
            <section className="pb-32">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                        <div className="space-y-3">
                            {faqs.map((faq) => (
                                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
