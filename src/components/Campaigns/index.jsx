"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import TableFilters from "../Shared-components/Table-components/TableFilters";
import CustomTable from "@/components/Shared-components/Table-components/CustomTable";
import { data } from "@/utils/campaigns.data";
import CustomAvatar from "../Shared-components/CustomAvatar";
import ActionMenu from "../Shared-components/ActionMenu";
import TableExportRow from "../Shared-components/Table-components/TableExportRow";

const columnConfig = {
  shortlistedApplicants: [
    "date",
    "fullName",
    "residentCountry",
    "residentCity",
    "drivingLicense",
    "phoneNumber",
    "campaignName",
    "action",
  ],
  campaignList: [
    "date",
    "fullName",
    "residentCountry",
    "residentCity",
    "drivingLicense",
    "phoneNumber",
    "campaignName",
    "remarks",
    "status",
    "action",
  ],
};

const CampaignsWrapper = () => {
  const pathname = usePathname();

  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  const handleMenuClick = (value) => {
    console.log("clicked menu", value);
  };

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
    // Add your filter logic here, such as opening a dropdown or modal
  };

  const MenuItems = useMemo(
    () => [
      { label: "Edit Details", action: "edit" },
      { label: "Change Status", action: "change status" },
    ],
    []
  );

  // Define the full columns configuration
  const fullColumns = useMemo(
    () => [
      { field: "date", headerName: "DATE", align: "left" },
      {
        field: "fullName",
        headerName: "FULL NAME",
        align: "left",
        render: (row) => (
          <CustomAvatar
            image={row.image}
            email={row.email}
            fullName={row.fullName}
          />
        ),
      },
      {
        field: "residentCountry",
        headerName: "RESIDENT COUNTRY",
        align: "left",
      },
      { field: "residentCity", headerName: "RESIDENT CITY", align: "left" },
      { field: "drivingLicense", headerName: "DRIVING LICENSE", align: "left" },
      { field: "phoneNumber", headerName: "PHONE NUMBER", align: "left" },
      { field: "campaignName", headerName: "CAMPAIGN NAME", align: "left" },
      { field: "remarks", headerName: "REMARKS", align: "left" },
      {
        field: "status",
        headerName: "STATUS",
        align: "left",
        render: (row) => (
          <Box
            sx={{
              backgroundColor: row.status === "Pending" ? "#D9F0FF" : "#FFE5E5",
              color: row.status === "Pending" ? "#007FFF" : row.status === "Not Qualified" ? "#FF0000" : "#FF0000",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {row.status}
          </Box>
        ),
      },
      {
        field: "action",
        headerName: "Action",
        align: "left",
        render: (row) => (
          <ActionMenu menuItems={MenuItems} onMenuItemClick={handleMenuClick} />
        ),
      },
    ],
    [MenuItems]
  );

  // Dynamically set columns based on the current path
  const columns = useMemo(() => {
    const key = pathname.includes("shortlisted-applicants")
      ? "shortlistedApplicants"
      : "campaignList";
    return fullColumns.filter((column) =>
      columnConfig[key]?.includes(column.field)
    );
  }, [pathname, fullColumns]);

  return (
    <Box sx={{ bgcolor: "white", overflow: "hidden", m: 1.5, borderRadius: 6 }}>
      <TableFilters />
      <TableExportRow isBtnAdd={false} />
      <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={columns}
          data={data}
          onRowSelect={handleRowSelect}
          handleFilterClick={handleFilterClick}
        />
      </Box>
    </Box>
  );
};

export default CampaignsWrapper;
