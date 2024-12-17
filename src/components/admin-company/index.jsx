import React from 'react'
import { custom } from '@/app/theme';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2'
import StateCard from './StateCard';
import CompanyTableWrapper from './CompanyTableWrapper';
import CompanyDetailCard from './CompanyDetailCard';

const AdminCompany = () => {
    return (
        <Box sx={{ mt: 2 }}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid size={3} sx={{ bgcolor: custom.deepBlue, borderRadius: 4 }}>
                    <CompanyDetailCard />
                </Grid>
                <Grid size={9} sx={{}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "100%" }}>
                        <StateCard />
                    </Box>
                    <CompanyTableWrapper />

                </Grid>
            </Grid>
        </Box >
    )
}

export default AdminCompany
