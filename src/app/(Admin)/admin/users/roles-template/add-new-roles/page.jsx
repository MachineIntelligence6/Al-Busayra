"use client";
import { Box, Divider } from "@mui/material";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";
import PermissionsTableWrapper from "@/components/roles-template/PermissionsTableWrapper";

const Page = () => {

  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb />
      </Box>
      <Divider sx={{ mt: 2 }} />

      <Box component="div" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <PermissionsTableWrapper />
      </Box>
    </>
  );
};

export default Page;
