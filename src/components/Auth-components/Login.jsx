"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomInput from "../shared-components/CustomInput";
import HeadingWrapper from "./HeadingWrapper";
import { Box, Checkbox, Typography } from "@mui/material";
import CustomButton from "@/components/shared-components/CustomButton";
import OTp from "./otp-component";
import { custom } from "@/app/theme";
import { users } from "@/utils/dummyUsers";

const Login = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);

    // Define the Yup validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    // Initialize useForm with Yup resolver
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    // Form submit handler
    const onSubmit = (data) => {
        console.log("Form data submitted:", data);
        // Simulate successful login
        const isValidUser = users?.find((user) => (user?.email === data.email && user?.password === data.password))
        console.log("isValidUser ", isValidUser)
        if(isValidUser){
            localStorage.setItem("token", isValidUser?.id)
            localStorage.setItem("role", isValidUser?.role)
            setIsLoggedin(true);
        }else{
            setError("email", { type: "manual", message: "Invalid email" });
            setError("password", { type: "manual", message: "Invalid password" });
        }
    };

    return (
        <>
            {!isLoggedin ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center max-w-[366px] w-full">
                        <HeadingWrapper
                            heading="Welcome to AL-BUSAYRA!"
                            subHeading="Please sign-in to your account and start your journey"
                        />
                        <form
                            className="flex flex-col w-full"
                            onSubmit={handleSubmit(onSubmit)} // Form submission
                        >
                            {/* Email Input */}
                            <CustomInput
                                labelText="Email"
                                placeholder="Enter your email address"
                                register={register} // Pass register function from react-hook-form
                                name="email" // Name should match the form field
                                error={!!errors.email} // Display error state for email
                                helperText={errors.email?.message} // Show error message for email
                            />

                            {/* Password Input */}
                            <CustomInput
                                labelText="Password"
                                placeholder="********"
                                type="password"
                                register={register} // Pass register function from react-hook-form
                                name="password" // Name should match the form field
                                error={!!errors.password} // Display error state for password
                                helperText={errors.password?.message} // Show error message for password
                            />

                            <div className="flex flex-row items-center w-full justify-between mt-[10px]">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center">
                                        <Checkbox id="remember-me" />
                                        <Typography
                                            component="label"
                                            sx={{
                                                fontSize: 13,
                                                fontWeight: 400,
                                                lineHeight: 2,
                                                fontStyle: "italic",
                                                color: custom.primaryText,
                                            }}
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
                                <CustomButton fullWidth type="submit" disabled={isSubmitting}>
                                    Login
                                </CustomButton>
                            </Box>
                        </form>
                    </div>
                </div>
            ) : (
                <OTp />
            )}
        </>
    );
};

export default Login;
