import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
} from '@mui/material'
import { PhotoCamera,FileUploadIcon,KeyboardArrowDownIcon } from '@mui/icons-material'
import CustomButton from '@/components/Shared-components/CustomButton';

export const GeneralInfo = ({ control }) => {
  const renderLabel = (label, required = false) => (
    <Typography variant="body1" component="span">
      {label}
      {required && (
        <Typography component="span" color="error">
          {" "}
          *
        </Typography>
      )}
    </Typography>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <IconButton sx={{background:"#E9EAEC", padding: "3rem",border: "1px solid #C9C8CC", borderRadius:"10px"}} color="#2F2B3DE5" aria-label="upload picture" component="label" varient="outlined">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <Typography variant="caption" display="block">
          Upload Picture
        </Typography>
      </Box>
       {/* Form Fields */}
       {[
          {
            label: "Campaign Name",
            name: "campaignName",
            required: true,
            placeholder: "Select a campaign",
            component: (
              <Controller
                name="campaignName"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} variant="outlined">
                    <InputLabel id="campaign-name-label">Campaign Name</InputLabel>
                    <Select
                      {...field}
                      labelId="campaign-name-label"
                      id="campaign-name"
                      IconComponent={KeyboardArrowDownIcon}
                      label="Campaign Name"
                    >
                      <MenuItem value="campaign1">Campaign 1</MenuItem>
                      <MenuItem value="campaign2">Campaign 2</MenuItem>
                    </Select>
                    {error && <Typography color="error">{error.message}</Typography>}
                  </FormControl>
                )}
              />
            ),
          },
          {
            label: "UAE Residency/Iqama",
            name: "residency",
            required: true,
            placeholder: "Select your residency status",
            component: (
              <Controller
                name="residency"
                control={control}
                  defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} >
                    <InputLabel id="residency-label">Residency Status</InputLabel>
                    <Select
                      {...field}
                      labelId="residency-label"
                      id="residency"
                      IconComponent={KeyboardArrowDownIcon}
                      label="Residency Status"
                    >
                      <MenuItem value="resident">UAE Resident</MenuItem>
                      <MenuItem value="non-resident">Non UAE Resident</MenuItem>
                    </Select>
                    {error && <Typography color="error">{error.message}</Typography>}
                  </FormControl>
                )}
              />
            ),
          },
          {
            label: "Full Name",
            name: "fullName",
            required: true,
            placeholder: "Enter your full name as per Emirates ID",
            component: (
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    label="Full Name"
                    placeholder="Enter your full name as per Emirates ID"
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            ),
          },
          {
            label: "Gender",
            name: "gender",
            required: true,
            placeholder: "Select your gender",
            component: (
              <Controller
                name="gender"
                control={control}
                  defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} variant="outlined">
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      {...field}
                      labelId="gender-label"
                      id="gender"
                      IconComponent={KeyboardArrowDownIcon}
                      label="Gender"
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                    {error && <Typography color="error">{error.message}</Typography>}
                  </FormControl>
                )}
              />
            ),
          },
          {
            label: "Employment Status",
            name: "employeeStatus",
            required: true,
            placeholder: "Select your employment status",
            component: (
              <Controller
                name="employeeStatus"
                control={control}
                  defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} variant="outlined">
                    <InputLabel id="employment-status-label">Employment Status</InputLabel>
                    <Select
                      {...field}
                      labelId="employment-status-label"
                      id="employment-status"
                      IconComponent={KeyboardArrowDownIcon}
                      label="Employment Status"
                    >
                      <MenuItem value="fullTime">Full Time</MenuItem>
                      <MenuItem value="partTime">Part Time</MenuItem>
                      <MenuItem value="contractor">Contractor</MenuItem>
                    </Select>
                    {error && <Typography color="error">{error.message}</Typography>}
                  </FormControl>
                )}
              />
            ),
          },
          {
            label: "Preferred Working Country",
            name: "workingCountry",
            required: true,
            placeholder: "Select your working country",
            component: (
              <Controller
                name="workingCountry"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} variant="outlined">
                    <InputLabel id="working-country-label">Working Country</InputLabel>
                    <Select
                      {...field}
                      labelId="working-country-label"
                      id="working-country"
                      IconComponent={KeyboardArrowDownIcon}
                      label="Working Country"
                    >
                      <MenuItem value="uae">UAE</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                    {error && <Typography color="error">{error.message}</Typography>}
                  </FormControl>
                )}
              />
            ),
          },
          {
            label: "Preferred Working City",
            name: "workingCity",
            required: true,
            placeholder: "Select your working city",
            component: (
              <Controller
                name="workingCity"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} variant="outlined">
                    <InputLabel id="working-city-label">Working City</InputLabel>
                    <Select
                      {...field}
                      labelId="working-city-label"
                      id="working-city"
                      IconComponent={KeyboardArrowDownIcon}
                      label="Working City"
                    >
                      <MenuItem value="dubai">Dubai</MenuItem>
                      <MenuItem value="abuDhabi">Abu Dhabi</MenuItem>
                      <MenuItem value="sharjah">Sharjah</MenuItem>
                    </Select>
                    {error && <Typography color="error">{error.message}</Typography>}
                  </FormControl>
                )}
              />
            ),
          },
          {
            label: "How Did You Learn About This Form?",
            name: "learnedFrom",
            required: false,
            placeholder: "Select an option",
            component: (
              <Controller
                name="learnedFrom"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} variant="outlined">
                    <InputLabel id="learned-from-label">How Did You Learn?</InputLabel>
                    <Select
                      {...field}
                      labelId="learned-from-label"
                      id="learned-from"
                      IconComponent={KeyboardArrowDownIcon}
                      label="How Did You Learn?"
                    >
                      <MenuItem value="social">Social Media</MenuItem>
                      <MenuItem value="friend">Friend</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                    {error && <Typography color="error">{error.message}</Typography>}
                  </FormControl>
                )}
              />
            ),
          },
        ].map((field, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <Box sx={{ flex: "0 0 40%", textAlign: "left", paddingRight: "1rem" }}>
              {renderLabel(field.label, field.required)}
            </Box>
            <Box sx={{ flex: "1", width:"80%" }}>{field.component}</Box>
          </Box>
        ))}
    </Box>
  )
}

