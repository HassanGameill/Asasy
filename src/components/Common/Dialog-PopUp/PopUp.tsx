import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { CiShoppingCart } from "react-icons/ci";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    imgSrc: string; // Change to string for type safety
    title: string;
    subtitle?: string; // Optional subtitle
    price: number;
  };
}

const DialogPopUp: React.FC<DialogProps> = ({ isOpen, onClose, data }) => {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[9999990]">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30 dark:bg-white/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white dark:bg-[#1A1F2B]">
            <div className="bg-white dark:bg-[#1A1F2B] pt-2 mx-4 pb-3 flex justify-end">
              <span
                className="text-center cursor-pointer rounded-lg w-[30px] h-[30px] hover:text-red-600"
                onClick={onClose}
                aria-label="Close dialog"
              >
                X
              </span>
            </div>
            {data && (
              <div className="px-4" dir={dir}>
                <div className="flex items-center gap-3 mb-1">
                  <div className="bg-white">
                    <Image
                      src={data.imgSrc}
                      alt={data.title}
                      width={0}
                      height={0}
                      className="m-auto inline-block rounded-t-lg"
                      priority // Add priority to improve loading performance
                    />
                  </div>
                </div>

                <div className="py-4">
                  <h3 className="dark:text-lightblack text-sm mb-2 font-semibold">{data.title}</h3>
                  {data.subtitle && <h4 className="text-lightblack text-[10px] font-normal opacity-50 mb-2">{data.subtitle}</h4>} {/* Display subtitle if available */}
                  
                  <ul className="text-sm my-5">
                    {/* This can be dynamically generated if needed */}
                    <li>5 oil | 8 Tea | 5 Sugar | 8 Rice | 5kg Broccoli</li>
                  </ul>

                  <div className="flex justify-between items-center pt-2 pb-2">
                    <span className="text-[14px] font-semibold">
                      Price: ${data.price.toFixed(2)}
                    </span>

                    <div className="BUTTON bg-primary px-3 py-2 rounded-xl text-white hover:text-white cursor-pointer">
                      <button className="flex items-center gap-2">
                        <span className="text-[18px]">
                          <CiShoppingCart />
                        </span>
                        <span className="text-[14px]">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogPopUp;
