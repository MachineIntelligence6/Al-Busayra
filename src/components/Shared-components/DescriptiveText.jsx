import { custom } from '@/app/theme';
import { Typography } from '@mui/material';
import React from 'react'

const DescriptiveText = (props) => {
    const { text, color = custom.descriptive, sx } = props;
    return (
        <Typography component="p" sx={{ fontSize: 15, fontWeight: 400, color: color, ...sx }} {...props}>{text}</Typography>
    )
}

export default DescriptiveText
