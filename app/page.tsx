import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Care from "@/components/Care";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <Care />

      <Testimonials />

      <FAQ />

      <Footer />

      <WhatsAppButton />

    </main>
  );
}