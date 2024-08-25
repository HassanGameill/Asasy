"use client";

import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

import DealImg from "../../../../public/images/bannar/b4.jpeg";
import { HiOutlinePhone } from "react-icons/hi2";
import { useLocale, useTranslations } from "next-intl";
import heroData from "./heroData";
import Lottie from "lottie-react";
import { Dialog } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  // Content translation
  const t = useTranslations("Hero");
  const heroContent = heroData(t);

  const local = useLocale();

  // pop Up Contect

  let [isOpens, setIsOpens] = useState(false);

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] `}
      >
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="hjnQfaml14s"
          onClose={() => setOpen(false)}
        />

       

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className={`grid grid-cols-1 gap-8 xl:grid-cols-2 ${local === "ar" ? "__rtl_lang" : ""}`}
              >
                {heroContent.length >= 1
                  ? heroContent.map((item) => (
                      <div className="" key={item.id}>
                        <h1
                          className={`mb-5 overflow-hidden text-3xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight ${
                            local === "ar"
                              ? ""
                              : "text-[1.5rem] md:text[1.7rem] lg:text[2rem]"
                          }  `}
                        >
                          {item.title}{" "}
                          <span className="text-orange-400   ">
                            {/* Style will be inherited from the parent element */}
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

                        <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-lg">
                          {item.description}
                        </p>

                        <div className="flex items-center">
                          
                          <Link href="https://wa.me/+201000936297" target="_blank"
                            className="mr-4 flex   items-center gap-4  rounded-3xl border-2 border-orange-400    px-6 py-2.5 font-semibold text-black hover:bg-orange-400 hover:text-white dark:text-white lg:px-8 lg:py-4"
                            
                          >
                            <span className="text-[12px] md:text[14px] lg:text-[12px]">{item.btnTitle1}</span>
                            <span className="scale-x transform text-[20px]">
                              <HiOutlinePhone />
                            </span>
                          </Link>

                          <button
                            onClick={() => setOpen(true)}
                            className="flex items-center justify-center  text-slate-800 dark:text-white"
                          >
                            

                            {item.btnTitle2}
                          </button>
                        </div>
                      </div>
                    ))
                  : "ther is no content data "}

                <div className="">
                  <Image
                    src={DealImg}
                    alt="deal-image"
                    className=" bg-tramsparent w-auto dark:bg-transparent"
                  />
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