import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomCountryCodeInput = ({
  countryCodes,
  value,
  onChange,
  error,
  icon,
  placeholder,
  label, // Label passed as a prop
  required = false, // If the field is required
  bgcolor = "#FCFCFC", // Default background color
  height = "", // Default height
}) => {
  const handleCountryCodeChange = (code) => {
    onChange({ ...value, countryCode: code });
  };

  const handleNumberChange = (number) => {
    onChange({ ...value, number });
  };

  return (
    <>
      {/* Label */}
      {label && (
        <Typography
          variant="body2"
          sx={{
            marginBottom: "4px", // Space between label and input
          }}
        >
          {label}
          {required && <span style={{ color: "red" }}> *</span>}
        </Typography>
      )}

      {/* Box Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Ensure label is above the fields
          border: "1px solid lightgray",
          borderRadius: "8px",
          paddingX: "7px",
          width: "100%", // Ensures the full width is utilized
          backgroundColor: bgcolor,
          height: height,
        }}
      >
        {/* FormControl for Country Code Select */}
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "60%",
            height: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
              boxShadow: "none",
            },
            "& fieldset": {
              border: "none",
            },
          }}
        >
          <InputAdornment position="start">{icon}</InputAdornment>
          {/* Country Code Select */}
          <Select
            value={value.countryCode}
            onChange={(e) => handleCountryCodeChange(e.target.value)}
            sx={{
              width: "30%", // Country code dropdown width
              "& .MuiSelect-select": {
                paddingLeft: 2,
                padding: "10px",
                borderRight: "2px solid lightgray", // Add border to the right to separate
              },
            }}
            IconComponent={KeyboardArrowDownIcon}
            displayEmpty
          >
            {countryCodes?.map((item) => (
              <MenuItem key={item.code} value={item.code}>
                {item.code}
              </MenuItem>
            ))}
          </Select>

          {/* Phone Number TextField */}
          <TextField
            value={value.number}
            onChange={(e) => handleNumberChange(e.target.value)}
            placeholder={placeholder}
            sx={{
              width: "70%", // Phone number input width
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                boxShadow: "none",
              },
              "& fieldset": {
                border: "none",
              },
              "& .MuiOutlinedInput-input": {
                padding: "10px",
              },
            }}
            variant="outlined"
            size="small"
          />
        </FormControl>
      </Box>

      {/* Error Message */}
      {error && (
        <Typography color="error" variant="caption" sx={{ marginTop: "4px" }}>
          {error.message}
        </Typography>
      )}
    </>
  );
};

export default CustomCountryCodeInput;
