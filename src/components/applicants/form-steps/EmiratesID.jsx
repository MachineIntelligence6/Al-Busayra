import React, { createElement } from "react";
import { Controller } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CaptionText from "@/components/Shared-components/CaptionText";
import { custom } from "@/app/theme";

export const EmiratesID = ({ control }) => {
  const renderLabel = (label, required = false) => (
    <Typography variant="body1" component="span" sx={{fontSize: "16px", color: custom.primaryText, fontWeight: 500, lineHeight: "18px"}}>
      {label}
      {required && <Typography component="span" color="error"> *</Typography>}
    </Typography>
  );

  const fields = [
    // Nationality will be removed when residency in uae select
    {
      label: "Nationality",
      name: "nationality",
      required: false,
      options: [
        { value: "pakistani", label: "Pakistani" },
        { value: "indian", label: "Indian" },
      ],
      placeholder: "UAE",
      component: CustomSelect,
    },
    {
      label: "Emirates ID No.",
      name: "emiratesIDNumber",
      required: true,
      placeholder: "784-2003-1389613-4",
      component: CustomTextField,
    },
    {
      label: "Emirates ID Issue Date",
      name: "emiratesIDIssueDate",
      required: true,
      placeholder: "10-09-2018",
      component: CustomTextField,
    },
    {
      label: "Emirates ID Expiry Date",
      name: "emiratesIDExpiryDate",
      required: true,
      placeholder: "10-09-2026",
      component: CustomTextField,
    },
    {
      label: "Emirates ID (Front)",
      name: "emiratesIDFront",
      required: true,
      placeholder: "PDF Scanned",
      component: CustomFileUploadField,
    },
    {
      label: "Emirates ID (Back)",
      name: "emiratesIDBack",
      required: true,
      placeholder: "PDF Scanned",
      component: CustomFileUploadField,
    },
    {
      label: "Upload Residency/Iqama",
      name: "residencyIqama",
      required: true,
      placeholder: "PDF Scanned",
      component: CustomFileUploadField,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {fields.map(({ label, name, required, placeholder, component }, index) => (
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
                })
              }
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
