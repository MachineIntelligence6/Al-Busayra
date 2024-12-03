
import { Box, Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


import Grid from "@mui/material/Grid2";
import React from "react";

function SharedHeader({isModalOpen,setIsModalOpen}) {
  return (
    <Box sx={{ paddingTop: "25px", paddingBottom: "20px" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="customTitle">Companies</Typography>

        <Grid item >
          <Button onClick={()=> setIsModalOpen(true)} variant="contained" color="primary">
            <AddIcon/> Add Company
          </Button>
        </Grid>
      </Grid>{" "}
    </Box>
  );
}

export default SharedHeader;
