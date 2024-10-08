import Image from "next/image";
import React from "react";

import IMG from "../../../public/icons/dark-logo.png";

function LoadingPage() {
  return (
    <section className="container py-52">
      <div className="flex flex-col items-center justify-center">
        <Image src={IMG} width={300} height={300} alt="logo-loading" />
        <span className="text-2xl">Loading ....</span>
      </div>
    </section>
  );
}

export default LoadingPage;
