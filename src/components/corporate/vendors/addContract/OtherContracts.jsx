"use client";

import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import RiderContract from "./table/RiderContract";
import AssetContract from "./table/AssetContract";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const OtherContracts = () => {
  const [view, setView] = useState("rider");

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ p: 2 }}>
        Other Contracts
      </Typography>
      <Box
        sx={{
          p: "6px 14px",
          bgcolor: "rgba(16, 71, 116, 0.10)",
          width: "fit-content",
          marginLeft: 2,
          marginBottom: 2,
          borderRadius: "8px",
          display: "flex",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: view === "rider" ? "#104774" : "transparent",
            color: view === "rider" ? "#F2F2F2" : "#413E4F",
            padding: "7.5px 19.5px",
            borderRadius: "6px",
          }}
          onClick={() => setView("rider")}
          startIcon={<DirectionsBikeIcon />}
        >
          Rider
        </Button>

        <Button
          sx={{
            backgroundColor: view === "asset" ? "#104774" : "transparent",
            color: view === "asset" ? "#F2F2F2" : "#413E4F",
            padding: "7.5px 19.5px",
            borderRadius: "6px",
          }}
          onClick={() => setView("asset")}
          startIcon={<ShoppingBasketOutlinedIcon />}
        >
          Asset
        </Button>
      </Box>

      <Box>{view === "rider" ? <RiderContract /> : <AssetContract />}</Box>
    </Box>
  );
};

export default OtherContracts;
