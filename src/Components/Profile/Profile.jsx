import React, { useEffect, useState } from 'react'
import { getAuth, updateProfile, updatePassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

const Profile = () => {
    const auth = getAuth();
    const dispatch = useDispatch();

    const loggeduser = useSelector((state => state.auth.value))
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConPassword] = useState('')
    useEffect(() => {
        if (loggeduser?.displayName) {
            setName(loggeduser.displayName);
        }
    }, [loggeduser]);

    const [errors, setErrors] = useState({})
    const user = auth.currentUser;

    const handleUpdate = (e) => {
        e.preventDefault()
        if(password){
            let newErrors = {}
            if(!conpassword){
                newErrors.conpas = 'Please Enter Confirm Password'
            }
            else if(password != conpassword){
                newErrors.conpas = 'Password and confirm Password Not matched'
            }
            else{
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                updatePassword(user, password)

                 Swal.fire({
                    title: "Good job!",
                    text: "Profile Update",
                    icon: "success"
                });
            }
            setErrors(newErrors)
        }

        else{
            updateProfile(auth.currentUser, {
                    displayName: name,
            })
            Swal.fire({
                title: "Good job!",
                text: "Profile Update",
                icon: "success"
            });
        }


    }
    
  return (
    <>
    <section className='pt-20 pb-[140px]'>
        <div className="container">
            <div className='pb-20 flex justify-between'>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)] flex gap-4'>
                    <a href="" className=''>Home</a> 
                    <span>/</span>
                    <span>My Account</span>
                </p>
                <p className='font-popins font-normal text-[14px] leading-[21px] text-[#000000] '>Welcome! <span className='text-[#DB4444]'>{name}</span></p>
            </div>
            <div className='flex gap-[100px]'>
                <div className="w-[20%]">
                    <div>
                        <h3 className='font-popins font-medium text-[16px] text-[#000000] leading-6'>Manage My Account</h3>
                        <div className='flex flex-col pt-4 ms-[35px] gap-2'>
                            <a href="" className='hover:text-[#DB4444] font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6'>My Profile</a>
                            <a href="" className='hover:text-[#DB4444] font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6'>Address Book</a>
                            <a href="" className='hover:text-[#DB4444] font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6'>My Payment Options</a>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <h3 className='font-popins font-medium text-[16px] text-[#000000] leading-6'>My Orders</h3>
                        <div className='flex flex-col pt-4 ms-[35px] gap-2'>
                            <a href="" className='hover:text-[#DB4444] font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6'>My Returns</a>
                            <a href="" className='hover:text-[#DB4444] font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6'>My Cancellations</a>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <h3 className='font-popins font-medium text-[16px] text-[#000000] leading-6'>My WishList</h3>
                    </div>
                </div>
                <div className="w-[80%] shadow py-10 px-20 rounded-sm">
                    <h3 className='font-popins font-medium text-[#DB4444] text-xl leading-7'>Edit Your Profile</h3>
                    <form onSubmit={handleUpdate}>
                        <div className='flex gap-[50px]'>
                            <div className='w-full'>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Full Name</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-2 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Md' />
                            </div>
                        </div>
                        <div className='flex gap-[50px] pt-6'>
                            <div className='w-1/2'>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Email</label>
                                <input disabled value={loggeduser?.email} type="email" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-2 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='rimel1111@gmail.com' />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Address</label>
                                <input type="text" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-2 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Kingston, 5236, United State' />
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div>
                                <label htmlFor="" className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Password Changes</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-4 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='New Passwod' />

                                <input value={conpassword} onChange={(e) => setConPassword(e.target.value)} type="password" className='w-full bg-[#F5F5F5] rounded-sm py-3 px-4 mt-4 font-popins font-normal text-[16px] text-[rgba(0,0,0,0.5)] leading-6 outline-0' placeholder='Confirm New Passwod' />
                                {errors.conpas && <strong className='text-red-500'>{errors.conpas}</strong>}
                            </div>
                            <div className='flex justify-end gap-7 items-center pt-10'>
                                <span className='font-popins font-normal text-[16px] text-[#000000] leading-6'>Cancel</span>
                                <a  className="py-4 px-12 bg-[#DB4444] text-4 leading-6 font-poppin font-medium rounded-sm text-[#fff]">Save Changes</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Profile