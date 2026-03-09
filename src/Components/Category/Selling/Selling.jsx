import React from 'react'
import jacket from '../../../assets/images/jacket.png'
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import bag from '../../../assets/images/bag.png'
import sound from '../../../assets/images/sound.png'
import book from '../../../assets/images/book.png'


const Selling = () => {
    const sellpro   = [
            {id:1 , name:'The north coat', dprice:260 , price:360 ,discount : 100 , image :jacket },
            {id:2 , name:'Gucci duffle bag', dprice:960 , price:1160 ,discount : 200 , image :bag },
            {id:3 , name:'RGB liquid CPU Cooler', dprice:160 , price:170 ,discount : 10 , image :sound },
            {id:4 , name:'Small BookSelf', price:360 , image :book },
            
        ]

    return (
        <>
         <section>
                     <div className="container border-t border-black ">
                        <div className='pt-[70px]'>
                            <h4 className='text-[16px] font-poppin font-semibold leading-[20px] text-[#DB4444] pl-[36px] relative after:w-[20px] after:h-[40px] after:absolute after:content-[""] after:top-[-10px] after:left-0 after:bg-red-500 after:rounded-sm'>This Month</h4>
                            <h2 className='text-[36px] font-inter font-semibold leading-[48px]text-black pt-[34px] pb-[60px] flex justify-between'><span>Best Selling Products</span>
                            <a className='px-12 py-3 bg-[#DB4444] text-white rounded-[4px] text-[16px] leading-[24px] font-poppin font-medium' href="">View All</a>
                            </h2>
                        </div>
                         <div className="grid grid-cols-4  gap-[30px]">
                            {
                                sellpro.map(sell => (
                                    <div >
                                 <div className=' bg-[#F5F5F5] py-[35px] px-[40px] rounded-sm mb-4 relative'>
                                     <img className='mx-auto' src={sell.image} alt="" />
                                      <div className='absolute right-4 top-4'>
                                           <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full mb-2'><IoIosHeartEmpty /></div>
                                             <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><IoEyeOutline /></div>
                                        </div>
                                 </div>
                                 <h3 className='text-4 font-poppin font-medium leading-6 pb-2 text-[#000000]'>{sell.name}</h3>
                                 <p className='text-4  flex gap-3 font-poppin font-medium leading-6 text-[#000000]'><span className='text-[#DB4444]'>${sell.dprice}</span> <del>${sell.price}</del></p>
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

export default Selling