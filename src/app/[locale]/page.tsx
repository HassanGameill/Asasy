import Hero from "@/components/Sections/Hero";
import PakegeOne from "@/components/Sections/Pakeges";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Asasy",
  description: "asasy supermarket family pakge ",
  icons: {
    icon: "/icons/dark-logo.png",
  },
  // other metadata
};

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <>
      <Hero />
      <PakegeOne />
      
      
    </>
  );
}
