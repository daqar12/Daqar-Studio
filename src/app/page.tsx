import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedPortfolio from "@/components/sections/FeaturedPortfolio";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutIntro />
      <ServicesOverview />
      <FeaturedPortfolio />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
