import { Box } from "@mui/material";
import SidebarMenu from "@/components/SidebarMenu";
import { menuData } from "@/utils/sidebar-data";

export default function Layout({ children }) {
    return (
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#23567F" }}>
            <SidebarMenu menuData={menuData} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: "#23567F",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        bgcolor: "#F8F7FA",
                        flexGrow: 1,
                        borderRadius: "30px",
                        p: 3,
                        overflow: "auto", // Prevent scrolling on parent container
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
