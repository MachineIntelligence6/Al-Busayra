import CampaignsWrapper from "@/components/Campaigns";
import Breadcrumb from "@/components/Shared-components/BreadCrumb";
import { Box, Divider } from "@mui/material";

const Page = () => {


    return (
        <>
            <Box sx={{ px: 2 }}>
                <Breadcrumb />
            </Box>
            <Divider sx={{ mt: 2 }} />
            <CampaignsWrapper />
        </>
    );
};

export default Page;
