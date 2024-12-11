import React from "react";
import { Typography, Button, Box, Paper } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CustomButton from "./CustomButton";
export function InfoCard({ title, children, onEdit }) {
  return (
    <Paper
      sx={{
        p: 3,
        minHeight: "18rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderTop: (theme) => `4px solid ${theme.palette.main.darkBlue}`,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <CustomButton variant="outlined" size="small" onClick={onEdit}>
          Edit
        </CustomButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Paper>
  );
}

export function InfoItem({ label, value, icon }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1.5,
        borderBottom: "1px dashed lightgray",
        py: 1,
      }}
    >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "16px",
            color:"text.secondary"
          }}
          
        >
          {icon}
          {label}
        </Box>
      <Box sx={{ color: "text.primary", fontWeight: 500 }}>{value}</Box>
    </Box>
  );
}
