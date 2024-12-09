import React from "react";
import { TextField, Box, Typography, Divider } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";

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
      component: Input,
    },
    {
      label: "EID Expiry Date ",
      name: "eidExpiryDate",
      component: Input,
    },
    {
      label: "EID Copy Front ",
      name: "eidCopyFront",
      component: Input,
      type: "file",
    },
    {
      label: "EID Copy Back ",
      name: "eidCopyBack",
      component: Input,
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
              {field.component === Input ? (
                <Input
                  labelText={field.label}
                  customClass={"w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              ) : (
                <Dropdown
                  labelText={field.label}
                  customClass={"w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"}
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
            </Box>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2F2B3D40", mt: 2 }} />
      </Box>
    </Box>
  );
};

export default EmiratesId;
