import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import { HiOutlinePhone } from "react-icons/hi2";
import ThemeToggler from "./ThemeToggler";
import { CiLogin } from "react-icons/ci";
import LocaleSwitcher from "@/components/LocalSwitcher/local-switcher";
import { Link } from "@/navigation";

function FirstHeaer() {
  return (
    <div className="bg-slate-800  pb-2 pt-2 flex flex-col items-center justify-center ">
      <div className="container ">
        <div className="flex items-center justify-between">
          <Link
            href="/login"
            className="LOGIN flex items-center gap-2 text-white hover:text-green-400 cursor-pointer"
          >
            <span className="text-[11px] sm:text-[14px] md:text-[15px] ">
              Login
            </span>
            <span className="text-[14px] md:text-[18px]">
              <CiLogin />
            </span>
          </Link>

          <div className="xss:hidden md:block">
            <SocialLinks />
          </div>

          <div className="flex items-center gap-6">
            <Link
              className="flex items-center gap-1 text-white"
              href={"/"}
              target="_blank"
            >
              <span className="text-green-500 flex items-center gap-1 text-[10px] sm:text-[12px] md:text-[14px]">
                <HiOutlinePhone />
                <span className="">+201070095665</span>
              </span>
              <span className="text-[10px] sm:text[12px] md:text[16px] lg:text-[17px]">
                HOTLINE
              </span>
            </Link>

            <div className="flex items-center gp-3">
              <ThemeToggler />
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstHeaer;
