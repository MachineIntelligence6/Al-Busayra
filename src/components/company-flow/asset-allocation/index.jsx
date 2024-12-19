"use client";

import React, { useEffect, useState } from "react";
import CompanyEmpty from "../CompanyEmpty";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import { Box } from "@mui/material";
import CompanyHeader from "@/components/Shared-components/CompanyHeader";
import DescriptiveText from "@/components/Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import CompanyTableModal from "@/components/Shared-components/modals/CompanyTableModal";
import AllocateAssetTable from "./table";
import { PlusIcon } from "lucide-react";
import AddAssetTable from "./table/AddAssetTable";

const AssetAllocation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showTable, setShowTable] = useState(true);

  // useEffect(() => {
  //   let isShowTable = Boolean(params?.table === "true" ? true : false);
  //   setShowTable(isShowTable);
  // }, []);

  const btnProps = {
    text: "Allocate Asset",
    startIcon: <PlusIcon size={16} />,
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
              text={"Asset Allocation"}
              fontSize={18}
              fontWeight={500}
              color={custom.dreadcrumbText}
            />
          </CompanyHeader>
          <Box sx={{ p: 2 }}>
            <AllocateAssetTable />
          </Box>
        </Box>
      ) : (
        <CompanyEmpty heading="Asset Allocation" btnProps={btnProps}>
          <EmptyScreenView
            image="/company/Bike.svg"
            altText="bike"
            showButton={false}
          />
        </CompanyEmpty>
      )}
      {modalOpen && (
        <CompanyTableModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <AddAssetTable />
        </CompanyTableModal>
      )}
    </>
  );
};

export default AssetAllocation;
