"use client";
import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import CompanyEmpty from "../CompanyEmpty";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import TableModal from "@/components/Shared-components/modals/TableModal";
import { Plus } from "lucide-react";

const FoodPermitDeduction = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [topBtnValue, setTopBtnValue] = useState({ label: "my button", Value: "my_btn" })
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

            {modalOpen && <TableModal title={null} open={modalOpen} onClose={() => setModalOpen(false)} />}
        </>
    );
};

export default FoodPermitDeduction;
