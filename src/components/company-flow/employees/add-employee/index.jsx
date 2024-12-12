"use client"
import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb'
import { addEmployeeFormTabs } from '@/utils/hard-data/inventoryFormTab'
import { Box, Divider, } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React, { useState } from 'react'
import AddEmployeeForm from './AddEmployeeForm'
import GenericModal from '@/components/applicants/GenericModel'
import EmptyScreenView from '@/components/Shared-components/EmptyScreenView'

const AddEmployee = () => {

    const [formtabs, setFormTabs] = useState(addEmployeeFormTabs);
    const [selectedTab, setSelectedTab] = useState(addEmployeeFormTabs[0])
    const [isSuccess, setIsSuccess] = useState(false);
    // const handleProductChange = (event) => {
    //     setSelectedProduct(event.target.value);
    // };

    const handleActiveFormTab = (activeTab) => {
        if (typeof activeTab === "object") {
            setSelectedTab(activeTab)
            setFormTabs(prev => {
                return prev.map(item => {
                    if (item.id === activeTab.id) {
                        return { ...item, isActive: true }
                    } else {
                        return { ...item, isActive: false }
                    }
                })
            })
        } else {
            alert("This Form is the last form")
        }
    }

    return (
        <Box>
            <Box sx={{ px: 2, display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box component="div" sx={{ flexGrow: 1, p: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={3}>
                        <Box sx={{ width: "100%", height: "87vh", bgcolor: "#104774", borderRadius: 6 }}></Box>
                    </Grid>
                    <Grid size={9}>
                        <Box sx={{ width: "100%", pb: 2, boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px", borderRadius: 6, px: 2, bgcolor: "white" }}>
                            <AddEmployeeForm formtabs={formtabs} selectedTab={selectedTab} onClickTab={handleActiveFormTab} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {isSuccess && <GenericModal>
                <EmptyScreenView
                    image="/company/employee-add-success.png"
                    title="Employee Added Successfully"
                    description="ID: AB00001"
                />

            </GenericModal>}
        </Box>
    )
}

export default AddEmployee
