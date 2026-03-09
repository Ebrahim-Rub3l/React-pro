import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import CountdownTimer from '../Countdown/Countdown';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import axios from 'axios';

import "swiper/css";
import "swiper/css/navigation";

const Today = () => {
    const [item, setItem] = useState([]);
    // State to hold the custom navigation elements
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setItem(res.data.products))
            .catch(err => console.log(err))
    }, []);

    return (
        <section className='pt-[140px]'>
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className='flex gap-[87px] items-end pb-10'>
                    <div className='heading'>
                        <h4 className='text-[16px] font-poppin font-semibold leading-[20px] text-[#DB4444] pl-[36px] relative after:w-[20px] after:h-[40px] after:absolute after:content-[""] after:top-[-10px] after:left-0 after:bg-red-500 after:rounded-sm'>Today’s</h4>
                        <h2 className='text-[36px] leading-[48px] font-inter font-semibold text-[#000000] pt-[34px] '>Flash Sales</h2>
                    </div>
                    
                    <div>
                        <CountdownTimer targetDate="2026-12-31T23:59:59" />
                    </div>

                    {/* Custom Navigation Arrows */}
                    <div className='flex gap-2 ms-auto'>
                        <div 
                            ref={(node) => setPrevEl(node)}
                            className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-all'
                        >
                            <GoArrowLeft className='w-6 h-6' />
                        </div>
                        <div 
                            ref={(node) => setNextEl(node)}
                            className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-all'
                        >
                            <GoArrowRight className='w-6 h-6' />
                        </div>
                    </div>
                </div>

                {/* Swiper Implementation */}
                <div className="pb-[100px]">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={4}
                        // Linking the state-based elements here
                        navigation={{
                            prevEl,
                            nextEl,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {item.map((flash) => (
                            <SwiperSlide key={flash.id}>
                                <div className='group'>
                                    <div className='bg-[#F5F5F5] py-[35px] px-[40px] rounded-sm mb-4 relative overflow-hidden'>
                                        <img className='mx-auto h-[150px] object-contain' src={flash.thumbnail} alt={flash.title} />
                                        
                                        <div className='w-[60px] h-[26px] flex items-center justify-center rounded-[4px] absolute left-[12px] top-[12px] bg-[#DB4444] '>
                                            <span className='text-white text-xs'>-{Math.round(flash.discountPercentage)}%</span>
                                        </div>

                                        <button className='bg-black w-full py-2 absolute left-0 -bottom-10 text-white text-center font-poppin font-medium text-[16px] rounded-b-sm group-hover:bottom-0 duration-300'>
                                            Add To Cart
                                        </button>

                                        <div className='absolute right-4 top-4'>
                                            <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full mb-2 cursor-pointer hover:text-red-500'><IoIosHeartEmpty /></div>
                                            <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full cursor-pointer hover:text-blue-500'><IoEyeOutline /></div>
                                        </div>
                                    </div>
                                    <h3 className='text-[16px] font-poppin font-medium leading-6 pb-2 text-[#000000] truncate'>{flash.title}</h3>
                                    <p className='text-[16px] flex gap-3 font-poppin font-medium leading-6'>
                                        <span className='text-[#DB4444]'>${flash.price}</span> 
                                        <del className='text-gray-500'>${(flash.price * 1.25).toFixed(2)}</del>
                                    </p>
                                    <div className="flex gap-2 items-center pt-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < Math.round(flash.rating) ? "text-[#FFAD33]" : "text-gray-300"} />
                                            ))}
                                        </div>
                                        <span className='text-sm font-poppin font-semibold text-gray-400'>({flash.stock})</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Today;