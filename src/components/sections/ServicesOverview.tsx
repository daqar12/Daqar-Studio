"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Camera, Video, MonitorPlay, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Cinematography",
        description: "High-definition visuals for seamless cinematic storytelling, focused on brand identity.",
        icon: Video,
        price: "From $2,500",
        image: "https://i.pinimg.com/1200x/74/96/30/7496308471c175bb0c00a04bce2fae5e.jpg",
    },
    {
        title: "Photography",
        description: "Timeless imagery captured with precision, focusing on the intersection of light and emotion.",
        icon: Camera,
        price: "From $1,500",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
    },
    {
        title: "Creative Direction",
        description: "Strategic artistic vision that ensures every project aligns with your brand's unique identity.",
        icon: MonitorPlay,
        price: "Consultation Layer",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    },
];

export default function ServicesOverview() {
    return (
        <section className="py-32 bg-background transition-colors duration-500">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-6">
                        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em]">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground uppercase">Excellence Defined</h2>
                    </div>
                    <Link href="/services">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold border-b border-brand-gold/20 pb-1 hover:border-brand-gold transition-colors">View All Services</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-foreground/[0.02] border border-brand-gold/5 rounded-2xl"
                        >
                            <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between">
                                        <service.icon size={20} className="text-brand-gold" />
                                        <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-background transition-all duration-300">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight uppercase">{service.title}</h3>
                                    <p className="text-sm text-foreground/60 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {service.description}
                                    </p>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block pt-2">
                                        {service.price}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
