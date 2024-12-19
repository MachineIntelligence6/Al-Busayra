"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff", // Default background color for the app
      // paper: "#ffffff", // Background color for paper components
    },
  },
  // Add more customizations as needed
});

export default theme;
