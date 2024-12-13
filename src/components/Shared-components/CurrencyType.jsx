import { Typography } from '@mui/material'
import React from 'react'

const CurrencyType = (props) => {
    const { bgcolor = "#80839029", type = "AED" } = props
    return (
        <Typography sx={{ bgcolor: bgcolor, py: 0.5, px: 1, fontSize: 14, borderRadius: 1 }}>{type}</Typography>
    )
}

export default CurrencyType
