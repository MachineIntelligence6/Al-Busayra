import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment, Typography, FormControl, FormHelperText } from "@mui/material";

const CustomTextField = ({
  label,
  placeholder = "",
  value,
  onChange,
  error,
  helperText,
  fullWidth = true,
  startAdornment, // Start adornment (icon, etc.)
  endAdornment, // End adornment (icon, etc.)
  textProps, // Props for label typography
  sx, // Additional styles
  type = "text",
  multiline = false,
  rows,
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
        type={type}
        multiline={multiline}
        size="small"
        rows={multiline ? rows : undefined}
        variant="outlined"
        InputProps={{
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : null,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : null,
        }}
        {...props}
      />
      {helperText && (
        <FormHelperText sx={{ marginTop: "4px" }}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

CustomTextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  label: PropTypes.string,
  required: PropTypes.bool,
  textProps: PropTypes.object,
};

export default CustomTextField;