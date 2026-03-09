import React from "react";
import aboutimg from '../../assets/images/aboutimg.png'
import chobi111 from '../../assets/images/chobi1.png'
import chobi2 from '../../assets/images/chobi2.png'
import chobi3 from '../../assets/images/chobi3.png'
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdCreditScore } from "react-icons/md";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const About = () => {
   
    return(
        <>
        <section>
            <div className="container w-[85%] mx-auto justify-center items-center">
                <div className='py-20'>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-4'>
                    <a href="" className=''>Home</a> 
                    <span>/</span>
                    <span>About</span>
                </p>
            </div>
                <div className="flex gap-[75px] pb-[140px]  ">
                    <div className="w-[45%] flex flex-col justify-center items-center">
                        <div>
                            <h3 className="text-[54px] text-left leading-[64px] font-inter font-semibold text-[#000000]">Our Story</h3>
                        <p className="text-[16px] pt-10 leading-[26px] font-poppin font-normal text-[#000000]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className="text-[16px] pt-6 leading-[26px] font-poppin font-normal text-[#000000]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                    </div>
                    <div className="w-[55%] ">
                        <img className="w-full" src={aboutimg} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[50px] pb-[140px]  ">
                                    <div className='border border-black group hover:bg-[#DB4444]  rounded-sm py-[25px] text-center'>
                                        <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                            <FaTruckFast className='text-white  group-hover:text-white  w-[32px] h-[32px] mx-auto'/>
                                        </div>
                                        <div className="text-center">
                                            <h3 className='text-[32px] pt-6 pb-2 font-inter font-bold group-hover:text-white leading-[30px] text-black '>10.5k</h3>
                                        <p className='text-[16px] leading-[24px] font-poppin font-normal group-hover:text-white'>Sallers active our site</p>
                                        </div>
                                    </div>
                                     <div className='border border-black group hover:bg-[#DB4444]  rounded-sm py-[25px] text-center'>
                                        <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                            <TfiHeadphoneAlt className='text-white group-hover:text-white  w-[32px] h-[32px] mx-auto'/>
                                        </div>
                                        <div className="text-center">
                                            <h3 className='text-[32px] pt-6 pb-2 font-inter font-bold leading-[30px] group-hover:text-white text-black '>33k</h3>
                                        <p className='text-[16px] group-hover:text-white leading-[24px] font-poppin font-normal'>Mopnthly Produduct Sale</p>
                                        </div>
                                    </div>
                                    <div className='border border-black group hover:bg-[#DB4444]  rounded-sm py-[25px] text-center'>
                                        <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                            <MdCreditScore className='text-white group-hover:text-white  w-[32px] h-[32px] mx-auto'/>
                                        </div>
                                        <div className="text-center">
                                            <h3 className='text-[32px] pt-6 pb-2 font-inter font-bold leading-[30px] group-hover:text-white text-black '>45.5k</h3>
                                        <p className='text-[16px] leading-[24px] font-poppin font-normal group-hover:text-white'>Customer active in our site</p>
                                        </div>
                                    </div>
                                     <div className='border border-black group hover:bg-[#DB4444]  rounded-sm py-[25px] text-center'>
                                        <div className='bg-black w-[68px] h-[68px] flex justify-center items-center border-10 border-[#C1C0C1] rounded-full mx-auto'>
                                            <MdCreditScore className='text-white group-hover:text-white w-[32px] h-[32px] mx-auto'/>
                                        </div>
                                        <div className="text-center">
                                            <h3 className='text-[32px] group-hover:text-white pt-6 pb-2 font-inter font-bold leading-[30px] text-black '>45.5k</h3>
                                        <p className='text-[16px] leading-[24px] font-poppin font-normal group-hover:text-white'>Customer active in our site</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-[88px] mb-[140px]">
                                                    <div className='w-[370] h-[430]'>
                                                        <div className='bg-[#F5F5F5] px-[67px] pt-[39px]   mx-auto'>
                                                            <img className="w-full" src={chobi2} alt="" />
                                                        </div>
                                                        <div className="">
                                                            <h3 className='text-[32px] pt-8 pb-2 font-inter font-bold leading-[30px] text-black '>Tom Cruise</h3>
                                                        <p className='text-[16px] leading-[24px] font-poppin font-normal'>Founder & Chairman</p>
                                                        <div className="flex gap-[4px] pt-4">
                                                            <FiTwitter/>
                                                            <FaInstagram/>
                                                            <RiLinkedinLine/>


                                                        </div>
                                                        </div>
                                                    </div>
                                                     <div className='w-[370] h-[430]'>
                                                        <div className='bg-[#F5F5F5] px-[67px] pt-[39px]  mx-auto'>
                                                            <img  src={chobi2} alt="" />
                                                        </div>
                                                        <div className="">
                                                            <h3 className='text-[32px] pt-8 pb-2 font-inter font-bold leading-[30px] text-black '>Tom Cruise</h3>
                                                        <p className='text-[16px] leading-[24px] font-poppin font-normal'>Founder & Chairman</p>
                                                        <div className="flex gap-[4px] pt-4">
                                                            <FiTwitter/>
                                                            <FaInstagram/>
                                                            <RiLinkedinLine/>


                                                        </div>
                                                        </div>
                                                    </div>
                                                     <div className=''>
                                                        <div className='bg-[#F5F5F5] px-[67px] pt-[39px]  mx-auto'>
                                                            <img src={chobi2} alt="" />
                                                        </div>
                                                        <div className="">
                                                            <h3 className='text-[32px] pt-8 pb-2 font-inter font-bold leading-[30px] text-black '>Tom Cruise</h3>
                                                        <p className='text-[16px] leading-[24px] font-poppin font-normal'>Founder & Chairman</p>
                                                        <div className="flex gap-[4px] pt-4">
                                                            <FiTwitter/>
                                                            <FaInstagram/>
                                                            <RiLinkedinLine/>


                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-3 mb-[140px] gap-[88px] px-[114px]">
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

export default About