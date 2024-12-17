"use client";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CustomButton from "@/components/Shared-components/CustomButton";
import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CompanyEmpty from "../CompanyEmpty";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import EmployeesModal from "./EmployeesModal";
import CompanyEmpTableWrapper from "./CompanyEmpTableWrapper";

const CompanyEmployees = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
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
        <CustomButton startIcon={<Plus />}>Add Employee</CustomButton>
      </Box>
      <Divider sx={{ mt: 1, mx: 2 }} />

      {false ? (
        <CompanyEmpTableWrapper />
      ) : (
        <CompanyEmpty>
          <EmptyScreenView
            image="/company/icons/employee-empty.svg"
            title="No Employee Added"
            description="Please click the button below to add a new Employee."
            buttonText="Add Employee"
            onButtonClick={() => setIsOpenModal(true)}
          />
        </CompanyEmpty>
      )}
      {isOpenModal && (
        <EmployeesModal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </Box>
  );
};

export default CompanyEmployees;
