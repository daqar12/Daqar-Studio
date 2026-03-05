"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight, Calendar, Eye } from "lucide-react";

const services = [
    {
        id: "wedding-photography",
        title: "Wedding Photography",
        description: "Capturing timeless love stories with elegance, utilizing natural light and high-end editorial techniques.",
        image: "https://i.pinimg.com/736x/6e/84/d1/6e84d1ada97c778318dd5efebea429da.jpg",
        price: "$1,500",
        tag: "Best Seller"
    },
    {
        id: "wedding-videography",
        title: "Wedding Videography",
        description: "Cinematic 4K storytelling that brings your wedding day to life. We create films you'll watch for generations.",
        video: "/weading.mp4",
        price: "$2,000"
    },
    {
        id: "premium-portraits",
        title: "Premium Portraits",
        description: "Sophisticated portraiture for corporate executives, creatives, and private personal branding sessions.",
        image: "https://i.pinimg.com/1200x/da/16/ea/da16ea0a4617e68c4fd0337d3836753c.jpg",
        price: "$300"
    },
    {
        id: "event-coverage",
        title: "Event Coverage",
        description: "Full-spectrum coverage for galas, conferences, and high-stakes social events without missing a detail.",
        image: "https://i.pinimg.com/1200x/2c/48/fc/2c48fc4734d163f02f559c6e3ac712bc.jpg",
        price: "$800"
    },
    {
        id: "drone-coverage",
        title: "Drone Coverage",
        description: "Licensed aerial cinematography providing a breathtaking perspective for real estate and grand events.",
        image: "https://i.pinimg.com/1200x/b2/01/de/b201de9d4c27b4837520df10e4abd13b.jpg",
        price: "$500"
    },
    {
        id: "studio-shoots",
        title: "Studio Shoots",
        description: "State-of-the-art studio environment with precision lighting control for commercial and product photography.",
        image: "https://i.pinimg.com/1200x/4b/b7/4c/4bb74c133c528965392a0245ebb0efc4.jpg",
        price: "$400"
    },
    {
        id: "video-production",
        title: "Video Production",
        description: "High-end cinematic video services including commercial videos, brand promotions, Podcasts, social media ads, YouTube content, and music videos.",
        image: "https://i.pinimg.com/1200x/9e/96/be/9e96be89ed18274e0fb4572d47da3eb1.jpg",
        price: "$1,500"
    },
    {
        id: "Graduation Photoshoots",
        title: "Graduation Photoshoots",
        description: "Capture the memories of your graduation day with our professional photography services.",
        image: "https://i.pinimg.com/736x/22/29/b1/2229b114fe5b0f4d82d695e8c243bb70.jpg",
        price: "$250"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-48 pb-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Premium Media Services <br />
                            for <span className="text-brand-gold italic font-light">Iconic Moments</span>
                        </h1>
                        <p className="text-lg text-foreground/60 font-light leading-relaxed max-w-2xl">
                            From cinematic wedding films to high-end studio portraiture, our luxury media solutions are tailored to capture the soul of your most precious experiences with unparalleled technical precision.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="pb-32">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-foreground/[0.03] border border-brand-gold/10 overflow-hidden flex flex-col hover:border-brand-gold/30 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {service.video ? (
                                        <video
                                            src={service.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                    ) : (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                    )}
                                    {service.tag && (
                                        <div className="absolute top-4 right-4 bg-brand-gold/90 text-background text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            {service.tag}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                                        <p className="text-sm text-foreground/50 font-light leading-relaxed line-clamp-3">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mt-12 flex items-center justify-between pt-6 border-t border-brand-gold/10">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/40">Investment</span>
                                            <p className="text-sm font-bold">From {service.price}</p>
                                        </div>
                                        <Link
                                            href={`/booking?service=${encodeURIComponent(service.title)}`}
                                            className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-gold hover:text-background transition-all duration-300"
                                        >
                                            <ArrowUpRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="pb-32">
                <Container>
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-foreground/[0.03] p-12 md:p-24 text-center border border-brand-gold/10">
                        {/* Subtle Background Glow */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 max-w-3xl mx-auto space-y-10"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                                Ready to Capture <br /> Your Story?
                            </h2>
                            <p className="text-lg text-foreground/50 font-light leading-relaxed">
                                Every project is unique. Let's discuss your vision and create a bespoke media package that exceeds your expectations.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link href="/booking">
                                    <Button className="w-full sm:w-auto px-10 h-14 bg-brand-gold text-background hover:bg-foreground hover:text-background border-none">
                                        <Calendar size={18} className="mr-3" /> Book a Consultation
                                    </Button>
                                </Link>
                                <Link href="/portfolio">
                                    <Button variant="outline" className="w-full sm:w-auto px-10 h-14 border-foreground/20 text-foreground hover:bg-brand-gold hover:text-background hover:border-brand-gold">
                                        <Eye size={18} className="mr-3" /> View Portfolio
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
