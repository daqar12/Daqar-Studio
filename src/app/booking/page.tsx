"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    MessageCircle,
    ArrowRight,
    Camera,
    Video,
    ShieldCheck,
    Clock,
    Award,
    CheckCircle2
} from "lucide-react";

// Types
interface BookingFormData {
    name: string;
    email: string;
    project: string;
}

// Data
const packages = [
    {
        id: "photography",
        title: "Photography Suite",
        description: "Full-day session, high-end editing, 20 retouched images.",
        price: 1200,
        duration: "6 HOURS SESSION",
        icon: Camera
    },
    {
        id: "cinematic",
        title: "Cinematic Suite",
        description: "4K production, drone footage, professional grading.",
        price: 2500,
        duration: "FULL DAY SESSION",
        icon: Video
    }
];

const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

// Calendar helper
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

export default function BookingPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(packages[0]);
    const [selectedDate, setSelectedDate] = useState<number | null>(5); // Default to the 5th based on design
    const [selectedTime, setSelectedTime] = useState<string>("11:30 AM");

    const [formData, setFormData] = useState<BookingFormData>({
        name: "",
        email: "",
        project: ""
    });

    // Calendar state (mocking October 2023 for visual parity with design)
    const year = 2023;
    const month = 9; // October (0-indexed)
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    // Generate dates padding
    const prevMonthDays = Array.from({ length: firstDay }, (_, i) => getDaysInMonth(year, month - 1) - firstDay + i + 1);
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleWhatsApp = () => {
        const text = `Hello Daqar Studio! I'm interested in booking the ${selectedPackage.title} on Oct ${selectedDate}, 2023 at ${selectedTime}.`;
        window.open(`https://wa.me/442079460958?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans selection:bg-brand-gold selection:text-brand-black">
            <Navbar />

            {/* Main Content Area */}
            <section className="pt-32 pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 lg:gap-20">
                        {/* LEFT COLUMN: SELECTION */}
                        <div className="space-y-16">
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                                    STEP 1 OF 3
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                                    Elevate Your Visual Identity
                                </h1>
                                <p className="text-foreground/60 font-light leading-relaxed max-w-xl text-lg">
                                    Select from our exclusive range of luxury media packages. Whether it's high-fashion photography or cinematic brand storytelling, our studio is equipped to deliver excellence.
                                </p>
                            </motion.div>

                            {/* Package Selection */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-6"
                            >
                                <h2 className="flex items-center gap-3 text-xl font-bold text-foreground">
                                    <div className="w-2 h-2 rounded-sm bg-brand-gold rotate-45" /> Select Your Package
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {packages.map((pkg) => (
                                        <button
                                            key={pkg.id}
                                            onClick={() => setSelectedPackage(pkg)}
                                            className={`text-left p-6 rounded-xl border relative transition-all duration-300 ${selectedPackage.id === pkg.id
                                                ? "border-brand-gold bg-brand-gold/5"
                                                : "border-white/10 hover:border-white/20 bg-white/[0.02]"
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <pkg.icon className={selectedPackage.id === pkg.id ? "text-brand-gold" : "text-foreground/50"} size={24} />
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPackage.id === pkg.id ? "border-brand-gold bg-transparent" : "border-foreground/20"
                                                    }`}>
                                                    {selectedPackage.id === pkg.id && (
                                                        <div className="w-2 h-2 bg-brand-gold rounded-full" />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <h3 className="font-bold text-foreground">{pkg.title}</h3>
                                                <p className="text-sm font-light text-foreground/50 line-clamp-2 leading-relaxed h-10">
                                                    {pkg.description}
                                                </p>
                                                <div className="flex justify-between items-end pt-4 border-t border-foreground/10">
                                                    <span className="text-xl font-bold text-brand-gold">
                                                        ${pkg.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">
                                                        {pkg.duration}
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Availability Selection */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                            >
                                <h2 className="flex items-center gap-3 text-xl font-bold text-foreground">
                                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5 opacity-80">
                                        <div className="bg-brand-gold rounded-sm" /><div className="bg-brand-gold rounded-sm" />
                                        <div className="bg-brand-gold rounded-sm" /><div className="bg-brand-gold rounded-sm" />
                                    </div>
                                    Step 2: Availability
                                </h2>

                                <div className="bg-foreground/[0.02] border border-foreground/10 rounded-xl p-8">
                                    {/* Month Navigation */}
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="font-bold text-foreground text-lg">October 2023</h3>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded border border-foreground/20 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/40 transition-colors">
                                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 9L1 5L5 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </button>
                                            <button className="w-8 h-8 rounded border border-foreground/20 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/40 transition-colors">
                                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-y-6 text-center mb-8">
                                        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                                            <div key={day} className="text-[9px] font-bold tracking-widest text-brand-cream/30 uppercase">
                                                {day}
                                            </div>
                                        ))}

                                        {prevMonthDays.map((day, i) => (
                                            <div key={`prev-${i}`} className="text-sm text-foreground/10">{day}</div>
                                        ))}

                                        {currentMonthDays.map((day) => (
                                            <button
                                                key={day}
                                                onClick={() => setSelectedDate(day)}
                                                className={`text-sm flex items-center justify-center w-10 h-10 mx-auto rounded transition-all duration-300 ${selectedDate === day
                                                    ? "bg-brand-gold text-brand-black font-bold shadow-lg shadow-brand-gold/20"
                                                    : "text-foreground/80 hover:bg-foreground/10"
                                                    }`}
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Time Slots */}
                                    <div className="space-y-4 pt-6 border-t border-foreground/5">
                                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-foreground">Available Time Slots</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {timeSlots.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`px-6 py-2.5 rounded text-xs font-bold tracking-wide transition-all border ${selectedTime === time
                                                        ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                                                        : "border-foreground/10 text-foreground/60 hover:border-foreground/30 hover:text-foreground"
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: SUMMARY & FORM */}
                        <div className="lg:pl-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="sticky top-28"
                            >
                                <div className="bg-foreground/[0.02] rounded-2xl overflow-hidden border border-foreground/5 shadow-2xl">
                                    {/* Header Image */}
                                    <div className="h-40 w-full relative">
                                        <img
                                            src="https://i.pinimg.com/736x/de/09/b9/de09b96774f769e6e03c48efc2bc24bd.jpg"
                                            alt="Studio setup"
                                            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                        <h3 className="absolute bottom-6 left-8 text-xl font-bold text-foreground">
                                            Booking Details
                                        </h3>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {/* Summary Info */}
                                        <div className="space-y-4 pb-6 border-b border-foreground/10">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-foreground/40 font-light">Selected Package:</span>
                                                <span className="font-bold text-foreground">{selectedPackage.title}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-foreground/40 font-light">Date:</span>
                                                <span className="font-bold text-foreground">{selectedDate ? `Oct ${String(selectedDate).padStart(2, '0')}, 2023` : "Not selected"}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-foreground/40 font-light">Time:</span>
                                                <span className="font-bold text-foreground">{selectedTime}</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center pb-8">
                                            <span className="font-bold text-foreground">Total Estimate</span>
                                            <span className="text-2xl font-bold text-brand-gold">
                                                ${selectedPackage.price.toLocaleString()}
                                            </span>
                                        </div>

                                        {/* Form */}
                                        <AnimatePresence mode="wait">
                                            {!isSubmitted ? (
                                                <motion.form
                                                    key="form"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    onSubmit={handleSubmit}
                                                    className="space-y-5 flex flex-col"
                                                >
                                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2">
                                                        Contact Details
                                                    </h4>

                                                    <input
                                                        type="text"
                                                        placeholder="Full Name"
                                                        required
                                                        value={formData.name}
                                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full bg-transparent border border-foreground/10 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-brand-gold/50 transition-colors"
                                                    />
                                                    <input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        required
                                                        value={formData.email}
                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full bg-transparent border border-foreground/10 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-brand-gold/50 transition-colors"
                                                    />
                                                    <textarea
                                                        placeholder="Tell us about your project..."
                                                        rows={3}
                                                        value={formData.project}
                                                        onChange={e => setFormData({ ...formData, project: e.target.value })}
                                                        className="w-full bg-transparent border border-foreground/10 rounded-lg px-4 py-3.5 text-sm outline-none focus:border-brand-gold/50 transition-colors resize-none"
                                                    />

                                                    <button
                                                        type="submit"
                                                        className="w-full bg-[#D4B36D] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#E5C47E] transition-colors mt-4 group shadow-[0_0_20px_rgba(212,179,109,0.15)]"
                                                    >
                                                        Confirm Booking
                                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                    </button>

                                                    <div className="relative flex items-center justify-center py-4">
                                                        <div className="absolute w-full border-t border-foreground/5" />
                                                        <span className="bg-background px-4 text-[9px] uppercase tracking-widest text-foreground/30 relative z-10 font-bold">
                                                            Or Reach Out
                                                        </span>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={handleWhatsApp}
                                                        className="w-full border border-foreground/10 text-[#25D366] font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:border-[#25D366]/30 transition-colors bg-[#25D366]/5"
                                                    >
                                                        <MessageCircle size={16} /> Contact via WhatsApp
                                                    </button>
                                                </motion.form>
                                            ) : (
                                                <motion.div
                                                    key="success"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                                                >
                                                    <CheckCircle2 size={48} className="text-brand-gold mb-2" />
                                                    <h4 className="font-bold text-foreground text-lg">Inquiry Received</h4>
                                                    <p className="text-sm font-light text-foreground/60 leading-relaxed">
                                                        Thank you for your interest, {formData.name || "friend"}. We will be in touch shortly to confirm your {selectedDate ? `October ${selectedDate}th` : ''} booking.
                                                    </p>
                                                    <button
                                                        onClick={() => setIsSubmitted(false)}
                                                        className="mt-6 border-b border-brand-gold text-brand-gold text-sm font-bold uppercase tracking-widest pb-1"
                                                    >
                                                        Book Another
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="flex justify-center gap-8 mt-8">
                                    <div className="flex flex-col items-center gap-2">
                                        <ShieldCheck size={18} className="text-brand-gold/60" />
                                        <span className="text-[8px] uppercase tracking-widest font-bold text-foreground/40 text-center">Secure<br />Payment</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Clock size={18} className="text-brand-gold/60" />
                                        <span className="text-[8px] uppercase tracking-widest font-bold text-foreground/40 text-center">24/7<br />Support</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Award size={18} className="text-brand-gold/60" />
                                        <span className="text-[8px] uppercase tracking-widest font-bold text-foreground/40 text-center">High<br />Quality</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
