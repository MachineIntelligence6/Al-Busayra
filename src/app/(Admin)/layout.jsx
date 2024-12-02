import { Box, Divider } from "@mui/material";
import SidebarMenu from "@/components/SidebarMenu";
import { menuData } from "@/utils/sidebar-data";
import Breadcrumb from "@/components/Shared-components/BreadCrumb";

export default function Layout({ children }) {

    return (
        <Box sx={{
            display: "flex",
            minHeight: "100vh",
            width: "100vw",
            bgcolor: "#23567F",
            overflow: "hidden", // Prevent unnecessary scroll
        }}>
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
                    width: "calc(100vw - 300px)",
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
                    <>
                        <Box sx={{ px: 2 }}>
                            <Breadcrumb />
                        </Box>
                        <Divider sx={{ mt: 2 }} />
                        {children}
                    </>
                </Box>
            </Box>
        </Box>
    );
}
