import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";

const CustomFileUploadField = ({
  value,
  onChange,
  error,
  placeholder,
  label,
  height = 38.7,  // Default height
  borderRadius = 0,  // Default border radius (can be adjusted as needed)
  textSize = "body1", // Default text size, you can use MUI's typography variants
  buttonText = "Upload", // Button text
  bgColor, // Default background color for the text field
  marginBottom,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
      {/* Label with dynamic text size */}
      <Typography  sx={{ fontSize: textSize, marginBottom: marginBottom, }} >{label}</Typography>
      <Box sx={{ flex: "1", width: "100%", display: "flex", alignItems: "center" }}>
        {/* CustomTextField with dynamic height, borderRadius, and background color */}
        <CustomTextField
          value={value?.name || ""}
          placeholder={placeholder || "PDF Scanned"}
          disabled
          error={!!error}
          removeRightBorder={true}
          sx={{
            
            "& .MuiInputBase-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
              height: height,
              backgroundColor: bgColor, // Apply dynamic background color
            },
            "& .MuiTypography-root": {
              fontSize: textSize === "body1" ? "1rem" : "0.875rem", // Adjust text size
            },
          }}
        />
        
        {/* Button with dynamic height, border radius, and text size */}
        <Button
          variant="outlined"
          component="label"
          sx={{
            py: 0.8,
            borderLeft: "none",
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            color: "#2F2B3DE5",
            backgroundColor: "#E6E6E9",
            textTransform: "capitalize",
            height: height,  // Ensuring the button's height matches the text field
            fontSize: textSize === "body1" ? "1rem" : "0.875rem", // Adjust button text size
          }}
        >
          {buttonText}
          <input
            type="file"
            accept="application/pdf"
            hidden
            onChange={(e) => onChange(e.target.files?.[0])}
          />
        </Button>
      </Box>
      
      {/* Error message */}
      {error && <Typography color="error">{error.message}</Typography>}
    </Box>
  );
};

export default CustomFileUploadField;
