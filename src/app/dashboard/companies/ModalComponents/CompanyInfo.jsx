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
function CompanyInfo() {
  return (
    <Grid
      container
      
    >
      <Grid item xs={12}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              background: "#E9EAEC",
              border: "1px",
              borderRadius: "10px",
            }}
          >
            <Image src="/camera.png" width={27} height={27} alt="" />
          </Box>
          <Button variant="contained" color="primary">
            Upload Logo{" "}
            <Image src="/uploadicon.png" width={16} height={16} alt="" />{" "}
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} marginTop="40px">
        <Grid container spacing={2}>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Company abbreviation <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <TextField style={{ width: "75px" }} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Company Name <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <TextField sx={inputStyles} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                industry <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <CustomSelect options={ageOptions} style={styleSelect} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Corporate Website{" "}
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
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Business Address <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <TextField sx={inputStyles} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                Country <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <CustomSelect options={ageOptions} style={styleSelect} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                State/Province <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <CustomSelect options={ageOptions} style={styleSelect} />
          </Box>
          <Box sx={style}>
            <Box style={{ maxWidth: "217px", width: "100%" }}>
              <InputLabel>
                City <span style={{ color: "red" }}>*</span>{" "}
              </InputLabel>
            </Box>
            <CustomSelect options={ageOptions} style={styleSelect} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyInfo;
