"use client";
import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter
import CustomTable from "@/components/shared-components/Table-components/CustomTable";
import { data } from "@/utils/campaigns.data";
import CustomAvatar from "../shared-components/CustomAvatar";
import ActionMenu from "../shared-components/ActionMenu";
import TableExportRow from "../shared-components/Table-components/TableExportRow";
import TablePagination from "../shared-components/Table-components/TablePagination";
import { StatusIndicator } from "./StatusIndicator";
import TableFilters from "../shared-components/Table-components/TableFilters";

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
    "passportNo",
    "phoneNumber",
    "preferedWorkingCity",
    "referBy",
    "campaignName",
    "remarks",
    "status",
    "action",
  ],
  hold: [
    "date",
    "fullName",
    "residentCountry",
    "residentCity",
    "drivingLicense",
    "passportNo",
    "phoneNumber",
    "preferedWorkingCity",
    "referBy",
    "campaignName",
    "remarks",
    "reasonToHold",
    "status",
    "action",
  ],
  notQualified: [
    "date",
    "fullName",
    "residentCountry",
    "residentCity",
    "drivingLicense",
    "passportNo",
    "phoneNumber",
    "preferedWorkingCity",
    "referBy",
    "campaignName",
    "remarks",
    "reasonToHold",
    "status",
    "action",
  ]
};

const ApplicantsTableWrapper = ({
  handleOpenModal,
  setCurrentPage,
  rowsPerPage,
  currentPage = 9,
  filters
}) => {
  const [totalEntries, setTotalEntries] = useState(10);
  const router = useRouter();
  const pathname = usePathname();
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const [isBtnAdd, setIsBtnAdd] = useState(false);

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

  useEffect(() => {
    if (pathname.includes("/applicants/shortlisted-applicants")) {
      setIsBtnAdd(true);
    }
  }, [pathname]);

  const menuConfigurations = useMemo(
    () => ({
      home: {
        menuItems: [
          { label: "Procced", route: "/admin/applicants/final-review" },
          { label: "View Details", route: "/admin/applicants/1234/view-details" },
          { label: "Not qualified", route: "/admin/applicants/not-qualified" },
        ],
      },
      finalReview: {
        menuItems: [
          { label: "View Details", route: "/admin/applicants/view-details" },
          { label: "Proceed", route: "/admin/applicants/hold" },
          { label: "Hold", route: "/admin/applicants/hold" },
          { label: "Not Qualified", route: "/admin/applicants/not-qualified" },
        ],
      },
      // Add more configurations for other pages as needed
    }),
    []
  );

  const currentMenuConfig = useMemo(() => {
    if (pathname.includes("final-review"))
      return menuConfigurations.finalReview;
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
      {
        field: "residentCountry",
        headerName: "RESIDENT COUNTRY",
        align: "left",
      },
      { field: "residentCity", headerName: "RESIDENT CITY", align: "left" },
      { field: "drivingLicense", headerName: "DRIVING LICENSE", align: "left" },
      { field: "passportNo", headerName: "PASSPORT NUMBER", align: "left" },
      { field: "phoneNumber", headerName: "PHONE NUMBER", align: "left" },
      {
        field: "preferedWorkingCity",
        headerName: "PREFERRED WORKING CITY",
        align: "left",
      },
      { field: "referBy", headerName: "REFER BY", align: "left" },
      { field: "campaignName", headerName: "CAMPAIGN NAME", align: "left" },
      { field: "remarks", headerName: "REMARKS", align: "left" },
      { field: "reasonToHold", headerName: "REASON TO HOLD", align: "left" },
      {
        field: "status",
        headerName: "STATUS",
        align: "left",
        render: (row) => (
          <StatusIndicator
            status={row.status}
            pathname={pathname}
          />
        ),
      },
      {
        field: "action",
        headerName: "ACTION",
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
    } else if (pathname.includes("hold")) {
      key = "hold";
    } else if (pathname.includes("not-qualified")) {
      key = "notQualified";
    }
    return fullColumns.filter((column) =>
      columnConfig[key]?.includes(column.field)
    );
  }, [pathname, fullColumns]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [currentPage, rowsPerPage]);

  return (
    <Box
  sx={{
    bgcolor: "white",
    overflow: "hidden",
    m: 1.5,
    borderRadius: "25px", // Updated to 25px
    boxShadow: "0px 3px 12px 0px rgba(47, 43, 61, 0.14)", // Added shadow
  }}
>
    <TableFilters filters={filters}/>
     {/* {pathname.includes("/admin/applicants/final-review") && <customTableFilter title="Advanced Filter" filters={filters} />} */}
      <TableExportRow
        handleOpenModal={handleOpenModal}
        setTotalEntries={setTotalEntries}
        totalEntries={totalEntries}
        pathname={pathname}
        isBtnAdd={isBtnAdd}
      />
      <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={columns}
          data={paginatedData}
          onRowSelect={handleRowSelect}
          handleFilterClick={handleFilterClick}
          isFiltered={true}
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
