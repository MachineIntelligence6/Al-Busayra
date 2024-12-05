import React from "react";
import { useFormik } from "formik";
import { Box, Button, Typography } from "@mui/material";
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";
import { formSchema } from "../../../../Shared-components/Schemas/FormSchema";

const Insurance = () => {
  const formik = useFormik({
    initialValues: {
      medicalInsurance: "",
      miStartDate: "",
      miEndDate: "",
      accidentalInsurance: "",
      aiStartDate: "",
      aiEndDate: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  const inputFields = [
    {
      label: "Medical Insurance",
      name: "medicalInsurance",
      component: Input,
    },
    {
      label: "Medical Insurance Start Date",
      name: "miStartDate",
      component: Input,
    },
    {
      label: "Medical Insurance End Date",
      name: "miEndDate",
      component: Input,
    },
    {
      label: "Accidental Insurance",
      name: "accidentalInsurance",
      component: Input,
    },
    {
      label: "Accidental Insurance Start Date",
      name: "aiStartDate",
      component: Input,
    },
    {
      label: "Accidental Insurance End Date",
      name: "aiEndDate",
      component: Input,
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

export default Insurance;
