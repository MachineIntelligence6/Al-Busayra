"use client"
import BasicInfo from '@/components/employees/ViewEmployee/BasicInfo'
import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb'
import CustomButton from '@/components/Shared-components/CustomButton'
import MasonryGrid from '@/components/Shared-components/masonry-grid'
import { inventoryViewDetails } from '@/utils/hard-data/inventory-data'
import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'

const BikeDetails = () => {
    const [profileData, setProfileData] = useState(inventoryViewDetails)

    return (
        <Box>
            <Box sx={{ px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box component="div">
                <MasonryGrid>
                    {profileData.map((details) => {
                        return (
                            <Box key={details?.id} sx={{ width: "100%", m: 2 }}>
                                <BasicInfo profile={details} onEdit={() => { }} />
                            </Box>
                        )
                    })}
                </MasonryGrid>

            </Box>
        </Box>
    )
}

export default BikeDetails
