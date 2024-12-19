import React, { createElement } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import CustomSelect from "@/components/shared-components/CustomSelect";
import ImageUpload from "../ImageUpload";
import CustomTextField from "@/components/shared-components/CustomTextField";
import CaptionText from "@/components/shared-components/CaptionText";
import { custom } from "@/app/theme";

export const GeneralInfo = ({ control, isUaeResident }) => {
  const { setValue } = useFormContext();

  const renderLabel = (label, required = false) => (
    <Typography variant="body1" component="span" sx={{fontSize: "16px", color: custom.primaryText, fontWeight: 500, lineHeight: "18px"}}>
      {label}
      {required && <Typography component="span" color="error"> *</Typography>}
    </Typography>
  );

  const fields = [
    {
      label: "Campaign Name",
      name: "campaignName",
      required: true,
      options: [
        { value: "campaign1", label: "Campaign 1" },
        { value: "campaign2", label: "Campaign 2" },
      ],
    },
    {
      label: "UAE Residency/Iqama",
      name: "residency",
      placeholder: "Non UAE Resident",
      required: true,
      options: [
        { value: "resident", label: "UAE Resident" },
        { value: "non-resident", label: "Non UAE Resident" },
      ],
    },
    {
      label: `Full Name ${isUaeResident ? "as per emirates iD" : ""}`,
      name: "fullName",
      placeholder: "Enter your full name",
      required: true,
      // placeholder: "Enter your full name as per Emirates ID",
      component: CustomTextField,
    },
    {
      label: "Gender",
      name: "gender",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Employment Status",
      name: "employeeStatus",
      placeholder: "Full time",
      required: true,
      options: [
        { value: "fullTime", label: "Full Time" },
        { value: "partTime", label: "Part Time" },
        { value: "contractor", label: "Contractor" },
      ],
    },
    {
      label: "Preferred Working Country",
      name: "workingCountry",
      placeholder: "UAE",
      required: true,
      options: [
        { value: "uae", label: "UAE" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Preferred Working City",
      name: "workingCity",
      placeholder: "Dubai",
      required: true,
      options: [
        { value: "dubai", label: "Dubai" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Interested platform",
      name: "interestedplatform",
      required: isUaeResident ? true : false,
      placeholder: "Any",
      options: [
        { value: "dubai", label: "Dubai" },
        { value: "abuDhabi", label: "Abu Dhabi" },
        { value: "sharjah", label: "Sharjah" },
      ],
    },
    {
      label: "How Did You Learn About This Form?",
      name: "learnedFrom",
      required: true,
      options: [
        { value: "social", label: "Social Media" },
        { value: "friend", label: "Friend" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Will your company provide NOC",
      name: "companyprovideNOC",
      required: isUaeResident ? true : false,
      options: [
        { value: "social", label: "Social Media" },
        { value: "friend", label: "Friend" },
        { value: "other", label: "Other" },
      ],
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Controller
        name="profileImage"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <ImageUpload
            uploadedImage={field.value}
            onFileChange={(file) => setValue("profileImage", file)}
            error={error?.message || null}
          />
        )}
      />

      {fields.map(({ label, name, required, placeholder, options, component = CustomSelect }, index) => (
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
