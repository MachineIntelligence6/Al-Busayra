"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#23567F", // Default background color for the app
      // paper: "#ffffff", // Background color for paper components
    },
  },
  // Add more customizations as needed
});

export default theme;
