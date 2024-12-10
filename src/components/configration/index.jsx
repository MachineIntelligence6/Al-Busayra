"use client"
import { Box, Divider, FormControl, MenuItem, Select, Stack, Typography, } from '@mui/material'
import React, { useMemo } from 'react'
import DynamicBreadcrumb from '../Shared-components/BreadCrumb';
import Grid from '@mui/material/Grid2'
import CustomTextField from '../Shared-components/CustomTextField';
import CustomButton from '../Shared-components/CustomButton';
import { Edit, Plus, Trash, Trash2 } from 'lucide-react';
import CustomTable from '../Shared-components/Table-components/CustomTable';
import { configrationTableData } from './data';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TablePagination from '../Shared-components/Table-components/TablePagination';



const Configration = () => {


    const columns = useMemo(() => {
        return [
            { field: "countryCode", headerName: "COUNTRY CODE", align: "left" },
            { field: "countryName", headerName: "COUNTRY NAME", align: "left" },
            { field: "currency", headerName: "CURRENCY", align: "left" },
            { field: "creationDate", headerName: "CREATION DATE", align: "left" },
            {
                field: "status", headerName: "STATUS", align: "left", render: (row) => (
                    <Box
                        sx={{
                            backgroundColor: row.status === "Active" ? "#28C76F29" : "#FFE5E5",
                            color:
                                row.status === "Active"
                                    ? "#28C76F"
                                    : row.status === "Not Qualified"
                                        ? "#28C76F29"
                                        : "#FF0000",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            textTransform: "capitalize",
                            width: "fit-content",
                            px: 4
                        }}
                    >
                        {row.status}
                    </Box>
                )
            },
            {
                field: "", headerName: "Action", align: "left", render: () => {
                    return <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <BorderColorIcon sx={{ fontSize: 18 }} color='#E6E6E8' />
                        <Trash2 size={18} color='#062A47' />
                    </Box>
                }
            },
        ];
    }, [])


    return (
        <Box>
            <Box sx={{ px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />

            <Box sx={{ mt: 2.5 }}>
                <Grid container spacing={2}>
                    <Grid size={3}>
                        <Box sx={{ width: '100%', height: "90vh", bgcolor: "#062A47", borderRadius: 6 }}>
                            <Box sx={{ px: 4, py: 2, border: "1px solid white" }}>
                                <Typography variant='h6' sx={{ fontWeight: 500, fontSize: 24, color: "white" }}>Configuration</Typography>

                            </Box>
                            <Stack sx={{ mx: 2, my: 4, color: 'white', borderLeft: "1px dashed #859c78" }}>
                                <MenuItem disableRipple sx={{ bgcolor: "#59626a", borderRadius: 2 }}>
                                    Country
                                </MenuItem>
                                <MenuItem disableRipple>
                                    City
                                </MenuItem>
                                <MenuItem disableRipple>
                                    Area
                                </MenuItem>
                                <MenuItem disableRipple>
                                    Gender
                                </MenuItem>

                            </Stack>
                        </Box>
                    </Grid>
                    <Grid size={9}>
                        <Box component="div" sx={{ borderRadius: 6, width: '100%', height: "90vh", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                                <FormControl sx={{ m: 1, minWidth: 80 }}>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        autoWidth
                                        sx={{
                                            width: 70,
                                            height: 40,
                                            fontSize: 15,
                                            borderRadius: "6px",
                                        }}
                                    //   label={entries}
                                    >
                                        <MenuItem value={10} defaultChecked>
                                            10
                                        </MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                                </FormControl>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CustomTextField sx={{ width: 300, }} placeholder="Search" />
                                    <CustomButton endIcon={<Plus size={18} />}>Add Country</CustomButton>
                                </Box>
                            </Box>
                            {/* **********(table)******************************************************************************** */}
                            <Box>
                                <CustomTable columns={columns} data={configrationTableData} isSelectedOption={false} />
                                <TablePagination />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default Configration