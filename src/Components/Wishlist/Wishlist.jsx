import React from 'react'
import controller from '../../assets/images/controller.png'
import key from '../../assets/images/key.png'
import pc from '../../assets/images/pc.png'
import chair from '../../assets/images/chair.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";


const Wishlist = () => {
        const Flash   = [
                {id:1 , name:'HAVIT HV-G92 Gamepad', dprice:120 , price:160 ,discount : 40 , image :controller },
                {id:2 , name:'AK-900 Wired Keyboard', dprice:120 , price:160 ,discount : 40 , image :key },
                {id:3 , name:'IPS LCD Gaming Monitor', dprice:120 , price:160 ,discount : 40 , image :pc },
                {id:4 , name:'S-Series Comfort Chair ', dprice:120 , price:160 ,discount : 40 , image :chair },
                
            ]
                 const item   = [
                {id:1 , name:'HAVIT HV-G92 Gamepad', dprice:120 , price:160 ,discount : 40 , image :controller },
                {id:2 , name:'AK-900 Wired Keyboard', dprice:120 , price:160 ,discount : 40 , image :key },
                {id:3 , name:'IPS LCD Gaming Monitor', dprice:120 , price:160 ,discount : 40 , image :pc },
                {id:4 , name:'S-Series Comfort Chair ', dprice:120 , price:160 ,discount : 40 , image :chair },
                
            ]

    return(
        <>
         <section className='pt-[80px]'>
            <div className="container">
                <div className='flex justify-between items-center pb-15'>
                    <h3 className='text-5 leading-[26px] font-poppin font-normal text-black'>Wishlist (4)</h3>
                    <a href=""className='text-4 leading-6 font-poppin font-medium text-black py-4 px-[48px] border rounded-sm'>Move All To Bag</a>
                </div>
                <div className="grid grid-cols-4 pb-[118px] gap-[30px]">
                                            {
                                                Flash.map (flash => (
                                                     <div >
                                                <div className=' bg-[#F5F5F5] py-[35px] px-[40px] rounded-sm mb-4 relative overflow-hidden group'>
                                                    <img className='mx-auto' src={flash.image} alt="" />
                                                    <div className='w-[55px] h-[26px] text-center rounded-[4px] absolute left-[12px] top-[12px] bg-[#DB4444] '>
                                                        <span className='text-white'>-40%</span>
                                                    </div>
                                                    <a href=""className='bg-black w-full py-2 absolute left-0 bottom-0 text-white  font-poppin font-medium leading-6 text-[16px] text-center rounded-b-sm ' > Add To Cart</a>
                                                    <div className='absolute right-4 top-4'>
                                                        <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full mb-2'><RiDeleteBin6Line/></div>
                                                    </div>
                                                 </div>
                                                <h3 className='text-4 font-poppin font-medium leading-6 pb-2 text-[#000000]'>{flash.name}</h3>
                                                <p className='text-4  flex gap-3 font-poppin font-medium leading-6 text-[#000000]'><span className='text-[#DB4444]'>{flash.dprice}</span> <del>{flash.price}</del></p>
                                                <div className="flex gap-2 items-center pt-2">
                                                </div>
                                            </div>
                                                ))
                                            }
                                           
                                            
                         </div>
                         <div className='flex justify-between items-center pb-[60px]'>
                    <h4 className='text-[16px] font-poppin font-semibold leading-[20px] text-[#DB4444] pl-[36px] relative after:w-[20px] after:h-[40px] after:absolute after:content-[""] after:top-[-10px] after:left-0 after:bg-red-500 after:rounded-sm'>Just For You</h4>
                    <a href=""className='text-4 leading-6 font-poppin font-medium text-black py-4 px-[48px] border rounded-sm'>See All</a>
                </div>
                <div className="grid grid-cols-4 pb-[140px] gap-[30px]">
                                            {
                                                item.map (flash => (
                                                     <div >
                                                <div className=' bg-[#F5F5F5] py-[35px] px-[40px] rounded-sm mb-4 relative overflow-hidden group'>
                                                    <img className='mx-auto' src={flash.image} alt="" />
                                                    <div className='w-[55px] h-[26px] text-center rounded-[4px] absolute left-[12px] top-[12px] bg-[#DB4444] '>
                                                        <span className='text-white'>-40%</span>
                                                    </div>
                                                    <a href=""className='bg-black w-full py-2 absolute left-0 -bottom-10 text-white text-center font-poppin font-medium leading-6 text-[16px] rounded-b-sm group-hover:bottom-0 duration-300' >Add To Cart</a>
                                                    <div className='absolute right-4 top-4'>
                                                        <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full mb-2'><IoIosHeartEmpty /></div>
                                                        <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><IoEyeOutline /></div>
                                                    </div>
                                                 </div>
                                                <h3 className='text-4 font-poppin font-medium leading-6 pb-2 text-[#000000]'>{flash.name}</h3>
                                                <p className='text-4  flex gap-3 font-poppin font-medium leading-6 text-[#000000]'><span className='text-[#DB4444]'>{flash.dprice}</span> <del>{flash.price}</del></p>
                                                <div className="flex gap-2 items-center pt-2">
                                                    <div className="flex gap-1">
                                                        <FaStar className='text-[#FFAD33] text-[20px]' />
                                                        <FaStar className='text-[#FFAD33] text-[20px]' />
                                                        <FaStar className='text-[#FFAD33] text-[20px]' />
                                                        <FaStar className='text-[#FFAD33] text-[20px]' />
                                                        <FaStar className='text-[#FFAD33] text-[20px]' />
                                                    </div>
                                                    <div>
                                                        <span className='text-4 font-poppin font-semibold leading-5 text-black'>(88)</span>
                                                    </div>
                                                </div>
                                            </div>
                                                ))
                                            }
                                           
                                            
                         </div>
            </div>
         </section>
        </>
    )
}

export default Wishlist