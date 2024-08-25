import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import Link from "next/link";
import { HiOutlinePhone } from "react-icons/hi2";

function FirstHeaer() {
  return (
    <div className="bg-slate-800 ] pb-4 pt-2 flex flex-col items-center justify-center">
      <div className="container flex items-center justify-between">
        <div className="">
          <SocialLinks />
        </div>
        <div className="">
          <Link
            className="flex items-center gap-1 text-white"
            href={"/"}
            target="_blank"
          >
            <span className="text-green-500 flex items-center gap-1 text-[10px] sm:text-[12px] md:text-[14px]">
              <HiOutlinePhone />
              <span className="">+201070095665</span>
            </span>
            <span className="">HOTLINE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FirstHeaer;
