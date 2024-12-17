import { custom } from "@/app/theme"
import { Avatar, Box, Typography } from "@mui/material"

const SidebarProfileCard = ({ image, email, fullName }) => {
    return (
        <Box component="div" sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Avatar src={image} sx={{ width: "36px", height: "36px" }} />
            <Box component="div" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <Typography variant='body1' sx={{ fontWeight: 500, fontSize: 15, color: custom.white, lineHeight: 1.5 }}>{fullName}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 400, color: "#bdbbbb", fontSize: 10 }}>{email}</Typography>
            </Box>
        </Box>
    )
}

export default SidebarProfileCard