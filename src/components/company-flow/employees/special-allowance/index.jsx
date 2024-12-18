"use client";
import React, { useEffect, useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import { Box } from "@mui/material";
import CompanyHeader from "@/components/Shared-components/CompanyHeader";
import DescriptiveText from "@/components/Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyTableModal from "@/components/Shared-components/modals/CompanyTableModal";
import CompanyEmpty from "../../CompanyEmpty";
import SpecialAllowanceModalTable from "./table/SpecialAllowanceModalTable";
import SpecialAllowanceTable from "./table";

const SpecialAllowance = ({ params }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {
    let isShowTable = Boolean(params?.table === "true" ? true : false);
    setShowTable(isShowTable);
  }, []);

  return (
    <>
      {showTable ? (
        <Box>
          <CompanyHeader>
            <DescriptiveText
              text={"Special Allowance"}
              fontSize={18}
              fontWeight={500}
              color={custom.dreadcrumbText}
            />
          </CompanyHeader>
          <Box sx={{ p: 2 }}>
            <SpecialAllowanceTable />
          </Box>
        </Box>
      ) : (
        <CompanyEmpty heading="Special Allowance">
          <EmptyScreenView
            image="/company/allownce.svg"
            altText="special-allownce"
            title="No Special Allowance Request"
            description="Please click the button below to add special allowance request."
            buttonText="loan Request"
            onButtonClick={() => setModalOpen(true)}
          />
        </CompanyEmpty>
      )}
      {modalOpen && (
        <CompanyTableModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <SpecialAllowanceModalTable />
        </CompanyTableModal>
      )}
    </>
  );
};

export default SpecialAllowance;
