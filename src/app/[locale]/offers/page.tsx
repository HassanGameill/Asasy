import BlogsHero from "@/components/Sections/BlogsHero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Asasy-Offers",
  description: "marketing and business solutions",
  icons: {
    icon: "../icons/dark-logo.png",
  },
  // other metadata
};

function Offers() {
  return (
    <div>
      <BlogsHero title={"Offers"} bgColor="bg-primary" />
    </div>
  );
}

export default Offers;
