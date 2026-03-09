import React from 'react'
import ft from '../../assets/images/ft.png'
import qr from '../../assets/images/qr.png'
import google from '../../assets/images/google.png'
import AppStore from '../../assets/images/AppStore.png'
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { CiPaperplane } from "react-icons/ci";


const Footer = () => {

    return (
        <>
           <footer className='bg-black '>
            <div className="container pb-[100px] ">
                <div className="grid grid-cols-5 pt-[80px] gap-[50px]">
                    <div>
                        <img src={ft} alt="" />
                        <h3 className='text-white text-[20px] leading-[28px] font-medium font-poppin pt-6'>Subscribe</h3>
                        <p className='text-[15px] font-poppin font-normal leading-6 text-white pt-6'>Get 10% off your first order</p>
                        <div className="w-[243px] relative   pt-7">
                            <input className="w-[217px] font-poppins font-normal text-3 text-[#FAFAFA] leading-[18px] py-[12px] pl-4 pr-3 outline-1 rounded-[4px] bg-transparent" type="text" placeholder="Enter your email" />
                            <CiPaperplane className=" absolute text-white right-[40px] top-[38px]  text-[20px]" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white text-[20px] leading-[28px] font-medium font-poppin'>Support</h3>
                        <p className='text-[15px] font-poppin font-normal leading-6 text-white pt-6 pr-2'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>exclusive@gmail.com</p>
                        <p className='text-[15px] font-poppin font-normal leading-6 text-white pt-6'>+88015-88888-9999</p>
                    </div>
                    <div>
                        <h3 className='text-white text-[20px] leading-[28px] font-medium font-poppin'>Account</h3>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>My Account</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>Login / Register</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>Cart</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>Wishlist</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>Shop</p>
                    </div>
                     <div>
                        <h3 className='text-white text-[20px] leading-[28px] font-medium font-poppin'>Quick Link</h3>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>Privacy Policy</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>Terms Of Use</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>FAQ</p>
                        <p className='text-[16px] font-poppin font-normal leading-6 text-white pt-6'>Contact</p>
                    </div>
                     <div>
                        <h3 className='text-white text-[20px] leading-[28px] font-medium font-poppin'>Download App</h3>
                        <p className='text-[12px] leading-[18px] font-medium font-poppin pt-6 text-[#FAFAFA]'>Save $3 with App New User Only</p>
                        <div className="flex pt-2 gap-2 pb-6">
                            <div>
                                <img src={qr} alt="" />
                            </div>
                            <div className='gap-[10px]'>
                                <a href="">
                                    <img src={google} alt="" />
                                </a>
                                <a href="">
                                    <img src={AppStore} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-6">
                        <a href="" className='text-[#FAFAFA] text-[24px]'>
                            <RiFacebookLine />

                        </a>
                        <a href="" className='text-[#FAFAFA] text-[24px]'>
                            <FiTwitter />
                        </a>
                        <a href="" className='text-[#FAFAFA] text-[24px]'>
                            <FaInstagram />
                        </a>
                        <a href="" className='text-[#FAFAFA] text-[24px]'>
                            <RiLinkedinLine />
                        </a>
                    </div>
                    </div>
                    
                </div>
            </div>
           </footer>
        </>
    )
}

export default Footer