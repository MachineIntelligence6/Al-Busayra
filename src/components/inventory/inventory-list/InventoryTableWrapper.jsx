"use client"
import CustomAvatar from '@/components/Shared-components/CustomAvatar';
import CustomTable from '@/components/Shared-components/Table-components/CustomTable';
import TableExportRow from '@/components/Shared-components/Table-components/TableExportRow';
import TableFilters from '@/components/Shared-components/Table-components/TableFilters';
import { InventoryListData } from '@/utils/hard-data/inventory-data';
import { Box, Typography } from '@mui/material';
import { Download, Image } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'


const inventoryListFilters = [
    { id: 1, filterName: "Bike Plate Number", placeholder: "1211" },

    {
        id: 3,
        filterName: "City",
        placeholder: "Islamabad",
        options: [
            { id: 1, label: "Islamabad", value: "islamabad" },
            { id: 2, label: "Rawalpindi", value: "rawalpindi" },
            { id: 3, label: "Peshawar", value: "peshawar" },
        ],
    },
    {
        id: 4,
        filterName: "Bike Ownership",
        placeholder: "Own/Rent",
        options: [
            { id: 1, label: "Owner", value: "owner" },
            { id: 2, label: "Rent", value: "rent" },
        ],
    },
    {
        id: 5,
        filterName: "Allocated Rider",
        options: [
            { id: 1, label: "Option-1", value: "option-1" },
            { id: 2, label: "Option-2", value: "option-2" },
            { id: 3, label: "Option-3", value: "option-3" },
            { id: 4, label: "Option-4", value: "option-4" },
        ],
    },
];

const InventoryTableWrapper = () => {
    const [filters, setFilters] = useState(inventoryListFilters);
    const router = useRouter()


    const fullColumns = useMemo(() => {
        return [
            { field: "bike_plate_no", headerName: "Bike Plate", align: "left" },
            {
                field: "picture",
                headerName: "Bike Picture",
                align: "left",
                render: (row) => (
                    <Box component="div" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Image size={20} />
                        <Typography variant="caption">{row?.picture || "-"}</Typography>
                        <Download size={20} />
                    </Box>
                ),
            },
            {
                field: "isOwner",
                headerName: "Bike Ownership",
                align: "left",
                render: (row) => {
                    return (
                        <Typography variant="caption">{row?.isOwner ? "Yes" : "No"}</Typography>
                    )
                },
            },
            {
                field: "isInsuranced",
                headerName: "Bike Insuranced",
                align: "left",
                render: (row) => (
                    <Typography variant="caption">
                        {row?.isInsuranced ? "Yes" : "No"}
                    </Typography>
                ),
            },
            { field: "cost", headerName: "Bike Cost", align: "left" },
            {
                field: "status",
                headerName: "Status",
                align: "left",
                render: (row) => (
                    <Typography
                        variant="caption"
                        sx={{
                            py: 0.5,
                            px: 1,
                            borderRadius: 1,
                            color: row?.status ? "#28C76F" : "#FF9F43",
                            bgcolor: row?.status ? "#28C76F29" : "#FF9F4329",
                        }}
                    >
                        {row?.status ? "Allocated" : "N/A"}
                    </Typography>
                ),
            },
            {
                field: "allocated_company",
                headerName: "Allocated Company",
                align: "left",
                render: (row) => (
                    <>
                        {row?.allocated_company ? (
                            <CustomAvatar
                                fullName={row?.allocated_company?.name || ""}
                                email={row?.allocated_company?.email || ""}
                                image={row?.allocated_company?.icon || ""}
                            />
                        ) : (
                            "---"
                        )}
                    </>
                ),
            },
            {
                field: "allocated_rider",
                headerName: "Allocated Rider",
                align: "left",
                render: (row) => (
                    <>
                        {row?.allocated_rider ? (
                            <CustomAvatar
                                fullName={row?.allocated_rider?.name || ""}
                                email={row?.allocated_rider?.email || ""}
                                image={row?.allocated_rider?.icon || ""}
                            />
                        ) : (
                            "---"
                        )}
                    </>
                ),
            },
            // Uncomment and implement if required
            // {
            //     field: "action",
            //     headerName: "Action",
            //     align: "left",
            //     render: (row) => (
            //         <ActionMenu menuItems={MenuItems} onMenuItemClick={handleMenuClick} />
            //     ),
            // },
        ];
    }, [InventoryListData]);





    return (
        <Box sx={{ bgcolor: "white", overflow: "hidden", m: 1.5, borderRadius: 6 }}>
            <TableFilters filters={filters} />
            <TableExportRow isBtnAdd btnText='Add Inventory' handleOpenModal={() => router.push("/inventory/inventory-list/add-inventory")} />
            <Box sx={{ height: "100%" }}>
                <CustomTable
                    columns={fullColumns}
                    data={InventoryListData}
                    onRowSelect={() => { }}
                    handleFilterClick={() => { }}
                />
            </Box>
        </Box>
    )
}

export default InventoryTableWrapper
