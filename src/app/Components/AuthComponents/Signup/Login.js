import React from "react";
import Input from "../../Input/Input";
import { useRouter } from "next/navigation";

function Login({ setComponent }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className='flex flex-col items-center max-w-[366px] w-full'>
        <img src="/logo.png" className="" />
        <div>
          <h1 className="font-bold text-[25px] leading-[38px] text-[#2F2B3D] mt-5">
            Welcome to AL-BUSAYRA!{" "}
          </h1>
          <div className="text-normal text-[15px] leading-[22px] text-[#2F2B3DB2]">
            Please sign-in to your account and start your journey
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <Input labelText={"Email"} fieldName='email' />
          <Input labelText={"Password"} fieldName={'password'} />
        </div>
        <div className="flex flex-row items-center w-full justify-between mt-[10px]">
          <div className="flex flex-row items-center gap-2">
            <input type="checkbox" />
            <div className="text-[#2F2B3DE5] text-normal italic text-[13px] leading-[18px]">
              Remember Me
            </div>
          </div>
          <div  className="text-[#20A4D5] text-[13px] leading-[22px]">
            Forgot Password ?
          </div>
        </div>
        <button onClick={() => setComponent("otp")} className="w-full py-[10px] mt-[17px] bg-[#104774] rounded-[7px] font-medium text-[15px] leading-[22px] text-[#FFFFFF]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
