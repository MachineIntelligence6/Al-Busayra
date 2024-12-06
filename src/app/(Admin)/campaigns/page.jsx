import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import EmptyScreen from "@/components/Shared-components/EmptyScreen";
import EventCard from "@/components/Shared-components/EventCard";
import { eventData } from "@/utils/campaigns.data";
import { Box, Divider } from "@mui/material";
import React from "react";

const page = () => {
    return (
        <>
            <Box sx={{ px: 2 }}>
                <DynamicBreadcrumb />
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
        </>
    );
};

export default page;
