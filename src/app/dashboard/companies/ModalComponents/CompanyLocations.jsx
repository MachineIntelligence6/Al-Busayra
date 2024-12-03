import { Checkbox, Divider, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

function CompanyLocations() {
  const data = [
  'Abu Dhabi',
  'Al Ain',
  'Ajman',
  'Dubai',
  'Fujairah',
  'Sharjah',
  'Umm Al Quwain',
  'Ras Al-Khaimah'    
  ]
  return (
    <div style={{ width: '100%',marginTop:'35px' }}>
    <Typography variant="caption">Country: United Arab Emirates</Typography>
    <Divider />
    <Grid container spacing={2}>
      {data?.map((element, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          <FormControlLabel
            control={<Checkbox name={`checkbox-${idx}`} />}
            label={element}
          />
        </Grid>
      ))}
    </Grid>
  </div>
  );
}

export default CompanyLocations;
