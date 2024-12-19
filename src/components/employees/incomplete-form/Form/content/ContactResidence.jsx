import React, { useState } from "react";
import {
  Box,
  Divider,
  TextField,
} from "@mui/material";
import Dropdown from "@/app/components/Input/Dropdown";
import CustomCountryCodeInput from "@/components/shared-components/CustomCountryCodeInput";

const ContactResidence = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const countryCodes = [
    { code: "+971" }, // USA
    { code: "+44" }, // UK
    { code: "+91" }, // India
  ];

  // State to store phone number
  const [phoneNumber, setPhoneNumber] = useState({
    countryCode: "+971",
    number: "",
  });
  const [eContractNo, setEContractNo] = useState({
    countryCode: "+971",
    number: "",
  });

  // Function to handle changes in the phone number
  const handlePhoneNumberChange = (e) => {
    const { name, value } = e.target;
    if (name === "eContactNo") setEContractNo(old => ({ ...old, number: value, }))
    if (name === "phoneNumber") setPhoneNumber(old => ({ ...old, number: value }))
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
      component: CustomCountryCodeInput,
    },
    {
      label: "Emergency Contact Relation (UAE)",
      name: "eContactRelation",
      component: Input,
    },
    {
      label: "Emergency Contact no. (UAE)",
      name: "eContactNo",
      component: CustomCountryCodeInput,
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
              {field.component === Input && (
                <TextField
                  size="small"
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              )}
              {field.component === CustomCountryCodeInput && (
                <CustomCountryCodeInput
                  countryCodes={countryCodes}
                  value={field.name === "phoneNumber" ? phoneNumber : eContractNo}
                  onChange={handlePhoneNumberChange}
                  onChangeCode={() => { }}
                  placeholder="Enter phone number"
                  label={field.label}
                  bgcolor="#FFF"
                  height="40px"
                  name={field.name}
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

export default ContactResidence;
