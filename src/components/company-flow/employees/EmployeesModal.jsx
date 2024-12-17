"use client";
import React from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { CircleX, X } from "lucide-react";
import { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import Image from "next/image";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GenericModal from "@/components/applicants/GenericModel";
import ActionMenu from "@/components/Shared-components/ActionMenu";
import { assetAllocationData, assetClarenceData } from "@/utils/company-flow/asset-clarance-data";
import CustomTableWrapper from "@/components/company-flow/asset-clearance/CustomTableWrapper";
import DetailModal from "./view-detail";
import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import Scrollbars from "react-custom-scrollbars";

const TableFiltersData = [
  {
    id: 2,
    filterName: "ID",
    placeholder: "3212",
    inputType: "text",
  },
  {
    id: 3,
    filterName: "Employment Type",
    placeholder: "Rider/any other",
    inputType: "dropdown",
    options: [
      { id: 12, label: "Rider", value: "rider" },
      { id: 22, label: "Any other", value: "any other" },
    ],
  },
  {
    id: 4,
    filterName: "Employee Name",
    placeholder: "e.g Rashid",
    inputType: "text",
  },
  {
    id: 1,
    filterName: "Resident",
    placeholder: "UAE Resident/Iqama",
    inputType: "dropdown",
    options: [
      { id: 14, label: "UAE Resident", value: "uae resident" },
      { id: 24, label: "Non Resident", value: "non resident" },
    ],
  },
];

const actionMenu = [
  { label: "Add", route: "/employees/add-employee" },
  { label: "View Details" },
];

const EmployeesModal = ({ open, onClose, title = "Employees Modal" }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const pathname = usePathname();
  const router = useRouter();
  const [filters, setFilters] = useState(TableFiltersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(10);
  const [headerSearchValue, setHeaderSearchValue] = useState("");
  const rowsPerPage = 7;

  // Handler for search input change
  const onSearchChange = (value) => {
    console.log("Search Value:", value);
    setHeaderSearchValue(value);
  };

  // Handler for total entries dropdown change
  const handleTotalEntriesChange = (value) => {
    console.log("Total Entries Selected:", value);
    setTotalEntries(value);
  };

  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  const handleMenuClick = (menuItem) => {
    console.log("Menu clicked:", menuItem.label);

    // Handle "View Details" separately
    if (menuItem.label === "View Details") {
      setShowPopup(true); // Show popup
    }

    // Ensure that route is defined before trying to navigate
    if (menuItem.route) {
      router.push(menuItem.route);
    }
  };

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
    // Add your filter logic here, such as opening a dropdown or modal
  };

  const [showPopup, setShowPopup] = useState(false);

  const column = [
    {
      field: "id",
      headerName: "ID",
      align: "left",
      render: (row) => (
        <Typography
          variant="body2"
          sx={{
            borderBottom: "1px solid #20A4D5E5",
            color: "#20A4D5E5",
            cursor: "pointer",
          }}
        >
          {row.id}
        </Typography>
      ),
    },
    {
      field: "fullName",
      headerName: "FULL NAME AS PER EMIRATES ID",
      align: "left",
      render: (row) => (
        <CustomAvatar
          fullName={row.fullName}
          image={row.image}
          email="abce@gmail.com"
        />
      ),
    },
    {
      field: "resident",
      headerName: "RESIDENT",
      align: "left",
      render: (row) => (
        <Typography
          variant="caption"
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #104774",
            padding: "7px 10px",
            borderRadius: "6px",
            color: "#104774",
          }}
        >
          {row.resident}
        </Typography>
      ),
    },
    {
      field: "drivingLicense",
      headerName: "DRIVING LICENSE",
      align: "left",
    },
    {
      field: "passportNumber",
      headerName: "PASSPORT NUMBER",
      align: "left",
    },
    {
      field: "phoneNumber",
      headerName: "PHONE NUMBER",
      align: "left",
    },
    {
      field: "employeeType",
      headerName: "EMPLOYEE TYPE",
      align: "left",
      render: (row) => (
        <Typography
          variant="caption"
          sx={{
            backgroundColor: "#80839029",
            // row.employeeType === "Rider" ? "#80839029" : "#FCE4EC",
            padding: "4px 10px",
            borderRadius: "3px",
            color: "#2F2B3DE5",
          }}
        >
          {row.employeeType}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "ACTION",
      align: "left",
      render: (row) => (
        <ActionMenu
          menuItems={actionMenu}
          onMenuItemClick={(item) => {
            if (item.label === "View Details") {
              setShowPopup(true); // Show popup for "View Details"
            } else if (item.route) {
              router.push(item.route); // Only push route if it's defined
            }
          }}
        />
      ),
    },
  ];

  return (

    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
      maxWidth={""}
      closeAfterTransition
    >
      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}{" "}
        <Box
          onClick={onClose}
          component="button"
          sx={{
            borderRadius: "100%",
            "& :hover": {
              bgcolor: "#dfdfdf",
              color: "#104774",
              p: 0.2,
              borderRadius: 4,
            },
          }}
        >
          <X size={18} />
        </Box>
      </DialogTitle>
      <Scrollbars style={{ height: 700, width: 1200 }}>

        <DialogContent>
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <CustomTableWrapper
              rowsPerPage={rowsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              filters={filters}
              column={column}
              handleFilterClick={handleFilterClick}
              handleMenuClick={handleMenuClick}
              handleRowSelect={handleRowSelect}
              pathname={pathname}
              tableData={assetClarenceData}
              // Header export Row props
              totalEntries={totalEntries}
              setTotalEntries={handleTotalEntriesChange}
              isBtnAdd={false}
              isExportBtn={false}
              isActionMenu={false}
              showSearch={true}
              onSearchChange={onSearchChange}
              // btnText="Add New Item"
              isHeader={false}
            />
          </Box>
        </DialogContent>
      </Scrollbars>

      {showPopup && <DetailModal onClose={onClose} />}
    </Dialog>
  );
};

export default EmployeesModal;
