"use client";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CustomButton from "@/components/Shared-components/CustomButton";
import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
// import EmployeesModal from "../EmployeesModal";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Button } from "@/components/ui/button";
import CompanyEmpty from "../../CompanyEmpty";
import EmployeeClearanceTableModal from "./table/EmployeeClearanceTableModal";
import ClearanceTable from "./table";
// import AllocateAssetTable from "../../asset-allocation/table";
// import AdvanceSalaryTableModal from "./table/AdvanceSalaryTableModal";
// import AdvanceSalaryTable from "./table";

const EmployeeClearanceEmptyScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
        <CustomBreadcrumb name="Employee Clearance" />
        {/* <Button
          className="bg-[#296291] hover:bg-[#4080b4]"
          onClick={() => setShowPopup(true)}
        >
          Request Advance Salary
          <Plus />
        </Button> */}
      </Box>

      <Divider sx={{ mt: 1, mx: 2 }} />

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

      {/* {false ? (
        <CompanyEmpTableWrapper />
      ) : (
        <CompanyEmpty>
          <EmptyScreenView
            image="/company/advance-salary.svg"
            title="No Advance Salary Request"
            description="Please click the button below to add advance salary request."
            buttonText="Advance Salary Request"
            onButtonClick={() => setIsOpenModal(true)}
          />
        </CompanyEmpty>
      )}
      {isOpenModal && (
        <EmployeesModal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )} */}
      {showPopup && <EmployeeClearanceTableModal onClose={onClose} />}
    </Box>
  );
};

export default EmployeeClearanceEmptyScreen;
