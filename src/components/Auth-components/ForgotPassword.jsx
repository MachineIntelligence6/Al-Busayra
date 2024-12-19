"use client"
import React from "react";
import Link from "next/link";
import HeadingWrapper from "./HeadingWrapper";
import CustomInput from "../Shared-components/CustomInput";
import CustomButton from "@/components/Shared-components/CustomButton";
import { useRouter } from "next/navigation";

function ForgotPassword() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-full  ">
      <div className="max-w-[350px] flex flex-col ">
        <HeadingWrapper
          heading="Forgot Password"
          subHeading="Enter your email and we will send you instructions to reset your password"
        />
        <div className="flex flex-col gap-3">
          <CustomInput
            labelText={"Email"}
            placeholder={"Enter your email address"}
          />

          <CustomButton onClick={() => router.push("/admin/campaigns")}>Login</CustomButton>

        </div>

        <div className="text-[#20A4D5] text-[13px] leading-[22px] w-full text-start mt-[10px]">
          <Link href="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
