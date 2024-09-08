"use client";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

import DealImg1 from "../../../../public/images/bannar/b4.jpeg"; // Example image
import DealImg2 from "../../../../public/images/bannar/b5.jpeg"; // Another example image
import { useLocale, useTranslations } from "next-intl";
import heroData from "./heroData";
import BannerHeader from "../Banner/BannerHeader";
import HeroCardRender from "./Hero-Card/HeroCardRender";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  // Content translation
  const t = useTranslations("Hero");
  const heroContent = heroData(t);

  const local = useLocale();

  // Images array for the slider
  const dealImages = [DealImg1, DealImg2];

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]`}
      >

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className={`grid grid-cols-1 gap-14 xl:grid-cols-2 ${
                  local === "ar" ? "__rtl_lang" : ""
                }`}
              >
                <div className="CONTENT">
                  {heroContent.length >= 1
                    ? heroContent.map((item) => (
                        <div className="" key={item.id}>
                          <h1
                            className={`mb-4 overflow-hidden text-3xl font-bold leading-tight text-black dark:text-white ${
                              local === "ar"
                                ? ""
                                : "text-[1.4rem] md:text-[1.6rem] lg:text-[1.9rem]"
                            }`}
                          >
                            {item.title}{" "}
                            <span className="text-primary">
                              <Typewriter
                                words={
                                  local === "ar"
                                    ? ["سهله", "ذكيه", "امنه"]
                                    : ["Easy", "Smart", "Safe"]
                                }
                                loop={true}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                              />
                            </span>
                          </h1>

                          <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                            {item.description}
                          </p>
                        </div>
                      ))
                    : "There is no content data"}

                    <div className="">
                      <HeroCardRender />
                    </div>
                </div>

                {/* Swiper Slider for Deal Images */}
                <div className="">
                  <BannerHeader />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
