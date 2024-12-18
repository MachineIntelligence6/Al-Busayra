import { Box, Dialog, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material'
import { X } from 'lucide-react'
import React from 'react'
import DescriptiveText from '../DescriptiveText';
import { custom } from '@/app/theme';
import Scrollbars from 'react-custom-scrollbars';

const CompanyTableModal = (props) => {
    const { open, onClose, title = "Select Employee", children } = props;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="responsive-dialog-title"
            maxWidth={""}
            closeAfterTransition
        >

            <DialogContent sx={{ p: 0 }}>
                <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                >
                    <Box sx={{
                        display: "flex",
                        justifyContent: title ? "space-between" : "flex-end",
                        alignItems: "center",
                        m: 2
                    }}>
                        <DescriptiveText text={title} fontWeight={500} color={custom.primaryText} />
                        <Box
                            onClick={onClose}
                            component="button"
                            sx={{
                                borderRadius: "100%",
                                "& :hover": {
                                    bgcolor: "#dfdfdf",
                                    color: "#104774",
                                    p: 0.2,
                                    borderRadius: 4,
                                },
                            }}
                        >
                            <X size={18} />
                        </Box>
                    </Box>
                    {children}
                </Box>
            </DialogContent>
        </Dialog >
    )
}

export default CompanyTableModal
