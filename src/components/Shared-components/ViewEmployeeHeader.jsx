"use client";

import React from "react";
import { Box, Card, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CustomButton from "./CustomButton";

const ViewEmployeeHeader = ({
  profileImage,
  fullName,
  description,
  buttons = [],
  onBackClick,
  onEditClick,
}) => {
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
                  src={profileImage} // Dynamic profile image
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyItems: "center",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <Typography variant="h5">{fullName}</Typography>
                <Typography>{description}</Typography>{" "}
                {/* Dynamic description */}
              </Box>
            </Box>

            {/* Only render buttons if the 'buttons' prop is passed and has elements */}
            {buttons.length > 0 && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {buttons.map((button, index) => (
                  <CustomButton
                    key={index}
                    variant="contained"
                    startIcon={button.startIcon}
                    endIcon={button.endIcon}
                    sx={{ mt: 2 }}
                    onClick={button.onClick}
                  >
                    {button.label}
                  </CustomButton>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ViewEmployeeHeader;
