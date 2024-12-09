import React from 'react'
import { Box, Modal, Typography, useMediaQuery, useTheme } from '@mui/material'
import CustomFileUploadField from '../CustomFIleUploadField';
import CustomDateField from '../CustomDateField';
import CustomTextField from '../CustomTextField';
import CustomButton from '../CustomButton';
import { RefreshCcwIcon } from 'lucide-react';



const InventoryViewDetailModal = (props) => {
    const { title, onClose, open } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '90%' : '80%',
        maxWidth: 1000,
        maxHeight: '90vh',
        boxShadow: 24,
        borderRadius: 2,
        overflow: 'auto',
        px: 5,
        pb: 2

    };
    return (
        <Modal
            open={open}
            onClose={onClose}

        >
            <Box sx={{ ...modalStyle, bgcolor: "white" }}>
                <Typography
                    sx={{ borderBottom: "1px solid #2F2B3D40", my: 2, py: 0.5 }}
                >
                    {title}
                </Typography>

                <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                    <Box component="div" sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ flex: 1 }}>Bike Food Permit Picture</Typography>
                        <Box sx={{ flex: 1 }}><CustomFileUploadField placeholder="Bike Picture" /></Box>
                    </Box>

                    <Box component="div" sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ flex: 1 }}>Bike Food Permit Expiry Date</Typography>
                        <CustomDateField placeholder="12-04-2028" sx={{ flex: 1 }} />
                    </Box>
                    <Box component="div" sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ flex: 1 }}>Bike Food Permit Cost</Typography>
                        <CustomTextField sx={{ flex: 1 }} placeholder="100" endAdornment={<Typography sx={{ bgcolor: "#80839029", py: 0.5, px: 1, fontSize: 14 }}>AED</Typography>} />
                    </Box>
                    <Box component="div" sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center", }}>
                        <CustomButton endIcon={<RefreshCcwIcon size={18} />} variant='outlined'>Update</CustomButton>
                    </Box>
                </Box>

            </Box>
        </Modal>
    )
}

export default InventoryViewDetailModal
