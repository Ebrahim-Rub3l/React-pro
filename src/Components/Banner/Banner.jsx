import React, { useEffect, useState } from 'react'
import iphone from '../../assets/images/iphone.png'
import apple from '../../assets/images/apple.png'
import wwe from '../../assets/images/wwe.jpg'
import wwf from '../../assets/images/wwf.jpg'
import { IoMdArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import { Link } from 'react-router'


const Banner = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [categories ,setCategories] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then(result => setCategories(result.data))
  })

    return (
        <>
        <section>
            <div className="container">
                <div className="flex gap-[45px] z-0">
                    <div className='w-[20%] gap-4 cate pt-10 flex flex-col border-r border-black'>
                      {
                        categories.slice(0,9).map(cate => (
                          <Link to={`products/category/${cate.slug}`}>{cate.name}</Link>
                        ))
                      }
                        
                     </div>
                    
       <div className="w-[80%] pt-10">
  <Slider {...settings}>

    
    <div>
      <div className="item bg-black flex">
        <div className='w-[40%] pt-[58px] pl-16 pr-[38px]'>
          <div className='flex items-center gap-[14.5px]'>
            <img src={apple} alt="Apple" />
            <p className='font-poppin text-white text-[16px]'>
              iPhone 14 Series
            </p>
          </div>

          <h2 className='font-inter font-semibold text-white pt-[20px] pb-[22px] text-[48px]'>
            Up to 10% off Voucher
          </h2>

          <p className='flex gap-2 items-center'>
            <a className='font-poppin text-white border-b border-white pb-1'>
              Shop Now
            </a>
            <IoMdArrowRoundForward className='text-white text-2xl'/>
          </p>
        </div>

        <div className='w-[60%] flex pt-4 justify-end'>
          <img src={iphone} alt="iPhone" />
        </div>
      </div>
    </div>

    
    <div>
      <div className="item bg-black flex">
        <div className='w-[40%] pt-[58px] pl-16 pr-[38px]'>
          <div className='flex items-center gap-[14.5px]'>
            <img src={apple} alt="wwe" />
            <p className='font-poppin text-white text-[16px]'>
              iPhone 14 Series
            </p>
          </div>

          <h2 className='font-inter font-semibold text-white pt-[20px] pb-[22px] text-[48px]'>
            Up to 10% off Voucher
          </h2>

          <p className='flex gap-2 items-center'>
            <a className='font-poppin text-white border-b border-white pb-1'>
              Shop Now
            </a>
            <IoMdArrowRoundForward className='text-white text-2xl'/>
          </p>
        </div>

        <div className='w-[60%] flex pt-4 justify-end'>
          <img src={wwe} alt="iPhone" />
        </div>
      </div>
    </div>

    
    <div>
      <div className="item bg-black flex">
        <div className='w-[40%] pt-[58px] pl-16 pr-[38px]'>
          <div className='flex items-center gap-[14.5px]'>
            <img src={apple} alt="wwf" />
            <p className='font-poppin text-white text-[16px]'>
              iPhone 14 Series
            </p>
          </div>

          <h2 className='font-inter font-semibold text-white pt-[20px] pb-[22px] text-[48px]'>
            Up to 10% off Voucher
          </h2>

          <p className='flex gap-2 items-center'>
            <a className='font-poppin text-white border-b border-white pb-1'>
              Shop Now
            </a>
            <IoMdArrowRoundForward className='text-white text-2xl'/>
          </p>
        </div>

        <div className='w-[60%] flex pt-4 justify-end'>
          <img src={wwf} alt="iPhone" />
        </div>
      </div>
    </div>

  </Slider>
</div>

                 
                </div>
            </div>
        </section>
        </>
    )
}

export default Banner