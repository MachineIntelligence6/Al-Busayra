"use client"
import React, { useState } from 'react'
import FormTab from '@/components/inventory/inventory-list/add-inventory/forms/FormTab'
import OtherDetailsForm from '@/components/inventory/inventory-list/add-inventory/forms/OtherDetailsForm'
import DynamicBreadcrumb from '@/components/shared-components/BreadCrumb'
import CustomButton from '@/components/shared-components/CustomButton'
import CustomDropdown from '@/components/shared-components/CustomDropDown'
import { UploadOutlined } from '@mui/icons-material'
import { Box, Divider, Typography } from '@mui/material'
import { Check, CircleX, FileDownIcon, Info } from 'lucide-react'
import { useRouter } from 'next/navigation'



const productOptions = [
    { value: "sim", label: "SIM" },
];

const tab = {
    id: "1",
    text: "Add SIM Details",
    isActive: true,
    getIcon: (isActive) => (
        <>
            {isActive ? (
                <Info
                    color="white"
                    style={{ background: "#104774", padding: 10, borderRadius: 6 }}
                    size={40}
                />
            ) : (
                <Info
                    color="#104774"
                    style={{ background: "#1047741A", padding: 10, borderRadius: 6 }}
                    size={40}
                />
            )}
        </>
    ),
}
const AddInventory = () => {
    const [selectedProduct, setSelectedProduct] = useState("");
    const router = useRouter();


    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };


    return (
        <Box component="div">
            <Box sx={{ px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='caption' sx={{ fontSize: 16, fontWeight: 500 }}>Add Details</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CustomButton variant='outlined' startIcon={<FileDownIcon size={18} />}>Download Template</CustomButton>
                        <CustomButton startIcon={<UploadOutlined />}>Upload In Bulk</CustomButton>
                    </Box>
                </Box>
                <Box component="div" sx={{ width: "100%", my: 2 }}>
                    <CustomDropdown
                        label="Select Product"
                        placeholder="SIM"
                        options={productOptions}
                        value={selectedProduct}
                        onChange={handleProductChange}
                        textProps={{ variant: "body2" }}
                        sx={{ height: 36 }}


                    />
                </Box>
                <Box component="div" sx={{ display: "flex", gap: 2, borderBottom: "1px solid #2F2B3D40", pb: 2, pt: 4 }}>
                    <FormTab tab={tab} />
                </Box>
                <Box sx={{ width: "100%", my: 5 }}>
                    <OtherDetailsForm />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', borderTop: "1px solid #2F2B3D40", pt: 2, pb: 4 }}>
                    <CustomButton variant="outlined" bgColor="danger" startIcon={<CircleX size={20} />} onClick={() => router.push("/admin/inventory")}>Cancel</CustomButton>
                    <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                        <CustomButton endIcon={<Check size={20} />} onClick={() => { }}>Save</CustomButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AddInventory
