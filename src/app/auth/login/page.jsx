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
import Authinput from "@/app/components/AuthInput/Authinput";
function Login() {
  const router = useRouter();
  return (
    <>
      <Box sx={{ marginTop: "30px", textAlign: "center" }}>
        <Typography variant="h1">Welcome to AL-BUSAYRA! </Typography>
      </Box>
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
          <Authinput label="Email" placeholder={"Enter your email"} />
          <Authinput label="Password" placeholder={"Enter your password"} />

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
          <Link href="/auth/forgot-password" style={{ color: "#20A4D5", textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/auth/otp")}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
