import ActiveEmployeeTable from "@/components/employees/incomplete-form/Table/ActiveEmployeeTable";
import EmployeeView from "@/components/employees/ViewEmployee";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import { Box, Divider } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb />
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box>
        <ActiveEmployeeTable />
      </Box>
    </>
  );
};

export default page;
