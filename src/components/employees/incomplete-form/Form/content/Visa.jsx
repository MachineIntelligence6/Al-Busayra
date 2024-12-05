import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Divider, Typography } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { formSchema } from "../../../../Shared-components/Schemas/FormSchema";
import Action from "../Action";

const Visa = () => {
  const [currentTab, setCurrentTab] = useState(5);

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      uaeResidencyIqamaNo: "",
      visaIssueDate: "",
      visaExpiryDate: "",
      uaeResidencyIqama: "",
      companyName: "",
      companyLocation: "",
      visaType: "",
      visaAppliedVia: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  // Fields configuration for inputs and dropdowns
  const inputFields = [
    {
      label: "UAE Residency / Iqama No.",
      name: "uaeResidencyIqamaNo",
      component: Input,
    },
    {
      label: "Visa Issue Date",
      name: "visaIssueDate",
      component: Input,
    },
    {
      label: "Visa Expiry Date",
      name: "visaExpiryDate",
      component: Input,
    },
    {
      label: "UAE Residency/Iqama",
      name: "uaeResidencyIqama",
      component: Input,
    },
    {
      label: "Company Name",
      name: "companyName",
      component: Dropdown,
      options: ["Al-Busayra", "Taj Global", "Bin Xyz"],
    },
    {
      label: "Company Location",
      name: "companyLocation",
      component: Dropdown,
      options: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
    {
      label: "VISA Type",
      name: "visaType",
      component: Dropdown,
      options: ["Own", "Company Visa"],
    },
    {
      label: "VISA Applied Via",
      name: "visaAppliedVia",
      component: Dropdown,
      options: ["ABDS Dubai", "ABDS Sharjah", "AHDS Dubai"],
    },
  ];

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Dynamically render input and dropdown fields */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {inputFields.map((field, index) => (
              <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
                {/* Render Input or Dropdown components */}
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

                {/* Show error messages */}
                {formik.touched[field.name] && formik.errors[field.name] && (
                  <Typography color="error" variant="body2">
                    {formik.errors[field.name]}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          <Divider sx={{ borderColor: "#2F2B3D40", mt: 2 }} />

          {/* Action buttons for navigating */}
          <Action
            setValue={setCurrentTab}
            currentTab={currentTab}
            formik={formik}
          />
        </Box>
      </form>
    </Box>
  );
};

export default Visa;
