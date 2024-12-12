import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  InputAdornment,
  Typography,
  FormControl,
  FormHelperText,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Import the calendar icon

const CustomDateField = ({
  label,
  placeholder = "Select date",
  value,
  onChange,
  error,
  helperText,
  fullWidth = true,
  textProps = {}, // Props for label typography
  sx = {}, // Additional styles for the field wrapper
  required = false, // Indicate if the field is required
  borderRadius = 2, // Custom border radius for the date field
  height = 40, // Custom height for the date field
  bgcolor = "transparent", // Set default background color to white for the text field
  ...props
}) => {
  return (
    <FormControl
      sx={{
        ...sx,
        borderRadius: borderRadius,
        width: fullWidth ? "100%" : "auto",
      }}
      fullWidth={fullWidth}
      error={!!error}
    >
      {label && (
        <Typography component="label" sx={{ fontSize: textProps.fontSize, marginBottom: textProps.marginBottom }} {...textProps}>
          {label}
          {required && <span style={{ color: "red" }}> *</span>}
        </Typography>
      )}

      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="date"
        size="small"
        variant="outlined"
        sx={{
          height: height, // Set custom height
          borderRadius: borderRadius, // Apply custom border radius
          "& .MuiOutlinedInput-root": {
            height: height, // Ensure the height is consistent for the input
            borderRadius: borderRadius, // Border radius for the input
            backgroundColor: bgcolor, // Apply the background color (white by default)
          },
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
  borderRadius: PropTypes.number, // Custom border radius for the date field
  height: PropTypes.number, // Custom height for the date field
  bgcolor: PropTypes.string, // Custom background color for the date field
};

export default CustomDateField;
