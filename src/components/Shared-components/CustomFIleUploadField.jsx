import React from "react";
import { Box, Button, Input } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";

const CustomFileUploadField = ({ value, onChange, error }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
      <Box
        sx={{ flex: "1", width: "80%", display: "flex", alignItems: "center" }}
      >
        <CustomTextField
          value={value?.name || ""}
          placeholder="PDF Scanned"
          disabled
          error={!!error}
          helperText={error?.message}
          removeRightBorder={true}
        />
        <Button
          variant="outlined"
          component="label"
          sx={{
            paddingY: "8px",
            borderLeft: "none",
            borderRadius: "7px",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            color: "#2F2B3DE5",
            backgroundColor: "#E6E6E9",
            border: "1px solid #2F2B3DE5",
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