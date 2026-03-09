import React, { useEffect, useState } from 'react'
import laptop from '../../assets/images/laptop.png'
import food from '../../assets/images/food.png'
import camera from '../../assets/images/camera.png'
import controller from '../../assets/images/controller.png'
import { FaStar } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router'
import axios from 'axios'



const Search = () => {

    const [catepro ,setCatePro] = useState([])
    const {keyword} = useParams()
    useEffect(() => {
  axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
    .then(res => {
        const keywordLower = keyword.toLocaleLowerCase()
        const filteredProducts = res.data.products.filter(product=>
            product.title.toLocaleLowerCase().includes(keywordLower) ||
            product.description.toLocaleLowerCase().includes(keywordLower) ||
            product.brand?.toLocaleLowerCase().includes(keywordLower) ||
            product.category.toLocaleLowerCase().includes(keywordLower)
        )
            setCatePro(filteredProducts)
    })
    .catch(err => console.error(err))
}, [keyword])

   

            const [visibleCount , setVisibleCount] = useState(4)

    return(
        <>
         <section className='pb-20'>
            <div className="container">
                 <div className="pt-[71px]">
                    <div className="flex items-end pb-[80px]">
                                     <div>
                                        <h4 className='text-[16px] font-poppin font-semibold leading-[20px] text-[#DB4444] pl-[36px] relative after:w-[20px] after:h-[40px] after:absolute after:content-[""] after:top-[-10px] after:left-0 after:bg-red-500 after:rounded-sm'>Searched Products</h4>
                                        <h2 className='text-[36px] pt-[34px] leading-[48px] font-inter font-semibold text-[#DB4444]'>{keyword}</h2>
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
                 </div>
                <div>
                 <div className="grid grid-cols-4  gap-[30px]">
                            {
                                catepro.slice(0,visibleCount).map((pro , index) => (
                                    <div key={index}>
                                 <div className=' bg-[#F5F5F5] py-[35px] px-[40px] rounded-sm mb-4 relative overflow-hidden group'>
                                     <Link to="/product/details"><img className='mx-auto' src={pro.thumbnail} alt="" /></Link>
                                    
                                     
                                      <div className='absolute right-4 top-4'>
                                           <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full mb-2'><IoIosHeartEmpty /></div>
                                             <div className='flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full'><IoEyeOutline /></div>
                                        </div>
                                        <a href=""className='bg-black w-full py-2 absolute left-0 -bottom-10 text-white text-center font-poppin font-medium leading-6 text-[16px] rounded-b-sm group-hover:bottom-0 duration-300' >Add To Cart</a>
                                 </div>
                                 <h3 className='text-4 font-poppin font-medium leading-6 pb-2 text-[#000000]'><Link to="/product/details">{pro.title}</Link></h3>
                                 
                                 <div className="flex gap-2 items-center pt-2">
                                     <div className="flex gap-1">
                                        <p className='text-4  flex gap-3 font-poppin font-medium leading-6 text-[#000000]'><span className='text-[#DB4444]'>${pro.price}</span></p>
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
                {
                    visibleCount < catepro.length  && 
                    <div className='pt-[76px] text-center'>
                    <a onClick={()=> setVisibleCount(visibleCount+4)} className='cursor-pointer px-12 py-3 bg-[#DB4444] text-white rounded-[4px] text-[16px] leading-[24px] font-poppin font-medium' >View More Products</a>
                </div>
                }
            </div>
        </section>
        </>
    )
}

export default Search