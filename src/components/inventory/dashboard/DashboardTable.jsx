"use client";
import React, { useMemo, useState } from "react";
import CustomButton from "@/components/Shared-components/CustomButton";
import ExpandableTable from "@/components/Shared-components/Table-components/ExpandableTable";
import TableExportRow from "@/components/Shared-components/Table-components/TableExportRow";
import TableFilters from "@/components/Shared-components/Table-components/TableFilters";
import { Box, Divider, Typography } from "@mui/material";
import { ChevronDown } from "lucide-react";
import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import ActionMenu from "@/components/Shared-components/ActionMenu";
import { childData, dashboardTableData } from "@/utils/hard-data/inventory-data";
import { useRouter } from "next/navigation";
import DescriptiveText from "@/components/Shared-components/DescriptiveText";
import CustomDropdownButton from "@/components/Shared-components/CustomDropdownButton";

const statusButtons = [
    { label: 'Company Status', value: 'compnay_status' },
    { label: 'Vendor Status', value: 'vendor_status' },

];

const DashboardFilters = [
    { id: 1, filterName: "Bike Plate Number", placeholder: "1211" },
    {
        id: 4,
        filterName: "Bike City",
        placeholder: "Islamabad",
        options: [
            { id: 1, label: "Islamabad", value: "islamabad" },
            { id: 2, label: "Rawalpindi", value: "rawalpindi" },
            { id: 3, label: "Peshawar", value: "peshawar" },
        ],
    },
    {
        id: 3,
        filterName: "Bike Ownership",
        placeholder: "Own/Rent",
        options: [
            { id: 1, label: "Own", value: "own" },
            { id: 2, label: "Rent", value: "rent" },
        ],
    },
    { id: 2, filterName: "Bike Cost", placeholder: "$1000" },
];



const DashboardTable = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [expandedRows, setExpandedRows] = useState({});
    const [selectedStatus, setSelectedStatus] = useState(statusButtons[0]);

    const router = useRouter()


    const handleActionClick = (obj) => {
        console.log(obj)
        if (obj.action === "company_status") router.push("/admin/inventory/company")
    }

    const MenuItems = useMemo(
        () => [
            { label: "Company Status", action: "company_status" },
            { label: "Vendor Status", action: "vendor_status" },
        ],
        []
    );

    const parentColumns = useMemo(() => {
        return [
            {
                field: "companyName",
                headerName: "Company Name",
                render: (row) => {
                    return (
                        <CustomAvatar
                            fullName={row.companyName}
                            email={row.companyEmail}
                            image={row.icon}
                        />
                    );
                },
            },
            {
                field: "totalBikes",
                headerName: "Total Bikes",

            },
            {
                field: "allocatedBikes",
                headerName: "Allocated Bikes",

            },
            {
                field: "inactiveInventory",
                headerName: "In active Bikes",

            },
            {
                field: "availableInventory",
                headerName: "Available Inventory",

            },
            {
                field: "availableInventory",
                headerName: "Actions",
                render: () => (<ActionMenu menuItems={MenuItems} onMenuItemClick={handleActionClick} />)

            },
        ];
    }, []);
    const childColumns = useMemo(() => {
        return [
            {
                field: "vendorName",
                headerName: "Vendor Name",
                render: (row) => {
                    return (
                        <CustomAvatar
                            fullName={row.vendorName}
                            email={row.vendorEmail}
                            image={row.icon}
                        />
                    );
                },
            },
            {
                field: "totalBikes",
                headerName: "Total Bikes",

            },
            {
                field: "allocatedBikes",
                headerName: "Allocated Bikes",

            },
            {
                field: "inactiveInventory",
                headerName: "In active Bikes",

            },
            {
                field: "availableInventory",
                headerName: "Available Inventory",

            },

        ];
    }, [MenuItems, handleActionClick]);

    return (
        <Box
            component="div"
            sx={{
                width: "100%",
                minHeight: "700px",
                boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                my: 4,
                pb: 2,
                borderRadius: 4,
            }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    borderBottom: "2px solid #2F2B3D1F",
                }}
            >
                <DescriptiveText text={selectedStatus?.label} fontSize={18} fontWeight={500} />
                {/* <CustomButton endIcon={<ChevronDown />} sx={{ px: 3 }}>
                    Company Status
                </CustomButton> */}
                <CustomDropdownButton options={statusButtons} selectedValue={selectedStatus} setSelectedValue={setSelectedStatus} />
            </Box>
            <Box component="div" sx={{ p: 2, borderBottom: "1px solid #2F2B3D1F" }}>
                <TableFilters bottomBorder={false} filters={DashboardFilters} />
            </Box>
            <Box component="div" sx={{ px: 2, }}>
                <TableExportRow isBtnAdd={false} />
            </Box>


            <ExpandableTable
                columns={parentColumns}
                data={dashboardTableData}
                nestedColumns={childColumns}
                renderNestedData={(parentId) => childData[parentId]}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                expandedRows={expandedRows}
                setExpandedRows={setExpandedRows}
            />
        </Box>
    );
};

export default DashboardTable;
