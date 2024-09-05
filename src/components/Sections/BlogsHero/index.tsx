"use client";

import { useLocale } from "next-intl";

// Define the type for the props
interface BlogsHeroProps {
  title: string;
  bgColor?: string; // Expecting a class name as a string for background color
}

const BlogsHero: React.FC<BlogsHeroProps> = ({ title, bgColor }) => {
  const locale = useLocale();

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] ${bgColor}`}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <h1 className="text-2xl">Welcome in <span className="text-orange-700 font-semibold">{title}</span> Page</h1> {/* Display dynamic title */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsHero;
