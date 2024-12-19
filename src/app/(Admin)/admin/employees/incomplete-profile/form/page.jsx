import React from "react";
import MultiStepForm from "@/components/employees/incomplete-form/Form";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";
import { Box, Divider } from "@mui/material";

const page = () => {
  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb />
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box>
        <MultiStepForm />
      </Box>
    </>
  );
};

export default page;
