"use client";

import React from "react";
import { Box, Card, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const ViewEmployeeHeader = ({ profile1 }) => {
  return (
    <Box>
      <Card sx={{ mb: 3 }}>
        <Box
          sx={{
            height: 120,

            background:
              "url(/icons/banner1.svg) lightgray 50% / cover no-repeat",
          }}
        />
        <Box sx={{ px: 3, pb: 2, mt: -5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "baseline" }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  src="https://example.com/images/profile-aisha.jpg"
                  sx={{
                    width: 100,
                    height: 100,
                    border: "4px solid white",
                    borderRadius: "10px",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: -10,
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "white" },
                  }}
                  size="small"
                >
                  <CameraAltOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="h5">
                {
                  profile1[0]?.data.find((item) => item.label === "Full Name")
                    ?.value
                }
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}></Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ViewEmployeeHeader;
