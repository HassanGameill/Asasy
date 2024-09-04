import { useTranslations } from "next-intl";
import { Metadata } from "next";
import Hero from "@/components/Sections/Hero";
import Pakege from "@/components/Sections/Pakeges";


export const metadata: Metadata = {
  title: "Asasy",
  description: "asasy supermarket family pakge ",
  icons: {
    icon: "/icons/dark-logo.png",
  },
  // other metadata
};

export default function Home() {
  return (
    <>
    <Hero />
    <Pakege />
    
    

      {/* 
      <OurPartners />
      <Baner />
      <Features />
      <OurTarget />
      <NewsUs />
      <OurServices />
      <Temework />
      <Testimonials />
      <Contact /> */}
    </>
  );
}
