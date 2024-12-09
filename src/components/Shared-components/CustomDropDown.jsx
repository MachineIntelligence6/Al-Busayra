import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const CustomDropdown = ({
    label,
    options,
    value,
    onChange,
    placeholder,
    textProps,
    formControlProps,
    ...props
}) => {
    return (
        <FormControl fullWidth {...formControlProps}>
            {label && (
                <Typography component="label" {...textProps}>
                    {label}
                </Typography>
            )}
            <Select
                value={value}
                onChange={onChange}
                size="small"
                displayEmpty
                renderValue={(selected) => {
                    if (!selected) {
                        return <Typography sx={{ color: "gray" }}>{placeholder}</Typography>;
                    }
                    return options.find((option) => option.value === selected)?.label;
                }}
                {...props}
                sx={{borderRadius: "7px"}}
                IconComponent={KeyboardArrowDownIcon}
            >
                <MenuItem value="" disabled>
                    {placeholder}
                </MenuItem>
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
