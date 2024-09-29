"use client";
import React from "react";
import SliderList from "../../LogicList/MultipleSlider/SliderList";
import PakegeData from "./PakegesData";
import PakegeCard from "@/components/Common/CategoriesCards/pakegeCard";
import NewList from "@/components/LogicList/NewList/NewList";
import NewBanner from "@/components/Common/Banners/NewBanner";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";

function PakegesRender() {
  // translation

  const records = PakegeData;

  const PakegesRender = (itemData) => (
    <div className="" key={itemData}>
      <PakegeCard {...itemData} />
    </div>
  );

  return (
    <div className="">
      <HeadCategory title_en="Best Offers" title_ar="افضل العروض"  btnTitle_en="More" btnTitle_ar="المذيد" pathText="/offers" />
      
      <NewList
        records={records}
        renderItem={PakegesRender}
        emptyMessage="There are no categories"
      />
    </div>
  );
}

export default PakegesRender;
