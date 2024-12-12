import React from "react";
import { TextField, Box, Typography, Divider } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";

const EmiratesId = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "Emirates ID No. ",
      name: "emiratesId",
      component: Input,
    },
    {
      label: "EID Issue Date ",
      name: "eidIssueDate",
      component: CustomDateField,
    },
    {
      label: "EID Expiry Date ",
      name: "eidExpiryDate",
      component: CustomDateField,
    },
    {
      label: "EID Copy Front ",
      name: "eidCopyFront",
      component: CustomFileUploadField,
      type: "file",
    },
    {
      label: "EID Copy Back ",
      name: "eidCopyBack",
      component: CustomFileUploadField,
      type: "file",
    },
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Dynamically render input and dropdown fields */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {inputFields.map((field, index) => (
            <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
              {/* Ensures 3 fields per row */}
              {field.component === Input && (
                <Input
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              )}

              {field.component === CustomDateField && (
                <CustomDateField
                  label={field.label}
                  required
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
                  required={true}
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

export default EmiratesId;
