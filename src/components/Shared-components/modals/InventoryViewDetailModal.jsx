import React, { useMemo } from 'react'
import { Avatar, Box, Divider, Modal, Typography, useMediaQuery, useTheme } from '@mui/material'
import CustomFileUploadField from '../CustomFIleUploadField';
import CustomDateField from '../CustomDateField';
import CustomTextField from '../CustomTextField';
import CustomButton from '../CustomButton';
import { Check, CircleX, Download, Image, RefreshCcwIcon } from 'lucide-react';
import CustomTable from '../Table-components/CustomTable';
import { FoodPermitTable } from '@/utils/hard-data/inventory-data';
import { uuid } from '@/utils/cmmon';
import { Close } from '@mui/icons-material';



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
        maxWidth: "fit-content",
        maxHeight: '90vh',
        boxShadow: 24,
        borderRadius: 2,
        overflow: 'auto',
        px: 5,
        pb: 2

    };



    const columns = useMemo(() => {
        return [
            { field: "noPlate", headerName: "Bike Platform No", align: "left" },
            { field: "city", headerName: "Bike City", align: "left" },
            {
                field: "ownerShip",
                headerName: "Bike Ownership",
                align: "left",
                render: (row) => (
                    <Box component="figure" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 2 }}>
                        <Avatar sizes="small">{row?.ownerShip?.name[0]}</Avatar>
                        <Typography>{row?.ownerShip?.name}</Typography>
                    </Box>
                ),
            },
            { field: "dateOfIssue", headerName: "Date Of Issue", align: "left" },
            {
                field: "picture", headerName: "Permit picture", align: "left", render: (row) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Image size={22} color='#EB5757' />
                        <Typography>{row.picture}</Typography>
                        <Download size={22} />
                    </Box>
                )
            },
            { field: "cost", headerName: "Permit Cost", align: "left" },
            { field: "installmentPlan", headerName: "Date Of Issue", align: "left" },
            {
                field: "status",
                headerName: "STATUS",
                align: "left",
                render: (row) => (
                    <Box
                        sx={{
                            backgroundColor: row.status === "active" ? "#D9F0FF" : "#FFE5E5",
                            color:
                                row.status === "active"
                                    ? "#007FFF"
                                    : row.status === "expired"
                                        ? "#FF0000"
                                        : "#FF0000",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            textTransform: "capitalize",
                            width: "fit-content",
                            px: 4,
                            textTransform: "capitalize"
                        }}
                    >
                        {row.status}
                    </Box>
                ),
            },

        ]
    }, [])
    return (
        <Modal
            open={open}
            onClose={onClose}

        >
            <Box sx={{ ...modalStyle, bgcolor: "white" }}>
                <Typography
                    variant='h6' sx={{ textTransform: "uppercase", fontWeight: 600, fontSize: 16, py: 4, }}
                >
                    {title}
                </Typography>

                <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>

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
                        <CustomTextField sx={{ flex: 1 }} placeholder="100" endAdornment={<Typography sx={{ bgcolor: "#80839029", py: 0.5, px: 1, fontSize: 14, borderRadius: 1 }}>AED</Typography>} />
                    </Box>
                    <Box component="div" sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center", }}>
                        <CustomButton endIcon={<RefreshCcwIcon size={18} />} variant='outlined'>Update</CustomButton>
                    </Box>
                </Box>
                <Divider sx={{ my: 4 }} />

                <Box component="div" sx={{ width: "100%", minHeight: "200px", }}>
                    <Typography variant='h6' sx={{ textTransform: "uppercase", fontWeight: 600, fontSize: 16, pb: 2 }}>Food Permit History</Typography>

                    <Box sx={{ width: "100%", minHeight: 270, border: "1px solid #2F2B3D1F", overflowY: "auto", borderRadius: 3 }}>
                        <CustomTable isSelectedOption={false} columns={columns} data={FoodPermitTable} handleFilterClick={() => { }} onRowSelect={() => { }} />
                    </Box>
                </Box>

                <Divider sx={{ my: 4 }} />
                <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <CustomButton bgColor='danger' variant='outlined' startIcon={<CircleX size={16} />}>Cancel</CustomButton>
                    <CustomButton endIcon={<Check size={16} />}>Save</CustomButton>
                </Box>

            </Box>
        </Modal>
    )
}

export default InventoryViewDetailModal
