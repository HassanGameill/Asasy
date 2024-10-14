/* eslint-disable react/jsx-no-undef */
import Hero from "@/components/Sections/Hero";
import PakegeOne from "@/components/Sections/Pakeges/PakegeOne";
import { Metadata } from "next";


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
      <PakegeOne />
      
    </>
  );
}
