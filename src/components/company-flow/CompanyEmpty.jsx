import { Box } from "@mui/material";
import React from "react";

const CompanyEmpty = ({ children }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "89vh",
                width: "100wh",
                backgroundImage: "url(/company/icons/empty-background.svg)",
                backgroundColor: "#ececec"
            }}
        >
            {children}
        </Box>
    );
};

export default CompanyEmpty;
