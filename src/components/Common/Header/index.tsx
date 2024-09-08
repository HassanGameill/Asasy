"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import lightLogo from "../../../../public/images/Logos/Asasy_logo1.png";
import darklogo from "../../../../public/images/Logos/dark-logo.png";

import BasketCart from "@/components/Ecommerce/BasketCart/BasketCart";
import Wishlist from "@/components/Ecommerce/Wishlist/Wishlist";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import style from "./style.module.css";
import Nav from "./Nav";

const { cart_badge, wishlist_badge } = style;

const Header = () => {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Dark mode handling
  const { theme } = useTheme();

  // Search bar state for smaller screens
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent shadow-sm dark:shadow-md mt-12"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div
              className={`w-[55px] sm:w-[60px] md:w-[70px]  max-w-full xl:mr-12 ${openSearch ? " " : ""}`}
            >
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-1" : "py-1 lg:py-2 mt-5"
                }`}
              >
                <Image
                  src={darklogo}
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full"
                />
              </Link>
            </div>

            <div className="">
              <Nav />
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`search-box w-full cursor-pointer flex items-center shadow-md px-2 xss:rounded-lg  
                  ${openSearch ? " bg-[#2c2b2b] dark:bg-white px-3" : " justify-center bg-white "}
                  lg:!flex lg:w-[300px] lg:bg-[#2c2b2b] lg:dark:bg-white lg:px-3`}
              >
                <input
                  className={`placeholder-gray-400 dark:placeholder-gray-600 dark:text-black text-white ${
                    openSearch ? "w-full py-2 px-3" : "w-0"
                  } lg:w-full lg:py-2 lg:px-3 `}
                  type="text"
                  placeholder="Search By..."
                />
                <span
                  className={`px-[3px] py-2 ${openSearch ? " text-white dark:text-[#222]" : " text-[#2c2b2b]"}
                    lg:text-white lg:dark:text-[#222]`}
                  onClick={handleOpenSearch}
                >
                  <HiOutlineMagnifyingGlass />
                </span>
              </div>

              <div className="flex items-center ">
                <span className="text-[32px] cursor-pointer hover:text-primary">
                  <BasketCart cart_badge={cart_badge} />
                </span>
                {/* <span className="text-[20px] cursor-pointer hover:text-red-600">
                  <Wishlist cart_badge={wishlist_badge} />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
