"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";

function CategoryCard(itemData: TCategory) {
  const { id, heading, heading2, imgSrc} = itemData;

  // popup ........
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleCardClick = (data: any) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  return (
    <>
      <DialogPopUp
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={selectedData}
      />

      <div
        onClick={() => handleCardClick(itemData)}
        className={`flex justify-center   w-[135px] sm:w-[180px] md:w-[180px]    h-[160px] md:h-[200px] lg:w-[180px] xl:w-[210px] my-6 hover:grayscale-0  shadow-md rounded-3xl cursor-pointer text-gray-400   bg-white hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-2xl  dark:hover:shadow-gray-dark `}
      >
        <div className={`m-3  text-center `}>
          <div className="relative ">
            <Image
              src={imgSrc}
              alt="user-image"
              width={100}
              height={0}
              className="m-auto inline-block w-[70px] md:w-[100px]"
            />
          </div>
          <div className="">
            <h3 className="text-sm  md:text-md lg:text-lg font-semibold">
              {heading}
            </h3>
            <h4 className=" pt-1 text-sm font-normal opacity-50">
              {heading2}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
