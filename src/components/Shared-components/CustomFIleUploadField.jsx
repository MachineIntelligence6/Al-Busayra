"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { CircleX, FileBarChart2 } from "lucide-react";

const CustomFileUploadField = ({
  value,
  onChange,
  error,
  placeholder,
  label,
  height,  // Default height
  borderRadius = 0,  // Default border radius (can be adjusted as needed)
  textSize = "body1", // Default text size, you can use MUI's typography variants
  buttonText = "Upload", // Button text
  bgColor, // Default background color for the text field
  marginBottom,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
      <Typography>{label}</Typography>
      <Box
        sx={{
          flex: "1",
          width: "100%",
          display: "flex",
          alignItems: "center",
          border: "1px solid #D5D4D7",
          borderRadius: 1.5,
        }}
      >
        <CustomTextField
          value={value?.name || ""}
          placeholder={placeholder ? placeholder : "PDF Scanned"}
          disabled
          error={!!error}
          removeRightBorder={true}
          sx={{
            "& .MuiInputBase-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: borderRadius ? borderRadius: "7px",
              borderBottomLeftRadius: borderRadius  ? borderRadius: "7px",
              height: height ? height : 42.5,
              backgroundColor: bgColor, // Apply dynamic background color
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none"
            }
          }}
        />
        
        {/* Button with dynamic height, border radius, and text size */}
        <Button
          variant="outlined"
          component="label"
          sx={{
            py: 0.8,
            borderLeft: "none",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderTopRightRadius: borderRadius  ? borderRadius: "7px",
            borderBottomRightRadius: borderRadius  ? borderRadius: "7px",
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
      {error && <Typography color="error">{error.message}</Typography>}
    </Box>
  );
};

export default CustomFileUploadField;
