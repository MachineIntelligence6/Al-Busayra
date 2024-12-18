import BasicInfo from "@/components/employees/ViewEmployee/BasicInfo";
import MasonryGrid from "@/components/shared-components/masonry-grid";
import InventoryViewDetailModal from "@/components/shared-components/modals/InventoryViewDetailModal";
import { inventoryViewDetails } from "@/utils/hard-data/inventory-data";
import { Box } from "@mui/material";
import React, { useState } from "react";

const InventoryViewDetails = () => {
    const [viewDetails, setViewDetails] = useState(inventoryViewDetails);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditDetails = () => {
        setIsModalOpen(true)
    };



    return (
        <>

            <MasonryGrid>
                {viewDetails?.map((details) => {
                    return (
                        <Box key={details.id} sx={{ width: "100%", m: 2 }}>
                            <BasicInfo profile={details} onEdit={() => handleEditDetails()} />
                        </Box>
                    )
                })}
            </MasonryGrid>

            {isModalOpen && <InventoryViewDetailModal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Food Permit" />}
        </>
    );
};

export default InventoryViewDetails;
