import BlogsHero from '@/components/Sections/BlogsHero'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Markup-Blogs",
    description: "marketing and business solutions",
    icons: {
      icon: "../icons/icon-markup.png",
    },
    // other metadata
  };
  

function Blogs() {
  return (
    <div>
        <BlogsHero />
        
       
    </div>
  )
}

export default Blogs