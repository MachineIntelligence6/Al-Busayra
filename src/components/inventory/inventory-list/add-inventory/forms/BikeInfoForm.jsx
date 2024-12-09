import CustomDateField from '@/components/Shared-components/CustomDateField'
import CustomDropdown from '@/components/Shared-components/CustomDropDown'
import CustomTextField from '@/components/Shared-components/CustomTextField'
import { Box } from '@mui/material'
import React from 'react'

const BikeInfoForm = () => {
    return (
        <Box component="form" sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", gap: 3 }}>
            <CustomDropdown label="Vendor Name" />
            <CustomDateField label="Bike Ourcheased/Acquired Date" />
            <CustomDropdown label="Bike Registration Country" />
        </Box>
    )
}

export default BikeInfoForm
