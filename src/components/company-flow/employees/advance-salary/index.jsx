"use client";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CustomButton from "@/components/Shared-components/CustomButton";
import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import CompanyEmpTableWrapper from "../CompanyEmpTableWrapper";
import CompanyEmpty from "../../CompanyEmpty";
import EmployeesModal from "../EmployeesModal";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Button } from "@/components/ui/button";
import AllocateAssetTable from "../../asset-allocation/table";
import AdvanceSalaryTableModal from "./table/AdvanceSalaryTableModal";
import AdvanceSalaryTable from "./table";

const AdvanceSalaryEmptyScreen = () => {
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
        <CustomBreadcrumb name="Advance Salary" />
        <Button
          className="bg-[#296291] hover:bg-[#4080b4]"
          onClick={() => setShowPopup(true)}
        >
          Request Advance Salary
          <Plus />
        </Button>
      </Box>

      <Divider sx={{ mt: 1, mx: 2 }} />

      {true ? (
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
      {showPopup && <AdvanceSalaryTableModal onClose={onClose} />}
    </Box>
  );
};

export default AdvanceSalaryEmptyScreen;
