import React, { useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";

// A reusable form component that accepts fields as a prop
const Shared = ({
  fields,
  imageLabel = "Upload Picture",
  onSubmit,
  initialValues = {},
  onCancel,
  customImageStyle = {},
  customSubmitButton = "Next",
  customCancelButton = "Cancel",
  customBackButton = "Back",
  showImageUpload = true, // New prop to control image upload visibility
}) => {
  console.log("Fields in Shared Component:", fields);

  const [formData, setFormData] = useState(initialValues);
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
    onSubmit(formData);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Conditionally render Image Upload Section */}
          {showImageUpload && (
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
                  borderRadius: "6px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f9f9f9",
                  ...customImageStyle,
                }}
              >
                {image ? (
                  <img
                    src={image}
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
              <Button
                variant="contained"
                component="label"
                size="small"
                sx={{
                  width: "auto",
                  padding: "6px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                  bgcolor: "#104774",
                }}
              >
                {imageLabel}
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
          )}

          {/* Dynamically render input and dropdown fields */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {fields.map((field, index) => (
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
                    options={field.options.map((option) => ({
                      label: option,
                      value: option.toLowerCase(),
                    }))}
                  />
                )}
              </Box>
            ))}
          </Box>

          <Divider sx={{ borderColor: "#2F2B3D40", mt: 2 }} />

          {/* Buttons Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              type="button"
              variant="outlined"
              color="error"
              sx={{
                padding: "6px 14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: 500,
              }}
              onClick={onCancel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00065 14.6668C4.31875 14.6668 1.33398 11.682 1.33398 8.00016C1.33398 4.31826 4.31875 1.3335 8.00065 1.3335C11.6825 1.3335 14.6673 4.31826 14.6673 8.00016C14.6673 11.682 11.6825 14.6668 8.00065 14.6668ZM8.00065 7.05736L6.11503 5.17174L5.17222 6.11454L7.05785 8.00016L5.17222 9.88576L6.11503 10.8286L8.00065 8.94296L9.88625 10.8286L10.8291 9.88576L8.94345 8.00016L10.8291 6.11454L9.88625 5.17174L8.00065 7.05736Z"
                  fill="#FF4C51"
                />
              </svg>
              {customCancelButton}
            </Button>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: "6px 14px",
                  bgcolor: "#737682",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M3.83301 8.49984H13.1663"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.83301 8.5L7.83301 12.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.83301 8.5L7.83301 4.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {customBackButton}
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: "6px 14px",
                  bgcolor: "#104774",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {customSubmitButton}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33398 7.99984L6.66732 11.3332L13.334 4.6665"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Shared;
