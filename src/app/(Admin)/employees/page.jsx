"use client";
import React, { useMemo } from "react";
import Breadcrumb from "@/components/Shared-components/BreadCrumb";
import ReusableTable from "@/components/Shared-components/Table-components/CustomTable";
import { Box, Divider } from "@mui/material";
import { data } from "@/utils/campaigns.data";
import CustomTable from "@/components/Shared-components/Table-components/CustomTable";
import ActionModalCard from "@/components/Shared-components/ActionModalCard";
import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import ActionMenu from "@/components/Shared-components/ActionMenu";
import TableFilters2 from "@/components/Shared-components/Table-components/TableFilters2";

const Employee = () => {
  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  const [showPopup, setShowPopup] = React.useState(false);

  const onClose = () => {
    setShowPopup(false);
  };

  const handleMenuClick = (value) => {
    console.log("clicked menu", value);
    setShowPopup(true);
  };

  const MenuItems = useMemo(() => {
    return [
      { label: "Edit Details", action: "edit" },
      { label: "Change Status", action: "change status" },
    ];
  }, []);

  const columns = useMemo(() => {
    return [
      { field: "date", headerName: "DATE", align: "left" },
      {
        field: "fullName",
        headerName: "FULL NAME",
        align: "left",
        render: (row) => {
          return (
            <CustomAvatar
              image={row.image}
              email={row.email}
              fullName={row.fullName}
            />
          );
        },
      },
      {
        field: "residentCountry",
        headerName: "RESIDENT COUNTRY",
        align: "left",
      },
      { field: "residentCity", headerName: "RESIDENT CITY", align: "left" },
      {
        field: "drivingLicenseNo",
        headerName: "DRIVING LICENSE",
        align: "left",
      },
      { field: "passportNo", headerName: "Passport Number", align: "left" },
      { field: "phoneNumber", headerName: "PHONE NUMBER", align: "left" },
      {
        field: "preferedWorkingCity",
        headerName: "Preferred Working City",
        align: "left",
      },
      { field: "referBy", headerName: "Refer By", align: "left" },
      { field: "campaignName", headerName: "CAMPAIGN NAME", align: "left" },
      {
        field: "status",
        headerName: "STATUS",
        align: "left",
        render: (row) => (
          <Box
            sx={{
              backgroundColor: row.status === "Pending" ? "#D9F0FF" : "#FFE5E5",
              color: row.status === "Pending" ? "#007FFF" : "#FF0000",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {row.status}
          </Box>
        ),
      },
      {
        field: "",
        headerName: "Action",
        align: "left",
        render: (row) => (
          <ActionMenu menuItems={MenuItems} onMenuItemClick={handleMenuClick} />
        ),
      },
    ];
  }, []);

  return (
    <Box sx={{ bgcolor: "white", overflow: "auto", m: 1.5, borderRadius: 6 }}>
      <TableFilters2 />

      <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={columns}
          data={data}
          onRowSelect={handleRowSelect}
        />
      </Box>
      {showPopup && <ActionModalCard onClose={onClose} />}
    </Box>
  );
};

export default Employee;
