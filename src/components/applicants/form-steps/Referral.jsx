// example Number
// +1 123-456-7890: true
// 123-456-7890: true
// +91 123 456 7890: true
// (123) 456-7890: false

// 456-7890: false

import React, { createElement } from "react";
import { Controller } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomCountryCodeInput from "@/components/Shared-components/CustomCountryCodeInput";
import CaptionText from "@/components/Shared-components/CaptionText";

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
];

export const Referral = ({ control }) => {
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

  const fields = [
    {
      label: "Referral By Whom (UAE)",
      name: "referralName",
      required: true, // Mark as required to show the red asterisk
      placeholder: "e.g John",
      component: CustomTextField,
    },
    {
      label: "Referral Phone Number (UAE)",
      name: "referralPhone",
      required: true, // Mark as required to show the red asterisk
      placeholder: "123 456 7890",
      component: CustomCountryCodeInput,
      countryCodes, // Pass country codes for country code input
    },
    {
      label: "Referral Address (UAE)",
      name: "referralAddress",
      required: true, // Optional field, no red asterisk
      placeholder: "Street, 08, Jamal Resident, UAE",
      component: CustomTextField,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {fields.map(
        ({ label, name, required, placeholder, component, countryCodes }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {/* Render label */}
            <Box sx={{ flex: "0 0 40%", textAlign: "left", paddingRight: "1rem" }}>
              <CaptionText text={label} required />
            </Box>

            {/* Render input component */}
            <Box sx={{ flex: "1", width: "80%" }}>
              <Controller
                name={name}
                control={control}
                defaultValue={
                  component === CustomCountryCodeInput
                    ? { countryCode: countryCodes[0].code, number: "" }
                    : ""
                }
                render={({ field, fieldState: { error } }) =>
                  createElement(component, {
                    value: field.value,
                    onChange: field.onChange,
                    placeholder,
                    error,
                    helperText: error?.message,
                    ...(component === CustomCountryCodeInput && { countryCodes }),
                  })
                }
              />
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};

