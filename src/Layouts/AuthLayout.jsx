import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-5 h-screen">
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
            We Leverage Our "SMART" Strength
          </div>
          <div className="font-normal text-[25px] leading-[22px] text-[#FFFFFF]">
            of monitoring riders to our clients & partners
          </div>
        </div>
      </Box>
      <div className="col-span-4  p-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
