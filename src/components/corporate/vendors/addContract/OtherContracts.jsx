"use client";

import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import RiderContract from "./table/RiderContract";
import AssetContract from "./table/AssetContract";

const OtherContracts = () => {
  const [view, setView] = useState("rider"); // 'rider' or 'asset'

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ p: 2 }}
      >
        Other Contracts
      </Typography>

      <Box
        sx={{
          p: 1,
          bgcolor: "rgba(16, 71, 116, 0.10)",
          width: "fit-content",
          marginLeft: 2,
          marginBottom: 2,
          borderRadius: "8px",
          display: "flex",
          gap: 2,
        }}
      >
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          sx={{ display: "flex", gap: 2 }}
        >
          <ToggleButton
            value="rider"
            sx={{
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 500,
              boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
              bgcolor: view === "rider" ? "#104774" : "transparent",
              color: view === "rider" ? "#F2F2F2" : "#413E4F",
              border: "none",
              "&:hover": {
                bgcolor: view === "rider" ? "#0c3a61" : "rgba(16, 71, 116, 0.10)",
              },
            }}
          >
            Rider
          </ToggleButton>
          <ToggleButton
            value="asset"
            sx={{
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 500,
              boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
              bgcolor: view === "asset" ? "#104774" : "transparent",
              color: view === "asset" ? "#F2F2F2" : "#413E4F",
              border: "none",
              "&:hover": {
                bgcolor: view === "asset" ? "#0c3a61" : "rgba(16, 71, 116, 0.10)",
              },
            }}
          >
            Asset
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        {view === "rider" ? <RiderContract /> : <AssetContract />}
      </Box>
    </Box>
  );
};

export default OtherContracts;
