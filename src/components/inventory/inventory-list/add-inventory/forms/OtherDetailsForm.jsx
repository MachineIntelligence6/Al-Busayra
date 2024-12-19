import { Box } from '@mui/material'
import CustomDropdown from '@/components/Shared-components/CustomDropDown'
import CustomFileUploadField from '@/components/Shared-components/CustomFIleUploadField'
import PercentageTextField from '@/components/Shared-components/PercentageTextField'

const OtherDetailsForm = () => {
    return (

        <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <CustomDropdown label="Branding" placeholder="Yes/No" options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} />
                <CustomDropdown label="Brand Platform" />
                <CustomDropdown label="Box" />
            </Box>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <CustomDropdown label="Brand Cost" placeholder="Rent of Bike from Rental Company" />
                </Box>
                <Box sx={{ flex: 1, }}>
                    <PercentageTextField
                        label="VAT%"
                        placeholder="12"
                    />
                </Box>
                <Box sx={{ flex: 1 }}></Box>
            </Box>

        </Box>
    )
}

export default OtherDetailsForm
