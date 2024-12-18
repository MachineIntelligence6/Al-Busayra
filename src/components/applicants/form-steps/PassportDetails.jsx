import React, { createElement } from "react";
import { Controller } from "react-hook-form";
import { Box, Typography, Switch } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import IOSSwitch from "@/components/ui/switch-button";
import CaptionText from "@/components/Shared-components/CaptionText";
import { custom } from "@/app/theme";

export const PassportDetails = ({ control }) => {
  const renderLabel = (label, required = false) => (
    <Typography variant="body1" component="span" sx={{fontSize: "16px", color: custom.primaryText, fontWeight: 500, lineHeight: "18px"}}>
      {label}
      {required && <Typography component="span" color="error"> *</Typography>}
    </Typography>
  );

  const fields = [
    {
      label: "Passport Number",
      name: "passportNumber",
      required: true,
      placeholder: "ABCD-234353",
      component: CustomTextField,
    },
    {
      label: "Passport Issue Date",
      name: "passportIssueDate",
      required: true,
      placeholder: "20-10-2028",
      component: CustomDateField,
      props: { borderRadius: 1.5 }
    },
    {
      label: "Passport Expiry Date",
      name: "passportExpiryDate",
      required: true,
      placeholder: "20-10-2028",
      component: CustomDateField,
      props: { borderRadius: 1.5 }
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
      component: IOSSwitch,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {fields.map(({ label, name, required, placeholder, component, props = {} }, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <Box sx={{ flex: "0 0 40%", textAlign: "left", paddingRight: "1rem" }}>
            <CaptionText text={label} required />
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
                  ...props,
                })
              }
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
