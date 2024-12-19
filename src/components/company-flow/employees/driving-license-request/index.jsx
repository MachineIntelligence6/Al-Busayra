"use client";
import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import EmptyScreenView from "@/components/shared-components/EmptyScreenView";
import { Button } from "@/components/ui/button";
import CompanyEmpty from "../../CompanyEmpty";
import TableModal from "./table/TableModal";
import DLTable from "./table";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";
import { useParams } from "next/navigation";
// import EmployeeClearanceTableModal from "./table/EmployeeClearanceTableModal";
// import ClearanceTable from "./table";

const DrivingLicenseRequest = () => {
  const [showPopup, setShowPopup] = useState(false);

  const params = useParams();
  console.log(params)
  const onClose = () => {
    setShowPopup(false);
  };

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
        {/* <CustomButton startIcon={<Plus />}>Request Advance Salary</CustomButton> */}

        {/* <CustomBreadcrumb name="Driving License Request" /> */}
        {false && (
          <Button
            className="bg-[#296291] hover:bg-[#4080b4]"
            onClick={() => setShowPopup(true)}
          >
            Request Advance Salary
            <Plus />
          </Button>
        )}
      </Box>

      <Divider sx={{ mt: 2, mx: 2 }} />

      {true ? (
        <Box sx={{ mt: 2 }}>
          <DLTable />
        </Box>

      ) : (
        <CompanyEmpty>
          <EmptyScreenView
            image="/company/dlRequest.svg"
            title="No Driving License Request"
            description="Please click the button below to add driving license request."
            buttonText="Driving License Request"
            onButtonClick={() => setShowPopup(true)}
          />
        </CompanyEmpty>
      )}

      {showPopup && <TableModal onClose={onClose} />}
    </Box>
  );
};

export default DrivingLicenseRequest;
