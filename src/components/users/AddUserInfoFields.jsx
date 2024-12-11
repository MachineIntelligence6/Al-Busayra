import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Typography, Checkbox, ListItemText, MenuItem, Select } from "@mui/material";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import ImageUpload from "../applicants/ImageUpload";
import { CustomMultiSelect } from "../Shared-components/CustomMultiSelect";

export const AddUserInfoFields = ({ control }) => {
  const { setValue } = useFormContext();

  const renderLabel = (label, required = false) => (
    <Typography variant="body1" component="span">
      {label}
      {required && <Typography component="span" color="error"> *</Typography>}
    </Typography>
  );

  const fields = [
    {
      label: "User Type",
      name: "userType",
      required: true,
      options: [
        { value: "administrator", label: "Administrator" },
        { value: "manager", label: "Manager" },
        { value: "employee", label: "Employee" },
      ],
    },
    {
      label: "Role",
      name: "role",
      required: true,
      options: [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
        { value: "guest", label: "Guest" },
      ],
    },
    {
      label: "Full Name",
      name: "fullName",
      required: true,
      placeholder: "Enter your full name",
      component: CustomTextField,
    },
    {
      label: "Email Address",
      name: "email",
      required: true,
      placeholder: "Enter your email address",
      component: CustomTextField,
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      required: true,
      placeholder: "+971 123 456 7890",
      component: CustomTextField,
    },
    {
      label: "Country",
      name: "country",
      required: true,
      options: [
        { value: "uae", label: "United Arab Emirates" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "State/Province",
      name: "state",
      required: true,
      options: [
        { value: "dubai", label: "Dubai" },
        { value: "sharjah", label: "Sharjah" },
        { value: "abuDhabi", label: "Abu Dhabi" },
      ],
    },
    {
      label: "City",
      name: "city",
      required: true,
      options: [
        { value: "dubai", label: "Dubai" },
        { value: "sharjah", label: "Sharjah" },
        { value: "abuDhabi", label: "Abu Dhabi" },
      ],
    },
    {
      label: "Active",
      name: "active",
      required: true,
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
    {
      label: "Company",
      name: "company",
      required: true,
      isMultiSelect: true,
      options: [
        { value: "company1", label: "Company 1" },
        { value: "company2", label: "Company 2" },
        { value: "company3", label: "Company 3" },
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

      {fields.map(({ label, name, required, placeholder, options, isMultiSelect, component = CustomSelect }, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <Box sx={{ flex: "0 0 40%", textAlign: "left", paddingRight: "1rem" }}>
            {renderLabel(label, required)}
          </Box>
          <Box sx={{ flex: "1", width: "80%" }}>
            <Controller
              name={name}
              control={control}
              defaultValue={isMultiSelect ? [] : ""}
              render={({ field, fieldState: { error } }) => (
                isMultiSelect ? (
                  <CustomMultiSelect
                  options={options}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select Campony"/>
                ) : component === CustomSelect ? (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    options={options}
                    error={error}
                  />
                ) : (
                  <CustomTextField
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={placeholder}
                    error={error}
                  />
                )
              )}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
