import React, { useMemo, useState } from "react";
import ActionMenu from "@/components/Shared-components/ActionMenu";
import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import CustomTable from "@/components/Shared-components/Table-components/CustomTable";
import TableExportRow from "@/components/Shared-components/Table-components/TableExportRow";
import TableFilters from "@/components/Shared-components/Table-components/TableFilters";
import { data } from "@/utils/campaigns.data";
import { Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { platformListing, vendorListing } from "@/utils/schemas/vendor.data";
import VendorDetailModal from "./VendorDetailModal";

const platformFilters = [
  { id: 1, filterName: "Vendor ID", placeholder: "CA1" },
  { id: 2, filterName: "Vendor Type", placeholder: "4PL" },
  {
    id: 3,
    filterName: "Country",
    placeholder: "UAE",
    options: [
      { id: 1, label: "UAE", value: "uae" },
      { id: 2, label: "Pakistan", value: "pakistan" },
      { id: 3, label: "India", value: "india" },
    ],
  },
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

const VendorTableWrapper = () => {
  const [filters, setFilters] = useState(platformFilters);
  const router = useRouter();

  const pathname = usePathname();

  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  const handleMenuClick = (value) => {
    if (value.action === "add-contract") router.push("corporate/add-contract");
    if (value.action === "view") setShowPopup(true);
    console.log("clicked menu", value);
  };

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
  };

  const MenuItems = useMemo(
    () => [
      { label: "Add Contract", action: "add-contract" },
      { label: "View Details", action: "view" },
      { label: "Edit Details", action: "edit" },
    ],
    []
  );

  const [showPopup, setShowPopup] = React.useState(false);

  const onClose = () => {
    setShowPopup(false);
  };

  const fullColumns = useMemo(
    () => [
      { field: "vendor_id", headerName: "Vendor ID", align: "left" },
      {
        field: "vendor_name",
        headerName: "Vendor Name",
        align: "left",
        render: (row) => (
          <CustomAvatar
            image={row.image}
            email={row.email}
            fullName={row.vendor_name}
          />
        ),
      },
      {
        field: "vendor_type",
        headerName: "Vendor Type",
        align: "left",
      },
      {
        field: "tax_resgister",
        headerName: "Tax Register",
        align: "left",
        render: (row) => (
          <Typography variant="caption">
            {row.tax_register ? "Yes" : "No"}
          </Typography>
        ),
      },
      { field: "country", headerName: "Country", align: "left" },
      { field: "city", headerName: "City", align: "left" },
      {
        field: "status",
        headerName: "STATUS",
        align: "left",
        render: (row) => (
          <Box
            sx={{
              backgroundColor:
                row.status === "active" ? "#28C76F29" : "#FF4C5129",
              color: row.status === "active" ? "#28C76F" : "#FF4C51",
              padding: "4px 8px",
              borderRadius: "4px",
              textTransform: "capitalize",
              width: "fit-content",
              minWidth: 100,
              textAlign: "center",
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

  return (
    <Box sx={{ bgcolor: "white", overflow: "hidden", m: 1.5, borderRadius: 6 }}>
      <TableFilters filters={filters} />
      <TableExportRow isBtnAdd={false} />
      <Box sx={{ height: "100%" }}>
        <CustomTable
          columns={fullColumns}
          data={vendorListing}
          onRowSelect={handleRowSelect}
          handleFilterClick={handleFilterClick}
        />
      </Box>
      {showPopup && <VendorDetailModal onClose={onClose} />}
    </Box>
  );
};

export default VendorTableWrapper;
