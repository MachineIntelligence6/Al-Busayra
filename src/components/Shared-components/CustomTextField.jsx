import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment, FormControl } from "@mui/material";
import InputLabelTop from "./InputLabel";

const CustomTextField = (props) => {
  const {
    value,
    onChange,
    label,
    placeholder = "",
    error,
    helperText,
    fullWidth = true,
    sx,
    type = "text",
    multiline = false,
    required,
    startAdornment,
    endAdornment,
    rows,
    icon,
    iconPosition = "start",
    removeRightBorder = false,
    textProps,
    ...rest
  } = props
  return (
    <FormControl sx={{ ...sx }} fullWidth={fullWidth} error={!!error}>
      {label && (
        <InputLabelTop text={label} required={required} />
      )}
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        multiline={multiline}
        size="small"
        rows={multiline ? rows : undefined}
        InputProps={{
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : null,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : null,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "7px",
            paddingY: "1px"
          },
          ...(removeRightBorder && {
            "& .MuiOutlinedInput-notchedOutline": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }),
        }}
        {...rest}
      />

    </FormControl>

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