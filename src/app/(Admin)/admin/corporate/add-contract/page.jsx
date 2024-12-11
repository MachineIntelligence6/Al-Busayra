import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import { Box, Divider } from "@mui/material";
import React from "react";
import AddContract from "@/components/corporate/vendors/addContract";

const page = () => {
  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb />
        
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box><AddContract /></Box>
    </>
  );
};

export default page;