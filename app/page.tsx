import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Services from "@/sections/Services";
import Care from "@/sections/Care";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

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