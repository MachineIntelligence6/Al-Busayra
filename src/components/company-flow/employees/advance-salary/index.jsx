"use client";

import { Box } from "@mui/material";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import CompanyEmpty from "../../CompanyEmpty";
import CompanyHeader from "@/components/Shared-components/CompanyHeader";
import DescriptiveText from "@/components/Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyTableModal from "@/components/Shared-components/modals/CompanyTableModal";
import AdvanceSalaryRequestTable from "./table/AdvanceSalaryTable";
import AdvanceSalaryTable from "./table";

const AdvanceSalaryEmptyScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const btnProps = {
    text: "Request Advance Salary",
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
              text={"Advance Salary"}
              fontSize={18}
              fontWeight={500}
              color={custom.dreadcrumbText}
            />
          </CompanyHeader>
          <Box sx={{ p: 2 }}>
            <AdvanceSalaryTable />
          </Box>
        </Box>
      ) : (
        <CompanyEmpty heading="Advance Salary" btnProps={btnProps}>
          <EmptyScreenView
            image="/company/advance-salary.svg"
            altText="adv"
            description="Please click the button below to add advance salary request."
            buttonText="Advance Salary Request"
            onButtonClick={() => setModalOpen(true)}
          />
        </CompanyEmpty>
      )}
      {modalOpen && (
        <CompanyTableModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <AdvanceSalaryRequestTable />
        </CompanyTableModal>
      )}
    </>
  );
};

export default AdvanceSalaryEmptyScreen;
