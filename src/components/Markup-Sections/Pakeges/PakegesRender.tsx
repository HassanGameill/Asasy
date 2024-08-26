"use client";
import React from "react";
import SliderList from "../../LogicList/MultipleSlider/SliderList";
import PakegeData from "./PakegesData";
import PakegeCard from "@/components/Common/CategoriesCards/pakegeCard";



function PakegesRender() {
  // translation


  const records = PakegeData;

  const PakegesRender = (itemData) => (
    <div className="" key={itemData}>
      <PakegeCard {...itemData}  />
    </div>
  );

  return (
    <div className="">

      <SliderList
        records={records}
        renderItem={PakegesRender}
      />
    </div>
  );
}

export default PakegesRender;
