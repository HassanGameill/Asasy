import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";


interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    heading: string;
    heading2: string;
    imgSrc: any;
    
    content: {
      title: string;
      description: string;
    }[];
  } | null;
}


const DialogPopUp: React.FC<DialogProps> = ({ isOpen, onClose, data }) => {
    const local = useLocale();
  const listItems = data?.content || []; // Default to an empty array if data or data.list is undefined

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[9999990]">
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
            {data && (
              <div>
                <div className="flex items-center gap-3 mb-5 px-4 ">
                  <div className="bg-white rounded-full">
                    <Image
                      src={data.imgSrc}
                      alt={data.heading}
                      width={60}
                      height={60}
                      className="m-auto inline-block"
                    />
                  </div>
                  <h3 className=" dark:text-lightblack text-md font-semibold">
                    {data.heading}
                  </h3>
                </div>

                <h4 className="text-lightblack  text-md  font-normal opacity-50 mx-3 my-2">
                  {data.heading2}
                </h4>
                

                {/* List of titles and descriptions */}
                <div className="pt-2 pb-5">
                  {listItems.length > 0 ? (
                    listItems.map((item, index) => (
                      <div key={index} className="mb-3 bg-blue-400 dark:bg-slate-800 shadow-2xl  md:px-1 py-2 rounded-md mx-2 px-5">
                        <h5 className="text-white text-[12px] font-semibold text-wrap ">{item.title}</h5>
                        <p className="text-gray-200 text-[10px] md:text-[10px] py-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam.
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-lightblack">No additional information available.</p>
                  )}
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
