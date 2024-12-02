import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'

const CustomAvatar = ({ image, email, fullName }) => {
    return (
        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Avatar src={image} sx={{ width: 40, height: 40 }} />
            <Box component="div" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <Typography variant='body1' sx={{ fontWeight: 600 }}>{fullName}</Typography>
                <Typography variant='body1' >{email}</Typography>
            </Box>
        </Box>
    )
}

export default CustomAvatar
