"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";
import './otp.css'
function Otp() {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <div style = {{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingRight:'10px',paddingLeft:'10px'}}>
      <div style = {{maxWidth:'473px'}}>
        <Box sx = {{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Typography variant="caption" color="#2F2B3DB2"  style = {{textAlign:'center'}}>
        We’ve sent a code to your email john.smith@albusayra. Please check your
        inbox and insert the code in form below to sign in.
      </Typography>
      </Box>
      <Grid item>
  <OtpInput
    value={otp}
    onChange={setOtp}
    numInputs={6}
    renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
    style = {{display:'flex',justifyContent:'space-between'}}
    renderInput={(props) => (
      <input
        {...props}
        className = 'otp-input-input'
      />
    )}
  />
</Grid>
          <Box>
        <Button
          onClick={() => router.push("/dashboard/companies/")}
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          sx = {{maxWidth:'100%'}}
          
        >
          Continue
          <TrendingFlatIcon />
        </Button>
        </Box>
        <Typography
          variant="caption"
          style={{ textAlign: "center",}}
          sx= {{marginTop:'20px'}}
        >
          You didn’t got the email?{" "}
          <span style={{ color: "#20A4D5" }}> Send again</span>
        </Typography>
      
      </div>
    </div>
  );
}

export default Otp;
