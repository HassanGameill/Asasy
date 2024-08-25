"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import lightLogo from "../../../../public/images/Logos/Asasy_logo1.png";
import darklogo from "../../../../public/images/Logos/Asasy_logo1.png";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../../LocalSwitcher/local-switcher";
import { useLocale } from "next-intl";
import FirstHeaer from "./FirstHeaer";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";



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

  // Search bar state
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <FirstHeaer />
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent shadow-sm dark:shadow-md mt-12"
        }`}
      >
        <div className="container">
          
          <div className="flex items-center justify-between">

            <div className="w-[100px] max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-1" : "py-2 mt-5"
                }`}
              >
                <Image
                  src={theme === "dark" ? darklogo : lightLogo}
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full"
                />
              </Link>
            </div>

            

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 ">
                <span className="text-[32px] cursor-pointer hover:text-green-400">
                <CiShoppingCart />
                </span>
                <span className="text-[20px] cursor-pointer hover:text-red-600">
                <FaRegHeart />
                </span>
                
                
               
                
              </div>

              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
