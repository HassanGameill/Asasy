import Image from "next/image";
import React from "react";

import logo from "../../../../public/images/Logos/Asasy_logo2.png";

function NewBanner() {
  return (
    <div className="bg-primary flex flex-col lg:flex-row justify-between items-center gap-4 shadow-lg rounded-md p-5 px-10  ">

      <div className="py-5 lg:w-[600px] bg-black/60 p-4 rounded-lg">
        <h2 className="font-semibold text-lg text-white">
          Asasy Package <span className="text-[#FFD500]">Famly House</span>{" "}
        </h2>
        <p className="text-[12px] mt-3 overflow-hidden text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia
          ex consectetur quas nemo ab maiores alias eaque totam dolor.
          Lorem ipsum dolor sit .
        </p>
      </div>

      

      <div className="flex items-center justify-center w-[200px] h-[100px] bg-white rounded-lg shadow-lg ">
        <Image
          src={logo}
          alt="package-img"
          width={0}
          height={0}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default NewBanner;
