"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import lightLogo from "../../../../../public/images/logo/light-logo.png";
import darkLogo from "../../../../../public/images/logo/dark-logo.png";
import NewsLatterBox from "@/components/Markup-Sections/Contact/NewsLatterBox";

const ContactPopup = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/30 dark:bg-white/30"
        aria-hidden="true"
      />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white dark:bg-[#1A1F2B]">
            <div className="bg-white dark:bg-[#1A1F2B] pt-2 mx-4 flex justify-end">
              <span
                className="text-center cursor-pointer rounded-lg w-[30px] h-[30px] hover:text-red-600"
                onClick={onClose}
              >
                X
              </span>
            </div>
            <div className="LOGO flex justify-center bg-white dark:bg-[#1A1F2B]">
              <Image
                src={theme === "dark" ? darkLogo : lightLogo}
                alt="logo"
                width={150}
                height={0}
                className="m-auto inline-block shadow-lg"
              />
            </div>
            <NewsLatterBox />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default ContactPopup;