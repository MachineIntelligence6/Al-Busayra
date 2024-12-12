import React from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const defaultOption = [
  { label: "Option-1", value: "option_1" },
  { label: "Option-2", value: "option_2" },
  { label: "Option-3", value: "option_3" },
];

const CustomDropdown = ({
    label,
    options = defaultOption,
    value,
    onChange,
    placeholder,
    textProps,
    formControlProps,
    required = false,
    ...props
}) => {
  return (
        <FormControl fullWidth {...formControlProps}>
            {label && (
                <Box sx={{ display: 'flex', alignItems: "center", gap: 0.4 }}>
                    <Typography component="label" {...textProps}>
                        {label}
                    </Typography>
                    {required && <Typography Typography variant="body1" sx={{ color: 'red' }}> *</Typography>}
                </Box>
            )
            }
            <Select
                value={value}
                onChange={onChange}
                size="small"
                displayEmpty
                renderValue={(selected) => {
                    if (!selected) {
                        return <Typography sx={{ color: "gray" }}>{placeholder ? placeholder : "Please Select"}</Typography>;
                    }
                    return options.find((option) => option.value === selected)?.label;
                }}
                {...props}
                sx={{ borderRadius: "7px" }}
                IconComponent={KeyboardArrowDownIcon}
            >
                <MenuItem value="" disabled>
                    {placeholder}
                </MenuItem>
                {options?.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    );
};

export default CustomDropdown;
