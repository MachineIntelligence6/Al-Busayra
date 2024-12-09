"use client"
import React, { useState } from "react";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CampaignCreateModal from "@/components/Shared-components/CampaignCreateModal";
import CustomButton from "@/components/Shared-components/CustomButton";
import EmptyScreen from "@/components/Shared-components/EmptyScreen";
import EventCard from "@/components/Shared-components/EventCard";
import { eventData } from "@/utils/campaigns.data";
import { Box, Divider } from "@mui/material";
import { Plus } from "lucide-react";

const CampaingPage = () => {


    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <DynamicBreadcrumb />
                <CustomButton onClick={() => setShowModal(true)} endIcon={<Plus size={18} />}>Add Campaign</CustomButton>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box component="div">
                <Box component="div" sx={{ display: "flex", justifyContent: "space-evenly", gap: 4.5, alignItems: "center", flexWrap: "wrap", my: 2 }}>
                    {eventData.map(event => <EventCard key={event.id} event={event} />)}
                </Box>

                {/* <EmptyScreen
                viewObject={{
                    image: "/empty-svg/campaign.svg",
                    altText: "campaign",
                    description:
                        "Please click the button below to add your new campaign.",
                    buttonText: "Add Compaign",
                }}
            /> */}
            </Box>

            {showModal && <CampaignCreateModal open={showModal} onClose={() => setShowModal(false)} />}
        </>
    );
};

export default CampaingPage;
