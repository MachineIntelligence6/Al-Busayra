'use client'
import React from 'react'
import Input from '../../Input/Input'
import { useRouter } from 'next/navigation'

function ForgotPassword({setComponent}) {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-full  ">
    <div className = 'max-w-[365px] flex flex-col items-center'>
      <img src="/logo.png" className="" />
      <div>
        <h1 className="font-bold text-[25px] leading-[38px] text-[#2F2B3D] mt-5">
        Forgot Password?{" "}
        </h1>
        <div className="text-normal text-[15px] leading-[22px] text-[#2F2B3DB2]">
        Enter your email and we’ll send you instructions to
        reset your password
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mt-[20px]">
        <Input labelText={"Email"} placeholder={'Enter your email address'} />
      </div>
      <button onClick={()=> router.push('/pages/companies')} className="w-full py-[10px] mt-[17px] bg-[#104774] rounded-[7px] font-medium text-[15px] leading-[22px] text-[#FFFFFF]">
        Login
      </button>
      <div onClick={()=> setComponent('login')} className="text-[#20A4D5] text-[13px] leading-[22px] w-full text-start mt-[10px]">
          Back to Login
        </div>
    </div>
  </div>
  )
}

export default ForgotPassword