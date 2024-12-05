import React, { createElement } from "react";
import { Controller } from "react-hook-form";
import { Box, Typography, Switch } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomDatePicker from "@/components/Shared-components/CustomDatePicker";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";

export const PassportDetails = ({ control }) => {
  const renderLabel = (label, required = false) => (
    <Typography variant="body1" component="span">
      {label}
      {required && <Typography component="span" color="error"> *</Typography>}
    </Typography>
  );

  const fields = [
    {
      label: "Passport Number",
      name: "passportNumber",
      required: true,
      placeholder: "Enter your passport number",
      component: CustomTextField,
    },
    {
      label: "Passport Issue Date",
      name: "passportIssueDate",
      required: true,
      component: CustomDatePicker,
    },
    {
      label: "Passport Expiry Date",
      name: "passportExpiryDate",
      required: true,
      component: CustomDatePicker,
    },
    {
      label: "Passport Copy",
      name: "passportCopy",
      required: true,
      placeholder: "PDF Scanned",
      component: CustomFileUploadField
    },
    {
      label: "Visa Applied",
      name: "visaApplied",
      required: false,
      component: Switch,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {fields.map(({ label, name, required, placeholder, component }, index) => (
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
