"use client"
import { custom } from '@/app/theme'
import HeadingText1 from '@/components/Shared-components/HeadingText1'
import HeadingText3 from '@/components/Shared-components/HeadingText3'
import { Box } from '@mui/material'
import React from 'react'

const RegistrationLayout = ({ children }) => {
    return (
        <main key={"auth-layout"} className="grid grid-cols-12 gap-4 p-5 h-screen">
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
        </main>
    )
}

export default RegistrationLayout
