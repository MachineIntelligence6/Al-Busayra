"use client"
import React from "react";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import HeadingText1 from "@/components/shared-components/HeadingText1";
import HeadingText3 from "@/components/shared-components/HeadingText3";
import { custom } from "@/app/theme";


const AuthLayout = ({ children }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/login") || pathname.startsWith("/forgot-password")) {

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
            height: "95vh",

          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 12 }}>
            <HeadingText1>
              We Leverage Our &ldquo;SMART&rdquo; Strength
            </HeadingText1>
            <HeadingText3 sx={{ color: custom.white, fontWeight: 400, fontSize: 25 }}>
              of monitoring riders to our clients and partners
            </HeadingText3>
          </Box>
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
