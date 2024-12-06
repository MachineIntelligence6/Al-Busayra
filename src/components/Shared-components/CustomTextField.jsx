import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@mui/material";

const CustomTextField = ({
  value,
  onChange,
  placeholder = "",
  error,
  helperText,
  fullWidth = true,
  sx,
  type = "text",
  multiline = false,
  rows,
  icon, // Icon component passed as a prop
  iconPosition = "start", // Icon position: "start" or "end"
  removeRightBorder = false, // New prop to handle right border removal
  ...rest
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
          }),
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

CustomTextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  icon: PropTypes.node, // The icon component to display
  iconPosition: PropTypes.oneOf(["start", "end"]), // Position of the icon
  removeRightBorder: PropTypes.bool, // New prop to remove right border and radius
};

export default CustomTextField;


// ==============usage================
// Default Usage (As-Is)

// {/* <CustomTextField
// value={fullName}
// onChange={handleChange}
// label="Full Name"
// placeholder="Enter your full name as per Emirates ID"
// error={error}
// /> */}


// Removing Right Border and Radius


{/* <CustomTextField
  value={value}
  onChange={handleChange}
  placeholder="Enter text"
  error={error}
  removeRightBorder={true}
/> */}