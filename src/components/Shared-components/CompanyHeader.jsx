import { Box, Divider } from "@mui/material";
import React from "react";
import DescriptiveText from "./DescriptiveText";
import CustomButton from "./CustomButton";
import { custom } from "@/app/theme";
import CustomDropdownButton from "./CustomDropdownButton";

const CompanyHeader = ({ btnProps = {}, btnDropdown = {}, children }) => {
    const isBtn = Object?.keys(btnProps).length ? true : false;
    const isDropdown = Object?.keys(btnDropdown).length ? true : false;

    return (
        <Box sx={{ mx: 2 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box sx={{ my: 2 }}>
                    {children}
                </Box>
                {isBtn ? (
                    <CustomButton
                        startIcon={btnProps?.startIcon}
                        endIcon={btnProps?.endIcon}
                        onClick={btnProps?.onClick}
                    >
                        {btnProps?.text}
                    </CustomButton>
                ) : isDropdown ? (
                    <CustomDropdownButton
                        options={btnDropdown?.options}
                        selectedValue={btnDropdown?.selectedValue}
                        setSelectedValue={btnDropdown?.setSelectedValue}
                    />
                ) : null}
            </Box>
            <Divider sx={{}} />
        </Box>
    );
};

export default CompanyHeader;
