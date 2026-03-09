import React from 'react'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'

const  Arrival = () => {

    return(
        <>
          <section className='pt-[168px] '>
            <div className="container">
                <div className='heading'>
                        <h4 className='text-[16px] font-poppin font-semibold leading-[20px] text-[#DB4444] pl-[36px] relative after:w-[20px] after:h-[40px] after:absolute after:content-[""] after:top-[-10px] after:left-0 after:bg-red-500 after:rounded-sm'>Featured</h4>
                    <h2 className='text-[36px] leading-[48px] font-inter font-semibold text-[#000000] pt-[34px] '>New Arrival</h2>
                </div>
                <div className="flex pt-[60px] gap-[30px]">
                    <div className='w-1/2 bg-black relative rounded-sm'>
                   <img src={img1} alt="" className='mx-auto pt-[90px]'/>
                   <div className='absolute bottom-8 left-8 max-w-[242px]'>
                      <h3 className='text-6 text-white pb-4 leading-6 font-inter font-semibold'>PlayStation 5</h3>
                      <p className='text-[14px] pb-4 leading-[21px] font-poppin font-normal text-white'>Black and White version of the PS5 coming out on sale.</p>
                      <a href="" className='text-[16px] leading-6 font-poppin font-medium border-b border-[#] text-white '>Shop Now</a>
                   </div>
                  </div>
                <div className='w-1/2'>
                  <div className='bg-black relative rounded-sm'>
                    <img src={img2} className='ms-auto' alt="" />
                    <div className='absolute bottom-8 left-8 max-w-[255px]'>
                      <h3 className='text-6 text-white pb-4 leading-6 font-inter font-semibold'>Women’s Collections</h3>
                      <p className='text-[14px] pb-4 leading-[21px] font-poppin font-normal text-white'>Featured woman collections that give you another vibe.</p>
                      <a href="" className='text-[16px] leading-6 font-poppin font-medium border-b border-[#] text-white '>Shop Now</a>
                   </div>
                  </div>
                  <div className='flex pt-8 gap-[30px]'>
                    
                        <div className='w-1/2 bg-black relative rounded-sm'>
                   <img src={img3} alt="" className='mx-auto pt-[90px]'/>
                   <div className='absolute bottom-8 left-8 max-w-[242px]'>
                      <h3 className='text-6 text-white pb-2 leading-6 font-inter font-semibold'>Speakers</h3>
                      <p className='text-[14px] pb-2 leading-[21px] font-poppin font-normal text-white'>Amazon wireless speakers</p>
                      <a href="" className='text-[16px] leading-6 font-poppin font-medium border-b border-[#] text-white '>Shop Now</a>
                   </div>
                  </div>
                  <div className='w-1/2 bg-black relative rounded-sm'>
                   <img src={img4} alt="" className='mx-auto pt-[90px]'/>
                   <div className='absolute bottom-8 left-8 max-w-[242px]'>
                      <h3 className='text-6 text-white pb-2 leading-6 font-inter font-semibold'>Perfume</h3>
                      <p className='text-[14px] pb-2 leading-[21px] font-poppin font-normal text-white'>GUCCI INTENSE OUD EDP</p>
                      <a href="" className='text-[16px] leading-6 font-poppin font-medium border-b border-[#] text-white '>Shop Now</a>
                   </div>
                  </div>

                    

                  </div>
                </div>
                </div>
            </div>
          </section>
        </>
    )
}

export default Arrival