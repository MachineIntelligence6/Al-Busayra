'use client'
import { Box, FormControl, InputLabel, Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from "@mui/material/Grid2";
import React from "react";
import { Label } from "@mui/icons-material";

function Filters() {
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: '#F3F6F9',
          border: '1px solid',
          borderColor: '#E0E3E7',
          fontSize: 16,
          width: 'auto',
          padding: '10px 12px',
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
          },
          ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
            borderColor: '#2D3843',
          }),
        },
      }));
  return (
    <Grid container padding={'25px'} sx = {{display:'flex',flexDirection:'column'}}>
        <Typography variant="h1">Advance Filter</Typography>
      <FormControl variant="standard">
        <InputLabel >
          Bootstrap 
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl>
    </Grid>
  );
}

export default Filters;
