import React, { createElement } from "react";
import { Controller } from "react-hook-form";
import { Box, Typography, InputAdornment } from "@mui/material";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomCountryCodeInput from "@/components/Shared-components/CustomCountryCodeInput";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CaptionText from "@/components/Shared-components/CaptionText";

export const ContactResidence = ({ control, isUaeResident }) => {
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

  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+91", country: "India" },
    { code: "+44", country: "UK" },
    // Add more country codes as needed
  ];

  const fields = [
    {
      label: "Email Address",
      name: "email",
      required: true,
      placeholder: "Enter your email address",
      component: CustomTextField,
      adornment: <MailOutlineIcon />,
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      required: true,
      placeholder: "123 456 7890",
      component: CustomTextField,
      adornment: <PhoneIcon />,
      component: CustomCountryCodeInput,
      countryCodes,
      icon: <PhoneIcon />, // Pass PhoneIcon here
    },
    {
      label: "WhatsApp Number",
      name: "whatsappNumber",
      required: false,
      placeholder: "1234567890",
      component: CustomCountryCodeInput,
      countryCodes,
      icon: <WhatsAppIcon />, // Pass WhatsAppIcon here
    },
    // currentCountryResidence will be removed when residency in uae select
    {
      label: "Current Country Residence",
      name: "currentCountryResidence",
      required: !isUaeResident ? false : true,
      options: [
        { value: "pakistan", label: "Pakistan" },
        { value: "uae", label: "UAE" },
      ],
      component: CustomSelect,
    },
    // Nationality will be removed when residency in uae select
    {
      label: "Nationality",
      name: "nationality",
      required: false,
      options: [
        { value: "pakistani", label: "Pakistani" },
        { value: "indian", label: "Indian" },
      ],
      component: CustomSelect,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {fields.map(
        (
          {
            label,
            name,
            required,
            placeholder,
            options,
            component,
            adornment,
            countryCodes,
            icon,
          },
          index
        ) => (
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
                  component === CustomCountryCodeInput
                    ? createElement(component, {
                      value: field.value,
                      onChange: field.onChange,
                      countryCodes,
                      error,
                      icon, // Pass icon for Phone and WhatsApp fields
                    })
                    : createElement(component, {
                      value: field.value,
                      onChange: field.onChange,
                      placeholder,
                      options,
                      error,
                      InputProps: adornment
                        ? {
                          startAdornment: (
                            <InputAdornment position="start">{adornment}</InputAdornment>
                          ),
                        }
                        : undefined,
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
