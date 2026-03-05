"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { Phone, MessageCircle, Send, Instagram, Youtube, Share2, MapPin } from "lucide-react";

export default function ContactPage() {
    const handleWhatsApp = () => {
        window.open(`https://wa.me/442079460958`, "_blank");
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
                        alt="Studio background"
                        className="w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
                </div>

                <Container className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-none">
                            LET'S CREATE <span className="text-brand-gold italic">ART</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
                            Transforming your vision into cinematic reality with professional luxury media services.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold tracking-tight">Contact Information</h2>
                                <p className="text-foreground/50 font-light leading-relaxed max-w-md">
                                    Whether you have a specific project in mind or just want to explore the possibilities, we're here to talk.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Phone Card */}
                                <div className="p-8 bg-foreground/[0.03] border border-brand-gold/10 rounded-2xl flex items-start gap-6 hover:border-brand-gold/30 transition-all group">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">Phone</h4>
                                        <p className="text-xl font-bold">+1 (555) 012-3456</p>
                                    </div>
                                </div>

                                {/* WhatsApp Card */}
                                <div className="p-8 bg-foreground/[0.03] border border-brand-gold/10 rounded-2xl flex flex-col gap-6 hover:border-brand-gold/30 transition-all group">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                            <MessageCircle size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">WhatsApp</h4>
                                            <p className="text-lg font-light text-foreground/80">Message us for a quick consultation</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleWhatsApp}
                                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all w-fit"
                                    >
                                        <MessageCircle size={18} /> Chat with us
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-brand-gold/5">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">Follow Our Journey</h3>
                                <div className="flex gap-4">
                                    {[Instagram, Youtube, Share2].map((Icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:bg-brand-gold hover:text-background hover:border-brand-gold transition-all duration-300"
                                        >
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Message Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-foreground/[0.03] border border-brand-gold/10 p-10 md:p-12 rounded-[2.5rem] space-y-10"
                        >
                            <h3 className="text-3xl font-bold tracking-tight">Send a Message</h3>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-foreground/40">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold transition-colors text-foreground"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-foreground/40">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold transition-colors text-foreground"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-foreground/40">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold transition-colors text-foreground"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-foreground/40">Service Interest</label>
                                    <select className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold transition-colors text-foreground appearance-none cursor-pointer">
                                        <option>High-End Commercial Photography</option>
                                        <option>Cinematic Wedding Production</option>
                                        <option>Fine Art Portraits</option>
                                        <option>Event Coverage</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-foreground/40">Project Details</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-background/50 border border-foreground/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-gold transition-colors text-foreground resize-none"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <Button className="w-full h-14 bg-brand-gold text-background hover:bg-foreground hover:text-background border-none rounded-xl group">
                                        Send Message <Send size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Map Section */}
            <section className="px-6 pb-24">
                <Container>
                    <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-brand-gold/10 group">
                        <img
                            src="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80"
                            alt="Map Placeholder"
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="p-8 bg-foreground/90 backdrop-blur-md text-background rounded-3xl border border-brand-gold/40 shadow-2xl space-y-2 min-w-[280px]">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-lg font-bold">Daqar Studio HQ</h4>
                                    <MapPin size={24} className="text-brand-gold" />
                                </div>
                                <p className="text-sm font-light opacity-80 leading-relaxed">
                                    7th Avenue, Chelsea District<br />
                                    New York, NY 10001
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
