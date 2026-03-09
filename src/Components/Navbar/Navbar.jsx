import React, { useEffect, useState } from "react"
import { IoChevronDownSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import logo from '../../assets/images/logo.png'
import { BiLogOut } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { LuShoppingBag } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { authinfo, logout } from "../../redux/authSlice";
const Navbar = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentLink = window.location.pathname 
    const location = useLocation ();
    const [show , setShow] = useState(false)

    const [searchkey , setSearchKey]= useState('')

    const cartItems = useSelector(state => state.cart.items)

            useEffect(()=> {
                const unsub = onAuthStateChanged(auth, (user) => {
           if (user) {
             
             dispatch(authinfo({
                uid: user.uid,
                 displayName: user.displayName,
                 email: user.email,
             }))
           } 
         });
             return () => unsub ()
            },[user])

            const handleLogout = async() => {
                try{
                    await signOut (auth)
                    dispatch(logout)
                    navigate('/login')
                } 
                
                  catch{
                    console.log(error);
                }
            }
    

    return (
        <>
         <nav className="border-b border-black">
            <div className='bg-black py-3'>
                <div className="container">
                    <div className="flex items-center gap-[179px] justify-end">
                        <div className='flex justify-end'>
                            <p className='font-popins text-[14px] leading-[21px] font-normal text-[#FAFAFA]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className='font-semibold leading-6 underline'>ShopNow</a></p>
                        </div>
                        <div className='flex justify-end'>
                            <div className="relative w-18">
                                <select className='outline-0 appearance-none w-full font-popins text-[14px] leading-[21px] font-normal text-[#FAFAFA]'>
                                    <option value="" className='text-black'>English</option>
                                    <option value="" className='text-black'>Bangla</option>
                                </select>
                                <span className='text-white absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[18px]'>
                                    <IoChevronDownSharp />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 pb-4">
                <div className="container">
                    <div className="flex gap-[130] relative">
                        <div className="w-[67%] flex gap-40">
                           <div>
                               <a href=""><img src={logo} alt="" /></a>
                           </div>
                             <div>
                                <ul className="flex gap-[48px] menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li><Link to="/register">Sign Up</Link></li>
                                </ul>
                             </div>
                        </div>
                    <div className={`w-[33%] flex gap-[24px] ${currentLink == '/register' ? 'justify-end' : ''} `}>
                        <div className="w-[243px] relative">
                            <input onChange={(e)=> setSearchKey(e.target.value)} className="w-full font-poppins font-normal text-3 text-black leading-[18px] py-[10px] pl-4 pr-3 outline-0 rounded-[4px] bg-[#F5F5F5]" type="text" placeholder="What are you looking for?" />
                            <Link to={`Search/category/${searchkey}`}>
                            <FiSearch  className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[20px]" />
                            </Link>
                        </div>
                           {
                             currentLink != '/register' ?
                          
                        <div className="flex gap-[16px] items-center">
                            <div>
                                <Link to='/wishlist'>
                                  <CiHeart className="text-[20px]" />
                                </Link>
                                
                            </div>
                            <div className="relative">
                                <Link to="/cart">
                                <IoCartOutline className="text-[20px] " />
                                <i className="w-4 h-4 bg-[#DB4444] flex justify-center items-center text-white rounded-full text-[12px] not-italic absolute top-[-6px] right-[-7px] ">{cartItems.length}</i>
                                 </Link>
                            </div>
                            <div onClick={()=> setShow(!show)} className="cursor-pointer flex w-8 h-8 bg-[#DB4444] rounded-full justify-center items-center text-white">
                                <CiUser  className="text-[20px]" />
                            </div>
                        </div>
                        :
                         ''
                        }
                    </div>
                      {
                        show && 
                        <div className="men z-1 ps-[20px] pt-[18px] pr-[12px] pb-[10px] rounded-sm absolute top-10 right-0 ">
                        <Link onClick={()=> setShow(false)} to="/profile" className="flex gap-[16px] items-center mb-[14.5px] text-[14px] leading-[21px] font-poppin font-normal text-[#fafafa]" href="">
                            <CiUser className="text-[24px]"/>
                            <span>Manage My Account</span>
                        </Link>
                        <a className="flex gap-[16px] items-center mb-[14.5px] text-[14px] leading-[21px] font-poppin font-normal text-[#fafafa]" href="">
                            <LuShoppingBag className="text-[24px]"/>
                            <span>My Order</span>
                        </a>
                        <a className="flex gap-[16px] items-center mb-[14.5px] text-[14px] leading-[21px] font-poppin font-normal text-[#fafafa]" href="">
                            <MdOutlineCancel className="text-[24px]"/>
                            <span>My Cancellations</span>
                        </a>
                        <a className="flex gap-[16px] items-center mb-[14.5px] text-[14px] leading-[21px] font-poppin font-normal text-[#fafafa]" href="">
                            <FaRegStar className="text-[24px]"/>
                            <span>My Reviews</span>
                        </a>
                        <a onClick={handleLogout} className="flex gap-[16px] items-center  text-[14px] leading-[21px] font-poppin font-normal text-[#fafafa]" href="">
                            <BiLogOut className="text-[24px]"/>
                            <span>Logout</span>
                        </a>
                        
                     </div>
                      }
                    </div>
                    
                </div>
            </div>
         </nav>




        </>
    )
}

export default Navbar