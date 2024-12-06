"use client"

import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb'
import CustomButton from '@/components/Shared-components/CustomButton'
import CustomDropdown from '@/components/Shared-components/CustomDropDown'
import { Box, Divider, Typography } from '@mui/material'
import { FileDown, Upload } from 'lucide-react'
import AddInventorForm from './forms';
import { inventoryFormTab } from '@/utils/hard-data/inventoryFormTab'



const productOptions = [
    { value: "bike", label: "Bike" },
    { value: "car", label: "Car" },
    { value: "scooter", label: "Scooter" },
];
const AddInventory = () => {
    const [selectedProduct, setSelectedProduct] = useState("");
    const [formtabs, setFormTabs] = useState(inventoryFormTab);
    const [selectedTab, setSelectedTab] = useState(inventoryFormTab[0])

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

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
            alert("The Form is not the last form")
        }
    }

    return (
        <Box>
            <Box sx={{ px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 3 }}>
                <Typography variant='h6' component="h6" sx={{ fontSize: 18, fontWeight: 500, }}>Add Detail</Typography>

                <Box component="div" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CustomButton variant='outlined' startIcon={<FileDown size={20} />}>Download Template</CustomButton>
                    <CustomButton startIcon={<Upload size={20} />}>Upload in Bulk</CustomButton>
                    <CustomButton startIcon={<Upload size={20} />}>Upload Picture</CustomButton>
                </Box>
            </Box>

            <Box component="div" sx={{ width: "100%" }}>
                <CustomDropdown
                    label="Select Product"
                    placeholder="Bike"
                    options={productOptions}
                    value={selectedProduct}
                    onChange={handleProductChange}
                    textProps={{ variant: "body2" }}
                    sx={{ height: 36 }}


                />
            </Box>
            <AddInventorForm formtabs={formtabs} selectedTab={selectedTab} onClickTab={handleActiveFormTab} />
        </Box >
    )
}

export default AddInventory
