import React from 'react'
import { GoCheck } from "react-icons/go";
import monitr from '../../assets/images/monitr.png'
// import con from '../../assets/images/con.png'
import bkash from '../../assets/images/Bkash.png'
import visa from '../../assets/images/Visa.png'
import mastercard from '../../assets/images/Mastercard.png'
import nagad from '../../assets/images/Nagad.png'
import { useSelector } from 'react-redux';


const Checkout = () => {
    const cartItems = useSelector (state => state.cart.items)
    let subtotal = 0 ;
    cartItems.map(sub =>
        subtotal += sub.price * sub.quantity
    )
  return (
    <>
      <section className='pb-[140px]'>
            <div className="container">
                <div className='py-20'>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-4'>
                    <a href="" className=''>Home</a> 
                    <span>/</span>
                    <span>Cart</span>
                    <span>/</span>
                    <span>Checkout</span>
                </p>
             </div>
            <div className='pb-[48px]'>
               <h3 className='text-[36px] leading-[30px] font-inter font-medium text-black'>Billing Details</h3>
            </div>
            <div className='flex gap-[173px]'>
                <form className='w-[45%]' action="">
                    <div className='pb-8'>
                        <label className='font-poppin leading-6 text-4 font-normal text-[rgba(0,0,0,0.4)]' htmlFor="">First Name*</label>
                        <input className='w-full rounded-sm p-4 mt-2 bg-[#F5F5F5]' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label className='font-poppin leading-6 text-4 font-normal text-[rgba(0,0,0,0.4)]' htmlFor="">Company Name</label>
                        <input className='w-full rounded-sm p-4 mt-2 bg-[#F5F5F5]' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label className='font-poppin leading-6 text-4 font-normal text-[rgba(0,0,0,0.4)]' htmlFor="">Street Address*</label>
                        <input className='w-full rounded-sm p-4 mt-2 bg-[#F5F5F5]' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label className='font-poppin leading-6 text-4 font-normal text-[rgba(0,0,0,0.4)]' htmlFor="">Apartment, floor, etc. (optional)</label>
                        <input className='w-full rounded-sm p-4 mt-2 bg-[#F5F5F5]' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label className='font-poppin leading-6 text-4 font-normal text-[rgba(0,0,0,0.4)]' htmlFor="">Town/City*</label>
                        <input className='w-full rounded-sm p-4 mt-2 bg-[#F5F5F5]' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label className='font-poppin leading-6 text-4 font-normal text-[rgba(0,0,0,0.4)]' htmlFor="">Phone Number*</label>
                        <input className='w-full rounded-sm p-4 mt-2 bg-[#F5F5F5]' type="text" />
                    </div>
                    <div className='pb-8'>
                        <label className='font-poppin leading-6 text-4 font-normal text-[rgba(0,0,0,0.4)]' htmlFor="">Email Address*</label>
                        <input className='w-full rounded-sm p-4 mt-2 bg-[#F5F5F5]' type="text" />
                    </div>
                    <div className='flex gap-4 agree'>
                      <input id = 'agree' type="checkbox" className='hidden' />
                      <label  htmlFor="agree" className='cursor-pointer flex gap-3'>
                        <span className='w-6 h-6 bg-[#DB4444] text-[#DB4444] flex justify-center items-center rounded-sm'>
                            <GoCheck />
                        </span>
                        <p className='font-poppin leading-6 text-4 font-normal'> Save this information for faster check-out next time</p>
                      </label>
                    </div>
                </form>
                <div className='w-[55%]'>
                    {
                        cartItems.map((item , index) => (
                            <div key={index} className="flex justify-between items-center">
                        <div className='flex gap-6 items-center'>
                            <img className='w-[50px]' src={item.thumbnail} alt="" />
                            <span className='font-poppin leading-6 text-4 font-normal text-black'>{item.title}</span>
                        </div>
                        <div>
                            <span className='font-poppin leading-6 text-4 font-normal text-black'>${item.price}</span>
                        </div>
                    </div>
                        ))
                    }
                    
                    <div>
                        <div className='flex justify-between pt-6 pb-4 border-b border-[rgba(0,0,0,0.4)] font-popins font-normal text-[16px] text-black'>
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between pt-6 pb-4 border-b border-[rgba(0,0,0,0.4)] font-popins font-normal text-[16px] text-black'>
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className='flex justify-between pt-6 pb-4 font-popins font-normal text-[16px] text-black'>
                            <span>Total:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='pt-4'>
                            <div className='flex gap-4 justify-between items-center pay'>
                                <div>
                                    <input id='pay1' name='pay' type="radio" className='hidden' />
                                    <label htmlFor="pay1" className='cursor-pointer flex gap-4 items-center'>
                                        <span className='w-6 h-6 border border-[#00000] rounded-full flex justify-center items-center'></span>
                                        <p className='font-popins font-normal text-[16px] leading-6 text-black'>Bank</p>
                                    </label>`
                                </div>
                                <div className='flex gap-2'>
                                    <img src={bkash} alt="" />
                                    <img src={visa} alt="" />
                                    <img src={mastercard} alt="" />
                                    <img src={nagad} alt="" />
                                </div>
                            </div>
                            <div className='flex gap-4 pay pt-[34px]'>
                                <input id='pay2' name='pay' type="radio" className='hidden' />
                                <label htmlFor="pay2" className='cursor-pointer flex gap-4 items-center'>
                                    <span className='w-6 h-6 border border-[#00000] rounded-full flex justify-center items-center'></span>
                                    <p className='font-popins font-normal text-[16px] leading-6 text-black'>Cash on Delivery</p>
                                </label>
                                
                            </div>
                        </div>
                        <div className='flex gap-4 pt-8'>
                            <input className='border border-black rounded-sm py-4 px-6 font-popins font-normal text-[16px] leading-6 grow' type="text" placeholder='Coupon Code' />
                            <button className='py-4 px-12 bg-[#DB4444] rounded-sm font-medium font-popins text-[16px] leading-6 text-[#FAFAFA]'>Apply Coupon</button>
                        </div>
                        <div className='pt-8'>
                            <button className='py-4 px-12 bg-[#DB4444] rounded-sm font-medium font-popins text-[16px] leading-6 text-[#FAFAFA]'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </section>
    </>
  )
}

export default Checkout;