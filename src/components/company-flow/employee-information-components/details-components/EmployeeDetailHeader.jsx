"use client";
import React from "react";
import {
    Box,
    Card,
    Typography,
    Avatar,
    IconButton,
    Button,
} from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const EmployeeDetailHeader = (props) => {
    const { profileImage, fullName, description, sx } = props;

    return (
        <Box>
            <Card
                sx={{
                    ...sx,
                    marginBottom: 2,
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        height: 150,
                        background:
                            "url(/icons/banner1.svg) lightgray 50% / cover no-repeat",
                    }}
                ></Box>

                <Box sx={{ px: 3, pb: 2, mt: -5 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", gap: 2, alignItems: "baseline" }}>
                            <Box sx={{ position: "relative" }}>
                                <Avatar
                                    src={profileImage}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        // border: "4px solid white",
                                        borderRadius: "10px",
                                    }}
                                />
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: 15,
                                        right: -10,
                                        backgroundColor: "white",
                                        "&:hover": { backgroundColor: "white" },
                                    }}
                                    size="small"
                                >
                                    <CameraAltOutlinedIcon fontSize="small" />
                                </IconButton>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyItems: "center",
                                    alignSelf: "center",
                                    marginTop: 5,
                                }}
                            >
                                <Typography variant="h5">{fullName}</Typography>
                                <Typography sx={{ color: "#2F2B3D99" }}>
                                    {description}
                                </Typography>
                            </Box>

                        </Box>
                        <Box sx={{ alignSelf: "end" }}>
                            <h1>hello</h1>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default EmployeeDetailHeader;
