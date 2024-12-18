"use client";
import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import CompanyEmpty from "../CompanyEmpty";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CompanyTableModal from "@/components/Shared-components/modals/CompanyTableModal";
import { Plus } from "lucide-react";
import AdvanceSalaryRequestTable from "../employees/advance-salary/table/AdvanceSalaryTable";
import EmployeesModal from "../employees/EmployeesModal";

const FoodPermitDeduction = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [showTable, setShowTable] = useState(false);
    return (
        <>
            {showTable ? null : <CompanyEmpty heading="Food Permit Deduction" >
                <EmptyScreenView
                    image="/company/icons/food-permit-deduction.svg"
                    buttonText="Food Permit Deduction"
                    icon={null}
                    onButtonClick={() => setModalOpen(true)}
                />
            </CompanyEmpty >}

            {modalOpen && <CompanyTableModal open={modalOpen} onClose={() => setModalOpen(false)}>
                <h1>Hello</h1>
            </CompanyTableModal>}
        </>
    );
};

export default FoodPermitDeduction;
