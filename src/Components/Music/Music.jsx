import React from 'react'
import CountdownTimer from '../Countdown/Countdown'
import speaker from '../../assets/images/speaker.png'
import bg from '../../assets/images/bg.png'

const Music = () => {

    return(
        <>
          <section className=' pt-[140px]'>
        <div className="container">
            <div className='relative'>
                <img src={bg} alt="" />
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className='flex w-full justify-evenly h-full items-center'>
                        <div className='w-[45%]'>
                            <h4 className='font-popins font-semibold text-[16px] leading-5 text-[#00FF66]'>Categories</h4>
                            <h2 className='font-inter font-semibold text-[48px] leading-[60px] text-[#FAFAFA] pt-8 pr-20 pb-8'>Enhance Your Music Experience</h2>
                            <CountdownTimer 
                            targetDate="2026-12-31T23:59:59"
                            rendarer={(time) => {
                                return(
                                <div className='flex gap-6 pb-[60px]'>
                                    <div className='w-[62px] h-[62px] flex items-center justify-center rounded-full bg-white text-center'>
                                        <div>
                                            <h3 className='font-popins text-[16px] text-black leading-5 font-semibold'>{time.days}</h3>
                                            <p className='font-popins text-[11px] text-black leading-[18px] font-normal'>Days</p>
                                        </div>
                                    </div>
                                    <div className='w-[62px] h-[62px] flex items-center justify-center rounded-full bg-white text-center'>
                                        <div>
                                            <h3 className='font-popins text-[16px] text-black leading-5 font-semibold'>{time.hours}</h3>
                                            <p className='font-popins text-[11px] text-black leading-[18px] font-normal'>Hours</p>
                                        </div>
                                    </div>
                                    <div className='w-[62px] h-[62px] flex items-center justify-center rounded-full bg-white text-center'>
                                        <div>
                                            <h3 className='font-popins text-[16px] text-black leading-5 font-semibold'>{time.minutes}</h3>
                                            <p className='font-popins text-[11px] text-black leading-[18px] font-normal'>Minutes</p>
                                        </div>
                                    </div>
                                    <div className='w-[62px] h-[62px] flex items-center justify-center rounded-full bg-white text-center'>
                                        <div>
                                            <h3 className='font-popins text-[16px] text-black leading-5 font-semibold'>{time.seconds}</h3>
                                            <p className='font-popins text-[11px] text-black leading-[18px] font-normal'>Seconds</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }}
                        >

                        </CountdownTimer>
                            
                        <a href="" className='bg-[#00FF66] rounded-sm py-4 px-12 text-[#FAFAFA] font-popins font-medium text-[16px] leading-6'>Buy Now!</a>
                        </div>
                        <div className='w-[45%]'>
                            <img src={speaker} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        
        </>
    )
}

export default Music




 