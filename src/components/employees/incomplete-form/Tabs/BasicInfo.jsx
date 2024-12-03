import React, { useState } from "react";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { Box, Button, Divider, Typography } from "@mui/material";
import CustomButton from "@/components/Shared-components/CustomButton";

const BasicInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    religion: "",
    nationality: "",
    maritalStatus: "",
    employmentType: "",
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const inputFields = [
    {
      label: "Full Name As per Emirates ID ",
      name: "fullName",
      component: Input,
    },
    {
      label: "Gender ",
      name: "gender",
      component: Dropdown,
      options: ["Male", "Female", "Other"],
    },
    { label: "Date of Birth ", name: "dob", component: Input },
    {
      label: "Religion ",
      name: "religion",
      component: Dropdown,
      options: ["Islam", "Christianity", "Hinduism", "Other"],
    },
    {
      label: "Nationality ",
      name: "nationality",
      component: Dropdown,
      options: ["UAE", "India", "USA", "Other"],
    },
    {
      label: "Marital Status ",
      name: "maritalStatus",
      component: Dropdown,
      options: ["Single", "Married", "Divorced"],
    },
    {
      label: "Employment Type ",
      name: "employmentType",
      component: Dropdown,
      options: ["Employed", "Self-Employed", "Unemployed"],
    },
  ];

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Image Upload Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              width: "auto",
              alignSelf: "flex-start",
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                border: "1px solid #ddd",
                borderRadius: "",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Typography variant="body2">No Image</Typography>
              )}
            </Box>

            <CustomButton
              sx={{
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 500,
                boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
              }}
              onChange={handleImageChange}
              endIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.33398 9.9165V11.0832C2.33398 11.7275 2.85632 12.2498 3.50065 12.2498H10.5007C11.145 12.2498 11.6673 11.7275 11.6673 11.0832V9.9165"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.08398 5.25016L7.00065 2.3335L9.91732 5.25016"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.00065 2.3335V9.3335"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Upload Picture
            </CustomButton>
          </Box>

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

export default BasicInfo;
