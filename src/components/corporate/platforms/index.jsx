"use client";
import { useState } from "react";
import EmptyScreen from "@/components/Shared-components/EmptyScreen";
import { Box, Divider, Typography } from "@mui/material";
import ImageUpload from "@/components/applicants/ImageUpload";
import { Controller, useForm, useFormContext } from "react-hook-form";
import PlatformModal from "./PlatformModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/utils/schemas/applicants-schema";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CustomButton from "@/components/Shared-components/CustomButton";
import { Plus } from "lucide-react";
import PlatformTableWrapper from "./PlatformTableWrapper";

const PlatForm = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const form = useForm({
        resolver: yupResolver(formSchema),
        mode: 'onChange',
    })


    return (
        <>
            <Box sx={{ px: 2, display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                <DynamicBreadcrumb />
                <CustomButton startIcon={<Plus />} sx={{ px: 4 }} onClick={() => setIsOpenModal(true)}>Add Platform</CustomButton>
            </Box>
            <Divider sx={{ mt: 2 }} />

            <Box component="section">
                {false ? <EmptyScreen
                    viewObject={{
                        image: "/icons/paltform-empty-screen.svg",
                        altText: "campaign",
                        title: "No Platforms Added",
                        description:
                            "Please click the button below to add a new Platform.",
                        buttonText: "Add Platform",
                        onButtonClick: () => setIsOpenModal(true),
                    }}
                /> : <PlatformTableWrapper />}

                {isOpenModal && (
                    <PlatformModal isOpenModal={isOpenModal} onClose={() => setIsOpenModal(false)} form={form} />
                )}
            </Box>
        </>
    );
};

export default PlatForm;