import React from "react";
import { Box, Divider } from "@mui/material";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";
import EmployeeTableWrapper from "@/components/employees/incomplete-form/Table";

const page = () => {
  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb
        />
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box>
        {/* <EmployeeFormWrapper /> */}
        <EmployeeTableWrapper />
      </Box>
    </>
  );
};

export default page;
