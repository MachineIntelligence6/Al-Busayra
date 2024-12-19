import React from "react";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputLabelTop from "./InputLabel";
import { custom } from "@/app/theme";

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
        <FormControl fullWidth {...formControlProps} >
            {label && (
                <InputLabelTop text={label} required={required} />
            )
            }
            <Select
                value={value}
                onChange={onChange}
                size="small"
                displayEmpty
                renderValue={(selected) => {
                    if (!selected) {
                        return <Typography sx={{ color: custom.muted, fontSize: "15px", fontWeight: "400" }}>{placeholder ? placeholder : "Please Select"}</Typography>;
                    }
                    return options.find((option) => option.value === selected)?.label;
                }}
                {...props}
                sx={{ borderRadius: "7px", height: 38 }}
                IconComponent={KeyboardArrowDownIcon}
            >
                <MenuItem value="" disabled sx={{ fontSize: "15px", fontWeight: "400" }} color={custom.PrimaryText}>
                    {placeholder}
                </MenuItem>
                {options?.map((option, index) => (
                    <MenuItem key={index} value={option.value} sx={{ fontSize: "15px", fontWeight: "400" }} color={custom.PrimaryText}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdown;
