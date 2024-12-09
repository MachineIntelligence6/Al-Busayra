"use client";
import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box, Chip, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRou
import ActionMenu from "../Shared-components/ActionMenu";
import TableExportRow from "../Shared-components/Table-components/TableExportRow";
import CustomTable from "../Shared-components/Table-components/CustomTable";
import TablePagination from "../Shared-components/Table-components/TablePagination";
import { challanData } from "@/utils/challans-data";
import CustomDropdown from "../Shared-components/CustomDropDown";
import { Download } from 'lucide-react';
import { FIleIcon } from "@/utils/Icons";
import Image from "next/image";
// import ChallanAttachments from "./Challan-attachment";
import { StatusIndicator } from './../applicants/StatusIndicator';

const challanSalikFilters = [
  { id: 1, filterName: "Invoice Month", placeholder: "Please Select", options: [
    { id: 1, label: "UAE", value: "uae" },
    { id: 2, label: "Pakistan", value: "pakistan" },
    { id: 3, label: "India", value: "india" },
], },
  { id: 2, filterName: "Vendor", placeholder: "Please Select", options: [
    { id: 1, label: "UAE", value: "uae" },
    { id: 2, label: "Pakistan", value: "pakistan" },
    { id: 3, label: "India", value: "india" },
], },
  {
      id: 3,
      filterName: "Vehicle Registration No",
      placeholder: "e.g 3242",
      options: [
          { id: 1, label: "UAE", value: "uae" },
          { id: 2, label: "Pakistan", value: "pakistan" },
          { id: 3, label: "India", value: "india" },
      ],
  },
  {
      id: 4,
      filterName: "Direction",
      placeholder: "please",
      options: [
          { id: 1, label: "Islamabad", value: "islamabad" },
          { id: 2, label: "Rawalpindi", value: "rawalpindi" },
          { id: 3, label: "Peshawar", value: "peshawar" },
      ],
  },
];

const challanTrafficFilters = [
  {
    id: 1,
    filterName: "ID",
    placeholder: "e.g. 3242",
    inputType: "dropdown",
    // inputType: "text", // Indicates a text input field
    options: [
      { id: 1, label: "2332", value: "2332" },
      { id: 2, label: "4343", value: "4343" },
      { id: 3, label: "4545", value: "4545" },
  ],
  },
  {
    id: 2,
    filterName: "Employment Name",
    placeholder: "Please Select",
    inputType: "dropdown", // Indicates a dropdown field
    options: [
      { id: 1, label: "John Doe", value: "john_doe" },
      { id: 2, label: "Jane Smith", value: "jane_smith" },
      { id: 3, label: "Michael Brown", value: "michael_brown" },
    ],
  },
  {
    id: 3,
    filterName: "Bike Plate",
    placeholder: "e.g. XYZ 1234",
    inputType: "dropdown",
    options: [
      { id: 1, label: "XYZ 1234", value: "xyz_1234" },
      { id: 2, label: "ABC 5678", value: "abc_5678" },
      { id: 3, label: "LMN 9101", value: "lmn_9101" },
    ],
  },
  {
    id: 4,
    filterName: "Challan Number",
    placeholder: "e.g. 1001",
    inputType: "dropdown",
    options: [
      { id: 1, label: "1001", value: "1001" },
      { id: 2, label: "1002", value: "1002" },
      { id: 3, label: "1003", value: "1003" },
    ],
  },
];

const columnConfig = {
  salik: [
    "invoiceMonth",
    "vendorName",
    "dateOfSalik",
    "transactionID",
    "registrationNo.",
    "salikAmount",
    "tollGate",
    "direction",
    "action"
  ],
  traffic: [
    "id",
    "bikePlateNo",
    "challanAmount",
    "challanNumber",
    "city",
    "location",
    "reason",
    "dateAndTimeOfTrafficChallan",
    "challanAttachments",
    "remarks",
    "bikeOwner",
    "createdOn",
    "status",
  ],
};

