"use client";
import React, { useEffect, useState } from "react";
import CompanyEmpty from "../CompanyEmpty";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import { Box } from "@mui/material";
import CompanyHeader from "@/components/Shared-components/CompanyHeader";
import DescriptiveText from "@/components/Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyTableModal from "@/components/Shared-components/modals/CompanyTableModal";
import PassportAcceptanceTable from "./table/PassportAcceptanceTable";
import PassportTable from "./table";

const PassportAcceptance = ({ params }) => {
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
              text={"Passport Return"}
              fontSize={18}
              fontWeight={500}
              color={custom.dreadcrumbText}
            />
          </CompanyHeader>
          <Box sx={{ p: 2 }}>
            <PassportTable />
          </Box>
        </Box>
      ) : (
        <CompanyEmpty heading="Passport Return">
          <EmptyScreenView
            image="/company/passport1.svg"
            altText="passport-return"
            title="No Passport Acceptance Request"
            description="Please click the button below to add passport acceptance request."
            buttonText="Create Request"
            onButtonClick={() => setModalOpen(true)}
          />
        </CompanyEmpty>
      )}
      {modalOpen && (
        <CompanyTableModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <PassportAcceptanceTable />
        </CompanyTableModal>
      )}
    </>
  );
};

export default PassportAcceptance;
