import React from "react";
import { useFormik } from "formik";
import { Box, Button, Typography } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { formSchema } from "../../../../Shared-components/Schemas/FormSchema";

const OtherDetails = () => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      passportHandOver: "",
      passportTakerName: "",
      passportPicture: "",
      rtaTraining: "",
      empOwnerShip: "",
      empStatus: "",
      vendor: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  const inputFields = [
    {
      label: "Passport Handed Over To Representative",
      name: "passportHandOver",
      component: Input,
    },
    {
      label: "Name of Representative Passport Taken",
      name: "passportTakerName",
      component: Input,
    },
    {
      label: "Add Picture of Passport",
      name: "passportPicture",
      component: Input,
    },
    {
      label: "RTA Training",
      name: "rtaTraining",
      component: Input,
    },
    {
      label: "EMP Ownership",
      name: "empOwnerShip",
      component: Dropdown,
      options: ["Own", "4PL"],
    },
    {
      label: "Vendor",
      name: "vendor",
      component: Dropdown,
      options: ["Taj Global", "Bin Abc", "Bin Xyz"],
    },
    {
      label: "EPM Status",
      name: "empStatus",
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

                {/* Display error message if field is touched and there's an error */}
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

export default OtherDetails;
