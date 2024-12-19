import React from "react";
import { Box, Divider } from "@mui/material";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AssetVerification from "@/components/company-flow/employees/employee-clearance/asset-verification";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";

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
        <AssetVerification />
      </Box>
    </Box>
  );
};

export default page;
