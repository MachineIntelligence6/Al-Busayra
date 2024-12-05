'use client'
import Grid from "@mui/material/Grid2";
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
function layout({ children }) {
  const pathName = usePathname();
  return (
    <>
   {
    pathName === '/auth/reset-password' ? <div>{children}</div> : 
    <Grid
      container
      padding={2}
      sx={{ height: "100vh" }} // Ensure container has a height
    >
      <Grid
        item
        xs={10}
        sx={{
          width: "70%",
          height: "100%",
          position: "relative",
        }}
      >
       
       
        <Image
          src="/signupimage.jpeg"
          alt="Signup"
          fill
          style={{ objectFit: "cover", borderRadius: "30px" }}
        />
      </Grid>

      <Grid
        item
        width={"30%"}
        xs={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item width={"100%"} flex={"row"} alignItems={"center"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image src="/logo.png" width={211} height={37} alt="" />
              
            </Box>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>}
    </>
  );
}

export default layout;
