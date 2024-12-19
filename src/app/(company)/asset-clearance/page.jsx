"use client"
import { Box, Divider, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import Image from "next/image";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GenericModal from "@/components/applicants/GenericModel";
import ActionMenu from "@/components/Shared-components/ActionMenu";
import { assetClarenceData } from "@/utils/company-flow/asset-clarance-data";
import CustomTableWrapper from "@/components/company-flow/asset-clearance/CustomTableWrapper";
import { custom } from "@/app/theme";
import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import { useAssetClearance } from "@/hooks/useAssetClearance";
import { actionMenu, headerMenuItems } from "@/app/constants/assetClearance";
import { StatusIndicator } from "@/components/applicants/StatusIndicator";
import { useEffect, useState } from "react";

const Page = () => {
  const [isTable, setIsTable] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsTable(params.get("istable") === "true");
  }, []);

  const {
    modalFilterData,
    filters,
    isModalOpen,
    currentPage,
    totalEntries,
    handleOpenModal,
    handleCloseModal,
    handleRowSelect,
    handleMenuClick,
    handleFilterClick,
    onSearchChange,
    handleTotalEntriesChange,
    setCurrentPage,
  } = useAssetClearance();

  const column = [
    {
      field: "id",
      headerName: "ID",
      group: "shared",
      align: "left",
      render: (row) => (
        <Typography
          variant="body2"
          sx={{
            borderBottom: "1px solid #20A4D5E5",
            color: "#20A4D5E5",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          {row.id}
        </Typography>
      ),
    },
    {
      field: "fullName",
      headerName: "FULL NAME AS PER EMIRATES ID",
      group: "shared",
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
      field: "resident",
      headerName: "RESIDENT",
      group: "shared",
      align: "left",
      render: (row) => (
        <Typography
          variant="caption"
          sx={{
            backgroundColor: "transparent",
            border: `1px solid ${custom.deepBlue}`,
            padding: "7px 10px",
            borderRadius: "6px",
            color: custom.deepBlue,
          }}
        >
          {row.resident}
        </Typography>
      ),
    },
    {
      field: "drivingLicense",
      group: "basic",
      headerName: "DRIVING LICENSE",
      align: "left",
    },
    {
      field: "passportNumber",
      group: "basic",
      headerName: "PASSPORT NUMBER",
      align: "left",
    },
    {
      field: "phoneNumber",
      group: "shared",
      headerName: "PHONE NUMBER",
      align: "left",
    },
    {
      field: "bikeNumber",
      group: "details",
      headerName: "BIKE NO.",
      align: "left",
      render: (row) => (
        <Typography
          variant="body2"
          sx={{
            borderBottom: "1px solid #20A4D5E5",
            color: "#20A4D5E5",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          {row.bikeNumber}
        </Typography>
      ),
    },
    {
      field: "simNumber",
      headerName: "SIM NO.",
      group: "details",
      align: "left",
      render: (row) => (
        <Typography
          variant="body2"
          sx={{
            borderBottom: "1px solid #20A4D5E5",
            color: "#20A4D5E5",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          {row.simNumber}
        </Typography>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      group: "details",
      align: "left",
      render: (row) => (
        <StatusIndicator
          status={row.status}
          pathname={pathname}
        />
      ),
    },
    {
      field: "employeeType",
      headerName: "EMPLOYEE TYPE",
      group: "basic",
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
      group: "shared",
      align: "left",
      render: (row) => (
        <ActionMenu
          menuItems={actionMenu}
          onMenuItemClick={(item) => router.push(item.route)}
        />
      ),
    },
  ];

  const getColumnsByGroup = (group) => {
    return column.filter((col) => col.group === "shared" || col.group === group);
  };

  const basicColumns = getColumnsByGroup("basic");
  const detailsColumns = getColumnsByGroup("details");

  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb isBtnShow={true} icon={<AddOutlinedIcon />} btnName="Allocate Asset" onClick={handleOpenModal} />
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box component="div" display="flex" justifyContent="center" flexDirection="column" alignItems="center" height="80vh">
        <GenericModal open={isModalOpen} onClose={handleCloseModal} title="Applicants Modal" height="80vh" width="100%">
          <CustomTableWrapper
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            rowsPerPage={9}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            filters={modalFilterData}
            column={basicColumns}
            handleFilterClick={handleFilterClick}
            handleMenuClick={handleMenuClick}
            handleRowSelect={handleRowSelect}
            pathname={pathname}
            tableData={assetClarenceData}
            totalEntries={totalEntries}
            setTotalEntries={handleTotalEntriesChange}
            isBtnAdd={false}
            isExportBtn={false}
            isActionMenu={false}
            showSearch={true}
            menuItems={headerMenuItems}
            onSearchChange={onSearchChange}
            filterTitle="Selected Employees"
          />
        </GenericModal>
        {!isTable && <Image src="/company/asset-clearence/bike-asset-clearence.svg" alt="bike" height={313} width={479} />}
      </Box>
      {isTable && (
        <Box sx={{ bgcolor: "white", m: 1.5, borderRadius: "25px", boxShadow: "0px 3px 12px 0px rgba(47, 43, 61, 0.14)" }}>
          <CustomTableWrapper
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            rowsPerPage={9}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            filters={filters}
            column={detailsColumns}
            handleFilterClick={handleFilterClick}
            handleMenuClick={handleMenuClick}
            handleRowSelect={handleRowSelect}
            pathname={pathname}
            tableData={assetClarenceData}
            totalEntries={totalEntries}
            setTotalEntries={handleTotalEntriesChange}
            isBtnAdd={false}
            isExportBtn={true}
            isActionMenu={true}
            showSearch={true}
            menuItems={headerMenuItems}
            onSearchChange={onSearchChange}
            filterTitle="Advanced Filter"
            isWdth={true}
            isShow={false}
            isBorderRadius={true}
          />
        </Box>
      )}
    </>
  );
};

export default Page;

