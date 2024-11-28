import React from "react";
import { Box, MenuItem, TextField, Typography } from "@mui/material";

const ReusableDropdown = ({ label, options, value, onChange, textProps, ...props }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography {...textProps}>{label}</Typography>
            <TextField
                select
                value={value}
                onChange={onChange}
                size="small"
                {...props}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value} >
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

export default ReusableDropdown;
