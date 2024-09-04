"use client";
import React from "react";
import SliderList from "../../LogicList/MultipleSlider/SliderList";
import PakegeData from "./PakegesData";
import PakegeCard from "@/components/Common/CategoriesCards/pakegeCard";
import NewList from "@/components/LogicList/NewList/NewList";



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

      <NewList
        records={records}
        renderItem={PakegesRender}
        emptyMessage="There are no categories"
      />
    </div>
  );
}

export default PakegesRender;
