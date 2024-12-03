"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter();
  return (
    <>
    <Typography variant="caption" color="#2F2B3DB2">
      Please sign-in to your account and start your journey
                </Typography>
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
            gap: "5px",
            marginTop: "20px",
          }}
        >
          <InputLabel>Email</InputLabel>
          <TextField placeholder="Enter your email address" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginTop: "20px",
          }}
        >
          <InputLabel>Password</InputLabel>
          <TextField placeholder="Password" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          />
          <Link href="#" style={{ color: "#20A4D5", textDecoration: "none" }}>
            Forgot Password?
          </Link>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/auth/otp")}>
          Login
        </Button>
      </Grid>
    </Grid>
    </>
    
  );
}

export default Login;
