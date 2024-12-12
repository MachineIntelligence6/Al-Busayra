"use client"
import React from 'react'
import { useTheme } from '@emotion/react';
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { CircleX, X } from 'lucide-react';

const EmployeesModal = ({ open, onClose, title = "Employees Modal" }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="responsive-dialog-title"
            maxWidth={'lg'}
            closeAfterTransition

        >

            <DialogTitle id="responsive-dialog-title" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {title} <Box onClick={onClose} component="button" sx={{ borderRadius: "100%", "& :hover": { bgcolor: "#dfdfdf", color: "#104774", p: 0.2, borderRadius: 4 } }}><X size={18} /></Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>

        </Dialog >
    )
}

export default EmployeesModal
