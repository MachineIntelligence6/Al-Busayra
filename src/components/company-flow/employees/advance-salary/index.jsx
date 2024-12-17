"use client";

import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import CompanyEmpty from "../../CompanyEmpty";
import AdvanceSalaryTableModal from "./table/AdvanceSalaryTableModal";
import AdvanceSalaryTable from "./table";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";

const AdvanceSalaryEmptyScreen = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onClose = () => {
    setShowPopup(false);
  };

  return (
    <Box component="div">
      <Box
        sx={{
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DynamicBreadcrumb />
        <CustomButton startIcon={<Plus />}>Request Advance Salary</CustomButton>
    
      </Box>

      <Divider sx={{ mt: 1, mx: 2, mb: 2 }} />

      {false ? (
        <AdvanceSalaryTable />
      ) : (
        <CompanyEmpty>
          <EmptyScreenView
            image="/company/advance-salary.svg"
            title="No Advance Salary Request"
            description="Please click the button below to add advance salary request."
            buttonText="Advance Salary Request"
            onButtonClick={() => setShowPopup(true)}
          />
        </CompanyEmpty>
      )}

      {showPopup && <AdvanceSalaryTableModal onClose={onClose} />}
    </Box>
  );
};

export default AdvanceSalaryEmptyScreen;
