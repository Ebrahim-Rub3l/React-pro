import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdCreditScore } from "react-icons/md";




const DELIVERY = () => {

    return(
        <>
        <section className='pt-[139px] pb-[141px]'>
            <div className="container">
                <div className="grid grid-cols-3 gap-[88px] px-[114px]">
                    <div className=''>
                        <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                            <FaTruckFast className='text-white  w-[32px] h-[32px] mx-auto'/>
                        </div>
                        <div className="text-center">
                            <h3 className='text-[20px] pt-6 pb-2 font-poppin font-semibold leading-[28px] text-black '>FREE AND FAST DELIVERY</h3>
                        <p className='text-[14px] leading-[21px] font-poppin font-normal'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                     <div className=''>
                        <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                            <TfiHeadphoneAlt className='text-white  w-[32px] h-[32px] mx-auto'/>
                        </div>
                        <div className="text-center">
                            <h3 className='text-[20px] pt-6 pb-2 font-poppin font-semibold leading-[28px] text-black '>24/7 CUSTOMER SERVICE</h3>
                        <p className='text-[14px] leading-[21px] font-poppin font-normal'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                     <div className=''>
                        <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                            <MdCreditScore className='text-white  w-[32px] h-[32px] mx-auto'/>
                        </div>
                        <div className="text-center">
                            <h3 className='text-[20px] pt-6 pb-2 font-poppin font-semibold leading-[28px] text-black '>MONEY BACK GUARANTEE</h3>
                        <p className='text-[14px] leading-[21px] font-poppin font-normal'>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default DELIVERY