"use client";
import React from "react";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
