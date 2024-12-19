import React from "react";
import { Box, Divider } from "@mui/material";
import DlRrquestForm from "@/components/company-flow/employees/driving-license-request/form";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";

const page = () => {
  return (
    <Box
      sx={{
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DynamicBreadcrumb />
        {/* <CustomButton startIcon={<Plus />}>Request Advance Salary</CustomButton> */}
        {/* <CustomBreadcrumb name="Driving License Request" /> */}
        {/* <Button className="bg-[#296291] hover:bg-[#4080b4]">
          Request Advance Salary
          <Plus />
        </Button> */}
      </Box>
      <Divider sx={{ mt: 1 }} />

      <Box
        sx={{
          mt: 2,
        }}
      >
        <DlRrquestForm />
      </Box>
    </Box>
  );
};

export default page;
