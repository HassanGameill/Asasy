"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import DialogPopUp from "../Dialog-PopUp/PopUp";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

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
        className={`flex justify-center mx-8 sm:mx-2 lg:mx-5`}
      >
        <div className={` relative  w-[280px] h-[320px] sm:w-[175px] sm:h-[230px]  md:w-[200px]   lg:w-[280px]     lg:h-[330px]  mx-auto my-8 hover:grayscale-0  shadow-md rounded-3xl cursor-pointer   bg-white hover:bg-white dark:hover:bg-white text-black    duration-300 hover:shadow-one   dark:shadow-3xl  dark:hover:shadow-green-500`}>

          <div className="w-full ">
            <Image
              src={imgSrc}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block w-full  h-[210px] sm:h-[120px] lg:h-[220px] rounded-t-xl"
            />
          </div>

          <div className="pt-2 px-3">
            <h3 className="text-sm  md:text-md  font-semibold line-clamp-2">{title}</h3>

            <h4 className="hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cupiditate impedit aliquid perspiciatis labore quaerat?
            </h4>
            

            <div className="flex justify-between items-center pt-2 pb-2">
              <span className="text-[12px] font-bold text-primary ">L.E {price.toFixed(2)}</span>

              <div className="BUTTON  bottom-40 right-5   px-3 py-2 rounded-xl  cursor-pointer">
                <button className="flex   items-center gap-3 text-primary  ">
                <span className="text-[18px] font-bold shadow-lg hover:bg-slate-800 bg-primary text-white p-1 rounded-md transition-all duration-300">
                    <CiShoppingCart />
                  </span>

                  <span className="text-[18px] font-bold shadow-lg hover:bg-slate-800 bg-[#FFD500] text-slate-800  hover:text-white p-1 rounded-md transition-all duration-300">
                    <IoEyeOutline />
                  </span>

                  

                </button>
              </div>

              



            </div>
            <div className="absolute top-5 right-4 bg-white/90 hover:text-red-600 rounded-md p-2">
                <span className="">
                <FaRegHeart />
                  
                </span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PakegeCard;
