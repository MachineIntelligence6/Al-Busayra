import Dropdown from "@/app/Components/Input/Dropdown";
import Input from "@/app/Components/Input/Input";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import { Box, Divider } from "@mui/material";
import React from "react";

const OtherDetails = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (file, fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: file,
    }));
  };

  const inputFields = [
    {
      label: "Passport Handed Over To Representative ",
      name: "passportHandOver",
      component: Dropdown,
      options: ["Yes", "No"],
    },
    {
      label: "Name of Representative Passport Taken ",
      name: "passportTakerName",
      component: Input,
    },
    {
      label: "Add Picture of Passport ",
      name: "passportPicture",
      component: CustomFileUploadField,
    },
    {
      label: "RTA Training ",
      name: "rtaTraining",
      component: Dropdown,
      options: ["Yes", "No"],
    },
    {
      label: "EMP Ownership ",
      name: "empOwnerShip",
      component: Dropdown,
      options: ["Own", "4PL"],
    },
    {
      label: "Vendor ",
      name: "vendor",
      component: Dropdown,
      options: ["Taj Global", "Bin Abc", "Bin Xyz"],
    },
    {
      label: "EPM Status ",
      name: "empStatus",
      component: Dropdown,
      options: ["Active", "Inactive"],
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

export default OtherDetails;
