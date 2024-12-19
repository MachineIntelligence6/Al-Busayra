import CustomDateField from '@/components/shared-components/CustomDateField'
import CustomFileUploadField from '@/components/shared-components/CustomFIleUploadField'
import { Box } from '@mui/material'
import React from 'react'

const BikeMulkiyaForm = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 3 }}>
            <Box sx={{ flex: 1, }}>
                <CustomFileUploadField
                    label="Bike Picture"
                    placeholder="Jpg, Pdf, Png"
                />
            </Box>
            <Box sx={{ flex: 1 }}>
                <CustomDateField label="Bike Mulikya Expiry" />
            </Box>

        </Box>
    )
}

export default BikeMulkiyaForm
