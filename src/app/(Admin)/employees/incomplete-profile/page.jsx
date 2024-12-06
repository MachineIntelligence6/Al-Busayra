import React from "react";
// import EmployeeFormWrapper from "@/components/employees/incomplete-form";
import EmployeeTableWrapper from "@/components/employees/incomplete-form/Table/EmployeeTableWrapper";
import { Box, Divider } from "@mui/material";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";

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
