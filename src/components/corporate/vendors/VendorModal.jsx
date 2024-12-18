"use Client"
import React, { createElement } from 'react'
import VendorModalWrapper from "@/components/Shared-components/modals/VendorModalWrapper";
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import ImageUpload from '@/components/applicants/ImageUpload';
import CustomTextField from '@/components/Shared-components/CustomTextField';
import CustomSelect from "@/components/Shared-components/CustomSelect";
import PhoneNumberTextField from '@/components/Shared-components/NumberTextField';
import UploadInputField from '@/components/Shared-components/UploadInputField';
import CaptionText from '@/components/Shared-components/CaptionText';

const fields = [
    {
        label: "Vendor Name",
        name: "venrdor_name",
        required: true,
        placeholder: "Abid Ali",
        component: CustomTextField,
    },
    {
        label: "Vendor Type",
        name: "vendor_type",
        required: true,
        options: [
            { value: "vendor_type_1", label: "vendor Type 1" },
            { value: "vendor_type_2", label: "vendor Type 2" },
            { value: "vendor_type_3", label: "vendor Type 3" },
        ],
    },
    {
        label: "Email Address",
        name: "email_address",
        required: true,
        placeholder: "abidali@gmail.com",
        component: CustomTextField,
    },
    {
        label: "Phone",
        name: "phone_number",
        required: true,
        placeholder: "123 456 7890",
        component: PhoneNumberTextField,
    },
    {
        label: "Country",
        name: "country",
        placeholder: "UAE",
        required: true,
        options: [
            { value: "pakistan", label: "Pakistan" },
            { value: "dubia", label: "Dubia" },
            { value: "india", label: "india" },
        ],
    },
    {
        label: "City",
        name: "city",
        required: true,
        placeholder: "Dubia",
        options: [
            { value: "islamabad", label: "Islamabad" },
            { value: "rawalpindi", label: "RawalPindi" },
            { value: "peshawar", label: "Peshawar" },
            { value: "swat", label: "Swat" },
        ],
    },
    {
        label: "Address",
        name: "address",
        required: true,
        placeholder: "street 08, Al Jamal Resident, UAE",
        component: CustomTextField,
    },
    {
        label: "Tax Registered",
        name: "tax_registered",
        placeholder: 'Yes/No',
        required: true,
        options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },

        ],
    },
    {
        label: "TRN No",
        name: "trn_no",
        required: true,
        placeholder: "2143243",
        component: CustomTextField,
    },
    {
        label: "POC Name",
        name: "poc_name",
        required: true,
        placeholder: "Abdul Raheem",
        component: CustomTextField,
    },
    {
        label: "POC Phone Number",
        name: "poc_phone_number",
        required: true,
        placeholder: "123 456 7890",
        component: PhoneNumberTextField,
    },

    {
        label: "Status",
        name: "status",
        placeholder: 'Active/Non active',
        required: true,
        options: [
            { value: "active", label: "Active" },
            { value: "non_active", label: "Non active" },

        ],
    },
    {
        label: "Vendor Agreement",
        name: "vendor_agreement",
        required: true,
        placeholder: "PDF Scanned",
        component: UploadInputField,
    },
];


const renderLabel = (label, required = false) => (
    <Typography variant="subtitle1" sx={{ fontSize: 14 }} component="p">
        {label}
        {required && <Typography component="span" color="error"> *</Typography>}
    </Typography>
);

const VendorModal = (props) => {
    const { isOpenModal, onClose, form } = props;
    // const { setValue } = useFormContext()
    return (
        <VendorModalWrapper
            open={isOpenModal}
            onClose={onClose}
            title="Vendor Information"
        >
            <Box component="div">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Controller
                        name="profileImage"
                        control={form.control}
                        render={({ field, fieldState: { error } }) => (
                            <ImageUpload
                                uploadedImage={field.value}
                                onFileChange={(file) => console.log("file", file)}
                                error={error?.message || null}
                            />
                        )}
                    />
                </Box>


                {fields.map(({ label, name, required, placeholder, options, component = CustomSelect }, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                        <Box sx={{ flex: "0 0 40%", textAlign: "left", paddingRight: "1rem" }}>
                            <CaptionText text={label} required />
                        </Box>
                        <Box sx={{ flex: "1", width: "80%" }}>
                            <Controller
                                name={name}
                                control={form.control}
                                defaultValue=""
                                render={({ field, fieldState: { error } }) =>
                                    createElement(component, {
                                        value: field.value,
                                        onChange: field.onChange,
                                        placeholder,
                                        options,
                                        error,

                                    })
                                }
                            />
                        </Box>
                    </Box>
                ))}

            </Box>
        </VendorModalWrapper>
    )
}

export default VendorModal
