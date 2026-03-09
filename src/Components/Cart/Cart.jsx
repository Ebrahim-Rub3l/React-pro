import React, { useState } from 'react'
import monitr from '../../assets/images/monitr.png'
import con from '../../assets/images/con.png'
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router';
import { updateQuantity, removeCart } from "../../redux/slice/cartSlice";


const Cart = () => {

     const cartItems = useSelector (state => state.cart.items)
     const dispatch = useDispatch()

     const increment = (item) => {
        dispatch(updateQuantity({
            id: item.id,
            quantity:item.quantity + 1
        }))
     }
     const deccrement = (item) => {
        if(item.quantity > 1){
            dispatch(updateQuantity({
            id: item.id,
            quantity:item.quantity - 1
        }))
        }
     }

    let subtotal = 0 ;
    cartItems.map(sub =>
        subtotal += sub.price * sub.quantity
    )

    const deleteCart = (id) => {
        dispatch(removeCart(id))
    }




  return (
    <>
    <section className='pb-[140px]'>
        <div className="container">
            <div className='py-20'>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-4'>
                    <a href="" className=''>Home</a> 
                    <span>/</span>
                    <span>Cart</span>
                </p>
            </div>
            <div className='flex flex-col gap-10'>
                <div className="flex py-6 px-10 font-popins font-normal text-[16px] text-black leading-6 shadow-xs rounded-sm">
                    <div className='w-[33.33%]'>
                        <h3>Product</h3>
                    </div>
                    <div className='w-[33.33%] flex justify-between'>
                        <div>
                            <h3>Price</h3>
                        </div>
                        <div>
                            <h3>Quantity</h3>
                        </div>
                    </div>
                    <div className='w-[33.33%] text-right'>
                        <h3>Subtotal</h3>
                    </div>
                </div>
                {cartItems.map(cart => (
                        <div key={cart.id}
                            className="flex items-center py-6 px-10 font-popins font-normal text-[16px] text-black leading-6 shadow-xs rounded-sm"
                        >
                        <div className="flex gap-5 items-center w-[33.33%] relative group">
                            <img src={cart.thumbnail} alt="" className="w-14" />
                            <span>{cart.title}</span>
                            <IoIosCloseCircle onClick={()=> deleteCart(cart.id)} className='text-[#DB4444] absolute -left-2 top-0 text-[18px] opacity-0 group-hover:opacity-100 cursor-pointer'  />
                        </div>

                        <div className='w-[33.33%] flex justify-between'>
                            <div className="text-center">
                                <span>${cart.price}</span>
                            </div>

                            <div className="text-center">
                                <div className='w-[72px] flex justify-center items-center h-11 border border-[rgba(0,0,0,0.4)] rounded-sm gap-4'>
                                    <div>
                                        {cart.quantity}
                                    </div>
                                    <div>
                                        <BiChevronUp onClick={()=> increment(cart)}  className='cursor-pointer text-[16px]'/>
                                        <BiChevronDown onClick={()=> deccrement(cart)} className='text-[16px] cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right w-[33.33%]">
                            <span>${(cart.price * cart.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-between pt-10'>
                <a className='text-4 leading-6 py-4 px-12 font-medium font-poppin border border-black' href="">Return To Shop</a>
                 <a className='text-4 leading-6 py-4 px-12 font-medium font-poppin border border-black' href="">Update Cart</a>
            </div>
            <div className="flex gap-[170px] pt-20 justify-between">
                <div className='flex w-[45%] gap-4  '>
                            <input className='border w-[300px] h-[56px] border-black rounded-sm py-4 px-6 font-popins font-normal text-[16px] leading-6 grow' type="text" placeholder='Coupon Code' />
                            <button className='py-4 w-[211px] h-[56px] px-12 bg-[#DB4444] rounded-sm font-medium font-popins text-[16px] leading-6 text-[#FAFAFA]'>Apply Coupon</button>
                 </div>
                 
                    <div className="w-[45%] border border-black rounded-sm py-8 px-6">
                    <h3 className='font-popins font-medium text-[20px] leading-7 text-black'>Cart Total</h3>
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
                    <div className='text-center'>
                        <Link to="/checkout" className='py-4 px-12 bg-[#DB4444] rounded-sm font-medium font-popins text-[16px] leading-6 text-[#FAFAFA]'>Procees to checkout</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Cart