import DynamicBreadcrumb from '@/components/shared-components/BreadCrumb'
import CustomButton from '@/components/shared-components/CustomButton'
import { Box, Divider } from '@mui/material'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import InventoryTableWrapper from './InventoryTableWrapper'

const InventoryList = () => {
    return (
        <Box>
            <Box sx={{ px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
                <CustomButton endIcon={<ChevronDown />}>Bike Invertory</CustomButton>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <InventoryTableWrapper />
        </Box>
    )
}

export default InventoryList
