import React, { useState } from "react";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { Box, Divider } from "@mui/material";
import CustomButton from "@/components/Shared-components/CustomButton";

const OtherDetails = () => {
  const [formData, setFormData] = useState({
    passportHandOver: "",
    passportTakerName: "",
    passportPicture: "",
    rtaTraining: "",
    empOwnerShip: "",
    empStatus: "",
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
      label: "Passport Handed Over To Representative ",
      name: "passportHandOver",
      component: Input,
    },
    {
      label: "Name of Representative Passport Taken ",
      name: "passportTakerName",
      component: Input,
    },
    {
      label: "Add Picture of Passport ",
      name: "passportPicture",
      component: Input,
    },
    {
      label: "RTA Training ",
      name: "rtaTraining",
      component: Input,
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
      options: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
  ];

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {inputFields.map((field, index) => (
              <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
                {" "}
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

export default OtherDetails;
