import React from 'react'
import OTPInput from './Component'
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function Otp() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className='flex flex-col items-center max-w-[366px] w-full'>
        <img src="/logo.png" className="" />
        <img src="/group.png" className="mt-[15px]" />
        <div>
          <h1 className="font-bold text-center text-[25px] leading-[38px] text-[#2F2B3D] mt-5">
            Just one more step{" "}
          </h1>
          <div className="text-normal text-center text-[15px] leading-[22px] text-[#2F2B3DB2]">
            Please sign-in to your account and start your journey
          </div>
        </div>
        <div className="flex flex-col w-full">
          <OTPInput />
        </div>
        <button onClick={() => router.push('/companies')} className="w-full flex flex-row items-center gap-[5px] justify-center py-[10px] mt-[17px] bg-[#104774] rounded-[7px] font-medium text-[15px] leading-[22px] text-[#FFFFFF]">
          Continue  <FaArrowRight className='text-white' />
        </button>
      </div>
    </div>
  )
}

export default Otp