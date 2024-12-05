'use client'
import Authinput from "@/app/components/AuthInput/Authinput";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

function ForgotPassword() {
  const router = useRouter();
  return (
    <Box sx={{ maxWidth: "365px" }}>
      <Box sx={{ marginTop: "30px", textAlign: "start" }}>
        <Typography variant="h1">FORGOT PASSWORD? </Typography>
        <Typography variant="caption">
          Enter your email and we'll send you instructions to reset your
          password{" "}
        </Typography>
        <Authinput label = 'Email' placeholder={'Passowrd'} />
        <Button variant="contained" color = 'primary' sx = {{marginTop:"20px"}} onClick={()=> router.push('/dashboard/companies')}>Login</Button>
        <Typography sx = {{color:'#20A4D5',fontSize:'13px',marginTop:'15px',cursor:'pointer'}} onClick={()=> router.push('/auth/login')}>Back to login</Typography>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
