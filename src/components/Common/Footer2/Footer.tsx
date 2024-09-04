"use client";


import Link from "next/link";

const Footer2 = () => {

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center py-10 md:pt-20 md:pb-14">
          Welcome

         

          {/* social share */}
          <ul className="social-icons social-icons-footer">
            
          </ul>
        </div>

        <div className="border-t border-border py-5 dark:border-darkmode-border">
          <div className="flex flex-col md:flex-row gap-y-2 justify-between items-center text-light dark:text-darkmode-light">
            <ul className="flex gap-x-4">
              
            </ul>

           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
