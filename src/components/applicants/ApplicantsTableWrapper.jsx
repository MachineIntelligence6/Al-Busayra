"use client";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Box,  } from "@mui/material";
import TableFilters from "../Shared-components/Table-components/TableFilters";
import CustomTable from "@/components/Shared-components/Table-components/CustomTable";
import { data } from "@/utils/campaigns.data";
import CustomAvatar from "../Shared-components/CustomAvatar";
import ActionMenu from "../Shared-components/ActionMenu";
import TableExportRow from "../Shared-components/Table-components/TableExportRow";
import TablePagination from "../Shared-components/Table-components/TablePagination";
import { useRouter } from "next/navigation"; // Import useRouter

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
  finalReview: [
    "date",
    "fullName",
    "residentCountry",
    "residentCity",
    "drivingLicense",
    "passportNumber",
    "phoneNumber",
    "preferredWorkingCity",
    "referBy",
    "campaignName",
    "remarks",
    "status",
    "action",
  ],
};

const ApplicantsTableWrapper = ({
  handleOpenModal,
  setCurrentPage,
  rowsPerPage,
  currentPage,
}) => {
  const [totalEntries, setTotalEntries] = useState(10);
  const pathname = usePathname();
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
const router = useRouter();

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


  const menuConfigurations = useMemo(() => ({
    home: {
      menuItems: [
        { label: "Edit Details", route: "/edit" },
        { label: "Change Status", route: "/change-status" },
      ],
    },
    finalReview: {
      menuItems: [
        { label: "View Details", route: "/applicants/view-details" },
        { label: "Proceed", route: "/proceed" },
        { label: "Hold", route: "/applicants/hold" },
        { label: "Not Qualified", route: "/applicants/not-qualified" },
      ],
    },
    // Add more configurations for other pages as needed
  }), []);

  const currentMenuConfig = useMemo(() => {
    if (pathname.includes("final-review")) return menuConfigurations.finalReview;
    return menuConfigurations.home; // Default configuration
  }, [menuConfigurations, pathname]);

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
      { field: "residentCountry", headerName: "RESIDENT COUNTRY", align: "left" },
      { field: "residentCity", headerName: "RESIDENT CITY", align: "left" },
      { field: "drivingLicense", headerName: "DRIVING LICENSE", align: "left" },
      { field: "passportNumber", headerName: "PASSPORT NUMBER", align: "left" },
      { field: "phoneNumber", headerName: "PHONE NUMBER", align: "left" },
      { field: "preferredWorkingCity", headerName: "PREFERRED WORKING CITY", align: "left" },
      { field: "referBy", headerName: "REFER BY", align: "left" },
      { field: "campaignName", headerName: "CAMPAIGN NAME", align: "left" },
      { field: "remarks", headerName: "REMARKS", align: "left" },
      {
        field: "status",
        headerName: "STATUS",
        align: "left",
        render: (row) => (
          <Box
          sx={{
            backgroundColor: pathname.includes("final-review") || row.status === "Pending" ? "#D9F0FF" : "#FFE5E5",
            color: pathname.includes("final-review") || row.status === "Pending" ? "#00BAD1" : "#FF0000",
            padding: "4px 8px",
            borderRadius: "4px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {pathname.includes("final-review") ? "Final Review" : row.status}
        </Box>
        ),
      },
      {
        field: "action",
        headerName: "Action",
        align: "left",
        render: (row) => (
          <ActionMenu
          menuItems={currentMenuConfig.menuItems}
          onMenuItemClick={(item) => router.push(item.route)} 
        />
        ),
      },
    ],
    [currentMenuConfig, pathname, router]
  );

  // Dynamically set columns based on the current path
  const columns = useMemo(() => {
    let key = "campaignList";
    if (pathname.includes("shortlisted-applicants")) {
      key = "shortlistedApplicants";
    } else if (pathname.includes("final-review")) {
      key = "finalReview";
    }
    return fullColumns.filter((column) => columnConfig[key]?.includes(column.field));
  }, [pathname, fullColumns]);
  

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [currentPage, rowsPerPage]);

  return (
    <Box sx={{ bgcolor: "white", overflow: "hidden", m: 1.5, borderRadius: 6 }}>
      <TableFilters />
      <TableExportRow handleOpenModal={handleOpenModal} setTotalEntries={setTotalEntries} totalEntries={totalEntries} pathname={pathname}/>
      <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={columns}
          data={paginatedData}
          onRowSelect={handleRowSelect}
          handleFilterClick={handleFilterClick}
        />
        {/* Pagination Component */}
        <TablePagination
          totalEntries={totalEntries}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Box>
  );
};

export default ApplicantsTableWrapper;
