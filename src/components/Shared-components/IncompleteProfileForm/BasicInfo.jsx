import React, { useState } from "react";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { Box, Button, Typography } from "@mui/material";

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

  return (
    <Box sx={{}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Image Upload Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: 'center', width: "auto", alignSelf: "flex-start", }}>
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
            <Button
              variant="contained"
              component="label"
              size="small"
              sx={{
                width: "auto",
                padding: "6px 10px",
                // alignSelf: "flex-start",
                display: "flex", // Ensure the button uses flexbox
                alignItems: "center", // Vertically center the content
                gap: "8px", // Add space between the text and icon
                fontSize: '13px',
                fontWeight: 500,
                bgcolor: '#104774'
                
                
              }}
            >
              upload Picture
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
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
            </Button>
          </Box>

          {/* First Row */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Input
              labelText={"Full Name As per Emirates ID "}
              customClass={"w-full gap-[1px]"}
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Dropdown
              labelText={"Gender"}
              customClass={"w-full gap-[1px]"}
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />
            <Input
              labelText={"Date of Birth"}
              customClass={"w-full gap-[1px]"}
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </Box>

          {/* Second Row */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Dropdown
              labelText={"Religion"}
              customClass={"w-full gap-[1px]"}
              name="religion"
              value={formData.religion}
              onChange={handleInputChange}
              options={[
                { label: "Islam", value: "islam" },
                { label: "Christianity", value: "christianity" },
                { label: "Hinduism", value: "hinduism" },
                { label: "Other", value: "other" },
              ]}
            />
            <Dropdown
              labelText={"Nationality"}
              customClass={"w-full gap-[1px]"}
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              options={[
                { label: "UAE", value: "uae" },
                { label: "India", value: "india" },
                { label: "USA", value: "usa" },
                { label: "Other", value: "other" },
              ]}
            />
            <Dropdown
              labelText={"Marital Status"}
              customClass={"w-full gap-[1px]"}
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              options={[
                { label: "Single", value: "single" },
                { label: "Married", value: "married" },
                { label: "Divorced", value: "divorced" },
              ]}
            />
          </Box>

          {/* Third Row */}
          <Box>
            <Dropdown
              labelText={"Employment Type"}
              customClass={"w-1/3 gap-[1px]"}
              name="employmentType"
              value={formData.employmentType}
              onChange={handleInputChange}
              options={[
                { label: "Employed", value: "employed" },
                { label: "Self-Employed", value: "self-employed" },
                { label: "Unemployed", value: "unemployed" },
              ]}
            />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button type="" variant="contained" color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BasicInfo;
