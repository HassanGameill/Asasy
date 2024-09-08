"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import DialogPopUp from "../Dialog-PopUp/PopUp";

function PakegeCard(itemData) {
  const { id, imgSrc, title, subtitle, price } = itemData;

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
        className={`flex justify-center  w-[280px] sm:w-[175px]   md:w-[200px] lg:w-[280px]   h-[240px]  lg:h-[275px]  mx-auto my-8 hover:grayscale-0  shadow-md rounded-3xl cursor-pointer   bg-white hover:bg-white dark:hover:bg-white text-black    duration-300 hover:shadow-one   dark:shadow-3xl  dark:hover:shadow-green-500 `}
      >
        <div className={`my-2 p-1`}>

          <div className="w-full ">
            <Image
              src={imgSrc}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block h-[80px] lg:h-[120px] rounded-xl "
            />
          </div>
          <div className="pt-2 px-3">
            <h3 className="text-sm  md:text-md  font-semibold">{title}</h3>
            <h4 className=" text-[10px] md:text-[12px] font-normal opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut aliquam ad corrupti sequi pariatur.
            </h4>

            <div className="flex justify-between items-center pt-2 pb-2">
              <span className="text-[12px] font-semibold">${price.toFixed(2)}</span>

              <div className="BUTTON bg-primary px-3 py-2 rounded-xl text-white hover:text-white cursor-pointer">
                <button className="flex items-center gap-2">
                  <span className="text-[15px]">
                    <CiShoppingCart />
                  </span>
                  <span className="text-[11px]">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PakegeCard;
