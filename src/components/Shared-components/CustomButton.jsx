import React from "react";
import { Button } from "@mui/material";
import { AddIcCallOutlined } from "@mui/icons-material";

const CustomButton = ({
    children,
    color,          // Explicit color for text
    bgColor = "primary", // Default bgColor
    variant = "contained", // Default variant
    startIcon,
    endIcon,
    sx,             // Custom styles
    ...rest         // Remaining props
}) => {
    // Define a centralized color mapping
    const colors = {
        primary: "#104774",
        muted: "#808390",
        secondary: "#737682",
        foreground: "#80839029",
        danger: "#FF4C51",
    };

    // Determine background and text color
    const backgroundColor = colors[bgColor] || colors.primary;
    const textColor = variant === "contained" ? color || "white" : backgroundColor; // Text color for outlined
    const borderColor = variant === "outlined" ? backgroundColor : "transparent";  // Border color for outlined

    return (
        <Button
            variant={variant}
            startIcon={startIcon ?? startIcon}
            endIcon={endIcon ?? endIcon}
            sx={{
                backgroundColor: variant === "contained" ? backgroundColor : "transparent",
                color: textColor,
                borderColor: borderColor,
                borderWidth: variant === "outlined" ? 1 : 0, // Border width for outlined
                textTransform: "capitalize",
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
