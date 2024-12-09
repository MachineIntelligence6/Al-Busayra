import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import CustomButton from "@/components/Shared-components/CustomButton";

const BasicInfo = ({ formData, setFormData }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    {
      label: "Full Name As per Emirates ID",
      name: "fullName",
      component: Input,
    },
    {
      label: "Gender",
      name: "gender",
      component: Dropdown,
      options: ["Male", "Female", "Other"],
    },
    { label: "Date of Birth", name: "dob", component: Input },
    {
      label: "Religion",
      name: "religion",
      component: Dropdown,
      options: ["Islam", "Christianity", "Hinduism", "Other"],
    },
    {
      label: "Nationality",
      name: "nationality",
      component: Dropdown,
      options: ["UAE", "India", "USA", "Other"],
    },
    {
      label: "Marital Status",
      name: "maritalStatus",
      component: Dropdown,
      options: ["Single", "Married", "Divorced"],
    },
    {
      label: "Employment Type",
      name: "employeeStatus",
      component: Dropdown,
      options: ["Employed", "Self-Employed", "Unemployed"],
    },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Form content */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            alignSelf: "start",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {formData.image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Typography variant="body2">No Image</Typography>
            )}
          </Box>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-upload-input"
          />
          <CustomButton
            sx={{
              padding: "6px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 500,
              boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
              display: "flex",
              gap: 1,
              width: "fit-content",
            }}
            onClick={() =>
              document.getElementById("image-upload-input").click()
            }
          >
            Upload Picture
          </CustomButton>
        </Box>

        {/* Dynamically render input and dropdown fields */}
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
                  value={formData[field.name] || ""}
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
      </Box>
      <Divider sx={{ borderColor: "#2F2B3D40", mt: 2 }} />
    </Box>
  );
};

export default BasicInfo;
