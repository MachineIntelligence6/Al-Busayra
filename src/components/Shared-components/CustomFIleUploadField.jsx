import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";

const CustomFileUploadField = ({ value, onChange, error, placeholder, label }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
      <Typography>{label}</Typography>
      <Box
        sx={{ flex: "1", width: "100%", display: "flex", alignItems: "center" }}
      >
        <CustomTextField
          value={value?.name || ""}
          placeholder={placeholder ? placeholder : "PDF Scanned"}
          disabled
          error={!!error}
          removeRightBorder={true}
          sx={{ "& .MuiInputBase-root": { borderTopRightRadius: 0, borderBottomRightRadius: 0, height: 38.7 } }}
        />
        <Button
          variant="outlined"
          component="label"
          sx={{
            py: 0.8,
            borderLeft: "none",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            color: "#2F2B3DE5",
            backgroundColor: "#E6E6E9",
            textTransform: "capitalize",
          }}
        >
          Upload
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


// usage

{/* <CustomFileUploadField
value={file} // Pass the uploaded file state
onChange={handleFileChange} // Pass the handler to update the state
error={error} // Pass any validation errors
/> */}