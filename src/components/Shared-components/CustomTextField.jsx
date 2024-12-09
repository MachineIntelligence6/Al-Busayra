import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment} from "@mui/material";

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
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={!!error}
      helperText={error ? error.message || helperText : helperText}
      fullWidth={fullWidth}
      type={type}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      variant="outlined"
      backgroundColor="#FCFCFC"
      InputProps={{
        [`${iconPosition}Adornment`]: icon ? (
          <InputAdornment position={iconPosition}>{icon}</InputAdornment>
        ) : null,
      }}
      sx={{
        "& .MuiInputBase-input": {
          padding: "10px 12px",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "7px",
          ...(removeRightBorder && {
            borderRight: "none !important",
            borderTopRightRadius: "0 !important",
            borderBottomRightRadius: "0 !important",
            backgroundColor: "#FCFCFC !important",
          }),
        },
        ...sx,
      }}
      {...rest}
    />
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
