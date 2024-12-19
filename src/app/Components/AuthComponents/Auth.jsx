'use client'
import React, { useState } from "react";
import signupImage from '../../../../public/signupimage.jpeg'
import Image from "next/image";
import Otp from "./Otp/Otp";
import Login from "./Signup/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

function Auth() {
    const [component, setComponent] = useState('login');
    return (
        <div className="grid grid-cols-12 gap-4 p-5 h-screen">
            <div className="relative col-span-8 bg-blue-500 p-4 rounded-[30px] h-full flex flex-col " >
                <Image
                    src={signupImage}
                    alt="Signup Background"
                    layout="fill" // This makes the image fill its parent container
                    objectFit="cover" // This ensures the image covers the entire div
                    className="rounded-[30px]" // Optional: if you want rounded corners
                />
                <div className='flex flex-col items-center mt-44 gap-6 z-10'>
                    <div className='font-bold text-[40px] leading-[22px] text-[#FFFFFF]'>We Leverage Our SMART Strength</div>
                    <div className='font-normal text-[25px] leading-[22px] text-[#FFFFFF]'>of monitoring riders to our clients & partners</div>

                </div>
            </div>
            <div className="col-span-4  p-4">
                {component === 'login' && <Login setComponent={setComponent} />}
                {component === 'forgotPassword' && <ForgotPassword setComponent={setComponent} />}
                {component === 'otp' && <Otp setComponent={setComponent} />}
            </div>
        </div>
    );
}

export default Auth;
