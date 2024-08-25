import { useTranslations } from "next-intl";
import { Metadata } from "next";



import Hero from "@/components/Markup-Sections/Hero";



import CategoryRender from "@/components/UI-Render/Category/CategoryRender";

export const metadata: Metadata = {
  title: "Markup",
  description: "marketing and business solutions",
  icons: {
    icon: "/icons/icon-markup.png",
  },
  // other metadata
};

export default function Home() {
  return (
    <>
    <Hero />
    <CategoryRender />

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
