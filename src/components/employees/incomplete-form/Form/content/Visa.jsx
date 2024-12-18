import Dropdown from "@/app/Components/Input/Dropdown";
import Input from "@/app/Components/Input/Input";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import { Box, Divider } from "@mui/material";
import React from "react";

const Visa = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "UAE Residency / Iqama No.",
      name: "uaeResidencyIqamaNo",
      component: Input,
    },
    {
      label: "Visa Issue Date",
      name: "visaIssueDate",
      component: CustomDateField,
    },
    {
      label: "Visa Expiry Date",
      name: "visaExpiryDate",
      component: CustomDateField,
    },
    {
      label: "UAE Residency/Iqama",
      name: "uaeResidencyIqama",
      component: CustomFileUploadField,
    },
    {
      label: "Company Name",
      name: "companyName",
      component: Dropdown,
      options: ["Al-Busayra", "Taj Global", "Bin Xyz"],
    },
    {
      label: "Company Location",
      name: "companyLocation",
      component: Dropdown,
      options: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
    {
      label: "VISA Type",
      name: "visaType",
      component: Dropdown,
      options: ["Own", "Company Visa"],
    },
    {
      label: "VISA Applied Via",
      name: "visaAppliedVia",
      component: Dropdown,
      options: ["ABDS Dubai", "ABDS Sharjah", "AHDS Dubai"],
    },
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Dynamically render input and dropdown fields */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {inputFields.map((field, index) => (
            <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
              {/* Render Input or Dropdown components */}
              {field.component === Input && (
                <Input
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              )}
              {field.component === Dropdown && (
                <Dropdown
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  options={[
                    { label: "Select an option", value: "" },
                    ...field.options.map((option) => ({
                      label: option,
                      value: option,
                    })),
                  ]}
                />
              )}
              {field.component === CustomDateField && (
                <CustomDateField
                  label={field.label}
                  required={true}
                  borderRadius={2}
                  height={36.5}
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

export default Visa;
