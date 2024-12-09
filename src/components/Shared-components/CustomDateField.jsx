import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment, Typography, FormControl, FormHelperText } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Import the calendar icon

const CustomDateField = ({
    label,
    placeholder = "Select date",
    value,
    onChange,
    error,
    helperText,
    fullWidth = true,
    textProps, // Props for label typography
    sx, // Additional styles
    required = false, // Indicate if the field is required
    ...props
}) => {
    return (
        <FormControl sx={{ ...sx }} fullWidth={fullWidth} error={!!error}>
            {label && (
                <Typography component="label" {...textProps}>
                    {label}
                    {required && <span style={{ color: "red" }}> *</span>}
                </Typography>
            )}
            <TextField
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                // type="date" // Set type to date
                size="small"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <CalendarTodayIcon style={{ cursor: "pointer" }} /> {/* Calendar Icon */}
                        </InputAdornment>
                    ),
                }}
                {...props}
            />
            {helperText && (
                <FormHelperText sx={{ marginTop: "4px" }}>{helperText}</FormHelperText>
            )}
        </FormControl>
    );
};

CustomDateField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    helperText: PropTypes.string,
    fullWidth: PropTypes.bool,
    sx: PropTypes.object,
    label: PropTypes.string,
    required: PropTypes.bool,
    textProps: PropTypes.object,
};

export default CustomDateField;
