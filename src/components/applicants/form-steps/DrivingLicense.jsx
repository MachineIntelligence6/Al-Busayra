import React, { createElement } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CustomDatePicker from "@/components/Shared-components/CustomDatePicker";

export const DrivingLicense = ({ control }) => {
  const { setValue } = useFormContext();

  const renderLabel = (label, required = false) => (
    <Typography variant="body1" component="span">
      {label}
      {required && <Typography component="span" color="error"> *</Typography>}
    </Typography>
  );

  const fields = [
    {
      label: "Are You a Local Driving License Holder?",
      name: "isLicenseHolder",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
      component: CustomSelect,
    },
    {
      label: "Local Driving License Number",
      name: "licenseNumber",
      required: true,
      placeholder: "Enter your driving license number",
      component: CustomTextField,
    },
    {
      label: "License Issue Date",
      name: "licenseIssueDate",
      required: true,
      component: CustomDatePicker,
    },
    {
      label: "License Expiry Date",
      name: "licenseExpiryDate",
      required: true,
      component: CustomDatePicker,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {fields.map(({ label, name, required, placeholder, options, component }, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <Box sx={{ flex: "0 0 40%", textAlign: "left", paddingRight: "1rem" }}>
            {renderLabel(label, required)}
          </Box>
          <Box sx={{ flex: "1", width: "80%" }}>
            <Controller
              name={name}
              control={control}
              defaultValue=""
              render={({ field, fieldState: { error } }) =>
                createElement(component, {
                  value: field.value,
                  onChange: field.onChange,
                  placeholder,
                  options,
                  error,
                })
              }
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};


