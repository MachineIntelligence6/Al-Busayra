import { Box, Dialog, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material'
import { X } from 'lucide-react'
import React from 'react'

const TableModal = (props) => {
    const { open, onClose, title = "Employees Modal" } = props;
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
            <DialogTitle
                id="responsive-dialog-title"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {title}
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
            </DialogTitle>
            <DialogContent>
                <Box
                    component="div"
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    width={700}
                    height={600}
                >
                    <h1>hello</h1>
                </Box>
            </DialogContent>
        </Dialog >
    )
}

export default TableModal
