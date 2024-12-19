"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomTextField from "@/components/shared-components/CustomTextField";
import { Check, CircleX, FileBarChart2, X } from "lucide-react";
import InputLabelTop from "./InputLabel";

const CustomFileUploadField = (props) => {
  const {
    value,
    onChange,
    error,
    placeholder,
    label,
    height = 38,
    borderRadius = 0,
    textSize = "body1",
    buttonText = "Upload",
    bgColor,
    required = false
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
      {label && <InputLabelTop text={label} required={required} />}
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
            height: height,
            "& .MuiInputBase-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
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
              pt: 0.5,
              mx: 0,
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
              style={{ height: height }}
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
