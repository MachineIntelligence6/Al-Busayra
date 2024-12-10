"use client";

import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "@/components/Shared-components/Schemas/RegisterSchema";
import Input from "@/app/Components/Input/Input";
import AppLogo from "@/components/Shared-components/AppLogo";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";
import CustomButton from "@/components/Shared-components/CustomButton";

const Page = () => {
  const [cityOptions, setCityOptions] = useState([]);

  // Initialize Formik with validation schema
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      dropdown1: "",
      dropdown2: "",
      dropdown3: "",
    },
    RegisterSchema, // Use the imported validation schema
    onSubmit: (values) => {
      console.log("Form submitted successfully!", values);
    },
  });

  // Options for countries
  const countryOptions = [
    { value: "Pakistan", label: "Pakistan" },
    { value: "India", label: "India" },
    { value: "Bangladesh", label: "Bangladesh" },
  ];

  // City options based on selected country
  const cities = {
    Pakistan: [
      { value: "Islamabad", label: "Islamabad" },
      { value: "Lahore", label: "Lahore" },
      { value: "Karachi", label: "Karachi" },
    ],
    India: [
      { value: "Delhi", label: "Delhi" },
      { value: "Mumbai", label: "Mumbai" },
      { value: "Bangalore", label: "Bangalore" },
    ],
    Bangladesh: [
      { value: "Dhaka", label: "Dhaka" },
      { value: "Chittagong", label: "Chittagong" },
      { value: "Khulna", label: "Khulna" },
    ],
  };

  // Handle country change to update city options
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    formik.setFieldValue("dropdown1", selectedCountry);
    setCityOptions(cities[selectedCountry] || []);
    formik.setFieldValue("dropdown2", ""); // Reset city selection
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        height: "100%",
        padding: 4,
      }}
    >
      <Box>
        <AppLogo />
      </Box>
      <Box>
        <Typography
          sx={{ color: "#3D3A4B", fontSize: "18px", fontWeight: 500 }}
        >
          Registration Form
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "#3D3A4B" }} />

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5"
      >
        <Input
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="e.g John Smith"
          labelText="Full Name"
          error={Boolean(formik.touched.fullName && formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="e.g johnsmith@gmail.com"
          labelText="Email Address"
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="123 456 7890"
          labelText="Phone Number"
          error={Boolean(formik.touched.phone && formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Box sx={{ display: "flex" }}>
          <CustomDropdown
            sx={{ flex: 1 }}
            label="Resident Country"
            placeholder="Please Select"
            options={countryOptions}
            value={formik.values.dropdown1}
            onChange={handleCountryChange}
            name="dropdown1"
            error={Boolean(formik.touched.dropdown1 && formik.errors.dropdown1)}
            helperText={formik.touched.dropdown1 && formik.errors.dropdown1}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <CustomDropdown
            sx={{ flex: 1 }}
            label="Resident City"
            placeholder="Please Select"
            options={cityOptions}
            value={formik.values.dropdown2}
            onChange={formik.handleChange}
            name="dropdown2"
            error={Boolean(formik.touched.dropdown2 && formik.errors.dropdown2)}
            helperText={formik.touched.dropdown2 && formik.errors.dropdown2}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <CustomDropdown
            sx={{ flex: 1 }}
            label="Do you have a valid driving License?"
            placeholder="Please Select"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            value={formik.values.dropdown3}
            onChange={formik.handleChange}
            name="dropdown3"
            error={Boolean(formik.touched.dropdown3 && formik.errors.dropdown3)}
            helperText={formik.touched.dropdown3 && formik.errors.dropdown3}
          />
        </Box>

        <Box
          sx={{ borderTop: "1px solid rgba(47, 43, 61, 0.25)", marginTop: 2 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <CustomButton
              variant="outlined"
              bgColor="danger"
              onClick={() => formik.resetForm()}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99967 14.6668C4.31777 14.6668 1.33301 11.682 1.33301 8.00016C1.33301 4.31826 4.31777 1.3335 7.99967 1.3335C11.6815 1.3335 14.6663 4.31826 14.6663 8.00016C14.6663 11.682 11.6815 14.6668 7.99967 14.6668ZM7.99967 7.05736L6.11405 5.17174L5.17125 6.11454L7.05687 8.00016L5.17125 9.88576L6.11405 10.8286L7.99967 8.94296L9.88527 10.8286L10.8281 9.88576L8.94247 8.00016L10.8281 6.11454L9.88527 5.17174L7.99967 7.05736Z"
                    fill="#FF4C51"
                  />
                </svg>
              }
            >
              Cancel
            </CustomButton>
            <CustomButton
              variant="contained"
              type="submit"
              endIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33301 7.99984L6.66634 11.3332L13.333 4.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            >
              Save
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
