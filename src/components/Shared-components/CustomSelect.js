import React from "react";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = "Please Select",
  error,
  fullWidth = true,
  sx,
  ...rest
}) => {
  return (
    <FormControl
      sx={{ minWidth: 120, ...sx }}
      error={!!error}
      fullWidth={fullWidth}
    >
      <Select
        sx={{
          borderRadius: "7px",
          padding: "0",
          "& .MuiSelect-select": {
            padding: "11px",
            backgroundColor: "#FCFCFC",
          },
        }}
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": placeholder }}
        IconComponent={KeyboardArrowDownIcon}
        MenuProps={{
          PaperProps: {
            sx: {
              padding: "0",
            },
          },
        }}
        {...rest}
      >
        <MenuItem value="">
          <Typography variant="body2" color="gray">
            {placeholder}
          </Typography>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <Typography color="error">{error.message}</Typography>}
    </FormControl>
  );
};

CustomSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.object,
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
};

export default CustomSelect;

// ============================usage of that component=========================

{/* 
  <CustomSelect
  value={selectedValue}
  onChange={onChange}
  labelId="residency-label"       //---- optional
  id="residency"                 //----- optional
  options={[
    { value: "resident", label: "UAE Resident" },
    { value: "non-resident", label: "Non UAE Resident" },
  ]}
  placeholder="Non UAE Resident"
  error={error}
/>; 
*/}