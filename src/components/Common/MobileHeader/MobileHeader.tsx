"use client"
import { Link } from '@/navigation'
import React from 'react'
import Wishlist from '@/components/Ecommerce/Wishlist/Wishlist';
import BasketCart from '@/components/Ecommerce/BasketCart/BasketCart';
import { TbCategory2 } from "react-icons/tb";
import { FiShoppingCart, FiUser, FiMessageSquare } from "react-icons/fi"; // Import more icons as needed
import { IoLogoWhatsapp } from "react-icons/io";



import style from './style.module.css'
const {cart_badge, wislist_badge} = style;

interface MenuType {
  name: string;
  path: string;
  icon: any;
}

const Menu: MenuType[] = [
  {
    name: 'Shop',
    path: '/',
    icon: <TbCategory2 />,
  },
  
  {
    name: 'Wishlist',
    path: '/wishlist',
    icon:  <Wishlist cart_badge={wislist_badge}/>,
  },
  
  {
    name: 'Cart',
    path: '/cart',
    icon: <BasketCart cart_badge={cart_badge}/>,
  },
  
  {
    name: 'Account',
    path: '/',
    icon: <FiUser/>,
  },

  {
    name: 'Chat',
    path: '/',
    icon: <IoLogoWhatsapp className='text-green-500 text-[22px]'/>,
  },
  
  
]

function MobileHeader() {
  return (
    <header>
        <div className="lg:hidden bg-white  dark:text-slate-800 py-3 w-full fixed bottom-0 mb-2 z-[999] rounded-3xl shadow-2xl">
          <nav className="container flex gap-4 items-center justify-between">
            {
              Menu.map((item, idx) => (
                <Link href={"/"} key={idx} className='flex flex-col items-center gap-1 hover:text-green-800'>
                  <span className="text-[18px] sm:text-[20px]  ">{item.icon}</span>
                  <span className="text-[10px] font-semibold">{item.name}</span>
                </Link>

              ))
            }

            
            
          </nav>


        </div>
        
    </header>
  )
}

export default MobileHeader