import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, TextField } from '@mui/material'

// example Number
// +1 123-456-7890: true
// 123-456-7890: true
// +91 123 456 7890: true
// (123) 456-7890: false

// 456-7890: false
export const Referral = ({ control }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Controller
        name="referralName"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="Referral By Whom (UAE)"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        name="referralPhone"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="Referral Phone Number (UAE)"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        name="referralAddress"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="Referral Address (UAE)"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
    </Box>
  )
}

