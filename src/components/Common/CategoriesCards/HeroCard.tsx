"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

function CategoryCard(itemData) {
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
      <div
        className={`flex justify-center   w-[175px]   h-[200px]  mx-auto my-8 hover:grayscale-0  shadow-md rounded-3xl cursor-pointer   bg-white hover:bg-white dark:hover:bg-white text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-2xl  dark:hover:shadow-gray-dark `}
      >
        <div className={`my-3  text-center `}>
          <div className="w-full">
            <Image
              src={imgSrc}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block w-[135px] h-[100px] "
            />
          </div>
          <div className="pt-2">
            <h3 className="text-sm  md:text-md  font-semibold">{title}</h3>
            <h4 className=" text-[10px] font-normal opacity-50">{subtitle}</h4>

            <div className="flex justify-between items-center pt-2 pb-2">
              <span className="text-[12px] font-semibold">Price: ${price}</span>

              <div className="BUTTON bg-green-400 px-3 py-1 rounded-xl hover:text-white">
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

export default CategoryCard;
