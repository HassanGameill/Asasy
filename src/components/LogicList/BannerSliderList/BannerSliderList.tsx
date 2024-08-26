import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LottieHandler } from "../../Feedback/LottiHandler/LottiHandler";

type SliderListProps<T> = {
  records?: T[];
  renderItem: (itemData: T) => React.ReactNode;
  emptyMessage: string;
};

type HasId = { id: number };

const BannerSliderList = <T extends HasId>({
  records = [],
  renderItem,
  emptyMessage,
}: SliderListProps<T>): JSX.Element => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1} 
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full h-full"
    >
      {records.length > 0 ? (
        records.map((itemData) => (
          <SwiperSlide key={itemData.id}>{renderItem(itemData)}</SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div>
            <LottieHandler type="empty" message={emptyMessage} />
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default BannerSliderList;
