import { About } from "@/components/about";
import { CEOMessage } from "@/components/ceo-message";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />

      <Services />

      <Locations />
      <CEOMessage />
      <Contact />
      <Footer />
    </main>
  );
} 
