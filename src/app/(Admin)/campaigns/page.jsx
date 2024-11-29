import CampaignsWrapper from "@/components/Campaigns";
import EmptyScreen from "@/components/Campaigns/EmptyScreen";
import Breadcrumb from "@/components/Shared-components/BreadCrumb";
import EventCard from "@/components/Shared-components/EventCard";
import { eventData } from "@/utils/campaigns.data";
import { Box, Divider } from "@mui/material";

const Page = () => {


    return (
        <>

            {/* <CampaignsWrapper /> */}
            <Box component="div" sx={{ display: "flex", justifyContent: "space-evenly", gap: 4.5, alignItems: "center", flexWrap: "wrap", my: 2, height: '100%', }}>
                { false? eventData.map(event => <EventCard key={event.id} event={event} />) : <EmptyScreen /> }
            </Box >
        </>
    );
};

export default Page;
