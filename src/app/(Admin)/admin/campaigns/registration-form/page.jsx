"use client";

import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "@/components/shared-components/Schemas/RegisterSchema";
import AppLogo from "@/components/shared-components/AppLogo";
import CustomDropdown from "@/components/shared-components/CustomDropDown";
import CustomButton from "@/components/shared-components/CustomButton";
import { Check, CircleX } from "lucide-react";
import Link from "next/link";

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
        <TextField
          name="fullName"
          size="small"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="e.g John Smith"
          labelText="Full Name"
          error={Boolean(formik.touched.fullName && formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          name="email"
          size="small"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="e.g johnsmith@gmail.com"
          labelText="Email Address"
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="phone"
          size="small"
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
            <Link href="/admin/campaigns">
              <CustomButton
                variant="outlined"
                bgColor="danger"
                // onClick={() => formik.resetForm()}
                startIcon={<CircleX size={16} />}
              >
                Cancel
              </CustomButton>
            </Link>
            <Link href={'/admin/campaigns/campaign-users'}>
              <CustomButton
                variant="contained"
                type="submit"
                endIcon={<Check size={16} />}
              >
                Save
              </CustomButton>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
