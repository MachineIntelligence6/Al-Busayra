import CustomDateField from "@/components/shared-components/CustomDateField";
import CustomDropdown from "@/components/shared-components/CustomDropDown";
import CustomFileUploadField from "@/components/shared-components/CustomFIleUploadField";
import CustomTextField from "@/components/shared-components/CustomTextField";
import { Box } from "@mui/material";
import React from "react";

const BikeInfoForm = () => {
    return (
        <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <CustomDropdown label="Vendor Name" />
                <CustomDateField
                    label="Bike Ourcheased/Acquired Date"
                    placeholder="DD/MM/YYYY"
                />
                <CustomDropdown label="Bike Registration Country" />
            </Box>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <CustomDropdown label="bike Registration City" />
                <CustomDateField
                    label="Bike Registration Date"
                    placeholder="DD/MM/YYYY"

                />
                <CustomTextField label="bike Plate Number" />
            </Box>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <CustomDropdown label="Bike Health Check" />
                <CustomDropdown label="Bike Type" />

                <CustomTextField label="Chasses Number" />
            </Box>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <CustomTextField label="Bike Manufactureer" placeholder="Honda" />
                <CustomTextField label="Bike Modal" placeholder="2024" />
                <CustomTextField label="bike Number" placeholder="1234" />
            </Box>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <CustomTextField label="Bike Cost" placeholder="AL-BUSAYRA bike cost" />
                </Box>
                <Box sx={{ flex: 1, }}>
                    <CustomFileUploadField
                        label="Bike Picture"
                        placeholder="Jpg, Pdf, Png"
                    />
                </Box>
                <Box sx={{ flex: 1 }}></Box>
            </Box>
        </Box>
    );
};

export default BikeInfoForm;
