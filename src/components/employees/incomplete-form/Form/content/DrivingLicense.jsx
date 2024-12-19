import React from "react";
import { Box, Divider, TextField } from "@mui/material";
import CustomDateField from "@/components/shared-components/CustomDateField";
import CustomFileUploadField from "@/components/shared-components/CustomFIleUploadField";

const DrivingLicense = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "Driving License No.",
      name: "licenseNumber",
      isRequired: true,
      component: Input,
    },
    {
      label: "Driving License Issue Date",
      name: "licenseIssueDate",
      isRequired: true,
      component: CustomDateField,
    },
    {
      label: "Driving License Expiry Date",
      name: "licenseExpiryDate",
      isRequired: true,
      component: CustomDateField,
    },
    {
      label: "Driving License Copy Front",
      name: "licenseCopyFront",
      isRequired: true,
      component: CustomFileUploadField,
      type: "file",
    },
    {
      label: "Driving License Copy Back",
      name: "licenseCopyBack",
      isRequired: true,
      component: CustomFileUploadField,
      type: "file",
    },
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Dynamically render input fields */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {inputFields.map((field, index) => (
            <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
              {/* Render Input components */}
              {field.component === Input && (
                <TextField
                  size="small"
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  required={field.isRequired}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              )}

              {field.component === CustomDateField && (
                <CustomDateField
                  label={field.label}
                  required={field.isRequired}
                  borderRadius={1.5}
                  height={37.5}
                  bgcolor="#FFF"
                  textProps={{
                    fontSize: "13px",
                    marginBottom: 0.5,
                  }}
                />
              )}

              {field.component === CustomFileUploadField && (
                <CustomFileUploadField
                  label={field.label}
                  value={formData[field.name]}
                  height={36.5}
                  borderRadius={5}
                  bgColor="#FFFFFF"
                  textSize="13px"
                  marginBottom="4px"
                  required={field.isRequired}
                />
              )}
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: "#2F2B3D40", mt: 2 }} />
      </Box>
    </Box>
  );
};

export default DrivingLicense;
