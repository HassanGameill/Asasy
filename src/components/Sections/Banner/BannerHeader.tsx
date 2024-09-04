import React from 'react'
import BannerData from './BannerData'
import BannerCard from '../../Common/CategoriesCards/BannerCard';
import BannerSliderList from '../../LogicList/BannerSliderList/BannerSliderList';






function BannerHeader() {
    const records = BannerData;


    
  const renderBanner = (itemData) => (
    <div className="" key={itemData}>
      <BannerCard {...itemData} />
    </div>
  );





  return (
    <div>
      
        <BannerSliderList
          emptyMessage="There are no categories"
          records={records}
          renderItem={renderBanner}
        />
      
      </div>
  )
}

export default BannerHeader