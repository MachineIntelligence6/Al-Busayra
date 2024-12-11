import Dropdown from "@/app/Components/Input/Dropdown";
import Input from "@/app/Components/Input/Input";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import { Box, Divider } from "@mui/material";
import React from "react";

const Passport = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "Passport No.",
      name: "passportNumber",
      component: Input,
    },
    {
      label: "Passport Issue Date",
      name: "passportIssueDate",
      component: CustomDateField,
    },
    {
      label: "Passport Expiry Date",
      name: "passportExpiryDate",
      component: CustomDateField,
    },
    {
      label: "Passport Copy",
      name: "passportCopy",
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
                  onChange={(e) => handleFileChange(e, field.name)}
                  height={36.5}
                  borderRadius={5}
                  bgColor="#FFFFFF"
                  textSize="13px"
                  marginBottom="4px"
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

export default Passport;
