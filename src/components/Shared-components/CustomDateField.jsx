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
import InputLabelTop from "./InputLabel";
import { custom } from "zod";
import { Calendar } from "lucide-react";

const CustomDateField = ({
  label,
  placeholder = "Select date",
  value,
  onChange,
  error,
  helperText,
  fullWidth = true,
  textProps = {},
  sx = {},
  required = false,
  borderRadius = 2,
  height = 40,
  bgcolor = "transparent",
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
        <InputLabelTop text={label} required={required} />
      )}

      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="date"
        size="small"
        variant="outlined"
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment position="end" sx={{ "& button": { color: "red" } }}>
        //       <Calendar size={18} />
        //     </InputAdornment>
        //   ),
        // }}
        sx={{
          height: height,
          borderRadius: borderRadius,
          "& .MuiOutlinedInput-root": {
            height: height,
            borderRadius: borderRadius,
            backgroundColor: bgcolor,
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

