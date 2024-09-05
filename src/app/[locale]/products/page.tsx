import BlogsHero from "@/components/Sections/BlogsHero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Asasy-Products",
  description: "marketing and business solutions",
  icons: {
    icon: "../icons/dark-logo.png",
  },
  // other metadata
};

function Products() {
  return (
    <div>
      <BlogsHero title={"Products"} bgColor="bg-green-300" />
    </div>
  );
}

export default Products;
