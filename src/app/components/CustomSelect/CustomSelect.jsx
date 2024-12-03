import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomSelect = ({style, label, options, value, onChange, fullWidth = true }) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
      style = {style}
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;