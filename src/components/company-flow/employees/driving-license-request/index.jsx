"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import { PlusIcon } from "lucide-react";
import CompanyEmpty from "../../CompanyEmpty";
import CompanyHeader from "@/components/Shared-components/CompanyHeader";
import DescriptiveText from "@/components/Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyTableModal from "@/components/Shared-components/modals/CompanyTableModal";
import DLModalTable from "./table/DLModalTable";
import DLTable from "./table";

const DrivingLicenseRequest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const btnProps = {
    text: "Driving License Request",
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
              text={"Driving License Request"}
              fontSize={18}
              fontWeight={500}
              color={custom.dreadcrumbText}
            />
          </CompanyHeader>
          <Box sx={{ p: 2 }}>
            <DLTable />
          </Box>
        </Box>
      ) : (
        <CompanyEmpty heading="Driving License Request" btnProps={btnProps}>
          <EmptyScreenView
            image="/company/dlRequest.svg"
            altText="adv"
            title="No Driving License Request"
            description="Please click the button below to add driving license request."
            buttonText="Driving License Request"
            onButtonClick={() => setModalOpen(true)}
          />
        </CompanyEmpty>
      )}
      {modalOpen && (
        <CompanyTableModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <DLModalTable />
        </CompanyTableModal>
      )}
    </>
  );
};

export default DrivingLicenseRequest;
