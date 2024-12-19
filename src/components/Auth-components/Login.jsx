"use client";
import Link from "next/link";
import React, { useState } from "react";
import CustomInput from "../Shared-components/CustomInput";
import HeadingWrapper from "./HeadingWrapper";
import { Box, Checkbox, Typography } from "@mui/material";
import CustomButton from "@/components/Shared-components/CustomButton";
import OTp from "./otp-component";

const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "", password: "" });
    const [isLoggedin, setIsLoggedin] = useState(false);

    return (
        <>
            {!isLoggedin ? <div className="flex flex-col items-center justify-center h-full ">
                <div className="flex flex-col items-center max-w-[366px] w-full">
                    <HeadingWrapper
                        heading="Welcome to AL-BUSAYRA!"
                        subHeading="Please sign-in to your account and start your journey"
                    />
                    <div className="flex flex-col w-full">
                        <CustomInput
                            labelText="Email"
                            placeholder="Enter your email address"
                        />
                        <CustomInput
                            labelText="Password"
                            placeholder="********"
                            type="password"
                        />
                    </div>
                    <div className="flex flex-row items-center w-full justify-between mt-[10px]">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center">
                                <Checkbox id="remember-me" size="small" />
                                <Typography
                                    component="label"
                                    sx={{ fontSize: 14 }}
                                    htmlFor="remember-me"
                                >
                                    Remember Me
                                </Typography>
                            </div>

                            <Typography variant="body1" sx={{ fontSize: 12, color: "#20A4D5" }}>
                                <Link href="/forgot-password"> Forgot Password ?</Link>
                            </Typography>
                        </div>
                    </div>
                    <Box component="div" mt={2} width="100%">
                        <CustomButton fullWidth onClick={() => setIsLoggedin(true)}>Login</CustomButton>
                    </Box>
                </div>
            </div> : <OTp />}
        </>
    );
};

export default Login;
