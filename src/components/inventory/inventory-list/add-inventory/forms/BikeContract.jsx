import { Box } from '@mui/material'
import CustomDropdown from '@/components/shared-components/CustomDropDown'
import CustomFileUploadField from '@/components/shared-components/CustomFIleUploadField'
import CustomTextField from '@/components/shared-components/CustomTextField'
import { LockKeyhole } from 'lucide-react'

const BikeContract = () => {
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
                <CustomTextField
                    label="Vendor"
                    placeholder="Saleem Akhtar"
                    endAdornment={<LockKeyhole />}
                />
            </Box>
            <Box sx={{ flex: 1 }}>
                <CustomDropdown label="Contract" />
            </Box>
            <Box sxx={{ flex: 1, }}></Box>
        </Box>
    )
}

export default BikeContract