import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Divider, Typography } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { formSchema } from "../../../../Shared-components/Schemas/FormSchema";
import Action from "../Action";

const Passport = () => {
  const [currentTab, setCurrentTab] = useState(4);

  const formik = useFormik({
    initialValues: {
      passportNumber: "",
      passportIssueDate: "",
      passportExpiryDate: "",
      passportCopy: null,
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  const inputFields = [
    {
      label: "Passport No.",
      name: "passportNumber",
      component: Input,
    },
    {
      label: "Passport Issue Date",
      name: "passportIssueDate",
      component: Input,
    },
    {
      label: "Passport Expiry Date",
      name: "passportExpiryDate",
      component: Input,
    },
    {
      label: "Passport Copy",
      name: "passportCopy",
      component: Input,
      type: "file",
    },
  ];

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Dynamically render input fields */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {inputFields.map((field, index) => (
              <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
                {/* Render Input components */}
                {field.component === Input ? (
                  <Input
                    labelText={field.label}
                    customClass={
                      "w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                    }
                    name={field.name}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type={field.type || "text"}
                  />
                ) : (
                  <Dropdown
                    labelText={field.label}
                    customClass={
                      "w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                    }
                    name={field.name}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    options={
                      field.options
                        ? field.options.map((option) => ({
                            label: option,
                            value: option.toLowerCase(),
                          }))
                        : []
                    }
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

          <Divider sx={{ borderColor: "#2F2B3D40", mt: 2, }} />

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

export default Passport;
