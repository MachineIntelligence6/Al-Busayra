"use client"
import React from 'react'
import DynamicBreadcrumb from '@/components/shared-components/BreadCrumb'
import { Box, Divider } from '@mui/material'
import InventoryViewDetails from '@/components/inventory/inventory-list/InventoryViewDetails'

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
