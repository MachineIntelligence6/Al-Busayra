import CampaignsWrapper from "@/components/Campaigns";
import TableExportRow from "@/components/Shared-components/Table-components/TableExportRow";
import TableFilters from "@/components/Shared-components/Table-components/TableFilters";
import { Avatar, Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { companyEmployeesTableData } from "./data";
import CustomTable from "@/components/Shared-components/Table-components/CustomTable";
import TablePagination from "@/components/Shared-components/Table-components/TablePagination";
import Link from "next/link";
import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import CurrencyType from "@/components/Shared-components/CurrencyType";
import ActionMenu from "@/components/Shared-components/ActionMenu";
import { useRouter } from "next/navigation";

const filters = [
  { id: 1, filterName: "ID", placeholder: "3421" },
  {
    id: 3,
    filterName: "Platform",
    placeholder: "Rider/any other",
    options: [
      { id: 1, label: "Rider", value: "rider" },
      { id: 2, label: "Option-2", value: "option-2" },
      { id: 3, label: "Option-3", value: "option-3" },
    ],
  },
  { id: 1, filterName: "Serach By Name", placeholder: "e.g john" },
  {
    id: 4,
    filterName: "City",
    placeholder: "Islamabad",
    options: [
      { id: 1, label: "Islamabad", value: "islamabad" },
      { id: 2, label: "Rawalpindi", value: "rawalpindi" },
      { id: 3, label: "Peshawar", value: "peshawar" },
    ],
  },
];

const CompanyEmpTableWrapper = () => {
  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };
  const router = useRouter();
  const handleMenuClick = (value) => {
    // if (value.action === "add-contract") router.push("corporate/add-contract");
    if (value.action === "view") router.push("employees/view-employee");
    console.log("clicked menu", value);
  };

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
  };

  const MenuItems = useMemo(
    () => [
      { label: "View Details", action: "view" },
      { label: "Edit Details", action: "edit" },
    ],
    []
  );
  const fullColumns = useMemo(() => {
    return [
      {
        field: "id",
        headerName: "ID",
        align: "left",
        render: (row) => (
          <Link
            href="#"
            style={{ color: "#20A4D5E5", textDecoration: "underline" }}
          >
            {row.id}
          </Link>
        ),
      },
      {
        field: "name",
        headerName: "full name as per emirates Id",
        align: "left",
        render: (row) => (
          <CustomAvatar
            fullName={row.name}
            image={row.image}
            email="abce@gmail.com"
          />
        ),
      },
      {
        field: "name",
        headerName: "Resident",
        align: "left",
        render: (row) => (
          <Typography
            sx={{
              border: "1px solid #104774",
              px: 1,
              py: 1,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            {row.resident}
          </Typography>
        ),
      },
      { field: "drivingLicense", headerName: "Driving License", align: "left" },
      { field: "passportNumber", headerName: "Passport Number", align: "left" },
      {
        field: "personalMobileNumber",
        headerName: "Personal Mobile (UAE)",
        align: "left",
      },
      {
        field: "name",
        headerName: "Rider Acquiring Vendor",
        align: "left",
        render: (row) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src={row.vendor_image} />
            <Typography>{row.rider_acquiring_vendor}</Typography>
          </Box>
        ),
      },
      {
        field: "name",
        headerName: "Rider Acquiring Vendor",
        align: "left",
        render: (row) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src={row.rider_platform_image} />
            <Typography>{row.rider_platform}</Typography>
          </Box>
        ),
      },
      { field: "city", headerName: "City", align: "left" },
      { field: "visaStatus", headerName: "Visa Status", align: "left" },
      { field: "visaStatus", headerName: "Visa Status", align: "left" },
      { field: "contract", headerName: "Contract", align: "left" },
      { field: "salaryType", headerName: "Salary Type", align: "left" },
      {
        field: "fixedSalaryAmount",
        headerName: "Fixed Salary Amount",
        align: "left",
        render: (row) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography>{row.fixedSalaryAmount}</Typography>
            <CurrencyType />
          </Box>
        ),
      },
      {
        field: "actualJoiningDate",
        headerName: "Actual joining date",
        align: "left",
      },
      { field: "c3_card", headerName: "C3 Card", align: "left" },
      {
        field: "c3_card_date",
        headerName: "C3 Card Applied Date",
        align: "left",
      },

      { field: "status", headerName: "Status", align: "left" },

      {
        field: "employeeType",
        headerName: "Employee Type",
        align: "left",
        render: (row) => (
          <Typography
            sx={{
              px: 1.5,
              borderRadius: 1,
              bgcolor: "#2F2B3D14",
              width: "fit-content",
            }}
          >
            {row.employeeType}
          </Typography>
        ),
      },

      { field: "bike", headerName: "Bike", align: "left" },
      { field: "sim", headerName: "SIM", align: "left" },

      {
        field: "action",
        headerName: "Action",
        align: "left",
        render: (row) => (
          <ActionMenu menuItems={MenuItems} onMenuItemClick={handleMenuClick} />
        ),
      },
    ];
  }, []);

  return (
    <Box sx={{ bgcolor: "white", mx: 2 }}>
      <TableFilters bottomBorder={false} filters={filters} />
      <TableExportRow isBtnAdd={false} />
      <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={fullColumns}
          data={companyEmployeesTableData}
          onRowSelect={handleRowSelect}
          handleFilterClick={handleFilterClick}
          isSelectedOption={false}
        />
        <TablePagination />
      </Box>
    </Box>
  );
};

export default CompanyEmpTableWrapper;
