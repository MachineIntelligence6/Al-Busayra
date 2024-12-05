import { Box, InputLabel, TextField } from "@mui/material";
import React from "react";

function Authinput({label,placeholder}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginTop: "20px",
      }}
    >
      <InputLabel>{label}</InputLabel>
      <TextField placeholder={placeholder} />
    </Box>
  );
}

export default Authinput;
