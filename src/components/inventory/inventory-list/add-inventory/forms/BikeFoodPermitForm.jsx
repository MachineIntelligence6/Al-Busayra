import CustomDateField from '@/components/shared-components/CustomDateField'
import CustomFileUploadField from '@/components/shared-components/CustomFIleUploadField'
import CustomTextField from '@/components/shared-components/CustomTextField'
import { Box } from '@mui/material'
import React from 'react'

const BikeFoodPermitForm = () => {
    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
            }}
        >
            <Box sx={{ flex: 1, }}>
                <CustomFileUploadField
                    label="Bike Food Perrmit Picture"
                    placeholder="Jpg, Pdf, Png"
                />
            </Box>

            <Box sx={{ flex: 1 }}>
                <CustomDateField label="Bike Food Permit Expir Date" />
            </Box>

            <Box sx={{ flex: 1 }}>
                <CustomTextField label="Bike Food Permit Cost" placeholder="1000" />
            </Box>
        </Box>
    )
}

export default BikeFoodPermitForm