const ChallansTableWrapper = ({
  handleOpenModal,
  setCurrentPage,
  rowsPerPage,
  currentPage,
  // selectedValue,
  // onChange,
}) => {
  const [filters, setFilters] = useState(challanSalikFilters);
  const [totalEntries, setTotalEntries] = useState(10);
  const router = useRouter();
  const pathname = usePathname();
  // const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const [isBtnAdd, setIsBtnAdd] = useState(false);
  const handleRowSelect = (selectedRowIds) => {
    console.log("Selected Row IDs:", selectedRowIds);
  };

  // const handleMenuClick = (value) => {
  //   console.log("clicked menu", value);
  // };

  useEffect(() => {
    if (pathname.includes("/challans/traffic")) {
      setFilters(challanTrafficFilters);
    } else {
      setFilters(challanSalikFilters);
    }
  }, [pathname]);

  const handleFilterClick = (field) => {
    console.log(`Filter clicked for: ${field}`);
    // Add your filter logic here, such as opening a dropdown or modal
  };

  useEffect(() => {
    if (pathname === "/applicants/shortlisted-applicants") {
      setIsBtnAdd(true);
    }
  }, [pathname]);

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
      // Columns from the first image
      { field: "invoiceMonth", headerName: "INVOICE MONTH", align: "left" },
      { field: "vendorName", headerName: "VENDOR NAME", align: "left" },
      { field: "dateOfSalik", headerName: "DATE OF SALIK", align: "left" },
      { field: "transactionId", headerName: "TRANSACTION ID", align: "left" },
      { field: "registrationNo", headerName: "REGISTRATION NO.", align: "left" },
      { field: "salikAmount", headerName: "SALIK AMOUNT", align: "left",
        render: (row) => {
       return (
        <>
      <Typography
          variant="caption"
          sx={{
            padding: "4px 10px",
            borderRadius: "3px",
          }}
        >
           {row.salikAmount.amount}
        </Typography>
          <Typography
          variant="caption"
          sx={{
            backgroundColor: "#80839029", // Light gray background
            padding: "4px 10px",
            borderRadius: "3px",
            color:"secondary-main"
          }}
        >
           {row.salikAmount.currency}
        </Typography>
        </>
        )
             
        },
       },
      { field: "tollGate", headerName: "TOLL GATE", align: "left" },
      { field: "direction", headerName: "DIRECTION", align: "left" },
  
      // Columns from the second image
      { field: "id", headerName: "ID", align: "left" ,
        render: (row) => (
             <Typography
        variant="body2"
        sx={{
          borderBottom: "1px solid #20A4D5E5",
         color:"#20A4D5E5"
        }}
      >
        {row.id}
      </Typography>
      )
      },
      { field: "bikePlateNo", headerName: "BIKE PLATE NO", align: "left" },
      { field: "challanAmount", headerName: "CHALLAN AMOUNT", align: "left",
        render: (row) => {
       return (
        <>
      <Typography
          variant="caption"
          sx={{
            padding: "4px 10px",
            borderRadius: "3px",
          }}
        >
           {row.challanAmount.amount}
        </Typography>
          <Typography
          variant="caption"
          sx={{
            backgroundColor: "#80839029", // Light gray background
            padding: "4px 10px",
            borderRadius: "3px",
            color:"secondary-main"
          }}
        >
           {row.challanAmount.currency}
        </Typography>
        </>
        )
             
        },
       },
      { field: "challanNumber", headerName: "CHALLAN NUMBER", align: "left" },
      { field: "city", headerName: "CITY", align: "left" },
      { field: "location", headerName: "LOCATION", align: "left" },
      { field: "reason", headerName: "REASON", align: "left" },
      { field: "dateTimeTrafficChallan", headerName: "DATE AND TIME OF TRAFFIC CHALLAN", align: "left" },
      { field: "challanAttachments",
         headerName: "CHALLAN ATTACHMENTS",
          align: "left",
          render: (row) => (
            <Box component="div" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FIleIcon/>
                <Typography variant="caption">{row?.name || "Challan"}</Typography>
                <Download size={20} />
            </Box>
        ),
      },
      { field: "remarks", headerName: "REMARKS", align: "left" },
      { field: "bikeOwner", headerName: "BIKE OWNER", align: "left",
        render: (row) => (
          <Box component="div" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Image src="/challans/Avatar.png" width={20} height={20} alt="" />
              <Typography variant="caption">ABDS</Typography>
          </Box>
      )
       },
      { field: "createdOn", headerName: "CREATED ON", align: "left" },
      { field: "status", headerName: "STATUS", align: "left",
          render: (row) => (
            <StatusIndicator 
              status={row.status}
              pathname={pathname}
            />
        ),
       },
  
      // Action column (shared functionality)
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
  
  // Dynamically set columns based on the current path
  const columns = useMemo(() => {
    // Determine the key based on the pathname
    let key = null;
    if (pathname.includes("/challans/traffic")) {
      key = "traffic";
    } else if (pathname.includes("/challans")) {
      key = "salik";
    }
  
    // Ensure key matches an entry in columnConfig
    if (key && columnConfig[key]) {
      return fullColumns.filter((column) =>
        columnConfig[key].includes(column.field)
      );
    }
  
    // Default to an empty array if no match is found
    return [];
  }, [pathname, fullColumns]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return challanData?.slice(startIndex, endIndex);
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
          // flexWrap: "wrap",
          gap:"1rem",
          my: 2,
        }}
      >
        {filters?.length ? filters?.map(filter => {
          return (
            <>
              {filter?.options ? (
                <CustomDropdown key={filter?.id}
                sx={{ flex: 1, placeItems: "start" }}
                label={filter?.filterName}
                placeholder={filter?.placeholder}
                options={filter?.options}
              />) : <Box key={filter?.id} sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>{filter?.filterName}</Typography>
              </Box>}

            </>
          )
        }) : <>
        </>}

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

export default ChallansTableWrapper;
