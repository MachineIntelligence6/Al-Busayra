"use client"
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";


const AuthLayout = ({ children }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin/campaigns/registration-form") || pathname.startsWith("/login") || pathname.startsWith("/forgot-password")) {

    return (
      <div key={"auth-layout"} className="grid grid-cols-12 gap-4 p-5 h-screen">
        <Box
          component="div"
          className="relative col-span-8 bg-blue-500 p-4 rounded-[30px] flex flex-col"
          sx={{
            backgroundImage: `url('/signupimage.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: 10,
            overflow: "hidden",
            height: "auto",
          }}
        >
          <div className="flex flex-col items-center mt-44 gap-6 z-10">
            <div className="font-bold text-[40px] leading-[22px] text-[#FFFFFF]">
              We Leverage Our SMART Strength
            </div>
            <div className="font-normal text-[25px] leading-[22px] text-[#FFFFFF]">
              of monitoring riders to our clients and partners
            </div>
          </div>
        </Box>
        <div className="col-span-4  p-4">{children}</div>
      </div>
    );
  } else {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'cneter', width: "100wh", height: "100vh" }}>
      <Typography variant="h6">Loading....</Typography>
    </Box>
  }
};

export default AuthLayout;
