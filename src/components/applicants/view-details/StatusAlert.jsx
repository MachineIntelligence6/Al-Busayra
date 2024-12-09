import React from 'react';
import { Box, Typography } from '@mui/material';

export default function StatusAlert({ 
  message, 
  status = "Status",
  type
}) {
  const isError = type === 'not_Qualified';
  const bgColor = isError ? '#FFEFEF' : '#FFF9E5';
  const borderColor = isError ? '#FF0000' : '#FFA500';
  const statusBgColor = isError ? '#FF0000' : '#FFA500';
  const statusText = isError ? 'Not Qualified' : 'Hold';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: bgColor,
        padding: '8px 16px',
        borderRadius: '7px',
        marginBottom: "1rem",
        border: `2px solid ${borderColor}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography 
          component="span" 
          sx={{ 
            color: '#444444',
            fontSize: '14px',
          }}
        >
          {message}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          component="span"
          sx={{
            color: '#444444',
            fontSize: '14px',
          }}
        >
          {status}:
        </Typography>
        <Box
          sx={{
            backgroundColor: statusBgColor,
            color: '#FFFFFF',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '12px',
          }}
        >
          {statusText}
        </Box>
      </Box>
    </Box>
  );
}

