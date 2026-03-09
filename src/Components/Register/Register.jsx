import React, { useState } from "react"
import sideimg from '../../assets/images/sideimg.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'

const Register = () => {

    const [formdata, setFormData] = useState({
        name:'',
        email:'',
        password:'',
    })

    const [errors,setErrors] = useState({})
    const validate =() =>{
        let newErrors ={}
        if(!formdata){
            newErrors.name="Please Enter Your Name"
        }
         if(!formdata){
            newErrors.email="Please Enter Your Email"
        }
         if(!formdata){
            newErrors.password="Please Enter Your Password"
        }
        setErrors(newErrors)

        return Object.keys(newErrors).length == 0
    }

    const auth = getAuth();
    
    const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
        createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
            .then((userCredential) => {

                updateProfile(auth.currentUser, {
                    displayName: formdata.name
                })

                Swal.fire({
                    icon: "success",
                    title: "Registration successful",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000
                })

                setFormData({
                    name: '',
                    email: '',
                    password: ''
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: error.message,
                })
            })
    }
}

    return (
        <>
        <section className="relative pt-[60px] pb-[140px]">
            <div className="w-[50%]">
                <img src={sideimg} alt="" className="w-full" />
            </div>
            <div className="absolute w-full h-full left-0 top-0">
                <div className="container h-full">
                    <div className="flex justify-end items-center h-full">
                        <div>
                            <h4 className="font-inter font-medium pb-6 text-[36px] leading-[30px] text-black">Create an account</h4>
                            <p className="font-poppin font-normal text-4 leading-6 text-black pb-12">Enter your details below</p>
                            <form onSubmit={handleSubmit}>
                                <div className="pb-10">
                                    <input value={formdata.name} onChange={(e)=> setFormData(prev=>({...prev, name:e.target.value}))} type="text" className="border-b border-[#808080] outline-0 w-full pb-2 font-poppin font-normal text-4 leading-6" placeholder="Name" />
                                    {errors.name && <strong className="text-black">{errors.name}</strong>}
                                </div>
                                <div className="pb-10">
                                    <input value={formdata.email} onChange={(e)=> setFormData(prev=>({...prev,email:e.target.value}))} type="email" className="border-b border-[#808080] outline-0 w-full pb-2 font-poppin font-normal text-4 leading-6" placeholder="Email or Phone Number" />
                                    {errors.email && <strong className="text-red">{errors.email}</strong>}
                                </div>
                                <div className="pb-10">
                                    <input value={formdata.password} onChange={(e)=> setFormData(prev=>({...prev,password:e.target.value}))} type="password" className="border-b border-[#808080] outline-0 w-full pb-2 font-poppin font-normal text-4 leading-6" placeholder="Password" />
                                    {errors.password && <strong className="text-red">{errors.password}</strong>}
                                </div>
                                <div className="pb-4">
                                    <button type='submit' className='w-full py-3 bg-[#DB4444] text-white rounded-[4px] text-[16px] leading-[24px] font-poppin font-medium'>Create Account</button>
                                </div>
                                <div className="pb-[34px]">
                                    <button className='w-full py-3 bg-[#DB4444] text-black rounded-[4px] text-[16px] leading-[24px] font-poppin font-medium border bg-transparent border-[#808080] flex justify-center items-center gap-4' >  <FcGoogle className="text-[24px]" /> Sign up with Google</button>
                                </div>
                                <p className="text-center  text-[16px] leading-[24px] font-poppin font-normal">Already have account? <Link to="/login" className="font-medium border-b pb-[4px] ml-4">Log In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Register