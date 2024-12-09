import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";

const ContactResidence = ({ formData, setFormData }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "Email Address",
      name: "email",
      component: Input,
    },
    {
      label: "Contact no. (UAE)",
      name: "phoneNumber",
      component: Input,
    },
    {
      label: "Emergency Contact Relation (UAE)",
      name: "eContactRelation",
      component: Input,
    },
    {
      label: "Emergency Contact no. (UAE)",
      name: "eContactNo",
      component: Input,
    },
    {
      label: "Country",
      name: "country",
      component: Dropdown,
      options: ["UAE", "India", "USA", "Other"],
    },
    {
      label: "City",
      name: "city",
      component: Dropdown,
      options: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
  ];

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Render input fields dynamically */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {inputFields.map((field, index) => (
            <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
              {field.component === Input ? (
                <Input
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              ) : (
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
            </Box>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2F2B3D40", mt: 2 }} />
      </Box>
    </Box>
  );
};

export default ContactResidence;
