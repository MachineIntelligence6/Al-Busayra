"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { CircleX, FileBarChart2 } from "lucide-react";

const CustomFileUploadField = (props) => {
  const {
    value,
    onChange,
    error,
    placeholder,
    label,
    height = 38.7,
    borderRadius = 0,
    textSize = "body1",
    buttonText = "Upload",
    bgColor,
  } = props

  const [fileValue, setFileValue] = useState(value);

  const handleChange = (file) => {
    if (file) {
      setFileValue(file);
      onChange?.(file);
    }
  };

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
          value={fileValue?.name || ""}
          startAdornment={fileValue?.name ? <FileBarChart2 size={22} color="#E6483D" /> : null}
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
              backgroundColor: bgColor,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none"
            }
          }}
        />
        {!fileValue?.name ? (
          <Button
            variant="outlined"
            component="label"
            sx={{
              py: 0.6,
              mx: 0.2,
              color: "#2F2B3DE5",
              backgroundColor: "#E6E6E9",
              textTransform: "capitalize",
              border: "1px solid #bcbcbce4",
            }}
          >
            Upload
            <input
              type="file"
              accept="*"
              hidden
              onChange={(e) => handleChange(e.target.files?.[0])}
            />
          </Button>
        ) : (
          <Box component="button" sx={{ px: 1 }} onClick={() => setFileValue(null)}>
            <CircleX size={22} style={{ backgroundColor: "#2F2B3DE5", borderRadius: "50%", color: "white" }} />
          </Box>
        )}
      </Box>
      {error && <Typography color="error">{error.message}</Typography>}
    </Box>
  );
};

export default CustomFileUploadField;
