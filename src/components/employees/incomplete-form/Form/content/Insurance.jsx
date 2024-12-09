import Dropdown from "@/app/Components/Input/Dropdown";
import Input from "@/app/Components/Input/Input";
import { Box, Divider } from "@mui/material";
import React from "react";

const Insurance = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const inputFields = [
    {
      label: "Medical Insurance",
      name: "medicalInsurance",
      component: Input,
    },
    {
      label: "Medical Insurance Start Date",
      name: "miStartDate",
      component: Input,
    },
    {
      label: "Medical Insurance End Date",
      name: "miEndDate",
      component: Input,
    },
    {
      label: "Accidental Insurance",
      name: "accidentalInsurance",
      component: Input,
    },
    {
      label: "Accidental Insurance Start Date",
      name: "aiStartDate",
      component: Input,
    },
    {
      label: "Accidental Insurance End Date",
      name: "aiEndDate",
      component: Input,
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

export default Insurance;
