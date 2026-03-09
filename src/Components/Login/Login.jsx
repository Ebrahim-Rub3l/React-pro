import React, { useState } from "react"
import sideimg from '../../assets/images/sideimg.png'
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"
import { authinfo } from "../../redux/authSlice.jsx";

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate()
     const [formdata, setFormData] = useState({
        email:'',
        password:'',
    })

    const [errors,setErrors] = useState({})
    const validate = () => {
    let newErrors = {}

    if (!formdata.email.trim()) {
        newErrors.email = "Please Enter Your Email"
    }

    if (!formdata.password.trim()) {
        newErrors.password = "Please Enter Your Password"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
    }
    const dispatch = useDispatch()
     const [errmsg,setErrMsg] = useState(null)
     let errorMessage = ''

    const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
        signInWithEmailAndPassword(auth, formdata.email, formdata.password)
            .then((userCredential) => {
                const user = userCredential.user;

                dispatch(authinfo({
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                }))

                navigate('/')
            })
            .catch((error) => {
                setErrMsg(error.message)
            });
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
                            <h4 className="font-inter font-medium pb-6 text-[36px] leading-[30px] text-black">Log in to Exclusive</h4>
                            <p className="font-poppin font-normal text-4 leading-6 text-black pb-12">Enter your details below</p>
                            {errmsg && <div className="text-red-500 pb-5">Invalid Email Or Password</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="pb-10">
                                    <input value={formdata.email} onChange={(e)=> setFormData(prev=>({...prev, email:e.target.value}))} type="email" className="border-b border-[#808080] outline-0 w-full pb-2 font-poppin font-normal text-4 leading-6" placeholder="Email or Phone Number" />
                                    {errors.email && <strong className="text-red-500">{errors.email}</strong>}
                                </div>
                                <div className="pb-10">
                                    <input value={formdata.password} onChange={(e)=> setFormData(prev=>({...prev, password:e.target.value}))} type="password" className="border-b border-[#808080] outline-0 w-full pb-2 font-poppin font-normal text-4 leading-6" placeholder="Password" />
                                    {errors.password && <strong className="text-red-500">{errors.password}</strong>}
                                </div>
                                <div className="pb-4 flex flex-row  gap-[87px] items-center">
                                    <button type='submit' className='px-[48px] py-4 bg-[#DB4444] text-white rounded-[4px] text-[16px] leading-[24px] font-poppin font-medium' href="">Login</button>
                                    <a href="" className=" text-[16px] leading-[24px] font-poppin font-normal text-[#DB4444]">Forget Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
 }

export default Login