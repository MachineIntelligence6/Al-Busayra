import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Divider, Typography } from "@mui/material";
import CustomButton from "@/components/Shared-components/CustomButton";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { formSchema } from "../../../../Shared-components/Schemas/FormSchema";

const BasicInfo = () => {
  const [image, setImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      gender: "",
      dob: "",
      religion: "",
      nationality: "",
      maritalStatus: "",
      employeeStatus: "",
      image: null,
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
    }
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
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Image Upload Section */}
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
              {formik.values.image ? (
                <img
                  src={URL.createObjectURL(formik.values.image)}
                  alt="Uploaded"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.08398 5.25016L7.00065 2.3335L9.91732 5.25016"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.00065 2.3335V9.3335"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </CustomButton>
            {formik.errors.image && formik.touched.image && (
              <Typography color="error">{formik.errors.image}</Typography>
            )}
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
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                ) : (
                  <Dropdown
                    labelText={field.label}
                    customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                    name={field.name}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    options={field.options.map((option) => ({
                      label: option,
                      value: option.toLowerCase(),
                    }))}
                  />
                )}
                {formik.errors[field.name] && formik.touched[field.name] && (
                  <Typography color="error">
                    {formik.errors[field.name]}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            sx={{ backgroundColor: "#7A4BFC", color: "white" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BasicInfo;
