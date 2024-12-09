"use client"
import InventoryViewDetails from '@/components/inventory/inventory-list/InventoryViewDetails'
import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb'
import { Box, Divider } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <Box component="div">
            <Box sx={{ px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box component="div" sx={{ my: 2 }}>
                <InventoryViewDetails />
            </Box>
        </Box>
    )
}

export default page
