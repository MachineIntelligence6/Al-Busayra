import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, InputAdornment, MenuItem, Select, FormControl, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const CustomCountryCodeInput = ({ countryCodes, value, onChange,error,icon }) => {

  const handleCountryCodeChange = (code) => {
    onChange({ ...value, countryCode: code });
  };

  const handleNumberChange = (number) => {
    onChange({ ...value, number });
  };

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        border: '1px solid lightgray',
        alignItems: 'center',
        borderRadius: "8px",
        paddingX: "7px",
        justifyContent: "flex-start"
      }}
    >
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '& .MuiOutlinedInput-root': {
            borderRadius: 0, 
            boxShadow: 'none',
          },
          '& fieldset': {
            border: 'none',
          },
        }}
      >
      <InputAdornment position="start">
                {icon}
              </InputAdornment>
        <Select
          value={value.countryCode}
          onChange={(e) => handleCountryCodeChange(e.target.value)}
          sx={{
            width: '30%',
            '& .MuiSelect-select': {
              paddingLeft: 2,
              borderRight: "2px solid lightgray",
              borderRadius:"0px",
              padding:"10px"
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
        <TextField
        widthFull
          value={value.number}
          onChange={(e) => handleNumberChange(e.target.value)}
          placeholder="Enter WhatsApp Number"
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              boxShadow: 'none',
            },
            '& fieldset': {
              border: 'none',
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px",
            },
          }}
        />
      </FormControl>
    </Box>
 {/* <Typography color="error">{error && {error.message}}</Typography> */}
 </>
  );
};

export default CustomCountryCodeInput;


// usage 

{/* <CustomCountryCodeInput
countryCodes={countryCodes}
value={phoneNumber}
onChange={handlePhoneNumberChange}
error={phoneNumber.number === '' ? { message: 'Phone number is required' } : null} // Example error handling
icon={<FlagIcon />} // Example icon
/> */}