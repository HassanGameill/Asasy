import React from 'react'
import {useState, useEffect} from 'react'
import style from './style.module.css'
const {cart_badge, pumpCartQuantity } = style;
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";



// import {useAppDispatch, useAppSelector} from '../../../RTK-STORE/hooks'
// import { addToCart } from "../../../RTK-STORE/cart/cartSlice";

// import {getCartTotalQuantitySelector} from "../../../RTK-STORE/cart/Selectors/Selector"; 





const Wishlist = ({cart_badge}: any) => {
  const [isAnimate, setIsAnimate] = useState(false)


  
  // const totalQuantity = useAppSelector(
  // getCartTotalQuantitySelector)
  
  // console.log(totalQuantity)
  
  
  const quantityStile = `${cart_badge} ${isAnimate ? pumpCartQuantity : ""}`


  
  // useEffect(() => {
  //   if (!totalQuantity) {
  //     return;
  //   }
    
  //   setIsAnimate(true)
  //   const debounce = setTimeout(() => {
  //     setIsAnimate(false)
  //   }, 400)
    
  //   return () => clearTimeout(debounce);
  // }, [totalQuantity])
  
  
  
  return (
    <div className="relative">
        <span className="text-[16px] lg:text-[20px]">
        <FaRegHeart />
        </span>
       
      {
      <span className={`${quantityStile}`}>
      1
      </span>
      }
    </div>
      
  )
}

export default Wishlist