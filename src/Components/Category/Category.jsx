import React, { useEffect, useState } from 'react'
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchPause } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import axios from 'axios';
import { Link } from 'react-router';







const Category = () => {
     const [categories ,setCategories] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then(result => setCategories(result.data))
  })

    return (
        <>
        <section className='pt-[76px] pb-[70px]'>
            <div className="container pt-[80px] border-t border-black">
               <div className="flex items-end">
                 <div>
                    <h4 className='text-[16px] font-poppin font-semibold leading-[20px] text-[#DB4444] pl-[36px] relative after:w-[20px] after:h-[40px] after:absolute after:content-[""] after:top-[-10px] after:left-0 after:bg-red-500 after:rounded-sm'>Categories</h4>
                    <h2 className='text-[36px] pt-[34px] leading-[48px] font-inter font-semibold text-black'>Browse By Category</h2>
                </div>
                 <div className='flex gap-2 ms-auto'>
                        <div className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center'>
                            <a href=""><GoArrowLeft className='w-6 h-6' /></a>
                        </div>
                        <div className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center'>
                            <a href=""><GoArrowRight className='w-6 h-6' /></a>
                        </div>
                    </div>
               </div>
                <div className='pt-[60px] grid grid-cols-6 gap-[30px]'>
                    {
                        categories.slice(0,6).map(Category => (
                            <Link>
                            <div className="border border-black group hover:bg-[#DB4444]  rounded-sm py-[25px] text-center">
                             <p className='text-[16px] leading-[24px] font-poppin font-normal text-black  group-hover:text-white'>{Category.name}</p>
                            </div>
                           </Link>
                        ))
                    }
                    
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Category