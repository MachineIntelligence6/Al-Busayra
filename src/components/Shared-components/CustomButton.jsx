import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
    const { children, sx, ...rest } = props;
    return (
        <Button
            variant="contained"
            sx={{ backgroundColor: "#104774", textTransform: "capitalize", ...sx }}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
