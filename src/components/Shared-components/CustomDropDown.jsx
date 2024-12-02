import React from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";

const CustomDropdown = ({ label, options, value, onChange,placeholder, textProps, sx, ...props }) => {
    return (
        <FormControl sx={{ ...sx }} >
            <Typography component="label" {...textProps}>{label}</Typography>
            <Select
                value={value}
                onChange={onChange}
                size="small"
                placeholder={placeholder}
                {...props}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdown;
