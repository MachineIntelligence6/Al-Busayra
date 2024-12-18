import React from "react";
import { Box, Divider } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AdvanceSalaryForm from "@/components/company-flow/employees/advance-salary/salary-form";
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
        {/* <CustomBreadcrumb name="Advance Salary Form" /> */}
        <Button className="bg-[#296291] hover:bg-[#4080b4]">
          Request Advance Salary
          <Plus />
        </Button>
      </Box>
      <Divider sx={{ mt: 1 }} />

      <Box
        sx={{
          mt: 2,
        }}
      >
        <AdvanceSalaryForm />
      </Box>
    </Box>
  );
};

export default page;
