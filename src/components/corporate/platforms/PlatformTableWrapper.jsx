import React, { useMemo, useState } from "react";
import ActionMenu from "@/components/shared-components/ActionMenu";
import CustomAvatar from "@/components/shared-components/CustomAvatar";
import CustomTable from "@/components/shared-components/Table-components/CustomTable";
import TableExportRow from "@/components/shared-components/Table-components/TableExportRow";
import TableFilters from "@/components/shared-components/Table-components/TableFilters";
import { data } from "@/utils/campaigns.data";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { platformListing } from "@/utils/schemas/vendor.data";
import PlatformDetailModal from "./PlatformDetailModal";
import TablePagination from "@/components/shared-components/Table-components/TablePagination";

const platformFilters = [
  { id: 1, filterName: "Platform ID", placeholder: "CA1" },
  { id: 2, filterName: "Platform Type", placeholder: "Bike rent" },
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

const PlatformTableWrapper = () => {
  const [filters, setFilters] = useState(platformFilters);

  const pathname = usePathname();

  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  const [showPopup, setShowPopup] = React.useState(false);

  const onClose = () => {
    setShowPopup(false);
  };

  const handleMenuClick = (value) => {
    if (value.action === "view") setShowPopup(true);
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

  const fullColumns = useMemo(
    () => [
      { field: "platform_ID", headerName: "Platform ID", align: "left" },
      {
        field: "platform_name",
        headerName: "platForm Name",
        align: "left",
        render: (row) => (
          <CustomAvatar
            image={row.image}
            email={row.email}
            fullName={row.platform_name}
          />
        ),
      },
      {
        field: "platform_type",
        headerName: "platform Type",
        align: "left",
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
              backgroundColor: row.status === "active" ? "#D9F0FF" : "#FFE5E5",
              color:
                row.status === "active"
                  ? "#007FFF"
                  : row.status === "Not Qualified"
                  ? "#FF0000"
                  : "#FF0000",
              padding: "4px 8px",
              borderRadius: "4px",
              textTransform: "capitalize",
              width: "fit-content",
              px: 4,
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
          data={platformListing}
          onRowSelect={handleRowSelect}
          handleFilterClick={handleFilterClick}
        />
        {platformListing.length > 10 && <TablePagination />}
      </Box>
      {showPopup && <PlatformDetailModal onClose={onClose} />}
    </Box>
  );
};

export default PlatformTableWrapper;
