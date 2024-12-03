import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Input, InputLabel, TextField } from "@mui/material";
import Image from "next/image";
import { Label } from "@mui/icons-material";
import CustomSelect from "@/app/components/CustomSelect/CustomSelect";
const style = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "60px",
};
const styleSelect = { maxWidth: "500px", width: "100%" };
const inputStyles = {
  maxWidth: "500px",
  width: "100%",
};
const divStyles = {};
const ageOptions = [
  { value: 10, label: "Ten" },
  { value: 20, label: "Twenty" },
  { value: 30, label: "Thirty" },
];

function ContactInfo() {
  return (
      <Grid item xs={12} marginTop="40px">
        <Grid container spacing={2}>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Salutation <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <TextField style={{ width: "75px" }} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Full name <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <TextField sx={inputStyles} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Job Title <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <CustomSelect options={ageOptions} style={styleSelect} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Email Address{" "}
                <span style={{ color: "#2F2B3DE5" }}>(Optional)</span>{" "}
              </InputLabel>
            </Box>
            <TextField sx={inputStyles} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Company Phone Number <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <Box
              style={{
                maxWidth: "500px",
                width: "100%",
                height: "38px",
                // border: "1px solid #2F2B3D40",
                borderRadius: "8px",
                // backgroundColor:'#FCFCFC',
                display: "flex",
                flexDirection: "row",
              }}
            >
              <input
                style={{
                  width: "50px",
                  border: "1px solid #2F2B3D40",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              />
              <input
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  border: "1px solid #2F2B3D40",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

export default ContactInfo