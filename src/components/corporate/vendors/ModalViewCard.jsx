import { Typography, Button, Box, Paper } from "@mui/material";
import React from "react";

const ModalViewCard = ({ title, children, }) => {
  return (
    <Paper
      sx={{
        p: 5,
        minHeight: "18rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
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
      </Box>
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Paper>
  );
};

export default ModalViewCard;
