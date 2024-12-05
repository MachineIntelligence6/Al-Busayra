import React from "react";
import { useFormik } from "formik";
import { Box, Button, Typography } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import CustomButton from "@/components/Shared-components/CustomButton";
import { formSchema } from "../../../../Shared-components/Schemas/FormSchema"; // Import schema

const ContactResidence = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      eContactRelation: "",
      eContactNo: "",
      country: "",
      city: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  const inputFields = [
    {
      label: "Email Address ",
      name: "email",
      component: Input,
    },
    {
      label: "Contact no. (UAE) ",
      name: "phoneNumber",
      component: Input,
    },
    {
      label: "Emergency Contact Relation (UAE) ",
      name: "eContactRelation",
      component: Input,
    },
    {
      label: "Emergency Contact no. (UAE) ",
      name: "eContactNo",
      component: Input,
    },
    {
      label: "Country ",
      name: "country",
      component: Dropdown,
      options: ["UAE", "India", "USA", "Other"],
    },
    {
      label: "City ",
      name: "city",
      component: Dropdown,
      options: ["Dubai", "Abu Dhabi", "Sharjah"],
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
                {/* Ensures 3 fields per row */}
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

export default ContactResidence;
