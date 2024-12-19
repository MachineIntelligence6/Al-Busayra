import AssignBike from "@/components/company-flow/asset-allocation/bike";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import SideCard from "@/components/Shared-components/SideCard";
import { AssetClearanceData } from "@/utils/company-flow/asset-clarance-data";
import { AppBar, Box, Divider, Toolbar } from "@mui/material";

export default function AssetClearanceLayout({ children }) {
    return (
        <Box mx={2} mb={2}>
            <DynamicBreadcrumb />
            <Divider sx={{marginY:"20px"}}/>
            <Box display="flex" gap={2}>
                <SideCard
                avatarSrc="/company/asset-clearence/man.svg"
                name="Saleem Akhtar Muhammad Miskeen"
                email="saleemakhtar@gmail.com"
                contractData={AssetClearanceData}
                />
                {/*  Content */}
                <Box
                    component="main"
                    sx={{ 
                    flexGrow: 1,
                    // bgcolor: "background.default",
                      minHeight: "100vh",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
  }
  