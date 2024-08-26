import React from "react";
import Image from "next/image";

interface BannerCardProps {
  imgSrc: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ imgSrc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        alt="user-image"
        width={0}
        height={0} // Consider setting a valid height or using responsive design
        className="m-auto inline-block"
      />
    </div>
  );
};

export default BannerCard;
