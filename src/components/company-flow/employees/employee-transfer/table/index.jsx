"use client";
import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";
import Image from "next/image";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GenericModal from "@/components/applicants/GenericModel";
import ActionMenu from "@/components/shared-components/ActionMenu";
import { transferData } from "@/utils/company-flow/asset-clarance-data";
import CustomTableWrapper from "@/components/company-flow/asset-clearance/CustomTableWrapper";
import AdvDetailModal from "../../advance-salary/view-detail";
import CustomAvatar from "@/components/shared-components/CustomAvatar";
import ViewDetailModal from "../view-detail/ViewDetailModal";

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

const actionMenu = [{ label: "View Details" }];

const headerMenuItems = [
  { label: "Edit", action: "edit" },
  { label: "Delete", action: "delete" },
];

const TransferTable = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [filters, setFilters] = useState(TableFiltersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(10);
  const [headerSearchValue, setHeaderSearchValue] = useState("");
  const rowsPerPage = 7;
  const [showPopup, setShowPopup] = useState(false);

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

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  //   console.log("cl");
  // };

  const handleCloseModal = () => {
    const onClose = () => {
      setShowPopup(false);
      setIsModalOpen(false);
    };

    // Call the onClose function
    onClose();
  };

  // const onClose = () => {
  //   setShowPopup(false);
  // };

  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  const handleMenuClick = (menuItem) => {
    console.log("Menu clicked:", menuItem.label);
    router.push(menuItem.route);
    if (menuItem.label === "View Details") {
      setShowPopup(true); // Show popup
    }
  };

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
    // Add your filter logic here, such as opening a dropdown or modal
  };

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
      field: "employmentType",
      headerName: "Employee Type",
      align: "left",
      render: (row) => (
        <Box
          sx={{
            bgcolor: "#2F2B3D14",
            p: "2px 10px",
            borderRadius: "4px",
            width: "fit-content",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#2F2B3DE5",
            }}
          >
            {row.employmentType}
          </Typography>
        </Box>
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
      field: "platformName",
      headerName: "Platform Name",
      align: "left",
      render: (row) => (
        <CustomAvatar fullName={row.platformName} image={row.image1} />
      ),
    },

    {
      field: "action",
      headerName: "ACTION",
      align: "left",
      render: (row) => (
        // <ActionMenu
        //   menuItems={actionMenu}
        //   onMenuItemClick={(item) => router.push(item.route)}
        // />
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
    <>
      {/* <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb isBtnShow={true} icon={<AddOutlinedIcon />} btnName="Allocate Asset" onClick={handleOpenModal} />
      </Box>
      <Divider sx={{ mt: 2 }} /> */}

      <Box
        component="div"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        // height="90vh"
      >
        <Box
          sx={{
            width: "full",
            alignSelf: "flex-start",
            marginLeft: 1.6,
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "22px",
          }}
        >
          Transfer of Platform (Acquiring)
        </Box>
        {/* <GenericModal
          open={isModalOpen}
          onClose={handleCloseModal}
          title="Applicants Modal"
          height="80vh"
          width="100%"
        > */}
        <CustomTableWrapper
          // handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          filters={filters}
          column={column}
          handleFilterClick={handleFilterClick}
          handleMenuClick={handleMenuClick}
          handleRowSelect={handleRowSelect}
          pathname={pathname}
          tableData={transferData}
          // Header export Row props
          totalEntries={totalEntries}
          setTotalEntries={handleTotalEntriesChange}
          isBtnAdd={false}
          isExportBtn={false}
          isActionMenu={false}
          showSearch={true}
          menuItems={headerMenuItems}
          onSearchChange={onSearchChange}
          // btnText="Add New Item"
          filterTitle="Selected Employees"
        />
        {/* </GenericModal> */}
        {/* <Image src="/company/asset-clearence/bike-asset-clearence.svg" alt="bike" height="313" width="479" /> */}
        {showPopup && <ViewDetailModal onClose={() => setShowPopup(false)} />}
      </Box>
    </>
  );
};

export default TransferTable;
