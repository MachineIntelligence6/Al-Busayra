import { custom } from '@/app/theme';
import { Typography } from '@mui/material';
import React from 'react'

const HeadingText3 = (props) => {
    const { children, sx } = props;
    return (
        <Typography component="h3" sx={{ fontSize: 25, fontWeight: 700, color: custom.primaryText, ...sx }} {...props}>{children}</Typography>
    )
}

export default HeadingText3
