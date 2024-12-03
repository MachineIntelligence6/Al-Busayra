"use client";
import { createTheme } from "@mui/material";
export const theme = createTheme({
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
      fontSize: 25,
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
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // Default styles for all Typography variants
        },
      },
      variants: [
        {
          props: { variant: "customTitle" },
          style: {
            fontSize: "20",
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: "0.1em",
            color: "#4B465C",
          },
        },
        {
          props: { variant: "customSubtitle" },
          style: {
            fontSize: "20px",
            fontWeight: 600,
            color: "#104774",
          },
        },
        {
          props: { variant: "modalTabHead" },
          style: {
            fontSize: "12px",
            fontWeight: 600,
            color: "#2F2B3DE5",
            lineHeight:"22px",
          },
        },
        {
          props: { variant: "modalTabCaption" },
          style: {
            fontSize: "10px",
            fontWeight: 400,
            color: "#2F2B3DB2",
            lineHeight:'20px',
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Custom border radius
          backgroundColor: "#FCFCFC",
          height: "38px",
          width: "100%",
          
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2F2B3D40", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color on hover
          },
          
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color when focused
          },
        },
        input: {
          color: "#2F2B3D", // Custom text color
          "::placeholder": {
            fontSize: "13px", // Placeholder text size
            color: "#2F2B3D66", // Optional: Change placeholder color
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Custom border radius
          backgroundColor: "#FCFCFC",
          height: "38px",
          width: "100%",
          color: "#2F2B3D", // Custom text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2F2B3D40", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#104774", // Border color when focused
          },
        },
        icon: {
          color: "#2F2B3D", // Custom color for dropdown arrow
        },
      },
    },
    
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2F2B3DE5", // Label color
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "16px",
          "&.Mui-focused": {
            color: "#23567F", // Label color when focused
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Default border radius
          textTransform: "none", // Disable uppercase text
          width:'100%'
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#104774",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#1d4563",
            },
          },
        },
        {
          props: { variant: "contained", color: "modalButton" },
          style: {
            backgroundColor: "#737682",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#737682",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#104774",
            color: "#104774",
            "&:hover": {
              backgroundColor: "#214d70",
              color:'white',
            },
          },
        },
        {
          props: { variant: "contained", color: "error" },
          style: {
            backgroundColor: "#FF4C51",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#d32f2f", // Darker red for hover
            },
          },
        },
        {
          props: { variant: "outlined", color: "error" },
          style: {
            borderColor: "#FF4C51",
            color: "red",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.1)", // Light red background on hover
            },
          },
        },
      ],
    },
  },
  

  
});
