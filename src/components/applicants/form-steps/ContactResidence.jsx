import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material'

export const ContactResidence = ({ control }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="Email Address"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="Phone Number"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        name="whatsappNumber"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            fullWidth
            label="WhatsApp Number"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        name="currentCountry"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl fullWidth error={!!error}>
            <InputLabel>Current Country of Residence</InputLabel>
            <Select {...field} label="Current Country of Residence">
              <MenuItem value="pakistan">Pakistan</MenuItem>
              <MenuItem value="india">India</MenuItem>
              <MenuItem value="uae">UAE</MenuItem>
            </Select>
            {error && <Typography color="error">{error.message}</Typography>}
          </FormControl>
        )}
      />

      <Controller
        name="nationality"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl fullWidth error={!!error}>
            <InputLabel>Nationality</InputLabel>
            <Select {...field} label="Nationality">
              <MenuItem value="pakistani">Pakistani</MenuItem>
              <MenuItem value="indian">Indian</MenuItem>
              <MenuItem value="emirati">Emirati</MenuItem>
            </Select>
            {error && <Typography color="error">{error.message}</Typography>}
          </FormControl>
        )}
      />
    </Box>
  )
}

