"use client";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Box, Divider, Switch, Typography } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRou
import ActionMenu from "../Shared-components/ActionMenu";
import TableExportRow from "../Shared-components/Table-components/TableExportRow";
import CustomTable from "../Shared-components/Table-components/CustomTable";
import TablePagination from "../Shared-components/Table-components/TablePagination";
import { rolesTemplateListData } from "@/utils/templateListData";
import CustomDropdown from "../Shared-components/CustomDropDown";
import { StatusIndicator } from "../applicants/StatusIndicator";
import CustomTextField from "../Shared-components/CustomTextField";
import IOSSwitch from "../ui/switch-button";

const roleFilters = [
    { id: 1, filterName: "Role", placeholder: "Type", options: [
      { id: 19, label: "UAE", value: "uae" },
      { id: 29, label: "Pakistan", value: "pakistan" },
      { id: 39, label: "India", value: "india" },
  ], },
    { id: 2, filterName: "User Type", placeholder: "Please Select", options: [
      { id: 71, label: "UAE", value: "uae" },
      { id: 72, label: "Pakistan", value: "pakistan" },
      { id: 73, label: "India", value: "india" },
  ], },
    {
        id: 3,
        filterName: "Status",
        placeholder: "Please Select",
        options: [
            { id: 61, label: "panding", value: "panding" },
            { id: 62, label: "complete", value: "complete" },
            { id: 63, label: "rejected", value: "rejected" },
        ],
    },
  ];

const RolesTemplateListTableWrapper = ({
  handleOpenModal,
  setCurrentPage,
  rowsPerPage,
  currentPage,
  // selectedValue,
  // onChange,
}) => {
  const [totalEntries, setTotalEntries] = useState(10);
  const router = useRouter();
  const pathname = usePathname();
  const [isBtnAdd, setIsBtnAdd] = useState(false);

  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

//   const handleToggle = () => {
//     setChecked(!checked);
//   };

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
  };

  const menuConfigurations = useMemo(
    () => ({
      home: {
        menuItems: [
          { label: "Procced", route: "/applicants/proceed" },
          { label: "Not qualified", route: "/applicants/not-qualified" },
        ],
      },
      finalReview: {
        menuItems: [
          { label: "View Details", route: "/applicants/view-details" },
          { label: "Proceed", route: "/applicants/hold" },
          { label: "Hold", route: "/applicants/hold" },
          { label: "Not Qualified", route: "/applicants/not-qualified" },
        ],
      },
      // Add more configurations for other pages as needed
    }),
    []
  );

  const currentMenuConfig = useMemo(() => {
    if (pathname.includes("challan/traffic"))
      return menuConfigurations.traffic;
    return menuConfigurations.salik; // Default configuration
  }, [menuConfigurations, pathname]);

  // Define the full columns configuration
  const fullColumns = useMemo(
    () => [ 
      { field: "role", headerName: "ROLE", align: "left",
          render: (row) => (
            <StatusIndicator 
              status={row.role}
              pathname={pathname}
            />
        ),
       },
       { field: "userType", headerName: "USER TYPE", align: "left" },
       { field: "createdDate", headerName: "CREATED DATE", align: "left" },
       {
        field: "status",
        headerName: "STATUS",
        align: "left",
        render: (row) => (
          <IOSSwitch
          //    checked={checked}
          //    onChange={handleToggle}
          color="success" // Green color for active status
          inputProps={{ "aria-label": "Status toggle" }}
        />
        ),
      },
      {
        field: "action",
        headerName: "Action",
        align: "left",
        render: (row) => (
          <ActionMenu
            menuItems={currentMenuConfig?.menuItems}
            onMenuItemClick={(item) => router.push(item.route)}
          />
        ),
      },
    ],
    [currentMenuConfig?.menuItems, pathname, router]
  );

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return rolesTemplateListData?.slice(startIndex, endIndex);
  }, [currentPage, rowsPerPage]);

  return (
    <Box sx={{ bgcolor: "white", overflow: "hidden", m: 1.5, borderRadius: 6 }}>
       <Box
      component="div"
      sx={{  m: 2,}}
    >
      <Typography variant="caption" sx={{ fontSize: 16 }}>
        Advance Filters
      </Typography>
      <Box
  component="div"
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    my: 2,
  }}
>
      {roleFilters?.length
  ? roleFilters?.map((filter) => {
      return (
        <React.Fragment key={filter?.id}>
          {filter?.filterName === "Role" ? (
            // CustomTextField for Role filter
            <Box display="flex" alignItems="start" flexDirection="column" sx={{ width: "100%" }}>
              <div>{filter?.filterName}</div>
              <CustomTextField
                placeholder={filter?.placeholder}
                onChange={(e) => console.log("Role:", e.target.value)}
                // sx={{
                //   width: "100%",
                //   borderRadius: "20px",
                // }}
              />
            </Box>
          ) : filter?.options ? (
            // CustomDropdown for dropdown filters
            <Box sx={{ width: "100%" }}>
              <CustomDropdown
                label={filter?.filterName}
                placeholder={filter?.placeholder}
                options={filter?.options}
                sx={{ width: "100%" }} // Ensure same width
              />
            </Box>
          ) : (
            // Fallback for filters without options
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <Typography>{filter?.filterName}</Typography>
            </Box>
          )}
        </React.Fragment>
      );
    })
  : null}
</Box>
      <Divider />
    </Box>
      <TableExportRow
        handleOpenModal={handleOpenModal}
        setTotalEntries={setTotalEntries}
        totalEntries={totalEntries}
        pathname={pathname}
        isBtnAdd={isBtnAdd}
      />
      <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={fullColumns}
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

export default RolesTemplateListTableWrapper;
