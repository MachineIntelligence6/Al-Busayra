import CurrencyType from "@/components/Shared-components/CurrencyType";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box, Typography } from "@mui/material";
import React from "react";

const EmploypeeForm = () => {
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
                <CustomDropdown label="Vendor" required />

                <CustomDropdown label="Select Contract" required />
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
                <CustomDropdown label="Working City" required />

                <CustomDropdown label="Platform" required />
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
                <CustomDropdown label="Salary Type (Fixed/Commission)" required />

                <CustomTextField
                    label="Fixed Salary/Commission AMount"
                    placeholder="e.g 1200"
                    required
                    endAdornment={<CurrencyType />}
                />
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
                <CustomDateField label="Actual joining Date" required />

                <CustomDropdown label="GHP Training" placeholder="Yes/No" required />
            </Box>
        </Box>
    );
};

export default EmploypeeForm;
