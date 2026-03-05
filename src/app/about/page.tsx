"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Target, Eye, Users, Camera, Award, Zap, Lightbulb, ChevronRight } from "lucide-react";

const team = [
    {
        name: "Mohamed Dahir",
        role: "Founder & CEO",
        image: "https://www.daqar.online/daqar5.jpeg",
        color: "bg-orange-200"
    },
    {
        name: "Elena Vance",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        color: "bg-zinc-800"
    },
    {
        name: "Marcus Chen",
        role: "Senior Cinematographer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        color: "bg-blue-900"
    },
    {
        name: "Sophia Rossi",
        role: "Lead Editor",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
        color: "bg-zinc-200"
    },
];

const features = [
    {
        title: "Unmatched Quality",
        desc: "Utilizing cutting-edge 8K equipment and industry-leading lighting solutions for crisp, vibrant results.",
        icon: Camera
    },
    {
        title: "Luxury Standards",
        desc: "A white-glove service approach ensuring every client feels valued and every detail is perfect.",
        icon: Award
    },
    {
        title: "Agile Delivery",
        desc: "Professionalism means meeting deadlines. We provide quick turnarounds without compromising excellence.",
        icon: Zap
    },
    {
        title: "Creative Intuition",
        desc: "We don't just follow trends; we set them with bespoke creative direction tailored to your unique brand.",
        icon: Lightbulb
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-brand-gold selection:text-background transition-colors duration-500">
            <Navbar />

            {/* Hero Section - The Essence of Timeless Elegance */}
            <section className="pt-48 pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] px-3 py-1 border border-brand-gold/30 rounded-full inline-block">
                                    EST. 2026
                                </span>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                                    The Essence of <br />
                                    <span className="italic font-light text-brand-gold">Timeless Elegance</span>
                                </h1>
                            </div>
                            <p className="text-foreground/60 leading-relaxed font-light text-lg max-w-xl">
                                Founded on the principles of elegance and precision, Daqar Studio has evolved into a premier destination for high-end photography and videography. Our journey is defined by a commitment to capturing the essence of every subject through a lens of luxury.
                            </p>
                            <p className="text-foreground/60 leading-relaxed font-light text-lg max-w-xl">
                                We believe that luxury isn't just about the final image — it's about the experience, the attention to detail, and the pursuit of perfection in every frame.
                            </p>
                            <div className="text-sm font-light space-y-2">
                                <p>Our brand colors reflect the elegance and sophistication of Daqar Studio:</p>
                                <ul className="text-sm font-light max-w-xl list-disc list-inside space-y-1 text-foreground/70">
                                    <li><strong>Deep Black:</strong> #0F0F0F — representing strength, depth, and timeless elegance.</li>
                                    <li><strong>Metallic Gold:</strong> #C6A75E — symbolizing luxury, prestige, and refined craftsmanship.</li>
                                    <li><strong>Soft Cream:</strong> #F5F1E8 — a versatile background option that conveys warmth and sophistication.</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-brand-gold/10">
                                <img
                                    src="https://www.daqar.online/daqar3.jpg"
                                    alt="Mohamed Dahir Daqar"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-gold/5 blur-3xl rounded-full" />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Our Purpose Section */}
            <section className="py-32 border-t border-brand-gold/5">
                <Container>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold uppercase tracking-[0.3em]">Our Purpose</h2>
                        <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-12 bg-foreground/[0.02] border border-brand-gold/10 rounded-2xl group transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-background transition-all">
                                <Target size={24} className="text-brand-gold group-hover:text-inherit" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Our Mission</h3>
                            <p className="text-foreground/60 font-light leading-relaxed">
                                To provide bespoke visual solutions that elevate brands and capture timeless moments with a touch of gold. We strive to merge technical mastery with artistic intuition.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-12 bg-foreground/[0.02] border border-brand-gold/10 rounded-2xl group transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-background transition-all">
                                <Eye size={24} className="text-brand-gold group-hover:text-inherit" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Our Vision</h3>
                            <p className="text-foreground/60 font-light leading-relaxed">
                                To be the global benchmark for luxury media production, blending innovation with classic sophistication. We envision a world where every story is told with cinematic brilliance.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Master Artisans Section */}
            <section className="py-32 border-t border-brand-gold/5">
                <Container>
                    <div className="flex justify-between items-end mb-16">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold uppercase tracking-[0.2em]">Master Artisans</h2>
                            <p className="text-foreground/40 font-light max-w-sm">
                                The visionaries behind the lens who bring your stories to life with unparalleled skill and creativity.
                            </p>
                        </div>
                        <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest text-brand-gold flex items-center gap-2 hover:translate-x-1 transition-transform">
                            Join Our Team <ChevronRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">{member.name}</h4>
                                        <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{member.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Behind the Scenes Section */}
            <section className="py-32 bg-white/5">
                <Container>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold uppercase tracking-[0.2em]">Behind the Scenes</h2>
                        <p className="text-foreground/40 font-light mt-4">
                            A candid look into the meticulous craftsmanship that goes into every production.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[700px]">
                        <div className="lg:col-span-2 rounded-3xl overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
                                alt="Large Studio"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="grid gap-6 h-full">
                            <div className="rounded-3xl overflow-hidden group h-full">
                                <img
                                    src="/camera.jpg"
                                    alt="BTS Setup"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6 h-full">
                                <div className="rounded-3xl overflow-hidden group">
                                    <img
                                        src="https://i.pinimg.com/1200x/3a/9e/eb/3a9eeb1c283a1a38d66b0759f4699bc2.jpg"
                                        alt="BTS 1"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="rounded-3xl overflow-hidden group">
                                    <img
                                        src="https://www.daqar.online/daqar5.jpeg"
                                        alt="BTS 2"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Choose Section */}
            <section className="py-32 border-t border-brand-gold/5">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                                    Why Choose <br />
                                    <span className="text-brand-gold">Daqar Studio?</span>
                                </h2>
                                <p className="text-foreground/60 font-light text-lg">
                                    We offer more than just media services; we provide a partnership in prestige and quality.
                                </p>
                            </div>
                            <Link href="/services">
                                <Button variant="outline" className="px-10">Our Process</Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {features.map((feature) => (
                                <div key={feature.title} className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <feature.icon className="text-brand-gold" size={20} />
                                        <h4 className="text-sm font-bold uppercase tracking-widest">{feature.title}</h4>
                                    </div>
                                    <p className="text-xs text-foreground/40 leading-relaxed font-light">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
