import React from 'react';
import { Box } from '@mui/material';

export function StatusIndicator({ status, pathname }) {
  let backgroundColor = '#FFE5E5';
  let textColor = '#FF0000';
  let displayStatus = status;

  if (pathname.includes('hold')) {
    backgroundColor = '#FFF4D9';
    textColor = '#FFA500';
    displayStatus = 'Hold';
  } else if (pathname.includes('final-review')) {
    backgroundColor = '#D9F0FF';
    textColor = '#00BAD1';
    displayStatus = 'Final Review';
  } else if (pathname.includes('not-qualified')) {
    backgroundColor = '#FFE5E5';
    textColor = '#FF0000';
    displayStatus = 'Not Qualified';
  } else {
    switch (status) {
      case 'Pending':
        backgroundColor = '#D9F0FF';
        textColor = '#00BAD1';
        break;
      case 'Hold':
        backgroundColor = '#FFF4D9';
        textColor = '#FFA500';
        break;
      case 'Not Qualified':
        backgroundColor = '#FFE5E5';
        textColor = '#FF0000';
        break;
      default:
        break;
    }
  }

  return (
    <Box
      sx={{
        backgroundColor,
        color: textColor,
        padding: '4px 8px',
        borderRadius: '5px',
        textAlign: 'center',
        display: 'inline-block',
      }}
    >
      {displayStatus}
    </Box>
  );
}
