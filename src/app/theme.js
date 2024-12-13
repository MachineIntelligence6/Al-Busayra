"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Public Sans, sans-serif",
    // h1: {
    //   fontSize: "24px", // Figma H1 size
    //   fontWeight: 700, // Bold
    // },
    // h2: {
    //   fontSize: "20px", // Figma H2 size
    //   fontWeight: 600, // Semi-bold
    // },
    // body1: {
    //   fontSize: "16px", // Figma body text size
    //   fontWeight: 400, // Regular weight
    // },
    // caption: {
    //   fontSize: "12px", // Figma caption text size
    // },
  },
  // spacing: (factor) => `${factor * 8}px`, // 8px grid spacing
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    // Add custom colors here
    custom: {
      deepBlue: "#104774",
      darkGrayish: "#2F2B3DE5",
      errorDark: "#E64449",
    },
  },
});

export const custom = theme.palette.custom; // Access palette.custom

export default theme;
