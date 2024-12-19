"use client";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import CompanyEmpty from "../../CompanyEmpty";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { PlusIcon } from "lucide-react";
import CompanyHeader from "@/components/Shared-components/CompanyHeader";
import DescriptiveText from "@/components/Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyTableModal from "@/components/Shared-components/modals/CompanyTableModal";
import EmployeeClearanceTable from "./table/EmployeeClearanceTable";
import ClearanceTable from "./table";

const EmployeeClearanceEmptyScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const btnProps = {
    text: "Clearance Request",
    endIcon: <PlusIcon size={16} />,
    onClick: () => {
      setModalOpen(true);
    },
  };

  return (
    <>
      {showTable ? (
        <Box>
          <CompanyHeader btnProps={btnProps}>
            <DescriptiveText
              text={"Employee Clearance"}
              fontSize={18}
              fontWeight={500}
              color={custom.dreadcrumbText}
            />
          </CompanyHeader>
          <Box sx={{ p: 2 }}>
            <ClearanceTable />
          </Box>
        </Box>
      ) : (
        <CompanyEmpty heading="Employee Clearance">
          <EmptyScreenView
            image="/company/Boxx.svg"
            altText="clearance"
            title="No Employees Clearance Request"
            description="Please click the button below to add employee clearance request."
            buttonText="Clearance Request"
            onButtonClick={() => setModalOpen(true)}
          />
        </CompanyEmpty>
      )}
      {modalOpen && (
        <CompanyTableModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <EmployeeClearanceTable />
        </CompanyTableModal>
      )}
    </>
  );
};

export default EmployeeClearanceEmptyScreen;
