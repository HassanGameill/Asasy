"use client";
import React from "react";
import SliderList from "../../../LogicList/MultipleSlider/SliderList";
import CardData from "./CardData";
import HeroCard from "../../../Common/CategoriesCards/HeroCard";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";
import NewList from "@/components/LogicList/NewList/NewList";
import NewListTwo from "@/components/LogicList/NewList/NewListTwo";

function HeroCardRender() {
  // translation

  const records = CardData;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <HeroCard {...itemData} />
    </div>
  );

  


  return (
    <div className="">
      <HeadCategory
        title_en="Best Offers"
        title_ar="افضل العروض"
        btnTitle_en="More"
        btnTitle_ar="المذيد"
        pathText="/offers"
      />

      <NewListTwo records={records} renderItem={renderCategories} emptyMessage=""/>
    </div>
  );
}

export default HeroCardRender;
