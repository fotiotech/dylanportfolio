import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <Services />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
