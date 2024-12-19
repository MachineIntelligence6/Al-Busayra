"use client";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import TableFilters from "../shared-components/Table-components/TableFilters";
import CustomTable from "@/components/shared-components/Table-components/CustomTable";
import { data } from "@/utils/campaigns.data";
import CustomAvatar from "../shared-components/CustomAvatar";
import ActionMenu from "../shared-components/ActionMenu";
import TableExportRow from "../shared-components/Table-components/TableExportRow";
import ActionModalCardCampaign from "../shared-components/ActionModalCardCampaign";
import TablePagination from "../shared-components/Table-components/TablePagination";

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
  const [showModal, setShowModal] = useState(false);

  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  const handleMenuClick = (item) => {
    console.log("clicked menu", item);
    if (item?.action === "change_status") setShowModal(true)
  };

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
    // Add your filter logic here, such as opening a dropdown or modal
  };

  const MenuItems = useMemo(
    () => [
      { label: "Edit Details", action: "edit" },
      { label: "Change Status", action: "change_status" },
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
        <TablePagination />
      </Box>
      {showModal && <ActionModalCardCampaign onClose={() => setShowModal(false)} />}
    </Box>
  );
};

export default CampaignsWrapper;
