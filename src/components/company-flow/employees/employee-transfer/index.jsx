"use client";
import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CompanyEmpty from "../../CompanyEmpty";
import CustomDropdownButton from "@/components/Shared-components/CustomDropdownButton";
import TransferTableModal from "./table/TransferTableModal";

const statusButtons = [
  {
    label: "Transfer",
  },
  {
    label: "Transfer of Platform (Acquiring)",
    value: "transfer_of_platform_acquiring",
  },
  {
    label: "Transfer of Platform (Providing)",
    value: "transfer_of_platform_providing",
  },
];

const EmployeeTransferEmptyScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(statusButtons[0]);

  const onClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (selectedStatus.value === "transfer_of_platform_acquiring") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [selectedStatus]);

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

        <CustomDropdownButton
          options={statusButtons}
          selectedValue={selectedStatus}
          setSelectedValue={setSelectedStatus}
        />
      </Box>

      <Divider sx={{ mt: 1, mx: 2, mb: 2 }} />

      {false ? (
        ""
      ) : (
        <CompanyEmpty>
          <EmptyScreenView
            image="/company/transfer.svg"
            title="Platform Transfer Request"
            description="Please click the button below to platform transfer request."
            buttonText="Platform transfer Request"
            onButtonClick={() => setShowPopup(true)}
          />
        </CompanyEmpty>
      )}

      {showPopup && <TransferTableModal onClose={onClose} />}
    </Box>
  );
};

export default EmployeeTransferEmptyScreen;
