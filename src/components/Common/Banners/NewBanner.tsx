import Image from "next/image";
import React from "react";

import logo from "../../../../public/images/Logos/dark-logo.png";

function NewBanner() {
  return (
    <div className="bg-green-400   flex flex-col lg:flex-row justify-between items-center gap-4 shadow-lg rounded-md p-5 px-10  ">

      <div className="py-5 lg:w-[600px]">
        <h2 className="font-semibold text-2xl text-white">
          Asasy Package <span className="text-orange-400">Famly House</span>{" "}
        </h2>
        <p className="text-[13px] mt-3 overflow-hidden text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia
          ex consectetur quas nemo ab maiores alias eaque totam dolor.
          Lorem ipsum dolor sit .
        </p>
      </div>

      

      <div className="w-[200px] ">
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
