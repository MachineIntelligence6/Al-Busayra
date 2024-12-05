import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';

export function InfoCard({ title, children, onEdit }) {
  return (
    <Paper sx={{
      p: 3,
      minHeight: '18rem',
      height:"100%",
      display: 'flex',
      flexDirection: 'column',
      borderTop: (theme) => `4px solid ${theme.palette.main.darkBlue}`,
      borderRadius:"10px"
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
      }}>
        <Typography variant="h6">{title}</Typography>
        <Button variant="outlined" size="small" onClick={onEdit}>
          Edit
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1}}>{children}</Box>
    </Paper>
  );
}

export function InfoItem({ label, value }) {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 1.5,
    }}>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Box sx={{ color: 'text.primary', fontWeight: 500 }}>{value}</Box>
    </Box>
  );
}

