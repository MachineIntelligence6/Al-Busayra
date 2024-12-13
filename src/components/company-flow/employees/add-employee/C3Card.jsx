import CurrencyType from "@/components/Shared-components/CurrencyType";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box, Input, Typography } from "@mui/material";
import React from "react";

const cardOptions = [{ label: "Applied", value: "applied" }, { label: "Not Applied", value: "not_applied" }]
const cardType = [{ label: "WPS", value: "wps" }, { label: "Non WPS", value: "non_wps" }]
const C3Card = () => {
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
                <CustomDropdown label="C3 Card" required options={cardOptions} />

                <CustomDateField label="C3 Card Applied Date" required />
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
                <CustomTextField
                    label="C3 Card Cost (Ist Time)"
                    placeholder="e.g 1200"
                    required
                    endAdornment={<CurrencyType />}
                />
                <CustomTextField
                    label="C3 Card Cost (Monthly)"
                    placeholder="e.g 1200"
                    required
                    endAdornment={<CurrencyType />}
                />            </Box>

            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <CustomDropdown label="Card Type" options={cardType} required />
                <Box sx={{ width: "100%", height: "10px" }}></Box>
            </Box>


        </Box>
    );
};

export default C3Card;
