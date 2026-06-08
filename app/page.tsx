import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Services from "@/sections/Services";
import Care from "@/sections/Care";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
<main className="bg-[#002248]">
      <Navbar />

      <Hero />

      <Stats />
      
      <Care />

      <Process />
      
      <Services />
      
      <Testimonials />
      
      <FAQ />
      
      <CTA />
      
      <Footer />
      
      <WhatsAppButton />
    </main>
  );
}