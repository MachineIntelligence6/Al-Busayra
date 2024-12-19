import CustomDateField from '@/components/shared-components/CustomDateField'
import CustomDropdown from '@/components/shared-components/CustomDropDown'
import { Box } from '@mui/material'
import React from 'react'

const BikeInsuranceForm = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 3 }}>
            <Box sx={{ flex: 1, }}>
                <CustomDropdown
                    label="Bike Insurance"

                />
            </Box>
            <Box sx={{ flex: 1 }}>
                <CustomDateField label="Bike Insurance Start Date" />
            </Box>
            <Box sx={{ flex: 1 }}>
                <CustomDateField label="Bike Insurance End Date" />
            </Box>

        </Box>
    )
}

export default BikeInsuranceForm
