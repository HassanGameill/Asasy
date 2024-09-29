"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";
import darklogo from "../../../../public/images/Logos/dark-logo.png";
import lightLogo from "../../../../public/images/Logos/Asasy_logo1.png";

import LocaleSwitcher from "@/components/LocalSwitcher/local-switcher";
import { HiBars3, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import BasketCart from "@/components/Ecommerce/BasketCart/BasketCart";
import Wishlist from "@/components/Ecommerce/Wishlist/Wishlist";

const { cart_badge, wishlist_badge } = style;

import style from "./style.module.css";
import Nav from "./Nav";
import { useLocale } from "next-intl";

const Header = () => {
  // Navbar toggle state
  const [navbarOpen, setNavbarOpen] = useState(false);
  const locale: string = useLocale();

  // Toggle navbar visibility
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
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
    <header
      dir="ltr"
      className={` header left-0 top-0 z-40 flex w-full items-center gap-2  ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] py-1 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent shadow-sm dark:shadow-md mt-12 py-4"
      }`}
    >
      <div className="container">
        <div className="relative -mx-2 flex items-center justify-between gap-2 ">
          {/* Logo */}
          <div className="w-[50px] md:w-[60px] lg:w-[70px] ">
            <Link href="/">
              <Image
                src={darklogo}
                alt="logo"
                width={0}
                height={0}
                className="w-full"
              />
            </Link>
          </div>

          {/* Nav component - controlled by navbarOpen */}
          
          <Nav
            navbarOpen={navbarOpen}
            navbarToggleHandler={navbarToggleHandler}
          />

          <div className={`flex items-center gap-4`}>
            <div
              className={`search-box w-full cursor-pointer flex items-center shadow-md px-2 xss:rounded-lg  
                  ${openSearch ? " bg-[#2c2b2b] dark:bg-white px-3" : " justify-center bg-white "}
                  lg:!flex lg:w-[300px] lg:bg-[#2c2b2b] lg:dark:bg-white lg:px-3  ${
                    locale === "ar" ? "__rtl_lang" : ""
                  }`}
            >
              <input
                className={`placeholder-gray-400 dark:placeholder-gray-600 dark:text-black text-white ${
                  openSearch ? "w-full py-2 px-3" : "w-0"
                } lg:w-full lg:py-2 lg:px-3 `}
                type="text"
                placeholder={locale === "ar" ? "ابحث هنا ..." : "Searsh here ..."}
              />
              <span
                className={`px-[3px] py-2 ${openSearch ? " text-white dark:text-[#222]" : " text-[#2c2b2b]"}
                    lg:text-white lg:dark:text-[#222]`}
                onClick={handleOpenSearch}
              >
                <HiOutlineMagnifyingGlass />
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[32px] cursor-pointer hover:text-primary">
                <BasketCart cart_badge={cart_badge} />
              </span>
              <HiBars3
                onClick={navbarToggleHandler}
                className="text-[33px] cursor-pointer lg:hidden"
              />
              <span className="hidden lg:block text-[28px] cursor-pointer hover:text-red-600">
                <Wishlist cart_badge={wishlist_badge} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
