import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import OTPInput from "./OTPInput";
import CustomButton from "@/components/shared-components/CustomButton";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

function OTp() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const router = useRouter();

    const handleContinue = () => {
        const otpCode = otp?.join("")
        if(otpCode === "111111"){
            router.push("/admin/campaigns")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-full ">
            <div className="flex flex-col items-center max-w-[366px] w-full">
                <img src="/logo.png" className="" />
                <img src="/group.png" className="mt-[15px]" />
                <div>
                    <h1 className="font-bold text-center text-[25px] leading-[38px] text-[#2F2B3D] mt-5">
                        Just one more step{" "}
                    </h1>
                    <p className="text-normal text-[12px] text-[#2F2B3DB2]">
                        We’ve sent a code to your email <strong>john.smith@albusayra</strong>
                    </p>
                    <p className="text-normal text-[12px] leading-[22px] text-[#2F2B3DB2]">
                        Please check your inbox insert the code in form below to sign in.
                    </p>
                </div>
                <div className="flex flex-col w-full mb-6">
                    <OTPInput setOtp={setOtp} otp={otp} />
                </div>
                <CustomButton fullWidth onClick={handleContinue} sx={{ display: "flex", gap: 1 }}>
                    Continue <FaArrowRight className="text-white" />
                </CustomButton>
            </div>
            <Box component="span" sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1.5 }} ><Typography sx={{ fontSize: 12, color: "#0F132499" }}>You didn’t got the email?</Typography><Link href="#"> <Typography sx={{ fontSize: 12, color: "#06A1D1" }}> Send again</Typography></Link> </Box>
        </div>
    );
}

export default OTp;
