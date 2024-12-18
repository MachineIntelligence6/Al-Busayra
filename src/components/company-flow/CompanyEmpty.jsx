import { Box, Divider } from "@mui/material";
import React from "react";
import DynamicBreadcrumb from "../shared-components/BreadCrumb";
import CustomButton from "../shared-components/CustomButton";
import DescriptiveText from "../shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyHeader from "../shared-components/CompanyHeader";

const CompanyEmpty = ({ children, heading = "Heading of page", btnProps = {}, btnDropdown = {} }) => {

    return (
        <Box sx={{
            alignItems: "center",
            height: "100vh",
            width: "100wh",
            backgroundImage: "url(/company/icons/empty-background.svg)",
        }}>

            <CompanyHeader btnProps={btnProps} btnDropdown={btnDropdown}>
                <DescriptiveText
                    text={heading}
                    fontSize={18}
                    fontWeight={500}
                    color={custom.dreadcrumbText}
                />
            </CompanyHeader>
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
