"use client";
import { useState } from "react";
import EmptyScreen from "@/components/shared-components/EmptyScreen";
import { Box, Divider, Typography } from "@mui/material";
import ImageUpload from "@/components/applicants/ImageUpload";
import { Controller, useForm, useFormContext } from "react-hook-form";
import VendorModal from "./VendorModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/utils/schemas/applicants-schema";
import VendorTableWrapper from "./VendorTableWrapper";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";
import CustomButton from "@/components/shared-components/CustomButton";
import { Plus } from "lucide-react";

const Vendors = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const form = useForm({
        resolver: yupResolver(formSchema),
        mode: 'onChange',
    })


    return (
        <>
            <Box sx={{ px: 2, display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
                <CustomButton startIcon={<Plus />} sx={{ px: 4 }} onClick={() => setIsOpenModal(true)}>Add Vendor</CustomButton>
            </Box>
            <Divider sx={{ mt: 2 }} />

            <Box component="section">
                {false ? <EmptyScreen
                    viewObject={{
                        image: "/icons/vendor-empty-screen.svg",
                        altText: "icons",
                        title: "No Vendors Added",
                        description:
                            "Please click the button below to add your new Vendor.",
                        buttonText: "Add Vendor",
                        onButtonClick: () => setIsOpenModal(true),
                    }}
                /> : <VendorTableWrapper />}

                {isOpenModal && (
                    <VendorModal isOpenModal={isOpenModal} onClose={() => setIsOpenModal(false)} form={form} />
                )}
            </Box>
        </>
    );
};

export default Vendors;
