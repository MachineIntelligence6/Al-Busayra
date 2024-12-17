"use client";

import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import CompanyEmpty from "../../CompanyEmpty";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Button } from "@/components/ui/button";
import AdvanceSalaryTableModal from "./table/AdvanceSalaryTableModal";
import AdvanceSalaryTable from "./table";

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
        {/* <DynamicBreadcrumb />
        <CustomButton startIcon={<Plus />}>Request Advance Salary</CustomButton> */}
        <CustomBreadcrumb name="Advance Salary" />

        <Button
          className="bg-[#296291] hover:bg-[#4080b4]"
          onClick={() => setShowPopup(true)}
        >
          Request Advance Salary
          <Plus />
        </Button>
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
