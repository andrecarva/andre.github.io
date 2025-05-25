import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
