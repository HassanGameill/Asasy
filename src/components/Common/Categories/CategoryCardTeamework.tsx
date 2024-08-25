"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";

function CategoryCardTeamework(itemData: TCategory) {
  const { id, heading, heading2, imgSrc} = itemData;

  

  return (
    <>
      

      <div
        className={`flex items-center justify-center  w-[230px]  h-[280px] lg:w-[250px]  mx-auto grayscale hover:grayscale-0  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-slate-800 hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark `}
        >
        <div className={`m-3 py-11 text-center `}>
          <div className="relative ">
            <Image
              src={imgSrc}
              alt="user-image"
              width={170}
              height={0}
              className="m-auto inline-block "
            />
          </div>
          <div className="">
            <h3 className="text-lightblack text-2xl font-semibold">
              {heading}
            </h3>
            <h4 className="text-lightblack pt-2 text-lg font-normal opacity-50">
              {heading2}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCardTeamework;
