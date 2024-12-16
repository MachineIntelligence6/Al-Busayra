import { custom } from '@/app/theme';
import { Typography } from '@mui/material';
import React from 'react'

const HeadingText1 = (props) => {
    const { text, sx } = props;
    return (
        <Typography component="h1" sx={{ fontSize: 25, fontWeight: 700, color: custom.primaryText, ...sx }} {...props}>{text}</Typography>
    )
}

export default HeadingText1
