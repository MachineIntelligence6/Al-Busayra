import InActiveEmployeeTable from '@/components/employees/incomplete-form/Table/InActiveEmployeeTable'
import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb'
import { Box, Divider } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <>
            <Box sx={{ px: 2 }}>
                <DynamicBreadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box>
            <InActiveEmployeeTable />
            </Box>
        </>
    )
}

export default page
