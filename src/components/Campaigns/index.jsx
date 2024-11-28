"use client";
import React, { useMemo } from "react";
import Breadcrumb from "@/components/Shared-components/BreadCrumb";
import ReusableTable from "@/components/Shared-components/Table-components/CustomTable";
import { Box, Divider } from "@mui/material";
import { data } from "@/utils/campaigns.data";
import CustomAvatar from "../Shared-components/CustomAvatar";
import ActionMenu from "../Shared-components/ActionMenu";

const CampaignsWrapper = () => {
    const handleRowSelect = (selectedRowIds) => {
        console.log("Selected Row IDs:", selectedRowIds);
    };

    const handleMenuClick = (value) => {
        console.log("clicked menu", value);
    };

    const MenuItems = useMemo(() => {
        return [
            { label: "Edit Details", action: "edit" },
            { label: "Change Status", action: "change status" },
        ];
    }, []);

    const columns = useMemo(() => {
        return [
            { field: "date", headerName: "DATE", align: "left" },
            {
                field: "fullName",
                headerName: "FULL NAME",
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
                field: "residentCountry",
                headerName: "RESIDENT COUNTRY",
                align: "left",
            },
            { field: "residentCity", headerName: "RESIDENT CITY", align: "left" },
            { field: "drivingLicense", headerName: "DRIVING LICENSE", align: "left" },
            { field: "phoneNumber", headerName: "PHONE NUMBER", align: "left" },
            { field: "campaignName", headerName: "CAMPAIGN NAME", align: "left" },
            { field: "remarks", headerName: "REMARKS", align: "left" },
            {
                field: "status",
                headerName: "STATUS",
                align: "left",
                render: (row) => (
                    <Box
                        sx={{
                            backgroundColor: row.status === "Pending" ? "#D9F0FF" : "#FFE5E5",
                            color: row.status === "Pending" ? "#007FFF" : "#FF0000",
                            padding: "4px 8px",
                            borderRadius: "4px",
                        }}
                    >
                        {row.status}
                    </Box>
                ),
            },
            {
                field: "",
                headerName: "Action",
                align: "left",
                render: (row) => (
                    <ActionMenu menuItems={MenuItems} onMenuItemClick={handleMenuClick} />
                ),
            },
        ];
    }, []);

    return (
        <Box component="div" sx={{ px: 4, }}>
            <Box>
                <ReusableTable
                    columns={columns}
                    data={data}
                    onRowSelect={handleRowSelect}
                />
            </Box>
        </Box>
    );
};

export default CampaignsWrapper;
