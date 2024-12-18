import { Box, Divider } from "@mui/material";
import React from "react";
import DynamicBreadcrumb from "../Shared-components/BreadCrumb";
import CustomButton from "../Shared-components/CustomButton";
import DescriptiveText from "../Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyHeader from "../Shared-components/CompanyHeader";

const CompanyEmpty = ({ children, heading = "Heading of page", btnProps = {}, btnDropdown = {} }) => {

    return (
        <Box sx={{
            alignItems: "center",
            height: "100vh",
            width: "100wh",
            backgroundImage: "url(/company/icons/empty-background.svg)",
        }}>

            <CompanyHeader btnProps={btnProps} btnDropdown={btnDropdown} heading={heading} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 18

                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default CompanyEmpty;
