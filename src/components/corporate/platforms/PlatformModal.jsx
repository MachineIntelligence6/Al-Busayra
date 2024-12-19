"use Client"
import React, { createElement } from 'react'
import VendorModalWrapper from "@/components/shared-components/modals/VendorModalWrapper";
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import ImageUpload from '@/components/applicants/ImageUpload';
import CustomTextField from '@/components/shared-components/CustomTextField';
import CustomSelect from "@/components/shared-components/CustomSelect";
import PhoneNumberTextField from '@/components/shared-components/NumberTextField';
import UploadInputField from '@/components/shared-components/UploadInputField';
import CaptionText from '@/components/shared-components/CaptionText';

const fields = [
    {
        label: "Plateform ID",
        name: "platform_id",
        required: true,
        placeholder: "533225",
        component: CustomTextField,
    },
    {
        label: "Plateform Name",
        name: "platform_name",
        required: true,
        placeholder: "Careem",
        component: CustomTextField,
    },
    {
        label: "Platform Type",
        name: "platform",
        required: true,
        options: [
            { value: "fixed", label: "Fixed" },
            { value: "commission", label: "Commission" },
        ],
    },
    {
        label: "Email Address",
        name: "email_address",
        required: true,
        placeholder: "careem@gmail.com",
        component: CustomTextField,
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

];




const PlatformModal = (props) => {
    const { isOpenModal, onClose, form } = props;
    // const { setValue } = useFormContext()
    return (
        <VendorModalWrapper
            open={isOpenModal}
            onClose={onClose}
            title="Add Platform"
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

export default PlatformModal
