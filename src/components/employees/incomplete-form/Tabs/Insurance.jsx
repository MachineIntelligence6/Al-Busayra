import React, { useState } from "react";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { Box, Button, Divider, Typography } from "@mui/material";
import CustomButton from "@/components/Shared-components/CustomButton";

const Insurance = () => {
  const [formData, setFormData] = useState({
    medicalInsurance: "",
    miStartDate: "",
    miEndDate: "",
    accidentalInsurance: "",
    aiStartDate: "",
    aiEndDate: "",
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
      label: "Medical Insurance ",
      name: "medicalInsurance",
      component: Input,
    },
    {
      label: "Medical Insurance Start Date ",
      name: "miStartDate",
      component: Input,
    },
    {
      label: "Medical Insurance End Date ",
      name: "miEndDate",
      component: Input,
    },
    {
      label: "Accidental Insurance ",
      name: "accidentalInsurance",
      component: Input,
    },
    {
      label: "Accidental Insurance Start Date ",
      name: "aiStartDate",
      component: Input,
    },
    {
      label: "Accidental Insurance End Date ",
      name: "aiEndDate",
      component: Input,
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

export default Insurance;
