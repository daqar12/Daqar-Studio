import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground pt-24 pb-12 border-t border-brand-gold/10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <img
                                src="/logo.png"
                                alt="Daqar Studio Logo"
                                className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="text-sm font-bold tracking-[0.3em] text-foreground uppercase group-hover:text-brand-gold transition-colors duration-500">
                                DAQAR STUDIO
                            </div>
                        </Link>
                        <p className="text-foreground/50 font-light text-sm leading-relaxed max-w-xs">
                            Crafting visual legacies for those who appreciate the finer details. Available for elite commissions worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Instagram, href: "https://instagram.com/daqarstudio" },
                                { Icon: Facebook, href: "https://facebook.com/daqarstudio" },
                                { Icon: Twitter, href: "https://twitter.com/daqarstudio" },
                                { Icon: Youtube, href: "https://youtube.com/@daqarstudio" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-full text-foreground/50 hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-8">Studio</h3>
                        <ul className="space-y-4">
                            {["Portfolio", "Services", "About", "Blog", "Pricing", "Testimonials"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-sm text-foreground/50 hover:text-brand-gold transition-colors uppercase tracking-widest text-[10px] font-bold">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Teaser */}
                    <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-8">Expertise</h3>
                        <ul className="space-y-4">
                            {["Weddings", "Portraits", "Events", "Commercial", "Video Production"].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-sm text-foreground/50 hover:text-brand-gold transition-colors uppercase tracking-widest text-[10px] font-bold">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold mb-8">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 group">
                                <MapPin size={16} className="text-brand-gold mt-1" />
                                <span className="text-sm text-foreground/50 font-light leading-relaxed">
                                    22 Baker Street,<br />London, W1U 3BW
                                </span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <Phone size={16} className="text-brand-gold" />
                                <a href="tel:+252000000000" className="text-sm text-foreground/50 font-light hover:text-brand-gold transition-colors">+252 00 000 0000</a>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <Mail size={16} className="text-brand-gold" />
                                <a href="mailto:hello@daqarstudio.com" className="text-sm text-foreground/50 font-light hover:text-brand-gold transition-colors">hello@daqarstudio.com</a>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <MessageCircle size={16} className="text-[#25D366]" />
                                <a
                                    href={`https://wa.me/252000000000?text=${encodeURIComponent("Hi Daqar Studio! I'd like to inquire about your services.")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#25D366]/70 font-light hover:text-[#25D366] transition-colors"
                                >
                                    Chat on WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">
                        © {new Date().getFullYear()} Daqar Studio. All Rights Reserved.
                    </p>
                    <div className="flex space-x-12">
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30 hover:text-brand-gold transition-colors">Privacy</Link>
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30 hover:text-brand-gold transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
