"use client";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import PagesWrapper from "../components/PagesWrapper/PagesWrapper";

function layout({ children }) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#23567F",
      },
      secondary: {
        main: "#F8F7FA",
      },
      warning: {
        main: "rgba(134,130,222,0.8)",
      },
      error: {
        main: "#2fd334",
      },
      info: {
        main: "#0eaeff",
      },
      text: {
        primary: "#2F2B3DE5",
        secondary: "#2F2B3DB2",
        hover: "#104774",
        textGray: "#BDBDBD",
      },
    },
    typography: {
      fontSize: 32,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      htmlFontSize: 35,
      h1: {
        fontSize: 10,
        fontWeight: 700,
        lineHeight: 1.23,
      },
      button: {
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.89,
      },
      caption: {
        fontSize: 15,
        fontWeight: 500,
      },
    },
  });
  //   #104774
  // #23567F

  return (
    <div
      style={{
        background: "#23567F",
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        
      }}
    >
      <div style={{ maxWidth: "280px", width: "100%" }}>
        <Sidebar />
      </div>

      <PagesWrapper>{children}</PagesWrapper>
    </div>
  );
}

export default layout;
