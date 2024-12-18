"use client";
import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Button } from "@/components/ui/button";
import CompanyEmpty from "../../CompanyEmpty";
import EmployeeClearanceTableModal from "./table/EmployeeClearanceTableModal";
import ClearanceTable from "./table";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";

const EmployeeClearanceEmptyScreen = () => {
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
        {/* <CustomButton startIcon={<Plus />}>Request Advance Salary</CustomButton> */}

        {/* <CustomBreadcrumb name="Employee Clearance" /> */}
        {true && (
          <Button
            className="bg-[#296291] hover:bg-[#4080b4]"
            onClick={() => setShowPopup(true)}
          >
            Request Advance Salary
            <Plus />
          </Button>
        )}
      </Box>

      <Divider sx={{ mt: 1, mx: 2, mb: 2 }} />

      {true ? (
        <ClearanceTable />
      ) : (
        <CompanyEmpty>
          <EmptyScreenView
            image="/company/Boxx.svg"
            title="No Employees Clearance Request"
            description="Please click the button below to add employee clearance request."
            buttonText="Clearance Request"
            onButtonClick={() => setShowPopup(true)}
          />
        </CompanyEmpty>
      )}

      {showPopup && <EmployeeClearanceTableModal onClose={onClose} />}
    </Box>
  );
};

export default EmployeeClearanceEmptyScreen;
