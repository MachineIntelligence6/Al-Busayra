import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const DrivingLicense = ({ control }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Controller
        name="isLicenseHolder"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl fullWidth error={!!error}>
            <InputLabel>Local Driving License Holder</InputLabel>
            <Select {...field} label="Local Driving License Holder">
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
            {error && <Typography color="error">{error.message}</Typography>}
          </FormControl>
        )}
      />

      <Controller
        name="licenseNumber"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="Local Driving License Number"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        name="licenseIssueDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Driving License Issue Date"
            value={field.value}
            onChange={(date) => field.onChange(date)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        )}
      />

      <Controller
        name="licenseExpiryDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Driving License Expiry Date"
            value={field.value}
            onChange={(date) => field.onChange(date)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        )}
      />
    </Box>
  )
}

