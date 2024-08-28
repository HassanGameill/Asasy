import { useTranslations } from "next-intl";
import { Metadata } from "next";




import Hero from "@/components/Markup-Sections/Hero";



import Pakege from "@/components/Markup-Sections/Pakeges";

export const metadata: Metadata = {
  title: "Asasy",
  description: "asasy supermarket family pakge ",
  icons: {
    icon: "../../../public/images/Logos/Asasy_logo1.png",
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
