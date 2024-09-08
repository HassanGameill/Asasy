"use client";
import React from "react";
import SliderList from "../../../LogicList/MultipleSlider/SliderList";
import CardData from "./CardData";
import HeroCard from "../../../Common/CategoriesCards/HeroCard";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";

function HeroCardRender() {
  // translation


  const records = CardData;

  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <HeroCard {...itemData}  />
    </div>
  );

  return (
    <div className="">
      <HeadCategory title="Best Offers" btnTitle="More" pathText="/offers" />

      <SliderList
        records={records}
        renderItem={renderCategories}
      />
    </div>
  );
}

export default HeroCardRender;
