import React, { useState } from "react";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { Box, Button, Divider, Typography } from "@mui/material";
import CustomButton from "@/components/Shared-components/CustomButton";

const Visa = () => {
  const [formData, setFormData] = useState({
    uaeResidencyIqamaNo: "",
    visaIssueDate: "",
    visaExpiryDate: "",
    uaeResidencyIqama: "",
    companyName: "",
    companyLocation: "",
    visaType: "",
    visaAppliedVia: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const inputFields = [
    {
      label: "UAE residency / Iqama No. ",
      name: "uaeResidencyIqamaNo",
      component: Input,
    },
    {
      label: "Visa Issue Date ",
      name: "visaIssueDate",
      component: Input,
    },
    {
      label: "Visa Expiry Date ",
      name: "visaExpiryDate",
      component: Input,
    },
    {
      label: "UAE Residency/Iqama ",
      name: "uaeResidencyIqama",
      component: Input,
    },
    {
      label: "Company Name ",
      name: "companyName",
      component: Dropdown,
      options: ["Al-Busayra", "Taj Global", "Bin Xyz"],
    },
    {
      label: "Company Location ",
      name: "companyLocation",
      component: Dropdown,
      options: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
    {
      label: "VISA Type ",
      name: "visaType",
      component: Dropdown,
      options: ["Own", "Company Visa"],
    },
    {
      label: "VISA Applied Via ",
      name: "visaAppliedVia",
      component: Dropdown,
      options: ["ABDS Dubai", "ABDS Sharjah", "AHDS Dubai"],
    },
  ];

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Dynamically render input and dropdown fields */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {inputFields.map((field, index) => (
              <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
                {" "}
                {/* Ensures 3 fields per row */}
                {field.component === Input ? (
                  <Input
                    labelText={field.label}
                    customClass={
                      "w-full gap-[1px] text-[13px] text-[#2F2B3DE5] "
                    }
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                ) : (
                  <Dropdown
                    labelText={field.label}
                    customClass={
                      "w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                    }
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    options={field.options.map((option) => ({
                      label: option,
                      value: option.toLowerCase(),
                    }))}
                  />
                )}
              </Box>
            ))}
          </Box>

          

          
        </Box>
      </form>
    </Box>
  );
};

export default Visa;
