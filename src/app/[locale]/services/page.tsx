import BlogsHero from "@/components/Sections/BlogsHero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Asasy-Servises",
  description: "marketing and business solutions",
  icons: {
    icon: "../icons/dark-logo.png",
  },
  // other metadata
};

function Servises() {
  return (
    <div>
      <BlogsHero title={"Servises"} bgColor="bg-gray-200" />
    </div>
  );
}

export default Servises;
