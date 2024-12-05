import React from 'react'
import {Controller } from 'react-hook-form'
import { Box, TextField, Switch, FormControlLabel, Button, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const PassportDetails = ({ control }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Controller
        name="passportNumber"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="Passport No."
            error={!!error}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        name="passportIssueDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Passport Issue Date"
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
        name="passportExpiryDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Passport Expiry Date"
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
        name="passportCopy"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Box>
            <Button variant="contained" component="label">
              Upload Passport Copy
              <input
                hidden
                accept="application/pdf"
                type="file"
                onChange={(e) => field.onChange(e.target.files?.[0])}
              />
            </Button>
            {error && <Typography color="error">{error.message}</Typography>}
          </Box>
        )}
      />

      <Controller
        name="visaApplied"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
            label="Visa Applied"
          />
        )}
      />
    </Box>
  )
}

